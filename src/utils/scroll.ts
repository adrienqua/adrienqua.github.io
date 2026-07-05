export const scrollToDiv = (div: React.RefObject<HTMLDivElement>) => {
    if (div.current) {
        window.scrollTo({
            behavior: "smooth",
            top: div.current?.getBoundingClientRect().top + window.scrollY - 90,
        })
    }
}
