


export default function ContactUs() {

    return (
        <>
            <section className=" mx-0 mt-28 sm:mx-6 md:mt-44">
                <div className="flex flex-wrap gap-3">
                    <div className="w-full md:w-[30%] text-[38px] font-bold">
                        <p>Contact Us</p>
                    </div>

                    <div className="w-full md:w-[55%] ">
                        <div>
                            <p className="text-base sm:text-xl">If you're a member of the media and would like to get in touch, please send us a note. For non-press-related inquiries, please use our <a href="#" className="text-blue-500">general contact page</a></p>
                        </div>

                        <div className="mt-16 sm:mt-20">
                            <form action="#" className=" py-2 w-full flex flex-col gap-12">
                                <div className="flex flex-col sm:flex-row gap-12 sm:gap-6">
                                    <div className="w-full lg:w-1/2 relative">
                                        <input id="first-name" type="text" placeholder=" "
                                            className="peer w-full pb-2 border-b-[1.5px] pl-1 text-slate-700 border-slate-700 outline-none "
                                        />
                                        <label htmlFor="first-name" className="absolute text-slate-700 left-1 -top-6 transition-all peer-placeholder-shown:top-0 peer-focus:-top-6">First Name</label>
                                    </div>
                                    <div className="relative w-full lg:w-1/2">
                                        <input id="phone" type="number" placeholder=" "
                                            className="peer w-full pb-2 border-b-[1.5px] pl-1 text-slate-700 border-slate-700 outline-none "
                                        />
                                        <label htmlFor="phone" className="absolute text-slate-700 left-1 -top-6 transition-all peer-placeholder-shown:top-0 peer-focus:-top-6">Phone</label>
                                    </div>
                                </div>
                                <div className="w-full relative">
                                    <input id="email" type="email" placeholder=" "
                                        className="peer w-full pb-2 border-b-[1.5px] pl-1 text-slate-700 border-slate-600 outline-none "
                                    />
                                    <label htmlFor="email" className="absolute text-slate-700 left-1 -top-6 transition-all peer-placeholder-shown:top-0 peer-focus:-top-6">Email</label>
                                </div>

                                <div>
                                    <textarea name="message" id="message" cols="30" rows="6" 
                                    className="border-gray-500 border-[1.5px] w-full pl-3 pt-2 outline-none resize-none"
                                    placeholder="Type your message here..."
                                    ></textarea>
                                </div>

                                <div>
                                    <button className="border-gray-500 border-[1.5px] rounded-[50px] px-[3rem] py-[.5rem]">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}