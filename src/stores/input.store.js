import { writable } from 'svelte/store';

const _inputStore = () => {
  let {subscribe, set} = writable('');

  return {
    subscribe,
    set: (pattern='') => {
      if (typeof pattern !== 'string') {
        throw new Error('Type of input must be string.');
      }

      set(pattern);
    },
  }
}

const inputStore = _inputStore();
export default inputStore;