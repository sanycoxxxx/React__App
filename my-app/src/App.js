import {Component} from "react"
import logo from './logo.svg';
import './App.css';
import AppInfo from "./components/app-info/app-info";
import SearchPanel from "./components/search-panel/search-panel";
import AppFilter from "./components/app-filters/app-filter";
import EmployeesList from "./components/employees-list/employees-list";
import EmployeesAddForm from "./components/employees-add-form/employees-add-form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppInfo/>
        <div className="">
          <SearchPanel/>
          <AppFilter/>
        </div>
        <div className="">
           <EmployeesList/>
        </div>
        <div className="">
          <EmployeesAddForm/>
        </div>
      </header>
    </div>
  );
}

export default App;
