import { FontDefinition } from '../../app/templates/FontDefinition';

describe('FontDefinition Test Suite', () => {
	const sut = FontDefinition;

	it('should return the font definition string with the name and woff interpolated', () => {
		const expected = `
      <defs>
        <style type="text/css">
          <![CDATA[
            @font-face {
              font-family: 'TestFont';
              src: url("data:application/font-woff;charset=utf-8;base64,abcd") format('woff');
              font-size: normal;
              font-weight: normal;
            }
          ]]>
        </style>
      </defs>
    `;

		const actual = sut.build('TestFont', 'abcd');

		expect(actual).toBe(expected);
	});
});
