import Image from "next/image";
import Link from "next/link";

export default function Product({ children }) {
    return (
        <>
            <div className="relative">
                <Image
                    src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/463946672_122145349196308513_3838852537802018120_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=w4QTDQlbwJgQ7kNvgE_NnZQ&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&_nc_gid=AEOVHpMgZGzxsk_aCPwtOAj&oh=00_AYBI1i6EoSgak0OSWVYgEvrnjeH-xOVAwwuabOBc9kYXHQ&oe=67257323"
                    width={900} // Adjust width as needed
                    height={960} // Adjust height as needed
                    alt="Home Page Image"
                    className="w-full"
                />
            </div>
            <div className="flex container px-10">
                <div className="w-1/3">
                    <h1>Latest discount</h1>
                </div>
                <div className="w-2/3">
                    <p>our offers are our offers areour offers areour offers areour offers areour offers areour offers areour r offers areour offers areour offers are </p>
                </div>
            </div>
            <section className="my-10  w-full flex">

                <div className="border-r-2 w-48 border-r-purple-800">
                    <Link
                        className="text-center p-2 w-full block hover:bg-purple-200" href="/products/birthday">
                        Birthday
                    </Link>
                    <Link
                        className="text-center p-2 w-full block hover:bg-purple-200" href="/products/hallowen">
                        halloween
                    </Link>
                </div>

                {children}</section>
        </>
    )
}
