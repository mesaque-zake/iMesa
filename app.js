// ==========================================
// 1. ESTADO GLOBAL E SINCRO DE CARREGAMENTO
// ==========================================
let iframeLoaded = false;
let deferredPrompt;
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// Monitora se o iframe do iMesa terminou de carregar nos servidores do Google
window.addEventListener('DOMContentLoaded', () => {
    const iframe = document.getElementById('gas-frame');
    if (iframe) {
        iframe.addEventListener('load', () => {
            console.log("[PWA] iMesa carregado com sucesso.");
            iframeLoaded = true;
        });
    }
});

// ==========================================
// 2. COREOGRAFIA DE ABERTURA (PENTÁGONO ORBITAL)
// ==========================================
async function playOpeningSequence() {
    console.log("1. Maestro posicionado. Preparando o Pentágono...");
    
    try {
        lucide.createIcons();
        console.log("2. Ícones renderizados com sucesso.");

        const i1 = document.getElementById('icon-1');
        const i2 = document.getElementById('icon-2');
        const i3 = document.getElementById('icon-3');
        const i4 = document.getElementById('icon-4');
        const i5 = document.getElementById('icon-5'); // Módulo Ways (Fúcsia)
        const check = document.getElementById('icon-check');
        const welcome = document.getElementById('welcome-text');
        const signature = document.getElementById('signature');
        const loader = document.getElementById('loader-screen');
        const offlineAlert = document.getElementById('offline-alert');
        const glowContainer = document.getElementById('glow-container');

        if (!i1 || !i5 || !check) {
            console.log("ERRO: Elementos do Pentágono não encontrados. Revelando sistema.");
            if (loader) loader.style.display = 'none';
            return;
        }

        // Definição física das coordenadas de órbita circular (Pentágono de raio 55px)
        const pos1 = 'translate(0px, -55px)';    // Topo (0º)
        const pos2 = 'translate(52px, -17px)';   // Direita Superior (72º)
        const pos3 = 'translate(32px, 45px)';    // Direita Inferior (144º)
        const pos4 = 'translate(-32px, 45px)';   // Esquerda Inferior (216º)
        const pos5 = 'translate(-52px, -17px)';  // Esquerda Superior (288º)

        console.log("3. Iniciando a dança orbital!");
        await sleep(500);

        // Movimento 2: Giro 1 (Avança 1 casa no sentido horário)
        i1.style.transform = pos2;
        i2.style.transform = pos3;
        i5.style.transform = pos4;
        i3.style.transform = pos5;
        i4.style.transform = pos1;
        await sleep(600);

        // Movimento 3: Giro 2 (Avança mais 1 casa no sentido horário)
        i1.style.transform = pos3;
        i2.style.transform = pos4;
        i5.style.transform = pos5;
        i3.style.transform = pos1;
        i4.style.transform = pos2;
        
        signature.classList.remove('opacity-0');
        signature.classList.add('opacity-100');
        await sleep(600);

        // Movimento 4: Giro 3 (Avança mais 1 casa)
        i1.style.transform = pos4;
        i2.style.transform = pos5;
        i5.style.transform = pos1;
        i3.style.transform = pos2;
        i4.style.transform = pos3;
        await sleep(600);

        // ==========================================
        // CENA ALTERNATIVA: OFFLINE (Repulsão Pentagonal)
        // ==========================================
        if (!navigator.onLine) {
            console.log("Status: Sem internet. Repulsão circular.");
            
            [i1, i2, i3, i4, i5].forEach(icon => icon.classList.add('freeze'));
            
            // Explode os 5 ícones para fora do centro em seus respectivos ângulos com precisão geométrica
            i1.style.transform = 'translate(0px, -160px) rotate(0deg) scale(0.7)';
            i2.style.transform = 'translate(152px, -50px) rotate(72deg) scale(0.7)';
            i5.style.transform = 'translate(94px, 130px) rotate(144deg) scale(0.7)';
            i3.style.transform = 'translate(-94px, 130px) rotate(216deg) scale(0.7)';
            i4.style.transform = 'translate(-152px, -50px) rotate(288deg) scale(0.7)';

            offlineAlert.classList.remove('hidden');
            await sleep(100);
            offlineAlert.classList.remove('opacity-0', 'scale-95');
            offlineAlert.classList.add('opacity-100', 'scale-100');
            return; 
        }

        // ==========================================
        // CENA PRINCIPAL: A FUSÃO E REVELAÇÃO REATIVA
        // ==========================================
        // 1. Os 5 blocos coloridos mergulham e encolhem no centro de gravidade
        [i1, i2, i3, i4, i5].forEach(icon => {
            icon.style.transform = 'translate(0px, 0px) rotate(-180deg) scale(0.2)';
            icon.style.opacity = '0';
        });

        // 2. Revela a Aura Galáctica Dançante na periferia (65px) de forma muito suave e gradual
        if (glowContainer) {
            glowContainer.classList.remove('hidden');
            await sleep(50); // Delay sutil para permitir a renderização da div antes de transicionar a opacidade
            glowContainer.classList.remove('opacity-0');
            glowContainer.classList.add('opacity-100');
        }

        // 3. O SVG de fusão surge engolindo a todos instantaneamente
        check.style.opacity = '1';
        check.style.transform = 'scale(1.15)';
        
        await sleep(350); 
        check.style.transform = 'scale(1)'; // Acomodação visual (Settle)

        await sleep(200);

        // Revela o título "Check!"
        welcome.classList.remove('opacity-0', 'translate-y-4');
        welcome.classList.add('opacity-100', 'translate-y-0');
        
        // 4. Sincronização Inteligente de Carregamento (Evita a tela branca do iframe)
        // Aguarda até o iframe do Google estar realmente pronto ou dá timeout após 15 segundos
        let timeoutCounter = 0;
        while (!iframeLoaded && timeoutCounter < 30) {
            console.log("[PWA] Aguardando o carregamento interno do iMesa...");
            await sleep(500);
            timeoutCounter++;
        }

        console.log("5. iMesa pronto. Removendo Splash Screen.");
        await sleep(1000); // Garante a permanência estável da aura por tempo confortável
        loader.classList.add('opacity-0');
        
        setTimeout(() => {
            loader.style.pointerEvents = 'none';
            loader.classList.add('hidden');
        }, 1000);

    } catch (error) {
        console.error("Erro na coreografia: ", error);
        const loader = document.getElementById('loader-screen');
        if (loader) loader.style.display = 'none';
    }
}

