import React, { Component } from "react";
import backpack1a from "../../assets/images/backpacksimg/backp1a.jpg";
import backpack1b from "../../assets/images/backpacksimg/backp1b.jpg";
import backpack1c from "../../assets/images/backpacksimg/backp1c.jpg";
import backpack2a from "../../assets/images/backpacksimg/backp2a.jpg";
import backpack2b from "../../assets/images/backpacksimg/backp2b.jpg";
import backpack2c from "../../assets/images/backpacksimg/backp2c.jpg";
import backpack3a from "../../assets/images/backpacksimg/backp3a.jpg";
import backpack3b from "../../assets/images/backpacksimg/backp3b.jpg";
import backpack3c from "../../assets/images/backpacksimg/backp3c.jpg";
import backpack4a from "../../assets/images/backpacksimg/backp4a.jpg";
import backpack4b from "../../assets/images/backpacksimg/backp4b.jpg";
import backpack5a from "../../assets/images/backpacksimg/backp5a.jpg";

import sleepingbag1a from "../../assets/images/sleepingbagsimg/sleeping1a.jpg";
import sleepingbag1b from "../../assets/images/sleepingbagsimg/sleeping1b.jpg";
import sleepingbag1c from "../../assets/images/sleepingbagsimg/sleeping1c.jpg";
import sleepingbag2a from "../../assets/images/sleepingbagsimg/sleeping2a.jpg";
import sleepingbag2b from "../../assets/images/sleepingbagsimg/sleeping2b.jpg";
import sleepingbag2c from "../../assets/images/sleepingbagsimg/sleeping2c.jpg";
import sleepingbag3a from "../../assets/images/sleepingbagsimg/sleeping3a.jpg";
import sleepingbag3b from "../../assets/images/sleepingbagsimg/sleeping3b.jpg";
import sleepingbag3c from "../../assets/images/sleepingbagsimg/sleeping3c.jpg";
import sleepingbag4a from "../../assets/images/sleepingbagsimg/sleeping4a.jpg";
import sleepingbag5a from "../../assets/images/sleepingbagsimg/sleeping5a.jpg";
import sleepingbag6a from "../../assets/images/sleepingbagsimg/sleeping6a.jpg";

import tent1a from "../../assets/images/tentsimg/tent1a.jpg";
import tent1b from "../../assets/images/tentsimg/tent1b.jpg";
import tent1c from "../../assets/images/tentsimg/tent1c.jpg";
import tent2a from "../../assets/images/tentsimg/tent2a.jpg";
import tent2b from "../../assets/images/tentsimg/tent2b.jpg";
import tent2c from "../../assets/images/tentsimg/tent2c.jpg";
import tent3a from "../../assets/images/tentsimg/tent3a.jpg";
import tent3b from "../../assets/images/tentsimg/tent3b.jpg";
import tent3c from "../../assets/images/tentsimg/tent3c.jpg";
import tent4a from "../../assets/images/tentsimg/tent4a.jpg";
import tent5a from "../../assets/images/tentsimg/tent5a.jpg";
import tent5b from "../../assets/images/tentsimg/tent5b.jpg";
import tent6a from "../../assets/images/tentsimg/tent6a.jpg";

export const DataContext = React.createContext();

