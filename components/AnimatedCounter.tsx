'use client'

import CountUp from "react-countup"

const  AnimatedCounter = ({amount}: {amount: number}) => {
  return (
    <div className="w-full">
        <p>
            <CountUp
            decimal=""
            prefix="NGN"
             end={amount}/>
        </p> 
    </div>
  )
}

export default AnimatedCounter