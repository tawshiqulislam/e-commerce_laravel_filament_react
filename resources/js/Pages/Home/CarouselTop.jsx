import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Link } from "@inertiajs/react";
import CarouselBanner from "@/Components/Carousel/CarouselBanner";
import Carousel, { CarouselItem } from "@/Components/Carousel/Carousel";
import SearchBar from "../../Layouts/Navbar/SearchBar";

const CarouselTop = ({ images }) => {
    return (
        <Carousel>
            {images.map((item) => (
                <CarouselItem key={item.id}>
                    <div className="relative">
                        <a key={item.id} href={item.link} target="_blank">
                            <img
                                className="w-full max-h-[550px] object-cover object-center"
                                src={item.img}
                                alt={item.alt}
                                title={item.title}
                            />
                        </a>
                    </div>
                </CarouselItem>
            ))}
        </Carousel>
    );
};

export default CarouselTop;
