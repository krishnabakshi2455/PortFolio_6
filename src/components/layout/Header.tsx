"use client";
import { useState, useEffect, useRef } from 'react';
import Link from "./custom-link";
import { usePathname } from "next/navigation";
import MobileNav from '../Home/mobile-nav';

const Header: React.FC = () => {
    const pathname = usePathname();


    const linkspath = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Blogs", path: "/blogs" },
    ];

    const isActive = (path: string) => pathname === path;


    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
                // setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }, // Adjust this for sensitivity
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);



    return (
        <div className=" h-10 z-10">
            <div className="
             md:flex
             md:justify-around
             md:gap-96
             md:items-center
             md:w-screen
             md:fixed
             md:top-10
             
             
             kb1:gap-0
             kb1:flex
             kb1:justify-between
             kb1:items-center
             kb1:p-2
             kb1:top-0
             kb1:fixed
             kb1:w-screen
             kb1:z-50
             
             ">
               
                {/* Logo Section */}
                <div
                    className={`
                text-white
                text-[25px]
                bg-[#32CD32]
                px-4 
                py-1
                rounded-full 
                hover:scale-125
                ease-in-out
                duration-3000
                cursor-pointer
                hover:animate-bounce
                hover:duration-1000

                ${isVisible ? 'animate-in slide-in-from-left duration-700' :''}
                    `} ref={ref}>
                    K
                </div>

                {/* Header Links Section */}
                <div
                    className={`
                     md:flex
                 md:gap-7
                 md:justify-center
                 md:border-2
                 md:shadow-gray-300
                 md:p-8
                 md:rounded-full
                 md:shadow-lg
                 md:bg-white
                 md:w-96
                 md:relative

                
                 kb1:w-14
                 kb1:h-14
                 kb1:items-center
                 kb1:p-3
                 kb1:justify-center
                 kb1:flex
                 kb1:shadow-gray-300
                 kb1:bg-[#32CD32]
                 kb1:shadow-lg
                 kb1:rounded-full
                 
                 ${isVisible ? 'animate-in slide-in-from-top duration-700' :''}
                `}

                >

                    {/* Links */}
                    {linkspath.map((link, index) => (
                        <div key={index} className="">
                            <Link
                                href={link.path}
                                className={`p-2 ${isActive(link.path) ? " md:text-white p md:bg-[#32CD32] md:rounded-full kb1:hidden md:block" : "kb1:hidden text-black hover:text-[#32CD32] ease-in-out duration-300 md:block"}
                                `}
                            >
                                {link.name}
                            </Link>
                        </div >
                    ))}

                    {/*  mobile menu icon start  */}
                    <div className="block md:hidden text-white">
                        <MobileNav  />
                    </div>

                    {/* mobile menu links */}

                    


                </div>
            </div>
        </div>
    );
};

export default Header;