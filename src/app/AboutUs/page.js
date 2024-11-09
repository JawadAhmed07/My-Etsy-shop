import { SheetDemo } from "@/components/ui/EasyToUseComp/sheetbtn";
import Image from "next/image";





export default function AboutUs() {
    return (
        <div>
            <div className="relative">
                <Image
                    src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/463946672_122145349196308513_3838852537802018120_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=w4QTDQlbwJgQ7kNvgE_NnZQ&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&_nc_gid=AEOVHpMgZGzxsk_aCPwtOAj&oh=00_AYBI1i6EoSgak0OSWVYgEvrnjeH-xOVAwwuabOBc9kYXHQ&oe=67257323"
                    width={900}
                    height={960}
                    alt="Home Page Image"
                    className="w-full h-auto object-cover rounded-lg"
                />
            </div>
            <div className=" mx-auto  py-10 w-5/6 container">
                <h1 className="text-4xl font-bold  text-blue-600 mb-6">About Us</h1>

                <section className="mb-8">
                    <p className="text-lg leading-relaxed">
                        Welcome to <span className="font-semibold text-orange-500">Design spark!</span> We specialize in providing high-quality digital SVG, PNG, and tumbler file designs for all your creative projects.
                        Starting out with manual client hunting on Facebook, we built strong client relationships, leading to the creation of our Etsy store, where we proudly serve a growing community of creative enthusiasts.
                    </p>
                    <p className="mt-4 text-lg leading-relaxed">
                        With over two years of experience, we’re passionate about delivering files that inspire you to bring your ideas to life effortlessly.
                    </p>
                </section>

                <h2 className="text-3xl font-semibold text-blue-600 mb-6">Our Mission</h2>
                <p className="text-lg leading-relaxed mb-8">
                    Our mission is to <span className="font-semibold text-orange-500">inspire creativity</span> by offering affordable custom design services with a focus on high-quality delivery and fast turnaround.
                    Plus, we offer <span className="font-semibold text-orange-500">unlimited revisions</span>—pay once, and we’ll work with you to make small adjustments until you’re fully satisfied!
                </p>

                <h2 className="text-3xl font-semibold  text-blue-600 mb-6">What We Offer</h2>
                <ul className="list-disc list-inside text-lg leading-relaxed mb-8">
                    <li>Premium SVG, PNG, and tumbler files for digital crafting</li>
                    <li>Custom design orders tailored to your vision</li>
                    <li>Fast delivery on all orders with no extra revision charges</li>
                </ul>

                <p className="text-lg leading-relaxed">
                    Whether you’re looking for a ready-made design or something unique, our team is here to help. Click below to submit a custom order request or browse our collection!
                </p>
                <div className="mt-8">
                    {/* <a href="/custom-order" className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-600 transition duration-200">
                        Place a Custom Order
                    </a> */}
                    <SheetDemo/>
                </div>
            </div>

        </div>
    )
}