import './app-filter.css'




const  AppFilter = (props) => {
   
const buttonsData = [
    {name: 'all', label: 'Все сотрудники' },
    {name: 'riseFilter', label: 'На повышение' },
    {name: 'more1000', label: 'З/п больше 1000$' },
];


const buttons = buttonsData.map(({name, label}) => {
    const active = props.filter === name;
    const clazz = active ? "btn btn-secondary" : "btn btn-outline-secondary";
    return (
         <button  
            onClick={() => {props.onFilterClick(name)}}
            key={name}
            type="button" 
            className={clazz}>{label}
         </button>)
})

    return(
        <div className="app-filter">
                    {buttons}
                </div>
        )}

export default AppFilter;