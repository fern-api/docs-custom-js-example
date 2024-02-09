import { Transition } from "@headlessui/react"
import { Fragment } from "react"
import NavigationMenuDemo from "./NavMenu"

function NavHeader() {
  return (
    <Transition as={Fragment} show={true} appear={true} enter="tw-transition-opacity" enterFrom="tw-opacity-0" enterTo="tw-opacity-100">
      <header className="tw-relative tw-w-full flex justify-between items-center">
        <h2 className="tw-whitespace-nowrap m-0">Custom Header</h2>
        <div className="tw-absolute tw-w-full sm:tw-left-1/2 sm:-tw-translate-x-1/2 tw-h-full sm:tw-top-0 sm:tw-flex sm:tw-items-center">
          <NavigationMenuDemo />
        </div>
      </header>
    </Transition>
  )
}

export default NavHeader
