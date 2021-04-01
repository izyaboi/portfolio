import React from "react";
import SbEditable from "storyblok-react";

const threeItems = ['Uno', 'Dos', 'Tres'];

const FeaturedPosts = ({ blok }) => {
    return (
      <SbEditable content={blok} key={blok._uid}>
        <section className="text-gray-600 body-font">
          <div className= "container px-5 py-6 mx-auto items-center">
            <ul className="flex justify-center" >
               {blok.posts.map((post) => {
                  const lang = post.lang === "default" ? "/en" : `/${post.lang}`;
                  return (
                    <li key={post.content._uid}
                        className="bg-white shadow-xl rounded-xl dark:bg-gray-900 m-8">
                      <a href={`${lang}/blog/${post.slug}`}
                         className="block transition hover:opacity-50"
                       >
                       <img className="lg:h-48 md:h-36 w-30 object-cover object-center"
                             src={post.content.image}
                             alt="blog"/>
                           <div className="p-6">
                             <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                             <h1 className=  "title-font text-lg font-medium text-gray-900 dark:text-white mb-3">
                               {post.content.title}
                             </h1>
                             <p className="leading-relaxed mb-3">
                               {post.content.intro}
                             </p>
                             <div className="flex items-center flex-wrap ">
                               <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Read More
                                 <svg className="w-4 h-4 ml-2"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      fill="none"
                                      strokeLinecap="round"
                                      strokeLinejoin="round">
                                      <path d="M5 12h14"></path>
                                      <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                               </a>
                             </div>
                           </div>
                         </a>
                    </li>
                  );
               })};
             </ul>
           </div>
         </section>
       </SbEditable>
    );
  };

  export default FeaturedPosts;
