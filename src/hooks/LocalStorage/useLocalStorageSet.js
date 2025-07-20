import { useEffect, useState } from "react";

export default function useLocalStorageSet(defendency) {
    const [cashData, setCashData] = useState([]);

    /* Load data from localstorage */
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("cashData")) || [];
        setCashData(saved);
    }, [defendency])

    // New entry data
    const newCashData = (entry) => {
        const updated = [...cashData, entry];
        localStorage.setItem("cashData", JSON.stringify(updated));
        setCashData(updated);
    }

    return { cashData, newCashData };
}