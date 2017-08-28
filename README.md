# Component Image

Generate image snapshots of React components for visual regression testing.
This package will only give you the image, you'll have to diff it with something else (like [`jest-image-snapshot`](https://www.npmjs.com/package/jest-image-snapshot)).

[![npm version](https://badge.fury.io/js/component-image.svg)](https://badge.fury.io/js/component-image)
[![Build Status](https://travis-ci.org/corygibbons/component-image.svg?branch=master)](https://travis-ci.org/corygibbons/component-image)
[![codecov](https://codecov.io/gh/corygibbons/component-image/branch/master/graph/badge.svg)](https://codecov.io/gh/corygibbons/component-image)

## Usage

#### Install
```
npm install component-image
```

#### Use
```js
import { generateImage } from 'component-image';

generateImage(component, options);
```

#### Default options
```js
options = {
  // path to .css file
  stylesheet: undefined;
  viewport: {
    width: 800,
    height: 600,
  },
  image: {
    // path to save image, likely not necessary
    path: undefined,
  }
}
```

## Integration Example
Usage with `jest-image-snapshot`:
```js
import React from 'react';
import { generateImage } from 'component-image'

const component = (
  <div>
    <h1>The Component</h1>
  </div>  
);

describe('Test Component', () => {
  it('has no visual regressions', () => {
    
    return generateImage(component, {
      stylesheet: '../../style.css',
      viewport: {
        width: 1000,
        height: 860
      }
    }).then(image => {
      expect(image).toMatchImageSnapshot();
    });

  };
};
```
