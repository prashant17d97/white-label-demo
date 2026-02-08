/**
 * transform-css.js
 *
 * Runs as postinstall in the demo app.
 * Handles the :root CSS Modules purity issue:
 *   - theme/styling/iconography: rename .module.css → .css (global, no class rules)
 *   - typography: split into .css (:root vars) + .module.css (class rules only)
 */

const fs = require('fs');
const path = require('path');

const NM = path.resolve(__dirname, '..', 'node_modules', '@white-label');

// 1. Rename theme/styling/iconography .module.css → .css (copy to preserve original)
for (const pkg of ['theme', 'styling', 'iconography']) {
    const src = path.join(NM, pkg, 'generated', `${pkg}.module.css`);
    const dst = path.join(NM, pkg, 'generated', `${pkg}.css`);
    if (fs.existsSync(src)) {
        fs.copyFileSync(src, dst);
        console.log(`  ✓ ${pkg}: .module.css → .css`);
    } else {
        console.warn(`  ⚠ ${pkg}: generated/${pkg}.module.css not found (ORG may not be set)`);
    }
}

// 2. Split typography: :root block → .css, class rules → .module.css
const typoSrc = path.join(NM, 'typography', 'generated', 'typography.module.css');
if (fs.existsSync(typoSrc)) {
    const content = fs.readFileSync(typoSrc, 'utf-8');

    // Extract :root { ... } block
    const rootMatch = content.match(/:root\s*\{[^}]*\}/s);
    const rootCss = rootMatch ? rootMatch[0] + '\n' : '';

    // Remove :root block → class rules only
    const classCss = content.replace(/:root\s*\{[^}]*\}/s, '').trim();

    const cssPath = path.join(NM, 'typography', 'generated', 'typography.css');
    const modulePath = path.join(NM, 'typography', 'generated', 'typography.module.css');

    fs.writeFileSync(cssPath, rootCss);
    fs.writeFileSync(modulePath, classCss);
    console.log('  ✓ typography: split into .css (:root) + .module.css (classes)');
} else {
    console.warn('  ⚠ typography: generated/typography.module.css not found (ORG may not be set)');
}

console.log('✅ CSS transform complete');
