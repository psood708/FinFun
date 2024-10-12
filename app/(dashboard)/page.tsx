// import {Button} from '@/components/ui/button'
"use client";
import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";
import { UserButton } from "@clerk/nextjs"
export default function Home() {
  const {data:accounts,isLoading} = useGetAccounts();
  if(isLoading){
    return(
      <div>Loading...</div>
    );
  }


    return (
      // <UserButton afterSignOutUrl="/"/>
      <div>
         {accounts?.map((account)=>(
          <div key={account.id}>
            
            {account.name}
            </div>
         ))}
      </div>
    )
}
