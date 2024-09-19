import { useState } from "react";

const PropsFromChildToParent = () => {
    const [fromChild , setFromChild] = useState('');

    const handleChange = (data) => {
        setFromChild(data)
    }
    
    return (
        <div className="text-center">
            <p>Props from Child Component: {fromChild}</p>
            <ChildComponent onData={handleChange} />
            
        </div>
    );
};

const ChildComponent = ({onData}) => {

    const sendDataToParent = () => {
        const data = "Hello Parent!...."
        onData(data)
    }
    return (
        <div>
            <button className="m-2 p-2 bg-blue-400" onClick={sendDataToParent}>SendDataToParent</button>

        </div>
    )
}

export default PropsFromChildToParent;
