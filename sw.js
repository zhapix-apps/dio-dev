self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// Fetch handler is required for installability checks in many browsers.
self.addEventListener("fetch", () => {
  // Network-first pass-through for now; caching strategy can be added later.
});
