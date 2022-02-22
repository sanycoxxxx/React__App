import {Component} from 'react';
import './app-info.css'
class  AppInfo extends Component {
constructor(props) {
    super(props);
}


render() {
    return (
    <div className="app-info shadow-lg p-3 mb-5 rounded app-info">
        <h1>СПИСОК СОТРУДНИКОВ КОМПАНИИ</h1>
        <h2>Количество сотрудников: {this.props.amountItem}</h2>
        <h2>Премию получат:</h2>
    </div>)};

}


export default AppInfo;
