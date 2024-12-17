/**
 * Classify a package based on its dimensions and weight.
 * @param {number} width - The width of the package (in cm)
 * @param {number} height - The height of the package (in cm)
 * @param {number} length - The width of the package (in cm)
 * @param {number} mass - The weight of the package (in kg)
 * @returns {string} 'STANDARD', 'SPECIAL' or 'REJECTED' based on inputs
 * @author Josh Guardino (tsnjcg@gmail.com)
*/
const sort = (width, height, length, mass) => {
	// Validate input
	[width, height, length, mass].forEach(arg => {
		// Falsy, non-numeric and negative values are disallowed
		if (!arg || isNaN(arg) || arg <= 0) throw new Error('Invalid argument(s)');
	});

	// Determine whether package is bulky
	const isBulky = width * length * height >= 1_000_000;
	// Determine whether package is heavy
	const isHeavy = mass >= 20;

	// REJECTED: packages that are both heavy and bulky are rejected.
	if (isBulky && isHeavy) return 'REJECTED';

	// SPECIAL: packages that are either heavy or bulky can't be handled automatically.
	if (isBulky || isHeavy) return 'SPECIAL';

	// STANDARD: standard packages (those that are not bulky or heavy) can be handled normally.
	return 'STANDARD';
};

module.exports = { sort };
