const CACHE_NAME = 'check-v4';

const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './manifest.json',
    './Favicon.png',
    './Icon180.png',
    './Icon192.png',
    './Icon512.png'
];

// ==========================================
// 1. INSTALAÇÃO DO SERVICE WORKER
// ==========================================
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache) => {
            console.log('[Service Worker] Fazendo cache do App Shell');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// ==========================================
// 2. ATIVAÇÃO DO SERVICE WORKER
// ==========================================
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log('[Service Worker] Limpando cache antigo:', cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// ==========================================
// 3. INTERCEPTAÇÃO DE REDE (FETCH)
// ==========================================
self.addEventListener('fetch', (event) => {
    // Intercepta CDNs (Tailwind, Lucide, Fontes) e salva em cache dinamicamente
    if (event.request.url.includes('tailwindcss') || event.request.url.includes('lucide') || event.request.url.includes('fonts')) {
        event.respondWith(
            caches.match(event.request).then((cachedResponse) => {
                if (cachedResponse) return cachedResponse;
                return fetch(event.request).then((networkResponse) => {
                    const responseClone = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseClone);
                    });
                    return networkResponse;
                }).catch(() => console.log('[Service Worker] Falha ao buscar CDN offline'));
            })
        );
    } else {
        // Estratégia para os arquivos locais
        event.respondWith(
            fetch(event.request).catch(() => {
                console.log('[Service Worker] Offline detectado. Servindo do cache:', event.request.url);
                return caches.match(event.request);
            })
        );
    }
});
