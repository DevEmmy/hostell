"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const AuthProvider = ({children}) => {
    const router = useRouter();
    const [update, setUpdated] = useState(false);

    function pathExistsInUrl(path) {
        let url = window.location.href;
        const urlObj = new URL(url);
        return urlObj.pathname.includes(path);
    }

    useEffect(()=>{
        let token = localStorage.getItem("token")
        if(!token){
            router.push("/login")
        }
        else if(pathExistsInUrl("/login")){
            router.push("/")
        }
        setUpdated(true)
    }, [])

  return (
    <>
        {update && children}
    </>
  )
}

export default AuthProvider