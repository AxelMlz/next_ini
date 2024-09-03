import React from 'react'

export default function InvoicesLayout({
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
