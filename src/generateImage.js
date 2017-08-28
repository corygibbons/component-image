const path = require('path');
const puppeteer = require('puppeteer');
const merge = require('lodash.merge');

const renderTemplate = require('./lib/renderTemplate');
const takeScreenshot = require('./lib/takeScreenshot');

const defaultOpts = {
  stylesheet: undefined,
  viewport: {
    width: 800,
    height: 600,
  },
  image: {
    path: undefined,
  },
};

const generateImage = async function(component, options) {
  const opts = merge(defaultOpts, options);
  const template = await renderTemplate(component, opts.stylesheet);
  return await takeScreenshot(template, opts);
};

module.exports = generateImage;
