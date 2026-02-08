import { useEffect, useState } from "react";

const CrudLocalStorage = () => {
    const [data, setData] = useState([]);
    const [input, setInput] = useState("");
    const [editIndex, setEditIndex] = useState(null);

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleAdd = () => {
        if (input.trim() === "") return;

        if (editIndex !== null) {
            const updatedData = [...data];
            updatedData[editIndex] = input;
            setData(updatedData);
            setEditIndex(null);
        } else {
            setData([...data, input]);
        }
        setInput("");
    }

    const handleEdit = (index) => {
        setInput(data[index]);
        setEditIndex(index);
    }

    const handleDelete = (index) => {
        setData(data.filter((v,i) => i !== index))
    }


    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("crudData"));
        if (storedData) {
          setData(storedData);
        }
      }, []);
    useEffect(() => {
        localStorage.setItem("CrudData", JSON.stringify(data));
    },[data]);

    return (
        <div>
            <input type="text" className="border m-2" value={input} onChange={handleChange}/>
            <button className="border-1 bg-gray-300 m-2 px-2" onClick={handleAdd}>{editIndex !== null ? "Update":"Add"}</button>
            <ul>
                {
                    data.map((item, index) => (
                        <li key={index}>
                        {item}
                        <button className="border bg-gray-300 m-2 px-2" onClick={() => handleEdit(index)}>Edit</button>
                        <button className="border bg-gray-300 m-2 px-2" onClick={() => handleDelete(index)}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default CrudLocalStorage;