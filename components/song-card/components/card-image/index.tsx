
import Image from "next/image"
export default  function CardImage ({image}: {image: string}) {
    return  <Image 
    src={image} 
    alt="card" 
    width={350} 
    height={350} 
    loading="lazy"
    className="object-fit mx-auto hover:opacity-45 transition-all duration-250 ease lg:w-full md:w-3/4 rounded-t-xl object-center" 
  />
}