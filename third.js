/**
 * 実行結果
 * forEach with filter and forEach: 14.42ms
 * for...of with continue and break: 11.288ms
 */
const array = Array.from({ length: 1000000 }, (_, i) => i + 1);

const thrid = () => {
	console.time("forEach with filter and forEach");
	const forEachResult = [];
	array
		.filter((num) => num % 2 === 0)
		.forEach((num) => {
			forEachResult.push(num * 2);
		});
	console.timeEnd("forEach with filter and forEach");

	console.time("for...of with continue and break");
	const forOfResult = [];
	for (const num of array) {
		if (num % 2 !== 0) continue;
		if (forOfResult.length >= 500000) break;
		forOfResult.push(num * 2);
	}
	console.timeEnd("for...of with continue and break");

	console.log(forEachResult.length);
	console.log(forOfResult.length);
};

export { thrid };
