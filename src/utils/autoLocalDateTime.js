import { useEffect, useState } from "react";

const autoLocalDateTime = () => {
    const [localTime, setLocalTime] = useState('')
    useEffect(() => {
        const now = new Date();
        const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
            .toISOString()
            .slice(0, 16);
        setLocalTime(local)
    }, [])
    return localTime;
}

export default autoLocalDateTime;