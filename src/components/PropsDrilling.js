import React, { useState } from 'react'

const PropsDrilling = () => {
    const [user, setUser] = useState("Hi I am a Props")
  return (
    <div>
      <h1>Parent Component</h1>
      <Component1 user={user}/>
    </div>
  )
}

const Component1 = ({user}) => {
  return (
    <div>
      <h1>Child Component1</h1>
      <Component2 user={user}/>
    </div>
  );
};

const Component2 = ({user}) => {
  return (
    <div>
      <h1>Child Component2</h1>
      <Component3 user={user}/>
    </div>
  );
};

const Component3 = ({user}) => {
  return (
    <div>
      <h1>Child Component3</h1>
      <Component4 user={user}/>
    </div>
  );
};

const Component4 = ({user}) => {
  return (
    <div>
      <h1>Child Component4 {user}</h1>
    </div>
  );
};

export default PropsDrilling
