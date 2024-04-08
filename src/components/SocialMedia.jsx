
import { FaWix, FaSquareFacebook, FaYoutube } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

export default function SocialMedia() {

    return (
        <>
            <section className="mx-0 mt-24 sm:mx-6 md:mt-44">
                <p className="text-4xl font-bold mb-12">Social</p>
                <div className="grid grid-rows-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5 lg:gap-0 lg:grid-cols-5  border-solid border-black">
                    <div className="text-5xl flex-1 py-[50px] flex justify-center items-center border-solid border-[1.5px] border-stone-600 border-b-stone-300 border-r-stone-300 lg:border-r-0
                    "
                    >
                        <FaWix /> <span className="text-[27px] mb-1">Blog</span>
                    </div>

                    <a href="#">
                        <div className="text-5xl flex-1 py-[50px] flex justify-center items-center border-solid border-[1.5px] border-stone-600 border-b-stone-300 border-r-stone-300 lg:border-r-0">
                            <FaSquareFacebook />
                        </div>
                    </a>

                    <a href="#">
                        <div className="text-5xl flex-1 py-[50px] flex justify-center items-center border-solid border-[1.5px] border-stone-600 border-b-stone-300 border-r-stone-300 lg:border-r-0">
                            <BsInstagram />
                        </div>
                    </a>

                    <a href="#">
                        <div className="text-5xl flex-1 py-[50px] flex justify-center items-center border-solid border-[1.5px] border-stone-600 border-b-stone-300 border-r-stone-300 lg:border-r-0">
                            <FaYoutube />
                        </div>
                    </a>

                    <a href="#">
                        <div className="text-5xl flex-1 py-[50px] flex justify-center items-center border-solid border-[1.5px] border-stone-600 border-b-stone-300 border-r-stone-300">
                            <FaTwitter />
                        </div>
                    </a>
                </div>
            </section>
        </>
    )
}