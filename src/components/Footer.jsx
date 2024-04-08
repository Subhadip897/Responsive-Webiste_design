
import { FaWix, FaYoutube, FaPinterestP} from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaLinkedinIn  } from "react-icons/fa";
import { RiTiktokFill } from "react-icons/ri";

export default function Footer (){

    return(
        <>
            <footer className="mt-20 md:mt-44 md:mx-[1.7rem]">
                <div className=" grid grid-cols-1 grid-rows-1  sm:grid-cols-2 sm:grid-rows-[1fr 1fr 0fr] md:grid-cols-3 md:grid-rows-[1fr 0fr] lg:grid-cols-5 lg:grid-rows-1 gap-10 sm:gap-8 lg:gap-0 text-gray-500">
                    
                    <div className="justify-self-center sm:justify-self-start text-center sm:text-left">
                        <p className="text-gray-700 mb-5">PRODUCT</p>
                        <ul className="text-[13px] flex flex-col gap-3 whitespace-nowrap">
                            <li><a href="#"></a>Templates</li>
                            <li><a href="#">Explore</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Website Builder</a></li>
                            <li><a href="#">Web Accessibility</a></li>
                            <li><a href="#">Velo</a></li>
                            <li><a href="#">Wix Playground</a></li>
                            <li><a href="#">My Sites</a></li>
                            <li><a href="#">Premium Plans</a></li>
                            <li><a href="#">Wix SEO</a></li>
                            <li><a href="#">Logo Maker</a></li>
                            <li><a href="#">Create a Blog</a></li>
                            <li><a href="#">Online Store</a></li>
                            <li><a href="#">Wix Booking</a></li>
                            <li><a href="#">Restaurants</a></li>
                            <li><a href="#">App Market</a></li>
                            <li><a href="#">Domains</a></li>
                            <li><a href="#">Business Email</a></li>
                            <li><a href="#">Web Hosting</a></li>
                            <li><a href="#">Developers</a></li>
                            <li><a href="#">Enterprise</a></li>
                            <li><a href="#">Email Marketing</a></li>
                            <li><a href="#">Website Design</a></li>
                            <li><a href="#">Professional Tools</a></li>
                        </ul>
                    </div>
                    
                    <div className="justify-self-center md:justify-self-start text-center sm:text-left">
                        <p className="text-gray-700 mb-5">COMPANY</p>
                        <ul className="text-sm flex flex-col gap-3 whitespace-nowrap">
                            <li><a href="">About Wix</a></li>
                            <li><a href="">Press Room</a></li>
                            <li><a href="">Investor Relations</a></li>
                            <li><a href="">Wix Jobs</a></li>
                            <li><a href="">Design Assets</a></li>
                            <li><a href="">Terms of Use</a></li>
                            <li><a href="">App Market Terms</a></li>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Privacy and Security Hub</a></li>
                            <li><a href="">Accessibilituy Statement</a></li>
                            <li><a href="">Abuse</a></li>
                            <li><a href="">Affliates</a></li>
                            <li><a href="">Wix Captial</a></li>
                            <li><a href="">Upadates & Releases</a></li>
                            <li><a href="">Contact Us</a></li>
                            <li><a href="">Patent Notice</a></li>
                            <li><a href="">Sitemap</a></li>
                        </ul>
                    </div>

                    <div className="justify-self-center sm:justify-self-start text-center sm:text-left">
                        <p className="text-gray-700 mb-5">COMMUNITY</p>
                        <ul className="text-sm flex flex-col gap-3 whitespace-nowrap">
                            <li><a href="#">Wix Blog</a></li>
                            <li><a href="#">Wix Marketplace</a></li>
                            <li><a href="#">Student Website</a></li>
                            <li><a href="#">Wix Encyclopedia</a></li>
                            <li><a href="#">Partner Community</a></li>
                        </ul>
                    </div>

                    <div className="justify-self-center sm:justify-self-start text-center sm:text-left">
                        <p className="text-gray-700 mb-5">SUPPORT</p>
                        <ul className="text-sm flex flex-col gap-3 whitespace-nowrap">
                            <li><a href="#">Support Center</a></li>
                            <li><a href="#">Getting Started Guide</a></li>
                            <li><a href="#">Wix Learn</a></li>
                            <li><a href="#">Status Page</a></li>
                        </ul>
                    </div>

                    <div className="w-auto grid-cols-subgrid row-span-2 md:-grid-cols-subgrid lg:w-auto md:w-[350px] sm:w-[500px]">
                        <div className="text-6xl text-slate-900 -mt-4"> <FaWix /> </div>
                        <article className="text-[13px]">The Wix website builder offers a complete solution from enterprise- grade infrastructure and business features to advanced SEO and marketing tools-enabling anyone to create and grow online.</article>
                        <p className="mt-2 text-sm"> &copy; 2006-2022 Wix.com, Inc </p>
                        <div className="flex gap-2 text-xl mt-5 text-slate-600">
                            <FaFacebookF />
                            <FaTwitter />
                            <FaYoutube />
                            <FaPinterestP />
                            <BsInstagram />
                            <FaLinkedinIn />
                            <RiTiktokFill />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}