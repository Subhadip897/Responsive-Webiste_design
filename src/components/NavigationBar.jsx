

export default function NavigationBar() {

    return (
        <>
            <div className="bg-gray-600 p-[.5px]"></div>
            <nav>
                <ul className="py-4 flex items-center gap-4 text-[12px] sm:text-lg md:text-xl">
                    <li>
                        <a className="text-blue-600" href="#"><span>Press Room</span></a>
                    </li>
                    <li>
                        <a href="#"><span className="text-2xl font-[300]">|</span></a>
                    </li>
                    <li>
                        <a href="#"><span>Press Releases</span></a>
                    </li>
                    <li>
                        <a href="#"><span className="text-2xl font-[300]">|</span></a>
                    </li>
                    <li>
                        <a href="#"><span>In The News</span></a>
                    </li>
                </ul>
            </nav>
            <div className="bg-gray-600 p-[.7px]"></div>
        </>
    )
}