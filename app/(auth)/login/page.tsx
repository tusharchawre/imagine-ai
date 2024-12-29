"use client"
import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
import React from 'react'



const Login = () => {
  return (
    <div className='flex w-full h-screen items-center justify-center bg-foreground'>

<Button onClick={() => signIn("google")}>signIn</Button>
    </div>
  )
}

export default Login