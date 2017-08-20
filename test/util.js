const assert = require('assert');
const muk = require('muk');

describe('index.js', () => {
  before(() => {
    instance = require('../src/util.js');
    instance.setLocalStorage('abc', 'value');
    instance.setCookie('xyz', '1');
    instance.setCookie('jkl', '2', '.a.com');
  });
  it('checkLocalStorage', done => {
    assert.equal(instance.checkLocalStorage('abc', 'value2'), false);
    done();
  });
  it('checkLocalStorage <checked>', done => {
    assert.equal(instance.checkLocalStorage('abc', 'value'), true);
    done();
  });
  it('checkCookie', done => {
    assert.equal(instance.checkCookie('xyz', '2'), false);
    done();
  });
  it('checkCookie <checked>', done => {
    assert.equal(instance.checkCookie('xyz', '1'), true);
    done();
  });
  it('checkCookie with unavailable domain', done => {
    assert.equal(instance.checkCookie('jkl', '2'), false);
    done();
  });
})
