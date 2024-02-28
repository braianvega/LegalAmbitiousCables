# Getting Started with AXA Design System Lib

This project is a re-write of the famous Bootsrap library

Minimum recommended : 
Node version 14 or later
Npm version 7.x.x or later

## Available Scripts in Root folder

In the root project directory, you can run:

### `npm ci`

Install all required node modules

### `npm run css`

Builds the css and minified css library files to folder dist/designsystem/css

### `npm run js`

Generate the js files that the library uses into folder [dist/designsystem/js] (axaDesignSystemLib.js and popper.js, etc.)

### `npm run fonts`

copy fonts required for the library into folder [dist/designsystem/fonts]

### `npm run create-zipdist`

compress in zip format ([DesignSystemLib_vx.x.x.zip]) the downloadable current distribution ([dist/designsystem]) and copy it to the folder [downloadfiles] (with other shared elements as figma & sketch files). 

### `npm run create-sources`

copy the whole project sources in the distribution folder ([dist/sources/designsystem_sources]). 

### `npm run create-zip-sources`

compress in zip format ([DesignSystemLib_sources_vx.x.x.zip]) the downloadable sources distribution ([dist/sources/designsystem_sources]) and copy it to the folder [downloadfiles] (with other shared elements). 

### `npm run dev`

Runs the current documentation libray website locally
Open [http://localhost:1234](http://localhost:1234) to view it in the browser.

The page will reload if you make edits (html, js, saas files, etc.).\

> The zip files ([DesignSystemLib_vx.x.x.zip] & [DesignSystemLib_sources_vx.x.x.zip]) must be firstly created (`npm run create-zipdist` & `npm run create-zip-sources`) in folder [downloadfiles] before executiong this command.

### `npm run html:build`

Builds the documentation library website for production mode in the folder www/build (folder is cleaned before building)

> The zip files ([DesignSystemLib_vx.x.x.zip] & [DesignSystemLib_sources_vx.x.x.zip]) must be firstly created (`npm run create-zipdist` & `npm run create-zip-sources`) in folder [downloadfiles] before executiong this command.

> #### before executiong this command :
> - As Publico Headline Bold font is commercial, you must purshase it and put the font files in woff & woff2 format in folder [fonts] with correct name => [fonts/PublicoHeadline-Bold.woff] & [fonts/PublicoHeadline-Bold.woff2]


### Notes

**Note 1: when a new version of the library is created don't forget to add/update version reference and download links in files [package.json], [www/index.html]and [scss/axaDesignSystemLib.scss]**

**Note 2: to build the library and create a release documentation launch the following scripts in order and open documentation here [www/build/index.html]**
#### `npm run css`
#### `npm run js`
#### `npm run fonts`
#### `npm run create-zipdist`
#### `npm run create-sources`
#### `npm run create-zip-sources`
#### `npm run html:build`

**Note 3: cross-var limitation : because of a bug in cross-var you should not have one of your parent folder containing string "src", take care on that limitation when trying to run scripts in a folder containing this string**

**Note 4: As Publico Headline Bold font is commercial, you must purshase it and put the font in woff & woff2 format in folder [fonts] with correct name => [fonts/PublicoHeadline-Bold.woff] & [fonts/PublicoHeadline-Bold.woff2]**

## Copyright and Licensing

### spdx-exceptions
Licenses : [CC-BY-3.0](https://creativecommons.org/licenses/by/3.0/)
Repository : [GITHUB](https://github.com/kemitchell/spdx-exceptions.json)
Publisher: The Linux Foundation
License File: [LICENSE](https://github.com/jslicense/spdx-exceptions.json#readme)

### caniuse-lite
Licenses : [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/)
Repository : [GITHUB](https://github.com/browserslist/caniuse-lite)
Publisher: Ben Briggs
URL : [caniuse.com](https://caniuse.com/)
License File: [LICENSE](https://github.com/browserslist/caniuse-lite/blob/main/LICENSE)