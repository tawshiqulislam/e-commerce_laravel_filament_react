import React from "react";
import { Link, useForm, usePage } from "@inertiajs/react";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import ApplicationLogo from "@/Components/ApplicationLogo";
import ProfileDropdown from "./ProfileDropdown";
import FullMenu from "./FullMenu";
import SearchBar from "./SearchBar";
import verifiedIcon from "../../../../public/img/icons/verified.png";
import { FaLocationDot, FaEnvelope, FaPhone, FaUser } from "react-icons/fa6";
import { GiBeachBag } from "react-icons/gi";
import top_1 from "../../../../public/img/header/top_1.png";
import top_2 from "../../../../public/img/header/top_2.png";
import top_3 from "../../../../public/img/header/top_3.png";
import top_4 from "../../../../public/img/header/top_4.png";

export default function DesktopNavbar({ navigation }) {
    const { auth, filters, departments, settings } = usePage().props;
    const { data, setData, get } = useForm({
        q: filters?.q || null,
    });

    function handleSubmit(e) {
        e.preventDefault();
        get("/search", { preserveScroll: true });
    }

    return (
        <nav className="border-b hidden lg:block bg-[#F9F8F8]">
            {/* Top info bar */}
            <div className="bg-[#e673ac] text-neutral-100 text-sm py-2">
                <div className="container flex justify-between items-center">
                    {/* Left: Address + Email */}
                    <div className="flex items-center space-x-4">
                        <span className="flex items-center space-x-1">
                            {/* <FaEnvelope /> */}
                            <img src={top_1} className="w-6"/>
                            <span className="top-navbar-one">
                                {"Get free home delivery (Order More then $300)"}
                            </span>
                        </span>

                        <span className="flex items-center space-x-1">
                            {/* <FaEnvelope /> */}
                            <img src={top_2} className="w-6"/>
                            <span className="top-navbar-one">
                                {settings?.company?.email || "gmail@example.com"}
                            </span>
                        </span>

                        <span className="flex items-center space-x-1">
                            {/* <FaLocationDot /> */}
                            <img src={top_3} className="w-6"/>
                            <span className="top-navbar-one">
                                {settings?.company?.address ||
                                    "123 Example Street, Dhaka"}
                            </span>
                        </span>
                        
                    </div>

                    {/* Right: Login + Register */}
                    <div className="flex items-center space-x-4">
                        <img src={top_4} className="w-6" style={{marginRight: "-12px"}}/>
                        <div>
                            {auth.user ? (
                                <ProfileDropdown>
                                    <button className="inline-flex items-center">
                                        {Boolean(auth.user.verified) && (
                                            <img
                                                src={verifiedIcon}
                                                className="w-5 h-5 mr-1"
                                            />
                                        )}
                                        {auth.user.name}
                                        <ChevronUpDownIcon
                                            className="w-5 h-5 ml-1 -mr-1"
                                            aria-hidden="true"
                                        />
                                    </button>
                                </ProfileDropdown>
                            ) : (
                                <div className="flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-2">
                                    <Link href={route("login")} className="hover:">
                                        Login
                                    </Link>
                                    <span
                                        className="h-4 w-px bg-neutral-400 mx-3"
                                        aria-hidden="true"
                                    ></span>
                                    <Link
                                        href={route("register")}
                                        className="hover:"
                                    >
                                        Register
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#FDFDFD] text-neutral-100 text-sm">
                <div className="container flex items-center justify-between py-3">
                    {/* Left: Big Logo */}
                    <div className="flex-shrink-0">
                        <ApplicationLogo className="w-36 h-auto" />
                    </div>

                    {/* Middle: Category + Search capsule */}
                    <div className="flex flex-1 justify-center space-x-4">
                        {/* Capsule: Category + Search */}
                        <div className="flex items-center bg-[#6CC8C5] rounded-full shadow-md w-full max-w-2xl relative">
                            {/* Category dropdown */}
                            <div className="flex-shrink-0 px-4 text-black border-r border-gray-300">
                                <FullMenu departments={departments} />
                            </div>
                            {/* Search input */}
                            <div className="flex-1">
                                <SearchBar />
                            </div>
                        </div>

                        
                    </div>

                    {/* Capsule: Phone Call */}
                    <div className="flex items-center space-x-2 bg-yellow-400 rounded-full shadow-md px-5 py-2 text-black hover:bg-orange-400">
                        <div className="col">
                            <FaPhone className="text-xl"/>
                        </div>
                        <div className="col">
                            <div className="text-xs">24/7 Support</div> 
                            <a href={`tel:${settings?.phone || "+8801973200783"}`} className="font-semibold">
                                {settings?.phone || "(+88) 0197-3200783"}
                            </a>
                        </div>
                    </div>
                    {/* Right: Cart */}
                    {/* <div className="flex-shrink-0">
                        <a
                            className="text-4xl hover:text-orange-400"
                            href="/shopping-cart"
                            target="_blank"
                        >
                            <GiBeachBag />
                        </a>
                    </div> */}
                </div>
            </div>

            <div className="container text-neutral-700 text-lg py-4">
                <div className="flex items-center justify-between px-12">
                    {/* Left side: Menu + Logo */}

                    {/* Right side: Navigation + Auth */}
                    <div className="flex items-center space-x-10">
                        {/* Extra navigation links */}
                        {navigation.map((item, key) => (
                            <Link
                                key={key}
                                href={route(item.href)}
                                className="hover:text-orange-400 transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}

                    </div>
                </div>
            </div>
        </nav>
    );
}