export class DataProvider extends Component {
  state = {
    products: [
      {
        _id: "0",
        count: 1,
        title: "Daylite Pack",
        src: backpack1a,
        colors: "green camo",
        price: 38,
        button: "Add to Cart",
        featured: true,
        description:
          "Take the Daylite Pack on a one-day hike or a plane trip as your carry-on. A padded harness and simple webbing hipbelt make it easy and comfortable to carry.",
      },
      {
        _id: "1",
        count: 1,
        title: "Daylite Pack",
        src: backpack1b,
        colors: "blue camo",
        price: 38,
        button: "Add to Cart",
        featured: false,
        description:
          "Take the Daylite Pack on a one-day hike or a plane trip as your carry-on. A padded harness and simple webbing hipbelt make it easy and comfortable to carry.",
      },
      {
        _id: "2",
        count: 1,
        title: "Daylite Pack",
        src: backpack1c,
        colors: "black",
        price: 38,
        button: "Add to Cart",
        featured: false,
        description:
          "Take the Daylite Pack on a one-day hike or a plane trip as your carry-on. A padded harness and simple webbing hipbelt make it easy and comfortable to carry.",
      },
      {
        _id: "3",
        count: 1,
        title: "Bluff Utility Pack",
        src: backpack2a,
        colors: "black",
        price: 49,
        button: "Add to Cart",
        featured: false,
        description:
          "Comfortably store and haul your gear en route with the Bluff Utility backpack. It includes designated pockets for your phone, pens and water bottle so you're sure to stay organized.",
      },
      {
        _id: "4",
        count: 1,
        title: "Bluff Utility Pack",
        src: backpack2b,
        colors: "navy",
        price: 49,
        button: "Add to Cart",
        featured: false,
        description:
          "Comfortably store and haul your gear en route with the Bluff Utility backpack. It includes designated pockets for your phone, pens and water bottle so you're sure to stay organized.",
      },
      {
        _id: "5",
        count: 1,
        title: "Bluff Utility Pack",
        src: backpack2c,
        colors: "olive",
        price: 49,
        button: "Add to Cart",
        featured: false,
        description:
          "Comfortably store and haul your gear en route with the Bluff Utility backpack. It includes designated pockets for your phone, pens and water bottle so you're sure to stay organized.",
      },
      {
        id: "6",
        count: 1,
        title: "Nine Trails Pack",
        src: backpack3a,
        colors: "olive",
        price: 129,
        button: "Add to Cart",
        featured: false,
        description:
          "Ideal for summer overnights or just a well-stocked day hike, the  pack is a comfortable, adjustable go-to for hauling the gear you need to enjoy some time outdoors.",
      },
      {
        _id: "7",
        count: 1,
        title: "Nine Trails Pack",
        src: backpack3b,
        colors: "grey",
        price: 129,
        button: "Add to Cart",
        featured: false,
        description:
          "Ideal for summer overnights or just a well-stocked day hike, the  pack is a comfortable, adjustable go-to for hauling the gear you need to enjoy some time outdoors.",
      },
      {
        _id: "8",
        count: 1,
        title: "Nine Trails Pack",
        src: backpack3c,
        colors: "grey/olive",
        price: 129,
        button: "Add to Cart",
        featured: false,
        description:
          "Ideal for summer overnights or just a well-stocked day hike, the  pack is a comfortable, adjustable go-to for hauling the gear you need to enjoy some time outdoors.",
      },
      {
        _id: "9",
        count: 1,
        title: "Nine Trails Pack - Camo",
        src: backpack4a,
        colors: "green",
        price: 139,
        button: "Add to Cart",
        featured: false,
        description:
          "Ideal for summer overnights or just a well-stocked day hike, the  pack is a comfortable, adjustable go-to for hauling the gear you need to enjoy some time outdoors. Blend into nature with the upgraded camo print.",
      },
      {
        _id: "10",
        count: 1,
        title: "Nine Trails Pack - Camo",
        src: backpack4b,
        colors: "grey",
        price: 139,
        button: "Add to Cart",
        featured: false,
        description:
          "Ideal for summer overnights or just a well-stocked day hike, the  pack is a comfortable, adjustable go-to for hauling the gear you need to enjoy some time outdoors. Blend into nature with the upgraded camo print.",
      },
      {
        _id: "11",
        count: 1,
        title: "Contender Pack",
        src: backpack5a,
        colors: "black",
        price: 89,
        button: "Add to Cart",
        featured: false,
        description:
          "Luxuriously Rugged, reliable and water-resistant, the Contender Pack helps you get from point A to point B, in style, with all your gear secure and dry.",
      },
      {
        _id: "12",
        count: 1,
        title: "Helio Down",
        src: sleepingbag1a,
        colors: "blue",
        temp: "40",
        fill: "down",
        button: "Add to Cart",
        price: 89,
        featured: true,
        description:
          "The Helio Down 40 sleeping bag is ultralight and packable—ideal for travel, fair-weather camping or as a liner inside another bag to boost warmth on cold nights.",
      },
      {
        _id: "13",
        count: 1,
        title: "Helio Down",
        src: sleepingbag1b,
        colors: "grey",
        temp: "40",
        fill: "down",
        button: "Add to Cart",
        price: 89,
        featured: false,
        description:
          "The Helio Down 40 sleeping bag is ultralight and packable—ideal for travel, fair-weather camping or as a liner inside another bag to boost warmth on cold nights.",
      },
      {
        _id: "14",
        count: 1,
        title: "Helio Down",
        src: sleepingbag1c,
        colors: "olive",
        temp: "40",
        fill: "down",
        button: "Add to Cart",
        price: 89,
        featured: false,
        description:
          "The Helio Down 40 sleeping bag is ultralight and packable—ideal for travel, fair-weather camping or as a liner inside another bag to boost warmth on cold nights.",
      },
      {
        _id: "15",
        count: 1,
        title: "Sea to Summit Traveller",
        src: sleepingbag2a,
        colors: "blue",
        temp: "50",
        fill: "down",
        button: "Add to Cart",
        price: 59,
        featured: false,
        description:
          "A respectable choice for weekend camping, round-the-world adventures or keeping warm on a plane, the Sea to Summit Traveller sleeping bag provides adaptable warmth in a tiny packed size.",
      },
      {
        _id: "16",
        count: 1,
        title: "Sea to Summit Traveller",
        src: sleepingbag2b,
        colors: "grey/green",
        temp: "50",
        fill: "down",
        button: "Add to Cart",
        price: 59,
        featured: false,
        description:
          "A respectable choice for weekend camping, round-the-world adventures or keeping warm on a plane, the Sea to Summit Traveller sleeping bag provides adaptable warmth in a tiny packed size.",
      },
      {
        _id: "17",
        count: 1,
        title: "Sea to Summit Traveller",
        src: sleepingbag2c,
        colors: "grey/blue",
        temp: "50",
        fill: "down",
        button: "Add to Cart",
        price: 59,
        featured: false,
        description:
          "A respectable choice for weekend camping, round-the-world adventures or keeping warm on a plane, the Sea to Summit Traveller sleeping bag provides adaptable warmth in a tiny packed size.",
      },
      {
        _id: "18",
        count: 1,
        title: "Eco Trail Bed ",
        src: sleepingbag3a,
        colors: "blue",
        temp: "20",
        fill: "recycled polyester",
        button: "Add to Cart",
        price: 129,
        featured: false,
        description:
          "Made from 100% recycled fabrics, The Eco Trail Bed sleeping bag is an affordable, maximum-comfort essential for all your big adventures.",
      },
      {
        _id: "19",
        count: 1,
        title: "Eco Trail Bed ",
        src: sleepingbag3b,
        colors: "green",
        temp: "20",
        fill: "recycled polyester",
        button: "Add to Cart",
        price: 129,
        featured: false,
        description:
          "Made from 100% recycled fabrics, The Eco Trail Bed sleeping bag is an affordable, maximum-comfort essential for all your big adventures.",
      },
      {
        _id: "20",
        count: 1,
        title: "Eco Trail Bed ",
        src: sleepingbag3c,
        colors: "grey",
        temp: "20",
        fill: "recycled polyester",
        button: "Add to Cart",
        price: 129,
        featured: false,
        description:
          "Made from 100% recycled fabrics, The Eco Trail Bed sleeping bag is an affordable, maximum-comfort essential for all your big adventures.",
      },
      {
        _id: "21",
        count: 1,
        title: "Wind River",
        src: sleepingbag4a,
        colors: "blue",
        temp: "-15",
        fill: "down",
        button: "Add to Cart",
        price: 399,
        featured: false,
        description:
          "The mummy-style, PFC-free Wind River sleeping bag is what you want to have when the temperatures seriously drop on your next overnight camping trip.",
      },
      {
        _id: "22",
        count: 1,
        title: "Phantom",
        src: sleepingbag5a,
        colors: "orange",
        temp: "0",
        fill: "down",
        button: "Add to Cart",
        price: 359,
        featured: false,
        description:
          "A compact down bag for climbers, skiers and backpackers who value warmth and a light pack, the Phantom sleeping bag is ideal for high-alpine traverses and backcountry hut trips.",
      },
      {
        _id: "23",
        count: 1,
        title: "NanoWave",
        src: sleepingbag6a,
        colors: "khaki",
        temp: "49",
        fill: "spirafil",
        button: "Add to Cart",
        price: 49,
        featured: false,
        description:
          "When space and weight are at a premium on biking trips, kayaking adventures and backpacking treks, the NanoWave sleeping bag easily stuffs into a pannier, stern compartment or pack.",
      },
      {
        _id: "24",
        count: 1,
        title: "Ground Breaker",
        src: tent1a,
        colors: "green",
        capacity: 2,
        button: "Add to Cart",
        price: 199,
        featured: true,
        description:
          "Whether it's your 1st time or your 50th, the 2-person, 3-season Ground Breaker Tent is a no-frills way to get into camping. It's easy to pitch, durable and has ample ventilation.",
      },
      {
        _id: "25",
        count: 1,
        title: "Ground Breaker",
        src: tent1b,
        colors: "blue",
        capacity: 2,
        button: "Add to Cart",
        price: 199,
        featured: false,
        description:
          "Whether it's your 1st time or your 50th, the 2-person, 3-season Ground Breaker Tent is a no-frills way to get into camping. It's easy to pitch, durable and has ample ventilation.",
      },
      {
        _id: "26",
        count: 1,
        title: "Ground Breaker",
        src: tent1c,
        colors: "grey",
        capacity: 2,
        button: "Add to Cart",
        price: 199,
        featured: false,
        description:
          "Whether it's your 1st time or your 50th, the 2-person, 3-season Ground Breaker Tent is a no-frills way to get into camping. It's easy to pitch, durable and has ample ventilation.",
      },
      {
        _id: "27",
        count: 1,
        title: "Big Agnes",
        src: tent2a,
        colors: "blue",
        capacity: 3,
        button: "Add to Cart",
        price: 349,
        featured: false,
        description:
          "With its lightweight design, single-pole system and 2 vestibules to enter and exit efficiently, the Big Agnes tent elevates your backcountry camping experience.",
      },
      {
        _id: "28",
        count: 1,
        title: "Big Agnes",
        src: tent2b,
        colors: "green",
        capacity: 3,
        button: "Add to Cart",
        price: 349,
        featured: false,
        description:
          "With its lightweight design, single-pole system and 2 vestibules to enter and exit efficiently, the Big Agnes tent elevates your backcountry camping experience.",
      },
      {
        _id: "29",
        count: 1,
        title: "Big Agnes",
        src: tent2c,
        colors: "grey",
        capacity: 3,
        button: "Add to Cart",
        price: 349,
        featured: false,
        description:
          "With its lightweight design, single-pole system and 2 vestibules to enter and exit efficiently, the Big Agnes tent elevates your backcountry camping experience.",
      },
      {
        _id: "30",
        count: 1,
        title: "Orion III",
        src: tent3a,
        colors: "orange",
        capacity: 3,
        button: "Add to Cart",
        price: 450,
        featured: false,
        description:
          "Letting you switch between modes—Party, Breeze-Way and Storm—to adapt to changing conditions, the Orion III tent is a proven all-weather, all-season 3-person shelter.",
      },
      {
        _id: "31",
        count: 1,
        title: "Orion III",
        src: tent3b,
        colors: "grey",
        capacity: 3,
        button: "Add to Cart",
        price: 450,
        featured: false,
        description:
          "Letting you switch between modes—Party, Breeze-Way and Storm—to adapt to changing conditions, the Orion III tent is a proven all-weather, all-season 3-person shelter.",
      },
      {
        _id: "32",
        count: 1,
        title: "Orion III",
        src: tent3c,
        colors: "olive",
        capacity: 3,
        button: "Add to Cart",
        price: 450,
        featured: false,
        description:
          "Letting you switch between modes—Party, Breeze-Way and Storm—to adapt to changing conditions, the Orion III tent is a proven all-weather, all-season 3-person shelter.",
      },
      {
        _id: "33",
        count: 1,
        title: "Grand Kingdom",
        src: tent4a,
        colors: "green",
        capacity: 6,
        button: "Add to Cart",
        price: 739,
        featured: false,
        description:
          "With a large canopy and extra vestibule, the freestanding, weatherproof Marmot Orbit 6-person tent gives you all the extra space you need for changing or storing gear through the storm.",
      },
      {
        _id: "34",
        count: 1,
        title: "Dagger",
        src: tent5a,
        colors: "green",
        capacity: 2,
        button: "Add to Cart",
        price: 375,
        featured: false,
        description:
          "Light enough for backpacking yet roomy enough inside to comfortably wait out a rainstorm, the 3-season, 2-person the Dagger tent is a quintessential one-tent wonder.",
      },
      {
        _id: "35",
        count: 1,
        title: "Dagger",
        src: tent5b,
        colors: "blue",
        capacity: 2,
        button: "Add to Cart",
        price: 375,
        featured: false,
        description:
          "Light enough for backpacking yet roomy enough inside to comfortably wait out a rainstorm, the 3-season, 2-person the Dagger tent is a quintessential one-tent wonder.",
      },
      {
        _id: "36",
        count: 1,
        title: "Hubba Tour",
        src: tent6a,
        colors: "orange",
        capacity: 1,
        button: "Add to Cart",
        price: 329,
        featured: false,
        description:
          "Why subject yourself to a cramped shelter on your epic solo adventures? The roomy Hubba Tour tent lets you luxuriate in livable comfort with plenty of protected space for your gear.",
      },
    ],
    cart: [],
    total: 0,
  };

