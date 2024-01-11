import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {children}
            <h1>Feature Products</h1>
        </>
    )
}

export default layout