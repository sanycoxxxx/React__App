import {Component} from "react"
import logo from './logo.svg';
import './App.css';
import AppInfo from "./components/app-info/app-info";
import SearchPanel from "./components/search-panel/search-panel";
import AppFilter from "./components/app-filters/app-filter";
import EmployeesList from "./components/employees-list/employees-list";
import EmployeesAddForm from "./components/employees-add-form/employees-add-form";

function App() {
  const data = [
{name: "J" , salary: 800 , increase: false, id: 1},
{name: "s" , salary: 5000 , increase: true, id: 2},
{name: "r" , salary: 3000 , increase: false, id: 3}
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
        </div>
      </header>
    </div>
  );
}

export default App;
