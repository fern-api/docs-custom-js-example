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