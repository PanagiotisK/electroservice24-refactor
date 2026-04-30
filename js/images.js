/**
 * js/images.js — Centralised image URL registry
 *
 * Usage in HTML:  <img data-img="key-name" alt="..." loading="lazy" />
 * The JS resolver in main.js reads this map and sets img.src at runtime.
 *
 * To swap any image site-wide, change only the URL value here.
 */
var IMAGES = {

  /* ── Brand ───────────────────────────────────────────────────── */
  'logo': 'https://electroservice24.gr/wp-content/uploads/2020/04/ELECTROSERVICE-7.png',

  /* ── Homepage ────────────────────────────────────────────────── */
  'hero-main':  'https://www.ny-engineers.com/hs-fs/hubfs/Webp-Images/replace-electrical-panel.webp?width=3500&height=552&name=replace-electrical-panel.webp',
  'about-team': 'https://www.ny-engineers.com/hs-fs/hubfs/Webp-Images/replace-electrical-panel.webp?width=3500&height=552&name=replace-electrical-panel.webp',

  /* ── Service cards  (index.html & services.html) ────────────── */
  'card-vlaves':        'https://images.unsplash.com/photo-1580983230786-ce385a434707?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWxlY3RyaWNhbCUyMGVuZ2luZWVyfGVufDB8fDB8fHww',
  'card-pinakas':       'https://electroservice24.gr/wp-content/uploads/2020/04/allagh-asfaleias-hlektrologs-rele.jpg',
//   'card-pinakas':       'https://images.unsplash.com/photo-1635335874521-7987db781153?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWxlY3RyaWNhbHxlbnwwfHwwfHx8MA%3D%3D',
  'card-rele':          'https://vpproject.gr/wp-content/uploads/2016/08/cititech_img-9-1.jpg',
  'card-keraies':       'https://plus.unsplash.com/premium_photo-1675024368160-5bacaa752300?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'card-thermosifono':  'https://mpakis.gr/wp-content/uploads/2023/02/sintirisi-iliakou-mpakis.gr_-1.jpg',
  'card-fotismos':      'https://www.lumimania.be/guirlande-decorative-exterieure-garland-17-m-15xe27-15w-230v-ip44-img-mi0869_1-fd-11.jpg',
  'card-kouzina':       'https://images.unsplash.com/photo-1723902499540-dd9e0855af07?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

  /* ── Service hero images  (service detail pages) ────────────── */
//   'service-vlaves':       'https://picsum.photos/seed/elec-fault/900/500',
//   'service-pinakas':      'https://picsum.photos/seed/elec-panel/900/500',
//   'service-rele':         'https://picsum.photos/seed/elec-rcd/900/500',
//   'service-keraies':      'https://picsum.photos/seed/elec-antenna/900/500',
//   'service-thermosifono': 'https://picsum.photos/seed/elec-heater/900/500',
//   'service-fotismos':     'https://picsum.photos/seed/elec-lighting/900/500',
//   'service-kouzina':      'https://picsum.photos/seed/elec-stove/900/500',

};
