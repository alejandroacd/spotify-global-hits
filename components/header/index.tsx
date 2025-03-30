import Image from "next/image";
export default async function Header() {
    return (
        <header className="flex flex-row p-6  items-center justify-center md:p-6">
            <Image src="/spotifylogo.svg" loading="lazy" alt="logo" className="w-10 h-10 md:w-20 md:h-20" width={50} height={50} />
            <h1 className="text-3xl md:text-5xl  font-semibold tracking-tight gradient-text ">
                00&apos;s Global Hits
            </h1>
        </header>
    )
}