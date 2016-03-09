import * as node from './node';

function __global(m) {
  for (let p in m) if (!global.hasOwnProperty(p)) global[p] = m[p];
}

__global(node);
