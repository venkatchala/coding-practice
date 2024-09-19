import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext();

const PropsByUseContext = () => {
    const [user, setUser] = useState("Hi I am props")
  return (
    <UserContext.Provider value={user}>
      <h1>Parent Component</h1>
      <Component1 />
    </UserContext.Provider>
  );
}

const Component1 = () => {
  return (
    <div>
      <h1>Child Component1</h1>
      <Component2 />
    </div>
  );
};

const Component2 = () => {
  return (
    <div>
      <h1>Child Component2</h1>
      <Component3 />
    </div>
  );
};

const Component3 = () => {
  return (
    <div>
      <h1>Child Component3</h1>
      <Component4 />
    </div>
  );
};

const Component4 = () => {
    const user = useContext(UserContext)
  return (
    <div>
      <h1>Child Component4 {user}</h1>
    </div>
  );
};

export default PropsByUseContext
