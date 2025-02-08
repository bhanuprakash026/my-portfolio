import React from 'react'

type SectionHeadingProps = {
    children: React.ReactNode
}

const SectionHeader = ({ children }: SectionHeadingProps) => {
    return (
        <section>
            <h2 className="text-center text-3xl mb-8 font-medium capitalize">{children}</h2>
        </section>
    )
}

export default SectionHeader