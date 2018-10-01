// question 3: Write a function that converts HEX to RGB.
// Then Make that function autodect the formats so that if you enter HEX color format it returns RGB
// and if you enter RGB color format it returns HEX. Bonus: Release this tool as a npm package.

const hex2rgb = hex =>
	hex.replace(
		/^#?([a-f\d])([a-f\d)])([a-f\d])$/i,
		(m, r, g, b) => '#' + r + r + g + g + b + b
	)
	.substring(1).match(/.{2}/g)
	.map(x => parseInt(x, 16));

const rgb2hex = (r, g, b) => '#' + [r, g, b].map(x => {
	const hex = x.toString(16);
	return hex.length === 1 ? '0' + hex : hex;
}).join('');

const convertHexRgb = (code) => {
	if('object' === typeof(code)) {
		return rgb2hex(code[0],code[1],code[2]);
	} else if ( code.includes(',') ) {
		let colours = code.split(',');
		colours = colours.map(x => Number(x));
		return rgb2hex(colours[0],colours[1],colours[2]);
	}
	return hex2rgb(code);
}

convertHexRgb('#f00');      // 255, 0, 0
convertHexRgb('346');       // 51, 68, 102
convertHexRgb('255,2,5');   // #ff0205
convertHexRgb([255,35,21]); // #ff2315
