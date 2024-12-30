"use client"
import { useEffect, useState } from "react"

export const useGetImages = (prompt :  string) =>{

    const [data, setData] = useState(null)

    useEffect( ()=>{
        async function getData(){
            const response = await fetch("/api/generate-image", {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  prompt, 
                }),
            })
    
            const result = await response.json()
            setData(result)
        }


        getData()
      
    }, [])



    return data;

}