  addCart = (id) => {
    const { products, cart } = this.state;
    const check = cart.every((item) => {
      return item._id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product._id === id;
      });
      this.setState({ cart: [...cart, ...data] });
    } else {
      alert("The product has been added to cart.");
    }
  };

  reduction = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
  };

  increase = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count += 1;
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
  };

  removeProduct = (id) => {
    if (window.confirm("Do you want to delete this product?")) {
      const { cart } = this.state;
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });
      this.setState({ cart: cart });
      this.getTotal();
    }
  };

  getTotal = () => {
    const { cart } = this.state;
    const res = cart.reduce((prev, item) => {
      return prev + item.price * item.count;
    }, 0);
    this.setState({ total: res });
  };

  componentDidUpdate() {
    localStorage.setItem("dataCart", JSON.stringify(this.state.cart));
    localStorage.setItem("dataTotal", JSON.stringify(this.state.total));
  }

  componentDidMount() {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart !== null) {
      this.setState({ cart: dataCart });
    }
    const dataTotal = JSON.parse(localStorage.getItem("dataTotal"));
    if (dataTotal !== null) {
      this.setState({ total: dataTotal });
    }
  }

  render() {
    const { products, cart, total } = this.state;
    const { addCart, reduction, increase, removeProduct, getTotal } = this;
    return (
      <DataContext.Provider
        value={{
          products,
          addCart,
          cart,
          reduction,
          increase,
          removeProduct,
          total,
          getTotal,
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
