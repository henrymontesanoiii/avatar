console.log('this is loaded');
console.log(process.env.WALMART_ID);
exports.api = {
  walmartID: process.env.WALMART_ID,
  weatherID: process.env.WEATHER_ID
};

