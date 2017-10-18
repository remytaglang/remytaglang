import React from "react";
import "./flat.css";

// const flat = {
//   name: "great",
//   price:100,
//   //etc
// }

// <Flat flat = {flat} />

class Flat extends React.Component {
  render () {

    const title = this.props.flat.price +
    this.props.flat.priceCurrency +
     " - " this.props.flat.name;

     const style = {
      backgroundImage: 'url('${this.props.flat.imageUrl}')'
      // interpollation façon JS avec le $
      // faut pas mettre background-image car c est du JSON
     };


    return (
      <div className="flat">
        <div className="flat-picture"> </div>
        <div className="flat-title">
        {title}
        </div>
      </div>
      )
  }

}

export default Flat;
