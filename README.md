React presentation boilerplate
=====================

A minimal presentation boilerplate made with:
- React
- React router
- Node Sass
- Webpack


## Getting started

```
npm install
npm run server
open http://localhost:3000
```

## Adding slides

1. Duplicate one of the folders inside 
2. Number the new folder accordingly
3. Restart the sever and the new slide will appear in the correct place
4. Edit the HTML in the slide `index.jsx` file. On save, changes will appear automatically on the browser.


## How-to's


### Add images

Put the image in the slide's folder, then put this block of code in the slide `jsx` template where you want the image to appear,
set the appropriate `% padding` and you are ready to go:

``` jsx
<figure className="SlideItem-inlineFigure" style={{ paddingTop: '30%' }}>
  <img src={require("./my-image-name.jpg")} />
</figure>
```


### Add styles with an external style sheet.

If you need more complex styles, and inline styles are not enough, you can load an external style sheet by creating an `index.scss` file in the slide folder. Then uncomment line 6 in slide's `index.jsx`:

``` js
require("./index.scss");
```

You should prevent styles propagation, so I'd suggest you to wrap all your custom rules in 

``` scss
.SlideItem[data-id="SLIDE_ID"] {
  // all your rules
}
```

where `SLIDE_ID` is the name of the slide foder (eg: 02). Moreover, if you need global vars/utils just add at the beginning of `index.scss`:

``` scss
@import '../../scss/_default';
```


### Export static HTML

```
npm run build
```

This will generate a build folder will all the files needed to run the presentation.
Just copy those files anywhere and `index.html` will work.


### Export a PDF

The simplest way to get a PDF of the entire slideshow is:
1. press the keyboad key `P`, this will trigger the slideshow's list view
2. print it from your browser menu. Each slide should be on a single page.


### Add Javascript libraries with Bower 

Install the library as usual (`bower install xyz`). Then open `webpack.config.js` and add an additional line after the `config` variable:

``` js
config.addVendor('libname', '/libpath/libfile.js');
```

Where `libname` is the name that you will use with require (es: 'jquery') and `libpath` is the library path **relative** to the Bower folder (so without `bower_components`). If you want to use different files between dev/production environments, then use `isProduction` flag. Webpack will minify it anyway on build.


