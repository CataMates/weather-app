import React, { Component } from 'react';
import ForecastRow from './ForecastRow';


class ForecastTable extends Component{ 

    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
            forecast: '',
            mustUpdate: false
        }
    }

    componentDidMount(){
        const city = this.props.data;
        if(city !== ''){
            let apiRequest = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric&appid=b0bc4f9ea70508cb6003ae1224d8c82c" ;
            fetch(apiRequest, {
            })
            .then((resp) => {
                return resp.json()
            }) 
            .then((data) => {
                this.setState({
                    isLoaded: true,
                    forecast: data
                });
            })
            .catch((error) => {
                console.log(error, "catch the hoop")
            })    
        }
    }

    componentWillReceiveProps(props){
        const ref = this.props;
        if(this.props.refresh !== ref){
            const city = this.props.data;
            if(city !== ''){
                let apiRequest = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric&appid=b0bc4f9ea70508cb6003ae1224d8c82c" ;
                fetch(apiRequest, {
                })
                .then((resp) => {
                    return resp.json()
                }) 
                .then((data) => {
                    this.setState({
                        isLoaded: true,
                        forecast: data
                    });
                })
                .catch((error) => {
                    console.log(error, "catch the hoop")
                })    
            }
        }
    }

    render(){
        const rows = [];
        const isLoaded = this.state.isLoaded;
        
        return(
            <div>
                <br/>
                    {
                        isLoaded ? 
                        this.state.forecast.city ?
                        <div className="alert alert-success">
                        {this.state.forecast.city.name + ", "}
                        {this.state.forecast.city.country}
                        </div>
                        : null
                        : null
                    }
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Data - Time</th>
                            <th>Temperature</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            isLoaded ?
                            this.state.forecast.list ?
                            this.state.forecast.list.map(function(info,index){
                                // if(index < 5){
                                    let imageURL = 'http://openweathermap.org/img/w/'+ info.weather[0].icon + ".png";
                                    rows.push(<ForecastRow key={index} data1={info.dt_txt} data2={info.main.temp} data3={info.weather[0].main} data4={imageURL}/>)
                                // }

                            })
                            : <div className="alert alert-danger" role="alert" >
                            <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                            <span className="sr-only">Error:</span>
                            No city was found...
                            </div>
                            : <div className="alert alert-info" >Loading...</div>
                        }
                        {rows ? rows : null}
                    </tbody>
                </table>
                <button className="btn btn-info btn-lg col-lg-5" onClick={this.props.more}>More</button>
            </div>
        );
    }
}
export default ForecastTable;