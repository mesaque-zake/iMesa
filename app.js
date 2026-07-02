// Renderiza os ícones do pacote Lucide
lucide.createIcons();

// Registra o App para funcionar como PWA/Offline
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('Check!: Service Worker operante.', reg.scope))
            .catch(err => console.error('Erro no Service Worker', err));
    });
}

// Orquestração da Coreografia
document.addEventListener("DOMContentLoaded", () => {
    const icons = document.querySelectorAll('.anim-icon');
    const iconGrid = document.getElementById('icon-grid');
    const mainCheck = document.getElementById('main-check');
    const welcomeMessage = document.getElementById('welcome-message');
    const signature = document.getElementById('signature');
    const splashScreen = document.getElementById('splash-screen');

    // Inicia a animação após um pequeno respiro (0.5s)
    setTimeout(() => {
        
        // FASE 1: Expansão em Cascata para fora
        icons.forEach((icon, index) => {
            setTimeout(() => {
                const position = icon.getAttribute('data-position');
                icon.classList.add(`slide-${position}`);
            }, index * 120); // 120ms de diferença cria o efeito cascata
        });

        // FASE 2: O Recuo e Impacto no Centro
        setTimeout(() => {
            icons.forEach(icon => {
                const position = icon.getAttribute('data-position');
                icon.classList.remove(`slide-${position}`); // Tira o deslize, forçando volta ao centro
            });

            // FASE 3: A Fusão ("Pop" do Check principal)
            setTimeout(() => {
                iconGrid.style.opacity = '0'; // Apaga os ícones coloridos
                mainCheck.classList.add('animate-pop'); // O Check pula na tela

                // FASE 4: Apresentação da Assinatura e Boas-Vindas
                setTimeout(() => {
                    welcomeMessage.classList.remove('opacity-0', 'translate-y-4');
                    signature.classList.remove('opacity-0');

                    // FASE 5: Transição para o Sistema do Sesc
                    setTimeout(() => {
                        // Fade Out da tela inteira
                        splashScreen.style.opacity = '0';
                        
                        // Remoção da barreira para permitir cliques no GAS
                        setTimeout(() => {
                            splashScreen.classList.add('hidden-fully');
                        }, 1000);

                    }, 2200); // Dá ~2 segundos para o usuário ler a tela

                }, 400); // Inicia os textos enquanto o Check estabiliza

            }, 300); // Tempo exato em que os ícones coloridos batem no centro

        }, 1100); // Aguarda todos abrirem na cascata para puxar de volta

    }, 500); 
});
