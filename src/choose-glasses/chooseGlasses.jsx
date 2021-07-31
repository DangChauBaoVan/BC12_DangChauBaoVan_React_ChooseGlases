import React, { Component } from "react";
import "./style.css";
class chooseGlasses extends Component {
  state = {
    glassesName: "GUCCI G8850U",
    price: 30,
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
    url:"./glassesImage/v1.png"
  };
  glassesList = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];
  renderGlasses() {
    return this.glassesList.map((glasses) => {
      return (
        <div className="glassesItem mx-4 my-2" onClick={()=>this.tryGlasses(glasses.id)}>
          <img src={`./${glasses.url}`} width="100px" alt="" />
        </div>
      );
    });
  }
  tryGlasses = (id) =>{
    this.glassesList
    .filter((glasses) => glasses.id === id)
    .map((glasses, index) => {
      const { price,name,desc,url } = glasses;

      this.setState(
        {
          glassesName: name,
          price,
          desc,
          url
        }
      );
    });

  }
  render() {
    const { glassesName, price, desc,url } = this.state;
    return (
      <div
        className="container-fluid"
        style={{
          backgroundColor: "pink",
          height: "850px",
          width: "100%",
          padding: "0",
        }}
      >
        <h1
          style={{ backgroundColor: "rgba(0,0, 0, 0.3)", padding: "10px 0" }}
          className="text-light"
        >
          TRY GLASSES APP ONLINE
        </h1>
        <div className="card mx-auto" style={{ width: "20rem" }}>
          <img
            src="./glassesImage/model.jpg"
            className="card-img-top"
            alt="..."
            id="modelImg"
          />
          <img src={url} alt=""  id="wearGlasses"/>
          <div className="card-body">
            <p className="card-text text-left" id="card-text">
              <h5 className="text-center">{glassesName}</h5>
              <h5>
                Price: <span className="desc lead">{price} $</span>
              </h5>
              <h5>
                Desciption: <span className="desc lead">{desc}</span>
              </h5>
            </p>
          </div>
        </div>

        <div className="glasses bg-light w-50 mx-auto my-4 d-flex flex-wrap justify-content-center align-items-center">
          {this.renderGlasses()}
        </div>
      </div>
    );
  }
}

export default chooseGlasses;
