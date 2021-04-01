import React from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"

const BlogPost = ({ blok }) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto h-screen">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <img alt="content" class="object-cover object-center h-full w-full" src={blok.image} />
            </div>
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center mt-10">
              <h1 className="text-5xl font-bold font-serif text-primary tracking-wide text-gray-900 dark:text-gray-50">
                {blok.title}
              </h1>
              <p className="text-gray-900 dark:text-gray-50 text-lg max-w-lg">{blok.intro}</p>
            </div>
            <div className="flex flex-col sm:flex-row mt-10 ">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center text-gray-400">
                            <img src={blok.avatar}></img>
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex flex-col items-center text-center justify-center  ">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">{blok.author_name}</h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">{blok.author_description}</p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left ">
                <p className="leading-relaxed text-lg mb-4">{render(blok.long_text)}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SbEditable>
  )
}

export default BlogPost
