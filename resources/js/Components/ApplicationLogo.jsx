import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Link, usePage } from "@inertiajs/react";

export default function ApplicationLogo({
    bgIcon = "bg-primary-600",
    colorIcon = "text-white",
    // textColor = "text-primary-600",
    textColor = "black",
}) {
    const { settings } = usePage().props;
    return (
        <Link className="brand flex items-center" href={route("home")}>
            <img
                src={settings?.company?.logo || "/img/default-logo.jpg"}
                alt={settings?.company?.name || "Logo"}
                className="object-contain"
                style={{ width: "80px", height: "auto" }}
            />
        </Link>
    );
}
