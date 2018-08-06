import React, { Component } from 'react';
import SearchBar from './SearchBar.js';

class GeneralForecastTable extends Component{

    constructor(props){
        super(props);
        this.state={
            filterText:'',
            showForecastTable: false,
            refreshForecast: false,
            numberOfRows: false
        };

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleClickSearchButton = this.handleClickSearchButton.bind(this);

    }

    handleFilterTextChange(filterText) {
        this.setState({
          filterText: filterText,
          showForecastTable: false
        });
      }

    handleClickSearchButton(){
        this.setState({
            showForecastTable: true
        });
        // this.refreshForecast();
    }
    handleClickMoreButton(){
        this.setState({
            numberOfRows: true
        })
    }
    refreshForecast(){
        this.setState({
            refreshForecast: !this.state.refreshForecast
        })
    }

    render(){
        return(
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Weather App </h1>
                        <p className="lead">Easiest way to check the weather around the planet</p>
                    </div>
                </div>
                <div>
                    <SearchBar
                        filterText={this.state.filterText}
                        showForecast={this.state.showForecastTable}
                        onFilterTextChange={this.handleFilterTextChange}
                        onClickSearchButton={this.handleClickSearchButton}
                        onMoreButton={this.handleClickMoreButton}
                        refresh={this.state.refreshForecast}
                    />
                </div>
            </div>
            );
    }
}
export default GeneralForecastTable;