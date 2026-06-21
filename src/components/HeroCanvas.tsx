import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

if (!ctx) return;
        let animationFrameId: number;

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth * window.devicePixelRatio;
            canvas.height = canvas.offsetHeight * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Node configuration
        const nodes = [
            { id: 'learner', label: 'Learner', x: 0.18, y: 0.50, size: 8, color: '#38BDF8' },

            { id: 'tara', label: 'TARA', x: 0.45, y: 0.50, size: 20, color: '#6366F1', isCore: true },

            { id: 'curiosity', label: 'Curiosity', x: 0.72, y: 0.28, size: 8, color: '#FBBF24' },

            { id: 'reflection', label: 'Reflection', x: 0.80, y: 0.42, size: 8, color: '#60A5FA' },

            { id: 'exploration', label: 'Exploration', x: 0.78, y: 0.58, size: 8, color: '#34D399' },

            { id: 'understanding', label: 'Understanding', x: 0.70, y: 0.72, size: 8, color: '#A78BFA' },

            { id: 'growth', label: 'Growth', x: 0.60, y: 0.86, size: 14, color: '#F8FAFC' }
        ];

        type Particle = {
            from: typeof nodes[number];
            to: typeof nodes[number];
            progress: number;
            speed: number;
            color: string;
        };

        let particles: Particle[] = [];
        let pulseRadius = 0;

        const spawnParticle = (
            fromNode: typeof nodes[number],
            toNode: typeof nodes[number],
            speed = 0.005
        ) => {
            particles.push({
                from: fromNode,
                to: toNode,
                progress: 0,
                speed: speed + Math.random() * 0.003,
                color: fromNode.color
            });
        };

        let frame = 0;

        const animate = () => {
            frame++;
            const w = canvas.width / window.devicePixelRatio;
            const h = canvas.height / window.devicePixelRatio;

            ctx.clearRect(0, 0, w, h);

            // Core glow pulsation
            pulseRadius = 20 + Math.sin(frame * 0.04) * 8;
            const taraNode = nodes.find(n => n.id === 'tara')!;
            const tx = taraNode.x * w;
            const ty = taraNode.y * h;

            const glowGrad = ctx.createRadialGradient(tx, ty, 0, tx, ty, pulseRadius * 3);
            glowGrad.addColorStop(0, 'rgba(99, 102, 241, 0.15)');
            glowGrad.addColorStop(1, 'rgba(99, 102, 241, 0)');
            ctx.fillStyle = glowGrad;
            ctx.beginPath();
            ctx.arc(tx, ty, pulseRadius * 3, 0, Math.PI * 2);
            ctx.fill();

            // Dynamic stream spawning
            if (frame % 45 === 0) {
                spawnParticle(nodes[0], nodes[1], 0.006); // Learner -> TARA
            }
            if (frame % 30 === 0) {
                const targets = nodes.slice(2);
                const randomTarget = targets[Math.floor(Math.random() * targets.length)];
                spawnParticle(nodes[1], randomTarget, 0.004); // TARA -> Nodes
            }

            // Draw Connections/Bridges
            ctx.lineWidth = 1.5;

            nodes.forEach(n => {
                if (n.id === 'tara') return;

                ctx.beginPath();
                ctx.moveTo(tx, ty);
                ctx.lineTo(n.x * w, n.y * h);

                if (n.id === 'growth') {
                    ctx.strokeStyle = 'rgba(99,102,241,0.7)';
                } else if (n.id === 'learner') {
                    ctx.strokeStyle = 'rgba(56,189,248,0.6)';
                } else {
                    ctx.strokeStyle = 'rgba(255,255,255,0.10)';
                }

                ctx.stroke();
            });

            // Update & Draw Particles
            particles.forEach((p, idx) => {
                p.progress += p.speed;
                if (p.progress >= 1) {
                    particles.splice(idx, 1);
                    return;
                }
                const fx = p.from.x * w;
                const fy = p.from.y * h;
                const txLoc = p.to.x * w;
                const tyLoc = p.to.y * h;

                const px = fx + (txLoc - fx) * p.progress;
                const py = fy + (tyLoc - fy) * p.progress;

                ctx.fillStyle = p.color;
                ctx.shadowBlur = 10;
                ctx.shadowColor = p.color;
                ctx.beginPath();
                ctx.arc(px, py, 3, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 0; // Reset
            });

            // Draw Nodes & Labels
            nodes.forEach(n => {
                const nx = n.x * w;
                const ny = n.y * h;

                // Node circle
                ctx.fillStyle = n.color;
                ctx.beginPath();
                ctx.arc(nx, ny, n.size, 0, Math.PI * 2);
                ctx.fill();

                // Border outline
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
                ctx.lineWidth = 2;
                ctx.stroke();

                // Typography Labels
                ctx.fillStyle = '#CBD5E1';
                const isMobile = w < 500;
                ctx.font = isMobile
                    ? '600 11px Inter, sans-serif'
                    : '600 13px Inter, sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText(n.label, nx, ny + n.size + 16);
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="w-full h-full">
            <canvas
                ref={canvasRef}
                className="w-full h-full block"
            />
        </div>
    );
}