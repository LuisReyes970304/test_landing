'use client'

import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div className="flex flex-col w-100 bg-blue-500 p-10 items-center justify-between">
            <div className="flex items-center jusitfy-center m-auto">
                <input value={count} id="outPut" className="flex items-center justify-center text-center m-auto w-full h-50 text-8xl"/>
            </div>
            <div className="flex w-full justify-between text-3xl">
                <button onClick={() => setCount(count + 1)}>Suma</button>
                <button onClick={() => setCount(count - 1)}>Resta</button>
            </div>
        </div>
    )
}