const { calcRowCol } = require("./functions");

test("string is 1 or less character", () => {
	expect(calcRowCol("")).toEqual(["false"]);
	expect(calcRowCol(" ")).toEqual(["false"]);
	expect(calcRowCol("a")).toEqual(["false"]);
	expect(calcRowCol("b")).toEqual(["false"]);
	expect(calcRowCol("c")).toEqual(["false"]);
	expect(calcRowCol("d")).toEqual(["false"]);
	expect(calcRowCol("5")).toEqual(["false"]);
});
test("string without comma separator", () => {
	expect(calcRowCol("a1")).toEqual(["false"]);
	expect(calcRowCol("b 2")).toEqual(["false"]);
	expect(calcRowCol("c.3")).toEqual(["false"]);
});
test("coordinate not starting with a,b,c and/or number is 0 or bigger than 3", () => {
	expect(calcRowCol("d,1")).toEqual(["false"]);
	expect(calcRowCol("0,2")).toEqual(["false"]);
	expect(calcRowCol(" ,3")).toEqual(["false"]);
	expect(calcRowCol("a,4")).toEqual([0, "false"]);
	expect(calcRowCol("b,0")).toEqual([1, "false"]);
	expect(calcRowCol("c,100")).toEqual([2, "false"]);
	expect(calcRowCol("ac,4")).toEqual(["false", "false"]);
});

test("string is correct", () => {
	expect(calcRowCol("a,1")).toEqual([0, 0]);
	expect(calcRowCol("a,2")).toEqual([0, 1]);
	expect(calcRowCol("a,3")).toEqual([0, 2]);
	expect(calcRowCol("b,1")).toEqual([1, 0]);
	expect(calcRowCol("b,2")).toEqual([1, 1]);
	expect(calcRowCol("b,3")).toEqual([1, 2]);
	expect(calcRowCol("c,1")).toEqual([2, 0]);
	expect(calcRowCol("c,2")).toEqual([2, 1]);
	expect(calcRowCol("c,3")).toEqual([2, 2]);
});
