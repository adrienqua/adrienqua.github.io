import React, { useRef, useState } from "react"
import GalleryItem from "./GalleryItem"
import GalleryModal from "./GalleryModal"
import { gallery } from "./datas/gallery"
interface GalleryProps {
    galleryRef: React.RefObject<HTMLDivElement>
}

export default function Gallery({ galleryRef }: GalleryProps) {
    const [galleryEnd, setGalleryEnd] = useState(9)
    const [modalImg, setmodalImg] = useState({
        id: 1,
        title: "",
        img: "",
    })
    const galleryModalRef = useRef<HTMLDialogElement>(null)

    const handleImgClick = (id: number) => {
        if (id >= gallery.length + 1) {
            id = gallery[0].id
        }
        if (id < 1) {
            id = gallery[gallery.length - 1].id
        }
        const datas = gallery.find((galleryItem) => galleryItem.id === id)
        datas && setmodalImg(datas)

        galleryModalRef.current && galleryModalRef.current.showModal()
    }

    return (
        <div ref={galleryRef} id="gallery" className="mb-32">
            <h2 className="text-3xl font-bold mb-12 uppercase text-center">Galerie</h2>

            <GalleryModal galleryModalRef={galleryModalRef} modalImg={modalImg} handleImgClick={handleImgClick} />

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 text-center mb-6" data-aos="fade-up">
                {gallery.slice(0, galleryEnd).map((galleryItem) => (
                    <GalleryItem galleryItem={galleryItem} handleImgClick={handleImgClick} />
                ))}
            </div>
            {galleryEnd < gallery.length && (
                <div className="load-more text-center" data-aos="fade-up">
                    <button
                        onClick={() => setGalleryEnd(galleryEnd + 3)}
                        className="btn text-center px-16 focus:outline-none hover:bg-indigo-800/90 hover:border-indigo-500 hover:text-white"
                    >
                        Plus
                    </button>
                </div>
            )}
        </div>
    )
}
