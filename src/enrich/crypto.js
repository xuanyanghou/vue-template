import { Buffer } from 'buffer'
import { publicEncrypt, constants } from 'crypto'

const publicKey = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDItnaYVGfAmuM7nab4bhhlS7DK
0NMGiHFleK1Vdf90L2vFn/Ws/NA0RFlgYwFXrJQ7GU9pdgr1xlUgOm3M8MCFZEkT
8ahYAirpaugPbnsoqZRMIfAdRn4oLw/x+ITg909zddnn424e377/8Ha/6lbfznun
stkEkwHs1Rf8gZJJqwIDAQAB
-----END PUBLIC KEY-----`

export const encrypt = origin => {
  const buffer = Buffer.from(encodeURI(JSON.stringify(origin)))
  const blocks = Math.ceil(buffer.length / 117)
  const cipherBuffer = Buffer.alloc(blocks * 128)
  for (let i = 0; i < blocks; i++) {
    const chunk = buffer.slice(i * 117, (i + 1) * 117)
    publicEncrypt({
      key: publicKey,
      padding: constants.RSA_PKCS1_PADDING
    }, chunk).copy(cipherBuffer, i * 128)
  }
  return cipherBuffer.toString('base64')
}

export default {
  install (Vue) {
    if (this.installed) return

    this.installed = true

    Object.defineProperties(Vue.prototype, {
      $encrypt: {
        get () {
          return encrypt
        }
      }
    })
  }
}
