'use client'

import CountUp from "react-countup"

const  AnimatedCounter = ({amount}: {amount: number}) => {
  return (
    <div>
        <p>
            <CountUp end={amount}/>
        </p>
    </div>
  )
}

export default AnimatedCounter