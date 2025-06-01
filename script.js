      const input = document.getElementById("input");
      const hint = document.getElementById("hint");
      const chancesDisplay = document.getElementById("chances");

      const number = Math.floor(Math.random() * 100) + 1;
      console.log("Target number:", number);

      let chances = 10;

      function check() {
        const guess = parseInt(input.value);

        if (!guess || guess < 1 || guess > 100) {
          hint.textContent = "Please enter a valid number between 1 and 100.";
          return;
        }

        chances--;

        if (guess === number) {
          hint.textContent = "Congratulations! You guessed the correct number!";
          chancesDisplay.textContent = chances;
          return;
        } else if (guess < number) {
          hint.textContent = "The number is bigger than your guess.";
        } else {
          hint.textContent = "The number is smaller than your guess.";
        }

        chancesDisplay.textContent = chances;

        if (chances === 0) {
          hint.textContent = `Game Over! The correct number was ${number}.`;
          document.querySelector("button").disabled = true;
        }
      }