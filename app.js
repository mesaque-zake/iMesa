/**
 * ==========================================
 * MOTOR LÓGICO PRINCIPAL DO PWA (CORE)
 * VERSÃO CINEMÁTICA ULTRA-OTIMIZADA
 * ==========================================
 */

let iframeLoaded = false;
let deferredPrompt = null;
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
// COREOGRAFIA DE ABERTURA EM 10 ATOS (DANCE)
// ==========================================
async function playOpeningSequence() {
    console.log("[PWA] Iniciando a coreografia do Pentágono...");
    
    try {
        lucide.createIcons();

        // Mapeamento dos Atores do Sistema
        const i1 = document.getElementById('icon-1'); // Aparelhos (A)
        const i2 = document.getElementById('icon-2'); // Lavagem (B)
        const i3 = document.getElementById('icon-3'); // Visão Geral (C)
        const i4 = document.getElementById('icon-4'); // Relatórios (H)
        const i5 = document.getElementById('icon-5'); // Ways (D)
        const i6 = document.getElementById('icon-6'); // Reembolsos (E)
        const i7 = document.getElementById('icon-7'); // Mini Games (F)
        const i8 = document.getElementById('icon-8'); // Admin (G)
        
        const check = document.getElementById('icon-check'); // Monograma Card (X)
        const welcome = document.getElementById('welcome-text');
        const welcomeSesc = document.getElementById('welcome-sesc');
        const welcomeBrasil = document.getElementById('welcome-brasil');
        const signature = document.getElementById('signature');
        const loader = document.getElementById('loader-screen');
        const offlineAlert = document.getElementById('offline-alert');
        const glowContainer = document.getElementById('glow-container');

        if (!i1 || !i5 || !check) {
            console.log("ERRO: Atores do Pentágono não encontrados. Revelando sistema.");
            if (loader) loader.style.display = 'none';
            return;
        }

        // --- ATO 1: Ways (D) surge no centro ---
        i5.style.opacity = '1';
        i5.style.transform = 'translate(0px, 0px) scale(1)';
        await sleep(500);

        // --- ATO 2: Aparelhos (A) brota e empurra. Signature (Mesaque) surge. ---
        i1.style.opacity = '1';
        i1.style.transform = 'translate(40px, 0px) scale(1)';
        i5.style.transform = 'translate(-40px, 0px) scale(1)';
        if (signature) {
            signature.classList.remove('opacity-0');
            signature.classList.add('opacity-100');
        }
        await sleep(600);

        // --- ATO 3: Lavagem (B) e Visão Geral (C) nascem formando o quadrado perfeito 2x2 ---
        // A distância vertical e horizontal é mantida estritamente idêntica (60px) para simetria absoluta
        i2.style.opacity = '1';
        i2.style.transform = 'translate(-30px, 30px) scale(1)';
        i3.style.opacity = '1';
        i3.style.transform = 'translate(30px, -30px) scale(1)';
        
        // Move D e A para fechar o quadrado perfeito de 60px x 60px
        i5.style.transform = 'translate(-30px, -30px) scale(1)';
        i1.style.transform = 'translate(30px, 30px) scale(1)';
        await sleep(600);

        // --- ATO 4: Cascata Elástica Rápida ("Pop-Pop-Pop-Pop") ---
        // Os 4 ícones restantes surgem do centro de forma encadeada, empurrando os vizinhos assim que aparecem!
        
        // 4.1 Relatórios (H) brota do centro e se desloca, empurrando D (Ways) e C (Visão Geral)
        i4.style.opacity = '1';
        i4.style.transform = 'translate(-35px, -10px) scale(1)';
        i5.style.transform = 'translate(-70px, -20px) scale(1)'; // D se desloca
        i3.style.transform = 'translate(30px, -50px) scale(1)';  // C se desloca
        await sleep(150);

        // 4.2 Admin (G) brota do centro e se desloca, empurrando A (Aparelhos) e H (Relatórios)
        i8.style.opacity = '1';
        i8.style.transform = 'translate(35px, -10px) scale(1)';
        i1.style.transform = 'translate(70px, 40px) scale(1)';  // A se desloca
        i3.style.transform = 'translate(35px, -70px) scale(1)'; // C chega na coordenada final!
        await sleep(150);

        // 4.3 Reembolsos (E) brota do centro e se desloca, empurrando B (Lavagem) e D (Ways)
        i6.style.opacity = '1';
        i6.style.transform = 'translate(-35px, 50px) scale(1)';
        i2.style.transform = 'translate(-35px, 70px) scale(1)';  // B se desloca
        i5.style.transform = 'translate(-105px, -10px) scale(1)'; // D chega na coordenada final!
        await sleep(150);

        // 4.4 Mini Games (F) brota do centro e se desloca, empurrando A (Aparelhos) e B (Lavagem) para as posições finais
        i7.style.opacity = '1';
        i7.style.transform = 'translate(35px, 50px) scale(1)';
        i1.style.transform = 'translate(105px, 50px) scale(1)';  // A chega na coordenada final!
        i2.style.transform = 'translate(-35px, 110px) scale(1)'; // B chega na coordenada final!
        await sleep(600);

        // --- CENA DE REPOSIÇÃO: OFFLINE (O BIG BANG DIGITAL) ---
        if (!navigator.onLine) {
            console.log("[PWA] Sem internet. Ativando o Big Bang Offline...");
            
            [i1, i2, i3, i4, i5, i6, i7, i8].forEach(icon => {
                icon.classList.add('freeze');
            });
            
            // Arremessa violentamente os 8 ícones cinzas desordenados para as bordas externas da tela (Shatter)
            i5.style.transform = 'translate(-250px, -100px) rotate(-180deg) scale(0.4)';  // D
            i4.style.transform = 'translate(-120px, -250px) rotate(-90deg) scale(0.4)';   // H
            i8.style.transform = 'translate(120px, -250px) rotate(90deg) scale(0.4)';     // G
            i1.style.transform = 'translate(250px, 100px) rotate(180deg) scale(0.4)';     // A
            i3.style.transform = 'translate(250px, -180px) rotate(135deg) scale(0.4)';    // C
            i2.style.transform = 'translate(-120px, 250px) rotate(-135deg) scale(0.4)';   // B
            i6.style.transform = 'translate(-250px, 180px) rotate(-225deg) scale(0.4)';   // E
            i7.style.transform = 'translate(120px, 250px) rotate(225deg) scale(0.4)';     // F

            offlineAlert.classList.remove('hidden');
            await sleep(100);
            offlineAlert.classList.remove('opacity-0', 'scale-95');
            offlineAlert.classList.add('opacity-100', 'scale-100');
            return;
        }

        // --- ATO 5 & 6: Colisão Gravitacional e Fusão Elástica Instantânea ---
        // Todos colapsam ao mesmo tempo. No meio do colapso (300ms), o monograma X explode de dentro!
        [i1, i2, i3, i4, i5, i6, i7, i8].forEach(icon => {
            icon.style.transform = 'translate(0px, 0px) rotate(-180deg) scale(0.2)';
            icon.style.opacity = '0';
        });
        await sleep(300); // Momento exato do impacto da colisão (Ato 6)

        check.style.opacity = '1';
        check.style.transform = 'scale(1.15)';
        await sleep(300);
        check.style.transform = 'scale(1)'; // Acomodação de estilingue (Settle)

        // --- ATO 7: A Dança das Auras (8 sombras curtas nítidas se movendo) ---
        if (glowContainer) {
            glowContainer.classList.remove('hidden');
            await sleep(50);
            glowContainer.classList.remove('opacity-0');
            glowContainer.classList.add('opacity-100');

            // Envia as 8 bolinhas de luz de desfoque curto para as suas órbitas individuais (75px)
            document.getElementById('glow-1').style.transform = 'translate(0px, -75px)';
            document.getElementById('glow-2').style.transform = 'translate(71px, -23px)';
            document.getElementById('glow-3').style.transform = 'translate(44px, 61px)';
            document.getElementById('glow-5').style.transform = 'translate(-44px, 61px)';
            document.getElementById('glow-6').style.transform = 'translate(-71px, -23px)';
            document.getElementById('glow-7').style.transform = 'translate(-71px, 23px)';
            document.getElementById('glow-8').style.transform = 'translate(71px, 23px)';
            document.getElementById('glow-4').style.transform = 'translate(0px, 75px)';
        }
        await sleep(400);

        // --- ATO 8: Morte do Card e Revelação Física do "iMESA" (O "Morphing") ---
        const monoCard = document.getElementById('monogram-card');
        const monoESA = document.getElementById('monogram-ESA');
        if (monoCard && monoESA) {
            // Desmancha as bordas e o fundo azul do card central
            monoCard.style.backgroundColor = 'transparent';
            monoCard.style.boxShadow = 'none';
            
            const monoI = document.getElementById('monogram-i');
            const monoM = document.getElementById('monogram-M');
            if (monoI) monoI.style.color = '#020f3d';
            if (monoM) monoM.style.color = '#020f3d';
            
            // As letras "ESA" deslizam horizontalmente para a direita revelando a palavra "iMESA"
            monoESA.classList.remove('opacity-0', 'max-w-0');
            monoESA.classList.add('opacity-100', 'max-w-[150px]');
        }
        await sleep(400);

        // --- ATO 9: O Sesc Mesa Brasil Watermark ---
        // As marcas d'água de Sesc e Brasil surgem suavemente flutuando de forma absoluta acima e abaixo do iMESA
        if (welcomeSesc) {
            welcomeSesc.classList.remove('opacity-0');
            welcomeSesc.classList.add('opacity-100');
            welcomeSesc.style.transform = 'translateY(-40px)';
        }
        if (welcomeBrasil) {
            welcomeBrasil.classList.remove('opacity-0');
            welcomeBrasil.classList.add('opacity-100');
            welcomeBrasil.style.transform = 'translateY(40px)';
        }
        await sleep(400);

        // --- Loop de Sincronia de Carregamento ---
        let timeoutCounter = 0;
        while (!iframeLoaded && timeoutCounter < 30) {
            console.log("[PWA] Aguardando o carregamento interno do iMesa...");
            await sleep(500);
            timeoutCounter++;
        }

        // --- ATO 10: Vórtice de Implosão, Glitch e Revelação do GAS ---
        console.log("[PWA] iMesa pronto. Iniciando implosão e transição...");
        
        // O Glitch toma conta do título "iMESA" de forma pouco exagerada
        const monogramCard = document.getElementById('monogram-card');
        if (monogramCard) {
            monogramCard.classList.add('animate-imesa-glitch');
        }
        
        await sleep(300);

        // IMPLOSÃO: Puxa as marcas d'água, as auras coloridas e o logo para dentro do "iMESA" (Vórtice)
        if (glowContainer) {
            glowContainer.style.transform = 'scale(0) rotate(360deg)';
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
        
        await sleep(400); // Tempo do fechamento do vórtice de energia

        // A CORTINA IMPlODE: O próprio fundo branco do loader sofre uma implosão para o centro antes de sumir!
        loader.style.transition = 'transform 0.6s cubic-bezier(0.85, 0, 0.15, 1), opacity 0.5s ease-in-out, scale 0.6s cubic-bezier(0.85, 0, 0.15, 1)';
        loader.style.transform = 'scale(0)';
        loader.style.opacity = '0';
        
        setTimeout(() => {
            loader.style.pointerEvents = 'none';
            loader.classList.add('hidden');
        }, 600);

    } catch (error) {
        console.error("Erro na coreografia: ", error);
        const loader = document.getElementById('loader-screen');
        if (loader) loader.style.display = 'none';
    }
}

// ==========================================
// REGISTRO DO SERVICE WORKER E INSTALADORES
// ==========================================
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('SW Registrado: ', reg.scope))
            .catch(err => console.log('Falha no SW: ', err));
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
    console.log(`Escolha: ${outcome}`);
    
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
// HISTÓRICO E REDIRECIONADOR DE VOLTAR (PROXY)
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
    window.history.replaceState({ state: 'pwa_base' }, '');
    window.history.pushState({ state: 'pwa_active' }, '');
});

window.addEventListener('popstate', (event) => {
    const iframe = document.getElementById('gas-frame');
    if (iframe && iframe.contentWindow) {
        console.log("[PWA] Redirecionando ação 'Voltar' para o iMesa...");
        iframe.contentWindow.postMessage({ action: 'back' }, '*');
    }
    window.history.pushState({ state: 'pwa_active' }, '');
});

window.addEventListener('message', (event) => {
    if (event.data && event.data.action === 'exit_app') {
        console.log("[PWA] iMesa solicitou fechamento. Encerrando aplicação.");
        window.close();
    }
});

// GATILHO DE BOOT PRINCIPAL
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        playOpeningSequence();
        registerServiceWorker();
        checkIOS();
    }, 100);
});
