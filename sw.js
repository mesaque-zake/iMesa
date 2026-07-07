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
// 1. INSTALAÇÃO DO SERVICE WORKER (Download do App Shell)
// ==========================================
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache) => {
            console.log('[Service Worker] Fazendo cache do App Shell local...');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// ==========================================
// 2. ATIVAÇÃO DO SERVICE WORKER (Limpeza de Caches Antigos)
// ==========================================
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log('[Service Worker] Removendo cache antigo:', cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// ==========================================
// 3. INTERCEPTAÇÃO DE REDE (FETCH STRATEGIES)
// ==========================================
self.addEventListener('fetch', (event) => {
    // ESTRATÉGIA CACHE-FIRST: Intercepta e salva em cache dinamicamente as CDNs externas (Tailwind, Lu
