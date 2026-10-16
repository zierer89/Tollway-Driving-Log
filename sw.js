const CACHE='tollway-driving-v8';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./manifest.webmanifest'])))});
self.addEventListener('activate',e=>e.waitUntil(Promise.all([self.clients.claim(),caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))])));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return; if(e.request.mode==='navigate'||e.request.url.endsWith('/index.html')){e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));return;}e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)))});
