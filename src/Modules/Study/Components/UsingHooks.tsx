import { useState, useTransition, useEffect, useDeferredValue } from 'react';
import { sample } from '../Config/Constant';

import axios from "../../../Services/Request";

type Props = {}

export const UsingHooks = (props: Props) => {
    const [count, setCount] = useState(0);
    const [first, setfirst] = useState<any | undefined>([]);

    const [value, setValue] = useState("");
    const [searchData, setSearchData] = useState<any>([]);

    const [inputValue, setInputValue] = useState("");
    const deferredValue = useDeferredValue(inputValue);

    const [isPending, setTransition] = useTransition();  // provides urgent update value (high prior)
    const repeatData = (array: any, length: number) => Array(length).fill(array).flat();

    const loadData = () => {
        setCount(prev => prev + 1);  //state updating
        setTransition(() => { // waiting for completion 
            let array: any[] = [];
            array = Array(20000).fill(1).map((x: any, i: number) => (count + 2000) - i);
            setfirst(array);
        })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);  //urgent value update
        setTransition(() => {
            if (e.target.value) {
                const newArray = searchData.filter((data: any) => data?.first_name?.toLowerCase().includes(e.target.value));
                setSearchData(newArray);
            }
            else {
                const array = repeatData(sample, 1000);
                setSearchData(array);
            }
        }); // last update , need to display after pending task
    }

    useEffect(() => {
        if (deferredValue) {
            setTransition(() => {
                axios.post<any>("user/requestFriend", { data: { recieverID: deferredValue } }).then(() => {
                    const array = repeatData(sample, 1000);
                    setSearchData(array);
                })
            });
        }
    }, [deferredValue]);   // instead of onblur , speed typing calls last one only (useDefferedvalue)

    const handleChangeNew = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    return (
        <div>
            {/* <button onClick={loadData}>Count--{count}</button>
            {isPending ? <div>Loading...</div> : first?.length > 0 && <ol>{first.map((x: any) => <li>{x}</li>)}</ol>} */}

            <div style={{ marginTop: "1rem", border: "1px solid #ccc", padding: 8 }}>
                {/* <input onChange={handleChange} value={value} placeholder='First Name' /> */}
                <input onChange={handleChangeNew} value={inputValue} placeholder='Name' />

                <table style={{ width: "70%" }}>
                    <thead>
                        <tr>{Object.keys(sample[0]).map((item: any) => <th>{item}</th>)}</tr>
                    </thead>
                    {isPending ? <div>Loading...</div> : searchData?.length > 0 && <tbody>
                        {searchData.map((item: any) => {
                            return <tr>
                                {Object.keys(sample[0]).map((data: any) => <td>{item[data]}</td>)}
                            </tr>
                        })}
                    </tbody>}
                </table>
            </div>

        </div>
    )
}