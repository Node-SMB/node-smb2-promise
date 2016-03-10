import Smb2 from '@marsaud/smb2'
import Bluebird from 'bluebird'
import forEach from 'lodash.foreach'
import isFunction from 'lodash.isfunction'

// Sync methods, not to be promisified
const syncs = {
  'close': true
}

export default class Smb2Promise extends Smb2 {
  constructor (...args) {
    super()
    Smb2.apply(this, args)
  }
}

forEach(Smb2.prototype, (fn, name) => {
  if (isFunction(fn) && !(name in syncs)) {
    Smb2Promise.prototype[name] = Bluebird.promisify(fn)
  }
})
