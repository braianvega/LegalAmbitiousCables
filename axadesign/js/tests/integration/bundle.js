import { Tooltip } from '../../../dist/designsystem/js/axaDesignSystemLib.esm.js'

window.addEventListener('load', () => {
  [].concat(...document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    .map(tooltipNode => new Tooltip(tooltipNode))
})
