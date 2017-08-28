const renderComponent = require('../src/lib/renderComponent');

describe('renderComponent()', () => {
  it('throws an error if not a valid component', () => {
    expect(() => {
      renderComponent('not a component');
    }).toThrowError('Not a valid React component');
  });
});
