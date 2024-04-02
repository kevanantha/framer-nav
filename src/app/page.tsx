'use client'

import { MotionConfig, motion } from 'framer-motion'
import { useState } from 'react';
import clsx from 'clsx'


let NAVS = ['Home', 'About', 'Contact', 'Blog', 'Download Resume', 'Pricing'];

export default function Home() {
  let [active, setActive] = useState(NAVS[0])
  let [direction, setDirection] = useState<'vertical' | 'horizontal'>('horizontal');

  return (
    <main className="flex min-h-[200px] flex-col items-center mt-24 justify-center">
      <MotionConfig transition={{ type: 'spring', bounce: 0, duration: 0.4 }}>

        <ul className={clsx("flex gap-2 cursor-pointer items-center", direction === 'horizontal' ? 'flex-row' : 'flex-col')}>
          {NAVS.map((nav) => {
            return (
              <motion.li layout key={nav} tabIndex={0} className={clsx('relative outline-none transition-colors w-fit px-2 py-1', active === nav ? 'text-gray-800 dark:text-gray-100' : 'dark:text-gray-50 text-gray-700')} onMouseOver={() => setActive(nav)} onMouseLeave={() => setActive(nav)} onFocus={() => setActive(nav)}>
                {nav === active ? (
                  <motion.div layoutId='active-nav' className='absolute dark:bg-white/5 bg-black/5 inset-0 rounded-lg' style={{ borderRadius: 8 }} />
                ) : null}

                <span className="">
                  {nav}
                </span>
              </motion.li>
            )
          })}
        </ul>

        <button onClick={() => setDirection(prev => prev === 'horizontal' ? 'vertical' : 'horizontal')} className='outline-none absolute focus-visible:bg-black/10 dark:focus-visible:bg-white/10 top-[23rem] px-3 transition-all py-2 rounded-lg hover:bg-black/10 text-black dark:text-white dark:hover:bg-white/10 focus:'>
          <motion.svg animate={{ rotate: direction === 'horizontal' ? 90 : 0 }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </motion.svg>
        </button>

      </MotionConfig>
    </main>
  );
}
