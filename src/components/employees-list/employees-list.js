import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, onProp}) => {

    const elements = data?.map(item => {
        const {id, ...itemProps} = item;
        return (
           
            <EmployeesListItem key = {id}
             {...itemProps}
             onProp={(event) => {onProp(id, event.currentTarget.getAttribute('data-prop'))}}
             onDelete={()=>{onDelete(id)}}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}   
        </ul>
    )
}
export default EmployeesList;