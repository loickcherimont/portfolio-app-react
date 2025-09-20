// AI generated
import { useEffect, useRef } from 'react';

interface Star {
    x: number;
    y: number;
    size: number;
    speed: number;
    brightness: number;
    baseBrightness: number;
    twinklePhase: number;
    twinkleSpeed: number;
    color: string;
    pulseIntensity: number;
}

interface ShootingStar {
    x: number;
    y: number;
    length: number;
    speed: number;
    active: boolean;
    opacity: number;
    angle: number;
    trail: Array<{ x: number; y: number; opacity: number }>;
}

const StarryBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationId: number;
        let time = 0;

        // Create cosmic nebula particles for depth
        const nebulae: Array<{ x: number, y: number, size: number, opacity: number, color: string, phase: number }> =
            Array.from({ length: 8 }, () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 150 + 100,
                opacity: Math.random() * 0.1 + 0.05,
                color: Math.random() > 0.5 ? 'rgba(75, 0, 130, ' : 'rgba(25, 25, 112, ', // Purple or midnight blue
                phase: Math.random() * Math.PI * 2
            }));

        // Canvas setup
        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);

        // Futuristic cosmic colors for stars
        const starColors = [
            'rgba(255, 255, 255, ', // Pure white
            'rgba(173, 216, 255, ', // Bright blue
            'rgba(255, 248, 220, ', // Warm white
            'rgba(200, 162, 255, ', // Soft purple
            'rgba(135, 206, 250, ', // Sky blue
            'rgba(147, 112, 219, '  // Medium purple
        ];

        // Enhanced stars configuration - more visible but elegant
        const stars: Star[] = Array.from({ length: 180 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 1.8 + 0.4, // More visible stars
            speed: 0, // Static stars, no movement
            brightness: 0,
            baseBrightness: Math.random() * 0.7 + 0.4, // Brighter base
            twinklePhase: Math.random() * Math.PI * 2,
            twinkleSpeed: Math.random() * 0.015 + 0.005,
            color: starColors[Math.floor(Math.random() * starColors.length)],
            pulseIntensity: Math.random() * 0.3 + 0.15 // More noticeable twinkling
        }));

        // Refined shooting stars configuration - thin and diagonal
        const shootingStars: ShootingStar[] = Array.from({ length: 3 }, () => ({
            x: 0,
            y: 0,
            length: Math.random() * 20 + 15, // Much shorter trails
            speed: Math.random() * 6 + 8,
            active: false,
            opacity: 1,
            angle: 45, // Fixed diagonal angle
            trail: []
        }));

        // Create refined shooting star
        const createShootingStar = () => {
            const inactiveStar = shootingStars.find(star => !star.active);
            if (inactiveStar) {
                // Always start from top-left area for diagonal movement
                inactiveStar.x = Math.random() * (canvas.width * 0.3);
                inactiveStar.y = Math.random() * (canvas.height * 0.3);
                inactiveStar.active = true;
                inactiveStar.opacity = 1;
                inactiveStar.length = Math.random() * 15 + 10; // Very short and fine
                inactiveStar.speed = Math.random() * 4 + 6;
                inactiveStar.angle = 45; // Always diagonal
                inactiveStar.trail = [];
            }
        };

        // More subtle shooting star creation
        let shootingStarTimer = 0;
        const shootingStarInterval = Math.random() * 2000 + 1000; // 1-3 seconds (more frequent)
        // const shootingStarInterval = Math.random() * 5000 + 4000; // 4-9 seconds (less frequent)

        const animate = () => {
            time += 0.016; // ~60fps
            shootingStarTimer += 16;

            // Create cosmic gradient background
            const cosmicGradient = ctx.createRadialGradient(
                canvas.width * 0.3, canvas.height * 0.2, 0,
                canvas.width * 0.7, canvas.height * 0.8, Math.max(canvas.width, canvas.height)
            );

            cosmicGradient.addColorStop(0, 'rgba(10, 10, 50, 0.95)');   // Very dark midnight blue center
            cosmicGradient.addColorStop(0.4, 'rgba(30, 25, 70, 0.9)');  // Dark slate blue
            cosmicGradient.addColorStop(0.7, 'rgba(60, 50, 120, 0.8)'); // Medium-dark slate blue
            cosmicGradient.addColorStop(1, 'rgba(50, 0, 100, 0.85)');   // Dark indigo edges

            ctx.fillStyle = cosmicGradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Add subtle nebula effects
            nebulae.forEach(nebula => {
                nebula.phase += 0.005;
                const dynamicOpacity = nebula.opacity + Math.sin(nebula.phase) * 0.02;

                const nebulaGradient = ctx.createRadialGradient(
                    nebula.x, nebula.y, 0,
                    nebula.x, nebula.y, nebula.size
                );
                nebulaGradient.addColorStop(0, nebula.color + dynamicOpacity + ')');
                nebulaGradient.addColorStop(0.6, nebula.color + (dynamicOpacity * 0.3) + ')');
                nebulaGradient.addColorStop(1, nebula.color + '0)');

                ctx.fillStyle = nebulaGradient;
                ctx.beginPath();
                ctx.arc(nebula.x, nebula.y, nebula.size, 0, Math.PI * 2);
                ctx.fill();
            });

            // Draw regular stars with enhanced effects
            stars.forEach(star => {
                // Advanced twinkling animation
                star.twinklePhase += star.twinkleSpeed;
                const twinkle = Math.sin(star.twinklePhase) * star.pulseIntensity;
                star.brightness = star.baseBrightness + twinkle;
                star.brightness = Math.max(0.1, Math.min(1, star.brightness));

                // Create enhanced glow effect for brighter stars
                if (star.brightness > 0.6) {
                    const glowSize = star.size * 3;
                    const glowGradient = ctx.createRadialGradient(
                        star.x, star.y, 0,
                        star.x, star.y, glowSize
                    );
                    glowGradient.addColorStop(0, star.color + (star.brightness * 0.4) + ')');
                    glowGradient.addColorStop(1, star.color + '0)');

                    ctx.fillStyle = glowGradient;
                    ctx.beginPath();
                    ctx.arc(star.x, star.y, glowSize, 0, Math.PI * 2);
                    ctx.fill();
                }

                // Draw the main star
                ctx.fillStyle = star.color + star.brightness + ')';
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();

                // Add dynamic cross sparkle for bright stars
                if (star.brightness > 0.8) {
                    ctx.strokeStyle = star.color + (star.brightness * 0.7) + ')';
                    ctx.lineWidth = 0.4;
                    const sparkleSize = star.size * 2;

                    // Animated sparkle rotation
                    const sparkleRotation = time * 0.5 + star.twinklePhase;
                    ctx.save();
                    ctx.translate(star.x, star.y);
                    ctx.rotate(sparkleRotation);

                    ctx.beginPath();
                    ctx.moveTo(-sparkleSize, 0);
                    ctx.lineTo(sparkleSize, 0);
                    ctx.moveTo(0, -sparkleSize);
                    ctx.lineTo(0, sparkleSize);
                    ctx.stroke();

                    ctx.restore();
                }

                // Stars remain static (no movement)
            });

            // Create shooting stars more rarely
            if (shootingStarTimer > shootingStarInterval) {
                if (Math.random() < 0.9) { // Only 90% chance
                // if (Math.random() < 0.2) { // Only 20% chance
                    createShootingStar();
                }
                shootingStarTimer = 0;
            }

            // Draw enhanced shooting stars
            shootingStars.forEach(star => {
                if (star.active) {
                    // Calculate trajectory
                    const angleRad = (star.angle * Math.PI) / 180;
                    const dx = Math.cos(angleRad) * star.speed;
                    const dy = Math.sin(angleRad) * star.speed;

                    // Add current position to trail (much shorter)
                    star.trail.push({
                        x: star.x,
                        y: star.y,
                        opacity: star.opacity
                    });

                    // Very short trail
                    if (star.trail.length > 4) {
                        star.trail.shift();
                    }

                    // Draw very subtle trail
                    star.trail.forEach((point, index) => {
                        const trailOpacity = (index / star.trail.length) * point.opacity * 0.3;
                        const trailSize = 0.5; // Very small trail points

                        ctx.fillStyle = `rgba(255, 255, 255, ${trailOpacity})`;
                        ctx.beginPath();
                        ctx.arc(point.x, point.y, trailSize, 0, Math.PI * 2);
                        ctx.fill();
                    });

                    // Draw enhanced shooting star - cosmic colors
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(173, 216, 255, ${star.opacity * 0.9})`; // Cosmic blue
                    ctx.lineWidth = 1; // Slightly thicker for visibility
                    ctx.moveTo(star.x, star.y);
                    ctx.lineTo(star.x - dx * 2, star.y - dy * 2);
                    ctx.stroke();

                    // Add secondary trail with purple tint
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(147, 112, 219, ${star.opacity * 0.6})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(star.x, star.y);
                    ctx.lineTo(star.x - dx * 3, star.y - dy * 3);
                    ctx.stroke();

                    // Enhanced cosmic glow effect
                    const glowGradient = ctx.createRadialGradient(
                        star.x, star.y, 0,
                        star.x, star.y, 12
                    );
                    glowGradient.addColorStop(0, `rgba(173, 216, 255, ${star.opacity * 0.3})`);
                    glowGradient.addColorStop(0.5, `rgba(147, 112, 219, ${star.opacity * 0.2})`);
                    glowGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

                    ctx.fillStyle = glowGradient;
                    ctx.beginPath();
                    ctx.arc(star.x, star.y, 12, 0, Math.PI * 2);
                    ctx.fill();

                    // Move shooting star
                    star.x += dx;
                    star.y += dy;

                    // Fade out as it moves (slower fade for longer visibility)
                    star.opacity *= 0.997;

                    // Reset when off screen or fully faded
                    if (star.x > canvas.width + 100 ||
                        star.y > canvas.height + 100 ||
                        star.x < -100 ||
                        star.y < -100 ||
                        star.opacity < 0.01) {
                        star.active = false;
                        star.trail = [];
                    }
                }
            });

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', setCanvasSize);
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            // fixed top-0 left-0
            className="fixed top-0 left-0 w-full h-full pointer-events-none"
            style={{ zIndex: 0 }}
        />
    );
};

export default StarryBackground;
