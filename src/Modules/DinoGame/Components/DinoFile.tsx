import { useEffect, useState } from 'react';
import '../Style/Style.css'

type Props = {}
let isGameOver: any;
export const DinoFile = (props: Props) => {
    const [point, setPoint] = useState(0);
    const [highScore, setHighScore] = useState(0);

    const jump = () => {
        const dino: any = document.getElementById("dino");
        if (dino.classList !== "jump") {
            dino.classList.add("jump");
            move();
            setTimeout(() => {
                dino.classList.remove("jump");
            }, 300);
        }
    }

    const move = () => {
        const cactus: any = document.getElementById("cactus");
        const gameOver: any = document.getElementById("game-over");
        gameOver.style.display = "none";
        if (cactus.classList !== "move") {
            isGameOver = false;
            cactus.classList.add("move");
            cactus.style.left = "580px";
        }
    }

    const gameOver = () => {
        const dino: any = document.getElementById("dino");
        const cactus: any = document.getElementById("cactus");
        const gameOver: any = document.getElementById("game-over");

        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
        let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
        if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
            isGameOver = true;
            cactus.classList.remove("move");
            cactus.style.left = cactusLeft + "px";
            gameOver.style.display = "block";
        }
    }

    useEffect(() => {
        move();
        document.addEventListener("keydown", (event) => { jump(); });
        return () => { document.removeEventListener('keydown', jump); }
    }, [])

    useEffect(() => {
        const interval = setInterval(() => { gameOver(); }, 10);
        const interval2 = setInterval(() => { if (!isGameOver) { setPoint(prev => prev + 1); } }, 500);

        return () => { clearInterval(interval); clearInterval(interval2) };
    }, []);

    useEffect(() => {
        if (isGameOver) {
            if (point > highScore) { setHighScore(point);  }
            else { setHighScore(highScore); }
        }
        return () => { }
    }, [isGameOver])


    return (
        <div className="game">
            <div style={{ position: "absolute" }}> High Score: {highScore}  Ponit : {point}</div>
            <div id="dino"></div>
            <div id="cactus"></div>
            <div id="game-over">Game Over</div>
        </div>
    )
}
