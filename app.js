/**
 * ==========================================
 * MOTOR LÓGICO PRINCIPAL DO PWA (CORE)
 * ORQUESTRADOR DA MUTAÇÃO E VÓRTICE (V7)
 * ==========================================
 */

let iframeLoaded = false;
let deferredPrompt = null;
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// Monitorização do carregamento do GAS no segundo plano
window.addEventListener('DOMContentLoaded', () => {
    const iframe = document.getElementById('gas-frame');
    if (iframe) {
        iframe.addEventListener('load', () => {
            console.log("[PWA] Sistema operacional carregado em background.");
            iframeLoaded = true;
        });
    }
});

// ==========================================
// COREOGRAFIA DE ABERTURA CINEMATOGRÁFICA
// ==========================================
async function playOpeningSequence() {
    console.log("[PWA] Início da sequência de animação...");
    
    try {
        lucide.createIcons();

        // Mapeamento dos Atores da Dança Inicial
        const iA = document.getElementById('icon-A');
        const iB = document.getElementById('icon-B');
        const iC = document.getElementById('icon-C');
        const iD = document.getElementById('icon-D');
        const iE = document.getElementById('icon-E');
        const iF = document.getElementById('icon-F');
        const iG = document.getElementById('icon-G');
        const iH = document.getElementById('icon-H');
        
        // Mapeamento do Bloco Monolítico e Elementos de Mutação
        const monolith = document.getElementById('monolith-brand');
        const monoSesc = document.getElementById('mono-sesc');
        const monoBrasil = document.getElementById('mono-brasil');
        const imesaText = document.getElementById('mono-imesa-text');
        const imesaI = document.getElementById('mono-i');
        const imesaM = document.getElementById('mono-M');
        const esaWrapper = document.getElementById('mono-esa-wrapper');
        const cardBg = document.getElementById('mono-card-bg');
        
        const glowContainer = document.getElementById('glow-container');
        const signature = document.getElementById('signature');
        const loader = document.getElementById('loader-screen');
        const offlineAlert = document.getElementById('offline-alert');

        // --- ATO 1: O Surgimento de Ways (D) no Centro ---
        iD.style.opacity = '1';
        iD.style.transform = 'translate(0px, 0px) scale(1)';
        await sleep(400);

        // --- ATO 2: Aparelhos (A) brota e afasta-se de D ---
        iA.style.opacity = '1';
        iA.style.transform = 'translate(30px, 0px) scale(1)';
        iD.style.transform = 'translate(-30px, 0px) scale(1)';
        
        if (signature) {
            signature.classList.remove('opacity-0');
            signature.classList.add('opacity-100');
        }
        await sleep(400);

        // --- ATO 3: Lavagem (B) e Visão Geral (C) Criam o Quadrado Perfeito 2x2 ---
        iB.style.opacity = '1';
        iB.style.transform = 'translate(-30px, 30px) scale(1)';
        iC.style.opacity = '1';
        iC.style.transform = 'translate(30px, -30px) scale(1)';
        
        iD.style.transform = 'translate(-30px, -30px) scale(1)';
        iA.style.transform = 'translate(30px, 30px) scale(1)';
        await sleep(500);

        // --- ATO 4: Cascata Elástica Rápida (Dispersão na Grade 6x8) ---
        // 4.1 Relatórios (H) brota e empurra Ways (D)
        iH.style.opacity = '1';
        iH.style.transform = 'translate(-30px, -30px) scale(1)';
        iD.style.transform = 'translate(-90px, -30px) scale(1)';
        await sleep(150);

        // 4.2 Admin (G) brota e empurra Visão Geral (C) para o topo
        iG.style.opacity = '1';
        iG.style.transform = 'translate(30px, -30px) scale(1)';
        iC.style.transform = 'translate(30px, -90px) scale(1)';
        await sleep(150);

        // 4.3 Reembolsos (E) brota e empurra Lavagem (B) para a base
        iE.style.opacity = '1';
        iE.style.transform = 'translate(-30px, 30px) scale(1)';
        iB.style.transform = 'translate(-30px, 90px) scale(1)';
        await sleep(150);

        // 4.4 Mini Games (F) brota e empurra Aparelhos (A) para a extremidade direita
        iF.style.opacity = '1';
        iF.style.transform = 'translate(30px, 30px) scale(1)';
        iA.style.transform = 'translate(90px, 30px) scale(1)';
        await sleep(700);

        // ==========================================
        // TRATAMENTO EXCLUSIVO: GATILHO OFFLINE
        // ==========================================
        if (!navigator.onLine) {
            console.log("[PWA] Conexão ausente. Ativando Shatter Offline...");
            
            // 1. Dreno de Energia (Congelamento e Dessaturação)
            [iA, iB, iC, iD, iE, iF, iG, iH].forEach(icon => icon.classList.add('freeze'));
            await sleep(800);

            // 2. O Estilhaço Violento (Shatter) para as extremidades da tela
            [iA, iB, iC, iD, iE, iF, iG, iH].forEach(icon => icon.classList.add('shatter'));
            
            iD.style.transform = 'translate(-260px, -140px) rotate(-135deg) scale(0.5)';
            iA.style.transform = 'translate(260px, 160px) rotate(115deg) scale(0.5)';
            iH.style.transform = 'translate(-140px, -290px) rotate(-70deg) scale(0.5)';
            iC.style.transform = 'translate(210px, -260px) rotate(145deg) scale(0.5)';
            iG.style.transform = 'translate(290px, -90px) rotate(65deg) scale(0.5)';
            iE.style.transform = 'translate(-250px, 110px) rotate(-105deg) scale(0.5)';
            iB.style.transform = 'translate(-110px, 290px) rotate(-165deg) scale(0.5)';
            iF.style.transform = 'translate(140px, 240px) rotate(85deg) scale(0.5)';

            // 3. Revelação do Painel de Conexão Centralizado
            offlineAlert.classList.remove('hidden');
            await sleep(50);
            offlineAlert.classList.remove('opacity-0', 'scale-95');
            offlineAlert.classList.add('opacity-100', 'scale-100');
            return; // Bloqueia a progressão dos próximos atos online
        }

        // --- ATO 5: Colapso Gravitacional Inicial ---
        [iA, iB, iC, iD, iE, iF, iG, iH].forEach(icon => {
            icon.style.transform = 'translate(0px, 0px) rotate(-180deg) scale(0)';
            icon.style.opacity = '0';
        });
        await sleep(350);

        // --- ATO 6: Explosão de Energia e Revelação da Marca Fiel ao Design ---
        if (glowContainer) {
            glowContainer.classList.remove('hidden');
            setTimeout(() => {
                glowContainer.style.opacity = '1';
                glowContainer.style.transform = 'scale(1)';
            }, 50);
        }

        if (monolith) {
            monolith.style.opacity = '1';
            monolith.style.transform = 'scale(1)';
            
            // Suaviza a entrada das marcas d'água aproximando-as do centro real
            monoSesc.style.transform = 'translateY(0px)';
            monoBrasil.style.transform = 'translateY(0px)';
        }
        await sleep(1200); // Tempo de exposição da marca monolítica unificada

        // --- ATO 7: Instabilidade Tecnológica (Glitch de Sobrecarga) ---
        if (imesaText) {
            imesaText.classList.add('animate-imesa-overload');
        }
        await sleep(400);

        // --- ATO 8: O Vórtice Gravitacional Reverso ---
        // O Texto do iMESA puxa o Sesc, o Brasil e a nuvem cromática para dentro de si
        monoSesc.style.transform = 'scale(0) translateY(40px)';
        monoSesc.style.opacity = '0';
        
        monoBrasil.style.transform = 'scale(0) translateY(-40px)';
        monoBrasil.style.opacity = '0';
        
        if (glowContainer) {
            glowContainer.style.transform = 'scale(0) rotate(360deg)';
            glowContainer.style.opacity = '0';
        }
        await sleep(500);

        // --- ATO 9: A Mutação Física e Compressão Limpa ---
        // Desliga o glitch de sobrecarga do bloco e remove a largura do wrapper "ESA"
        imesaText.classList.remove('animate-imesa-overload');
        esaWrapper.style.maxWidth = '0px'; 
        esaWrapper.style.opacity = '0';

        // No mesmo instante, o Card Azul brota por trás e as letras residuais mudam para branco puro
        cardBg.classList.add('icon-card-expanded');
        imesaI.classList.add('text-white-mutated');
        imesaM.classList.add('text-white-mutated');
        await sleep(700);

        // Sincronização final com a resposta dos servidores do Google
        let timeoutCounter = 0;
        while (!iframeLoaded && timeoutCounter < 30) {
            console.log("[PWA] A aguardar estabilização dos serviços...");
            await sleep(500);
            timeoutCounter++;
        }
        await sleep(200);

        // --- ATO 10: Implosão Final do Fundo e Entrada no GAS ---
        loader.style.transition = 'transform 0.6s cubic-bezier(0.85, 0, 0.15, 1), opacity 0.5s ease-in-out, scale 0.6s cubic-bezier(0.85, 0, 0.15, 1)';
        loader.style.transform = 'scale(0)';
        loader.style.opacity = '0';
        
        setTimeout(() => {
            loader.style.pointerEvents = 'none';
            loader.classList.add('hidden');
        }, 600);

    } catch (error) {
        console.error("Falha na execução da coreografia física:", error);
        const loader = document.getElementById('loader-screen');
        if (loader) loader.style.display = 'none';
    }
}

// ==========================================
// INFRAESTRUTURA NATIVA DE INSTALAÇÃO
// ==========================================
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('Blindagem offline ativa: ', reg.scope))
            .catch(err => console.log('Falha no registo do SW: ', err));
    }
}

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
    console.log(`Resposta da instalação: ${outcome}`);
    deferredPrompt = null;
    const installBtn = document.getElementById('install-btn');
    if (installBtn) {
        installBtn.classList.add('opacity-0', 'translate-y-10');
        setTimeout(() => installBtn.classList.add('hidden'), 300);
    }
};

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
// PROXY DE REDIRECIONAMENTO DE HISTÓRICO
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
    window.history.replaceState({ state: 'pwa_base' }, '');
    window.history.pushState({ state: 'pwa_active' }, '');
});

window.addEventListener('popstate', (event) => {
    const iframe = document.getElementById('gas-frame');
    if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage({ action: 'back' }, '*');
    }
    window.history.pushState({ state: 'pwa_active' }, '');
});

window.addEventListener('message', (event) => {
    if (event.data && event.data.action === 'exit_app') {
        window.close();
    }
});

// Inicialização Geral do Sistema
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        playOpeningSequence();
        registerServiceWorker();
        checkIOS();
    }, 100);
});
