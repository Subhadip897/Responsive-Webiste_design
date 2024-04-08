import Carousel from "./Carousel";
import NavigationBar from "./NavigationBar";

const images = [
    "../assets/carousel-image/slide1.jpg",
    "../assets/carousel-image/slide2.jpg",
    "../assets/carousel-image/slide3.jpg"
]


export default function PressRoom() {

    return (
        <>
            <section className="">
                <div className="mx-0 sm:mx-6">
                    <div className="my-7 mt-12 sm:mt-28">
                        <h1 className="text-4xl p-[0] font-semibold sm:text-7xl">Press Room</h1>
                        <p className="text-[12px] sm:text-xl">All the News You Need to Know about Wix</p>
                    </div>

                    <div>
                        <NavigationBar />
                    </div>
                    <article className="py-8 w-full lg:w-[780px] text-sm sm:text-lg">
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