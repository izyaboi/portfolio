import Head from '../components/Head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import StoryblokService from '../utils/storyblok-service'
import Card from '../components/Card'

const Layout = ({ children, language }) => (
  <div className="dark:bg-gray-800">
    <Head />
    <Navigation language={language} />
    <Card />
    {children}
    <Footer />
    {StoryblokService.bridge()}
  </div>
)

export default Layout
