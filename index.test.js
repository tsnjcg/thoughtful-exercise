const { sort } = require('./index');

// Run unit tests on sort() function
describe('index.js', () => {
	test('sends standard package', () => {
		const result = sort(10, 10, 10, 10);
		expect(result).toEqual('STANDARD');
	});0

	test('sends bulky package', () => {
		const result = sort(100, 100, 100, 10);
		expect(result).toEqual('SPECIAL');
	});

	test('sends heavy package', () => {
		const result = sort(10, 10, 10, 20);
		expect(result).toEqual('SPECIAL');
	});

	test('sends bulky and heavy package', () => {
		const result = sort(100, 100, 100, 20);
		expect(result).toEqual('REJECTED');
	});

	test('sends no args', () => {
		expect(() => sort()).toThrow('Invalid argument(s)');
	});

	test('sends non-numeric args', () => {
		expect(() => sort('a', 'b', 'c', 'd')).toThrow('Invalid argument(s)');
	});

	test('sends negative arg(s)', () => {
		expect(() => sort(-1, -1, -1, -1)).toThrow('Invalid argument(s)');
	});

});
