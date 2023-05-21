import { QuoteData } from '../utils/setQuoteData';
import { Theme } from '../utils/setTheme';
import { ThemeBorder } from '../utils/setBorder';
import { FontData } from '../utils/setFont';
import { FontDefinition } from './FontDefinition';

class QuoteCard {
	static build = (
		data: QuoteData,
		theme: Theme,
		border: ThemeBorder,
		font: FontData
	): string => {
		const { quote, author } = data;

		const { bg_color, quote_color, author_color, accent_color, border_color } =
			theme;

		const { border_width, border_radius } = border;

		return `
      <svg width="500" height="200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <foreignObject width="100%" height="100%">
          <div xmlns="http://www.w3.org/1999/xhtml">
            ${FontDefinition.build(font.name, font.woff)}
            <style>
              * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
              }
              .card {
                font-family: ${font.family};
                background-color: #${bg_color};
                padding: 14px 18px;
                width: 500px;
                height: 200px;
                border: ${border_width}px solid #${border_color};
                border-radius: ${border_radius}px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
              }
              .quote {
                font-size: 18px;
                color: #${quote_color};
                line-height: 1.2;
              }
              .quote::before,
              .quote::after {
                display: block;
                font-size: 44px;
                color: #${accent_color};
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
                color: #${author_color};
                padding: 0 4px 4px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
              .author::before {
                display: block;
                content: '';
                width: 24px;
                border-bottom: solid 3px #${accent_color};
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
                  ${quote}
                </span>
              </h1>
              <p class="author">${author}</p>
            </div>
          </div>
        </foreignObject>
      </svg>
    `;
	};
}

export { QuoteCard };
