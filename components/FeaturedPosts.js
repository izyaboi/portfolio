import React from "react";
import SbEditable from "storyblok-react";

const threeItems = ['Uno', 'Dos', 'Tres'];

const FeaturedPosts = ({ blok }) => {
    return (
      <SbEditable content={blok} key={blok._uid}>
        <section class="text-gray-600 body-font">
          <div class= "container px-5 py-6 mx-auto items-center">
            <ul className="flex justify-center" >
               {blok.posts.map((post) => {
                  const lang = post.lang === "default" ? "/en" : `/${post.lang}`;
                  return (
                    <li key={post.content._uid}
                        className="bg-white shadow-xl rounded-xl dark:bg-gray-900 m-8">
                      <a href={`${lang}/blog/${post.slug}`}
                         className="block transition hover:opacity-50"
                       >
                       <img class="lg:h-48 md:h-36 w-30 object-cover object-center"
                             src={post.content.image}
                             alt="blog"/>
                           <div class="p-6">
                             <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                             <h1 class=  "title-font text-lg font-medium text-gray-900 dark:text-white mb-3">
                               {post.content.title}
                             </h1>
                             <p class="leading-relaxed mb-3">
                               {post.content.intro}
                             </p>
                             <div class="flex items-center flex-wrap ">
                               <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Read More
                                 <svg class="w-4 h-4 ml-2"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      stroke-width="2"
                                      fill="none"
                                      stroke-linecap="round"
                                      stroke-linejoin="round">
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
