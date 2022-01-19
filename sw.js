self.addEventListener('install',function(event){
  console.log('Installing service worker...');
  event.waitUntil(
caches.open('static').then(function(cache){
cache.addAll([
  './weather.html',
  './weather.css',
  './weather.js',
 'https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=34411bdfae2adb88c9c2c3bcfc130ef4',
 'https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=34411bdfae2adb88c9c2c3bcfc130ef4'

]);  
}));
});
self.addEventListener('activate',function(){
console.log('Service Worker activated');
});
self.addEventListener('fetch',function(event){
event.respondWith(
  catches.match(event.request)
  .then(function(res)
  {
    if(res)
    {
      return res;
    }
    else
    {
      return fetch(event.request);
    }
  })
  );
});












/*const CACHE_NAME = 'Demov1'; //increment this when updating website
const urlsToCache = [
  './index.html',
  './manifest.webmanifest',
  './sw.js',
];

const self = this;

// Install SW
self.addEventListener('install', (event) => {
  // start caching assets
  console.log('Installing service worker...')
  event.waitUntil(
    // open a new cache space
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Service Worker Installed!!');

      return cache.addAll(urlsToCache);
    })
  );
});

// Listen for requests
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(() => {
      return fetch(event.request).catch(() => caches.match('index.html'));
    })
  );
});

// Activate the SW
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);

  event.waitUntil(
    // delete any other cache which is not the current version
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
*/
