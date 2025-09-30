import React from "react";

import DesktopNavbar from "./DesktopNavbar";
// import MobileNavbar from "./MobileNavbar/MobileNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Navbar({ auth }) {
    const navigation = [
        // {
        //     name: "Discount",
        //     href: "offers",
        // },
        {
            name: "Home",
            href: "home",
        },
        {
            name: "Products",
            href: "search",
        },
        {
            name: "Blog",
            href: "blog",
        },
        {
            name: "About",
            href: "about.us",
        },
        {
            name: "Contact Us",
            href: "contact",
        },
    ];
    return (
        <>
            <MobileNavbar navigation={navigation} />
            <DesktopNavbar navigation={navigation} />
        </>
    );
}
