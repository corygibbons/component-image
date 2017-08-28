const ReactDOMServer = require('react-dom/server')

module.exports = function (component) {
  try {
    const renderedComponent = ReactDOMServer.renderToStaticMarkup(component)
    return renderedComponent
  } catch (e) {
    throw Error('Not a valid React component')
  }
}
