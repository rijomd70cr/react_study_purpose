import { useLayoutEffect, useEffect, useState } from 'react';

type Props = {}

export const UsingHooks1 = (props: Props) => {
    const [first, setfirst] = useState(1);

    useLayoutEffect(() => {
        console.log(first, "useLayoutEffect");
        return () => { };
    }, [first])

    useEffect(() => {
        console.log(first, "useEffect");
        return () => { }
    }, [first])

    return (
        <div>
            <button onClick={() => setfirst(prev => prev + 1)}>ok</button>
        </div>
    )
}
