import React from 'react'
import SbEditable from 'storyblok-react'
import { render } from 'storyblok-rich-text-react-renderer'

const Experience = ({blok}) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <section className="text-black body-font dark:text-white dark:bg-gray-800">
        <div className="container px-4 py-24 mx-auto">
            <div className="text-center ">
                <h1 className="sm:text-5xl text-4xl font-medium title-font text-black mb-4 dark:text-white">{blok.headline}</h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                          {render(blok.description)}
                </p>
            </div>
        </div>
    </section>
    </SbEditable>
  )
}

export default Experience
