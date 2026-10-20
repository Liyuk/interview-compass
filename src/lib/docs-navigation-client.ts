// Shared post-parse behavior. Small inline adapters only establish the pre-paint state.
for (const root of document.querySelectorAll<HTMLDetailsElement>('[data-wiki-disclosure],[data-wiki-outline]')) {
  const outline = root.hasAttribute('data-wiki-outline');
  const summary = root.querySelector<HTMLElement>(':scope > summary');
  const media = matchMedia(outline ? '(max-width:1100px)' : '(max-width:760px)');
  media.addEventListener('change', () => {root.open=!media.matches;summary?.setAttribute('aria-expanded',String(root.open));});
  root.addEventListener('toggle', () => summary?.setAttribute('aria-expanded',String(root.open)));
  root.addEventListener('keydown',event=>{if(event.key==='Escape'&&media.matches&&root.open){root.open=false;summary?.focus();}});
  if(!outline || !('IntersectionObserver' in window)) continue;
  const links=[...root.querySelectorAll<HTMLAnchorElement>('[data-outline-link]')];
  const sections=links.map(link=>document.getElementById(link.getAttribute('href')!.slice(1))).filter((node): node is HTMLElement=>Boolean(node));
  const update=()=>{
    let current=sections[0];
    for(const section of sections) if(section.getBoundingClientRect().top<=140) current=section;
    for(const link of links) {
      if(link.getAttribute('href')===`#${current?.id}`) link.setAttribute('aria-current','location');
      else link.removeAttribute('aria-current');
    }
  };
  const observer=new IntersectionObserver(update,{rootMargin:'-5% 0px -65% 0px'});
  for(const section of sections) observer.observe(section);
  update();
}
