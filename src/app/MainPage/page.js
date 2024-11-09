// import { Button } from '@/components/ui/button';
// import OnSale from '@/components/ui/EasyToUseComp/onSale';
// import Reviews from '@/components/ui/EasyToUseComp/reviews';
// import { SheetDemo } from '@/components/ui/EasyToUseComp/sheetbtn';
// import TrendingItems from '@/components/ui/EasyToUseComp/trendingItems';
// import Image from 'next/image';




// export default function MainPage() {
//     return (
//         <>
//             {/* main front */}
//             <section className="container mx-auto">
//                 <div className="relative">
//                     <Image
//                         src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/463946672_122145349196308513_3838852537802018120_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=w4QTDQlbwJgQ7kNvgE_NnZQ&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&_nc_gid=AEOVHpMgZGzxsk_aCPwtOAj&oh=00_AYBI1i6EoSgak0OSWVYgEvrnjeH-xOVAwwuabOBc9kYXHQ&oe=67257323"
//                         width={900} // Adjust width as needed
//                         height={960} // Adjust height as needed
//                         alt="Home Page Image"
//                         className="w-full"
//                     />
//                 </div>
//             </section>
//             {/* On sale items
//              */}
//             <section>
//                 <div className="items-center align-center pt-5 w-full">
//                     <h1 className="text-center uppercase text-4xl font-bold w-2/5 mx-auto outline rounded-full">On sale items</h1>
//                     <div className="mt-10 container mx-auto flex flex-col items-center p-10">
//                     <OnSale />
//                     </div>
//                 </div>
//             </section>
//             {/* trending section */}
//             <section>
//             <div className="items-center align-center pt-5 w-full">
//                     <h1 className="text-center uppercase text-4xl font-bold w-2/5 mx-auto outline rounded-full">Trending items</h1>
//                     <div className="mt-10 container mx-auto flex flex-col items-center p-10">
//                     <TrendingItems />
//                     </div>
//                 </div>
//             </section>
//             {/* reviews section */}
//             {/* <Reviews/> */}
//         </>
//     )
// }

import { Button } from '@/components/ui/button';
import OnSale from '@/components/ui/EasyToUseComp/onSale';
import Reviews from '@/components/ui/EasyToUseComp/reviews';
import { SheetDemo } from '@/components/ui/EasyToUseComp/sheetbtn';
import TrendingItems from '@/components/ui/EasyToUseComp/trendingItems';
import Image from 'next/image';

export default function MainPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="container mx-auto">
                <div className="relative">
                    <Image
                        src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/463946672_122145349196308513_3838852537802018120_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=w4QTDQlbwJgQ7kNvgE_NnZQ&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&_nc_gid=AEOVHpMgZGzxsk_aCPwtOAj&oh=00_AYBI1i6EoSgak0OSWVYgEvrnjeH-xOVAwwuabOBc9kYXHQ&oe=67257323"
                        width={900}
                        height={960}
                        alt="Home Page Image"
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </div>
            </section>

            {/* On Sale Items Section */}
            <section className="py-10">
                <div className="text-center">
                    <h1 className="text-3xl sm:text-4xl font-semibold uppercase mb-6">
                        On Sale Items
                    </h1>
                    <div className="container mx-auto flex flex-col items-center p-5 sm:p-10">
                        <OnSale />
                    </div>
                </div>
            </section>

            {/* Trending Items Section */}
            <section className="py-10 ">
                <div className="text-center">
                    <h1 className="text-3xl sm:text-4xl font-semibold uppercase mb-6">
                        Trending Items
                    </h1>
                    <div className="container mx-auto flex flex-col items-center p-5 sm:p-10">
                        <TrendingItems />
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            {/* Uncomment below if Reviews component is to be used */}
            {/* <section className="py-10 bg-gray-50">
                <div className="container mx-auto flex flex-col items-center p-5 sm:p-10">
                    <Reviews />
                </div>
            </section> */}
        </>
    );
}
