import * as testing from './testing';

function __global(m) {
  for (let p in m) if (!global.hasOwnProperty(p)) global[p] = m[p];
}

__global(testing);
