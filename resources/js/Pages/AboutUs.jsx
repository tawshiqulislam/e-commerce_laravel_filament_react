import React from 'react';
import { Head } from '@inertiajs/react';
import Layout from "@/Layouts/Layout";

export default function AboutUs() {
    return (
        <Layout>
        <div className="container mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold mb-6 text-center">
                About WeMaa Corporation
            </h1>

            <div className="max-w-3xl mx-auto space-y-6 text-gray-700">
                <p>
                    Welcome to <strong>WeMaa Corporation</strong> — a pioneer in delivering
                    innovative solutions for children and families. At WeMaa, we are committed
                    to providing high-quality products and exceptional service.
                </p>

                <p>
                    Our mission is to improve everyday life through thoughtful products
                    designed with care, safety, and sustainability in mind. WeMaa Corporation
                    strives to build a better future for our customers by offering a
                    combination of reliability, value, and innovation.
                </p>

                <p>
                    We value trust, integrity, and continuous improvement. Whether you are
                    exploring our product range or learning about our company, we promise to
                    deliver excellence every step of the way.
                </p>

                <p>
                    For inquiries, partnerships, or feedback, feel free to contact us anytime.
                </p>
            </div>
        </div>
        </Layout>
    );
}
