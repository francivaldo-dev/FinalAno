// Inicializar decorações temáticas
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar classe específica ao body baseado na página atual
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage === 'natal.html') {
        document.body.classList.add('natal-page');
        createChristmasDecorations();
    } else if (currentPage === 'anoNovo.html') {
        document.body.classList.add('ano-novo-page');
        createNewYearDecorations();
    } else {
        document.body.classList.add('index-page');
        createMixedDecorations();
    }
    
    initAnimations();
});

// Criar decorações de Natal
function createChristmasDecorations() {
    const container = document.getElementById('decorations-container');
    
    // Criar flocos de neve
    for (let i = 0; i < 30; i++) {
        createSnowflake(container);
    }
    
    // Criar ornamentos
    for (let i = 0; i < 15; i++) {
        createOrnament(container);
    }
    
    // Adicionar efeito de luzes piscando
    const title = document.querySelector('.message-title');
    if (title) {
        const colors = ['#8B0000', '#228B22', '#FFFFFF'];
        let colorIndex = 0;
        
        setInterval(() => {
            title.style.color = colors[colorIndex];
            colorIndex = (colorIndex + 1) % colors.length;
        }, 1000);
    }
}

// Criar decorações de Ano Novo
function createNewYearDecorations() {
    const container = document.getElementById('decorations-container');
    
    // Criar fogos de artifício
    for (let i = 0; i < 20; i++) {
        createFirework(container);
    }
    
    // Criar confetes
    for (let i = 0; i < 50; i++) {
        createConfetti(container);
    }
    
    // Adicionar efeito de contagem regressiva no rodapé
    const footer = document.querySelector('.main-footer p');
    if (footer) {
        const originalText = footer.textContent;
        let count = 3;
        
        const countdown = setInterval(() => {
            footer.textContent = originalText + ` 🎉 ${count}!`;
            footer.style.transform = 'scale(1.2)';
            
            setTimeout(() => {
                footer.style.transform = 'scale(1)';
            }, 300);
            
            count--;
            if (count < 0) {
                clearInterval(countdown);
                footer.textContent = originalText + ' 🎉 Feliz Ano Novo!';
            }
        }, 1000);
    }
}

// Criar decorações mistas para a página inicial
function createMixedDecorations() {
    const container = document.getElementById('decorations-container');
    
    // Criar flocos de neve
    for (let i = 0; i < 15; i++) {
        createSnowflake(container);
    }
    
    // Criar fogos de artifício
    for (let i = 0; i < 10; i++) {
        createFirework(container);
    }
}

// Criar floco de neve
function createSnowflake(container) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('decoration', 'snowflake');
    snowflake.innerHTML = '❄';
    
    const size = Math.random() * 20 + 15;
    snowflake.style.fontSize = `${size}px`;
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.top = '-30px';
    snowflake.style.opacity = Math.random() * 0.7 + 0.3;
    
    const duration = Math.random() * 10 + 10;
    snowflake.style.animationDuration = `${duration}s`;
    
    container.appendChild(snowflake);
    
    // Remover após animação
    setTimeout(() => {
        if (snowflake.parentNode) {
            snowflake.parentNode.removeChild(snowflake);
        }
    }, duration * 1000);
}

// Criar fogos de artifício
function createFirework(container) {
    const firework = document.createElement('div');
    firework.classList.add('decoration', 'firework');
    firework.innerHTML = '✨';
    
    firework.style.fontSize = `${Math.random() * 25 + 20}px`;
    firework.style.left = `${Math.random() * 100}vw`;
    firework.style.top = `${Math.random() * 100}vh`;
    
    const colors = ['#FFD700', '#FF6B6B', '#00D4FF', '#FFFFFF'];
    firework.style.color = colors[Math.floor(Math.random() * colors.length)];
    
    container.appendChild(firework);
    
    // Remover após animação
    setTimeout(() => {
        if (firework.parentNode) {
            firework.parentNode.removeChild(firework);
        }
    }, 1500);
}

// Criar ornamento de Natal
function createOrnament(container) {
    const ornament = document.createElement('div');
    ornament.classList.add('decoration', 'ornament');
    ornament.innerHTML = '🔴';
    
    ornament.style.fontSize = `${Math.random() * 25 + 20}px`;
    ornament.style.left = `${Math.random() * 100}vw`;
    ornament.style.top = `${Math.random() * 100}vh`;
    
    const duration = Math.random() * 2 + 2;
    ornament.style.animationDuration = `${duration}s`;
    
    container.appendChild(ornament);
}

// Criar confete
function createConfetti(container) {
    const confetti = document.createElement('div');
    confetti.classList.add('decoration');
    confetti.innerHTML = '🎊';
    
    confetti.style.fontSize = `${Math.random() * 15 + 10}px`;
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.top = `${Math.random() * 100}vh`;
    
    // Animação de queda
    confetti.style.animation = `fall ${Math.random() * 5 + 3}s linear infinite`;
    
    const colors = ['#FFD700', '#FF6B6B', '#00D4FF', '#228B22', '#8B0000'];
    confetti.style.color = colors[Math.floor(Math.random() * colors.length)];
    
    container.appendChild(confetti);
}

// Inicializar animações de elementos
function initAnimations() {
    // Animar botões
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Animar cartões
    const cards = document.querySelectorAll('.intro-card, .message-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 300);
    });
    
    // Efeito de revelação suave para o texto das mensagens
    const messageTexts = document.querySelectorAll('.message-text');
    messageTexts.forEach((text, index) => {
        text.style.opacity = '0';
        text.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
            text.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            text.style.opacity = '1';
            text.style.transform = 'translateX(0)';
        }, 500 + (index * 200));
    });
    
    // Efeito especial para títulos
    const titles = document.querySelectorAll('.message-title, .intro-title');
    titles.forEach(title => {
        const originalText = title.textContent;
        
        // Adicionar pequena animação de digitação apenas para mensagens
        if (title.classList.contains('message-title')) {
            title.textContent = '';
            
            let i = 0;
            function typeWriter() {
                if (i < originalText.length) {
                    title.textContent += originalText.charAt(i);
                    i++;
                    setTimeout(typeWriter, 80);
                }
            }
            
            setTimeout(typeWriter, 800);
        }
    });
}

// Adicionar estilos para animações
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes explode {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        50% {
            transform: scale(1.5) rotate(90deg);
            opacity: 0.8;
        }
        100% {
            transform: scale(2) rotate(180deg);
            opacity: 0;
        }
    }
    
    @keyframes swing {
        0%, 100% { 
            transform: rotate(-15deg) translateY(0); 
        }
        50% { 
            transform: rotate(15deg) translateY(-10px); 
        }
    }
`;
document.head.appendChild(style);

// Recriar decorações periodicamente para manter a tela animada
setInterval(() => {
    const currentPage = window.location.pathname.split('/').pop();
    const container = document.getElementById('decorations-container');
    
    // Limpar decorações antigas
    const oldDecorations = container.querySelectorAll('.decoration');
    if (oldDecorations.length > 50) {
        for (let i = 0; i < 10; i++) {
            if (oldDecorations[i]) {
                container.removeChild(oldDecorations[i]);
            }
        }
    }
    
    // Adicionar novas decorações
    if (currentPage === 'natal.html') {
        createSnowflake(container);
        if (Math.random() > 0.7) createOrnament(container);
    } else if (currentPage === 'anoNovo.html') {
        if (Math.random() > 0.5) createFirework(container);
        createConfetti(container);
    } else {
        if (Math.random() > 0.5) createSnowflake(container);
        if (Math.random() > 0.5) createFirework(container);
    }
}, 2000);