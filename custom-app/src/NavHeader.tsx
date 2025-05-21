import { Transition } from "@headlessui/react"
import NavigationMenu from "./NavMenu"
import { Fragment } from "react"

// main header wrapper component 
export function NavHeader() {
  return (
    <div className="tw-fixed tw-top-0 tw-inset-x-0 tw-border-b tw-border-sage6 tw-h-[var(--spacing-header-height)] tw-z-30 tw-flex tw-items-center tw-bg-white">
      <Transition
        as={Fragment}
        show={true}
        appear={true}
        enter="tw-transition-opacity"
        enterFrom="tw-opacity-0"
        enterTo="tw-opacity-100">
        <div className="tw-relative tw-w-full tw-flex tw-justify-between tw-items-center tw-max-w-[var(--spacing-page-width)] tw-mx-auto tw-px-4 md:tw-px-6 lg:tw-px-8">
          <h2 className="tw-whitespace-nowrap tw-m-0">Custom Header</h2>
          <div className="tw-absolute tw-right-0 sm:tw-right-auto sm:tw-w-full sm:tw-left-1/2 sm:-tw-translate-x-1/2 tw-h-full sm:tw-top-0 sm:tw-flex sm:tw-items-center">
            <NavigationMenu/>
          </div>
          <div className="tw-hidden sm:tw-block">
            <button className="tw-rounded-md tw-bg-grass11 tw-text-white tw-py-2 tw-px-3">
              Sign Up
            </button>
          </div>
        </div>
      </Transition>
    </div>
  )
}
