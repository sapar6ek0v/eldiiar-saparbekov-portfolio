import { useRef, useEffect } from 'react';

import { base64Img } from '../data';

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const myImage = new Image();
    myImage.src = base64Img;

    myImage.addEventListener('load', () => {
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      canvas.width = 354;
      canvas.height = 448;

      if (!ctx) return;

      ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
      const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let particlesArray: {
        speed: number;
        update: () => void;
        draw: (arg0: CanvasRenderingContext2D) => void;
      }[] = [];
      const numberOfParticles = 1000;
      let mappedImage: { cellBrightness: number, cellColor: string }[][] = [];

      for (let y = 0; y < canvas.height; y++) {
        let row = [];
        for (let x = 0; x < canvas.width; x++) {
          const red = pixels.data[y * 4 * pixels.width + x * 4];
          const green = pixels.data[y * 4 * pixels.width + x * 4 + 1];
          const blue = pixels.data[y * 4 * pixels.width + x * 4 + 2];
          const brightness = calculateRelativeBrightness(red, green, blue);
          const cell = { cellBrightness: brightness, cellColor: `rgb(${red}, ${green}, ${blue})` };
          row.push(cell);
        }
        mappedImage.push(row);
      };

      function calculateRelativeBrightness(r: any, g: any, b: any) {
        return Math.sqrt(r * r * 0.299 + g * g + 0.587 + b * b * 0.144) / 100;
      };

      function animate() {
        if (!canvas || !ctx) return;

        ctx.globalAlpha = 0.05;
        ctx.fillStyle = 'rgb(0,0,0)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 0.2;

        for (let i = 0; i < particlesArray.length; i++) {
          particlesArray[i].update();
          ctx.globalAlpha = particlesArray[i].speed * 0.5;
          particlesArray[i].draw(ctx);
        };

        requestAnimationFrame(animate);
      };

      function init() {
        if (!canvas) return;

        for (let i = 0; i < numberOfParticles; i++) {
          particlesArray.push(new Particle(canvas.width, canvas.height));
        };

        animate();
      };

      class Particle {
        x: number;
        y: number;
        speed: number;
        velocity: number;
        size: number;
        pos1: number;
        pos2: number;
        width: number;
        height: number;
        angle: number;
        constructor(width: number, height: number) {
          this.x = Math.random() * width;
          this.y = 0;
          this.speed = 0;
          this.velocity = Math.random() * 0.5;
          this.size = Math.random() * 1.5 + 1;

          this.pos1 = Math.floor(this.y);
          this.pos2 = Math.floor(this.x);

          this.width = width;
          this.height = height;

          this.angle = 0;
        }

        update() {
          this.pos1 = Math.floor(this.y);
          this.pos2 = Math.floor(this.x);
          if ((mappedImage[this.pos1]) && (mappedImage[this.pos1][this.pos2])) {
            this.speed = mappedImage[this.pos1][this.pos2]?.cellBrightness;
          }
          let movement = 2.5 - this.speed + this.velocity;
          this.angle += this.speed / 20;
          this.size = this.speed * 1.5;

          this.y += movement + Math.sin(this.angle) * 2;
          this.x += movement + Math.sin(this.angle) * 1;

          if (this.y >= this.height) {
            this.y = 0;
            this.x = Math.random() * this.width;
          }

          if (this.x >= this.width) {
            this.x = 0;
            this.y = Math.random() * this.width;
          }
        }

        draw(context: CanvasRenderingContext2D) {
          context.beginPath();
          if ((mappedImage[this.pos1]) && (mappedImage[this.pos1][this.pos2])) {
            context.fillStyle = mappedImage[this.pos1][this.pos2]?.cellColor;
            context.strokeStyle = mappedImage[this.pos1][this.pos2]?.cellColor;
          }
          context.arc(this.x, this.y, this.size, 0, Number(Math.PI * 2));
          context.fill();
        }
      };

      init();
    });
  });

  return (
    <canvas
      ref={canvasRef}
    />
  )
};

export default Canvas;