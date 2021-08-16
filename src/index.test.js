import helloWorld from '.';

describe('Hello world', () => {
  it('runs a test', () => {
    expect(helloWorld()).toBe('Hello world!');
  });
});
