// Renderiza os ícones do Lucide
lucide.createIcons();

// Função utilitária para aguardar tempo em milissegundos
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// Orquestrador da Animação
async function playOpeningSequence() {
    try {
        const i1 = document.getElementById('icon-1');
        const i2 = document.getElementById('icon-2');
        const i3 = document.getElementById('icon-3');
        const i4 = document.getElementById('icon-4');
        const check = document.getElementById('icon-check');
        const welcome = document.getElementById('welcome-text');
        const signature = document.getElementById('signature');
        const loader = document.getElementById('loader-screen');
        const offlineAlert = document.getElementById('offline-alert');

        // Trava de segurança: Se os ícones não renderizarem, revela o GAS imediatamente
        if (!i1 || !i2 || !i3 || !i4) {
            console.warn("Prevenção ativada: Elementos não encontrados. Revelando o sistema.");
            if (loader) loader.style.display = 'none';
            return;
        }

        // Tempo inicial de respiro
        await sleep(600);

        // MOVIMENTO 2: Troca cruzada com efeito cascata
        i1.style.transform = 'translate(10px, -10px)';
        await sleep(100);
        i2.style.transform = 'translate(10px, 10px)';
        await sleep(100);
        i3.style.transform = 'translate(-10px, -10px)';
        await sleep(100);
        i4.style.transform = 'translate(-10px, 10px)';

        await sleep(500);

        // MOVIMENTO 3: Efeito Estilingue
        i1.style.transform = 'translate(0px, -50px)';
        await sleep(50);
        i2.style.transform = 'translate(50px, 0px)';
        await sleep(50);
        i3.style.transform = 'translate(-50px, 0px)';
        await sleep(50);
        i4.style.transform = 'translate(0px, 50px)';
        
        await sleep(400);

        // MODO OFFLINE: Congela a animação e avisa o usuário
        if (!navigator.onLine) {
            [i1, i2, i3, i4].forEach(icon => icon.classList.add('freeze'));
            offlineAlert.classList.remove('hidden');
            await sleep(50);
            offlineAlert.classList.remove('opacity-0', 'translate-y-4');
            offlineAlert.classList.add('opacity-100', 'translate-y-0');
            return;
        }

        // MOVIMENTO 4 & 5: Choque simultâneo no centro
        [i1, i2, i3, i4].forEach(icon => {
            icon.style.transform = 'translate(0px, 0px)';
            icon.classList.remove('shadow-lg');
        });

        await sleep(300);

        // Oculta os coloridos instantaneamente
        [i1, i2, i3, i4].forEach(icon => icon.style.opacity = '0');

        // O Pop do Check!
        check.classList.remove('scale-0', 'opacity-0');
        check.classList.add('pop-effect', 'opacity-100');
        
        await sleep(200);
        check.classList.remove('pop-effect');
        check.classList.add('pop-settle');

        // Revela textos
        await sleep(300);
        welcome.classList.remove('opacity-0', 'translate-y-4');
        welcome.classList.add('opacity-100', 'translate-y-0');
        
        await sleep(400);
        signature.classList.remove('opacity-0');
        signature.classList.add('opacity-100');

        // FADE OUT DA CORTINA (Revela o GAS)
        await sleep(1500);
        loader.classList.add('opacity-0');
        
        setTimeout(() => {
            loader.style.pointerEvents = 'none';
            loader.classList.add('hidden');
        }, 1000);

    } catch (error) {
        // Fallback de emergência caso haja erro no script
        console.error("Erro na coreografia: ", error);
        const loader = document.getElementById('loader-screen');
        if (loader) loader.style.display = 'none';
    }
}

// Inicia apenas quando toda a página estiver 100% desenhada
document.addEventListener('DOMContentLoaded', () => {
    playOpeningSequence();
    registerServiceWorker();
});

function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('Service Worker Registrado: ', reg.scope))
            .catch(err => console.log('Falha no SW: ', err));
    }
}
