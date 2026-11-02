export default function decorate(block) {
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const [number, caption, description] = [...row.children];
    const li = document.createElement('li');
    if (number) number.className = 'stats-number';
    if (caption) caption.className = 'stats-caption';
    if (description) description.className = 'stats-description';
    li.append(...[number, caption, description].filter(Boolean));
    ul.append(li);
  });
  block.replaceChildren(ul);
}
