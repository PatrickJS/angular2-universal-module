import * as browser from './browser';

function __global(m) {
  for (let p in m) if (!window.hasOwnProperty(p)) window[p] = m[p];
}

__global(browser);
