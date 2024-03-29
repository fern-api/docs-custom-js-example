import './main.css'

import ReactDOM from 'react-dom'
import { NavFooter, NavHeader } from './NavHeader'
import React from 'react'

function render() {
  ReactDOM.render(
    React.createElement(NavHeader),
    document.getElementById('fern-header'),
  )
  ReactDOM.render(
    React.createElement(NavFooter),
    document.getElementById('fern-footer'),
  )
}

let observations = 0
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded')
  render()
  new MutationObserver((e, o) => {
    render()
    for (const item of e) {
      if (item.target instanceof HTMLElement) {
        const target = item.target
        if (target.id === 'fern-header' || target.id === 'fern-footer') {
          if (observations < 3) {
            // react hydration will trigger a mutation event
            observations++
          } else {
            o.disconnect()
          }
          break
        }
      }
    }
  }).observe(document.body, { childList: true, subtree: true })
})
