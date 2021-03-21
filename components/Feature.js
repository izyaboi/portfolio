import React from 'react'
import SbEditable from 'storyblok-react'
import { render } from "storyblok-rich-text-react-renderer"
import DynamicIcon from './icons/DynamicIcon'

const Feature = ({blok}) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="py-16 max-w-sm p-2 sm:p-10 text-center flex flex-col items-center">
            <DynamicIcon type={blok.icon} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl my-4 g-gray-100 body-font dark:text-white dark:bg-gray-800">{blok.name}</div>
                <p className="text-base g-gray-100 body-font dark:text-white dark:bg-gray-800">
                        {render(blok.description)}
                </p>
            </div>
        </div>
    </SbEditable>
  )
}

export default Feature;
