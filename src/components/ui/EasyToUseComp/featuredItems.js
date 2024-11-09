"use client";

import { Button, Image, Space, Typography } from 'antd';
import { SkeletonCard } from './skeleton';

const { Link, Text } = Typography;

const products = [
    {
        id: 1,
        name: "!st SVG",
        originalPrice: 60,
        discountPercentage: 95,
        link: "https://i.etsystatic.com/18296881/r/il/31be0e/6165959683/il_794xN.6165959683_mo7a.jpg",
        etsyLink: "https://www.etsy.com/listing/1746052526/bigfoot-alien-campfire-cut-files-bigfoot?click_key=58f2a580092d29041f6402ae5d5b67f776d4773e%3A1746052526&click_sum=9e1aa3a5&ref=shop_home_active_7&pro=1"
    },
    {
        id: 2,
        name: "Dog image testing",
        originalPrice: 12,
        discountPercentage: 15,
        link: "https://i.etsystatic.com/18296881/r/il/b9100d/6268087020/il_794xN.6268087020_e449.jpg",
        etsyLink: "https://www.etsy.com/listing/1779018972/christmas-dachshund-dog-svg-merry?click_key=a8e82f14ff10da281833f18e8890f772c2491e45%3A1779018972&click_sum=9c9d0501&ref=shop_home_active_8&pro=1"
    },
    {
        id: 3,
        name: "Etsy testing link",
        originalPrice: 8,
        discountPercentage: 10,
        link: "https://i.etsystatic.com/18296881/r/il/f9c537/6138342866/il_794xN.6138342866_njzw.jpg",
        etsyLink: "https://www.etsy.com/listing/1764905389/just-a-girl-who-loves-fall-svg-file-fall?click_key=08b478bd573b4308e8496e47ab1538b9a9ac30bc%3A1764905389&click_sum=f949796c&ref=shop_home_feat_1&pro=1"
    },
    {
        id: 4,
        name: "Etsy testing link",
        originalPrice: 8,
        discountPercentage: 10,
        link: "https://i.etsystatic.com/18296881/r/il/f9c537/6138342866/il_794xN.6138342866_njzw.jpg",
        etsyLink: "https://www.etsy.com/listing/1764905389/just-a-girl-who-loves-fall-svg-file-fall?click_key=08b478bd573b4308e8496e47ab1538b9a9ac30bc%3A1764905389&click_sum=f949796c&ref=shop_home_feat_1&pro=1"
    },
    {
        id: 5,
        name: "Etsy testing link",
        originalPrice: 8,
        discountPercentage: 10,
        link: "https://i.etsystatic.com/18296881/r/il/f9c537/6138342866/il_794xN.6138342866_njzw.jpg",
        etsyLink: "https://www.etsy.com/listing/1764905389/just-a-girl-who-loves-fall-svg-file-fall?click_key=08b478bd573b4308e8496e47ab1538b9a9ac30bc%3A1764905389&click_sum=f949796c&ref=shop_home_feat_1&pro=1"
    },
    {
        id: 6,
        name: "Etsy testing link",
        originalPrice: 8,
        discountPercentage: 10,
        link: "https://i.etsystatic.com/18296881/r/il/f9c537/6138342866/il_794xN.6138342866_njzw.jpg",
        etsyLink: "https://www.etsy.com/listing/1764905389/just-a-girl-who-loves-fall-svg-file-fall?click_key=08b478bd573b4308e8496e47ab1538b9a9ac30bc%3A1764905389&click_sum=f949796c&ref=shop_home_feat_1&pro=1"
    },
    {
        id: 7,
        name: "Etsy testing link",
        originalPrice: 8,
        discountPercentage: 10,
        link: "https://i.etsystatic.com/18296881/r/il/f9c537/6138342866/il_794xN.6138342866_njzw.jpg",
        etsyLink: "https://www.etsy.com/listing/1764905389/just-a-girl-who-loves-fall-svg-file-fall?click_key=08b478bd573b4308e8496e47ab1538b9a9ac30bc%3A1764905389&click_sum=f949796c&ref=shop_home_feat_1&pro=1"
    },
    {
        id: 8,
        name: "Etsy testing link",
        originalPrice: 8,
        discountPercentage: 10,
        link: "https://i.etsystatic.com/18296881/r/il/f9c537/6138342866/il_794xN.6138342866_njzw.jpg",
        etsyLink: "https://www.etsy.com/listing/1764905389/just-a-girl-who-loves-fall-svg-file-fall?click_key=08b478bd573b4308e8496e47ab1538b9a9ac30bc%3A1764905389&click_sum=f949796c&ref=shop_home_feat_1&pro=1"
    },
    {
        id: 9,
        name: "Etsy testing link",
        originalPrice: 8,
        discountPercentage: 10,
        link: "https://i.etsystatic.com/18296881/r/il/f9c537/6138342866/il_794xN.6138342866_njzw.jpg",
        etsyLink: "https://www.etsy.com/listing/1764905389/just-a-girl-who-loves-fall-svg-file-fall?click_key=08b478bd573b4308e8496e47ab1538b9a9ac30bc%3A1764905389&click_sum=f949796c&ref=shop_home_feat_1&pro=1"
    },
    {
        id: 10,
        name: "Etsy testing link",
        originalPrice: 8,
        discountPercentage: 10,
        link: "https://i.etsystatic.com/18296881/r/il/f9c537/6138342866/il_794xN.6138342866_njzw.jpg",
        etsyLink: "https://www.etsy.com/listing/1764905389/just-a-girl-who-loves-fall-svg-file-fall?click_key=08b478bd573b4308e8496e47ab1538b9a9ac30bc%3A1764905389&click_sum=f949796c&ref=shop_home_feat_1&pro=1"
    },
    // Add more products as needed
];

const FeaturedItems = () => {
    // Function to calculate the discounted price
    const calculateDiscountedPrice = (originalPrice, discountPercentage) => {
        return (originalPrice - (originalPrice * discountPercentage) / 100).toFixed(2);
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
            {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg p-4 shadow-md flex flex-col items-center">
                    {/* Product Image */}
                    <Image
                        width={150}
                        height={150}
                        src={`${product.link}?noCache=${Date.now()}`}
                        alt={product.name}
                        className="rounded-lg"
                        placeholder={<SkeletonCard />}
                    />
                    <div className="mt-2 text-center">
                        {/* Product Name Link to Etsy */}
                        <Link href={product.etsyLink} target="_blank" className="text-blue-600 hover:underline text-md font-semibold">
                            {product.name}
                        </Link>
                        {/* Discounted Price */}
                        <Text className="block text-gray-500 text-md font-medium">
                            ${calculateDiscountedPrice(product.originalPrice, product.discountPercentage)}
                        </Text>
                        {/* Original Price with Discount Info */}
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

export default FeaturedItems;
