import {Component} from "react"
import './App.css';
import AppInfo from "./components/app-info/app-info";
import SearchPanel from "./components/search-panel/search-panel";
import AppFilter from "./components/app-filters/app-filter";
import EmployeesList from "./components/employees-list/employees-list";
import EmployeesAddForm from "./components/employees-add-form/employees-add-form";


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
    this.setState(({data}) => {
      const  index = data.findIndex(elem => elem.id === id );
      const old = data[index];
      const newObj = {...old, rise: !old.rise};
      const newArr = [ ...data.slice(0, index), newObj, ...data.slice(index + 1)];
      return {data : newArr}
    }) 
  }

  onIncrease = (id) => 
  this.setState(({data}) => {
    const  index = data.findIndex(elem => elem.id === id );
    const old = data[index];
    const newObj = {...old, increase: !old.increase};
    const newArr = [ ...data.slice(0, index), newObj, ...data.slice(index + 1)];
    return {data : newArr}
  }) 

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.maxId++
    }
    this.setState(() => {
      const newArr = [...this.state.data, newItem];
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
  const amountAll = this.state.data.length;
  const amountRise = this.state.data.filter(item => item.rise).length;
  const{data} = this.state;

        return (
          <div className="App">
            <header className="App-header">
              <AppInfo
              amountAll={amountAll}
              amountRise={amountRise}/>
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
