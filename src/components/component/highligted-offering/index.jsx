import Image from "next/image";

export default function HighlightedOffering() {
    return (
        <main className="border border-red-100 bg-gradient-to-r from-gray-100 via-white to-gray-100 shadow-lg rounded-lg container mx-auto my-8 mt-8 text-customGray p-4 md:p-8">
            <div className="flex flex-col md:flex-row justify-between">
                <div className="flex-1">
                    <div className="relative my-4">
                        <h1 className="font-roboto text-4xl font-bold bg-red-800 px-4 py-2 inline-block rounded-lg text-white z-10 relative">
                            Highlighted Offering
                        </h1>
                    </div>
                    <div className="relative w-full pt-8">
                        <p className="text-lg z-10 relative font-sans">
                            Our <span className="font-roboto">marketing automation platform</span> empowers businesses to seamlessly scale their <span className="font-roboto">online engagement</span> and drive top-of-funnel growth. By leveraging <span className="font-roboto">advanced automation tools and personalized outreach strategies</span>, it enables efficient lead generation and nurturing. This results in a significant increase in high-quality prospects and <span className="font-roboto">accelerated business growth.</span>
                        </p>
                    </div>
                </div>
                <div className="flex-1 flex justify-center items-center mt-4 md:mt-0">
                    <Image src="/offering.jpg" width={400} height={400} alt="Descriptive Alt Text" className="max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-lg" />
                </div>
            </div>
        </main>
    );
}