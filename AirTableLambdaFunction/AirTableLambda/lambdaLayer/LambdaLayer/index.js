var sizeOf = require('image-size');
const { getImage, getDirection } = require('./utils');

exports.handler = async function (event, contaxt) {
    const res = await getImage(event.url);
    const dimension = sizeOf(res);
    return getDirection(dimension.width, dimension.height)
}
