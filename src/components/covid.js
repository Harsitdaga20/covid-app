import React from "react";
import { VictoryPie } from "victory";
import "./style.css";

const Covid = ({country,recovered,confirmed,deaths}) => {
    
    const mydata = [
        {x: 'Recovered', y:recovered},
        {x: 'Deaths', y: deaths}
      ]
      console.log(mydata)
    return ( 
        <>


       
            <ul>
                <div className="container">

                
                <li className="card">
                    <div className="card_main">
                        <div className="class_inner">
                            <p className="card_name"> <span>Our</span> Country</p>
                            <p className="card_total_card_small"> {country}</p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card_main">
                        <div className="class_inner">
                            <p className="card_name"> <span>Total</span> Recovered</p>
                            <p className="card_total_card_small"> {recovered}</p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card_main">
                        <div className="class_inner">
                            <p className="card_name"> <span>Total</span> Confirmed</p>
                            <p className="card_total_card_small">{confirmed}</p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card_main">
                        <div className="class_inner">
                            <p className="card_name"> <span>Total</span> Death</p>
                            <p className="card_total_card_small">{deaths}</p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card_main">
                        <div className="class_inner">
                            <p className="card_name"> <span>Total</span> Active</p>
                            <p className="card_total_card_small"> {confirmed-recovered}</p>
                        </div>
                    </div>
                </li>
                        </div>       
               
                        </ul>
                    <div className="card_main">
                            <VictoryPie
                            data={mydata}
                            colorscale={["green","yellow"]}
                            radius={50}
                        />
                    </div>
        
        </>
     );
}
 
export default Covid;