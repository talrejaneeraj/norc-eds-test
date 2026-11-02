import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      /* authors leave the image cell empty when a card has no image */
      if (!div.children.length && !div.textContent.trim()) div.remove();
      else if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
      else div.className = 'cards-card-body';
    });

    /* image is optional: text-only cards get their own styling */
    if (!li.querySelector('.cards-card-image')) li.classList.add('cards-card-no-image');

    /* a paragraph directly before the title is the eyebrow (category or sponsor) */
    const body = li.querySelector('.cards-card-body');
    const first = body?.firstElementChild;
    if (first?.tagName === 'P' && first.nextElementSibling?.matches('h2, h3, h4, h5, h6')) {
      first.className = 'cards-card-eyebrow';
    }

    /* a card with exactly one link is clickable as a whole */
    const links = li.querySelectorAll('a[href]');
    if (links.length === 1) {
      li.classList.add('cards-card-linked');
      links[0].classList.add('cards-card-link');
    }
    ul.append(li);
  });
  ul.querySelectorAll('picture > img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.replaceChildren(ul);
}
