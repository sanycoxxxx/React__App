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
        {name: "James" , salary: 800 , increase: false, favourite: false, id: 1},
        {name: "Sergey" , salary: 5000 , increase: true, favourite: true, id: 2},
        {name: "Roman" , salary: 3000 , increase: false, favourite: false, id: 3}
      ]
    }
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
              <AppInfo/>
              <div>
                <SearchPanel/>
                <AppFilter/>
              </div>
              <div>
                 <EmployeesList 
                 data={data}
                 onDelete={this.deleteItem}/>
              </div>
              <div >
                <EmployeesAddForm/>
              </div>
            </header>
            
      
          </div>
        );
  }
}

export default App;
