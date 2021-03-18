import React, { useEffect, useState, useContext } from "react";
import "./OportunitePage.css";
import AppVisibilityToggle from "../../Components/Shared/AppVisibilityToggle";

function Oportunite() {
  const [start, setStart] = useState(true);
  const [winner, setWinner] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const DIRECTION = {
      IDLE: 0,
      UP: 1,
      DOWN: 2,
      LEFT: 3,
      RIGHT: 4
    };

    const rounds = [3];
    const colors = ["#000000"];

    // The ball object (The cube that bounces back and forth)
    const Ball = {
      new(incrementedSpeed) {
        return {
          width: 18,
          height: 18,
          x: this.canvas.width / 2 - 9,
          y: this.canvas.height / 2 - 9,
          moveX: DIRECTION.IDLE,
          moveY: DIRECTION.IDLE,
          speed: incrementedSpeed || 11
        };
      }
    };

    // The paddle object (The two lines that move up and down)
    const Paddle = {
      new(side) {
        return {
          width: 20,
          height: 100,
          x: side === "left" ? 10 : this.canvas.width - 30,
          y: this.canvas.height / 2 - 50,
          score: 0,
          move: DIRECTION.IDLE,
          speed: 15
        };
      }
    };

    var Game = {
      initialize() {
        this.canvas = document.querySelector("canvas");
        this.context = this.canvas.getContext("2d");
        //   $(function() {
        //     var Grid = function(width, height) {
        //         // codes...
        //     }
        // });

        // this.canvas.width = 1400;
        // this.canvas.height = 1000;

        this.canvas.width = window.innerWidth - 100;
        this.canvas.height = window.innerHeight - 100;

        // this.canvas.style.width = `${this.canvas.width / 2}px`;
        // this.canvas.style.height = `${this.canvas.height / 2}px`;

        this.canvas.style.width = `${this.canvas.width}px`;
        this.canvas.style.height = `${this.canvas.height}px`;

        this.player = Paddle.new.call(this, "left");
        this.paddle = Paddle.new.call(this, "right");
        this.ball = Ball.new.call(this);

        // this.paddle.speed = 8;
        this.paddle.speed = 9.1;
        this.running = this.over = false;
        this.turn = this.paddle;
        this.timer = this.round = 0;
        // this.color = "#2c3e50";
        this.color = "#000000";

        Pong.menu();
        Pong.listen();
      },

      endGameMenu(text) {
        // Change the canvas font size and color
        Pong.context.font = "50px Courier New";
        Pong.context.fillStyle = this.color;

        // Draw the rectangle behind the 'Press any key to begin' text.
        Pong.context.fillRect(
          Pong.canvas.width / 2 - 350,
          Pong.canvas.height / 2 - 48,
          700,
          100
        );

        // Change the canvas color;
        Pong.context.fillStyle = "#ffffff";

        // Draw the end game menu text ('Game Over' and 'Winner')
        Pong.context.fillText(
          text,
          Pong.canvas.width / 2,
          Pong.canvas.height / 2 + 15
        );

        setTimeout(() => {
          Pong = Object.assign({}, Game);
          Pong.initialize();
        }, 3000);
      },

      menu() {
        // Draw all the Pong objects in their current state
        Pong.draw();

        // Change the canvas font size and color
        this.context.font = "50px Courier New";
        this.context.fillStyle = this.color;

        // Draw the rectangle behind the 'Press any key to begin' text.
        this.context.fillRect(
          this.canvas.width / 2 - 350,
          this.canvas.height / 2 - 48,
          700,
          100
        );

        // Change the canvas color;
        this.context.fillStyle = "#ffffff";

        // Draw the 'start any key to begin' text
        this.context.fillText(
          "",
          this.canvas.width / 2,
          this.canvas.height / 2 + 15
        );
      },

      // Update all objects (move the player, paddle, ball, increment the score, etc.)
      update() {
        if (!this.over) {
          // If the ball collides with the bound limits - correct the x and y coords.
          if (this.ball.x <= 0)
            Pong._resetTurn.call(this, this.paddle, this.player);
          if (this.ball.x >= this.canvas.width - this.ball.width)
            Pong._resetTurn.call(this, this.player, this.paddle);
          if (this.ball.y <= 0) this.ball.moveY = DIRECTION.DOWN;
          if (this.ball.y >= this.canvas.height - this.ball.height)
            this.ball.moveY = DIRECTION.UP;

          // Move player if they player.move value was updated by a keyboard event
          if (this.player.move === DIRECTION.UP)
            this.player.y -= this.player.speed;
          else if (this.player.move === DIRECTION.DOWN)
            this.player.y += this.player.speed;

          // On new serve (start of each turn) move the ball to the correct side
          // and randomize the direction to add some challenge.
          if (Pong._turnDelayIsOver.call(this) && this.turn) {
            this.ball.moveX =
              this.turn === this.player ? DIRECTION.LEFT : DIRECTION.RIGHT;
            this.ball.moveY = [DIRECTION.UP, DIRECTION.DOWN][
              Math.round(Math.random())
            ];
            this.ball.y =
              Math.floor(Math.random() * this.canvas.height - 200) + 200;
            this.turn = null;
          }

          // If the player collides with the bound limits, update the x and y coords.
          if (this.player.y <= 0) this.player.y = 0;
          else if (this.player.y >= this.canvas.height - this.player.height)
            this.player.y = this.canvas.height - this.player.height;

          // Move ball in intended direction based on moveY and moveX values
          if (this.ball.moveY === DIRECTION.UP)
            this.ball.y -= this.ball.speed / 1.5;
          else if (this.ball.moveY === DIRECTION.DOWN)
            this.ball.y += this.ball.speed / 1.5;
          if (this.ball.moveX === DIRECTION.LEFT)
            this.ball.x -= this.ball.speed;
          else if (this.ball.moveX === DIRECTION.RIGHT)
            this.ball.x += this.ball.speed;

          // Handle paddle (AI) UP and DOWN movement
          if (this.paddle.y > this.ball.y - this.paddle.height / 2) {
            if (this.ball.moveX === DIRECTION.RIGHT)
              this.paddle.y -= this.paddle.speed / 1.5;
            else this.paddle.y -= this.paddle.speed / 4;
          }
          if (this.paddle.y < this.ball.y - this.paddle.height / 2) {
            if (this.ball.moveX === DIRECTION.RIGHT)
              this.paddle.y += this.paddle.speed / 1.5;
            else this.paddle.y += this.paddle.speed / 4;
          }

          // Handle paddle (AI) wall collision
          if (this.paddle.y >= this.canvas.height - this.paddle.height)
            this.paddle.y = this.canvas.height - this.paddle.height;
          else if (this.paddle.y <= 0) this.paddle.y = 0;

          // Handle Player-Ball collisions
          if (
            this.ball.x - this.ball.width <= this.player.x &&
            this.ball.x >= this.player.x - this.player.width
          ) {
            if (
              this.ball.y <= this.player.y + this.player.height &&
              this.ball.y + this.ball.height >= this.player.y
            ) {
              this.ball.x = this.player.x + this.ball.width;
              this.ball.moveX = DIRECTION.RIGHT;

              // beep1.play();
            }
          }

          // Handle paddle-ball collision
          if (
            this.ball.x - this.ball.width <= this.paddle.x &&
            this.ball.x >= this.paddle.x - this.paddle.width
          ) {
            if (
              this.ball.y <= this.paddle.y + this.paddle.height &&
              this.ball.y + this.ball.height >= this.paddle.y
            ) {
              this.ball.x = this.paddle.x - this.ball.width;
              this.ball.moveX = DIRECTION.LEFT;

              // beep1.play();
            }
          }
        }

        // Handle the end of round transition
        // Check to see if the player won the round.
        if (this.player.score === rounds[this.round]) {
          // Check to see if there are any more rounds/levels left and display the victory screen if
          // there are not.
          if (!rounds[this.round + 1]) {
            this.over = true;
            setTimeout(() => {
              setWinner(true);
              // Pong.endGameMenu("");
            }, 1000);
          } else {
            // If there is another round, reset all the values and increment the round number.
            this.color = this._generateRoundColor();
            this.player.score = this.paddle.score = 0;
            this.player.speed += 0.5;
            this.paddle.speed += 1;
            this.ball.speed += 1;
            this.round += 1;

            // beep3.play();
          }
        }
        // Check to see if the paddle/AI has won the round.
        else if (this.paddle.score === rounds[this.round]) {
          this.over = true;
          setGameOver(true);

          setTimeout(() => {
            Pong = Object.assign({}, Game);
            Pong.initialize();
          }, 500);
        }
      },

      // Draw the objects to the canvas element
      draw() {
        // Clear the Canvas
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Set the fill style to black
        this.context.fillStyle = this.color;

        // Draw the background
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Set the fill style to white (For the paddles and the ball)
        this.context.fillStyle = "#ffffff";

        // Draw the Player
        this.context.fillRect(
          this.player.x,
          this.player.y,
          this.player.width,
          this.player.height
        );

        // Draw the Paddle
        this.context.fillRect(
          this.paddle.x,
          this.paddle.y,
          this.paddle.width,
          this.paddle.height
        );

        // Draw the Ball
        if (Pong._turnDelayIsOver.call(this)) {
          // this.context.fillRect(
          //   this.ball.x,
          //   this.ball.y,
          //   this.ball.width,
          //   this.ball.height
          // );

          this.context.fillStyle = "#ffffff";
          this.context.beginPath();
          this.context.arc(this.ball.x, this.ball.y, 9, 0, 2 * Math.PI);
          this.context.fill();
        }

        // Draw the net (Line in the middle)
        this.context.beginPath();
        this.context.setLineDash([7, 15]);
        this.context.moveTo(this.canvas.width / 2, 0);
        this.context.lineTo(this.canvas.width / 2, this.canvas.height);
        this.context.lineWidth = 1;
        this.context.strokeStyle = !Pong.running ? "transparent" : "#ffffff";
        // this.context.strokeStyle = "transparent";
        this.context.stroke();

        // Set the default canvas font and align it to the center
        this.context.font = "40px Courier New";
        this.context.textAlign = "center";

        // Draw the players score (left)
        this.context.fillText(this.player.score.toString(), 170, 50);

        // Draw the paddles score (right)
        this.context.fillText(
          this.paddle.score.toString(),
          this.canvas.width - 200,
          50
        );

        // Change the font size for the center score text
        this.context.font = "20px Courier New";

        // Draw the winning score (center)
        // this.context.fillText(
        //   `Round ${Pong.round + 1}`,
        //   this.canvas.width / 2,
        //   35
        // );

        // Change the font size for the center score value
        this.context.font = "20px Courier";

        // Draw the current round number
        // this.context.fillText(
        //   rounds[Pong.round] ? rounds[Pong.round] : rounds[Pong.round - 1],
        //   this.canvas.width / 2,
        //   100
        // );
      },

      loop() {
        Pong.update();
        Pong.draw();

        // If the game is not over, draw the next frame.
        if (!Pong.over) requestAnimationFrame(Pong.loop);
      },

      listen() {
        document.addEventListener("keydown", ({ keyCode }) => {
          // Handle the 'Press any key to begin' function and start the game.

          if (Pong.running === false) {
            Pong.running = true;
            setStart(false);
            setGameOver(false);
            window.requestAnimationFrame(Pong.loop);
          }

          // Handle up arrow and w key events
          if (keyCode === 38 || keyCode === 87) Pong.player.move = DIRECTION.UP;

          // Handle down arrow and s key events
          if (keyCode === 40 || keyCode === 83)
            Pong.player.move = DIRECTION.DOWN;
        });

        // Stop the player from moving when there are no keys being pressed.
        document.addEventListener("keyup", key => {
          Pong.player.move = DIRECTION.IDLE;
        });
      },

      // Reset the ball location, the player turns and set a delay before the next round begins.
      _resetTurn(victor, loser) {
        this.ball = Ball.new.call(this, this.ball.speed);
        this.turn = loser;
        this.timer = new Date().getTime();

        victor.score++;
        // beep2.play();
      },

      // Wait for a delay to have passed after each turn.
      _turnDelayIsOver() {
        return new Date().getTime() - this.timer >= 1000;
      },

      // Select a random color as the background of each level/round.
      _generateRoundColor() {
        const newColor = colors[Math.floor(Math.random() * colors.length)];
        if (newColor === this.color) return Pong._generateRoundColor();
        return newColor;
      }
    };

    var Pong = Object.assign({}, Game);
    Pong.initialize();
  }, []);

  return (
    <div className="content_main d-flex justify-content-center align-items-center blackBg">
      <canvas className="d-none d-sm-block"></canvas>
      <AppVisibilityToggle visible={start}>
        <div
          style={{
            backgroundColor: "black",
            color: "white",
            height: "300px",
            width: "700px",
            textAlign: "center",
            position: "absolute"
          }}
          className="d-none d-sm-block"
        >
          <div
            style={{
              textAlign: "center",
              alignItems: "center",
              marginTop: "40px"
            }}
          >
            <p style={{ fontSize: "35px", color: "white" }}>
              Gagnez le droit de postuler! 3 points minimum!
            </p>
            <button
              style={{
                width: "220px",
                height: "60px",
                fontWeight: "bold",
                fontSize: "35px",
                borderRadius: "35px",
                border: "1px groove white",
                backgroundColor: "black",
                color: "white",
                paddingBottom: "10px"
              }}
              onClick={() => {
                setStart(false);
              }}
            >
              DÉMARRER
            </button>
            <p style={{ fontSize: "35px", color: "white" }}>
              Utilisez les flèches haut et bas du clavier
            </p>
          </div>
        </div>
      </AppVisibilityToggle>
      <AppVisibilityToggle visible={winner}>
        <div
          style={{
            backgroundColor: "black",
            color: "white",
            height: "250px",
            width: "600px",
            textAlign: "center",
            position: "absolute"
          }}
        >
          <div
            style={{
              textAlign: "center",
              alignItems: "center",
              marginTop: "40px"
            }}
          >
            <p style={{ fontSize: "46px", color: "white", textAlign: "left" }}>
              BRAVO!&nbsp;:)
            </p>
            <p style={{ fontSize: "24px", color: "white", textAlign: "left" }}>
              Nous cherchons un(e) stagiaire doué(e) en pong & en architecture
              pour une durée de 6 à 12 mois. Immédiatement ou à convenir,
              <p
                style={{ textAlign: "left", fontSize: "24px" }}
                className="mb-0"
              >
                adresse de contact:
                <a
                  href="mailto:info@idos.ch"
                  style={{
                    color: "white",
                    textDecoration: "underline",
                    paddingLeft: "5px",
                    fontSize: "24px"
                  }}
                >
                  archi@idos.ch
                </a>
              </p>
            </p>
          </div>
        </div>
      </AppVisibilityToggle>

      <AppVisibilityToggle visible={gameOver}>
        <div
          style={{
            backgroundColor: "black",
            color: "white",
            height: "150px",
            width: "300px",
            textAlign: "center",
            position: "absolute"
          }}
        >
          <p style={{ fontSize: "35px" }}>Vous avez perdu!&nbsp;:(</p>
          <button
            style={{
              width: "220px",
              height: "60px",
              fontWeight: "bold",
              borderRadius: "35px",
              border: "1px groove white",
              backgroundColor: "black",
              color: "white",
              fontSize: "35px"
            }}
            onClick={() => {
              setGameOver(false);
            }}
          >
            RESSAYER
          </button>
        </div>
      </AppVisibilityToggle>

      <div className="d-block d-sm-none fz23">
        pour gagner le droit de postuler,
        <br></br>
        veuillez utiliser un ordinateur
      </div>
    </div>
  );
}

export default Oportunite;
