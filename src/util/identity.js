import { map } from 'fun.js'

/**
 * @function matrixIdentity
 * @desc Creates an identiy matrix from an empty array
 * @param m {Array}
 * @param idx {Number}
 * @return {Matrix}
 */
export default (m, idx) => map((rows, jdx) => (idx === jdx) * 1)(m)
