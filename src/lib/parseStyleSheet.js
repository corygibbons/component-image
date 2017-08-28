const fs = require('fs')

module.exports = function (stylesheet) {
  try {
    const styles = fs.readFileSync(stylesheet, 'utf8')
    return styles
  } catch (e) {
    return ''
  }
}
