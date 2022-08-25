// var {_getImapByUser} = require('./email.js')

import {_getImapByUser} from './email.js'
// var store = require('../store')

// function _getDefaultImap () {
//     return _getImapByUser(store.state.user)
// }

// validEmail({email: '1053595189@qq.com', password: '11'}).then(r => {
//   if (r) {
//     console.log(r)
//   }
// })

export function authenticate (user) {
  return _getImapByUser(user).then(imap => {
    imap.end()
  }).catch(err => {
    // console.log(err)
    // eslint-disable-next-line eqeqeq
    if (err.source && err.source == 'authentication') {
      return '账号密码不正确'
    }
    return err
  })
}
