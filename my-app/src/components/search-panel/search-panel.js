import './search-panel.css';

const SearchPanel = () => {
return (
<div className="search-panel">
            <h3>Поиск сотрудников</h3>
            <div className="input-group rounded">
                <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <span className="input-group-text border-0" id="search-addon">
                     <i className="fas fa-search"></i>
                </span>
            </div>
        </div>)};

export default SearchPanel;
