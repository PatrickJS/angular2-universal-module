import * as worker from './worker';

function __global(m) {
  for (let p in m) if (!self.hasOwnProperty(p)) self[p] = m[p];
}

__global(worker);
