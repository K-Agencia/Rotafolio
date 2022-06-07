import React, { useEffect, useState } from 'react';
import { Alert, Carousel, Container } from 'react-bootstrap';
import { imgSliders } from '../Constantes/Images';
import ButtonSecciones from './ButtonSecciones';
import NavBarRotafolio from './NavBarRotafolio';

const Sliders = () => {

  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleSlider = (idSlider) => {
    setIndex(idSlider);
  }

  useEffect(() => {
    if (index === 20 || index === 22) {
      setShow(true);
      setTimeout(() => {
        setShow(false)
      }, 8000);
    }else{
      setShow(false);
    }
  }, [index])

  return (
    <>

      <NavBarRotafolio />
      <Container>
        <Carousel variant="dark" activeIndex={index} onSelect={handleSelect} >

          {imgSliders.map((image, index) => (
            <Carousel.Item key={index}>
              <a href={image.url}>
                <img className='imgRotafolio' src={image.imgSlider} alt="" />
              </a>
            </Carousel.Item>
          ))}

        </Carousel>

        <ButtonSecciones className="mt-4" handleSlider={handleSlider} />

        <div className="alertQR">
          <Alert variant="primary" show={show} onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Puedes dar clic a esta imagen para tener mayor información</Alert.Heading>
          </Alert>
        </div>
      </Container>
    </>
  );
};

export default Sliders;