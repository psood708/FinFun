import { SignUp , ClerkLoaded,ClerkLoading} from '@clerk/nextjs'
import { Loader2 } from 'lucide-react'
import Image from 'next/image'
export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        <div className="h-full lg:flex flex-col items-center justify-center px-4">
            <div className='text-center space-y-4 pt-16' >

                <h1 className='text-4xl font-bold text-[#2e2a47]'>Welcome to FinFun 💸📈</h1>
                <p className='text-base text-[#7e8ca0]'>
                    Log In or Create Account to get back to your dashboard!
                </p>
            </div>


            <div className='flex items-center justify-center mt-8'>
                <ClerkLoaded>
                    <SignUp path='/sign-up'/>
                </ClerkLoaded>
                <ClerkLoading>
                    <Loader2 className='w-10 h-10 animate-spin text-muted-foreground'/>
                </ClerkLoading>
            
            </div>
        </div> 

        <div className='h-full bg-[#28A745] hidden lg:flex items-center justify-center'> 
            <Image src="/logo.svg" height={200} width={200} alt="logo"/>
        </div>       
    </div>
  )
}