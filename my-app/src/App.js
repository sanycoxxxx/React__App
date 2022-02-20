import {Component} from "react"
import logo from './logo.svg';
import './App.css';
import AppInfo from "./components/app-info/app-info";
import SearchPanel from "./components/search-panel/search-panel";
import AppFilter from "./components/app-filters/app-filter";
import EmployeesList from "./components/employees-list/employees-list";
import EmployeesAddForm from "./components/employees-add-form/employees-add-form";
import { getAllByText } from "@testing-library/react";

class WhoAmI extends Component {
    constructor (props) {
      super(props);
      this.state = {
        years: 25 
      }
  }

  NextYears = () => {
  console.log('+++');
  this.setState(state => ({
    years: state.years + 1
  }))
  }

  render() {
      const {name, surname, link} = this.props;
      return (
          <div>
            <div>
              <button onClick={this.NextYears}>+++</button> 
            </div>
              Hello, my name is {name}, surname - {surname}, my sites - {link}, my age - {this.state.years}
          </div>
      )
  }
}



function App() {
  const data = [
{name: "James" , salary: 800 , increase: false, id: 1},
{name: "Sergey" , salary: 5000 , increase: true, id: 2},
{name: "Roman" , salary: 3000 , increase: false, id: 3}
  ];
  return (
    <div className="App">
      <header className="App-header">
        <AppInfo/>
        <div className="">
          <SearchPanel/>
          <AppFilter/>
        </div>
        <div className="">
           <EmployeesList data={data}/>
        </div>
        <div className="">
          <EmployeesAddForm/>
         <WhoAmI name='Alex' surname="Adamovych" link='Facebook'/>
         <WhoAmI name='Ax' surname="Adh" link='Faceb'/>
        </div>
      </header>
      

    </div>
  );
}

export default App;
