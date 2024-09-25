import React from 'react'
import { Link } from 'react-router-dom';

const Head = () => {
  return (
    <ul className="m-4 p-2 flex flex-wrap">
      <li className="m-4 p-2 border bg-gray-400">
        <Link to="/counter">Counter</Link>
      </li>
      <li className="m-4 p-2 border bg-gray-400">
        <Link to="/increment">Increment</Link>
      </li>
      <li className="m-4 p-2 border bg-gray-400">
        <Link to="/toggle">Toggle</Link>
      </li>
      <li className="m-4 p-2 border bg-gray-400">
        <Link to="/twowaybinding">TwoWayBinding</Link>
      </li>
      <li className="m-4 p-2 border bg-gray-400">
        <Link to="/customArray">CustomArray</Link>
      </li>
      <li className="m-4 p-2 border bg-gray-400">
        <Link to="/propsDrilling">PropsDrilling</Link>
      </li>
      <li className="m-4 p-2 border bg-gray-400">
        <Link to="/propsUseContext">PropsByUseContext</Link>
      </li>
      <li className="m-4 p-2 border bg-gray-400">
        <Link to="/arrayMover">ArrayMover</Link>
      </li>
      <li className="m-4 p-2 border bg-gray-400">
        <Link to="/todo">Todo</Link>
      </li>
      <li className="m-4 p-2 border bg-gray-400">
        <Link to="/reducer">ReducerComponent</Link>
      </li>
      <li className="m-4 p-2 border bg-gray-400">
        <Link to="/draganddrop">DragAndDrop</Link>
      </li>
      <li className="m-4 p-2 border bg-gray-400">
        <Link to="/propsfromChildtoparent">PropsFromChildToParent</Link>
      </li>
      <li className="m-4 p-2 border bg-gray-400">
        <Link to="/countTimer">CountTimer</Link>
      </li>
      <li className="m-4 p-2 border bg-gray-400">
        <Link to="/stopWatch">StopWatch</Link>
      </li>
      <li className="m-4 p-2 border bg-gray-400">
        <Link to="/digitalClock">DigitalClock</Link>
      </li>
      <li className="m-4 p-2 border bg-gray-400">
        <Link to="/counterRedux">CounterByRedux</Link>
      </li>
      <li className="m-4 p-2 border bg-gray-400">
        <Link to="/hocDashboard">HocDashboard</Link>
      </li>
      <li className="m-4 p-2 border bg-gray-400">
        <Link to="/crud">CrudOperation</Link>
      </li>
      <li className="m-4 p-2 border bg-gray-400">
        <Link to="/userlist">UserList</Link>
      </li>
    </ul>
  );
}

export default Head;
