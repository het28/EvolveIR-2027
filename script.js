const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('#site-nav a[href^="#"]')];
window.addEventListener('scroll', () => {
  const active = sections.filter(section => section.getBoundingClientRect().top < 180).pop();
  navLinks.forEach(link => link.removeAttribute('aria-current'));
  if (active) document.querySelector(`#site-nav a[href="#${active.id}"]`)?.setAttribute('aria-current', 'page');
}, { passive: true });
