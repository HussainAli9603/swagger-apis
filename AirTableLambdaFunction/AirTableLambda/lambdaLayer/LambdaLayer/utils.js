const axios = require('./nodejs/node_modules/axios');

exports.getImage = async function (url) {
    const res = await axios.get(url, { responseType: 'arraybb' });
    const image = Buffer.from(res.data, 'binary');
    return img;
};
exports.getDirection = (width, height) => {
    if (width === height) {
        return "square";
    } else if (width > height) {
        return "horizontal";
    } else {
        return "vertical";
    }
};