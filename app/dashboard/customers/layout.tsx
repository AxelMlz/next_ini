import React from 'react'

export default function CustomerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <h1>{children}</h1>
        </>
    )
}
