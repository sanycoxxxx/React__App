import {Component} from 'react'
import './employees-list-item.css';

class EmployeesListItem extends Component{
    constructor (props){
        super(props);
        this.state = {
            increase: false,
            favourite: false
        }
    }

    favourite = () => {
    this.setState(({favourite}) => ({
        favourite: !favourite
    }))
}

    onIncr = () => {
        this.setState(({increase}) => ({
             increase: !increase
        }))
    }

    render () {

        const {name, salary} = this.props;
        const {increase, favourite} = this.state;
        let classNames = 'list-group-item d-flex justify-content-between';
        

        if(favourite) {
            classNames += ' like'
        }

        if(increase) {
            classNames += ' increase'
        }

    

    return (
        <li className={classNames}>
            <span onClick={this.favourite} className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button onClick={this.onIncr} type="button"
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
    }
}

export default EmployeesListItem;