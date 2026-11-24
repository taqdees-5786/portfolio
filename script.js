/* Portfolio interactions: photo previews, skill filter, draggable objects, scroll reveal, hero butterflies. */
document.querySelectorAll('.photo input').forEach(function(i){
  i.addEventListener('change',function(){
    var f=i.files[0];if(!f)return;
    var r=new FileReader();r.onload=function(){var l=i.parentNode;l.style.backgroundImage='url('+r.result+')';l.classList.add('has')};
    r.readAsDataURL(f);
  });
});
var chips=document.querySelectorAll('.chip'),skills=document.querySelectorAll('.skill');
chips.forEach(function(ch){
  ch.addEventListener('click',function(){
    chips.forEach(function(x){x.setAttribute('aria-pressed','false')});
    ch.setAttribute('aria-pressed','true');
    var f=ch.getAttribute('data-f');
    skills.forEach(function(s){s.classList.toggle('hide',f!=='all'&&s.getAttribute('data-c')!==f)});
  });
});
document.querySelectorAll('.fl').forEach(function(el){
  var sx,sy,ox,oy;
  el.addEventListener('pointerdown',function(e){
    el.setPointerCapture(e.pointerId);el.classList.add('drag');
    sx=e.clientX;sy=e.clientY;
    ox=parseFloat(el.style.getPropertyValue('--dx'))||0;oy=parseFloat(el.style.getPropertyValue('--dy'))||0;
  });
  el.addEventListener('pointermove',function(e){
    if(!el.classList.contains('drag'))return;
    el.style.setProperty('--dx',(ox+e.clientX-sx)+'px');
    el.style.setProperty('--dy',(oy+e.clientY-sy)+'px');
  });
  ['pointerup','pointercancel'].forEach(function(n){el.addEventListener(n,function(){el.classList.remove('drag')})});
});
(function(){
  var rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
  var els=document.querySelectorAll('.bubble,.collage,.sub-h,.proj .photo,.proj>div,.filters,.cloud,.q,.stamp,.intro,section h2,footer .wrap>*');
  els.forEach(function(e){e.classList.add('rv')});
  els.forEach(function(e){var n=0,x=e.previousElementSibling;while(x){if(x.classList.contains('rv'))n++;x=x.previousElementSibling}e.style.setProperty('--d',Math.min(n,4)*.08+'s')});
  var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.08,rootMargin:'0px 0px -3% 0px'});
  els.forEach(function(e){rm?e.classList.add('in'):io.observe(e)});
  if(rm)return;
  var hero=document.getElementById('top'),L=document.getElementById('bfl'),cols=['var(--accent)','var(--rose)','var(--gold-d)'],bs=[],px=0,py=0,last=0,vis=true;
  new IntersectionObserver(function(e){vis=e[0].isIntersecting}).observe(hero);
  hero.addEventListener('pointermove',function(e){var r=L.getBoundingClientRect();px=e.clientX-r.left;py=e.clientY-r.top;last=Date.now()});
  var wing='M30 25C20 2 4 4 6 18c1 10 12 12 24 7zM30 27C14 28 8 42 18 46c8 3 12-8 12-19z';
  for(var i=0;i<3;i++){
    var d=document.createElement('div');d.className='bf';
    d.innerHTML='<svg viewBox="0 0 60 50"><g class="wl"><path d="'+wing+'" fill="'+cols[i]+'"/></g><g class="wr"><path transform="translate(60 0) scale(-1 1)" d="'+wing+'" fill="'+cols[i]+'"/></g><ellipse cx="30" cy="26" rx="2" ry="11" fill="var(--ink)"/></svg>';
    L.appendChild(d);
    bs.push({el:d,x:Math.random()*400,y:Math.random()*300,tx:0,ty:0,a:i*2.1,r:0,wt:0});
  }
  (function tick(){
    if(vis){
      var now=Date.now(),W=L.clientWidth,H=L.clientHeight;
      bs.forEach(function(b,i){
        b.a+=.012+i*.003;
        if(now-last<3000){b.tx=px+Math.cos(b.a)*(70+i*30);b.ty=py+Math.sin(b.a*1.3)*(60+i*26)}
        else if(now>b.wt){b.tx=Math.random()*W;b.ty=Math.random()*H;b.wt=now+2500+Math.random()*2500}
        var dx=b.tx-b.x,dy=b.ty-b.y;b.x+=dx*.018;b.y+=dy*.018;
        var ang=Math.atan2(dy,dx)*180/Math.PI+90;
        b.r+=(((ang-b.r)%360+540)%360-180)*.08;
        b.el.style.transform='translate('+(b.x-20)+'px,'+(b.y-17)+'px) rotate('+b.r+'deg)';
      });
    }
    requestAnimationFrame(tick);
  })();
})();
(function () {
  var root = document.documentElement,
      themeBtn = document.getElementById('themeBtn'),
      burger = document.getElementById('burger'),
      menu = document.getElementById('menu');

  function label(t) {
    themeBtn.setAttribute('aria-label', t === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }
  label(root.dataset.theme || 'light');
  themeBtn.addEventListener('click', function () {
    var t = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = t;
    try { localStorage.setItem('theme', t); } catch (e) {}
    label(t);
  });

  function toggleMenu(open) {
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menu.classList.toggle('open', open);
  }
  burger.addEventListener('click', function () {
    toggleMenu(burger.getAttribute('aria-expanded') !== 'true');
  });
  menu.addEventListener('click', function (e) { if (e.target.tagName === 'A') toggleMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') toggleMenu(false); });
  document.addEventListener('click', function (e) { if (!e.target.closest('nav')) toggleMenu(false); });
  matchMedia('(min-width:761px)').addEventListener('change', function (e) { if (e.matches) toggleMenu(false); });
})();