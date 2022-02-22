import {Component} from "react"
import logo from './logo.svg';
import './App.css';
import AppInfo from "./components/app-info/app-info";
import SearchPanel from "./components/search-panel/search-panel";
import AppFilter from "./components/app-filters/app-filter";
import EmployeesList from "./components/employees-list/employees-list";
import EmployeesAddForm from "./components/employees-add-form/employees-add-form";
import { getAllByText } from "@testing-library/react";


class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: "James" , salary: 800 , increase: false, rise: true, id: 1},
        {name: "Sergey" , salary: 5000 , increase: true, rise: false, id: 2},
        {name: "Roman" , salary: 3000 , increase: false, rise: false, id: 3}
      ]
    }
    this.maxId = 4;
    this.all = this.state.data.length
  }
 
onRise = (id) => {
  console.log(`rise in ${id}`)
}

onIncrease = (id) => {
  console.log(`increase in ${id}`)
}

addItem = (name, salary) => {
  const newItem = {
    name,
    salary,
    increase: false,
    rise: false,
    id: this.maxId++
  }
  this.setState(({data}) => {
    const newArr = [...data, newItem];
    return {
    data: newArr
    }
  })
} 

  deleteItem = (id) => {
   this.setState(({data}) => {
    return {data: data.filter(item => item.id !== id)}
   })
  }


  render() {
  const{data} = this.state;

        return (
          <div className="App">
            <header className="App-header">
              <AppInfo
              amountItem={this.all}/>
              <div>
                <SearchPanel/>
                <AppFilter/>
              </div>
              <div>
                 <EmployeesList 
                 data={data}
                 onDelete={this.deleteItem}
                 onRise = {this.onRise}
                 onIncrease = {this.onIncrease}/>
              </div>
              <div >
                <EmployeesAddForm
                onAdd={this.addItem}/>

              </div>
            </header>
            
      
          </div>
        );
  }
}

export default App;
