import React, {useState} from 'react'


export const ExampleUseMemo1 = () => {
    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)

    let resultA = 1
    let resultB = 1

    for( let i = 1; i <= a; i++) {
        resultA *= i
    }
    return (
        <>
            <input type="text" value={a} onChange={ (e) => setA(+e.currentTarget.value)}/>
            <input type="text" value={b} onChange={ (e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                 Result for a : {}
            </div>
            <div>
                 Result for b : {}
            </div>
        </>
    )
}