import React from 'react'
import { useNavigate } from 'react-router-dom';
import {Button,Card,Container} from 'react-bootstrap';

function Product() {
    const navigate = useNavigate();

    const pro1 = () => {
        console.log("called");
        navigate("/ProductView", { state: { img: "img/item-1.jpg", name: "iphone 13", details: "best phone Ever", price: "110$" } })
    }

    const pro2 = () => {
        navigate("/ProductView", { state: { img: "img/item-2.jpg", name: "iphone 13", details: "best phone Ever", price: "110$" } })
;
    }

    const pro3 = () => {
        navigate("/ProductView", { state: { img: "img/item-3.jpg", name: "iphone 13", details: "best phone Ever", price: "110$" } })

    }
    return (
        <>
            <Container>
                <h1>Products</h1>
                <div className='row'>
                    <Card className='col-4'>
                        {/* <h1>sjdch</h1> */}
                        <Card.Img variant='top' src='img/item-1.jpg'/>
                        <Card.Body className='text-center'>
                            <Button variant='dark' onClick={() => { pro1() }}>View</Button>
                        </Card.Body>
                    </Card>
                    <Card className='col-4'>
                        <Card.Img variant='top' src='img/item-2.jpg' />
                        <Card.Body className='text-center'>
                            <Button variant='dark' onClick={() => { pro2() }}>View</Button>
                        </Card.Body>
                    </Card>
                    <Card className='col-4'>
                        <Card.Img variant='top' src='img/item-3.jpg' />
                        <Card.Body className='text-center'>
                            <Button variant='dark' onClick={() => { pro3() }}>View</Button>
                        </Card.Body>
                    </Card>

                </div>
            </Container>
        </>
    )
}

export default Product;
