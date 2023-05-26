# Welcome to [GitHub Readme Daily Quotes](https://github.com/cheehwatang/github-readme-daily-quotes) contributing guide

Thank you for investing your time in contributing to our project!

Read our [Code of Conduct](./CODE_OF_CONDUCT.md) to keep our community approachable and respectable.

We love your input and join us as a maintainer.

Here are the ways you can contribute to the project:

- Reporting [a bug 🐛](https://github.com/cheehwatang/github-readme-daily-quotes/issues/new?assignees=&labels=%F0%9F%90%9B+bug&projects=&template=bug_report.yml&title=%5BBug%5D%3A+).
- Proposing [new features ✨](https://github.com/cheehwatang/github-readme-daily-quotes/issues/new?assignees=&labels=%E2%9C%A8+new+feature&projects=&template=feature_request.yml&title=%5BFeature%5D%3A+).
- Starting a [discussion](https://github.com/cheehwatang/github-readme-daily-quotes/discussions) about the project.
- [Contribute a custom theme or themes from other card repo](#themes-contribution)

If you want to work on the project, please follow the [local development](#local-development) guide.

</br>

## Local Development

As we need Vercel for development, kindly [create an account](https://vercel.com/signup) if you do not have one.

1.  Fork the repository and clone the code to your local machine.
2.  Run `npm install` in the repository root.
3.  Run the command `vercel dev` to start a development server at <https://localhost:3000>.
4.  The cards will then be available from this local endpoint (i.e. `https://localhost:3000/api`).

Optional - To work with API Ninjas

5.  Create a `.env` file in the root of the directory.
6.  In the .env file add a new variable named `API_NINJAS_KEY` with your [API Ninjas Key](https://api-ninjas.com/profile) ([create an account](https://api-ninjas.com/register) if you do not have one).

</br>

## Themes Contribution

GitHub Readme Daily Quotes supports [custom theming](./README.md#customization). However, if you love a theme that is missing, or you want to contribute new themes, please kindly add the theme! 😊

All you need to do is edit the [themes/index.ts](./src/app/themes/index.ts) file and add your theme at the end of the file.

While creating the Pull Request to add a new theme, **don't forget to add the svg of the card**.

</br>

## License

By contributing, you agree that your contributions will be licensed under its [MIT License](./LICENSE.md).

</br>

<hr>

</br>

## Thank you! ❤️
