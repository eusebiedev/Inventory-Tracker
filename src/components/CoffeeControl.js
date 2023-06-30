import React from 'react';
import CoffeeDetail from './CoffeeDetail';
import CoffeeList from './CoffeeList';

class CoffeeControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedCoffee: null,
      editing: false,
      mainCoffeeList: [
        {
          name: "Burlaps Original",
          origin: "Italy",
          roast: "Dark",
          price: 5,
          available: 130,
        },
        {
          name: "Burlaps Sunshine" ,
          origin: "California",
          roast: "Light",
          price: 10,
          available: 130,
        },
        {
          name: "Burlaps Afternoon",
          origin: "Spain",
          roast: "Medium",
          price: 15,
          available: 130,
        },
        {
          name: "Burlaps Evening" ,
          origin: "Prague",
          roast: "Dark",
          price: 20,
          available: 130,
        },
        {
          name: "Burlaps Midnight",
          origin: "Berlin",
          roast: "Techno",
          price: 25,
          available: 130,
        },
      ]
    };
  }
}

export default CoffeeControl;