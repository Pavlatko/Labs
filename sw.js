// Service Worker pro PavlatkoLabs
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // Tato část umožňuje offline fungování, zatím ji necháme prázdnou
  e.respondWith(fetch(e.request));
});