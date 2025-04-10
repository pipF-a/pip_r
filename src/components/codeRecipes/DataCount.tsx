'use client'

import Styles from "@/components/codeRecipes/DataCount.module.scss"
import { useEffect, useState } from "react"

export const DataCount = () => {
  const [count,setCount] = useState(0);


  useEffect(()=>{
    if( count < 100) {
      const intervalId = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 100);
      return () => clearInterval(intervalId); 
    } 
  }, [count])

  return (
    <>
      <div className={Styles.dataContainer}>
        <p className={Styles.dataContainerText}>{count}%</p>
      </div>
      
    </>
  )
}