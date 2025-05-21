import './main.css'
import { NavHeader } from './NavHeader'
import { NavFooter } from './NavFooter'
import { onDOMContentMutate, renderInContainer } from './utils'

function render() {
  // render custom header
  renderInContainer(NavHeader, document.getElementById('fern-header'));

  // render custom footer
  renderInContainer(NavFooter, document.getElementById('fern-footer'));
}

onDOMContentMutate(render)
