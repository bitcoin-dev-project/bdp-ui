import React from 'react'
import BitcoinIcon from '../../icons/BitcoinIcon'
import { FooterPartsPrimitiveProps } from './types'
import AppsIcon from '../../icons/AppsIcon'
import ArrowRight from '../../icons/ArrowRight'

interface FooterBodyProps extends FooterPartsPrimitiveProps {
  heading: string,
  description: string,
  navLinks: Record<string, string>
}

const FooterBody = (props: React.PropsWithChildren<FooterBodyProps>) => {
  const { heading, description, navLinks, className: classname, children, ...rest } = props
  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <section className='flex flex-col gap-2'>
          <div className='flex text-[#F7931A] gap-2 items-center'>
            <BitcoinIcon className='w-6 h-6 md:w-8 md:h-8 xl:w-16 xl:h-16 '/>
            <p className='text-[24px] xl:text-[64px]'>
              {heading}
            </p>
          </div>
          <p>
            {description}
          </p>
        </section>
        <section className='self-center'>
          <div className='flex flex-col gap-2'>
            {Object.entries(navLinks).map(([key, value]) => (
              <a key={key} href={value} className='text-[#F7931A] hover:underline'>
                {key}
              </a>
            ))}
          </div>
        </section>
        <section>
          <div className='flex flex-col gap-2'>
            <p>Explore all Apps</p>
            <div className='text-green-600'>
              <ArrowRight width={7}/>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

FooterBody.displayName = 'FooterBody'

export default FooterBody