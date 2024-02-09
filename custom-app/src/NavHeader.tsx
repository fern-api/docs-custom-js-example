import { Transition } from "@headlessui/react"
import { Fragment } from "react"
import NavigationMenuDemo from "./NavMenu"

function NavHeader() {
  return (
    <Transition as={Fragment} show={true} appear={true} enter="tw-transition-opacity" enterFrom="tw-opacity-0" enterTo="tw-opacity-100">
      <header className="tw-relative tw-w-full">
        <h1>Custom Header</h1>
        <div className="tw-absolute tw-left-1/2 -tw-translate-x-1/2 tw-h-full tw-top-0 tw-flex tw-items-center">
          <NavigationMenuDemo />
        </div>
      </header>
    </Transition>
  )
}

export default NavHeader
