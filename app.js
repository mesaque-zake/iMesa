/**
 * ==========================================
 * MOTOR LÓGICO PRINCIPAL DO PWA (CORE)
 * A COREOGRAFIA DO "BIG BANG" (V6)
 * ==========================================
 */

let iframeLoaded = false;
let deferredPrompt = null;
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// Monitora o carregamento silencioso do GAS nos servidores do Google
window.addEventListener('DOMContentLoaded', () => {
    const iframe = document.getElementById('gas-frame');
    if (iframe) {
        iframe.addEventListener('load', () => {
            console.log("[PWA] GAS (iMesa) carregado com sucesso em background.");
            iframeLoaded = true;
        });
    }
});

// ==========================================
// COREOGRAFIA DE ABERTURA EM 10 ATOS (DANCE)
// ==========================================
async function playOpeningSequence() {
    console.log("[PWA] Iniciando a coreografia do Ecossistema...");
    
    try {
        // Inicializa os ícones do Lucide
        lucide.createIcons();

        // Mapeamento dos Atores
        const iA = document.getElementById('icon-A'); // Aparelhos
        const iB = document.getElementById('icon-B'); // Lavagem
        const iC = document.getElementById('icon-C'); // Visão Geral
        const iD = document.getElementById('icon-D'); // Ways
        const iE = document.getElementById('icon-E'); // Reembolsos
        const iF = document.getElementById('icon-F'); // Mini Games
        const iG = document.getElementById('icon-G'); // Admin
        const iH = document.getElementById('icon-H'); // Relatórios
        const iX = document.getElementById('icon-X'); // Logo iM / iMESA
        
        const signature = document.getElementById('signature');
        const loader = document.getElementById('loader-screen');
        const offlineAlert = document.getElementById('offline-alert');
        const glowContainer = document.getElementById('glow-container');

        // --- ATO 1: Ways (D) nasce no marco zero ---
        iD.style.opacity = '1';
        iD.style.transform = 'translate(0px, 0px) scale(1)';
        await sleep(400);

        // --- ATO 2: Aparelhos (A) brota. Eles se dividem no eixo horizontal ---
        iA.style.opacity = '1';
        iA.style.transform = 'translate(30px, 0px) scale(1)';
        iD.style.transform = 'translate(-30px, 0px) scale(1)';
        
        if (signature) {
            signature.classList.remove('opacity-0');
            signature.classList.add('opacity-100');
        }
        await sleep(400);

        // --- ATO 3: Lavagem (B) e Visão Geral (C) brotam. O Quadrado Perfeito 2x2 ---
        iB.style.opacity = '1';
        iB.style.transform = 'translate(-30px, 30px) scale(1)';
        
        iC.style.opacity = '1';
        iC.style.transform = 'translate(30px, -30px) scale(1)';
        
        // D e A se ajustam para fechar os cantos restantes do 2x2
        iD.style.transform = 'translate(-30px, -30px) scale(1)';
        iA.style.transform = 'translate(30px, 30px) scale(1)';
        await sleep(500);

        // --- ATO 4: A Cascata Elástica Rápida (Surgimento na grade assimétrica 6x8) ---
        // 4.1 Relatórios (H) brota no centro esquerdo. Empurra Ways (D) pra beirada.
        iH.style.opacity = '1';
        iH.style.transform = 'translate(-30px, -30px) scale(1)';
        iD.style.transform = 'translate(-90px, -30px) scale(1)';
        await sleep(150);

        // 4.2 Admin (G) brota no centro direito. Empurra Visão (C) pra cima.
        iG.style.opacity = '1';
        iG.style.transform = 'translate(30px, -30px) scale(1)';
        iC.style.transform = 'translate(30px, -90px) scale(1)';
        await sleep(150);

        // 4.3 Reembolsos (E) brota em baixo à esquerda. Empurra Lavagem (B) pra baixo.
        iE.style.opacity = '1';
        iE.style.transform = 'translate(-30px, 30px) scale(1)';
        iB.style.transform = 'translate(-30px, 90px) scale(1)';
        await sleep(150);

        // 4.4 Games (F) brota. Empurra Aparelhos (A) para a beirada direita. A grade se consolida!
        iF.style.opacity = '1';
        iF.style.transform = 'translate(30px, 30px) scale(1)';
        iA.style.transform = 'translate(90px, 30px) scale(1)';
        await sleep(600); // Tempo para o usuário apreciar a grade elástica pronta

        // ==========================================
        // CENA DE REPOSIÇÃO: BIG BANG OFFLINE
        // ==========================================
        if (!navigator.onLine) {
            console.log("[PWA] Queda de energia! Ativando Big Bang Offline...");
            
            // 1. Dreno de Energia (Dessaturação e perda de opacidade)
            [iA, iB, iC, iD, iE, iF, iG, iH].forEach(icon => {
                icon.classList.add('freeze');
            });
            await sleep(1000); // Aguarda o cinza dominar

            // 2. O Estilhaço (Shatter): Adiciona transição rápida e joga para as bordas rotacionando
            [iA, iB, iC, iD, iE, iF, iG, iH].forEach(icon => icon.classList.add('shatter'));
            
            iD.style.transform = 'translate(-250px, -150px) rotate(-140deg) scale(0.6)';
            iA.style.transform = 'translate(250px, 180px) rotate(120deg) scale(0.6)';
            iH.style.transform = 'translate(-160px, -280px) rotate(-80deg) scale(0.6)';
            iC.style.transform = 'translate(220px, -240px) rotate(160deg) scale(0.6)';
            iG.style.transform = 'translate(280px, -80px) rotate(70deg) scale(0.6)';
            iE.style.transform = 'translate(-240px, 120px) rotate(-110deg) scale(0.6)';
            iB.style.transform = 'translate(-120px, 280px) rotate(-170deg) scale(0.6)';
            iF.style.transform = 'translate(150px, 250px) rotate(90deg) scale(0.6)';

            // 3. Vácuo e Mensagem Central
            offlineAlert.classList.remove('hidden');
            await sleep(50);
            offlineAlert.classList.remove('opacity-0', 'scale-95');
            offlineAlert.classList.add('opacity-100', 'scale-100');
            return; // TRAVA A COREOGRAFIA AQUI.
        }

        // --- ATO 5: Colapso Gravitacional (Sugados para o centro) ---
        [iA, iB, iC, iD, iE, iF, iG, iH].forEach(icon => {
            icon.style.transform = 'translate(0px, 0px) rotate(-180deg) scale(0)';
            icon.style.opacity = '0';
        });
        await sleep(200); // Exatamente na metade da viagem de volta...

        // --- ATO 6: O Impacto e Nascimento do "iM" ---
        iX.style.opacity = '1';
        iX.style.transform = 'scale(1.15)'; // Estilingue para fora
        await sleep(350);
        iX.style.transform = 'scale(1)'; // Acomodação no tamanho real

        // --- ATO 7: A Órbita das Auras ---
        if (glowContainer) {
            glowContainer.classList.remove('hidden');
            await sleep(50);
            glowContainer.classList.remove('opacity-0');
            glowContainer.classList.add('opacity-100');

            // Espalha as luzes maiores para orbitarem os cantos do bloco central
            document.getElementById('glow-1').style.transform = 'translate(-100px, -100px)';
            document.getElementById('glow-2').style.transform = 'translate(100px, -100px)';
            document.getElementById('glow-3').style.transform = 'translate(-100px, 100px)';
            document.getElementById('glow-4').style.transform = 'translate(100px, 100px)';
            document.getElementById('glow-5').style.transform = 'translate(0px, -130px)';
            document.getElementById('glow-6').style.transform = 'translate(0px, 130px)';
            document.getElementById('glow-7').style.transform = 'translate(-130px, 0px)';
            document.getElementById('glow-8').style.transform = 'translate(130px, 0px)';
        }
        await sleep(500);

        // --- ATO 8: O "Morphing" para iMESA ---
        const monoCard = document.getElementById('monogram-card');
        const monoESA = document.getElementById('monogram-ESA');
        const monoI = document.getElementById('monogram-i');
        const monoM = document.getElementById('monogram-M');

        if (monoCard && monoESA) {
            monoCard.style.backgroundColor = 'transparent';
            monoCard.style.boxShadow = 'none';
            
            if (monoI) monoI.style.color = '#020f3d';
            if (monoM) monoM.style.color = '#020f3d';
            
            monoESA.classList.remove('opacity-0', 'max-w-0');
            monoESA.classList.add('opacity-100', 'max-w-[200px]');
        }
        await sleep(600);

        // --- ATO 9: O Abraço Monumental (Marcas D'água Gigantes) ---
        const welcomeSesc = document.getElementById('welcome-sesc');
        const welcomeBrasil = document.getElementById('welcome-brasil');
        
        if (welcomeSesc) {
            welcomeSesc.classList.remove('opacity-0');
            welcomeSesc.classList.add('opacity-100');
        }
        if (welcomeBrasil) {
            welcomeBrasil.classList.remove('opacity-0');
            welcomeBrasil.classList.add('opacity-100');
        }
        
        // Loop que garante que não avançaremos até o iframe do Google Scripts estar 100% renderizado
        let timeoutCounter = 0;
        while (!iframeLoaded && timeoutCounter < 30) {
            console.log("[PWA] Aguardando o GAS terminar de pintar a tela...");
            await sleep(500);
            timeoutCounter++;
        }
        await sleep(500); // Um respiro final de meio segundo para apreciar o design

        // --- ATO 10: Glitch Explosivo, Vórtice e a Revelação ---
        console.log("[PWA] GAS pronto! Iniciando Vórtice de revelação...");
        
        if (monoCard) {
            // Desliga a animação sutil e liga a explosiva
            monoI.classList.remove('animate-i-glitch');
            monoCard.classList.add('animate-imesa-explosive');
        }
        await sleep(350); // O tempo exato do choque visual do Glitch

        // IMPLOSÃO: Tudo é sugado para dentro do Vórtice no centro da tela
        if (glowContainer) {
            glowContainer.style.transform = 'scale(0) rotate(720deg)';
            glowContainer.style.opacity = '0';
        }
        if (welcomeSesc) {
            welcomeSesc.style.transform = 'translateY(0px) scale(0)';
            welcomeSesc.style.opacity = '0';
        }
        if (welcomeBrasil) {
            welcomeBrasil.style.transform = 'translateY(0px) scale(0)';
            welcomeBrasil.style.opacity = '0';
        }
        
        await sleep(400);

        // A CORTINA CAI: O fundo branco imploda
        loader.style.transition = 'transform 0.6s cubic-bezier(0.85, 0, 0.15, 1), opacity 0.5s ease-in-out, scale 0.6s cubic-bezier(0.85, 0, 0.15, 1)';
        loader.style.transform = 'scale(0)';
        loader.style.opacity = '0';
        
        setTimeout(() => {
            loader.style.pointerEvents = 'none';
            loader.classList.add('hidden');
        }, 600);

    } catch (error) {
        console.error("Erro no motor de animação: ", error);
        const loader = document.getElementById('loader-screen');
        if (loader) loader.style.display = 'none'; // Fallback de emergência
    }
}

