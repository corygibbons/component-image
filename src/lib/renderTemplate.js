const path = require('path')
const nunjucks = require('nunjucks')

const renderComponent = require('./renderComponent')
const parseStyleSheet = require('./parseStyleSheet')

const tplOpts = {
  path: path.join(__dirname, '../view'),
  view: 'index.njk'
}

nunjucks.configure(tplOpts.path, {
  autoescape: true
})

module.exports = async function (component, stylesheet) {
  const template = nunjucks.render(tplOpts.view, {
    component: await renderComponent(component),
    styles: await parseStyleSheet(stylesheet)
  })

  return template
}
