import React from 'react';

interface ImageCardProps {
    src: string;
    title: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, title }) => (
    <div className="flex flex-col items-center">
        <img src={src} alt={title} className="w-full h-auto" />
        <div className="relative group mt-2">
            <span className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative text-center text-gray-800 group-hover:text-white font-semibold">
                {title}
            </span>
        </div>
    </div>
);

const ImageGrid: React.FC = () => {
    const images = [
        { src: '/src/imgs/pngwing.com (3).png', title: 'Título 1' },
        { src: '/src/imgs/pngwing.com (3).png', title: 'Título 2' },
        { src: '/src/imgs/pngwing.com (3).png', title: 'Título 3' },
        { src: '/src/imgs/pngwing.com (3).png', title: 'Título 4' },
        { src: '/src/imgs/pngwing.com (3).png', title: 'Título 5' },
    ];

    return (
        <section className="bg-gray-100 flex justify-center items-center min-h-screen">
            <div className="grid grid-cols-5 gap-4 max-w-7xl mx-auto p-4">
                {images.map((image, index) => (
                    <ImageCard key={index} src={image.src} title={image.title} />
                ))}
            </div>
        </section>
    );
};

export default ImageGrid;