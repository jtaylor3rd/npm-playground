// commonjs format
// module.exports = function reverser (_input) {
//     return _input.split('').reverse().join('');
// }

// es-next format (requires babel)
export default function reverser (_input) {
    return _input.split('').reverse().join('');
}
