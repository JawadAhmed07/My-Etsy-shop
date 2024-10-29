"use client";

import React, { useState, useEffect } from 'react';
import { Button, Image, Space, Typography } from 'antd';
import { SkeletonCard } from './skeleton';

const { Link, Text } = Typography;

const products = [
    {
        id: 1,
        name: "Flower Ghost SVG",
        originalPrice: 6,
        discountPercentage: 50,
        link: "https://i.etsystatic.com/36540294/r/il/45d13e/5394789042/il_794xN.5394789042_9jp0.jpg"
    },
    {
        id: 2,
        name: "Halloween Pumpkin SVG",
        originalPrice: 12,
        discountPercentage: 70,
        link: "https://i.etsystatic.com/36540294/r/il/45d13e/5394789042/il_794xN.5394789042_9jp0.jpg"
    },
    {
        id: 3,
        name: "Cute black Bat SVG",
        originalPrice: 80,
        discountPercentage: 90,
        link: "https://i.etsystatic.com/36540294/r/il/45d13e/5394789042/il_794xN.5394789042_9jp0.jpg"
    },
    {
        id: 4,
        name: "Witch Hat SVG",
        originalPrice: 11,
        discountPercentage: 25,
        link: "https://i.etsystatic.com/36540294/r/il/45d13e/5394789042/il_794xN.5394789042_9jp0.jpg"
    },
    {
        id: 5,
        name: "Spider Web SVG",
        originalPrice: 9,
        discountPercentage: 30,
        link: "https://i.etsystatic.com/36540294/r/il/45d13e/5394789042/il_794xN.5394789042_9jp0.jpg"
    },
];

const TrendingItems = () => {
    // Function to calculate the discounted price
    const calculateDiscountedPrice = (originalPrice, discountPercentage) => {
        return (originalPrice - (originalPrice * discountPercentage) / 100).toFixed(2);
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
            {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg p-4 shadow-md flex flex-col items-center">
                    <Image
                        width={200}
                        src={`${product.link}?noCache=${Date.now()}`}
                        alt={product.name}
                        className="rounded-lg"
                        placeholder={
                            <SkeletonCard/>
                        }
                    />
                    <div className="mt-2 ">
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

export default TrendingItems;
