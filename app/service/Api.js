

const convertRequestBodyToFormUrlEncoded = (data) => {
    const bodyKeys = Object.keys(data);
    const str = [];
    for (let i = 0; i < bodyKeys.length; i += 1) {
        const thisKey = bodyKeys[i];
        const thisValue = data[thisKey];
        str.push(`${encodeURIComponent(thisKey)}=${encodeURIComponent(thisValue)}`);
    }
    return str.join('&');
};


class HN {
    BaseURL = 'https://news.ycombinator.com';
}

export default new HN();