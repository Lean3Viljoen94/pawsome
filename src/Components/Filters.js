import React, { Component } from "react";

import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

// Receives props from the DogCards component 

// Filters 

class Filters extends Component {
  render() {
    return (
      <div>
        <h1 className="welcomeShowroom">Welcome Humans!</h1>
        <h2 className="filterBy"> Filter By : </h2>
        <div className="filterDiv">
          <DropdownButton id="dropdown-basic-button" title="Age">
            <Dropdown.Item onClick={() => this.props.setYearRange(0, 2018)}>
              Older than a year
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => this.props.setYearRange(2019, Infinity)}
            >
              Younger Than a year {" "}
            </Dropdown.Item>
            <Dropdown.Item onClick={() => this.props.setYearRange(0, Infinity)}>
              Clear Filter
            </Dropdown.Item>
          </DropdownButton>
          <DropdownButton id="dropdown-basic-button" title="Adoption Fee">
            <Dropdown.Item onClick={() => this.props.setPriceRange(0, 999)}>
              Less than R1000
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => this.props.setPriceRange(1000, Infinity)}
            >
              More than R1000
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => this.props.setPriceRange(0, Infinity)}
            >
              Clear Filter
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    );
  }
}

export default Filters;
