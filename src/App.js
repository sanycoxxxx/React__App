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
      ],
     search: '',
     filter: 'all'
    }
    this.maxId = 4;
    this.all = this.state.data.length
  }
 
  onProp = (id, prop) => {
   this.setState(({data}) => ({
     data: data.map(item => {
       if (item.id===id) {
         return {...item, [prop]: !item[prop]}
       }
       return item;
      }) 
   }))
  }

  

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

  onSearch = (item, search) => {
    if (search.length === 0){return item};
  
    return item.filter(item => {
      return item.name.indexOf(search) > -1})
  }

  onUpdateSearch = (search) => {
    this.setState({search});
  }

  filterShow = (items, filter) => {
    switch (filter) {
      case 'riseFilter':
        return items.filter(item => item.rise);
      case 'more1000':
        return items.filter(item=> item.salary > 1000);
      case 'all':
        return items
    }
  }


  // allFilter = () => {
  //   this.setState(() => {
  //     return {filter: 'all'}
  //   })
  // }
  
  // onRiseFilter = () => {
  // // e.target.className = 'btn btn-secondary';
  // this.setState(() => {
  //   return {filter: 'riseFilter'}
  // })
  // }
  
  // moreThen1000 = () => {
  //   // e.target.className = 'btn btn-secondary';
  //   this.setState(() => {
  //     return {filter: 'more1000'}
  //   })
  // }
onFilterClick = (filter) => {
this.setState({filter})
}

  render() {
  const amountAll = this.state.data.length;
  const amountRise = this.state.data.filter(item => item.rise).length;
  const{data, search, filter} = this.state;
  const visibleData = this.filterShow(this.onSearch(data, search), filter)


        return (
          <div className="App">
            <header className="App-header">
              <AppInfo
              amountAll={amountAll}
              amountRise={amountRise}/>
              <div>
                <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                <AppFilter 
                onFilterClick={this.onFilterClick}
                 filter={filter}/>
              </div>
              <div>
                 <EmployeesList 
                 data={visibleData}
                 onDelete={this.deleteItem}
                 onProp = {this.onProp}
                 />
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
