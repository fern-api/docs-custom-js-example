import "./main.css";

import React from 'react'
import ReactDOM from 'react-dom'
import NavHeader from './NavHeader'

function render() {

  ReactDOM.render(
    <React.StrictMode>
      <NavHeader />
    </React.StrictMode>,
    document.querySelector('nav[aria-label="primary"]'),
  )
}

let observations = 0
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded');
  render()
  new MutationObserver((e, o) => {
    render()
    for (const item of e) {
      if (item.target instanceof HTMLElement) {
        const target = item.target
        if (
          target.tagName === 'NAV' &&
          target.getAttribute('aria-label') === 'primary'
        ) {
          if (observations < 3) {
            // react hydration will trigger a mutation event
            observations++
          } else {
            o.disconnect()
          }
        }
      }
    }
  }).observe(document.body, { childList: true, subtree: true })
})
