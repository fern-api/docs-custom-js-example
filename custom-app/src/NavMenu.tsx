import React, { PropsWithChildren } from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import classNames from 'classnames'
import { CaretDownIcon } from '@radix-ui/react-icons'

const NavigationMenuDemo = () => {
  return (
    <NavigationMenu.Root className="tw-relative tw-z-[1] tw-flex tw-w-full tw-justify-end sm:tw-justify-center">
      <NavigationMenu.List className="tw-center tw-m-0 tw-flex tw-list-none tw-p-1">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="tw-text-grass11 hover:tw-bg-grass3 focus:tw-shadow-grass7 tw-group tw-flex tw-select-none tw-items-center tw-justify-between tw-gap-[2px] tw-rounded-[4px] tw-px-3 tw-py-2 tw-text-[15px] tw-font-medium tw-leading-none tw-outline-none focus:tw-shadow-[0_0_0_2px]">
            Learn{' '}
            <CaretDownIcon
              className="tw-text-grass10 tw-relative tw-top-[1px] tw-transition-transform tw-duration-[250] tw-ease-in tw-group-data-[state=open]:-tw-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="data-[motion=from-start]:tw-animate-enterFromLeft data-[motion=from-end]:tw-animate-enterFromRight data-[motion=to-start]:tw-animate-exitToLeft data-[motion=to-end]:tw-animate-exitToRight tw-absolute tw-top-0 tw-left-0 tw-w-full sm:tw-w-auto">
            <ul className="tw-one tw-m-0 tw-grid tw-list-none tw-gap-x-[10px] tw-p-[22px] sm:tw-w-[500px] sm:tw-grid-cols-[0.75fr_1fr]">
              <li className="tw-row-span-3 tw-grid">
                <NavigationMenu.Link asChild>
                  <a
                    className="hover:tw-no-underline focus:tw-shadow-grass7 tw-from-lime9 tw-to-grass9 tw-flex tw-h-full tw-w-full tw-select-none tw-flex-col tw-justify-end tw-rounded-[6px] tw-bg-gradient-to-b tw-p-[25px] tw-no-underline tw-outline-none focus:tw-shadow-[0_0_0_2px]"
                    href="/">
                    <svg
                      width="38"
                      height="38"
                      viewBox="0 0 513 512"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_42_160)">
                        <path
                          d="M131.418 386.784C130.924 386.191 130.436 385.604 129.952 385.025C132.222 383.149 134.537 381.177 136.872 379.188C138.147 378.103 139.427 377.012 140.71 375.929C146.838 370.754 153.308 365.486 160.393 360.728C174.501 351.254 190.76 344 210.644 344C227.259 344 243.37 346.862 258.357 355.108C272.424 362.849 286.039 375.63 298.218 396.361C286.98 413.246 257.425 439.73 212.539 437.91C172.635 436.293 148.736 407.586 131.418 386.784Z"
                          fill="white"
                          stroke="white"
                          stroke-width="16"
                        />
                        <path
                          d="M368.606 139.763C352.891 136.193 338.783 130.075 327.67 125.2C328 124.298 328.335 123.378 328.675 122.443C332.319 112.435 336.621 100.622 342.983 88.7881C351.515 72.9177 363.071 58.4917 379.846 50.7665C394.282 44.1184 410.488 39.5607 427.934 40.3648C444.321 41.1201 462.306 46.6265 481.424 60.392C479.842 79.3757 469.123 111.548 426.804 134.312C408.09 144.378 387.718 144.106 368.606 139.763Z"
                          fill="white"
                          stroke="white"
                          stroke-width="16"
                        />
                        <path
                          d="M223.562 256.316C222.597 255.076 221.659 253.87 220.744 252.704C222.355 251.366 223.992 249.985 225.665 248.575C233.565 241.917 242.252 234.595 252.595 227.905C267.624 218.184 284.45 211.102 303.119 211.991C333.252 213.426 369.242 227.211 392.401 273.092C387.545 280.254 378.34 289.398 365.217 297.182C350.111 306.141 330.298 313 307 313C284.865 313 266.355 301.849 250.949 287.518C239.684 277.038 230.868 265.706 223.562 256.316Z"
                          fill="white"
                          stroke="white"
                          stroke-width="16"
                        />
                        <path
                          d="M205.195 205.836C206.835 206.705 208.426 207.546 209.958 208.366C211.233 205.962 212.593 203.453 213.988 200.879C215.319 198.423 216.682 195.909 218.033 193.37C222.476 185.023 227.051 175.96 230.901 166.358C238.63 147.082 243.144 126.344 238.231 105.739C230.263 72.3252 203.507 31.7795 153.789 19.1027C133.44 39.2208 117.714 75.3501 127.199 125.128C131.926 149.936 147.862 168.175 166.305 182.162C179.801 192.397 193.721 199.764 205.195 205.836Z"
                          fill="white"
                          stroke="white"
                          stroke-width="16"
                        />
                        <path
                          d="M127.112 299.473C128.328 299.565 129.526 299.657 130.705 299.751C130.803 298.729 130.904 297.7 131.006 296.661C131.818 288.387 132.683 279.574 132.446 270.032C132.107 256.432 129.445 243.052 121.439 231.577C113.663 220.429 104.29 211.405 92.1618 205.723C80.9232 200.459 66.7662 197.806 48.378 199.588C42.3793 214.142 38.6281 243.173 58.9822 271.311C69.1113 285.313 83.3755 292.057 98.1951 295.579C108.665 298.067 118.353 298.805 127.112 299.473Z"
                          fill="white"
                          stroke="white"
                          stroke-width="16"
                        />
                        <path
                          d="M165 265C77.5002 361.5 51.8334 449.833 50.5001 480.5C50.2827 485.5 52.0003 494.763 67.0002 498C82.0002 501.237 93.0002 495.499 94.5001 485.5C99.7256 450.662 120 377.5 189 283.5C258 189.5 325 145 330 134.5C335 124 325.333 118.5 318.5 121.5C304.167 128.167 254.571 166.216 165 265Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_42_160">
                          <rect
                            width="512"
                            height="512"
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>

                    <div className="tw-mt-4 tw-mb-[7px] tw-text-[18px] tw-font-medium tw-leading-[1.2] tw-text-white">
                      Fern Docs Demo
                    </div>
                  </a>
                </NavigationMenu.Link>
              </li>

              <ListItem href="/" title="Link 1">
                Link 1 description
              </ListItem>
              <ListItem href="/" title="Link 2">
                Link 2 description
              </ListItem>
              <ListItem href="/" title="Link 3">
                Link 3 description
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="tw-text-grass11 hover:tw-bg-grass3 focus:tw-shadow-grass7 tw-group tw-flex tw-select-none tw-items-center tw-justify-between tw-gap-[2px] tw-rounded-[4px] tw-px-3 tw-py-2 tw-text-[15px] tw-font-medium tw-leading-none tw-outline-none focus:tw-shadow-[0_0_0_2px]">
            Overview{' '}
            <CaretDownIcon
              className="tw-text-grass10 tw-relative tw-top-[1px] tw-transition-transform tw-duration-[250] tw-ease-in tw-group-data-[state=open]:-tw-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="tw-absolute tw-top-0 tw-left-0 tw-w-full sm:tw-w-auto">
            <ul className="tw-m-0 tw-grid tw-list-none tw-gap-x-[10px] tw-p-[22px] sm:tw-w-[600px] sm:tw-grid-flow-col sm:tw-grid-rows-3">
              <ListItem title="Introduction" href="/">
                Link 1 description
              </ListItem>
              <ListItem title="Quickstart" href="/">
                Link 2 description
              </ListItem>
              <ListItem title="API Reference" href="/">
                Link 3 description
              </ListItem>
              <ListItem title="Link 4" href="/">
                Link 4 description
              </ListItem>
              <ListItem title="Link 5" href="/">
                Link 5 description
              </ListItem>
              <ListItem title="Link 6" href="/">
                Link 6 description
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="hover:tw-no-underline hover:tw-text-grass11 tw-text-grass11 hover:tw-bg-grass3 focus:tw-shadow-grass7 tw-block tw-select-none tw-rounded-[4px] tw-px-3 tw-py-2 tw-text-[15px] tw-font-medium tw-leading-none tw-no-underline tw-outline-none focus:tw-shadow-[0_0_0_2px]"
            href="/">
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

interface ListItemProps {
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
          'hover:tw-no-underline focus:tw-shadow-[0_0_0_2px] focus:tw-shadow-grass7 hover:tw-bg-sage3 tw-block tw-select-none tw-rounded-[6px] tw-p-3 tw-text-[15px] tw-leading-none tw-no-underline tw-outline-none tw-transition-colors',
          className,
        )}
        {...props}
        ref={forwardedRef}>
        <div className="tw-text-grass12 tw-mb-[5px] tw-font-medium tw-leading-[1.2]">
          {title}
        </div>
        <p className="tw-text-sage11 tw-leading-[1.4]">{children}</p>
      </a>
    </NavigationMenu.Link>
  </li>
))

export default NavigationMenuDemo
