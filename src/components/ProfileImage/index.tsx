import { FC } from 'react'

import Canvas from './Canvas';
import {
  Frame1,
  Frame2,
  Frame3,
  Inner,
  Name,
  NameWrapper,
  PictureBox,
  Wrapper,
  SeperatorLine
} from './styles'

const ProfileImage: FC = () => {

  return (
    <Wrapper>
      <Inner>
        <NameWrapper>
          <Name>Eldiiar Saparbekov</Name>
          <SeperatorLine />
        </NameWrapper>
        <PictureBox >
          <Canvas />
        </PictureBox>
        <Frame1 />
        <Frame2 />
        <Frame3 />
      </Inner>
    </Wrapper>
  )
}

export default ProfileImage

// const pictureBox = pictureBoxRef.current;
    // const ctx = canvas?.getContext('2d');


    // if (!ctx || !img) return;

    // class Particle {
    //   y: number;
    //   x: number;
    //   size: number;
    //   effect: any;
    //   originX: number;
    //   originY: number;
    //   color: string;
    //   vx: number;
    //   vy: number;
    //   ease: number;
    //   friction: number;
    //   dx: number;
    //   dy: number;
    //   distance: number;
    //   force: number;
    //   angle: number;
    //   constructor(effect: any, x: number, y: number, color: string) {
    //     this.effect = effect;
    //     this.x = Math.random() * this.effect.width;
    //     this.y = Math.random() * this.effect.height;
    //     this.originX = Math.floor(x);
    //     this.originY = Math.floor(y);
    //     this.color = color;
    //     this.size = this.effect.gap;
    //     this.vx = 0;
    //     this.vy = 0;
    //     this.ease = 0.05;
    //     this.friction = 0.98;
    //     this.dx = 0;
    //     this.dy = 0;
    //     this.distance = 0;
    //     this.force = 0;
    //     this.angle = 0;
    //   }
    //   draw(context: CanvasRenderingContext2D) {
    //     context.fillStyle = this.color;
    //     context.fillRect(this.x, this.y, this.size, this.size);
    //   }
    //   update() {
    //     this.dx = this.effect.mouse.x - this.x;
    //     this.dy = this.effect.mouse.y - this.y;
    //     this.distance = this.dx * this.dx + this.dy * this.dy;
    //     this.force = -this.effect.mouse.radius / this.distance;

    //     if (this.distance < this.effect.mouse.radius) {
    //       this.angle = Math.atan2(this.dy, this.dx);
    //       this.vx += this.force * Math.cos(this.angle);
    //       this.vy += this.force * Math.sin(this.angle);
    //     }

    //     this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
    //     this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
    //     console.log(this.effect)
    //   }
    //   warp() {
    //     this.x = Math.random() * this.effect.width;
    //     this.y = Math.random() * this.effect.height;
    //     this.ease = 0.06;
    //   }
    // };

    // class Effect {
    //   width: number;
    //   height: number;
    //   particleArray: any[];
    //   img: HTMLImageElement | null;
    //   gap: number;
    //   mouse: any;
    //   constructor(width: number, height: number) {
    //     this.width = width;
    //     this.height = height;
    //     this.particleArray = [];
    //     this.img = img;
    //     this.gap = 2;
    //     this.mouse = {
    //       radius: 3000,
    //       x: undefined,
    //       y: undefined,
    //     }
    //     canvas?.addEventListener('mousemove', (event) => {
    //       this.mouse.x = event.x;
    //       this.mouse.y = event.y;
    //     })
    //   }
    //   init(context: CanvasRenderingContext2D) {
    //     context.drawImage((this.img || ''), 0, 0, 300, 166);
    //     const pixels = context.getImageData(0, 0, this.width, this.height).data
    //     for (let y = 0; y < this.height; y += this.gap) {
    //       for (let x = 0; x < this.width; x += this.gap) {
    //         const index = (y * this.width + x) * 4;
    //         const red = pixels[index];
    //         const green = pixels[index + 1];
    //         const blue = pixels[index + 2];
    //         const alptha = pixels[index + 3];
    //         const color = `rgb(${red}, ${green}, ${blue})`;

    //         if (alptha > 0) {
    //           this.particleArray.push(new Particle(this, x, y, color));
    //         }
    //       }
    //     }
    //   }
    //   draw(context: CanvasRenderingContext2D) {
    //     this.particleArray.forEach((particle) => particle.draw(context))
    //   }
    //   update() {
    //     this.particleArray.forEach((particle) => particle.update())
    //   }
    //   warp() {
    //     this.particleArray.forEach((particle) => particle.warp())
    //   }
    // };
    // const effect = new Effect(width, height);
    // effect.init(ctx)

    // function animate() {
    //   ctx?.clearRect(0, 0, width, height);
    //   effect.draw(ctx);
    //   effect.update();
    //   requestAnimationFrame(animate);
    // };

    // animate();