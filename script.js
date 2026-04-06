:root {
    --gold: #FFD700;
    --gold-light: #FFF8C6;
    --gold-dark: #B8860B;
    --rose: #FF4081;
    --coral: #FF6B4A;
    --teal: #00E5CC;
    --bg-deep: #05040A;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    overflow: hidden;
    background: var(--bg-deep);
    width: 100vw;
    height: 100vh;
    font-family: 'Playfair Display', serif;
}

canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

#bgCanvas { z-index: 1; }
#fwCanvas { z-index: 2; pointer-events: none; }
#mainCanvas { z-index: 3; pointer-events: none; }

.star-wrapper {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 4;
    cursor: pointer;
    transition: opacity 0.15s;
}

.star-wrapper.hidden {
    opacity: 0;
    pointer-events: none;
}

.star-halo-3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,215,0,0.04) 0%, transparent 65%);
    animation: haloPulse 3s ease-in-out infinite;
}

.star-halo-2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 340px;
    height: 340px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,215,0,0.1) 0%, rgba(255,180,0,0.03) 50%, transparent 70%);
    animation: haloPulse 2.5s ease-in-out infinite 0.4s;
}

.star-halo-1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 220px;
    height: 220px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,230,100,0.35) 0%, rgba(255,200,0,0.08) 50%, transparent 70%);
    animation: haloPulse 2s ease-in-out infinite 0.2s;
}

.star-rays-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 400px;
    animation: raysSpin 15s linear infinite;
}

.star-rays-container-2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 320px;
    height: 320px;
    animation: raysSpin 10s linear infinite reverse;
}

.sray {
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: top center;
    background: linear-gradient(to bottom, rgba(255,215,0,0.5), transparent);
    animation: rayGlow 2.5s ease-in-out infinite;
}

.star-core {
    position: relative;
    z-index: 2;
    animation: starFloat 3.5s ease-in-out infinite;
}

.star-svg {
    width: 150px;
    height: 150px;
    filter: drop-shadow(0 0 15px rgba(255,215,0,0.9))
            drop-shadow(0 0 40px rgba(255,200,0,0.5))
            drop-shadow(0 0 80px rgba(255,180,0,0.3))
            drop-shadow(0 0 120px rgba(255,160,0,0.15));
    animation: starSpin 10s linear infinite;
}

.orbit-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid rgba(255,215,0,0.06);
    border-radius: 50%;
    animation: orbitSpin linear infinite;
}

.orbit-dot {
    position: absolute;
    width: 4px;
    height: 4px;
    background: var(--gold);
    border-radius: 50%;
    box-shadow: 0 0 8px var(--gold), 0 0 16px rgba(255,215,0,0.4);
}

.hint {
    position: fixed;
    bottom: 70px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 5;
    color: rgba(255,215,0,0.4);
    font-size: 13px;
    letter-spacing: 4px;
    text-transform: uppercase;
    animation: hintPulse 2.5s ease-in-out infinite;
    white-space: nowrap;
}

.hint.hidden {
    opacity: 0;
    transition: opacity 0.5s;
}

.flash-overlay {
    position: fixed;
    inset: 0;
    z-index: 20;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.08s;
}

.flash-overlay.fire {
    background: radial-gradient(circle at center, rgba(255,240,180,1) 0%, rgba(255,200,50,0.8) 30%, rgba(255,100,0,0.3) 60%, transparent 80%);
    opacity: 1;
}

.text-stage {
    position: fixed;
    inset: 0;
    z-index: 10;
    pointer-events: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.6s ease;
}

.text-stage.show {
    opacity: 1;
    pointer-events: auto;
}

.line-top {
    width: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--gold), transparent);
    transition: width 1.2s cubic-bezier(0.22,1,0.36,1) 0.3s;
    margin-bottom: 24px;
}

.text-stage.show .line-top {
    width: min(320px, 55vw);
}

.greeting {
    font-family: 'Playfair Display', serif;
    font-weight: 900;
    font-size: clamp(28px, 5vw, 52px);
    color: #FFF8E7;
    letter-spacing: 6px;
    text-transform: uppercase;
    text-align: center;
    transform: translateY(30px) scale(0.9);
    opacity: 0;
    transition: all 1s cubic-bezier(0.22,1,0.36,1) 0.5s;
    filter: drop-shadow(0 0 20px rgba(255,248,231,0.3));
}

