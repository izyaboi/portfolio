import { DarkModeToggle } from 'tailwind-darkmode-toggle';

const Navigation = ({ language }) => (
  <header class="text-gray-600 body-font">
   <nav className="" role="navigation">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img className="w-10 mx-auto shadow-xl rounded-full" src={"https://avatars.githubusercontent.com/u/2321133?s=400&u=52d7c3f14c38c8e2cfac3a3a8a0936deb8694bcf&v=4"} alt="Tristan Avatar" />
          <span class="ml-3 text-xl text-black body-font dark:text-white dark:bg-gray-800" >Tristan Hubel [Dev]elopment</span>
        </a>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a class="mr-5 hover:text-white" href="/">Home</a>
        <a class="mr-5 hover:text-white" href={`/${language}/blog`}>Blog</a>
      </nav>
        <a href="/" className={`block px-4 py-1 md:p-2 rounded-lg lg:px-4
        ${language === "en" ? "bg-black text-white" : ""}`}>EN
        </a>
        <a href="/de" className={`block px-4 py-1 md:p-2 rounded-lg lg:px-4
        ${language === "de" ? "bg-black text-white" : ""}`}>DE
        </a>
        <DarkModeToggle className='w-10 h-10 text-gray-800 dark:text-gray-300' />
     </div>
    </nav>
</header>
)



export default Navigation
