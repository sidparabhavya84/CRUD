import React from 'react';
import { useEffect } from 'react';
import { Card, Container ,Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';


function ProductView() {
    const navigate = useNavigate();
    const data = useLocation();
    console.log("data",data);

    useEffect(() => {
        console.log(data, "location");
    })

    const back = () => {
        navigate(-1);
    }

    return (
        <>
            <div className='bg-light- py-5'>
                <h1 className='text-center'>Product Details</h1>
            </div>
            <Container>
                <div className='row'></div>
                <div className='col-4 mx-auto mt-5'>
                    <Card>
                        <Card.Img variant='top' src={data.state.img}></Card.Img>
                        <Card.Body>
                            <Card.Title>{data.state.name}</Card.Title>
                            <Card.Text>{data.state.details}</Card.Text>
                            <Card.Text>{data.state.price}</Card.Text>
                            <Button variant="primary" className="m-0 px-2 py-1" onClick={()=> {back()}}>Back</Button>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </>
    )
}

export default ProductView;