<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contador Roblox Dorado</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
            min-height: 100vh;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            overflow-x: hidden;
        }

        /* Efectos de partículas doradas */
        .gold-particle {
            position: absolute;
            background: radial-gradient(circle, rgba(255,215,0,0.8) 0%, rgba(255,215,0,0) 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1;
        }

        /* Contenedor principal */
        .container {
            position: relative;
            z-index: 2;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            padding: 2rem;
        }

        /* Título con efecto dorado */
        .title {
            background: linear-gradient(to right, #FFD700, #FFA500, #FFD700);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            font-size: 3.5rem;
            font-weight: 700;
            text-align: center;
            margin-bottom: 3rem;
            text-shadow: 0 0 30px rgba(255, 215, 0, 0.3);
            position: relative;
        }

        .title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 25%;
            width: 50%;
            height: 3px;
            background: linear-gradient(to right, transparent, #FFD700, transparent);
            border-radius: 50%;
        }

        /* Contador principal */
        .counter-container {
            background: rgba(26, 26, 26, 0.8);
            border: 2px solid rgba(255, 215, 0, 0.3);
            border-radius: 20px;
            padding: 3rem;
            box-shadow: 
                0 0 60px rgba(255, 215, 0, 0.2),
                inset 0 0 20px rgba(255, 215, 0, 0.1);
            backdrop-filter: blur(10px);
            position: relative;
            overflow: hidden;
            margin-bottom: 2rem;
            min-width: 400px;
            text-align: center;
        }

        .counter-container::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: conic-gradient(
                from 0deg,
                transparent,
                rgba(255, 215, 0, 0.1),
                transparent 30%
            );
            animation: rotate 10s linear infinite;
        }

        @keyframes rotate {
            100% { transform: rotate(360deg); }
        }

        .counter-value {
            font-size: 6rem;
            font-weight: 800;
            background: linear-gradient(45deg, #FFD700, #FFA500, #FFD700);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            text-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
            position: relative;
            z-index: 3;
        }

        .counter-label {
            color: #FFD700;
            font-size: 1.2rem;
            margin-top: 1rem;
            letter-spacing: 2px;
            text-transform: uppercase;
        }

        /* Código del script */
        .script-container {
            background: rgba(0, 0, 0, 0.7);
            border: 1px solid rgba(255, 215, 0, 0.2);
            border-radius: 10px;
            padding: 1.5rem;
            margin-top: 2rem;
            max-width: 800px;
            width: 100%;
            position: relative;
        }

        .script-title {
            color: #FFD700;
            margin-bottom: 1rem;
            font-size: 1.2rem;
        }

        .script-code {
            background: #1a1a1a;
            padding: 1.5rem;
            border-radius: 8px;
            border-left: 4px solid #FFD700;
            color: #FFD700;
            font-family: 'Courier New', monospace;
            font-size: 0.9rem;
            line-height: 1.5;
            overflow-x: auto;
            white-space: pre-wrap;
            word-wrap: break-word;
        }

        .copy-btn {
            background: linear-gradient(45deg, #FFD700, #FFA500);
            color: #000;
            border: none;
            padding: 0.5rem 1.5rem;
            border-radius: 5px;
            cursor: pointer;
            font-weight: 600;
            margin-top: 1rem;
            transition: transform 0.3s, box-shadow 0.3s;
        }

        .copy-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 20px rgba(255, 215, 0, 0.4);
        }

        /* Stats adicionales */
        .stats {
            display: flex;
            gap: 2rem;
            margin-top: 2rem;
            flex-wrap: wrap;
            justify-content: center;
        }

        .stat-box {
            background: rgba(255, 215, 0, 0.1);
            border-radius: 10px;
            padding: 1rem 2rem;
            text-align: center;
            border: 1px solid rgba(255, 215, 0, 0.2);
        }

        .stat-value {
            color: #FFD700;
            font-size: 1.8rem;
            font-weight: 700;
        }

        .stat-label {
            color: rgba(255, 215, 0, 0.8);
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .title {
                font-size: 2.5rem;
            }
            
            .counter-container {
                min-width: 300px;
                padding: 2rem;
            }
            
            .counter-value {
                font-size: 4rem;
            }
        }
    </style>
</head>
<body>
    <!-- Partículas doradas -->
    <div id="particles"></div>

    <!-- Contenido principal -->
    <div class="container">
        <h1 class="title">CONTADOR ROBLOX DORADO</h1>
        
        <div class="counter-container">
            <div class="counter-value" id="counter">0</div>
            <div class="counter-label">EJECUCIONES TOTALES</div>
        </div>

        <div class="stats">
            <div class="stat-box">
                <div class="stat-value" id="today">0</div>
                <div class="stat-label">HOY</div>
            </div>
            <div class="stat-box">
                <div class="stat-value" id="online">0</div>
                <div class="stat-label">EN LÍNEA</div>
            </div>
            <div class="stat-box">
                <div class="stat-value" id="unique">0</div>
                <div class="stat-label">USUARIOS ÚNICOS</div>
            </div>
        </div>

        <div class="script-container">
            <div class="script-title">CÓDIGO PARA ROBLOX:</div>
            <div class="script-code" id="scriptCode">
-- Contador Dorado - Carga este script en Roblox
loadstring(game:HttpGet("https://tu-sitio.railway.app/api/count"))()
            </div>
            <button class="copy-btn" onclick="copyScript()">📋 Copiar Script</button>
        </div>
    </div>

    <script>
        // Efectos de partículas doradas
        function createParticles() {
            const particles = document.getElementById('particles');
            const particleCount = 30;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('gold-particle');
                
                // Tamaño aleatorio
                const size = Math.random() * 100 + 20;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                
                // Posición aleatoria
                particle.style.left = `${Math.random() * 100}vw`;
                particle.style.top = `${Math.random() * 100}vh`;
                
                // Opacidad aleatoria
                particle.style.opacity = Math.random() * 0.3 + 0.1;
                
                // Animación
                particle.animate([
                    { transform: 'translate(0, 0) rotate(0deg)', opacity: particle.style.opacity },
                    { 
                        transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(${Math.random() * 360}deg)`,
                        opacity: Math.random() * 0.2
                    }
                ], {
                    duration: Math.random() * 10000 + 5000,
                    iterations: Infinity,
                    direction: 'alternate'
                });
                
                particles.appendChild(particle);
            }
        }

        // Actualizar contador en tiempo real
        function updateCounter() {
            fetch('/api/counter')
                .then(response => response.json())
                .then(data => {
                    document.getElementById('counter').textContent = data.total;
                    document.getElementById('today').textContent = data.today;
                    document.getElementById('online').textContent = data.online;
                    document.getElementById('unique').textContent = data.unique;
                    
                    // Efecto de animación cuando cambia
                    const counter = document.getElementById('counter');
                    counter.style.transform = 'scale(1.1)';
                    setTimeout(() => {
                        counter.style.transform = 'scale(1)';
                    }, 300);
                })
                .catch(error => console.error('Error:', error));
        }

        // Copiar script al portapapeles
        function copyScript() {
            const scriptText = document.getElementById('scriptCode').textContent;
            navigator.clipboard.writeText(scriptText)
                .then(() => {
                    const btn = document.querySelector('.copy-btn');
                    const originalText = btn.textContent;
                    btn.textContent = '✅ Copiado!';
                    setTimeout(() => {
                        btn.textContent = originalText;
                    }, 2000);
                });
        }

        // Actualizar cada 5 segundos
        setInterval(updateCounter, 5000);

        // Inicializar
        createParticles();
        updateCounter();
        
        // WebSocket para actualizaciones en tiempo real
        const ws = new WebSocket(`wss://${window.location.host}/ws`);
        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.type === 'counter_update') {
                updateCounter();
            }
        };
    </script>
</body>
</html>
