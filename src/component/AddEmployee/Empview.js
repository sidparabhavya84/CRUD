import React, { useState } from 'react';
import { useEffect } from 'react';
import { Table, Button, Form, InputGroup } from 'react-bootstrap';
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 
import GetData from '../utils/GetData'




function Empview() {
    const [store, setStore] = useState(GetData);
    const [editInitial, setEditInitial] = useState(
        {
            name: '',
            email: '',
            mobile: '',
            address: '',
            gender: ''
        }
    )
    const [isEdit, setIsEdit] = useState(false);
    const [isSave, setSave] = useState(false);
    const [editIndex, setEditIndex] = useState('');

    const navigate = useNavigate();
    // const location = useLocation();
    // const store = location.state.data;

    const addEmployee = () => {

        navigate('/addEmployee')
    }

    const changeInput = (e) => {
        const fieldName = e.target.name;
        const value = e.target.value;

        if (isEdit) {
            setEditInitial({ ...editInitial, [fieldName]: value })
        }

    }

    const handleEdit = (index, d) => {

        setIsEdit(true);
        setEditIndex(index);
        setEditInitial(d);
        setSave(false);

    }

    const handleSave = (index) => {
        setIsEdit(false);
        setSave(true);
        const array = store;
        array[index] = editInitial;
        setStore([...array]);
        setEditInitial({
            name: '',
            email: '',
            mobile: '',
            address: '',
            gender: ''
        })
    }

    const handleDelete = (index) =>{
        console.log("handleDelete", index);
        if(isSave){
            setSave(false);
        }else{
            setSave(true);
        }
       const filterData =  store.filter((el, id) => {

            return id !== index;
        })

        setStore([...filterData])

        console.log(filterData);
    }

    // useEffect(() => {
    //     if (location.state) {
    //         console.log("location", location.state.data);
    //         // setStore([...store, location.state.data]);
    //         localStorage.setItem("crud", JSON.stringify(location.state.data));
    //     } else {
    //         // localStorage.setItem("crud", JSON.stringify(store));
    //         setStore(getData);

    //     }
    // });

    useEffect(() => {
        console.log("USeEffect Save");
        localStorage.setItem("crud", JSON.stringify(store));
    }, [isSave])



    const columns = [
        {
          field: 'name',
          headerName: 'Name',
          width: 150,
          editable: true,
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 150,
          editable: true,
        },
        {
          field: 'mobile',
          headerName: 'Mobile',
          type: 'number',
          width: 110,
          editable: true,
        },
        {
          field: 'gender',
          headerName: 'Gender',
          width: 150,
          editable: true,
        },
        {
          field: 'address',
          headerName: 'Address',
          width: 110,
          editable: true,
        }
      ];

    return (
        <Container>
            <h1>EmployeeView </h1>
            <Button variant='primary' onClick={() => { addEmployee() }}>AddEmployee</Button>
            {/* <div className='col-2' style={{ textAlign: 'start' }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" value={searchPro.search} onChange={((e) => ChangeInput(e))} placeholder="search" />
                </Form.Group>
            </div> */}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile No</th>
                        <th>Address</th>
                        <th>Gender</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        store.map((d, i) => {
                            return (
                                <tr key={i} id={i}>
                                    <td>{i + 1}</td>
                                    <td>{
                                        isEdit && editIndex === i ? <Form.Group className="mb-3">
                                            <Form.Control type="name" placeholder="Enter Name"
                                                name='name'
                                                value={editInitial.name}
                                                onChange={(e) => { changeInput(e) }} />
                                        </Form.Group> : d.name
                                    }</td>
                                    <td>{
                                        isEdit && editIndex === i ? <Form.Group className="mb-3">
                                            <Form.Control type="email" placeholder="Enter Email"
                                                name='email'
                                                value={editInitial.email}
                                                onChange={(e) => { changeInput(e) }} />
                                        </Form.Group> : d.email
                                    }</td>
                                    <td>{
                                        isEdit && editIndex === i ? <Form.Group className="mb-3">
                                            <Form.Control type="mobile" placeholder="Enter Mobile Number"
                                                name='mobile'
                                                value={editInitial.mobile}
                                                onChange={(e) => { changeInput(e) }} />
                                        </Form.Group> : d.mobile
                                    }</td>
                                    <td>{
                                        isEdit && editIndex === i ? <Form.Group className="mb-3">
                                            <Form.Control type="text" placeholder="Enter Address"
                                                name='address'
                                                value={editInitial.address}
                                                onChange={(e) => { changeInput(e) }} />
                                        </Form.Group> : d.address
                                    }</td>
                                    <td>{
                                        isEdit && editIndex === i ? <Form.Group>
                                            <Form.Check
                                                inline
                                                label="Male"
                                                name="gender"
                                                type='radio'
                                                value="male"
                                                checked={editInitial.gender === 'male'}
                                                onChange={(e) => { changeInput(e) }}
                                            />
                                            <Form.Check
                                                inline
                                                label="Female"
                                                name="gender"
                                                type='radio'
                                                value="female"
                                                checked={editInitial.gender === 'female'}
                                                onChange={(e) => { changeInput(e) }}
                                            />
                                        </Form.Group> : d.gender}</td>
                                    <td>
                                        {
                                            isEdit && editIndex === i ? <Button variant="primary" onClick={() => { handleSave(i, d) }}>Save</Button> : <Button variant="primary" type="button" onClick={() => { handleEdit(i, d) }}>Edit</Button>
                                        }
                                    </td>
                                    <td>
                                        <Button variant="danger" onClick={() => { handleDelete(i) }}>Delete</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
           {/* <div style={{height:'400px'}}>
           <DataGrid
                rows={storeData}
                columns={columns}
                pageSize={5}
                
            />
           </div> */}
        </Container>
    );
}

export default Empview;