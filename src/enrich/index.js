import axios from './axios'
import keys from './key'
import helper from './helper'
import libs from './libs'
import crypto from './crypto'

export default Vue => {
  Vue.use(axios)
  Vue.use(libs)
  Vue.use(keys)
  Vue.use(helper)
  Vue.use(crypto)
}
