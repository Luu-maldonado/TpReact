import Carousel from 'react-bootstrap/Carousel';

export const CarouselHome = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={3000}>
            <img 
                className='d-block w-100'
                style={{maxHeight:"500px", objectFit:'cover'}}
                src="src/assets/Burger.jpg"
            />
          <Carousel.Caption>
            <h3>Proba las mejores hamburguesas del Pais</h3>
            <p>Realizadas especialmente para los fans de las hamburguesas</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
        <img 
                className='d-block w-100'
                style={{maxHeight:"500px", objectFit:'cover'}}
                src="src/assets/PASTA.jpg"
            />
          <Carousel.Caption>
            <h3>Proba todas nuestras recetas</h3>
            <p>Utilizamos productos de la mejor calidad</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
            <img 
                className='d-block w-100'
                style={{maxHeight:"500px", objectFit:'cover'}}
                src="src/assets/pASTEL.jpg"
            />
          <Carousel.Caption>
            <h3>Pobra nuestros postres</h3>
            <p>
              Terminá tu menú ideal con la dulzura de la casa
            </p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </>
  );
};
