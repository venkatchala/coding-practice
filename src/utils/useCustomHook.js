const { useEffect, useState } = require("react")

export const useCustomHook = (array) => {
    const [message ,setMessage] = useState(false)
    useEffect(() => {
        if(array.some(value => value > 0)) {
            setMessage(true);
        }
    },[array])
    return message;
}