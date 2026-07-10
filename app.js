/**
 * ==========================================
 * MOTOR LÓGICO PRINCIPAL
 * COREOGRAFIA DIRETA: DANÇA -> MARCA -> SUGADO PRO GAS
 * ==========================================
 */

let iframeLoaded = false;
let deferredPrompt = null;
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

window.addEventListener('DOMContentLoaded', () => {
    const iframe = document.getElementById('gas-frame');
    if (iframe) {
        iframe.addEventListener('load', () => {
            console.log("[PWA] GAS carregado no fundo.");
            iframeLoaded = true;
        });
    }
});

async function playOpeningSequence() {
    try {
        lucide.createIcons();

        const icons = [
            document.getElementById('icon-A'), document.getElementById('icon-B'),
            document.getElementById('icon-C'), document.getElementById('icon-D'),
            document.getElementById('icon-E'), document.getElementById('icon-F'),
            document.getElementById('icon-G'), document.getElementById('icon-H')
        ];
        
        const monolithBrand = document.getElementById('monolith-brand');
        const imesaText = document.getElementById('mono-imesa-text');
        const glowContainer = document.getElementById('glow-container');
        const signature = document.getElementById('signature');
        const loader = document.getElementById('loader-screen');
        const offlineAlert = document.getElementById('offline-alert');

        // ATO 1: D
        icons[3].style.opacity = '1';
        icons[3].style.transform = 'translate(0px, 0px) scale(1)';
        await sleep(400);

        // ATO 2: A e D
        icons[0].style.opacity = '1';
        icons[0].style.transform = 'translate(30px, 0px) scale(1)';
        icons[3].style.transform = 'translate(-30px, 0px) scale(1)';
        if (signature) { signature.classList.remove('opacity-0'); signature.classList.add('opacity-100'); }
        await sleep(400);

        // ATO 3: B e C (Quadrado)
        icons[1].style.opacity = '1'; icons[1].style.transform = 'translate(-30px, 30px) scale(1)';
        icons[2].style.opacity = '1'; icons[2].style.transform = 'translate(30px, -30px) scale(1)';
        icons[3].style.transform = 'translate(-30px, -30px) scale(1)';
        icons[0].style.transform = 'translate(30px, 30px) scale(1)';
        await sleep(500);

        // ATO 4: Cascata
        icons[7].style.opacity = '1'; icons[7].style.transform = 'translate(-30px, -30px) scale(1)'; icons[3].style.transform = 'translate(-90px, -30px) scale(1)'; await sleep(150);
        icons[6].style.opacity = '1'; icons[6].style.transform = 'translate(30px, -30px) scale(1)'; icons[2].style.transform = 'translate(30px, -90px) scale(1)'; await sleep(150);
        icons[4].style.opacity = '1'; icons[4].style.transform = 'translate(-30px, 30px) scale(1)'; icons[1].style.transform = 'translate(-30px, 90px) scale(1)'; await sleep(150);
        icons[5].style.opacity = '1'; icons[5].style.transform = 'translate(30px, 30px) scale(1)'; icons[0].style.transform = 'translate(90px, 30px) scale(1)'; await sleep(700);

        // MODO OFFLINE
        if (!navigator.onLine) {
            icons.forEach(icon => icon.classList.add('freeze'));
            await sleep(800);
            icons.forEach(icon => icon.classList.add('shatter'));
            
            icons[0].style.transform = 'translate(260px, 160px) rotate(115deg) scale(0.5)';
            icons[1].style.transform = 'translate(-110px, 290px) rotate(-165deg) scale(0.5)';
            icons[2].style.transform = 'translate(210px, -260px) rotate(145deg) scale(0.5)';
            icons[3].style.transform = 'translate(-260px, -140px) rotate(-135deg) scale(0.5)';
            icons[4].style.transform = 'translate(-250px, 110px) rotate(-105deg) scale(0.5)';
            icons[5].style.transform = 'translate(140px, 240px) rotate(85deg) scale(0.5)';
            icons[6].style.transform = 'translate(290px, -90px) rotate(65deg) scale(0.5)';
            icons[7].style.transform = 'translate(-140px, -290px) rotate(-70deg) scale(0.5)';

            offlineAlert.classList.remove('hidden');
            await sleep(50);
            offlineAlert.classList.remove('opacity-0', 'scale-95');
            offlineAlert.classList.add('opacity-100', 'scale-100');
            return;
        }

        // --- ATO 5: Sugados violentamente para o centro ---
        icons.forEach(icon => {
            // Anula o elástico do CSS e impõe uma aceleração contínua (ease-in)
            // A opacidade só começa a cair depois de 0.15s, garantindo que o movimento seja visto
            icon.style.transition = 'transform 0.4s ease-in, opacity 0.2s ease-in 0.15s';
            icon.style.transform = 'translate(0px, 0px) rotate(180deg) scale(0)';
            icon.style.opacity = '0';
        });
        
        // Pausa cravada para a animação do puxão terminar antes de qualquer outra coisa
        await sleep(400); 
        
        // A verificação do GAS foi movida para depois do puxão, para não engasgar a física
        let timeoutCounter = 0;
        while (!iframeLoaded && timeoutCounter < 30) {
            await sleep(500);
            timeoutCounter++;
        }
        await sleep(100);

        // ATO 6: Mostrar "SESC iMESA BRASIL" e as auras
        if (glowContainer) {
            glowContainer.classList.remove('hidden');
            await sleep(50);
            glowContainer.style.opacity = '1';
            glowContainer.style.transform = 'scale(1)';
        }

        if (monolithBrand) {
            monolithBrand.style.opacity = '1';
            monolithBrand.style.transform = 'scale(1)';
        }
        await sleep(1200); 

        // ATO 7: Puxar TUDO para o centro revelando o GAS
        if (imesaText) imesaText.classList.add('animate-imesa-overload');
        await sleep(300);

        monolithBrand.style.transform = 'scale(0)';
        monolithBrand.style.opacity = '0';
        
        glowContainer.style.transform = 'scale(0) rotate(360deg)';
        glowContainer.style.opacity = '0';
        
        if (signature) signature.style.opacity = '0';

        // O Fundo branco imploda, mostrando o GAS!
        loader.style.transition = 'transform 0.5s cubic-bezier(0.85, 0, 0.15, 1), opacity 0.5s ease-in-out';
        loader.style.transform = 'scale(0)';
        loader.style.opacity = '0';
        
        await sleep(500);
        loader.style.pointerEvents = 'none';
        loader.classList.add('hidden');

    } catch (error) {
        console.error("Erro:", error);
        const loader = document.getElementById('loader-screen');
        if (loader) loader.style.display = 'none';
    }
}

