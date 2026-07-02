const CACHE_NAME = 'check-v1';

// Arquivos do nosso Front-end (A Casca)
const SHELL_ASSETS = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './manifest.json',
    './assets/Favicon.png',
    './assets/Icon180.png',
    './assets/Icon192.png',
    './assets/Icon512.png'
];

// Instalação: Salva a estrutura visual no celular
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(SHELL_ASSETS))
    );
});

// Interceptação: Usa o cache para carregar a abertura sem gastar internet
self.addEventListener('fetch', event => {
    // Ignora requisições do App Script (deixe o GAS rodar sempre na rede)
    if (!event.request.url.startsWith(self.location.origin)) {
        return;
    }

    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            return cachedResponse || fetch(event.request);
        })
    );
});

// Limpa caches antigos em futuras atualizações suas
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.map(key => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        })
    );
});
