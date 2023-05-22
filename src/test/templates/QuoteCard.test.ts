import { QuoteCard } from '../../app/templates/QuoteCard';
import { FontDefinition } from '../../app/templates/FontDefinition';
import { QuoteData } from '../../app/utils/setQuoteData';
import { Theme } from '../../app/utils/setTheme';
import { ThemeBorder } from '../../app/utils/setBorder';
import { FontData } from '../../app/utils/setFont';

describe('QuoteCard Test Suite', () => {
	const sut = QuoteCard;

	const fontDefinitionBuildMock = jest.fn();

	const dataMock: QuoteData = { quote: 'testQuote', author: 'testAuthor' };
	const themeMock: Theme = {
		bg_color: '000',
		quote_color: '001',
		author_color: '002',
		accent_color: '003',
		border_color: '004',
	};
	const borderMock: ThemeBorder = { border_width: 1, border_radius: 2 };
	const fontMock: FontData = {
		name: 'testFontName',
		family: 'testFontFamily',
		woff: 'testFontWoff',
	};

	it('should return the quote card string with the data, theme, border and font interpolated', () => {
		FontDefinition.build = fontDefinitionBuildMock;
		fontDefinitionBuildMock.mockImplementation((name: string, woff: string) => {
			return `${name}, ${woff}`;
		});

		const expected = `
      <svg width="500" height="200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <foreignObject width="100%" height="100%">
          <div xmlns="http://www.w3.org/1999/xhtml">
            testFontName, testFontWoff
            <style>
              * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
              }
              .card {
                font-family: testFontFamily;
                background-color: #000;
                padding: 14px 18px;
                width: 500px;
                height: 200px;
                border: 1px solid #004;
                border-radius: 2px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
              }
              .quote {
                font-size: 18px;
                color: #001;
                line-height: 1.2;
              }
              .quote::before,
              .quote::after {
                display: block;
                font-size: 44px;
                color: #003;
                margin-bottom: -26px;
              }
              .quote::before {
                content: open-quote;
                text-align: left;
                transform: translateX(-2px);
              }
              .quote::after {
                content: close-quote;
                text-align: right;
                transform: translateX(2px);
              }
              .author {
                font-size: 14px;
                font-style: italic;
                color: #002;
                padding: 0 4px 4px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
              .author::before {
                display: block;
                content: '';
                width: 24px;
                border-bottom: solid 3px #003;
                margin-bottom: 10px;
              }
              .text-concat {
                padding: 4px 16px;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                overflow: hidden;
              }
            </style>
            <div class="card">
              <h1 class="quote">
                <span class="text-concat">
                  testQuote
                </span>
              </h1>
              <p class="author">testAuthor</p>
            </div>
          </div>
        </foreignObject>
      </svg>
    `;

		const actual = sut.build(dataMock, themeMock, borderMock, fontMock);

		expect(actual).toBe(expected);
		expect(fontDefinitionBuildMock).toHaveBeenCalledWith(
			fontMock.name,
			fontMock.woff
		);
	});
});
