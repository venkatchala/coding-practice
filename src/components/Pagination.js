import React, { useEffect, useState } from 'react';

const Pagination = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    useEffect(() => {
        fetchApi();
    },[currentPage]);

    const fetchApi = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${currentPage}&_limit=${itemsPerPage}`);
        const result = await response.json();
        setData(result);
    }
    return (
        <div>
            <h2>Pagination!..</h2>
            <ul>
                {
                    data.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))
                }
            </ul>
            <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>Prev</button>
            <span>Page {currentPage}</span>
            <button onClick={() => setCurrentPage(prev => Math.max(prev + 1, 1))}>Next</button>
        </div>
    )
}

export default Pagination;