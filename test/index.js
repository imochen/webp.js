const assert = require('assert');
const muk = require('muk');

describe('index.js', () => {
  it('default options', done => {
    const webpjs = muk('../src/index.js', {
      './util': {
        loadImage(url, fn) {
          fn();
        },
        checkLocalStorage() {
          return false;
        },
        setLocalStorage(key, value) {
          assert.equal(key, 'webp');
          assert.equal(value, '1');
          done();
        }
      }
    });
    webpjs();
  });

  it('default options <checked>', done => {
    const webpjs = muk('../src/index.js', {
      './util': {
        loadImage(url, fn) {
          fn();
        },
        checkLocalStorage() {
          return true;
        }
      }
    });
    assert.equal(webpjs(), true);
    done();
  });

  it('use cookie', done => {
    const webpjs = muk('../src/index.js', {
      './util': {
        loadImage(url, fn) {
          fn();
        },
        checkCookie() {
          return false;
        },
        setCookie(key, value) {
          assert.equal(key, 'webp');
          assert.equal(value, '1');
          done();
        }
      }
    });
    webpjs({
      type: 'cookie'
    });
  });

  it('use cookie with domain', done => {
    const webpjs = muk('../src/index.js', {
      './util': {
        loadImage(url, fn) {
          fn();
        },
        checkCookie() {
          return false;
        },
        setCookie(key, value, domain) {
          assert.equal(key, 'webp');
          assert.equal(value, '1');
          assert.equal(domain, '.demo.com');
          done();
        }
      }
    });
    webpjs({
      type: 'cookie',
      domain: '.demo.com'
    });
  });

  it('use cookie <checked>', done => {
    const webpjs = muk('../src/index.js', {
      './util': {
        loadImage(url, fn) {
          fn();
        },
        checkCookie() {
          return true;
        }
      }
    });
    assert.equal(webpjs({
      type: 'cookie'
    }), true);
    done();
  });

  it('custom key value <ls>', done => {
    const webpjs = muk('../src/index.js', {
      './util': {
        checkLocalStorage(key, value) {
          assert.equal(key, 'abc');
          assert.equal(value, '123');
          done();
        }
      }
    });
    webpjs({
      key: 'abc',
      value: '123'
    });
  });

  it('custom key value <cookie>', done => {
    const webpjs = muk('../src/index.js', {
      './util': {
        checkCookie(key, value) {
          assert.equal(key, 'abcd');
          assert.equal(value, '1234');
          done();
        }
      }
    });
    webpjs({
      type: 'cookie',
      key: 'abcd',
      value: '1234'
    });
  });
})
