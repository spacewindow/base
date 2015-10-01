[Base [Sass Version w. Baseline] 1.0.2](http://base.gs/)
======

**Base is a semantic, lightweight and extensible framework to power the next generation of responsive websites.**

It's created and maintained by the team at [@agencysc](https://twitter.com/agencysc). This version forked and modified by [Rob Thwaites](http://robthwaites.com).

## This version

This is one of a few forks of Base, originally built with LESS, which has been ported to use with SASS/SCSS, with the necessary modifications to mixins to accomodate this.

It also shifts the central orgnanising unit for responsive typography from `font-size / ems` to a baseline measure defined in the `rem`s for each device. The system is a slight reversal of Mueller-Brockman's original system – determining the `gutterWidth` of your column structure determines the height of the baseline. The height of the baseline is then attributed to the `rem` unit for the device.

The vertical and horizontal rhythm in your design are therefore fundamentally connected, for unified typographic spacing and design. This relationship can be easily overwritten for each device if necessary.

The reponsive strategy is initially to determine your spacing and sizing of elements (block height / line-height / padding / margin) in `base.scss` in terms of `rems`. Now you can watch the responsive magic happen for each device, while keeping carefully considered sizing according to a baseline grid at various device sizes.

## Get Started

Getting started building websites with Base is easy. You can:

* [Download the latest code](https://github.com/agency/Base/archive/master.zip)
* Clone the repo `git clone https://github.com/agency/base.git`

### What's Inside

When you download Base you'll see a boilerplate `index.html` file and a folder structure like this:

```
| js/
    vendor/
      jquery-1.11.1.0.min.js
      modernizr-2.6.2.min.js
| scss/
    _buttons.scss
    _forms.scss
    _layout.scss
    _mixins.scss
    _menus.scss
    _reset.scss
    _type.scss
    _variables.scss
    base.scss
    desktop.scss
    mobile.scss
    tablet.scss
    styles.scss (compiles)
```

**To note:**
* Files prefixed with ‘_’ do not directly compile by default.
* The Gulp file is set to compile the included base/desktop/tablet/mobile scss files into a single styles.css
* The latest versions of jQuery and Modernizr are included for convenience.
* Base supports all major modern browsers and IE7+.

## Compiling SCSS

Base requires a [SCSS CSS](http://sass-lang.com/) compiler to work its magic. This can be done with [Gulp](http://gulpjs.com/) *(instructions below)* or one of these third-party GUI tools:

* [Codekit (OSX)](http://incident57.com/codekit/)
* [Adobe Brackets (OSX and Windows)](http://brackets.io/)

### Compiling with Gulp

[Gulp](http://gulpjs.com/) is an automated Javascript task-runner installed and managed by [npm](https://npmjs.org/) (the Node.js package manager). If you're unfamiliar with `npm` you can install it from the [Node.js website](http://nodejs.org/download/).

The GulpFile.js includes: [BrowserSync](http://www.browsersync.io/docs/gulp/) to preview your site instantaneously in your browser, and across devices, as you are developing; and a javascript uglify / minify task that can be invoked from the command line using `gulp uglify`.

**In the command line**

1. Install `gulp-cli` with `npm install -g gulp-cli`
2. Navigate to your Base install and run `npm install` to load dependencies.
3. Run `gulp dev` to start watching all `.scss` files for changes and compiling the `styles.scss` file.

## Using Base

Base is easiest to learn by playing with the code. The default `index.html` file contains a quick reference for information on the baseline grid, typography and the grid mixins.

## Authors & Key Contributors

* [Tom Maitland](http://tommaitland.net) / [@tommaitland](https://twitter.com/tommaitland)
* [Scott Sanders](https://twitter.com/scottsanders)
* [Murray Bunton](http://murraybunton.com/) / [@murraybunton](https://twitter.com/murraybunton)
* [Rob Thwaites](http://robthwaites.com/)

## Copyright

Copyright 2015 [Agency Strategic Creative](http://agency.sc/) under the [Apache 2.0 license](https://github.com/agency/base/blob/master/LICENSE).
