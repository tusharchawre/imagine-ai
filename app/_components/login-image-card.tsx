"use client"
import { AnimatePresence, motion } from 'motion/react'
import React, { useEffect, useState } from 'react'

export default function LoginImageCard() {
    const [imageNo, setImageNo] = useState(0)

    const Images = [
        "/login-image/Image1.jpeg",
        "/login-image/Image2.webp",
        "/login-image/Image3.jpeg",
        "/login-image/Image4.webp"
    ]

    useEffect(() => {
        const imageInterval = setInterval(() => {
            setImageNo((prev) => (prev + 1) % 4)
        }, 2000)

        return () => clearInterval(imageInterval)
    }, [])

    return (
        <div className='h-3/5 aspect-square rounded-xl bg-gray/30 overflow-hidden relative'>
            <AnimatePresence mode="wait" initial={false}>
                <motion.img
                    key={imageNo}
                    src={Images[imageNo]}
                    alt=""
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    exit={{ opacity: 0}}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className='absolute w-full h-full object-cover object-center'
                />
            </AnimatePresence>
        </div>
    )
}
