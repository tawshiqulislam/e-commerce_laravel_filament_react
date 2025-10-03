import Banner from "@/Components/Carousel/Banner";
import CardProduct from "@/Components/Cards/CardProduct";
import CarouselBanner from "@/Components/Carousel/CarouselBanner";
import SectionList from "@/Components/Sections/SectionList";
import Layout from "@/Layouts/Layout";
import { Head, usePage } from "@inertiajs/react";
import CarouselTop from "./CarouselTop";
import GridProduct from "@/Components/Grids/GridProduct";
import CarouselSection from "./CarouselSection";
import MetaTag from "@/Components/MetaTag";
import SearchBar from "../../Layouts/Navbar/SearchBar";
import Reviews from "@/Components/Reviews";
import { FaMoneyBillWave, FaUserTag, FaTruck, FaHeadset } from "react-icons/fa";
import brand_1 from "../../../../public/img/our-brand/brand_1.png";
import brand_2 from "../../../../public/img/our-brand/brand_2.png";
import our_moto from "../../../../public/img/our-brand/our_moto.png";

export default function Home({
    page,
    carouselTop,
    bannersTop,
    productsBestSeller,
    bannersMedium,
    newProducts,
    bannersBottom,
    categoriesProductCount,
    reviews,
}) {
    return (
        <>
            <MetaTag metaTag={page.metaTag} />
            <Layout>
                <div className="container">
                    <div className="col-span-1 md:col-span-2 my-4">
                        <CarouselTop images={carouselTop} />
                    </div>
                    <div className="lg:hidden">
                        <SearchBar />
                    </div>
                    <div className="py-content py-10">
                        <h2 className="title-section text-center mb-6">
                            Our Popular Brands
                        </h2>

                        {/* Buttons */}
                        <div className="flex flex-wrap justify-center gap-6 md:gap-12 lg:gap-20 my-10">
                            {/* Active Button */}
                            <button className="w-full sm:w-auto px-6 py-4 rounded-[30px] bg-[#275228] text-white text-lg font-semibold shadow-md hover:bg-[#06A096] transition flex items-center justify-center sm:justify-start space-x-3">
                            <img src={brand_1} className="w-16 h-14" alt="Brand" />
                            <div className="text-left">
                                <div className="text-md font-bold">wemaa</div>
                                <div className="text-2xl">Kids Care</div>
                            </div>
                            </button>

                            <button className="w-full sm:w-auto px-6 py-4 rounded-[30px] bg-[#275228] text-white text-lg font-semibold shadow-md hover:bg-[#06A096] transition flex items-center justify-center sm:justify-start space-x-3" disabled>
                            <img src={brand_2} className="w-16 h-18" alt="Brand" />
                            <div className="text-left">
                                <div className="text-md font-bold">wemaa</div>
                                <div className="text-2xl">Corporation</div>
                            </div>
                            </button>
                        </div>
                    </div>
                    
                    {productsBestSeller.length > 0 && (
                        <SectionList title="Trending Toys">
                            <GridProduct>
                                {productsBestSeller.map((product) => (
                                    <CardProduct
                                        key={product.id}
                                        product={product}
                                    />
                                ))}
                            </GridProduct>
                        </SectionList>
                    )}
                    <SectionList title={"Special Items"}>
                        <div className="py-2 relative">
                            <GridProduct>
                                {newProducts.map((product) => (
                                    <CardProduct
                                        key={product.id}
                                        product={product}
                                        productNew={true}
                                    />
                                ))}
                            </GridProduct>
                        </div>
                    </SectionList>
                    {reviews.length > 0 && <Reviews reviews={reviews} />}
                    <div className="footer-promotion">
                        {/* Moto Cards */}
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            <div className="col-span-full">
                                <img src={our_moto} className="w-full rounded-[5px]" alt="Our Moto" />
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
