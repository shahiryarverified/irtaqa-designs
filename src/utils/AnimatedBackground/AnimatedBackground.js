// AnimatedBackground.js
import React, { useRef, useEffect } from "react";
import "./animatedbackground.css";

const AnimatedBackground = ({ color1, color2 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const nodes = [];
    const numNodes = 50;
    const maxDistance = 100;

    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;

    class Node {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 3;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = color1;
        ctx.fill();
        ctx.closePath();
      }
    }

    for (let i = 0; i < numNodes; i++) {
      nodes.push(new Node());
    }

    const drawLines = () => {
      let nodeA, nodeB;
      for (let i = 0; i < numNodes; i++) {
        for (let j = i + 1; j < numNodes; j++) {
          nodeA = nodes[i];
          nodeB = nodes[j];
          let dist = Math.sqrt(
            Math.pow(nodeA.x - nodeB.x, 2) + Math.pow(nodeA.y - nodeB.y, 2)
          );
          if (dist < maxDistance) {
            ctx.lineWidth = 0.5;
            ctx.strokeStyle = color2;
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      nodes.forEach((node) => {
        node.draw();
      });
      drawLines();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animate);
    };
  }, [color1, color2]);

  return <canvas ref={canvasRef} className="node-network-animation" />;
};

export default AnimatedBackground;