// INSTALAÇÃO DO PWA E SW
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js').catch(err => console.log('SW Erro: ', err));
    }
}

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault(); deferredPrompt = e;
    const installBtn = document.getElementById('install-btn');
    if (installBtn) {
        installBtn.classList.remove('hidden');
        setTimeout(() => installBtn.classList.remove('opacity-0', 'translate-y-10'), 50);
    }
});

window.installPWA = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt(); await deferredPrompt.userChoice; deferredPrompt = null;
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
            iosPrompt.classList.remove('hidden'); setTimeout(() => iosPrompt.classList.remove('opacity-0', 'translate-y-10'), 50);
            setTimeout(() => { iosPrompt.classList.add('opacity-0', 'translate-y-10'); setTimeout(() => iosPrompt.classList.add('hidden'), 300); }, 10000);
        }
    }
}

window.addEventListener('DOMContentLoaded', () => { window.history.replaceState({ state: 'pwa_base' }, ''); window.history.pushState({ state: 'pwa_active' }, ''); });
window.addEventListener('popstate', () => {
    const iframe = document.getElementById('gas-frame');
    if (iframe && iframe.contentWindow) iframe.contentWindow.postMessage({ action: 'back' }, '*');
    window.history.pushState({ state: 'pwa_active' }, '');
});
window.addEventListener('message', (event) => { if (event.data && event.data.action === 'exit_app') window.close(); });

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => { playOpeningSequence(); registerServiceWorker(); checkIOS(); }, 100);
});
