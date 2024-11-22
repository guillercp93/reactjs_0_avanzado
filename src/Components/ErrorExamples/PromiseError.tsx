import { useEffect, useState } from "react"

export const PromiseError = () => {
    const [data, setData] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            throw new Error("The promised did puff!");

        }

        fetchData().catch(err => {
            setData(err.message);
            setError(err.message);
            throw new Error("The promised already did puff!!!");
        });

        if (error) {
            throw error;
        }
    });

    return (
        <div>{data}</div>
    )
}
