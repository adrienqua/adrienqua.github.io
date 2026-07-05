import React from "react"

interface GalleryModalProps {
    galleryModalRef: React.RefObject<HTMLDialogElement>
    handleImgClick: (id: number) => void
    modalImg: {
        id: number
        title: string
        img: string
    }
}

export default function GalleryModal({ galleryModalRef, handleImgClick, modalImg }: GalleryModalProps) {
    return (
        <dialog id="gallery-modal" className="modal" ref={galleryModalRef}>
            <form method="dialog" className="absolute right-5 top-5">
                <button className="btn btn-md btn-circle hover:bg-indigo-800/90 hover:border-indigo-500 hover:text-white">
                    ✕
                </button>
            </form>
            <button
                className="btn modal-btn-left absolute left-5 hover:bg-indigo-800/90 hover:border-indigo-500 hover:text-white rounded-3xl"
                onClick={() => handleImgClick(modalImg.id - 1)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
            </button>
            <button
                className="btn modal-btn-right absolute right-5 hover:bg-indigo-800/90 hover:border-indigo-500 hover:text-white rounded-3xl"
                onClick={() => handleImgClick(modalImg.id + 1)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
            </button>
            <div className="modal-box p-0 rounded-3xl w-11/12 max-w-6xl">
                <img src={modalImg.img} alt={modalImg.title} className="w-full h-full rounded-3xl" />
            </div>
            <form method="dialog" className="modal-backdrop">
                <button className="bg-transparent backdrop-blur-md">close</button>
            </form>
        </dialog>
    )
}
