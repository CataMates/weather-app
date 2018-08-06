import React, { Component } from 'react';
import ForecastTable from './ForecastTable';


class SearchBar extends Component{

    constructor(props){
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleClickSearchButton = this.handleClickSearchButton.bind(this);
        this.handleClickMoreButton = this.handleClickMoreButton.bind(this);
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    handleClickSearchButton(){
        this.props.onClickSearchButton();
    }
    handleClickMoreButton(){
        this.props.onMoreButton();
    }
      
    render(){
        const filterText = this.props.filterText;
        return(
            <div className="container form-group col-lg-5">
                <form>
                    <input 
                        type="text" 
                        placeholder="City..."
                        className="form-control"
                        value={filterText}
                        onChange={this.handleFilterTextChange}
                    />
                </form>
                <br/>
                <button
                    className="btn btn-info btn-lg"
                    onClick={this.handleClickSearchButton}
                >
                    Search
                </button>
                {this.props.showForecast ? 
                <ForecastTable data={filterText} refresh={this.props.refresh} more={this.handleClickMoreButton}/> : 
                null}
                <br/>
            </div>
        );
    }
}

export default SearchBar;