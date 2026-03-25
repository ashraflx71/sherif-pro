const CACHE_NAME = 'sherif-fix-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/main.js',
  '/images/logo-gold.webp', // شعار الموقع (الأسود والذهبي)
  '/images/offline.html'    // صفحة تظهر لو مفيش نت خالص
];

// تثبيت الـ Service Worker وتخزين الملفات
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// جلب البيانات من الكاش لتسريع التحميل
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
