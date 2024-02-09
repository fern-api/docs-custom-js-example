import React, { PropsWithChildren } from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import classNames from 'classnames'
import { CaretDownIcon } from '@radix-ui/react-icons'

const NavigationMenuDemo = () => {
  return (
    <NavigationMenu.Root className="tw-relative tw-z-[1] tw-flex tw-w-screen tw-justify-center">
      <NavigationMenu.List className="tw-center tw-m-0 tw-flex tw-list-none tw-p-1">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="tw-text-violet11 hover:tw-bg-violet3 focus:tw-shadow-violet7 tw-group tw-flex tw-select-none tw-items-center tw-justify-between tw-gap-[2px] tw-rounded-[4px] tw-px-3 tw-py-2 tw-text-[15px] tw-font-medium tw-leading-none tw-outline-none focus:tw-shadow-[0_0_0_2px]">
            Learn{' '}
            <CaretDownIcon
              className="tw-text-violet10 tw-relative tw-top-[1px] tw-transition-transform tw-duration-[250] tw-ease-in tw-group-data-[state=open]:-tw-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="data-[motion=from-start]:tw-animate-enterFromLeft data-[motion=from-end]:tw-animate-enterFromRight data-[motion=to-start]:tw-animate-exitToLeft data-[motion=to-end]:tw-animate-exitToRight tw-absolute tw-top-0 tw-left-0 tw-w-full sm:tw-w-auto tw-shadow-xl">
            <ul className="tw-one tw-m-0 tw-grid tw-list-none tw-gap-x-[10px] tw-p-[22px] sm:tw-w-[500px] sm:tw-grid-cols-[0.75fr_1fr]">
              <li className="tw-row-span-3 tw-grid">
                <NavigationMenu.Link asChild>
                  <a
                    className="!hover:tw-no-underline focus:tw-shadow-violet7 tw-from-purple9 tw-to-indigo9 tw-flex tw-h-full tw-w-full tw-select-none tw-flex-col tw-justify-end tw-rounded-[6px] tw-bg-gradient-to-b tw-p-[25px] tw-no-underline tw-outline-none focus:tw-shadow-[0_0_0_2px]"
                    href="/">
                    <svg
                      aria-hidden
                      width="38"
                      height="38"
                      viewBox="0 0 25 25"
                      fill="white">
                      <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                      <path d="M12 0H4V8H12V0Z"></path>
                      <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                    </svg>
                    <div className="tw-mt-4 tw-mb-[7px] tw-text-[18px] tw-font-medium tw-leading-[1.2] tw-text-white">
                      Radix Primitives
                    </div>
                    <p className="tw-text-mauve4 tw-text-[14px] tw-leading-[1.3]">
                      Unstyled, accessible components for React.
                    </p>
                  </a>
                </NavigationMenu.Link>
              </li>

              <ListItem href="https://stitches.dev/" title="Stitches">
                CSS-in-JS with best-in-class developer experience.
              </ListItem>
              <ListItem href="/colors" title="Colors">
                Beautiful, thought-out palettes with auto dark mode.
              </ListItem>
              <ListItem href="https://icons.radix-ui.com/" title="Icons">
                A crisp set of 15x15 icons, balanced and consistent.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="tw-text-violet11 hover:tw-bg-violet3 focus:tw-shadow-violet7 tw-group tw-flex tw-select-none tw-items-center tw-justify-between tw-gap-[2px] tw-rounded-[4px] tw-px-3 tw-py-2 tw-text-[15px] tw-font-medium tw-leading-none tw-outline-none focus:tw-shadow-[0_0_0_2px]">
            Overview{' '}
            <CaretDownIcon
              className="tw-text-violet10 tw-relative tw-top-[1px] tw-transition-transform tw-duration-[250] tw-ease-in tw-group-data-[state=open]:-tw-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="tw-absolute tw-top-0 tw-left-0 tw-w-full sm:tw-w-auto">
            <ul className="tw-m-0 tw-grid tw-list-none tw-gap-x-[10px] tw-p-[22px] sm:tw-w-[600px] sm:tw-grid-flow-col sm:tw-grid-rows-3">
              <ListItem
                title="Introduction"
                href="/primitives/docs/overview/introduction">
                Build high-quality, accessible design systems and web apps.
              </ListItem>
              <ListItem
                title="Getting started"
                href="/primitives/docs/overview/getting-started">
                A quick tutorial to get you up and running with Radix
                Primitives.
              </ListItem>
              <ListItem title="Styling" href="/primitives/docs/guides/styling">
                Unstyled and compatible with any styling solution.
              </ListItem>
              <ListItem
                title="Animation"
                href="/primitives/docs/guides/animation">
                Use CSS keyframes or any animation library of your choice.
              </ListItem>
              <ListItem
                title="Accessibility"
                href="/primitives/docs/overview/accessibility">
                Tested in a range of browsers and assistive technologies.
              </ListItem>
              <ListItem
                title="Releases"
                href="/primitives/docs/overview/releases">
                Radix Primitives releases and their changelogs.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="tw-text-violet11 hover:tw-bg-violet3 focus:tw-shadow-violet7 tw-block tw-select-none tw-rounded-[4px] tw-px-3 tw-py-2 tw-text-[15px] tw-font-medium tw-leading-none tw-no-underline tw-outline-none focus:tw-shadow-[0_0_0_2px]"
            href="https://github.com/radix-ui">
            Github
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="data-[state=visible]:tw-animate-fadeIn data-[state=hidden]:tw-animate-fadeOut tw-top-full tw-z-[1] tw-flex tw-h-[10px] tw-items-end tw-justify-center tw-overflow-hidden tw-transition-[width,transform_250ms_ease]">
          <div className="tw-relative tw-top-[70%] tw-h-[10px] tw-w-[10px] tw-rotate-[45deg] tw-rounded-tl-[2px] tw-bg-white" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="tw-perspective-[2000px] tw-absolute tw-top-full tw-left-0 tw-flex tw-w-full tw-justify-center">
        <NavigationMenu.Viewport className="data-[state=open]:tw-animate-scaleIn data-[state=closed]:tw-animate-scaleOut tw-relative tw-mt-[10px] tw-h-[var(--radix-navigation-menu-viewport-height)] tw-w-full tw-origin-[top_center] tw-overflow-hidden tw-rounded-[6px] tw-bg-white tw-transition-[width,_height] tw-duration-300 sm:tw-w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  )
}



interface  ListItemProps {
  title: string
  href: string
  className?: string
}
const ListItem = React.forwardRef<
  HTMLAnchorElement,
  PropsWithChildren<ListItemProps>
>(({ className, children, title, ...props }, forwardedRef) => (
  <li>
    <NavigationMenu.Link asChild>
      <a
        className={classNames(
          '!hover:tw-no-underline focus:tw-shadow-[0_0_0_2px] focus:tw-shadow-violet7 hover:tw-bg-mauve3 tw-block tw-select-none tw-rounded-[6px] tw-p-3 tw-text-[15px] tw-leading-none tw-no-underline tw-outline-none tw-transition-colors',
          className,
        )}
        {...props}
        ref={forwardedRef}>
        <div className="tw-text-violet12 tw-mb-[5px] tw-font-medium tw-leading-[1.2]">
          {title}
        </div>
        <p className="tw-text-mauve11 tw-leading-[1.4]">{children}</p>
      </a>
    </NavigationMenu.Link>
  </li>
))

export default NavigationMenuDemo
