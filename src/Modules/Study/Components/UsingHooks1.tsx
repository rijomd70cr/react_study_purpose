"use client";
// import { useState,useEffect } from "react";
import { signal, effect } from "@preact/signals-react";

type Props = {}

export const UsingHooks1 = (props: Props) => {
    const count = signal(0);

    // const [count, setCount] = useState(0);
    // const [message, setMessage] = useState(0);

    // useEffect(() => {
    //     setMessage(!message)
    //     return () => { }
    // }, [count])

    return (
        <div>
            hello:-{count.value}
            <button onClick={
                () => {
                    count.value = count.value + 1;
                }
            }>Ok</button>
        </div>
    )
}
