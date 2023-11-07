import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


export const AboutUs = () => {
  return (
    <>
        <div className="d-flex justify-content-center mb-4">
            <h1>About Us</h1>
        </div>
        <div className="d-flex justify-content-center mb-4 ">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus facilis eaque, natus delectus iure magnam totam dolorum quod voluptates quibusdam vel? Saepe quisquam similique totam provident quasi unde hic aut!</p>
        </div>
      <div className="d-flex justify-content-around ">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="src/assets/chef.jpg" />
          <Card.Body>
            <Card.Title>Los mejores cheft</Card.Title>
            <Card.Text>
              Tenemos a los mejores chef del pais a tu disposicion 
            </Card.Text>
            <Button variant="primary">Saber Más</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="src/assets/delibery.jpg" />
          <Card.Body>
            <Card.Title>Velocidad de Delivery</Card.Title>
            <Card.Text>
              Tu pedido llega Rapido y caliente
            </Card.Text>
            <Button variant="primary">Saber Más</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="src/assets/calidad.jpg" />
          <Card.Body>
            <Card.Title>Productos de calidad</Card.Title>
            <Card.Text>
              Priorizamos Tu salud por eso utilzamos los productos de mejor calidad
            </Card.Text>
            <Button variant="primary">Saber Más</Button>
          </Card.Body>
        </Card>

      </div>
      
    </>
  );
};
