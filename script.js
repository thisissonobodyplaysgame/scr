<script>
// Secret code logic
function enableSecretLetterCode(code, callback) {
    let pressedKeys = [];
    document.addEventListener('keydown', (event) => {
        pressedKeys.push(event.key.toUpperCase());
        if (pressedKeys.length > code.length) pressedKeys.shift();
        if (pressedKeys.join('') === code.join('')) {
            callback();
            pressedKeys = [];
        }
    });
}

// Function to load your full HTML dynamically
function newWindow() {
    // Remove existing body content
    document.body.innerHTML = '';

    // Inject CSS
    const style = document.createElement('style');
    style.innerHTML = `
    /* Always hide system cursor everywhere */
    body, html, a, button, .game-item, .source-btn {
        cursor: none !important;
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body { width: 100%; height: 100%; font-family: 'Arial', sans-serif; overflow-x: hidden; cursor: none; }

    canvas { position: fixed; top: 0; left: 0; z-index: -1; }

    #cursor-dot {
        position: fixed;
        top: 0;
        left: 0;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background: white;
        pointer-events: none;
        box-shadow: 0 0 12px rgba(255,255,255,0.9), 0 0 20px rgba(255,255,255,0.5);
        z-index: 10000;
        transform: translate(-50%, -50%);
    }

    header {
        text-align: center;
        padding: 30px 0;
        font-size: 3em;
        font-weight: bold;
        color: #fff;
        text-shadow: 0 0 15px #00ffff, 0 0 20px #ff00ff, 0 0 25px #00ffff;
    }

    .section-title {
        text-align: center;
        color: #00ffff;
        font-size: 2em;
        margin: 40px 0 20px 0;
        text-shadow: 0 0 10px #00ffff, 0 0 20px #ff00ff, 0 0 30px #00ffff;
        animation: neonPulse 2s infinite alternate;
    }

    @keyframes neonPulse {
        0% { text-shadow: 0 0 5px #00ffff, 0 0 10px #ff00ff, 0 0 15px #00ffff; }
        50% { text-shadow: 0 0 10px #00ffff, 0 0 20px #ff00ff, 0 0 30px #00ffff; }
        100% { text-shadow: 0 0 5px #00ffff, 0 0 10px #ff00ff, 0 0 15px #00ffff; }
    }

    .game-list {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
        margin-bottom: 40px;
        padding: 0 10px;
    }

    .game-item, .source-btn {
        background-color: rgba(0,0,0,0.6);
        padding: 12px 25px;
        border-radius: 12px;
        font-size: 1.1em;
        text-decoration: none;
        color: #fff;
        box-shadow: 0 0 10px rgba(0,255,255,0.3);
        transition: transform 0.2s, background-color 0.3s, box-shadow 0.3s;
    }

    .game-item:hover, .source-btn:hover {
        transform: scale(1.1);
        background-color: rgba(0,255,255,0.1);
        box-shadow: 0 0 25px rgba(0,255,255,0.7);
    }

    .source-btn {
        color: #00ffff;
        text-shadow: 0 0 10px #00ffff, 0 0 20px #ff00ff;
        box-shadow: 0 0 15px #00ffff, 0 0 20px #ff00ff;
    }

    .separator {
        width: 60%;
        border: none;
        height: 2px;
        margin: 40px auto;
        border-radius: 5px;
        background: linear-gradient(to right, #00ffff, #ff00ff, #00ffff);
        box-shadow: 0 0 15px #00ffff, 0 0 10px #ff00ff;
        animation: pulse 3s infinite alternate;
    }

    @keyframes pulse {
        0% { filter: brightness(0.8); }
        50% { filter: brightness(1.3); }
        100% { filter: brightness(0.8); }
    }

    footer {
        text-align: center;
        position: fixed;
        bottom: 10px;
        width: 100%;
        font-size: 0.9em;
        color: #aaa;
    }

    @media(max-width: 600px) {
        header { font-size: 2em; }
        .section-title { font-size: 1.5em; }
        .game-item, .source-btn { font-size: 1em; padding: 10px 20px; }
        .separator { width: 80%; }
    }
    `;
    document.head.appendChild(style);

    // Inject HTML content
    const htmlContent = `
    <canvas id="bgCanvas"></canvas>
    <div id="cursor-dot"></div>

    <header>MBG HUB</header>

    <div class="game-list">
        <a href="https://thisissonobodyplaysgame.github.io/psify/" target="_blank" class="game-item">PS Emulator</a>
        <a href="https://drive.google.com/drive/folders/1RvzYXb4VGchHekQFJqWRlqJqsRNo2MA9" target="_blank" class="game-item">Movies</a>
        <a href="https://thisissonobodyplaysgame.github.io/senshi" target="_blank" class="game-item">Anime</a>
        <a href="https://docs.google.com/presentation/d/1RNatCJOllzDwxoGTqSH0jGd6C3dW-Y6nxNkI7wC-Yxw/edit?pli=1&slide=id.p#slide=id.p" target="_blank" class="game-item">MBG</a>
        <a href="https://thisissonobodyplaysgame.github.io/cinifyv2/#/home" target="_blank" class="game-item">Spotify</a>
        <a href="https://thebeschgif.capemaycityschool.org/#home" target="_blank" class="game-item">Proxy</a>
        <a href="https://www.youtube.com/@reimagine-ubg" target="_blank" class="game-item">Reimagine Youtube</a>
    </div>

    <hr class="separator">

    <div class="section-title">WEBSITES</div>
    <div class="game-list">
        <a href="https://thisissonobodyplaysgame.github.io/arcade5" target="_blank" class="game-item">Arcade 5</a>
        <a href="http://thisissonobodyplaysgame.github.io/the" target="_blank" class="game-item">Vault Lite</a>
        <a href="https://thisissonobodyplaysgame.github.io/reborn/" target="_blank" class="game-item">UBG 98</a>
        <a href="http://thisissonobodyplaysgame.github.io/Riley/#home" target="_blank" class="game-item">Prolls School 1</a>
        <a href="http://thisissonobodyplaysgame.github.io/go.github.io" target="_blank" class="game-item">Prolls School 2</a>
        <a href="https://thisissonobodyplaysgame.github.io/n3bula/gxmes.html" target="_blank" class="game-item">Astral Gxmes</a>
        <a href="http://thisissonobodyplaysgame.github.io/oo/" target="_blank" class="game-item">Odd Games</a>
        <a href="http://thisissonobodyplaysgame.github.io/maths" target="_blank" class="game-item">Gn-Math</a>
        <a href="https://thisissonobodyplaysgamess.github.io/658/" target="_blank" class="game-item">Mountain Games</a>
        <a href="https://0288007.github.io/metalnet/html/" target="_blank" class="game-item">Math Games</a>
        <a href="https://www.hoodamath.com/games/unblocked.html#gsc.tab=0" target="_blank" class="game-item">Hooda Math</a>
        <a href="https://thisissonobodyplaysgame.github.io/grwsd/" target="_blank" class="game-item">UBG 423</a>
        <a href="https://thisissonobodyplaysgame.github.io/Chicken/index.html" target="_blank" class="game-item">Chickens Vault</a>
        <a href="https://thisissonobodyplaysgame.github.io/coreus/" target="_blank" class="game-item">Coreus</a>
    </div>

    <hr class="separator">

    <div class="section-title">A.I.</div>
    <div class="game-list">
        <a href="http://deepai.com" target="_blank" class="game-item">Deep AI</a>
        <a href="http://perplexity.ai" target="_blank" class="game-item">Perplexity</a>
        <a href="http://google.com/ai" target="_blank" class="game-item">Gemini</a>
        <a href="https://www.aixploria.com/en/free-ai/" target="_blank" class="game-item">AI Tools</a>
        <a href="https://math-gpt.org/" target="_blank" class="game-item">Math GPT</a>
        <a href="https://notegpt.io/ai-homework-helper" target="_blank" class="game-item">Note GPT</a>
    </div>

    <div class="game-list" style="justify-content: center; margin-bottom: 50px;">
        <a href="https://gist.github.com/thisissonobodyplaysgame/dcb9b55dc768850b0ac39481a21d445e#file-index-html" target="_blank" class="source-btn">Source Code</a>
    </div>

    <footer>© 2026 MBG HUB | n3bulastars@gmail.com</footer>
    `;
    document.body.innerHTML = htmlContent;

    // JS for cursor + canvas
    (function() {
        const canvas = document.getElementById('bgCanvas');
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const mouse = { x: width/2, y: height/2 };
        window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

        const cursor = document.getElementById('cursor-dot');
        let cursorX = mouse.x;
        let cursorY = mouse.y;

        const trail = [];
        const trailLength = 10;

        function animateCursor() {
            const speed = 0.35;
            cursorX += (mouse.x - cursorX) * speed;
            cursorY += (mouse.y - cursorY) * speed;
            cursor.style.display = 'block';
            cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;

            trail.push({ x: cursorX, y: cursorY, alpha: 1 });
            if (trail.length > trailLength) trail.shift();

            ctx.save();
            ctx.globalCompositeOperation = 'lighter';
            for (let i = 0; i < trail.length; i++) {
                const p = trail[i];
                ctx.beginPath();
                ctx.arc(p.x, p.y, 8 - i * 0.6, 0, Math.PI*2);
                ctx.fillStyle = \`rgba(255,255,255,\${p.alpha*0.4})\`;
                ctx.shadowColor = 'white';
                ctx.shadowBlur = 8;
                ctx.fill();
                p.alpha -= 0.05;
            }
            ctx.restore();

            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        const dots = [];
        const numDots = 120;
        const maxDistance = 150;
        for (let i=0;i<numDots;i++){
            dots.push({ x: Math.random()*width, y: Math.random()*height, vx: (Math.random()-0.5), vy: (Math.random()-0.5), size: Math.random()*3+1, color:\`hsl(\${Math.random()*360},80%,60%)\` });
        }

        let hue = 0;
        function draw() {
            const gradient = ctx.createLinearGradient(0,0,width,height);
            gradient.addColorStop(0, \`hsl(\${hue},60%,10%)\`);
            gradient.addColorStop(1, \`hsl(\${(hue+60)%360},60%,15%)\`);
            ctx.fillStyle = gradient;
            ctx.fillRect(0,0,width,height);
            hue += 0.2;

            for (let dot of dots){
                dot.x += dot.vx + (mouse.x-width/2)*0.0005;
                dot.y += dot.vy + (mouse.y-height/2)*0.0005;
                if(dot.x<0||dot.x>width) dot.vx*=-1;
                if(dot.y<0||dot.y>height) dot.vy*=-1;
                ctx.beginPath();
                ctx.arc(dot.x,dot.y,dot.size,0,Math.PI*2);
                ctx.fillStyle = dot.color;
                ctx.shadowColor = dot.color;
                ctx.shadowBlur = 10;
                ctx.fill();
                ctx.shadowBlur = 0;
            }

            for(let i=0;i<dots.length;i++){
                for(let j=i+1;j<dots.length;j++){
                    const dx=dots[i].x-dots[j].x;
                    const dy=dots[i].y-dots[j].y;
                    const dist=Math.sqrt(dx*dx+dy*dy);
                    if(dist<maxDistance){
                        ctx.beginPath();
                        ctx.strokeStyle=\`rgba(255,255,255,\${1-dist/maxDistance})\`;
                        ctx.lineWidth=1;
                        ctx.moveTo(dots[i].x,dots[i].y);
                        ctx.lineTo(dots[j].x,dots[j].y);
                        ctx.stroke();
                    }
                }
            }

            for (let dot of dots){
                const dx = dot.x - mouse.x;
                const dy = dot.y - mouse.y;
                const dist = Math.sqrt(dx*dx + dy*dy);
                if(dist<maxDistance){
                    ctx.beginPath();
                    ctx.strokeStyle=\`rgba(255,255,255,\${1-dist/maxDistance})\`;
                    ctx.lineWidth=1;
                    ctx.moveTo(dot.x,dot.y);
                    ctx.lineTo(mouse.x,mouse.y);
                    ctx.stroke();
                }
            }

            requestAnimationFrame(draw);
        }

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        draw();
    })();
}

// Activate secret code (M B G)
enableSecretLetterCode(['M','B','G'], newWindow);
</script>
