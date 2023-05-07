const renderQuoteCard = (): string => {
  const renderedSVG = `
    <svg width="500" height="auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      <foreignObject width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            .card {
              font-family: Helvetica, sans-serif;
              padding: 20px;
              width: 500px;
              border: 2px solid rgba(0, 0, 0);
              border-radius: 4px;
            }
            .quote {
              margin-bottom: 1rem;
            }
            .author {
              font-style: italic;
            }
            .quote::before {
              content: open-quote;
            }
            .quote::after {
              content: close-quote;
            }
            .quote::before, .quote::after {
              display:block;
            }
          </style>
          <div class="card">
            <h1 class="quote">Life is long, if you know how to use it.</h1>
            <p class="author">- Seneca</p>
          </div>
        </div>
      </foreignObject>
    </svg>
  `;

  return renderedSVG;
};

export { renderQuoteCard };
