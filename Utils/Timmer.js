var lensPriceFetcher = require('../Controllers/LensPriceFetcher');

exports.startSchedule = () => {
    cb();
    setInterval(cb, 24 * 60 * 60 * 1000);
}

var cb = () => {
    lensPriceFetcher.fetchPrices();
}