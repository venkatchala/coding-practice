import { useState } from "react";

// const TwoWayBinding = () => {
//     const [text, setText] = useState('');

//     const handleInputChange = (newValue) => {
//         setText(newValue)
//     }
//     return (
//         <div>
//             <p>{text}</p>
//             <ChildComponent value={text} onData={handleInputChange} />
//         </div>
//     );
// };

// const ChildComponent = ({text, onData}) => {
//     const handleChange = (e) => {
//         onData(e.target.value)
//     }
//     return (
//       <div>
//         <input
//           className="border border-gray-400"
//           type="text"
//           value={text}
//           onChange={handleChange}
//         />
        
//       </div>
//     );
// }

// export default TwoWayBinding;

const TwoWayBinding = () => {
  const [text, setText] = useState('');
  const handleInputChange = (newValue) => {
    setText(newValue);
  }
  return (
    <div>
      <p>{text}</p>
      <ChildComponent value={text} onData={handleInputChange}/>
    </div>
  )
}

const ChildComponent = ({text, onData}) => {
  const handleChange = (e) => {
    onData(e.target.value)
  }
  return (
    <div>
      <input className="border border-gray-40" type="text" value={text} onChange={handleChange} />
    </div>
  )

}

export default TwoWayBinding;