const rangeConfig = { default: 1, max: 2, min: 0 };

jest.doMock('../../app/config', () => ({
	borderConfig: {
		border_width: rangeConfig,
		border_radius: rangeConfig,
	},
}));

import { setBorder, ThemeBorder } from '../../app/utils/setBorder';

describe('setBorder Test Suite', () => {
	const sut = setBorder;

	it('should return ThemeBorder object of same values if values are within config range', () => {
		const border: ThemeBorder = { border_width: 0, border_radius: 0 };

		const actual = sut(border);

		expect(actual).toEqual(border);
	});

	it('should return ThemeBorder object of default values if values are out of config range', () => {
		const border: ThemeBorder = { border_width: 3, border_radius: 3 };

		const actual = sut(border);

		expect(actual.border_width).toBe(rangeConfig.default);
		expect(actual.border_radius).toBe(rangeConfig.default);
	});
});
