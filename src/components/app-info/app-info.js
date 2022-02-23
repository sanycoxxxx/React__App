
import './app-info.css'



const AppInfo = ({amountAll, amountRise}) => {

    return (
    <div className="app-info shadow-lg p-3 mb-5 rounded app-info">
        <h1>СПИСОК СОТРУДНИКОВ КОМПАНИИ</h1>
        <h2>Количество сотрудников: {amountAll}</h2>
        <h2>Премию получат: {amountRise}</h2>
    </div>)};


export default AppInfo;
