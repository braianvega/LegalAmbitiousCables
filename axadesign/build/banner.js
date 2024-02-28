'use strict'

const pkg = require('../package.json')
const year = new Date().getFullYear()

function getBanner(pluginFilename) {
  return `/*!
  * AXAdesignSystemLib ${pluginFilename ? ` ${pluginFilename}` : ''} v${pkg.version} (${pkg.homepage})
  * Copyright 2021-${year} ${pkg.author}
  * Licensed under MIT
  * This a fork of Bootstrap : Initial license below
  * Bootstrap${pluginFilename ? ` ${pluginFilename}` : ''} v${pkg.bsversion} (${pkg.bshomepage})
  * Copyright 2011-${year} ${pkg.bsauthor}
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */`
}

module.exports = getBanner
