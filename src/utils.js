// Some functions used to create class
// Why not use ES6 class instead?
// Because everything will be compiled to ES5 anyway, and bable polyfill is too complicated.

/**
 * Simillar to Object.assign, but after assignment, proto.constructor won't be changed..
 * @param {Object} proto
 * @param  {...any} args
 */
export function extendsPrototype(proto) {
  let ctor = proto.constructor;
  for (let i = 1; i < arguments.length; ++i)
    for (let f in arguments[i])
      if (arguments[i].hasOwnProperty(f))
        proto[f] = arguments[i][f];

  proto.constructor = ctor;
  return proto;
}
