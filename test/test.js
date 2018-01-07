var assert = require('assert');
var fs = require('fs');
var path = require('path');
var server = require('../server.js');
server.startServer(4210);
var url = 'http://localhost:4210';

describe('Tamanhos das imagens', function() {
  describe('Imagem pequena', function () {
      it('deve ter 320x240', function () {
        browser.url(url);
        browser.waitForVisible('.small[_ngcontent-c0]');
        assert.equal(browser.element('.small[_ngcontent-c0]').width, 320);
      });
  });
});