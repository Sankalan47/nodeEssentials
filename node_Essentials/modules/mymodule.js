let count = 0;

// module.exports = 'Alex';

const inc = () => ++count;
const dec = () => --count ;

const getCount = () => count;

module.exports = {
    inc,
    dec,
    getCount
}