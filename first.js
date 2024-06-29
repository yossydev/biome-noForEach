/**
 * 実行結果
 * forEach: 6.912ms
 * forOf: 10.796ms
 */
const array = Array.from({ length: 1000000 }, (_, i) => i + 1);

const first = () => {
	// forEach版のパフォーマンス測定
	console.time("forEach");
	array.forEach((num) => {
		if (num % 2 === 0) {
			num * 2;
		}
	});
	console.timeEnd("forEach");

	// for...of版のパフォーマンス測定
	console.time("forOf");
	for (const num of array) {
		if (num % 2 === 0) {
			num * 2;
		}
	}
	console.timeEnd("forOf");
};

export { first };
