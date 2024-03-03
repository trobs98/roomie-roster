import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle as solidCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircle as emptyCircle } from "@fortawesome/free-regular-svg-icons";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import { useSelector } from "react-redux";
import { getProfile } from "./profileSlice";

const ProfileImageCoursel = (props) => {
    const user = useSelector(getProfile);
    const [index, setIndex] = useState(0);
    const carouselImageIds = props.imagesIds;
    // const carouselImages = 

    const carouselImages = [
        {
            id: 1,
            src: "https://cdn.vox-cdn.com/thumbor/8WOFQ4GJn0-9cfJTMaZjQBJa-i8=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13181231/jciceskate__791d316ae5422d49c3d151797324ea03.jpg",
            alt: "John Cena #1"
        },
        {
            id: 2,
            src: "https://m.media-amazon.com/images/M/MV5BMTQ5MzkzNTIyN15BMl5BanBnXkFtZTYwNzUzOTA2._V1_FMjpg_UX1000_.jpg",
            alt: "John Cena #2"
        },
        {
            id: 3,
            src: "https://cdn.wrestletalk.com/wp-content/uploads/2023/10/john-cena-october-11-e.jpg",
            alt: "John Cena #3"
        }
    ]

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const carouselIndicatorCircles = () => {
        const indicators = [];

        for (let i = 0; i < carouselImages.length; i++) {
            if (i === index) {
                indicators.push(<FontAwesomeIcon icon={solidCircle} style={{marginLeft:"5px", marginRight:"1px", color:"#74C0FC"}}/>);
            } else {
                indicators.push(<FontAwesomeIcon icon={emptyCircle} style={{marginLeft:"5px",  marginRight:"1px", color:"#74C0FC"}}/>);
            }
        }

        return indicators;
    }

    return (
        <Container className="profile-carousel">
            <Carousel activeIndex={index} onSelect={handleSelect} interval={null} indicators={false} slide={false}>
                {carouselImages.map((image) => (
                    <Carousel.Item key={image.id}>
                        <Image 
                            src={image.src}
                            alt={image.alt}
                            style={{width: '500px', height: '500px', objectFit: 'cover', maxWidth: "100%"}}
                            thumbnail
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
            <Row className="align-items-center">
                <Col xs="auto" className="mx-auto">
                    {carouselIndicatorCircles()}
                </Col>
            </Row>
        </Container>
    )
}

export default ProfileImageCoursel;