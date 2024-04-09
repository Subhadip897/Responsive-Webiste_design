import Carousel from "./Carousel";
import NavigationBar from "./NavigationBar";

import slide1 from "../assets/carousel-image/slide1.jpg"
import slide2 from "../assets/carousel-image/slide2.png"
import slide3 from "../assets/carousel-image/slide3.png"
import slide4 from "../assets/carousel-image/slide4.jpg"
import slide5 from "../assets/carousel-image/slide5.jpg"
import "../App.css";

const images = [
    slide1, slide2, slide3, slide4, slide5
]

export default function PressRoom() {

    return (
        <>
            <section className="">
                <div className="mx-0 sm:mx-6">
                    <div className="mt-12 sm:mt-28">
                        <h1 className="text-4xl p-[0] font-semibold sm:text-7xl">Press Room</h1>
                        <p className="text-[12px] sm:text-xl">All the News You Need to Know about Wix</p>
                    </div>

                    <div className="my-8 sm:my-12">
                        <NavigationBar />
                    </div>
                    <article className="mb-8 w-full text-sm sm:mb-16 sm:text-lg lg:w-[780px]">
                        Wix is leading the way a cloud-based development platform for users worldwide. Wix was founded on  the belief that the internet should be accessible to everyone to develop, create and contribute. Through free and premium subcriptions. Wix eporwers millions of businesses, organizations, artists, and individuals to take their businesses, brands and workflow online.
                    </article>
                </div>

                <div>
                    {/* sliding / carousel */}
                    <Carousel images={images} />
                </div>
            </section>
        </>
    )
}