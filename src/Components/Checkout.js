import React from "react";

class CheckOut extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      zipCode: "",
    };
  }

  firstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };

  lastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };

  emailHandler = (event) => {
    this.setState({ email: event.target.value });
  };

  zipCodeHandler = (event) => {
    this.setState({ zipCode: event.target.value });
  };

  render() {
    const { checkOutHandler } = this.props;

    return (
      <div className="Checkout">
        <form onSubmit={checkOutHandler}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={this.firstNameHandler}
            required
          ></input>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={this.lastNameHandler}
            required
          ></input>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={this.emailHandler}
            required
          ></input>
          <label htmlFor="zipCode">Zip Code</label>
          <input
            type="number"
            id="zipCode"
            name="zipCode"
            onChange={this.zipCodeHandler}
            required
          ></input>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default CheckOut;
