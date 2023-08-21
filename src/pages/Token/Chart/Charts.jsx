import React from "react";
import Chart from "react-apexcharts";

 const Charts = () => {
    const options = {
        series: [10,25,2,8,12,10,15,18],
        labels: ['Presale (-2% private sale)', 'Project allocation', 'Strategic Support', 'Team/Advisor Tokens', 'Partnership / Ecosystem / Marketing', '$buildl Staking Rewards', 'Liquidity Pool Rewards', 'Reserves'],
         colors: ["#18EEC2", "#FF5733", "#26DCEE","#D026EE","#A226EE" ,"#4A26EE" ,"#2672EE" ,"#26EE6C"],
         plotOptions: {
              pie: {
              expandOnClick: true,
                  donut: {
                    size: "50px",
                //      labels: {
                //         show: 'true',
                //           total: {
                //              show:true,
                //             showAlways: true,
                //              fontSize: "24px",
                //               color: "#2787AB"
                //          },
                //    }

                responsive: [
                    {
                      breakpoint: 1000,
                      options: {
                        plotOptions: {
                          donut: {
                            horizontal: false,
                          }
                        },
                        legend: {
                          position: "bottom"
                        }
                      }
                    }
                  ]
                }
             }
         }
    };

    const series = [10,25,2,8, 12,10,15,18];
    return(
        <div className="chart_row" style={{fontSize: "30px"}}>
            <div className="apchart_col1">
            <Chart 
        options={options}
        series={series}
        type="donut"
        width={675}
        height={400}
        />
            </div>
            <div className="apchart_col2">
                <ul>
                    <li className="presale">Presale 10% (-2% Private sale)</li>
                    <li className="project_allocation">Project Allocation 25%</li>
                    <li className="strategic">Strategic Support 2%</li>
                    <li className="team_ads">Team and Advisors 8%</li>
                    <li className="partnership">Partnership/Ecosystem/Marketing 12%</li>
                    <li className="staking_reward">Staking Reward 10%</li>
                    <li className="liquidity">Liquidity Pool Reward 15%</li>
                    <li className="reserves">Researves 18%</li>
                </ul>
            </div>
     
        </div>
    );
};

export default Charts