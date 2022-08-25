var Imap = require('imap')
// var config = {
//     user: '1053595189@qq.com',
//     password: 'ycdwceurvxombefe',
//     host: `imap.qq.com`,
//     port: 993,
//     tls: true
// }

// _getImapByUser({
//     email: '1053595189@qq.com',
//     password: 'ycdwceurvxombefe',
// }).then(imap => {
//     imap.openBox('INBOX', true, function (err, box) {
//         if (err) throw err
//         var f = imap.seq.fetch('1:3', {
//             bodies: 'HEADER.FIELDS (FROM TO SUBJECT DATE)',
//             struct: true
//         })
//         f.on('message', function (msg, seqno) {
//             console.log('Message #%d', seqno)
//             var prefix = '(#' + seqno + ') '
//             msg.on('body', function (stream, info) {
//                 var buffer = ''
//                 stream.on('data', function (chunk) {
//                     buffer += chunk.toString('utf8')
//                 })
//                 stream.once('end', function () {
//                     console.log(prefix + 'Parsed header: %s', inspect(Imap.parseHeader(buffer)))
//                 })
//             })
//             msg.once('attributes', function (attrs) {
//                 console.log(prefix + 'Attributes: %s', inspect(attrs, false, 8))
//             })
//             msg.once('end', function () {
//                 console.log(prefix + 'Finished')
//             })
//         })
//         f.once('error', function (err) {
//             console.log('Fetch error: ' + err)
//         })
//         f.once('end', function () {
//             console.log('Done fetching all messages!')
//             imap.end()
//         })
//     })
// })

// function openInbox(cb) {
//     imap.openBox('INBOX', true, cb)
// }

export function _getImap (config) {
  var imap = new Imap(config)
  return new Promise((resolve, reject) => {
    imap.once('ready', function () {
      resolve(imap)
    })
      .once('error', function (err) {
        // console.log(err)
        imap.end()
        reject(err)
      })
      .once('end', function () {
        // console.log('Connection ended')
        imap.end()
      }).connect()
  })
}

export function _getImapByUser (user) {
  // eslint-disable-next-line no-useless-escape
  const mailReg = new RegExp(/^[^@]+@([^\.]+)\..*$/)
  const type = user.email.match(mailReg)[1]
  return _getImap({
    user: user.email,
    password: user.password,
    host: `imap.${type}.com`,
    port: 993,
    tls: true
  })
}

// module.exports._getImap = _getImap
// module.exports._getImapByUser = _getImapByUser

// imap.openBox('INBOX', true, function (err, box) {
//     if (err) throw err
//     var f = imap.seq.fetch('1:3', {
//         bodies: 'HEADER.FIELDS (FROM TO SUBJECT DATE)',
//         struct: true
//     })
//     f.on('message', function (msg, seqno) {
//         console.log('Message #%d', seqno)
//         var prefix = '(#' + seqno + ') '
//         msg.on('body', function (stream, info) {
//             var buffer = ''
//             stream.on('data', function (chunk) {
//                 buffer += chunk.toString('utf8')
//             })
//             stream.once('end', function () {
//                 console.log(prefix + 'Parsed header: %s', inspect(Imap.parseHeader(buffer)))
//             })
//         })
//         msg.once('attributes', function (attrs) {
//             console.log(prefix + 'Attributes: %s', inspect(attrs, false, 8))
//         })
//         msg.once('end', function () {
//             console.log(prefix + 'Finished')
//         })
//     })
//     f.once('error', function (err) {
//         console.log('Fetch error: ' + err)
//     })
//     f.once('end', function () {
//         console.log('Done fetching all messages!')
//         imap.end()
//     })
// })
