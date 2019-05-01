import map from 'fun.js/src/map'

/**
 * @function identity
 * @desc Creates an identiy matrix from an empty array
 * @param m {array}
 * @param idx {number}
 * @return {Matrix}
 */
export default (m, idx) => map((rows, jdx) => (idx === jdx) * 1, m)