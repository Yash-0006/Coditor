import { useState, useEffect } from "react";

const PREFIX = "coditor"

export default function UseLocalStorage(Key,initialValue){
    const prefixKey = PREFIX+Key
    
    const[value, setValue]=useState(()=>{
        const jsonValue = localStorage.getItem(prefixKey)
        if(jsonValue != null) return JSON.parse(jsonValue)
        
        if(typeof initialValue === "function"){
            return initialValue()
        }else{
            return initialValue
        }
    })

    useEffect(()=>{
        localStorage.setItem(prefixKey, JSON.stringify(value))
    }, [prefixKey , value])

    return [value,setValue]
}