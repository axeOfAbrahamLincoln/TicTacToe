function calcRowCol(coords) {
	if (
		coords.length > 1 &&
		(coords.charAt(0) == "a" || coords.charAt(0) == "b" || coords.charAt(0) == "c")
	) {
		let arr = coords.split(",").map((element) => {
			if (element == "a" || element === "1") {
				return 0;
			} else if (element == "b" || element === "2") {
				return 1;
			} else if (element == "c" || element === "3") {
				return 2;
			} else return "false";
		});
		return arr;
	} else return ["false"];
}

function emptyBoard(n) {
	let array = [];
	for (let i = 0; i < n; i++) {
		array.push([]);

		for (let j = 0; j < n; j++) {
			array[i].push("0");
		}
	}

	return array;
}
function creatBoardLines(n) {
	let boardLines = {};
	for (let i = 0; i < n + 2; i++) {
		if (i == 0) boardLines["row123"] = "   1 2 3";
		if (i == 1) boardLines["separator"] = "   - - -";
		if (i == 2) boardLines["rowA"] = "A | | | |";
		if (i == 3) boardLines["rowB"] = "B | | | |";
		if (i == 4) boardLines["rowC"] = "C | | | |";
	}
	return boardLines;
}
function printBoard(n, obj) {
	for (let i = 0; i < n + 4; i++) {
		if (i == 0) console.log(obj.row123);
		if (i == 0 || i % 2 == 0) {
			console.log(obj.separator);
		} else if (i == 1) {
			console.log(obj.rowA);
		} else if (i == 3) {
			console.log(obj.rowB);
		} else if (i == 5) {
			console.log(obj.rowC);
		}
	}
}

function placingXO(arr1, obj, arr2) {
	//placeing marks with the real coordinates from BOAR arr1ay
	if (arr1[0] == 0 && arr1[1] == 0) {
		obj["rowA"] = obj["rowA"].replaceAt(3, arr2[0][0]);
	} else if (arr1[0] == 0 && arr1[1] == 1) {
		obj["rowA"] = obj["rowA"].replaceAt(5, arr2[0][1]);
	} else if (arr1[0] == 0 && arr1[1] == 2) {
		obj["rowA"] = obj["rowA"].replaceAt(7, arr2[0][2]);
	}

	if (arr1[0] == 1 && arr1[1] == 0) {
		obj["rowB"] = obj["rowB"].replaceAt(3, arr2[1][0]);
	} else if (arr1[0] == 1 && arr1[1] == 1) {
		obj["rowB"] = obj["rowB"].replaceAt(5, arr2[1][1]);
	} else if (arr1[0] == 1 && arr1[1] == 2) {
		obj["rowB"] = obj["rowB"].replaceAt(7, arr2[1][2]);
	}
	if (arr1[0] == 2 && arr1[1] == 0) {
		obj["rowC"] = obj["rowC"].replaceAt(3, arr2[2][0]);
	} else if (arr1[0] == 2 && arr1[1] == 1) {
		obj["rowC"] = obj["rowC"].replaceAt(5, arr2[2][1]);
	} else if (arr1[0] == 2 && arr1[1] == 2) {
		obj["rowC"] = obj["rowC"].replaceAt(7, arr2[2][2]);
	}
}

function wins(arr, winSign) {
	//checking rows and column
	for (let i = 0; i < arr.length; i++) {
		let winRow = "";
		for (let j = 0; j < arr.length; j++) {
			winRow += arr[i][j];

			if (winRow == winSign) {
				return true;
			}
		}
		let winCol = "";
		for (let j = 0; j < arr.length; j++) {
			winCol += arr[j][i];
			// console.log(winCol);
			if (winCol == winSign) {
				return true;
			}
		}
		// no need that condition, because when the 2nd for loop ends, means no TRUE returned and finished the original for loop and going to check column
		// if (winRow != winSign) {
		// 	continue;
		// }
	}
	//check column
	// for (let i = 0; i < arr.length; i++) {
	// 	let winCol = "";
	// 	for (let j = 0; j < arr.length; j++) {
	// 		winCol += arr[j][i];
	// 		// console.log(winCol);
	// 		if (winCol == winSign) {
	// 			return true;
	// 		}
	// 	}
	// 	// // no need that condition, because when the 2nd for loop ends, means no TRUE returned and finished the original for loop and going to check diagonal
	// 	// if (winCol != winSign) {
	// 	// 	continue;
	// 	// }
	// }

	// check diagonal
	let winDiag1 = "";
	let winDiag2 = "";
	for (let i = 0; i < arr.length; i++) {
		winDiag1 += arr[i][i];
		winDiag2 += arr[i][2 - i];

		if (winDiag1 == winSign || winDiag2 == winSign) {
			return true;
		}
		// no need that condition, because when the 2nd for loop ends, means no TRUE returned and finished the original for loop
		// 	continue;
		// }
	}
	// no winner line
	return false;
}
module.exports = {
	calcRowCol,
	emptyBoard,
	creatBoardLines,
	printBoard,
	placingXO,
	wins,
};
