import { useEffect, useRef, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const idRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const avatarRef = useRef();

  // TODO: Load data from backend service
  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then(res => res.json())
      .then(json => setEmployees(json.data));
  }, []);

  const addEmployee = () => {
    // TODO: Add validations
    const idRegex = /^[0-9]*$/;
    const nameRegex = /^[a-zA-Z -üõöäÜÕÖÄ]*$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (idRef.current.value === "") {
      toast.error("ID is required, can't add!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }
    if (idRegex.test(idRef.current.value) === false) {
      toast.error("ID must contain only numbers, can't add!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }
    if (firstNameRef.current.value === "") {
      toast.error("Name is required, can't add!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }
    if (!nameRegex.test(firstNameRef.current.value)) {
      toast.error("Name must contain only letters, can't add!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }
    if (emailRef.current.value === "") {
      toast.error("Email is required, can't add!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }
    if (!emailRegex.test(emailRef.current.value)) {
      toast.error("Invalid email format, can't add!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }

    // TODO: Add an employee to the table
    const newEmployee = {
      "id": idRef.current.value,
      "first_name": firstNameRef.current.value,
      "last_name": lastNameRef.current.value,
      "email": emailRef.current.value,
      "avatar": avatarRef.current.value,
    }
    employees.push(newEmployee);
    setEmployees(employees.slice());
  }

  const deleteEmployee = (index) => {
    // TODO: Delete an employee from the table
    employees.splice(index,1);
    setEmployees(employees.slice());
  }

  return (<div>
    <div className="container">
      <h2 className="mb-4">Employees</h2>
      <Table className="table table-hover table-bordered table-sortable">
        <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          {/* <!-- TODO: Add a column for an avatar --> */}
          <th scope="col">Avatar</th>
          <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody>
        {employees.map((element, index) =>
          <tr key={element.id}>
            <td>{element.id}</td>
            <td>{element.first_name} {element.last_name}</td>
            <td>{element.email}</td>
            <td><img src={element.avatar} alt="" /></td>
            <td><Button type="button" variant="danger" onClick={() => deleteEmployee(index)}>Delete</Button></td>
          </tr> )}

        <tr className="input-row">
          <td><input type="text" ref={idRef} placeholder="ID" className="form-control"/></td>
          <td><input type="text" ref={firstNameRef} placeholder="First Name" className="form-control"/>
              <input type="text" ref={lastNameRef} placeholder="Last Name" className="form-control"/></td>
          <td><input type="text" ref={emailRef} placeholder="Email" className="form-control"/></td>
          <td><input type="text" ref={avatarRef} placeholder="Avatar" className="form-control"/></td>
          <td><Button type="submit" variant="success" onClick={addEmployee}>Add</Button></td>
        </tr>
        </tbody>
      </Table>
      <ToastContainer />
    </div>

  </div>)
}

export default Employees;