// ==========================================
// 3. REGISTRO DO SW
// ==========================================
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('SW Registrado: ', reg.scope))
            .catch(err => console.log('Falha no SW: ', err));
    }
}

// ==========================================
// 4. INSTALAÇÃO PWA
// ==========================================
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    const installBtn = document.getElementById('install-btn');
    if (installBtn) {
        installBtn.classList.remove('hidden');
        setTimeout(() => installBtn.classList.remove('opacity-0', 'translate-y-10'), 50);
    }
});

window.installPWA = async () => {
    if (!deferredPrompt) return;
    
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`Escolha: ${outcome}`);
    
    deferredPrompt = null;
    const installBtn = document.getElementById('install-btn');
    if (installBtn) {
        installBtn.classList.add('opacity-0', 'translate-y-10');
        setTimeout(() => installBtn.classList.add('hidden'), 300);
    }
};

// ==========================================
// 5. DETECÇÃO E DIRETRIZES IOS
// ==========================================
function checkIOS() {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const isStandalone = window.navigator.standalone || window.matchMedia('(display-mode: standalone)').matches;

    if (isIOS && !isStandalone) {
        const iosPrompt = document.getElementById('ios-prompt');
        if (iosPrompt) {
            iosPrompt.classList.remove('hidden');
            setTimeout(() => iosPrompt.classList.remove('opacity-0', 'translate-y-10'), 50);
            
            setTimeout(() => {
                iosPrompt.classList.add('opacity-0', 'translate-y-10');
                setTimeout(() => iosPrompt.classList.add('hidden'), 300);
            }, 10000);
        }
    }
}

// ==========================================
// 6. PONTE DE COMUNICAÇÃO (POSTMESSAGE) & HISTÓRICO
// ==========================================
// Registra estados do histórico para o PWA pai controlar o botão voltar físico do dispositivo
window.addEventListener('DOMContentLoaded', () => {
    window.history.replaceState({ state: 'pwa_base' }, '');
    window.history.pushState({ state: 'pwa_active' }, '');
});

window.addEventListener('popstate', (event) => {
    // Ao clicar no "voltar" nativo do celular, envia a mensagem para o iframe do iMesa recuar internamente
    const iframe = document.getElementById('gas-frame');
    if (iframe && iframe.contentWindow) {
        console.log("[PWA] Redirecionando ação 'Voltar' para o iMesa...");
        iframe.contentWindow.postMessage({ action: 'back' }, '*');
    }
    
    // Mantém a pilha do histórico travada no PWA pai para não fechar o app de vez
    window.history.pushState({ state: 'pwa_active' }, '');
});

// Escuta mensagens vindas do iMesa (ex: quando o motorista clica em voltar na Home do iMesa)
window.addEventListener('message', (event) => {
    if (event.data && event.data.action === 'exit_app') {
        console.log("[PWA] iMesa solicitou fechamento. Encerrando aplicação.");
        window.close();
    }
});

// ==========================================
// 7. GATILHO DE BOOT
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        playOpeningSequence();
        registerServiceWorker();
        checkIOS();
    }, 100);
});
