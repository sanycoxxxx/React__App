import './app-filter.css'
const AppFilter = () => {
return(
<div className="app-filter">
            <button type="button" className="btn btn-secondary">Все сотрудники</button>
            <button type="button" className="btn btn-outline-secondary">На повышение</button>
            <button type="button" className="btn btn-outline-secondary">В зоне риска</button>
            <button type="button" className="btn btn-outline-secondary">З/п больше 1000$</button>
        </div>
)}
export default AppFilter;