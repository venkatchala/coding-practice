import { useState } from "react";
import { unstable_batchedUpdates } from "react-dom";

const Crud = () => {
    const [students, setStudents] = useState([]);
    const [editing, setEditing] = useState(false);
    const [studentName, setStudentName] = useState('');
    const [currentStudent, setCurrentStudentName] = useState({index: null , name: ''});


    const addStudent = () => {
        if (studentName.trim()) {
            setStudents([...students, studentName]);
            setStudentName('');
        }
    }

    const editStudent = (index) => {
        setEditing(true);
        setCurrentStudentName({index,name:students[index]});
    }

    const deleteStudent = (index) => {
        setStudents(students.filter((student,i) => i !== index));
    }

    const updateStudent = () => {
        let updatedStudents = [...students];
        updatedStudents[currentStudent.index] = currentStudent.name;
        setStudents(updatedStudents);
        setEditing(false);
        setCurrentStudentName({index: null, name:''});
    }
    return (
      <div>
        <h1>{editing ? "Edit Student" : "Add Student"}</h1>
        <input
        className="m-2 p-2 border border-gray-400"
          type="text"
          placeholder="Enter Student Name"
          value={editing ? currentStudent.name : studentName}
          onChange={(e) =>
            editing
              ? setCurrentStudentName({
                  ...currentStudent,
                  name: e.target.value,
                })
              : setStudentName(e.target.value)
          }
        />
        <button className="m-2 p-2 bg-gray-200" onClick={editing ? updateStudent : addStudent}>
          {editing ? "Update Student" : "Add Student"}
        </button>
        <h2>Student List</h2>
        <ul>
          {students.map((student, index) => (
            <li key={index}>
              {student}
              <button className="m-2 p-2 bg-gray-200" onClick={() => editStudent(index)}>Edit</button>
              <button className="m-2 p-2 bg-gray-200" onClick={() => deleteStudent(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
};

export default Crud;