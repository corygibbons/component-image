import fs from 'fs';
import path from 'path';
import React from 'react';
import { generateImage } from '../index';

const component = (
  <div>
    <h1>Component Image</h1>
    <h2>Hello world</h2>
  </div>
);

describe('generateImage()', () => {
  it('saves an image', async () => {
    const result = await generateImage(component, {
      image: {
        path: './test/data/image.png',
      },
    });

    const image = fs.existsSync(path.join(__dirname, 'data/image.png'));
    expect(image).toBe(true);
  });
});
