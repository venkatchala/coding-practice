import React, { useEffect, useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos");
    const json = await data.json();
    setTodo(json);
  };

  const handleClick = (e, index) => {
    setTodo(todo.filter((v, i) => i !== index));
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <table>
        <thead>
          <th></th>
        </thead>
        <tbody>
          {todo.map((item, index) => (
            <tr key={index}>
              <td>{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.completed}</td>
              <td>
                <button onClick={(e) => handleClick(e, index)}>Action</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Todo;