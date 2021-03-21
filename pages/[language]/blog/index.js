import React from 'react'
import Layout from "../../../components/Layout";
import StoryblokService from "../../../utils/storyblok-service";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: props.res.data.stories,
      language: props.language,
    };
  }

  static async getInitialProps({ query }) {
    StoryblokService.setQuery(query);

    let language = query.language || "en";
    let insertLanguage = language !== "en" ? `${language}/` : "";
    const res = await StoryblokService.get(`cdn/stories`, {
      starts_with: `${insertLanguage}blog/`,
    });

    return {
      res,
      language,
    };
  }

  componentDidMount() {
    StoryblokService.initEditor(this);
  }

  render() {
    const posts = this.state.stories;

    return (
      <Layout language={this.state.language}>
        <main className="container mx-auto">
          <h1 className="text-5xl text-black body-font dark:text-white dark:bg-gray-800 tracking-wide pt-12">
            All Posts
          </h1>
          <ul>
            {posts.map((post) => {
              const lang = post.lang === "default" ? "/en" : `/${post.lang}`;
              return (
                <li
                  key={post.slug}
                  className="px-10 my-4 py-6 rounded-lg bg-white shadow-xl rounded-xl p-5 dark:bg-gray-900"
                >
                <div class="-my-8 divide-y-2 divide-gray-100">
                    <div class="py-8 flex flex-wrap md:flex-nowrap">
                      <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span class="font-semibold title-font text-gray-700">CATEGORY</span>
                        <span class="mt-1 text-gray-500 text-sm">
                          {`
                        ${new Date(post.created_at).getDay()}.
                        ${new Date(post.created_at).getMonth()}.
                        ${new Date(post.created_at).getFullYear()}`}
                        </span>
                      </div>
                      <div class="md:flex-grow">
                        <a
                          className="text-2xl text-gray-700 font-bold hover:text-gray-600"
                          href={`${lang}/blog/${post.slug}`}
                        >
                          <h2 class="text-2xl font-medium text-gray-900 dark:text-gray-50 title-font mb-2">{post.content.title}</h2>
                        </a>
                        <p class="leading-relaxed text-gray-900 dark:text-gray-50">{post.content.intro}</p>
                        <a class="text-indigo-500 inline-flex items-center mt-4"
                            href={`${lang}/blog/${post.slug}`}
                          >Read more
                          <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </main>
      </Layout>
    );
  }
}
