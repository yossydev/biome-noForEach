/**
 * 実行結果
 * forEach with map and filter: 22.261ms
 * for...of with continue: 13.72ms
 */
const array = Array.from({ length: 1000000 }, (_, i) => i + 1);

const second = () => {
	console.time("forEach with map and filter");
	const forEachResult = [];
	array
		.filter((num) => num % 2 === 0)
		.map((num) => num * 2)
		.forEach((num) => {
			forEachResult.push(num);
		});
	console.timeEnd("forEach with map and filter");

	console.time("for...of with continue");
	const forOfResult = [];
	for (const num of array) {
		if (num % 2 !== 0) continue;
		forOfResult.push(num * 2);
	}
	console.timeEnd("for...of with continue");

	console.log(forEachResult.length);
	console.log(forOfResult.length);
};

export { second };
