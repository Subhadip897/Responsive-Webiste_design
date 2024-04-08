


export default function PressReleases() {

    return (
        <>
            <section className="mx-0 mt-10 sm:mx-6 sm:mt-16">
                <div className="flex items-center justify-between flex-wrap gap-0 sm:justify-normal sm:gap-5">
                    <h2 className="text-xl font-[700] sm:text-3xl md:text-[38px]">Press Releases</h2>
                    <a href="#" className=" mt-2 border-b-black border-solid border-b-[1px] text-sm font-semibold sm:text-base md:text-[18px] ">View All</a>
                </div>

                {/* released articel */}
                <div className="mt-16 md:mt-32 flex flex-col gap-12">
                    <div>
                        <div className="">
                            <p className="font-bold mb-4">June 14, 2022</p>
                            <div className="flex flex-col justify-between gap-2 border-b-[.1rem] border-solid border-gray-700 pb-4 text-sm sm:pb-20 sm:text-base sm:flex-row sm:items-center">
                                <p>Wix Wins Google Expansion Partner of the Year Award</p>
                                <a href="#" className="mt-1 text-xs">
                                    <span className="border-b-black border-solid border-b-[1px]">READ MORE</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="">
                            <p className="font-bold mb-4">June 7, 2022</p>
                            <div className="flex flex-col justify-between gap-2 border-b-[.1rem] border-solid border-gray-700 pb-4 text-sm sm:pb-20 sm:text-base sm:flex-row sm:items-center">
                                <p>Wix Relaunches its Solution ofr Hotels - Now Powered by
                                    <span className="hidden lg:inline"> HotelRunner, Providing a Comp...</span>
                                    <span className="inline lg:hidden">...</span>
                                </p>
                                <a href="#" className="mt-1 text-xs">
                                    <span className="border-b-black border-solid border-b-[1px]">READ MORE</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <p className="font-bold mb-4">April 27, 2022</p>
                            <div className="flex flex-col justify-between gap-2 border-b-[.1rem] border-solid border-gray-700 pb-4 text-sm sm:pb-20 sm:text-base sm:flex-row sm:items-center">
                                <p>Wix and LegalZoom Join Offer Personalized Solutions
                                    <span className="hidden lg:inline"> of Small Businesses to...</span>
                                    <span className="inline lg:hidden">...</span>
                                </p>
                                <a href="#" className="mt-1 text-xs">
                                    <span className="border-b-black border-solid border-b-[1px]">READ MORE</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className=" ">
                            <p className="font-bold mb-4">April 27, 2022</p>
                            <div className="flex flex-col justify-between gap-2 border-b-[.1rem] border-solid border-gray-700 pb-4 text-sm sm:pb-20 sm:text-base sm:flex-row sm:items-center">
                                <p>Wix Events Launches Seating Map Builder</p>
                                <a href="#" className="mt-1 text-xs">
                                    <span className="border-b-black border-solid border-b-[1px]">READ MORE</span>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}