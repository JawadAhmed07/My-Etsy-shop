"use client";

import React, { useState } from 'react';
import { Image, Typography } from 'antd';
import { SkeletonCard } from '@/components/ui/EasyToUseComp/skeleton';

const { Link, Text } = Typography;

const products = [
    {
        id: 1,
        name: "Stitch svg",
        originalPrice: 10,
        discountPercentage: 60,
        link: "https://i.etsystatic.com/45277786/r/il/a3eda8/6343015270/il_794xN.6343015270_5m2w.jpg"
    },
    // {
    //     id: 2,
    //     name: "Halloween Pumpkin SVG",
    //     originalPrice: 12,
    //     discountPercentage: 15,
    //     link: "https://www.etsy.com/listing/987654321/halloween-pumpkin-svg"
    // },
    // {
    //     id: 3,
    //     name: "Cute black Bat SVG",
    //     originalPrice: 8,
    //     discountPercentage: 10,
    //     link: "https://www.etsy.com/listing/456789123/cute-bat-svg"
    // },
    // {
    //     id: 4,
    //     name: "Witch Hat SVG",
    //     originalPrice: 11,
    //     discountPercentage: 25,
    //     link: "https://www.etsy.com/listing/234567890/witch-hat-svg"
    // },
    // {
    //     id: 5,
    //     name: "Spider Web SVG",
    //     originalPrice: 9,
    //     discountPercentage: 30,
    //     link: "https://www.etsy.com/listing/345678901/spider-web-svg"
    // },
];

const BirthdayProducts = () => {
    const calculateDiscountedPrice = (originalPrice, discountPercentage) => {
        return (originalPrice - (originalPrice * discountPercentage) / 100).toFixed(2);
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-10 gap-5 w-full">
            {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg p-4 shadow-md flex flex-col items-center">
                    <Image
                        width={200}
                        height={200}

                        src={`${product.link}?noCache=${Date.now()}`}
                        alt={product.name}
                        placeholder={
                            <SkeletonCard/>
                        }
                        className="rounded-lg"
                    />
                    <div className="mt-2">
                        <Link href={product.link} target="_blank" className="text-blue-600 hover:underline text-md font-semibold">
                            {product.name}
                        </Link>
                        <Text className="block text-gray-500 text-md font-medium">
                            ${calculateDiscountedPrice(product.originalPrice, product.discountPercentage)}
                        </Text>
                        <Text className="block text-gray-700 text-md mt-2">
                            <span className="line-through">${product.originalPrice}.00</span>
                            <span className="text-green-600 text-sm font-medium ml-1">
                                ({product.discountPercentage}% Off)
                            </span>
                        </Text>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BirthdayProducts;