.text-stage.show .greeting {
    transform: translateY(0) scale(1);
    opacity: 1;
}

.name {
    font-family: 'Great Vibes', cursive;
    font-weight: 400;
    font-size: clamp(56px, 12vw, 130px);
    line-height: 1.1;
    margin: 8px 0 16px;
    text-align: center;
    transform: translateY(50px) scale(0.7);
    opacity: 0;
    transition: all 1.2s cubic-bezier(0.175,0.885,0.32,1.275) 0.9s;
    color: transparent;
    background: linear-gradient(
        105deg,
        #8B6914 0%, #D4A017 10%, #FFF8C6 20%, #FFD700 30%,
        #B8860B 40%, #FFF3A0 50%, #FFD700 60%, #D4A017 70%,
        #FFF8C6 80%, #B8860B 90%, #8B6914 100%
    );
    background-size: 200% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    animation: liquidGold 4s ease-in-out infinite;
    filter: drop-shadow(0 0 25px rgba(255,215,0,0.7))
            drop-shadow(0 0 50px rgba(255,180,0,0.4))
            drop-shadow(0 0 100px rgba(255,150,0,0.2));
}

.text-stage.show .name {
    transform: translateY(0) scale(1);
    opacity: 1;
}

.line-bottom {
    width: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--gold), transparent);
    transition: width 1.2s cubic-bezier(0.22,1,0.36,1) 1.4s;
    margin-bottom: 20px;
}

.text-stage.show .line-bottom {
    width: min(320px, 55vw);
}

.submessage {
    font-family: 'Playfair Display', serif;
    font-size: clamp(12px, 2vw, 17px);
    color: rgba(255,248,231,0.5);
    letter-spacing: 5px;
    text-transform: uppercase;
    transform: translateY(20px);
    opacity: 0;
    transition: all 0.8s ease 1.7s;
    text-align: center;
    max-width: 600px;
    padding: 0 20px;
}

.text-stage.show .submessage {
    transform: translateY(0);
    opacity: 1;
}

.year-badge {
    margin-top: 28px;
    padding: 8px 28px;
    border: 1px solid rgba(255,215,0,0.25);
    border-radius: 30px;
    font-size: clamp(11px, 1.5vw, 14px);
    color: rgba(255,215,0,0.6);
    letter-spacing: 4px;
    transform: translateY(15px);
    opacity: 0;
    transition: all 0.8s ease 2s;
    background: rgba(255,215,0,0.03);
}

.text-stage.show .year-badge {
    transform: translateY(0);
    opacity: 1;
}

.confetti-piece {
    position: fixed;
    top: -15px;
    z-index: 15;
    pointer-events: none;
}

@keyframes haloPulse {
    0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.7; }
    50% { transform: translate(-50%, -50%) scale(1.12); opacity: 1; }
}

@keyframes raysSpin {
    from { transform: translate(-50%, -50%) rotate(0deg); }
    to { transform: translate(-50%, -50%) rotate(360deg); }
}

@keyframes rayGlow {
    0%, 100% { opacity: 0.25; }
    50% { opacity: 0.7; }
}

@keyframes starFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-14px); }
}

@keyframes starSpin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

@keyframes orbitSpin {
    from { transform: translate(-50%, -50%) rotate(0deg); }
    to { transform: translate(-50%, -50%) rotate(360deg); }
}

@keyframes hintPulse {
    0%, 100% { opacity: 0.25; }
    50% { opacity: 0.55; }
}

@keyframes liquidGold {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
}

@keyframes confettiFall {
    0% { transform: translateY(0) rotate(0deg) rotateX(0deg); opacity: 1; }
    100% { transform: translateY(115vh) rotate(900deg) rotateX(360deg); opacity: 0; }
}

@keyframes sparkleUp {
    0% { transform: translateY(0) scale(0); opacity: 0; }
    15% { transform: translateY(-10vh) scale(1); opacity: 1; }
    100% { transform: translateY(-110vh) scale(0.1); opacity: 0; }
}

@media (max-width: 600px) {
    .star-svg { width: 110px; height: 110px; }
    .star-halo-3 { width: 350px; height: 350px; }
    .star-halo-2 { width: 240px; height: 240px; }
    .star-halo-1 { width: 160px; height: 160px; }
    .star-rays-container { width: 280px; height: 280px; }
    .star-rays-container-2 { width: 220px; height: 220px; }
    .hint { font-size: 11px; bottom: 45px; }
}

@media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}