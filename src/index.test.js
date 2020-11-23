const countDown = require('./index.js');

describe('tests for countDown function', () => {
  it('checked correctly number', () =>
    expect(countDown(3)).toBe(console.log(3), console.log(2), console.log(1)));
  it('argument is not a number', () => expect(countDown('3')).toBe(undefined));
  it('argument is float number', () => expect(countDown(2.2)).toBe(undefined));
});
