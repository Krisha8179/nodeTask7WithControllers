const path = require('path');
const rootDir = require('../util/path');

exports.start = (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','shop.html'));
}