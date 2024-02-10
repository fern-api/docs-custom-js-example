import NavigationMenuDemo from "./NavMenu"

export function NavHeader() {
  return (
    <div className="tw-fixed tw-top-0 tw-inset-x-0 tw-border-b tw-border-sage6 tw-backdrop-blur-2xl tw-h-[var(--spacing-header-height)] tw-z-30 tw-flex tw-items-center">
      {/* <Transition
        as={Fragment}
        show={true}
        appear={true}
        enter="tw-transition-opacity"
        enterFrom="tw-opacity-0"
        enterTo="tw-opacity-100"> */}
        <div className="tw-relative tw-w-full tw-flex tw-justify-between tw-items-center tw-max-w-[var(--spacing-page-width)] tw-mx-auto tw-px-4 md:tw-px-6 lg:tw-px-8">
          <h2 className="tw-whitespace-nowrap tw-m-0">Custom Header</h2>
          <div className="tw-absolute tw-right-0 sm:tw-right-auto sm:tw-w-full sm:tw-left-1/2 sm:-tw-translate-x-1/2 tw-h-full sm:tw-top-0 sm:tw-flex sm:tw-items-center">
            <NavigationMenuDemo />
          </div>
          <div className="tw-hidden sm:tw-block">
            <button className="tw-rounded-md tw-bg-grass11 tw-text-white tw-py-2 tw-px-3">
              Sign Up
            </button>
          </div>
        </div>
      {/* </Transition> */}
    </div>
  )
}

export function NavFooter() {
  return (
    <div className="tw-border-t tw-border-sage6 tw-bg-sage3">
      <div className="tw-max-w-[var(--spacing-page-width)] tw-mx-auto tw-px-4 md:tw-px-6 lg:tw-px-8">
        <div className="tw-grid tw-grid-cols-4 py-8">
          <ul className="tw-space-y-2">
            <li>Footer Item 1</li>
            <li>Footer Item 2</li>
            <li>Footer Item 3</li>
          </ul>
          <ul className="tw-space-y-2">
            <li>Footer Item 1</li>
            <li>Footer Item 2</li>
            <li>Footer Item 3</li>
          </ul>
          <div className="tw-flex tw-justify-end tw-items-end tw-text-sage11 tw-flex-col tw-text-end tw-gap-2 tw-col-span-2">
            <h4>Footer Title</h4>
            <p className="tw-max-w-96">
              Footer content goes here. This is a good place to put contact
              information or other important information.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}