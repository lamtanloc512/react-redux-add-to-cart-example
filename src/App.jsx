import { useDispatch, useSelector } from 'react-redux';
import { firstLoad } from './store/product';
import { addToCartAction } from './store/cart';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.value);
  const carts = useSelector((state) => state.cart.value);
  const [productState, setProductState] = useState([]);

  useEffect(() => {
    if (Object.keys(productState).length == 0) {
      fetch('https://dummyjson.com/products')
        .then((res) => res.json())
        .then((re) => setProductState(re.products));
    }

    if (Object.keys(productState).length > 0) {
      dispatch(firstLoad(productState));
    }
  }, [productState]);

  const addToCart = (id) => {
    dispatch(addToCartAction(products[id]));
  };

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Photo</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(carts).length > 0
            ? carts?.map((x) => (
                <tr>
                  <th>{x.id}</th>
                  <th>{x.title}</th>
                  <th>{x.price}</th>
                  <th>{x.brand}</th>
                  <th>{x.category}</th>
                  <th>
                    <img
                      style={{ width: '50px', height: '50px' }}
                      src={x.images[0]}
                      alt="cart-photo"
                    />
                  </th>
                </tr>
              ))
            : []}
        </tbody>
      </Table>
      <Row>
        {Object.keys(products).length > 0
          ? products.map((x) => (
              <Col key={x.id}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={x.images[0]} />
                  <Card.Body>
                    <Card.Title>{x.title}</Card.Title>
                    <Card.Text>{x.description}</Card.Text>
                    <Button variant="primary" onClick={() => addToCart(x.id)}>
                      Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          : []}
      </Row>
    </Container>
  );
}

export default App;
