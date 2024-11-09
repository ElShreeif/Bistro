import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/Slices/cartSlice";

const Menu = () => {
 const menuItems = useSelector((state) => state.menu.items);
 const dispatch = useDispatch();
 return (
  <section className="bg-black">
   <h2 className="text-center fs-1 text-white fw-bold">Our Menu</h2>
   <div className="py-5">
    <Container className="py-5">
     <Row>
      {menuItems.map((item) => (
       <Col key={item.id} md={4} className="mb-4">
        <Card className="menu-section bg-dark bg-opacity-50 border border-warning">
         <Card.Img variant="top" src={item.image} />
         <Card.Body className="text-white">
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
           <strong>${item.price}</strong>
          </Card.Text>
          <Button
           onClick={() => dispatch(addToCart(item))}
           variant="warning"
           className="text-black fw-semibold"
          >
           Add to Cart
          </Button>
         </Card.Body>
        </Card>
       </Col>
      ))}
     </Row>
    </Container>
   </div>
  </section>
 );
};

export default Menu;
