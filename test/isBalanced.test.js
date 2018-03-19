'use strict';

const isBalanced = require('../bracket-matching');

describe('Return true of the string is balanced, false otherwise', () => {
  it('Should return true for empty string', () => {
    let str = '';
    expect(isBalanced(str)).toBe(true);
  });

  it('Should return true for mathing brackets', () => {
    let str = '{{}}';
    expect(isBalanced(str)).toBe(true);
  });

  it('Should return false for on bracket in string', () => {
    let str = '{';
    expect(isBalanced(str)).toBe(false);
  });

  it('Should return false for non matching brackets', () => {
    let str = '}{';
    expect(isBalanced(str)).toBe(false);
  });
});
