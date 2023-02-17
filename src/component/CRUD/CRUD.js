
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { InputGroup } from 'react-bootstrap';


const GetForm = () => {
  const formdata = localStorage.getItem("MyForm")
  if (formdata) {
    return JSON.parse(formdata)
  } else {
    return [];
  }
}

function CRUD() {

  const [initial, setInitial] = useState({
    name: '',
    email: '',
  });
  const [storedata, setStoredata] = useState(GetForm());
  const [editinput, setEditInput] = useState(false);
  const [editinitial, setEditInitial] = useState({
    name: '',
    email: ''
  });
  const [indexId, setIndexId] = useState('');

  const ChangeInput = (e) => {
    const data = e.target.name;
    const value = e.target.value;
    // console.log(value);
    if (editinput) {
      setEditInitial({ ...editinitial, [data]: value })
    }
    else {
      setInitial({ ...initial, [data]: value });
    }
  }

  const FormSubmit = (e) => {
    e.preventDefault();
    setStoredata([...storedata, initial]);
    setInitial({
      name: '',
      email: ''
    });
  }

  const handleEdit = (index, value) => {
    setEditInput(true);
    setEditInitial(value);
    setIndexId(index);
  }

  const handleSave = (index) => {
    setEditInput(false)
    setEditInitial({
      name: '',
      email: ''
    });
    const array = storedata;
    array[index] = editinitial
    setStoredata([...array])
  }
  const handleDelete = (index) => {
    const filterData = storedata.filter((el,id) => {
        return id !== index;
    })

    setStoredata([...filterData])
}

  // console.log(storedata);

  useEffect(() => {
    console.log("calll");
    localStorage.setItem('MyForm', JSON.stringify(storedata))
  }, [storedata])


  return (
    <>
      <Container>
        <Form onSubmit={FormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" name='name' value={initial.name} onChange={(e) => { ChangeInput(e) }} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" name='email' value={initial.email} onChange={(e) => { ChangeInput(e) }} />
          </Form.Group>

         

          <br />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <br /><br /><br />
        <h1>List</h1>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              storedata.map((value, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>
                      {
                        editinput && indexId == index ? <InputGroup className="mb-3">
                          <Form.Control
                            name='name'
                            value={editinitial.name}
                            onChange={(e) => { ChangeInput(e) }}
                          />
                        </InputGroup> : value.name
                      }
                    </td>
                    <td>
                      {
                        editinput && indexId == index ? <InputGroup className="mb-3">
                          <Form.Control
                            name='email'
                            value={editinitial.email}
                            onChange={(e) => { ChangeInput(e) }}
                          />
                        </InputGroup> : value.email
                      }
                    </td>
                    <td>
                      {
                        editinput && indexId == index ? <Button variant="primary" onClick={() => { handleSave(index, value) }}>Save</Button> : <Button variant="primary" onClick={() => { handleEdit(index, value) }}>Edit</Button>
                      }&nbsp;&nbsp;&nbsp;
                      {
                        <Button variant="danger" onClick={() => {
                          handleDelete(index)
                        }}>Delete</Button>
                      }
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </Container>
    </>
  )
}

export default CRUD;