// ==========================================
// REGISTRO DO SERVICE WORKER E INSTALADORES
// ==========================================
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('SW V6 Registrado. Escopo: ', reg.scope))
            .catch(err => console.log('Falha na blindagem do SW: ', err));
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
    console.log(`Decisão de instalação: ${outcome}`);
    
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
// HISTÓRICO E REDIRECIONADOR DE VOLTAR (PROXY DO GAS)
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
    window.history.replaceState({ state: 'pwa_base' }, '');
    window.history.pushState({ state: 'pwa_active' }, '');
});

window.addEventListener('popstate', (event) => {
    const iframe = document.getElementById('gas-frame');
    if (iframe && iframe.contentWindow) {
        console.log("[PWA] Comando 'Voltar' nativo detectado. Enviando postMessage para o GAS...");
        iframe.contentWindow.postMessage({ action: 'back' }, '*');
    }
    window.history.pushState({ state: 'pwa_active' }, '');
});

window.addEventListener('message', (event) => {
    if (event.data && event.data.action === 'exit_app') {
        console.log("[PWA] O GAS solicitou fechamento seguro.");
        window.close();
    }
});

// GATILHO DE BOOT PRINCIPAL
document.addEventListener('DOMContentLoaded', () => {
    // Delay de 100ms para a engine do navegador respirar antes de renderizar física
    setTimeout(() => {
        playOpeningSequence();
        registerServiceWorker();
        checkIOS();
    }, 100);
});
