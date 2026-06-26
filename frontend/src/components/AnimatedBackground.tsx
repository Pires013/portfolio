import { useEffect, useRef } from "react";
import "../styles/AnimatedBackground.css";

/**
 * Fundo interativo e leve: uma rede de "nós de dados" que se conectam
 * entre si e reagem ao mouse. Tema típico de desenvolvimento/dados
 * (grafo de pontos + linhas, como um pipeline de dados).
 */
function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    const canvas = el;
    const context = canvas.getContext("2d");
    if (!context) return;
    const ctx = context;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    type Node = { x: number; y: number; vx: number; vy: number };
    let nodes: Node[] = [];

    const mouse = { x: -9999, y: -9999 };

    const ACCENT = "79, 70, 229"; // --primary

    function buildNodes() {
      // Densidade leve e proporcional à área da tela.
      const count = Math.min(
        90,
        Math.max(28, Math.round((width * height) / 22000))
      );
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      }));
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildNodes();
    }

    const LINK_DIST = 130;
    const MOUSE_DIST = 170;

    let raf = 0;

    function draw() {
      ctx.clearRect(0, 0, width, height);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;

        // Suave atração ao cursor (interatividade leve).
        const mdx = mouse.x - n.x;
        const mdy = mouse.y - n.y;
        const mdist = Math.hypot(mdx, mdy);
        if (mdist < MOUSE_DIST && mdist > 0.01) {
          const pull = (1 - mdist / MOUSE_DIST) * 0.04;
          n.vx += (mdx / mdist) * pull;
          n.vy += (mdy / mdist) * pull;
        }

        // Atrito para manter o movimento contido.
        n.vx *= 0.99;
        n.vy *= 0.99;

        // Borda: faz dar a volta (wrap) para fluxo contínuo.
        if (n.x < -20) n.x = width + 20;
        if (n.x > width + 20) n.x = -20;
        if (n.y < -20) n.y = height + 20;
        if (n.y > height + 20) n.y = -20;
      }

      // Conexões entre nós próximos.
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK_DIST) {
            const alpha = (1 - dist / LINK_DIST) * 0.28;
            ctx.strokeStyle = `rgba(${ACCENT}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Nós.
      for (const n of nodes) {
        const near = Math.hypot(mouse.x - n.x, mouse.y - n.y) < MOUSE_DIST;
        ctx.fillStyle = `rgba(${ACCENT}, ${near ? 0.85 : 0.5})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, near ? 2.6 : 1.8, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    }

    function onMove(e: MouseEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }
    function onLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);

    if (reduceMotion) {
      // Sem animação: desenha um único quadro estático.
      draw();
      cancelAnimationFrame(raf);
    } else {
      raf = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
    };
  }, []);

  return (
    <div className="bg-fx" aria-hidden="true">
      <div className="bg-fx__glow" />
      <canvas ref={canvasRef} className="bg-fx__canvas" />
    </div>
  );
}

export default AnimatedBackground;
