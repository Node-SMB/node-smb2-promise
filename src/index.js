import Smb2 from '@marsaud/smb2'
import Bluebird from 'bluebird'
import forEach from 'lodash.foreach'
import isFunction from 'lodash.isfunction'

export default class Smb2Promise extends Smb2 {}

forEach(Smb2.prototype, (fn, name) => {
  if (isFunction(fn)) {
    Smb2Promise.prototype[name] = Bluebird.promisify(fn)
  }
})

