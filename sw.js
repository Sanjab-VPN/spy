// فعال‌سازی سریع سرویس‌ورکر
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// مدیریت درخواست‌ها
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
