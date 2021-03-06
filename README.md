# Basscss for Meteor

Version v7.0.4

Low-level CSS toolkit by [Brent Jackson](https://github.com/basscss/basscss)
http://basscss.com

This package dynamically compiles your cssnext source including the basscss modules at runtime

`kit:cssnext-basscss` depends on and extends `kit:cssnext`

#### Install
```
meteor add kit:cssnext-basscss
```
Create a file named `basscss.next.css` and include modules to taste.
Note: I recommend creating it inside of a `lib` directory to load it before other CSS
e.g. `/client/lib/basscss.next.css`

Below is an example of how to include and compile a custom basscss source.

```CSS
/*
 * Bassplate
 * Boilerplate for Basscss with cssnext
 * http://github.com/basscss/bassplate
 *
 * Remove or comment out unneeded modules and import your own files.
 * Adjust global media queries and custom properties below.
 *
 */


/* Basscss Modules */
@import 'basscss-base-reset';
@import 'basscss-base-forms';
@import 'basscss-base-tables';
@import 'basscss-base-typography';
@import 'basscss-color-base';
@import 'basscss-color-forms';
@import 'basscss-color-tables';
@import 'basscss-btn';
@import 'basscss-btn-primary';
@import 'basscss-btn-outline';
@import 'basscss-type-scale';
@import 'basscss-utility-typography';
@import 'basscss-utility-layout';
@import 'basscss-align';
@import 'basscss-white-space';
@import 'basscss-positions';
@import 'basscss-responsive-states';
@import 'basscss-grid';
@import 'flex-object';
@import 'basscss-borders';
@import 'basscss-colors';
@import 'basscss-background-colors';


/* Optional Modules (not included in Basscss by default) */
/*
@import 'basscss-btn-sizes';
@import 'basscss-color-forms-dark';
@import 'basscss-input-range';
@import 'basscss-progress';
@import 'basscss-background-images';
@import 'basscss-media-object';
@import 'basscss-responsive-white-space';
@import 'basscss-utility-headings';
@import 'basscss-ui-utility-groups';
@import 'basscss-table-object';
@import 'basscss-highlight-dark';
@import 'basscss-highlight';
*/


/* Example custom file import */
/*
@import './color/borders';
*/


/* Default custom properties */
@import 'basscss-defaults';


/* Custom media queries */
/*
@custom-media --breakpoint-sm (min-width: 40em);
@custom-media --breakpoint-md (min-width: 52em);
@custom-media --breakpoint-lg (min-width: 64em);
*/


/* Custom properties */
/*
:root {

  --font-family: 'Helvetica Neue', Helvetica, sans-serif;
  --line-height: 1.5;
  --heading-font-family: var(--font-family);
  --heading-font-weight: bold;
  --heading-line-height: 1.25;
  --monospace-font-family: 'Source Code Pro', Consolas, monospace;

  --h1: 2rem;
  --h2: 1.5rem;
  --h3: 1.25rem;
  --h4: 1rem;
  --h5: .875rem;
  --h6: .75rem;

  --bold-font-weight: bold;

  --space-1: .5rem;
  --space-2: 1rem;
  --space-3: 2rem;
  --space-4: 4rem;

  --form-field-font-size: 1rem;
  --form-field-height: 2.25rem;
  --form-field-padding-y: .5rem;
  --form-field-padding-x: .5rem;

  --button-font-size: inherit;
  --button-font-weight: bold;
  --button-line-height: 1.125rem;
  --button-padding-y: .5rem;
  --button-padding-x: 1rem;

  --container-width: 64em;

  --black:  #111;
  --gray:   #aaa;
  --silver: #ddd;
  --white:  #fff;

  --aqua:   #7fdbff;
  --blue:   #0074d9;
  --navy:   #001f3f;
  --teal:   #39cccc;
  --green:  #2ecc40;
  --olive:  #3d9970;
  --lime:   #01ff70;

  --yellow: #ffdc00;
  --orange: #ff851b;
  --red:    #ff4136;
  --fuchsia:#f012be;
  --purple: #b10dc9;
  --maroon: #85144b;


  --darken-1: rgba(0,0,0,.0625);
  --darken-2: rgba(0,0,0,.125);
  --darken-3: rgba(0,0,0,.25);
  --darken-4: rgba(0,0,0,.5);

  --border-width: 1px;
  --border-radius: 3px;
  --border-color: var(--darken-2);
  --hover-background-color: var(--darken-1);

  --link-color: var(--blue);
  --button-background-color: var(--blue);
  --pre-background-color: var(--silver);

}
*/
```

---

[MIT license](http://opensource.org/licenses/MIT)