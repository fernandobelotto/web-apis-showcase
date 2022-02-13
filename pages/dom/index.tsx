import { useRouter } from 'next/router';
import React from 'react';

export default function Index() {
    const router = useRouter()
    return (
        <>
            <div className="p-10">
                <h1 className='text-4xl font-bold mb-10'>{router.pathname}</h1>
            </div>
        </>
    )
}
