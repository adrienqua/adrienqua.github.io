interface GalleryItemProps {
    galleryItem: {
        id: number
        title: string
        img: string
    }
    handleImgClick: (id: number) => void
}

export default function GalleryItem({ galleryItem, handleImgClick }: GalleryItemProps) {
    return (
        <div
            className="gallery-item cursor-pointer overflow-hidden rounded-3xl aspect-[395/252]"
            onClick={() => handleImgClick(galleryItem.id)}
            key={galleryItem.id}
        >
            <img
                src={galleryItem.img}
                alt={galleryItem.title}
                className="w-full h-full object-cover brightness-[80%] contrast-[110%] hover:brightness-[100%] hover:contrast-[100%] duration-300 ease-in-out hover:scale-105"
            />
        </div>
    )
}
