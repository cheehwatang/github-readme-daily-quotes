import { borderConfig } from '../config';

type ThemeBorder = {
	border_width: number;
	border_radius: number;
};

const setBorder = (borderData: ThemeBorder): ThemeBorder => {
	for (const key in borderData) {
		const data = borderData[key as keyof ThemeBorder];
		const config = borderConfig[key as keyof ThemeBorder];

		if (!data || !isValueWithinRange(data, config.min, config.max)) {
			borderData[key as keyof ThemeBorder] = config.default;
		}
	}

	return borderData;
};

const isValueWithinRange = (
	value: number,
	min: number,
	max: number
): boolean => {
	return value >= min && value <= max;
};

export { setBorder, ThemeBorder };
