/**
 * CSS Cleanup Script for zeena.min.css
 *
 * Removes confirmed unused template variant CSS blocks.
 * Only removes selectors matching verified-unused prefixes.
 */

import { readFileSync, writeFileSync, unlinkSync } from 'fs';
import { execSync } from 'child_process';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const cssPath = join(ROOT, 'public/assets/css/zeena.min.css');

let css = readFileSync(cssPath, 'utf-8');
const originalSize = Buffer.byteLength(css, 'utf-8');
console.log(`Original size: ${originalSize} bytes`);

// Confirmed unused prefixes (verified not in any .tsx file):
const UNUSED_PREFIXES = [
  'portfolio-two',
  'section-title-two',
  'section-title-three',
];

function shouldRemoveSelector(selector) {
  const s = selector.toLowerCase();
  for (const prefix of UNUSED_PREFIXES) {
    const dotPrefix = '.' + prefix;
    if (s.includes(dotPrefix + '__') ||
        s.includes(dotPrefix + '-') ||
        s.includes(dotPrefix + ' ') ||
        s.includes(dotPrefix + ',') ||
        s.includes(dotPrefix + '{') ||
        s.includes(dotPrefix + ':') ||
        s.includes(dotPrefix + '.') ||
        s.endsWith(dotPrefix) ||
        s === dotPrefix) {
      return true;
    }
  }
  return false;
}

function findClosingBrace(text, openPos) {
  let depth = 0;
  for (let j = openPos; j < text.length; j++) {
    if (text[j] === '{') depth++;
    else if (text[j] === '}') {
      depth--;
      if (depth === 0) return j;
    }
  }
  return -1;
}

function removeUnusedRules(cssText, depth = 0) {
  let result = '';
  let i = 0;
  let removedChars = 0;
  let removedCount = 0;

  while (i < cssText.length) {
    if (' \n\r\t'.includes(cssText[i])) {
      result += cssText[i];
      i++;
      continue;
    }

    // Comments
    if (cssText[i] === '/' && cssText[i + 1] === '*') {
      const commentEnd = cssText.indexOf('*/', i + 2);
      if (commentEnd === -1) { result += cssText.substring(i); break; }
      result += cssText.substring(i, commentEnd + 2);
      i = commentEnd + 2;
      continue;
    }

    // @charset
    if (cssText.substring(i, i + 8) === '@charset') {
      const semi = cssText.indexOf(';', i);
      result += cssText.substring(i, semi + 1);
      i = semi + 1;
      continue;
    }

    // @font-face
    if (cssText.substring(i, i + 10) === '@font-face') {
      const braceStart = cssText.indexOf('{', i);
      const braceEnd = findClosingBrace(cssText, braceStart);
      result += cssText.substring(i, braceEnd + 1);
      i = braceEnd + 1;
      continue;
    }

    // @keyframes
    if (cssText.substring(i, i + 10) === '@keyframes' || cssText.substring(i, i + 18) === '@-webkit-keyframes') {
      const braceStart = cssText.indexOf('{', i);
      const braceEnd = findClosingBrace(cssText, braceStart);
      const fullRule = cssText.substring(i, braceEnd + 1);
      if (shouldRemoveSelector(cssText.substring(i, braceStart))) {
        removedChars += fullRule.length;
        removedCount++;
      } else {
        result += fullRule;
      }
      i = braceEnd + 1;
      continue;
    }

    // @media
    if (cssText.substring(i, i + 6) === '@media') {
      const braceStart = cssText.indexOf('{', i);
      const braceEnd = findClosingBrace(cssText, braceStart);
      const mediaQuery = cssText.substring(i, braceStart + 1);
      const mediaBody = cssText.substring(braceStart + 1, braceEnd);
      const cleanedBody = removeUnusedRules(mediaBody, depth + 1);
      if (cleanedBody.trim().length === 0) {
        removedChars += (braceEnd + 1 - i);
        removedCount++;
      } else {
        result += mediaQuery + cleanedBody + '}';
      }
      i = braceEnd + 1;
      continue;
    }

    // Other @ rules without braces
    if (cssText[i] === '@') {
      const braceStart = cssText.indexOf('{', i);
      const semiPos = cssText.indexOf(';', i);
      if (semiPos !== -1 && (braceStart === -1 || semiPos < braceStart)) {
        result += cssText.substring(i, semiPos + 1);
        i = semiPos + 1;
        continue;
      }
      if (braceStart !== -1) {
        const braceEnd = findClosingBrace(cssText, braceStart);
        result += cssText.substring(i, braceEnd + 1);
        i = braceEnd + 1;
        continue;
      }
    }

    // Regular rule
    const braceStart = cssText.indexOf('{', i);
    if (braceStart === -1) { result += cssText.substring(i); break; }

    const selector = cssText.substring(i, braceStart).trim();
    const braceEnd = findClosingBrace(cssText, braceStart);
    if (braceEnd === -1) { result += cssText.substring(i); break; }

    const fullRule = cssText.substring(i, braceEnd + 1);
    if (shouldRemoveSelector(selector)) {
      removedChars += fullRule.length;
      removedCount++;
    } else {
      result += fullRule;
    }
    i = braceEnd + 1;
  }

  if (depth === 0) {
    console.log(`Removed ${removedCount} rules (${removedChars} chars)`);
  }
  return result;
}

console.log('Removing unused variant CSS rules...');
css = removeUnusedRules(css);

const tmpPath = join(ROOT, 'public/assets/css/zeena.tmp.css');
writeFileSync(tmpPath, css, 'utf-8');

console.log('Re-minifying with csso...');
execSync(`npx csso "${tmpPath}" --output "${cssPath}"`, { cwd: ROOT });
unlinkSync(tmpPath);

const finalSize = Buffer.byteLength(readFileSync(cssPath, 'utf-8'), 'utf-8');
const saved = originalSize - finalSize;
console.log(`\nResult: ${originalSize} → ${finalSize} bytes (saved ${saved} bytes / ${(saved / originalSize * 100).toFixed(1)}%)`);
