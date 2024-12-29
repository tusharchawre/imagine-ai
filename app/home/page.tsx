import React from 'react'
import {Kotta_One} from 'next/font/google'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { motion } from 'motion/react'

const kottaFont = Kotta_One({
  subsets: ["latin"],
  weight: "400"
})



const Home = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen flex-col gap-4 px-4 bg-foreground">
      <p className={`${kottaFont.className} text-3xl text-muted/80`}>
        What you imagine to create?
      </p>
      <div className='w-3/5 h-1/5 relative'>
      <Textarea className='h-full w-full focus:outline-none text-[16px] bg-gray border-white/10 border text-background/80 align-text-top resize-none rounded-xl' placeholder='Type your message...' />
      <Button className='absolute bottom-4 right-4' variant="outline">
        Generate
      </Button>
      </div>
    </div>
  )
}

export default Home