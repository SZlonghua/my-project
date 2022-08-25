const path = require('path')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const fs = require('fs')

function createDirOrFile (filePath) {
  if (!fs.existsSync(filePath)) {
    if (isFile(filePath)) {
      let dir = path.dirname(filePath)
      if (!fs.existsSync(dir)) {
        mkCascadeDirSync(dir)
      }
      fs.openSync(filePath, 'w')
    } else {
      mkCascadeDirSync(filePath)
    }
  }
}

function isFile (pathItem) {
  return !!path.extname(pathItem)
}

function mkCascadeDirSync (dir) {
  let pathArr = ''
  // console.log(dir.split(path.sep))
  dir.split(path.sep).map(function (a) {
    pathArr = path.join(pathArr, a)
    return pathArr
  }).forEach(v => {
    // console.log(v)
    if (!fs.existsSync(v)) {
      fs.mkdirSync(v)
    }
  })
}

function checkFile (file) {
  // console.log(file)
  if (!fs.existsSync(file)) {
    createDirOrFile(file)
  }
}

function getJSONSyncDb (file) {
  checkFile(file)
  return low(new FileSync(file))
}

export function _getUserCache (filePath) {
  return {
    rootPath: filePath,
    fileName: `liaotao.json`,
    _getDb: function () {
      return getJSONSyncDb(path.join(this.rootPath, this.fileName))
    },
    _getUser: function () {
      return this._getDb().get('user').write()
    },
    _saveUser: function (user) {
      return this._getDb().set('user', user).write()
    }
  }
}
