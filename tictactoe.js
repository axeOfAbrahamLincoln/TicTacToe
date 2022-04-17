const { nextLine } = require("@learnly/simple-reader");
const {
	calcRowCol,
	emptyBoard,
	creatBoardLines,
	printBoard,
	placingXO,
	wins,
} = require("./functions");

// function placingXO(arr1, obj, arr2) {
// 	//placeing marks with the real coordinates from BOAR arr1ay
// 	if (arr1[0] == 0 && arr1[1] == 0) {
// 		obj["rowA"] = obj["rowA"].replaceAt(3, arr2[0][0]);
// 	} else if (arr1[0] == 0 && arr1[1] == 1) {
// 		obj["rowA"] = obj["rowA"].replaceAt(5, arr2[0][1]);
// 	} else if (arr1[0] == 0 && arr1[1] == 2) {
// 		obj["rowA"] = obj["rowA"].replaceAt(7, arr2[0][2]);
// 	}

// 	if (arr1[0] == 1 && arr1[1] == 0) {
// 		obj["rowB"] = obj["rowB"].replaceAt(3, arr2[1][0]);
// 	} else if (arr1[0] == 1 && arr1[1] == 1) {
// 		obj["rowB"] = obj["rowB"].replaceAt(5, arr2[1][1]);
// 	} else if (arr1[0] == 1 && arr1[1] == 2) {
// 		obj["rowB"] = obj["rowB"].replaceAt(7, arr2[1][2]);
// 	}
// 	if (arr1[0] == 2 && arr1[1] == 0) {
// 		obj["rowC"] = obj["rowC"].replaceAt(3, arr2[2][0]);
// 	} else if (arr1[0] == 2 && arr1[1] == 1) {
// 		obj["rowC"] = obj["rowC"].replaceAt(5, arr2[2][1]);
// 	} else if (arr1[0] == 2 && arr1[1] == 2) {
// 		obj["rowC"] = obj["rowC"].replaceAt(7, arr2[2][2]);
// 	}
// }

String.prototype.replaceAt = function (i, char) {
	return this.substring(0, i) + char + this.substring(i + char.length);
};
let tableSize = 3;
let boardLines = creatBoardLines(tableSize);
let board = emptyBoard(tableSize);
let playerChoice;
let computerChoice = [];
const playerWinSign = "XXX";
const compWinSign = "ooo";
let whoStart = Math.floor(Math.random() * 2);

console.log(`Welcome to Adam's Tic Tac Toe game!`);
console.log(`Rules: 
The Board is 3x3`);
printBoard(tableSize, boardLines);
console.log("Place your X using the coordinates separated by comma (row,collumn)\n");

whoStart == 1 ? console.log("--Player starts--\n") : console.log("--Computer starts--\n");

while (true) {
	if (whoStart == 1) {
		console.log("Your turn:");
		while (true) {
			playerChoice = calcRowCol(nextLine().toLowerCase());
			if (playerChoice[0] == "false" || playerChoice[1] == "false") {
				console.log("Incorrect coordinate, try again!");
				continue;
			}
			if (board[playerChoice[0]][playerChoice[1]] == 0) {
				board[playerChoice[0]][playerChoice[1]] = "X";
				placingXO(playerChoice, boardLines, board);
				printBoard(tableSize, boardLines);
				break;
			} else {
				console.log("The slot is taken, try again!");
				continue;
			}
		}
		if (wins(board, playerWinSign)) {
			console.log("Player wins!!! :)");
			break;
		} else if (!(board[0].includes("0") || board[1].includes("0") || board[2].includes("0"))) {
			console.log("It's a draw!");
			break;
		} else {
			whoStart = 0;
			continue;
		}
	} else {
		console.log("Computer's turn:");
		while (true) {
			for (let i = 0; i < 2; i++) {
				computerChoice[0] = Math.floor(Math.random() * 3);
				computerChoice[1] = Math.floor(Math.random() * 3);
			}
			if (board[computerChoice[0]][computerChoice[1]] == 0) {
				board[computerChoice[0]][computerChoice[1]] = "o";
				placingXO(computerChoice, boardLines, board);
				printBoard(tableSize, boardLines);
				break;
			} else continue;
		}
		if (wins(board, compWinSign)) {
			console.log("Computer wins!!! :(");
			break;
		} else if (!(board[0].includes("0") || board[1].includes("0") || board[2].includes("0"))) {
			console.log("It's a draw!");
			break;
		} else {
			whoStart = 1;
			continue;
		}
	}
}
