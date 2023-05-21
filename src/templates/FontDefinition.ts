class FontDefinition {
	static build = (name: string, woff: string) => {
		return `
      <defs>
        <style type="text/css">
          <![CDATA[
            @font-face {
              font-family: '${name}';
              src: url("data:application/font-woff;charset=utf-8;base64,${woff}") format('woff');
              font-size: normal;
              font-weight: normal;
            }
          ]]>
        </style>
      </defs>
    `;
	};
}

export { FontDefinition };
