import { Component } from 'react/cjs/react.production.min';
import './search-panel.css';

class SearchPanel extends Component{
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }

    onUpdateSearch = (e) => {
        const search = e.target.value;
        this.setState({search});
        this.props.onUpdateSearch(search)
    }
   

    render () {
        return (
            <div className="search-panel">
                        <h3>Поиск сотрудников</h3>
                        <div className="input-group rounded">
                            <input value={this.state.search} onChange={this.onUpdateSearch} type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                            <span className="input-group-text border-0" id="search-addon">
                                <i className="fas fa-search"></i>
                            </span>
                        </div>
                    </div>)};
            
}

export default SearchPanel;
