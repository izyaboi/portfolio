import { FaTwitter} from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaRegPaperPlane } from 'react-icons/fa'

export default function Card() {
    return (
        <div className="w-full">
            <div className="flex flex-col justify-center max-w-xs my-8 mx-auto bg-white shadow-xl rounded-xl p-5 dark:bg-gray-900">
                <div className="">
                    <img className="w-32 mx-auto shadow-xl rounded-full" src={"https://pbs.twimg.com/profile_images/947642745719545856/S5WxePQv_400x400.jpg"} alt="Tristan Avatar" />
                </div>
                <div className="text-center mt-5">
                    <p className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-50">
                        Tristan Hubel
                    </p>
                    <p className="text-xs sm:text-base text-gray-400 pt-2 pb-4 px-5 w-58 inline-block border-b-2">
                        Mobile Developer
                    </p>
                    <div className="flex align-center justify-center mt-4">
                        <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300 dark:text-gray-200 dark:hover:bg-gray-500" href="https://github.com/izyaboi">
                            <FaGithub />
                            <span className="sr-only">Github</span>
                        </a>
                        <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-purple-500 hover:bg-purple-500 rounded-full hover:text-white transition-colors duration-300" href="https://twitter.com/izyaboitristan">
                            <FaTwitter/>
                            <span className="sr-only">Twitter</span>
                        </a>
                        <a className="text-xl mt-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300" href="mailto:t.hubel@gmail.com">
                            <FaRegPaperPlane />
                            <span className="sr-only">Email</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
