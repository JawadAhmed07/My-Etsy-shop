import { Button } from '@/components/ui/button';
import OnSale from '@/components/ui/EasyToUseComp/onSale';
import { SheetDemo } from '@/components/ui/EasyToUseComp/sheetbtn';
import Image from 'next/image';




export default function MainPage() {
    return (
        <>
            {/* main front */}
            <section className="container mx-auto">
                <div className="relative">
                    <Image
                        src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/463946672_122145349196308513_3838852537802018120_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=w4QTDQlbwJgQ7kNvgE_NnZQ&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&_nc_gid=AEOVHpMgZGzxsk_aCPwtOAj&oh=00_AYBI1i6EoSgak0OSWVYgEvrnjeH-xOVAwwuabOBc9kYXHQ&oe=67257323"
                        width={960} // Adjust width as needed
                        height={960} // Adjust height as needed
                        alt="Home Page Image"
                        className="w-full"
                    />
                    {/* <div className="absolute inset-0 flex items-center justify-center ">
                        <div className="m-2 ">
                            <SheetDemo />
                        </div>
                        <Button className="m-2">Shop now on Etsy</Button>
                    </div> */}
                </div>
            </section>
            {/* On sale items
             */}
            <section>
                <div className="items-center align-center pt-5 w-full">
                    <h1 className="text-center uppercase text-4xl font-bold w-2/5 mx-auto outline rounded-full">On sale items</h1>
                    <div className="mt-10 container mx-auto flex flex-col items-center p-10">
                        <OnSale />
                    </div>
                </div>
            </section>
        </>
    )
}