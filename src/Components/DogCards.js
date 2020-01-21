import React, { Component } from "react";
import ReactImageFallback from "react-image-fallback";

import SampleData from "../SampleData.json";
import Filters from "./Filters";
import "../modal.css";

import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

import placeholder from '../Images/placeholder.jpeg'


// modal receives props from DogCards component. 
class Modal extends React.Component {
  render() {
    return (
      <div id="dimmer">
        <div id="modal">
          <h5>{this.props.dog.name}</h5>
          <ReactImageFallback
                  src={this.props.dog.imageUrl}
                  fallbackImage={placeholder}
                  alt="imageUrl"
                  className="dogImg"
                />
          <p>Gender: {this.props.dog.gender}</p>
          <p>Birthdate: {this.props.dog.birthdate}</p>
          <p>Star Sign: {this.props.dog.starSign}</p>
          <p>City: {this.props.dog.city}</p>
          <p>Bio: {this.props.dog.bio}</p>
          <br/>
          <Button className="close" onClick={this.props.onClose()}>Close</Button>
        </div>
      </div>
    )
  }
}

// State on filters for min & max to pass on as props to Filters component. 
// Modal state passed as props to modal

class DogCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogToShowInModal:0,
      modalOpen: false,
      ageMin: 0,
      ageMax: Infinity,
      priceMin: 0,
      priceMax: Infinity,
    //   mileMin: 0,
    //   mileMax: Infinity
    };
    this.showDogInModal = this.showDogInModal.bind(this);
    this.hideDogModal = this.hideDogModal.bind(this);

    }
    showDogInModal(dog) {
    this.setState({modalOpen : true,
    dogToShowInModal: dog});
  }

  hideDogModal(){
    this.setState({modalOpen : false});
  }

  setYearRange = (min, max) => {
    this.setState({
      ageMin: min,
      ageMax: max
    });
  };

  setPriceRange = (min, max) => {
    this.setState({
      priceMin: min,
      priceMax: max
    });
  };

//   setMileageRange = (min, max) => {
//     this.setState({
//       mileMin: min,
//       mileMax: max
//     });
//   };

  render(){
    var dogData = SampleData;

    const filteredDogs = dogData.filter(dog => {
      const formattedPriceString = dog.adoptionPrice 
        .replace("R", "")
        .replace(",", ".")
        .split(" ")
        .join("");
      const dogPrice = parseFloat(formattedPriceString);
      return (
        dogPrice > this.state.priceMin &&
        dogPrice < this.state.priceMax &&
        dog.birthdate > this.state.ageMin &&
        dog.birthdate < this.state.ageMax
        // dog.mileage > this.state.mileMin &&
        // dog.mileage < this.state.mileMax
      );
    });
    const listDogs = filteredDogs.map((dog, i) => (
      <div>
        <CardGroup>
          <Card key={dog.imageUrl}>
            <Card.Title className="dogName">{dog.name}</Card.Title>
            <div className="imgTextDiv">
              <div className="imgDiv">
                <ReactImageFallback
                  src={dog.imageUrl}
                  fallbackImage={placeholder}
                  alt="imageUrl"
                  className="dogImg"
                />
              </div>
              <div className="contentDiv">
                <Card.Body>
                  <Card.Text className="dogName">
                    <ListGroup horizontal>
                      <ListGroup.Item>Birth Year: {dog.birthdate}</ListGroup.Item>
                      <ListGroup.Item>City: {dog.city}</ListGroup.Item>
                      <ListGroup.Item>Gender: {dog.gender}</ListGroup.Item>
                      <ListGroup.Item>Adoption Fee: {dog.adoptionPrice}</ListGroup.Item>
                    </ListGroup>
                    <br/>
                    <br/>
                    <p>{dog.bio}</p>
                  </Card.Text>
                </Card.Body>
              </div>
            </div>
            <Card.Footer>
            <Button onClick={() => this.showDogInModal(dog)}>See more</Button>
            </Card.Footer>
          </Card>
        </CardGroup>
        <br />
        <br />
      </div>
    ));
    return (
      <div>
        <br />
        <Filters
          setYearRange={this.setYearRange}
          setPriceRange={this.setPriceRange}
        //   setMileageRange={this.setMileageRange}
        />
        {this.state.modalOpen ? <Modal dog={this.state.dogToShowInModal} onClose={() => this.hideDogModal}/> : null}
          <Container>
          <Row>{listDogs}</Row>
        </Container>
      </div>
    );
  }
}

export default DogCards;

// Image Credits:

// Photo by hannah grace on Unsplash
// Photo by Samuel Sng on Unsplash
// Photo by Jairo Alzate on Unsplash
// Photo by Julian Dutton on Unsplash
// Photo by Chris Arthur-Collins on Unsplash
// Photo by Stephen Andrews on Unsplash
// Photo by Alvan Nee on Unsplash
// Photo by Edson Torres on Unsplash
// Photo by Arjan Stalpers on Unsplash
// Photo by Matthew Henry on Unsplash
