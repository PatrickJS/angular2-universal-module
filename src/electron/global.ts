import * as electron from './electron';

function __global(m) {
  for (let p in m) if (!global.hasOwnProperty(p)) global[p] = m[p];
}

__global(electron);
