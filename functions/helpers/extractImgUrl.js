//extract ImgUrl from the list of Objects, and put it back into the array.
const extractImgUrl = (dataAryOfObj) => {
    const result = dataAryOfObj.map(element => {
        // if image field is not empty, AND it is an array(because after extraction it is no longer an array, without this it will causes error)
        if (element.contentImage !== undefined && Array.isArray(element.contentImage)) {
            const imgUrl = element.contentImage[0].url;
            element.contentImage = imgUrl;
        }
        return element;
    });
    return result;
};

module.exports = { extractImgUrl }