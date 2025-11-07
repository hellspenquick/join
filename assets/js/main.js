
// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
if (toggle && nav){
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Dropdown
const more = document.querySelector('.more');
if (more){
  const btn = more.querySelector('.more-btn');
  const menu = more.querySelector('.dropdown');
  const show = (v)=>{ menu.style.display = v ? 'block' : 'none'; btn.setAttribute('aria-expanded', v? 'true':'false'); };
  btn?.addEventListener('click', e => { e.stopPropagation(); show(menu.style.display!=='block'); });
  document.addEventListener('click', () => show(false));
}

// Fake form submit
window.fakeSubmit = (e) => {
  e.preventDefault();
  alert('Thanks! This demo does not store data.');
  return false;
}

// Auto-generate TOC for pages that include a <nav class="toc"><div data-toc></div></nav>
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-toc]').forEach(container => {
    const headings = Array.from(document.querySelectorAll('h2, h3'))
      .filter(h => h.id && !h.closest('.toc'));
    const list = document.createElement('div');
    headings.forEach(h => {
      const a = document.createElement('a');
      a.href = `#${h.id}`;
      a.textContent = h.textContent;
      a.style.marginLeft = h.tagName === 'H3' ? '12px' : '0px';
      list.appendChild(a);
    });
    container.appendChild(list);
  });
});
