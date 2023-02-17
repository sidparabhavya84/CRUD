import React, { useState } from 'react';
import { useEffect } from 'react';
import { Table, Button, Form, InputGroup } from 'react-bootstrap';
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import GetForm from '../../utils/getdata';


function Empview() {

    const [store, setStore] = useState(GetForm);
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

    return (
        <>
            <Container>

                <Row className='justify-content-between align-items-center'>
                    <h1 className='col-5'>
                        Employee View
                    </h1>
                    <div className='col-2'>
                        <Button variant="primary" onClick={() => { addEmployee() }}>  Add Employee </Button>

                    </div>
                </Row>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile No</th>
                            <th>Gender</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            store.map((d, index) => {
                                return (<tr key={index}>
                                    <td>
                                        {
                                            index + 1
                                        }
                                    </td>
                                    <td>
                                        {
                                            isEdit && editIndex == index ? <InputGroup className="mb-3 d-inline-block w-100">
                                                <Form.Control
                                                    value={editInitial.name}
                                                    name='name'
                                                    className='w-100'
                                                    onChange={(e) => changeInput(e)}
                                                //   onBlur={() => saveData(index)}
                                                />
                                            </InputGroup> : d.name
                                        }
                                    </td>
                                    <td>
                                        {
                                            isEdit && editIndex == index ? <InputGroup className="mb-3 d-inline-block w-100">
                                                <Form.Control
                                                    value={editInitial.email}
                                                    name='email'
                                                    className='w-100'
                                                    onChange={(e) => changeInput(e)}
                                                //   onBlur={() => saveData(index)}
                                                />
                                            </InputGroup> : d.email
                                        }
                                    </td>
                                    <td>
                                        {
                                            isEdit && editIndex == index ? <InputGroup className="mb-3 d-inline-block w-100">
                                                <Form.Control
                                                    value={editInitial.mobile}
                                                    name='mobile'
                                                    className='w-100'
                                                    onChange={(e) => changeInput(e)}
                                                //   onBlur={() => saveData(index)}
                                                />
                                            </InputGroup> : d.mobile
                                        }
                                    </td>
                                    <td>
                                        {
                                            isEdit && editIndex == index ? <>
                                                <Form.Check
                                                    inline
                                                    label="Male"
                                                    name="gender"
                                                    type="radio"
                                                    value="male"
                                                    onClick={changeInput}
                                                    checked={editInitial.gender === "male"}
                                                />
                                                <Form.Check
                                                    inline
                                                    label="Female"
                                                    name="gender"
                                                    type="radio"
                                                    value="female"
                                                    onClick={changeInput}
                                                    checked={editInitial.gender === "female"}
                                                />
                                            </> :
                                                d.gender
                                        }
                                    </td>
                                    <td>
                                        {
                                            isEdit && editIndex == index ? <Form.Control type="text" placeholder="Enter Address" name='address' value={editInitial.address} onChange={(e) => changeInput(e)} />
                                                : d.address
                                        }
                                    </td>
                                    <td>
                                        {
                                            isEdit && editIndex == index ? <Button variant="primary" onClick={() => { handleSave(index) }}>Save</Button> : <Button variant="primary" onClick={() => { handleEdit(index, d) }}>Edit</Button>
                                        }
                                        <span style={{ border: "1px solid black", marginLeft: "10px", marginRight: "10px" }}></span>
                                        <Button variant="danger" onClick={() => {
                                            handleDelete(index)
                                        }}>Delete</Button>
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

export default Empview;