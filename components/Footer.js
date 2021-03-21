import React from "react";

export default function Footer() {
    return (
        <section className="text-gray-500 body-font bg-gray-900">
            <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
                <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 md:mb-0 mb-10 pb-10 border-b border-gray-800">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Made with 💜 Tristan</h1>
                    <p className="leading-relaxed text-base">
                         © 2021 All rights reserved.
                    </p>
                </div>
                <div className="flex flex-col md:w-1/2 md:pl-12">
                    <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">INSPIRED BY</h2>
                    <nav className="flex flex-wrap list-none -mb-1">
                        <li className="lg:w-1/3 mb-1 w-1/2">
                            <a className="hover:text-white" href="https://github.com/BraydenTW/react-tailwind-portfolio/">Brayden W. Card Design</a>
                        </li>
                        <hr />
                        <li className="lg:w-1/2 mb-1 w-1/3">
                            <a className="hover:text-white" href="https://mertjf.github.io/tailblocks/">Skills & Footer Design</a>
                        </li>
                    </nav>
                </div>
            </div>
        </section>
    )
}
