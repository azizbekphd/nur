import { useEffect, useState } from "react"

type PromiseViewProps<T> = {
    promise: Promise<T> | null | undefined
}

const PromiseView = <T,>({promise}: PromiseViewProps<T>) => {
    const [result, setResult] = useState<T>()

    useEffect(() => {
        promise?.then(()=>{
            setResult(result)
        })
    })

    return <>{result}</>
}

export default PromiseView;