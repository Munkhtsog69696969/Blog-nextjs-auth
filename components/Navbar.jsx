"use client"

import React, { useEffect, useState } from 'react'
import {signIn , signOut , useSession , getProviders} from "next-auth/react";

const Navbar = () => {
    const {data:session}=useSession();

    const [provider,setProvider]=useState(null);

    useEffect(()=>{
        const settingProvider=async()=>{
            const response=await getProviders();

            setProvider(response);
        }

        settingProvider();
    },[]);

    console.log(session)

    return (
        <div>
            Navbar
            {
                // provider && Object.values(provider).map((providerItem)=>{
                    (
                        <button
                            // type='button'
                            // key={providerItem.name}
                            onClick={()=>signIn(provider.id)}
                        >
                            Signin
                        </button>
                    )
                // })
            }    
        </div>
    )
}

export default Navbar