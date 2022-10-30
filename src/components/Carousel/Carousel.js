import CarouselService from '../../services/carousel-service';
import {useEffect, useState} from "react";

const Carousel = (props) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slides, setSlides] = useState([]);

    const containerStyle = {
        height: '100%',
        position: 'relative'
    };

    const slideStyle = {
        width: '100%',
        height: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: slides.length !== 0 && `url(${slides[currentSlide].image})`
    };

    const leftArrowStyle = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        left: '32px',
        fontSize: '45px',
        color: '#fff',
        zIndex: 1,
        cursor: 'pointer'
    };

    const rightArrowStyle = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '32px',
        fontSize: '45px',
        color: '#fff',
        zIndex: 1,
        cursor: 'pointer'
    };

    useEffect(() => {
        loadSlides();
    }, []);

    function loadSlides() {
        CarouselService.getSlides(props.slides)
            .then((response) => {
                console.log(response.data);
                setSlides(response.data)
            }).catch((error) => {
                console.log(error);
            }
        )
    };

    const goPrevious = () => {
        const isFirstSlide = currentSlide === 0;
        const newIndex = isFirstSlide ? slides.length - 1
            :
            currentSlide - 1;
        setCurrentSlide(newIndex);
    };

    const goNext=()=> {
      const isLastSlide = currentSlide === slides.length -1;
        const newIndex = isLastSlide ? 0
            :
            currentSlide + 1;
        setCurrentSlide(newIndex);
    };

    return (
        <div style={containerStyle}>
            <div style={leftArrowStyle} onClick={goPrevious}><span>&#8592;</span></div>
            <div style={rightArrowStyle} onClick={goNext}><span>&#8594;</span></div>
            <div style={slideStyle}>

            </div>
        </div>
    );
};

export default Carousel;