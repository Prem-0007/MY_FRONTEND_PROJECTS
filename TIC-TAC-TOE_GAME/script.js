let grids = document.querySelectorAll(".grid");
   let resetButton = document.querySelector("#reset");
       let newButton = document.querySelector("#new");
         let displayResult = document.querySelector("#displayResult");
       let display = document.querySelector("#display");
    displayResult.style.display = "none";
let player1 = true;

const wins = [
    [0,1,2],
         [0,3,6],
               [0,4,8],
                    [1,4,7],
                    [2,5,8],
               [2,4,6],
          [3,4,5],
    [6,7,8]
];

grids.forEach(grid => {
    grid.addEventListener("click", () => {
        if (player1) {
            grid.innerText = "O";
            player1 = false;
        } else {
                   grid.innerText = "X";
                player1 = true;
              }
           grid.disabled = true;
        gameWinner();
    });
});

const displayWinner = (winner) => {
    display.innerText = `Winner is ${winner} , Congratulations 🎉`;
          displayResult.style.display = "block";
};
const gameWinner = () => {
    for (let line of wins) {
       let grid1 = grids[line[0]].innerText;
           let grid2 = grids[line[1]].innerText;
                 let grid3 = grids[line[2]].innerText;
                   if (grid1 !== "" && grid2 !== "" && grid3 !== "") {
              if (grid1 === grid2 && grid2 === grid3) {
           displayWinner(grid1);
        disableAllBoxes();
       return;
            }
        }
    }

    let filled = 0;
    grids.forEach(grid => {
        if (grid.innerText !== "") filled++;
    });

    if (filled === 9) {
        display.innerText = "It's a Tie!";
        displayResult.style.display = "block";
        disableAllBoxes();
    }
};


const disableAllBoxes = () => {
    grids.forEach(btn => btn.disabled = true);
};

const enableAllBoxes = () => {
    grids.forEach(btn => {
        btn.disabled = false;
        btn.innerText = "";
    });
};

const resetGame = () => {
    enableAllBoxes();
    displayResult.style.display = "none";
    player1 = true;
};

const newGame = () => {
    resetGame();
};

resetButton.addEventListener("click", resetGame);
newButton.addEventListener("click", newGame);
