import React from 'react';
import CoffeeDetail from './CoffeeDetail';
import CoffeeList from './CoffeeList';
import EditCoffeeForm from './EditCoffeeForm';
import NewCoffeeForm from './NewCoffeeForm';
import { v4 } from 'uuid';

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
          id: v4()
        },
        {
          name: "Burlaps Sunshine" ,
          origin: "California",
          roast: "Light",
          price: 10,
          available: 130,
          id: v4()
        },
        {
          name: "Burlaps Afternoon",
          origin: "Spain",
          roast: "Medium",
          price: 15,
          available: 130,
          id: v4()
        },
        {
          name: "Burlaps Evening" ,
          origin: "Prague",
          roast: "Dark",
          price: 20,
          available: 130,
          id: v4()
        },
        {
          name: "Burlaps Midnight",
          origin: "Berlin",
          roast: "Techno",
          price: 25,
          available: 130,
          id: v4()
        },
      ]

    };
  }

  handleClick = () => {
    if (this.state.selectedCoffee != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCoffee: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewCoffeeToList = (newCoffee) => {
    const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffee);
    this.setState({mainCoffeeList: newMainCoffeeList, 
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedCoffee = (id) => {
    const selectedCoffee = 
    this.state.mainCoffeeList.filter(coffee => coffee.id === id)[0];
    this.setState({selectedCoffee: selectedCoffee
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingCoffeeInList = (coffeeToEdit) => {
    const editedMainCoffeeList = this.state.mainCoffeeList
      .filter((coffee) => coffee.id !== this.state.selectedCoffee.id)
      .concat(coffeeToEdit);
    this.setState({
        mainCoffeeList: editedMainCoffeeList,
        editing: false,
        selectedCoffee: null
    });
  }

  handleDeletingCoffee = (id) => {
    const newMainCoffeeList = this.state.mainCoffeeList.filter(coffee => coffee.id !== id);
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      selectedCoffee: null
    });
  }

  handleSellingCoffee = (_selectedCoffee) => {
    let selectCoffee = this.state.selectedCoffee;
    if (selectCoffee.available > 0){
      selectCoffee.available -= 1;
    } else {
      selectCoffee.available = 0;
    }
    const newMainCoffeeList = this.state.mainCoffeeList;
    newMainCoffeeList[this.state.mainCoffeeList.indexOf(selectCoffee)] = selectCoffee;
    this.setState({
    mainCoffeeList: newMainCoffeeList
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 

    if (this.state.editing ) {      
      currentlyVisibleState = <EditCoffeeForm
      coffee = {this.state.selectedCoffee}
      onEditCoffee = {this.handleEditingCoffeeInList}/>
      buttonText = "Return to Coffee List";
    } else if (this.state.selectedCoffee != null) {
      currentlyVisibleState = <CoffeeDetail 
      coffee = {this.state.selectedCoffee} 
      onClickingDelete = {this.handleDeletingCoffee}
      onClickingEdit = {this.handleEditClick}
      onCoffeeSale = {this.handleSellingCoffee} />
      buttonText = "Return to Coffee List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewCoffeeForm 
      onNewCoffeeCreation={this.handleAddingNewCoffeeToList}/>;
      buttonText = "Return to Coffee List"; 
    } else {
      currentlyVisibleState = <CoffeeList 
      coffeeList={this.state.mainCoffeeList} 
      onCoffeeSelection={this.handleChangingSelectedCoffee} />;
      buttonText = "Add Coffee"; 
    }
    
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    );
  }
}

export default CoffeeControl;