import React from 'react'
import { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import GetForm from '../../utils/getdata';


function AddEmployee() {

    const [initial, setInitial] = useState({
        name : '',
        email: '',
        mobile: '',
        address: '',
        gender: '',
    })

    const [isSubmit, setIsSubmit] = useState(false);
    const [store, setStore] = useState(GetForm);

    const navigate = useNavigate();

    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setInitial({...initial, [name] : value});
    }   

    const handleSubmit = (e) =>{
        e.preventDefault();
        const {name, email, mobile, gender, address} = initial;
       
        if(name == '' || email == '' || mobile == '' || gender == '' || address == ''){
            console.error("Enter Value...");

        }
        else{
            setStore([...store, initial]);
            setIsSubmit(true);
            setInitial({
                name : '',
            email: '',
            mobile: '',
            address: '',
            gender: '',
            })

            
        }
        
    }
    
    useEffect(() =>{
        console.log("store useEfect");
        localStorage.setItem("crud", JSON.stringify(store));
        if(isSubmit){
            navigate("/Empview");
        }
    },[store])
    // useEffect(() =>{
    //     navigate("/empview", { state: {data : store}});
    // }, [store])

    return (
        <>
            <Container>
                <NavLink to="/">
                    Back
                </NavLink>
                <h1>
                    Add Employee Details
                </h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" name="name" value={initial.name} onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="Enter Email" name='email' value={initial.email} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Mobile No</Form.Label>
                        <Form.Control type="text" placeholder="Enter Mobile" name='mobile' value={initial.mobile} onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Gender :</Form.Label>
                        <div>

                            <Form.Check
                                inline
                                label="Male"
                                name="gender"
                                type="radio"
                                value="male"
                                onChange={handleChange}
                                checked={initial.gender === "male"}
                            />
                            <Form.Check
                                inline
                                label="Female"
                                name="gender"
                                type="radio"
                                value="female"
                                onChange={handleChange}
                                checked={initial.gender === "female"}
                            />
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter Address" name='address' value={initial.address} onChange={handleChange}/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                </Form>
            </Container>
        </>
    )
}


export default AddEmployee;