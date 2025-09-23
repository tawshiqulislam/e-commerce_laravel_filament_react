import React from "react";
import { Link, useForm, usePage } from "@inertiajs/react";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import ApplicationLogo from "@/Components/ApplicationLogo";
import ProfileDropdown from "./ProfileDropdown";
import FullMenu from "./FullMenu";
import verifiedIcon from "../../../../public/img/icons/verified.png";

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
        <nav className="border-b hidden lg:block bg-[#BAEBFF]">
            {/* Top info bar */}
            <div className="bg-[#06A096] text-neutral-100 text-sm">
                <div className="container flex justify-between py-1">
                    <div>
                        {/* use bootstrap icons for location and email */}
                        <span> <i className="fas fa-location-dot"></i> {settings?.address || "123 Example Street, Dhaka"}</span>
                        <span className="mx-2">|</span>
                        <span> <i className="fas fa-envelope"></i> {settings?.email || "gmail@example.com"}</span>
                    </div>
                    <span>{settings?.phone || "+880 1234-567890"}</span>
                </div>
            </div>

            <div className="container text-neutral-700 text-sm">
                <div className="flex items-center justify-between">
                    {/* Left side: Menu + Logo */}
                    <div className="col-span-3 flex flex-row space-x-2">
                        {/* Pass only departments to FullMenu */}
                        <FullMenu departments={departments} />
                        <ApplicationLogo />
                    </div>

                    {/* Right side: Navigation + Auth */}
                    <div className="flex items-center space-x-4">
                        {/* Extra navigation links */}
                        {navigation.map((item, key) => (
                            <Link
                                key={key}
                                href={route(item.href)}
                                className="hover:text-primary transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}

                        {/* Auth links */}
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
                            <div className="flex items-center space-x-2">
                                <Link href={route("login")} className="hover:text-primary">
                                    Login
                                </Link>
                                {/* <span className="h-4 w-px bg-neutral-400" aria-hidden="true"></span> */}
                                <Link href={route("register")} className="hover:text-primary">
                                    Register
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
