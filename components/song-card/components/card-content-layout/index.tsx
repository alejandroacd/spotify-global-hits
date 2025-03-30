'use client'
export default  function CardContentLayout ({children}: {children: React.ReactNode}) {
    return (
        <section className="px-3 h-full relative">
            {children}
        </section>
    )
}