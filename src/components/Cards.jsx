
import Card1 from "../assets/Card1.png";
import Card2 from "../assets/Card2.png";
import Card3 from "../assets/Card3.png";

export default function Cards() {

    return (
        <>
            <section className="mt-24 -mx-3 md:mt-52 sm:mx-6">
                <div className="grid grid-cols-1 gap-8 sm:grid-6 lg:gap-12 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
                    <div className=" bg-slate-200 md:bg-white py-4 rounded-sm p-1 md:p-0 flex flex-col items-center sm:py-2 md:py-0">
                        <div>
                            <img src={Card1} alt="" width={"300px"} />
                        </div>
                        <div className="mt-10 mx-1">
                            <div className="max-w-[320px] sm:max-w-auto">
                                <p className="font-bold text-lg sm:text-xl mb-4">Brand Assets</p>
                                <p className="text-sm sm:text-base">
                                    All of the official desing assets and guidelines used by Wix can be found here, along whth all the information you need about our graphic elements and the philosophy behind them.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-200 py-4 md:bg-white rounded-sm p-1 md:p-0 flex flex-col items-center sm:py-2 md:py-0">
                        <div>
                            <img src={Card2} alt="" width={"300px"} />
                        </div>
                        <div className="mt-10 mx-1">
                            <div className="max-w-[320px] sm:max-w-auto">
                                <p className="font-bold text-lg mb-4 sm:text-xl">About Us</p>
                                <p className="text-sm sm:text-base">
                                    Wix makes it easy for everyone to get online with a stunning, professional and powerful web presence. Learn more about our company, customers, products and people.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-200 md:bg-white py-4 rounded-sm p-1 md:p-0 flex flex-col items-center sm:py-2 md:py-0">
                        <div>
                            <img src={Card3} alt="" width={"300px"} />
                        </div>
                        <div className="mt-10 mx-1">
                            <div className="max-w-[320px] sm:max-w-auto">
                                <p className="font-bold text-lg mb-4 sm:text-xl">Investor Relations</p>
                                <p className="text-sm sm:text-base">
                                    Information about Wix for investors and financial analysts. You can also find a company gossary, stats, and a list of IR events and presentations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}