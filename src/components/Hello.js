// import Button from 'react-bootstrap/Button'
import { Carousel } from "react-bootstrap"

function Greet() {
    return (
    <>
        <h1>Welcome to AnyTime Donation Organization!</h1>
        <br />
        <Carousel>
            <Carousel.Item>
                <img className="Giving" src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" alt='first slide' />
                <Carousel.Caption>
                    <h3>It's more blessed to give than to receive!</h3>
                    <p>Thank you for all of your support</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="Giving" src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" alt='first slide' />
                <Carousel.Caption>
                    <h3>It's more blessed to give than to receive!</h3>
                    <p>Thank you for all of your support</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="Giving" src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" alt='first slide' />
                <Carousel.Caption>
                    <h3>It's more blessed to give than to receive!</h3>
                    <p>Thank you for all of your support</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </>  
    )
}

export default Greet