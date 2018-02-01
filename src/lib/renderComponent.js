const ReactDOMServer = require('react-dom/server')

module.exports = function (component, renderer = ReactDOMServer.renderToStaticMarkup) {
  try {
    const renderedComponent = renderer(component)
    return renderedComponent
  } catch (e) {
    throw Error('Not a valid React component')
  }
}
