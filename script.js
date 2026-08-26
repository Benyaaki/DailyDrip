const menu={
  favorites:[
    ["Brown Sugar Sweet Cream Cold Brew","Vanilla sweet cream · cold foam","6.5 / 7"],
    ["Lavender Haze Latte","Lavender · vanilla · cold foam","6.5 / 7"],
    ["Salted Caramel Dark Chocolate Mocha","Dark chocolate · caramel · sea salt","7 / 7.5"],
    ["Cookie Butter Crunch Latte","Cookie butter sauce · cold foam · crumble","7 / 7.5"],
    ["Strawberry Breeze Matcha","Strawberry purée · coconut water","7.5 / 8"]],
  espresso:[["Espresso Shot","","1.5 / 2.5"],["Americano","","4.25 / 5"],["Cappuccino","","5.25"],["Caramel Macchiato","","5.75 / 6.25"],["Flat White","","5.25"],["Latte","","5.25 / 5.75"],["Mocha","","5.75 / 6.25"],["Brown Sugar Shaken Espresso","","6.25"]],
  coffee:[["Hot Drip Coffee","","3.5 / 4"],["Iced Cold Brew","","4.25 / 5"],["Matcha","","6 / 7"],["Herbal Tea","","3.75 / 4.25"],["Iced Tea","","3.75 / 4.25"]],
  kiddos:[["Lemonade","","3.75 / 4.25"],["Italian Soda","","3.75 / 4.25"],["Chocolate Milk","","4 / 4.5"],["Hot Chocolate","","4.25 / 4.75"],["Steamer","","4.25 / 4.75"]]
};
const translations={
  en:{"nav.story":"Our rig","nav.menu":"Menu","nav.find":"Find us","nav.book":"Book the trailer","hero.eyebrow":"Hilton Head · Bluffton · On the move","hero.line1":"Coffee","hero.line2":"in motion.","hero.lede":"Specialty coffee, sealed fresh and served wherever the Lowcountry gathers.","hero.primary":"Find today's stop","hero.secondary":"Explore the menu","story.title":"A full coffee bar.<br><em>Just with wheels.</em>","story.body":"Built inside a bright, compact trailer, The Daily Drip brings the whole ritual along—from freshly ground espresso to its signature sealed can.","process.title":"Made here.<br>Sealed here.<br><em>Gone with you.</em>","process.oneTitle":"Build","process.one":"Espresso, milk and flavor layered to order.","process.twoTitle":"Seal","process.two":"A pull-tab lid locks in the moment.","process.threeTitle":"Drip","process.three":"Cold, portable and ready for wherever.","menu.title":"Pick your<br><em>daily drip.</em>","menu.note":"Prices shown are based on the current public menu reference and should be confirmed with the business.","menu.favorites":"House favorites","menu.espresso":"Espresso","menu.coffee":"Coffee + tea","menu.kiddos":"For the kiddos","menu.flavors":"Flavor shelf","find.title":"No fixed address.<br><em>That’s the point.</em>","find.body":"The trailer moves between Hilton Head, Bluffton and local events. Weekly stops are announced on Instagram.","find.cta":"See this week's stops","book.title":"Good coffee<br>draws a crowd.","book.body":"Bring the trailer to markets, offices, celebrations and community events.","book.cta":"BOOK<br>THE RIG","footer.follow":"Follow the trailer, not a pin."},
  es:{"nav.story":"El tráiler","nav.menu":"Menú","nav.find":"Encuéntranos","nav.book":"Reserva el tráiler","hero.eyebrow":"Hilton Head · Bluffton · En movimiento","hero.line1":"Café","hero.line2":"en movimiento.","hero.lede":"Café de especialidad, sellado fresco y servido donde se reúne el Lowcountry.","hero.primary":"Encuentra la parada de hoy","hero.secondary":"Explora el menú","story.title":"Una cafetería completa.<br><em>Pero con ruedas.</em>","story.body":"Dentro de un tráiler luminoso y compacto, The Daily Drip lleva el ritual completo: desde el espresso recién molido hasta su característica lata sellada.","process.title":"Hecho aquí.<br>Sellado aquí.<br><em>Listo para llevar.</em>","process.oneTitle":"Preparamos","process.one":"Espresso, leche y sabor, preparados al momento.","process.twoTitle":"Sellamos","process.two":"Una tapa abre-fácil conserva el momento.","process.threeTitle":"Disfrutas","process.three":"Frío, portátil y listo para acompañarte.","menu.title":"Elige tu<br><em>daily drip.</em>","menu.note":"Los precios provienen del menú público visible y deben confirmarse directamente con el negocio.","menu.favorites":"Favoritos de la casa","menu.espresso":"Espresso","menu.coffee":"Café + té","menu.kiddos":"Para los niños","menu.flavors":"Sabores","find.title":"Sin dirección fija.<br><em>Esa es la idea.</em>","find.body":"El tráiler se mueve entre Hilton Head, Bluffton y eventos locales. Las paradas semanales se anuncian en Instagram.","find.cta":"Mira las paradas de esta semana","book.title":"El buen café<br>atrae a todos.","book.body":"Lleva el tráiler a mercados, oficinas, celebraciones y eventos comunitarios.","book.cta":"RESERVA<br>EL TRÁILER","footer.follow":"Sigue al tráiler, no a una dirección."}
};
const list=document.querySelector('.menu-list');
function renderMenu(type){list.innerHTML=menu[type].map(i=>`<article class="menu-item"><h3>${i[0]}</h3><strong>$${i[2]}</strong>${i[1]?`<p>${i[1]}</p>`:''}</article>`).join('')}
renderMenu('favorites');
document.querySelectorAll('.menu-tabs button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelector('.menu-tabs .active').classList.remove('active');btn.classList.add('active');renderMenu(btn.dataset.filter)}));
let language='en';
document.querySelector('.lang').addEventListener('click',()=>{language=language==='en'?'es':'en';document.documentElement.lang=language;document.querySelector('.lang').textContent=language==='en'?'ES':'EN';document.querySelectorAll('[data-i18n]').forEach(el=>{const value=translations[language][el.dataset.i18n];if(value)el.innerHTML=value})});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.14});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
let ticking=false;function onScroll(){if(!ticking){requestAnimationFrame(()=>{const y=Math.min(scrollY,innerHeight);document.documentElement.style.setProperty('--hero-scale',1.04+y/innerHeight*.18);document.querySelector('.island').style.transform=`scale(${scrollY>80?.97:1})`;ticking=false});ticking=true}}addEventListener('scroll',onScroll,{passive:true});
const menuToggle=document.querySelector('.menu-toggle');
const mobileMenu=document.querySelector('.mobile-menu');
function setMobileMenu(open){
  menuToggle.setAttribute('aria-expanded',String(open));
  menuToggle.setAttribute('aria-label',open?'Close menu':'Open menu');
  mobileMenu.setAttribute('aria-hidden',String(!open));
  mobileMenu.classList.toggle('open',open);
  document.body.classList.toggle('menu-open',open);
}
menuToggle.addEventListener('click',()=>setMobileMenu(menuToggle.getAttribute('aria-expanded')!=='true'));
mobileMenu.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',()=>setMobileMenu(false)));
document.addEventListener('keydown',event=>{if(event.key==='Escape')setMobileMenu(false)});
