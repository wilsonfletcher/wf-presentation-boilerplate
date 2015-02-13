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
npm run start
open http://localhost:3000
```

## Adding slides

1. Duplicate one of the folders inside 



## How-to's

### Add Javascript libraries with Bower 

Install the library as usual. Then open `webpack.config.js` and add an additional line after the `config` variable:

```
config.addVendor('libname', '/libpath/libfile.js');
```

Where `libname` is the name that you will use with require (es: 'jquery') and `libpath` is the library path **relative** to the Bower folder (so without `bower_components`). If you want to use different files between dev/production environments, then use `isProduction` flag.


