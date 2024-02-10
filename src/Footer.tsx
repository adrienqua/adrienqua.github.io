export default function Footer() {
    return (
        <div className="text-center pb-4">
            <hr className="w-48 h-[2px] mx-auto my-4 bg-gray-400 border-0 rounded md:my-8" />
            <span className="text-gray-400">Adrien Quacchia - © {new Date().getFullYear()}</span>
        </div>
    )
}
