import React,{Component} from 'react'

class ForecastRow extends Component{
    render(){
        const date = this.props.data1;
        const currentTemp = this.props.data2;
        const description = this.props.data3;
        const image = this.props.data4;
        return (
            <tr>
                <td>{date}</td>
                <td>{currentTemp}</td>
                <td>{description}
                    <img src={image} alt="Weather"/>
                </td>
            </tr>
        );
    }
}

export default ForecastRow;