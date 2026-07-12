export function resetScrollInstant() {
  const html = document.documentElement;
  const body = document.body;

  html.style.scrollBehavior = 'auto';
  body.style.scrollBehavior = 'auto';
  window.scrollTo(0, 0);
  html.scrollTop = 0;
  body.scrollTop = 0;
  html.style.scrollBehavior = '';
  body.style.scrollBehavior = '';
}
