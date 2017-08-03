import React, {Component} from 'react';
import {Bar, Line ,Pie} from 'react-chartjs-2';
import axios from 'axios';

const URL ="http://api.population.io:80/1.0/";
const URL_POPULATION= "http://api.population.io:80/1.0/population/2016/";

class Chart extends Component {
    constructor(props){
        super(props);
        this.state={
            chartData:{
                labels: [],
                datasets: [
                    {
                        label: 'Population',
                        data:[

                        ],
                            backgroundColor:[

                                'rgba(255,99,132,0.6',
                                'rgba(255,99,132,0.6',
                                'rgba(255,99,132,0.6',
                                'rgba(255,99,132,0.6',
                                'rgba(255,99,132,0.6',
                                'rgba(255,99,132,0.6',
                                'rgba(255,99,132,0.6'
                            ]
                    }
                ]
            }
        }
        this.getPopulation();
    }

    getPopulation=()=>{
let po = [];
let popu= [];
axios.get(`${URL}/countries`)
    .then((response) => {
        response.data.countries.slice(0, 10).forEach((country) => {
                   po.push(country);
         
            axios.get(`${URL_POPULATION}/${country}`)
                .then((result) => {
                 popu.push(result.data[0].total)
                })


    })
    console.log(popu); 
this.setState({
    chartData: {
        labels: po,
    }
    })
})

}
   
    render()
    {
        return(
            <div>
             <Bar 
             data={this.state.chartData}
             width = {100}
             height={50}
             options ={
                 {
                     maintainAspectRation:false
                 }
             }
             />
            </div>
        );
    }
}

export default Chart;