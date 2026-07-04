// ==========================================
// 1. UTILITÁRIOS
// ==========================================
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// ==========================================
// 2. COREOGRAFIA DE ABERTURA (NOVA VERSÃO)
// ==========================================
async function playOpeningSequence() {
    console.log("1. Maestro posicionado. Preparando a tela...");
    
    try {
        lucide.createIcons();
        console.log("2. Ícones renderizados com sucesso.");

        const i1 = document.getElementById('icon-1');
        const i2 = document.getElementById('icon-2');
        const i3 = document.getElementById('icon-3');
        const i4 = document.getElementById('icon-4');
        const check = document.getElementById('icon-check');
        const welcome = document.getElementById('welcome-text');
        const signature = document.getElementById('signature');
        const loader = document.getElementById('loader-screen');
        const offlineAlert = document.getElementById('offline-alert');

        if (!i1 || !check) {
            console.log("ERRO: Elementos HTML não encontrados. Revelando sistema.");
            if (loader) loader.style.display = 'none';
            return;
        }

        const posA = 'translate(-40px, -40px)'; 
        const posB = 'translate(40px, -40px)';  
        const posC = 'translate(-40px, 40px)';  
        const posD = 'translate(40px, 40px)';   

        console.log("3. Iniciando a dança!");
        await sleep(500);

        // Movimento 2: Giro
        i1.style.transform = posC;
        i2.style.transform = posA;
        i3.style.transform = posD;
        i4.style.transform = posB;
        await sleep(600);

        // Movimento 3: Giro
        i1.style.transform = posD;
        i2.style.transform = posC;
        i3.style.transform = posB;
        i4.style.transform = posA;
        
        signature.classList.remove('opacity-0');
        signature.classList.add('opacity-100');
        await sleep(600);

        // Movimento 4: Giro final
        i1.style.transform = posB;
        i2.style.transform = posD;
        i3.style.transform = posA;
        i4.style.transform = posC;
        await sleep(600);

        // ==========================================
        // CENA ALTERNATIVA: OFFLINE (Repulsão)
        // ==========================================
        if (!navigator.onLine) {
            console.log("Status: Sem internet. Iniciando repulsão.");
            
            [i1, i2, i3, i4].forEach(icon => icon.classList.add('freeze'));
            
            i1.style.transform = 'translate(-160px, -160px) rotate(-45deg) scale(0.7)';
            i2.style.transform = 'translate(160px, -160px) rotate(45deg) scale(0.7)';
            i3.style.transform = 'translate(-160px, 160px) rotate(-135deg) scale(0.7)';
            i4.style.transform = 'translate(160px, 160px) rotate(135deg) scale(0.7)';

            offlineAlert.classList.remove('hidden');
            await sleep(100);
            offlineAlert.classList.remove('opacity-0', 'scale-95');
            offlineAlert.classList.add('opacity-100', 'scale-100');
            return; 
        }

        // ==========================================
        // CENA PRINCIPAL: A FUSÃO (Buraco Negro)
        // ==========================================
        // Os coloridos são sugados
        [i1, i2, i3, i4].forEach(icon => {
            icon.style.transform = 'translate(0px, 0px) rotate(-180deg) scale(0.2)';
            icon.style.opacity = '0';
        });

        // REMOVIDO O TEMPO DE ESPERA!
        // O Check nasce engolindo eles IMEDIATAMENTE no exato momento da sucção.
        check.style.opacity = '1';
        check.style.transform = 'scale(1.15)';
        
        await sleep(350); 
        check.style.transform = 'scale(1)'; // Acomoda

        await sleep(200);

        // Revela o título (agora ancorado na posição perfeita)
        welcome.classList.remove('opacity-0', 'translate-y-4');
        welcome.classList.add('opacity-100', 'translate-y-0');
        
        // Finalização e liberação de tela
        console.log("4. Apresentação concluída. Revelando o sistema.");
        await sleep(1500);
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
let deferredPrompt;
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
// 5. DETECÇÃO IOS
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
// Gatilho
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        playOpeningSequence();
        registerServiceWorker();
        checkIOS();
    }, 100);
});
