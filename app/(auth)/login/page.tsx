"use client"
import LoginImageCard from '@/app/_components/login-image-card'
import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
import React from 'react'



const Login = () => {
  return (
    <div className='flex w-full h-screen items-center justify-center bg-foreground flex-col gap-8'>
      <LoginImageCard />
<Button onClick={() => signIn("google")}>Sign In with Google</Button>
    </div>
  )
}

export default Login