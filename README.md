<div align="center">
  <a href="https://github.com/cheehwatang/github-readme-daily-quotes">
    <img width="100" height="100" src="assets/logo.svg" />
  </a>
  </br>
  <h1 align="center">Daily Quotes Card</h1>
  <p align="center">Inspiring Quotes on your Github Profile</p>
  </br>
  <a href="https://github.com/cheehwatang/github-readme-daily-quotes">
    <img src="https://readme-daily-quotes.vercel.app/api?font=trebuchet_ms" alt="Github Readme Daily Quotes">
  </a>
</div>

</br>

## Features

- [Usage](#usage)
  - [Options Summary](#options-summary)
- [Daily Quotes](#daily-quotes)
  - [Quotes Based on Category](#quotes-from-category)
  - [Customize Quotes](#customize-your-quotes)
- [Themes](#themes)
  - [Color Customization](#color-customization)
- [Fonts](#fonts)
- [Deploy Yourself](#deploy-on-your-own)
  - [On Vercel](#on-vercel)
  - [Keep your fork up to date](#keep-your-fork-up-to-date)

</br>

## Usage

Copy the markdown below and paste it in your Github Readme.

```md
[![Github Readme Daily Quotes](https://readme-daily-quotes.vercel.app/api)](https://github.com/cheehwatang/github-readme-daily-quotes)
```

[![Github Readme Daily Quotes](https://readme-daily-quotes.vercel.app/api)](https://github.com/cheehwatang/github-readme-daily-quotes)

</br>

### Options Summary

You can customize your quote card using the options below.

Use `OPTION=VALUE` parameter like so:

```md
![Github Readme Daily Quotes](https://readme-daily-quotes.vercel.app/api?theme=light)
```

Append the options using the `&` symbol like so:

```md
![Github Readme Daily Quotes](https://readme-daily-quotes.vercel.app/api?theme=light&category=programming)
```

| OPTION       |   DEFAULT   | AVAILABLE                                                     |
| ------------ | :---------: | ------------------------------------------------------------- |
| theme        | github_dark | [All available themes](./src/themes/README.md)                |
| font         |  helvetica  | [All available fonts](./src/fonts/README.md)                  |
| quote        |      -      | Customize your quote                                          |
| author       |      -      | The name of the quote's author                                |
| category     |      -      | programming, stoicism                                         |
| bg_color     |   0d1117    | Card's background color _(hex color)_                         |
| quote_color  |   58a6ff    | Quote text color _(hex color)_                                |
| author_color |   c3d1d9    | Author text color _(hex color)_                               |
| accent_color |   1f6feb    | Accent color for the quotation marks and spacer _(hex color)_ |
| border_color |   e4e2e2    | Card's border color _(hex color)_                             |

</br>

## Daily Quotes

By default, the quote card will display a general quote that will refresh once a day.

For customization, you can:

- [Select a category](#quotes-from-category)
- [Customize your quote](#customize-your-quotes)

</br>

### Quotes from Category

You can select the available category for the quote.

- Programming
- Stoicism

Use `category=QUOTE_CATEGORY` parameter like so:

```md
![Github Readme Daily Quotes](https://readme-daily-quotes.vercel.app/api?category=programming)
```

> More category in-progress.

</br>

### Customize Your Quotes

You can customize the quote and author.

Use `quote=QUOTE` and `author=AUTHOR` parameter, and replace the spaces with `+`. like so:

```md
![Github Readme Daily Quotes](https://readme-daily-quotes.vercel.app/api?author=Me&quote=My+quote)
```

> Recommended to type the quote and the url in the browser, to reformat it, before copying the URL to render the image.

If only `quote` is added, the author defaults to `Anonymous`

</br>

## Themes

You can customize the look of the card without any [manual customization](#color-customization).

Use `theme=THEME_NAME` parameter like so:

```md
![Github Readme Daily Quotes](https://readme-daily-quotes.vercel.app/api?theme=algolia)
```

### 🎨 All Available Inbuilt Themes

Daily Quotes comes with the inbuilt themes (e.g. `light`, `dark`, `vue`, `algolia`, `nord`, `radial`, `dracula`, `monokai`).

You can look at a preview for [all available themes](./src/themes/README.md).

> Consideration: Accessibility with Good Contrast Colors.

Below are some of my personal recommendations:

#### Github Dark (Default) `theme=github_dark`

[![Github Readme Daily Quotes](https://readme-daily-quotes.vercel.app/api?author=Seneca&quote=If%20a%20man%20knows%20not%20to%20which%20port%20he%20sails,%20no%20wind%20is%20favorable.)](https://github.com/cheehwatang/github-readme-daily-quotes)

#### Light `theme=light`

[![Github Readme Daily Quotes](https://readme-daily-quotes.vercel.app/api?theme=light&author=Seneca&quote=If%20a%20man%20knows%20not%20to%20which%20port%20he%20sails,%20no%20wind%20is%20favorable.)](https://github.com/cheehwatang/github-readme-daily-quotes)

#### Dark `theme=dark`

[![Github Readme Daily Quotes](https://readme-daily-quotes.vercel.app/api?theme=dark&author=Seneca&quote=If%20a%20man%20knows%20not%20to%20which%20port%20he%20sails,%20no%20wind%20is%20favorable.)](https://github.com/cheehwatang/github-readme-daily-quotes)

#### Vue `theme=vue`

[![Github Readme Daily Quotes](https://readme-daily-quotes.vercel.app/api?theme=vue&author=Seneca&quote=If%20a%20man%20knows%20not%20to%20which%20port%20he%20sails,%20no%20wind%20is%20favorable.)](https://github.com/cheehwatang/github-readme-daily-quotes)

#### Algolia `theme=algolia`

[![Github Readme Daily Quotes](https://readme-daily-quotes.vercel.app/api?theme=algolia&author=Seneca&quote=If%20a%20man%20knows%20not%20to%20which%20port%20he%20sails,%20no%20wind%20is%20favorable.)](https://github.com/cheehwatang/github-readme-daily-quotes)

#### Radical `theme=radical`

[![Github Readme Daily Quotes](https://readme-daily-quotes.vercel.app/api?theme=radical&author=Seneca&quote=If%20a%20man%20knows%20not%20to%20which%20port%20he%20sails,%20no%20wind%20is%20favorable.)](https://github.com/cheehwatang/github-readme-daily-quotes)

</br>

### Color Customization

You can customize the appearance of your quote card as you wish with the URL parameters.

> If theme is applied, the specified color customization will override the set color theme.

#### Customization Options

- `bg_color` - Card's background color _(hex color)_. Default: `0d1117`.
- `quote_color` - Quote text color _(hex color)_. Default: `58a6ff`.
- `author_color` - Author text color _(hex color)_. Default: `c3d1d9`.
- `accent_color` - Accent color for the quotation marks and spacer _(hex color)_. Default: `1f6feb`.
- `border_color` - Card's border color _(hex color)_. Default: `e4e2e2`.

</br>

## Fonts

You can customize the font of the text.

Use `font=FONT_NAME` parameter like so:

```md
![Github Readme Daily Quotes](https://readme-daily-quotes.vercel.app/api?font=garamond)
```

### ✍️ All Available Inbuilt Fonts

Daily Quotes comes with the common fonts (e.g. `helvetica`, `arial`, `verdana`, `tahoma`, `trebuchet_ms`, `times_new_roman`, `georgia`, `garamond`, `courier_new`).

You can look at a preview for [all available fonts](./src/fonts/README.md).

> Consideration: Readability and Accessibility (especially for cursive fonts).

Below are some of my personal recommendations:

#### Trebuchet MS `font=trebuchet_ms`

[![Github Readme Daily Quotes](https://readme-daily-quotes.vercel.app/api?font=trebuchet_ms&author=Seneca&quote=If%20a%20man%20knows%20not%20to%20which%20port%20he%20sails,%20no%20wind%20is%20favorable.)](https://github.com/cheehwatang/github-readme-daily-quotes)

#### Delius `font=delius`

[![Github Readme Daily Quotes](https://readme-daily-quotes.vercel.app/api?font=delius&author=Seneca&quote=If%20a%20man%20knows%20not%20to%20which%20port%20he%20sails,%20no%20wind%20is%20favorable.)](https://github.com/cheehwatang/github-readme-daily-quotes)

#### Libre Baskerville `font=libre_baskerville`

[![Github Readme Daily Quotes](https://readme-daily-quotes.vercel.app/api?font=libre_baskerville&author=Seneca&quote=If%20a%20man%20knows%20not%20to%20which%20port%20he%20sails,%20no%20wind%20is%20favorable.)](https://github.com/cheehwatang/github-readme-daily-quotes)

#### Merienda `font=merienda`

[![Github Readme Daily Quotes](https://readme-daily-quotes.vercel.app/api?font=merienda&author=Seneca&quote=If%20a%20man%20knows%20not%20to%20which%20port%20he%20sails,%20no%20wind%20is%20favorable.)](https://github.com/cheehwatang/github-readme-daily-quotes)

#### MedievalSharp `font=medieval_sharp`

[![Github Readme Daily Quotes](https://readme-daily-quotes.vercel.app/api?font=medieval_sharp&author=Seneca&quote=If%20a%20man%20knows%20not%20to%20which%20port%20he%20sails,%20no%20wind%20is%20favorable.)](https://github.com/cheehwatang/github-readme-daily-quotes)

</br>

## Deploy On Your Own

### On Vercel

Click on the deploy button to get started!

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/cheehwatang/github-readme-daily-quotes)

<details>
  <summary>
    <strong>🛠️ Step-by-step guide on setting up your own Vercel instance</strong>
  </summary>

1.  Go to [vercel.com/login](https://vercel.com/login).
2.  Sign in with GitHub by pressing `Continue with GitHub`.
    ![Vercel Login Page](https://res.cloudinary.com/dsx50recn/image/upload/v1683881307/Github%20Readme%20Daily%20Quotes/Vercel_Login_pupkez.png)
3.  Sign in to GitHub and allow access to all repositories if prompted.
4.  Fork this repo.
5.  Go back to your [Vercel new project page](https://vercel.com/new).
6.  Click the `Continue with GitHub` button, search for the required Git Repository and import it by clicking the `Import` button. Alternatively, you can import a Third-Party Git Repository using the `Import Third-Party Git Repository ->` link at the bottom of the page.
    ![Vercel New Project Page](https://res.cloudinary.com/dsx50recn/image/upload/v1683881309/Github%20Readme%20Daily%20Quotes/Import_Github_Repo_n71zr8.png)
7.  Click deploy, and you're good to go.
8.  To access the api, visit `https://[YOUR DOMAIN]/api`

</details>

### Keep your fork up to date

You can keep your fork, and thus your private Vercel instance up to date with the upstream using GitHubs' [Sync Fork button](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork). You can also use the [pull](https://github.com/wei/pull) package created by [@wei](https://github.com/wei) to automate this process.

</br>

## 🌟 Special Thanks

<blockquote>
  Appreciate the wonderful contributions from the community.</br>
  If you like their work, give a star to their repo and contribute if you can.
</blockquote>

</br>

#### Inspiration and Learning

<ul>
  <li>
    <p>Themes Based-on </p>
    <a href="https://github.com/anuraghazra/github-readme-stats#gh-dark-mode-only">
      <img src="https://img.shields.io/badge/GitHub Readme Stats-0D1117?style=flat-square#gh-dark-mode-only"/>
    </a>
    <a href="https://github.com/anuraghazra/github-readme-stats#gh-light-mode-only">
      <img src="https://img.shields.io/badge/GitHub Readme Stats-FFFFFF?style=flat-square#gh-light-mode-only"/>
    </a>
    <a href="https://github.com/anuraghazra#gh-dark-mode-only">
      <img src="https://img.shields.io/badge/by-@anuraghazra-0D1117?style=flat-square#gh-dark-mode-only"/>
    </a>
    <a href="https://github.com/anuraghazra#gh-light-mode-only">
      <img src="https://img.shields.io/badge/by-@anuraghazra-FFFFFF?style=flat-square#gh-light-mode-only"/>
    </a>
  </li>
  <li>
    <p>Learning From </p>
    <a href="https://github.com/PiyushSuthar/github-readme-quotes#gh-dark-mode-only">
      <img src="https://img.shields.io/badge/Github Readme Quotes-0D1117?style=flat-square#gh-dark-mode-only"/>
    </a>
    <a href="https://github.com/PiyushSuthar/github-readme-quotes#gh-light-mode-only">
      <img src="https://img.shields.io/badge/Github Readme Quotes-FFFFFF?style=flat-square#gh-light-mode-only"/>
    </a>
    <a href="https://github.com/PiyushSuthar#gh-dark-mode-only">
      <img src="https://img.shields.io/badge/by-@PiyushSuthar-0D1117?style=flat-square#gh-dark-mode-only"/>
    </a>
    <a href="https://github.com/PiyushSuthar#gh-light-mode-only">
      <img src="https://img.shields.io/badge/by-@PiyushSuthar-FFFFFF?style=flat-square#gh-light-mode-only"/>
    </a>
  </li>
  <li>
    <p>Learning From </p>
    <a href="https://github.com/ABSphreak/readme-jokes#gh-dark-mode-only">
      <img src="https://img.shields.io/badge/Github Readme Jokes-0D1117?style=flat-square#gh-dark-mode-only"/>
    </a>
    <a href="https://github.com/ABSphreak/readme-jokes#gh-light-mode-only">
      <img src="https://img.shields.io/badge/Github Readme Jokes-FFFFFF?style=flat-square#gh-light-mode-only"/>
    </a>
    <a href="https://github.com/ABSphreak#gh-dark-mode-only">
      <img src="https://img.shields.io/badge/by-@ABSphreak-0D1117?style=flat-square#gh-dark-mode-only"/>
    </a>
    <a href="https://github.com/ABSphreak#gh-light-mode-only">
      <img src="https://img.shields.io/badge/by-@ABSphreak-FFFFFF?style=flat-square#gh-light-mode-only"/>
    </a>
  </li>
</ul>

</br>

#### External API

<ul>
  <li>
    <a href="https://zenquotes.io#gh-dark-mode-only">
      <img src="https://img.shields.io/badge/ZenQuotes.io-0D1117?style=flat-square#gh-dark-mode-only"/>
    </a>
    <a href="https://zenquotes.io#gh-light-mode-only">
      <img src="https://img.shields.io/badge/ZenQuotes.io-FFFFFF?style=flat-square#gh-light-mode-only"/>
    </a>
  </li>
  <li>
    <a href="https://github.com/tlcheah2/stoic-quote-lambda-public-api#gh-dark-mode-only">
      <img src="https://img.shields.io/badge/Stoicism Quote API-0D1117?style=flat-square#gh-dark-mode-only"/>
    </a>
    <a href="https://github.com/tlcheah2/stoic-quote-lambda-public-api#gh-light-mode-only">
      <img src="https://img.shields.io/badge/Stoicism Quote API-FFFFFF?style=flat-square#gh-light-mode-only"/>
    </a>
    <a href="https://github.com/tlcheah2#gh-dark-mode-only">
      <img src="https://img.shields.io/badge/by-@tlcheah2-0D1117?style=flat-square#gh-dark-mode-only"/>
    </a>
    <a href="https://github.com/tlcheah2#gh-light-mode-only">
      <img src="https://img.shields.io/badge/by-@tlcheah2-FFFFFF?style=flat-square#gh-light-mode-only"/>
    </a>
  </li>
  <li>
    <a href="https://github.com/skolakoda/programming-quotes-api#gh-dark-mode-only">
      <img src="https://img.shields.io/badge/Programming Quotes API-0D1117?style=flat-square#gh-dark-mode-only"/>
    </a>
    <a href="https://github.com/skolakoda/programming-quotes-api#gh-light-mode-only">
      <img src="https://img.shields.io/badge/Programming Quotes API-FFFFFF?style=flat-square#gh-light-mode-only"/>
    </a>
    <a href="https://github.com/skolakoda#gh-dark-mode-only">
      <img src="https://img.shields.io/badge/by-@skolakoda-0D1117?style=flat-square#gh-dark-mode-only"/>
    </a>
    <a href="https://github.com/skolakoda#gh-light-mode-only">
      <img src="https://img.shields.io/badge/by-@skolakoda-FFFFFF?style=flat-square#gh-light-mode-only"/>
    </a>
  </li>
</ul>

</br>
