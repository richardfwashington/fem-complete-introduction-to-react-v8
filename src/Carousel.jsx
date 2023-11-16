import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["https://pets-images.dev-apis.com/pets/none.jpg"],
  };

  // Arrow function to get the right scope for this
  // Without it is undefined
  handleIndexClick = (e) => {
    this.setState({
      // Unary plus + to turn the DOM string to a number (I don't like this!)
      // target = the element
      // dataset = any data- elements
      // index = data-index
      active: +e.target.dataset.index,
    });
  };

  render() {
    //throw new Error("fail"); // Test for the ErrorBoundary
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal hero" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              onClick={this.handleIndexClick}
              data-index={index}
              key={photo}
              src={photo}
              className={index === active ? "active" : ""}
              alt="Animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
