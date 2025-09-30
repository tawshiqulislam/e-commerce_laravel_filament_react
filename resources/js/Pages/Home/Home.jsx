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
import { FaMoneyBillWave, FaUserTag, FaTruck, FaHeadset } from "react-icons/fa"

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
                    <div className="col-span-1 md:col-span-2">
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
                        <div className="flex justify-center space-x-6 my-10">
                            {/* Active Button */}
                            <button className="px-8 py-4 rounded-full bg-[#00BBAE] text-white text-lg font-semibold shadow-md hover:bg-[#06A096] transition">
                                WeMaa Kids Care
                            </button>

                            {/* Disabled Button */}
                            <button
                                className="px-8 py-4 rounded-full bg-gray-300 text-gray-600 text-lg font-semibold shadow-md cursor-not-allowed"
                                disabled
                            >
                                WeMaa Corporation
                            </button>
                        </div>

                        {/* Info Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8 py-5">
                            {/* Card 1 */}
                            <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition transform hover:-translate-y-1">
                                <FaMoneyBillWave className="text-4xl text-[#00BBAE] mb-4" />
                                <h3 className="font-semibold text-lg">Money Return</h3>
                                <p className="text-gray-600">Back guarantee under 7 days.</p>
                            </div>

                            {/* Card 2 */}
                            <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition transform hover:-translate-y-1">
                                <FaUserTag className="text-4xl text-[#00BBAE] mb-4" />
                                <h3 className="font-semibold text-lg">Member Discount</h3>
                                <p className="text-gray-600">On every order over $2000</p>
                            </div>

                            {/* Card 3 */}
                            <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition transform hover:-translate-y-1">
                                <FaTruck className="text-4xl text-[#00BBAE] mb-4" />
                                <h3 className="font-semibold text-lg">Home Delivery</h3>
                                <p className="text-gray-600">Free delivery to your home</p>
                            </div>

                            {/* Card 4 */}
                            <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition transform hover:-translate-y-1">
                                <FaHeadset className="text-4xl text-[#00BBAE] mb-4" />
                                <h3 className="font-semibold text-lg">24/7 Support</h3>
                                <p className="text-gray-600">Dedicated support in 24hrs</p>
                            </div>
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
                </div>
            </Layout>
        </>
    );
}
