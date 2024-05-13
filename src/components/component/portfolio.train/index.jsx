import React, { useEffect, useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const PortfolioTrain = () => {
    const images = [
        { url: "https://i.imgur.com/KnkqpmQ.jpg", alt: 'Arqit' },
        { url: 'https://i.imgur.com/d1PNQLT.png', alt: 'Bugcrowd' },
        { url: 'https://i.imgur.com/6ddtDhw.png', alt: 'Division X' },
        { url: 'https://i.imgur.com/gwHjciO.png', alt: 'HE Robotics' },
        { url: 'https://i.imgur.com/FwKgCaC.jpg', alt: 'Living Bridge' },
        { url: 'https://i.imgur.com/qyOxHq1.png', alt: 'Moxy' },
        { url: 'https://i.imgur.com/JE1O1LH.png', alt: 'PRNTR' },
        { url: 'https://i.imgur.com/GmqRBsl.png', alt: 'Red Pirahna' },
        { url: 'https://i.imgur.com/6Bk2nnA.png', alt: 'SWG' },
        { url: 'https://i.imgur.com/J8WBRKf.png', alt: 'Winton' },
    ];

    const trainingRef = useRef(null);

    useEffect(() => {
        const options = {
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    entry.target.style.opacity = '1';
                }
            });
        }, options);

        const trainingElement = trainingRef.current;
        observer.observe(trainingElement);

        return () => {
            observer.unobserve(trainingElement);
        };
    }, []);

    return (
        <div className="dark:bg-black bg-white pt-36 pb-12">
            <div className="opacity-0 transition-opacity duration-1000 ease-in-out" ref={trainingRef}>
                <h1 className='flex justify-center text-3xl font-bold pb-20 '>Who we work with</h1>
                <Carousel
                    responsive={{
                        desktop: {
                            breakpoint: { max: 3000, min: 1024 },
                            items: 2.5,
                            partialVisibilityGutter: 40
                        },
                        tablet: {
                            breakpoint: { max: 1024, min: 464 },
                            items: 2,
                            partialVisibilityGutter: 30
                        },
                        mobile: {
                            breakpoint: { max: 464, min: 0 },
                            items: 1,
                            partialVisibilityGutter: 30
                        }
                    }}
                    infinite
                    autoPlay
                    autoPlaySpeed={5000}
                    draggable
                    swipeable
                >
                    {images.map((image, index) => (
                        <div key={index} className="space-x-4">
                            <img src={image.url} alt={image.alt} className="w-auto h-40" />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default PortfolioTrain;

