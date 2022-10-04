import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({nombre, img}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="dark">Add to Cart</Button>
            </Card.Body>
        </Card>
    )
}
export default Item;


//rafce

// import React from 'react'

// const Item = () => {
//   return (
//     <div>Item</div>
//   )
// }

// export default Item