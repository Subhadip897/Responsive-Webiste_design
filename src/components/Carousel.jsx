import { useState, useEffect } from "react";
// import demoCarousel from "../assets/carousel_img.png";
import slide1 from "../assets/carousel-image/slide1.jpg"
import slide2 from "../assets/carousel-image/slide2.png"
import slide3 from "../assets/carousel-image/slide3.png"
import slide4 from "../assets/carousel-image/slide4.jpg"
import slide5 from "../assets/carousel-image/slide5.jpg"
import "../App.css";

const images = [
    slide1, slide2, slide3, slide4, slide5
]

export default function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) =>
                prevSlide === images.length - 1 ? 0 : prevSlide + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length,]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <>
            <div>
                <div className="relative w-full">
                    <div className="overflow-hidden flex transition-all">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={`flex-[0 0 100%] ${index === currentSlide ? 'absolute top-0 left-0 w-full' : ''}`}
                            >
                                <img src={image} alt={`Slide ${index + 1}`} className="w-full h-[200px] object-fill sm:h-[300px] md:h-[380px]" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-center pt-6">
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`h-[7px] w-[7px] mx-[5px] rounded-[50%] bg-gray-300 cursor-pointer ${index === currentSlide ? 'relative min-h-[11px] min-w-[11px] bg-gray-300 after:content-[""] after:absolute after:rounded-full after:left-1/2 after:top-1/2 after:-translate-x-[50%] after:-translate-y-[50%] after:h-[6.5px] after:w-[6.5px] after:bg-white ' : ''}`}
                            onClick={() => goToSlide(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </>
    );
}