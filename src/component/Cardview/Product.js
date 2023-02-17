import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Card, Container } from 'react-bootstrap';

function Product() {
    const navigate = useNavigate();

    const Iphone = () => {
        navigate("/ProductView", { state: { img: "img/iphone.jpg", name: "iPhone 14 Pro", details: "iPhone 14 Pro. Pro. Beyond. iPhone 14 Pro. Capture incredible detail with a 48MP Main camera.Experience iPhone in a whole new way with Dynamic Island and Always-On display. ", price: "₹126,400", rating: "4.5" } })
    }

    const macbook = () => {
        navigate("/ProductView", { state: { img: "img/macbook.jpg", name: "Apple 2022 MacBook Pro Laptop", details: "13.3-inch Retina Display enables you to view every conatant with perfect clarity", price: "₹1,39,990", rating: "4.2" } })
            
    }

    const watch = () => {
        navigate("/ProductView", { state: { img: "img/watch.jpeg", name: "Starlight Aluminium Case with Sport Band", details: "The aluminium case is lightweight and made from 100 per cent recycled aerospace-grade alloy.", price: "₹45900.00", rating: "4.0" } })

    }
    return (
        <>
            <Container>
                <h1 style={{paddingBottom:'50px'}}>Products</h1>
                <div className='row'>
                    <div className='col-4'>
                        <Card border="warning" style={{ padding: '10px' }}>

                            <Card.Img variant='top' src='img/iphone.jpg' style={{ width: '80%', marginLeft: '8%' }} />
                            <Card.Body className='text-center'>
                                <Button variant='success' size="lg" className="mb-2" onClick={() => { Iphone() }}>View</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-4'>
                        <Card border=" secondary" style={{ padding: '10px' }}>
                            <Card.Img variant='top' src='img/macbook.jpg' style={{ width: '100%', marginLeft: '0%' }} />
                            <Card.Body className='text-center'>
                                <Button variant='success' size="lg" className="mb-2" onClick={() => { macbook() }}>View</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-4'>
                        <Card border="danger" style={{ padding: '10px' }}>
                            <Card.Img variant='top' src='img/watch.jpeg' style={{ width: '90%', marginLeft: '5%' }} />
                            <Card.Body className='text-center'>
                                <Button variant='success'size="lg" className="mb-2"  onClick={() => { watch() }}>View</Button>
                            </Card.Body>
                        </Card>
                    </div>

                </div>
            </Container>
        </>
    )
}

export default Product;
