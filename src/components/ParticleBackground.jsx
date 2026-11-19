import { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Cyan -> Electric Blue -> Purple -> Pink Colors
    const colors = [
      { r: 0, g: 229, b: 255 },   /* Cyan */
      { r: 77, g: 148, b: 255 },  /* Electric Blue */
      { r: 168, g: 85, b: 247 },  /* Purple */
      { r: 236, g: 72, b: 153 },  /* Pink */
      { r: 255, g: 46, b: 126 }   /* Neon Pink */
    ];

    const particlesArray = [];
    // ডটের সংখ্যা বাড়িয়ে ডেনসিটি (Density) বাড়ানো হয়েছে (১৮০০০ এর জায়গায় ৮০০০)
    const numberOfParticles = Math.floor((window.innerWidth * window.innerHeight) / 7000);

    class SlowSnowParticle {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -10;
this.size = Math.random() * 0.8 + 0.4; // আগের সূক্ষ্ম সাইজ (0.4px - 1.2px)
        this.speedY = Math.random() * 0.25 + 0.1; // আগের ধীরগতি (Slow Fall)
        this.speedX = (Math.random() - 0.5) * 0.15; // হালকা বাতাস effect
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.5 + 0.2; // আগের অপাসিটি
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;

        if (this.y > canvas.height) {
          this.reset();
        }

        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
      }

      draw() {
        const { r, g, b } = this.color;
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.opacity})`;
        ctx.shadowColor = `rgba(${r}, ${g}, ${b}, 0.5)`;
        ctx.shadowBlur = 4;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new SlowSnowParticle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesArray.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
};

export default ParticleBackground;