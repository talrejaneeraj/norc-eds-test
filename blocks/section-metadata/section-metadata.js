import { readBlockConfig, toCamelCase, toClassName } from '../../scripts/aem.js';

/**
 * Applies section metadata for local html-folder previews.
 * On aem.page / aem.live the pipeline removes this table before the page loads.
 * @param {Element} block The section-metadata block element
 */
export default function decorate(block) {
  const section = block.closest('.section');
  const config = readBlockConfig(block);
  Object.entries(config).forEach(([key, value]) => {
    if (key === 'style') {
      value.split(',').map((s) => toClassName(s.trim())).filter(Boolean)
        .forEach((s) => section.classList.add(s));
    } else {
      section.dataset[toCamelCase(key)] = value;
    }
  });
  block.closest('.section-metadata-wrapper')?.remove();
}
