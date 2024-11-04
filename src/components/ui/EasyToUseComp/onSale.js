"use client";

import React, { useState } from 'react';
import { Image, Typography } from 'antd';
import { SkeletonCard } from './skeleton';

const { Link, Text } = Typography;

const products = [
    {
        id: 1,
        name: "Testing SVG",
        originalPrice: 60,
        discountPercentage: 95,
        link: "https://i.etsystatic.com/48756310/r/il/507f90/5878498380/il_1588xN.5878498380_nevx.jpg"
    },
    {
        id: 2,
        name: "Halloween Pumpkin SVG",
        originalPrice: 12,
        discountPercentage: 15,
        link: "https://i.etsystatic.com/46326733/r/il/f0057e/5467749201/il_794xN.5467749201_9wjl.jpg"
    },
    {
        id: 3,
        name: "Cute black Bat SVG",
        originalPrice: 8,
        discountPercentage: 10,
        link: "https://i.etsystatic.com/50191947/r/il/2831b6/5832282598/il_794xN.5832282598_qsbh.jpg"
    },
    {
        id: 4,
        name: "Witch Hat SVG",
        originalPrice: 11,
        discountPercentage: 25,
        link: "https://i.etsystatic.com/21750556/r/il/3cdea8/4248637740/il_794xN.4248637740_jx45.jpg"
    },
    {
        id: 5,
        name: "Spider Web SVG",
        originalPrice: 9,
        discountPercentage: 30,
        link: "https://i.etsystatic.com/24561537/r/il/2b1538/5638599501/il_794xN.5638599501_khl9.jpg"
    },
];

const OnSale = () => {
    const calculateDiscountedPrice = (originalPrice, discountPercentage) => {
        return (originalPrice - (originalPrice * discountPercentage) / 100).toFixed(2);
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
            {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg p-4 shadow-md flex flex-col items-center">
                    <Image
                        width={200}
                        height={200}
                        // src={`${product.link}?noCache=${Date.now()}`}
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

export default OnSale;
