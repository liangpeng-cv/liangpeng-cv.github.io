const list = document.querySelector('#publication-list');
const status = document.querySelector('#publication-status');
const toast = document.querySelector('.toast');
let toastTimer;

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function externalLink(text, url) {
  const link = element('a', '', text);
  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  return link;
}

function notify(text) {
  clearTimeout(toastTimer);
  toast.textContent = text;
  toast.hidden = false;
  toastTimer = setTimeout(() => { toast.hidden = true; }, 3000);
}

async function copyCitation(text, code) {
  try {
    await navigator.clipboard.writeText(text);
    notify('BibTeX copied');
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(code);
    selection.removeAllRanges();
    selection.addRange(range);
    notify('Citation selected. Use your browser copy command.');
  }
}

function renderPaper(paper) {
  const row = element('article', 'paper');
  row.id = paper.id;
  const visual = externalLink('', paper.project || paper.paper);
  visual.className = 'paper-visual' + (paper.image ? '' : ' text-visual');
  visual.dataset.id = paper.id;
  visual.setAttribute('aria-label', paper.title);
  if (paper.image) {
    const image = element('img');
    image.src = paper.image;
    image.alt = paper.alt;
    [image.width, image.height] = paper.imageSize;
    image.loading = 'lazy';
    visual.append(image);
  } else {
    const type = element('div', 'paper-wordmark ' + paper.id);
    type.append(element('b', '', paper.wordmark), element('span', '', paper.visualLabel));
    visual.append(type);
  }
  const content = element('div', 'paper-content');
  const venue = element('p', 'paper-type ' + (paper.type === 'preprint' ? 'preprint' : paper.venueClass || ''), paper.venue);
  const title = element('h3');
  title.append(externalLink(paper.title, paper.paper));
  const authors = element('p', 'authors');
  paper.authors.forEach((name, index) => {
    if (index) authors.append(document.createTextNode(', '));
    const span = element('span', name === 'Liang Peng' ? 'me' : '', name);
    const roles = [];
    if (paper.equal?.includes(name)) roles.push(['*', 'Equal contribution / co-first author']);
    if (paper.corresponding?.[name]) roles.push(['\u2020', paper.corresponding[name]]);
    if (paper.advising?.includes(name)) roles.push(['\u2021', 'Equal advising']);
    roles.forEach(([symbol, description]) => {
      const mark = element('sup', 'author-mark', symbol);
      mark.title = description;
      mark.setAttribute('aria-label', description);
      span.append(mark);
    });
    authors.append(span);
  });
  const links = element('div', 'paper-links');
  links.append(externalLink('Paper', paper.paper));
  if (paper.project) links.append(externalLink('Project', paper.project));
  if (paper.code) links.append(externalLink('Code', paper.code));
  const citation = element('details', 'citation-toggle');
  const summary = element('summary', '', 'BibTeX');
  summary.setAttribute('aria-controls', paper.id + '-citation');
  const panel = element('div', 'citation-panel');
  panel.id = paper.id + '-citation';
  const code = element('pre', '', paper.bibtex);
  const copy = element('button', '', 'Copy citation');
  copy.type = 'button';
  copy.addEventListener('click', () => copyCitation(paper.bibtex, code));
  panel.append(code, copy);
  citation.append(summary, panel);
  links.append(citation);
  content.append(title, authors, venue, links);
  if (paper.description) content.append(element('p', 'paper-description', paper.description));
  row.append(visual, content);
  return row;
}

function render() {
  const papers = window.PUBLICATIONS;
  list.replaceChildren();
  for (const paper of papers) {
    list.append(renderPaper(paper));
  }
  status.textContent = `${papers.length} publications shown`;
}

if (list) {
  render();
  // Publication anchors become available after the list has been rendered.
  if (location.hash) requestAnimationFrame(() => {
    document.getElementById(location.hash.slice(1))?.scrollIntoView();
  });
}
