import React from "react";
import ChartApex from "react-apexcharts";
import DemoLogo from "../asset/Orive Logo 2.png"
import {useState} from 'react'
import { Chart } from 'primereact/chart';

import AccountLogo from "../asset/40px/Account.png";
import EventsLogo from "../asset/40px/Events.png";
import HolidayLogo from "../asset/40px/Holidays.png";
import PayrollLogo from "../asset/40px/Payroll.png";
import ReportLogo from "../asset/40px/Reports.png";
import UserLogo from "../asset/40px/users.png";

import { useNavigate } from "react-router-dom";

const Landingfile = () => {

    const navigation = useNavigate()
    const chartData = {
        series: [
          {
            name: "Net Profit",
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
          },
          {
            name: "Revenue",
            data: [46, 25, 91, 58, 77, 45, 31, 54, 64],
          },
          {
            name: "Free Cash Flow",
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
          },
        ],
        chart: {
          type: "bar",
          height: 350,
          toolbar: {
            show: false
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
       
        dataLabels: {
          enabled: false,
        },
       
          colors: ['#F76C24', '#501A51', '#FCC4A7'],
        
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: [
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
          ],
        },
        yaxis: {
          title: {
            text: "$ (thousands)",
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands";
            },
          },
        },
      };
    
      const revenueData = {
        series: [68],
        options: {
          chart: {
            height: 350,
            type: "radialBar",
          },
          plotOptions: {
            radialBar: {
              hollow: {
                size: "70%",
              },
            },
          },
          labels: ["Revenue"],
          toolbar: {
            show: false
          },
          colors: ['#501A51'],
        },
        

      };

      var balanceData =   {
        series: [{
          data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
        }],
        chart: {
        type: 'area',
        height: 100,
        sparkline: {
          enabled: true
        },
      },
      stroke: {
        curve: 'straight'
      },
      fill: {
        opacity: 0.3
      },
      colors: ["#7f4f81"],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: "vertical",
          shadeIntensity: 0.5,
          gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 0,
          stops: [0, 95,100],
          colorStops: []
        }
      }
     
      };

    var options = {
      series: [{
      name: 'ERP',
      data: [44, 55, 41, 37, 22, 43, 21]
    }, {
      name: 'CRM',
      data: [53, 32, 33, 52, 13, 43, 32]
    }, {
      name: 'HRMS',
      data: [12, 17, 11, 9, 15, 11, 20]
    }, {
      name: 'Application',
      data: [9, 7, 5, 8, 6, 9, 4]
    }, {
      name: 'Website',
      data: [25, 12, 19, 32, 25, 24, 10]
    }],
      chart: {
      type: 'bar',
      height: 380,
      stacked: true,
      toolbar: {
        show: false
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          total: {
            enabled: true,
            offsetX: 0,
            style: {
              fontSize: '13px',
              fontWeight: 900
            }
          }
        }
      },
    },
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    
    xaxis: {
      categories: [2020, 2021, 2023, 2024, 2025, 2026, 2027],
      labels: {
        formatter: function (val) {
          return val + "K"
        }
      }
    },
    colors: ["#501A51","#F76C24","#646978","#916894","#FAA77C"],
    yaxis: {
      title: {
        text: undefined
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "K"
        }
      }
    },
    fill: {
      opacity: 1
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      offsetX: 40
    }
    };

    const [chartDonutData] = useState({
      labels: ['Profit', 'Loss'],
      datasets: [
          {
              data: [300, 100],
              backgroundColor: [
                "#F76C24","#501A51"
              ]
          }]
  });

  const [lightOptions] = useState({
    plugins: {
        legend: {
            labels: {
                color: '#495057'
            }
        }
    }
});
  return (
    <>
    <div id="header-part" className="section-body top_dark">
    <div className="container-fluid" id="container-fluid">
      <div id="page-header" className="page-header">
        <div className="left">
        <img src={DemoLogo} height={"45px"}/>
          <h1 className="page-title" style={{fontWeight:"700", fontSize:"22px",color:"white"}}>ORIVE Dashboard</h1>
          <div className="input-group xs-hide">
           
          </div>
        </div>
        <div className="right">
         <button id="orive-demo-login-btn" onClick={() => navigation("/login")}>LogIn</button>
        </div>
      </div>
    </div>
  </div>
  <div id="main_content">
        <div className="page">
          <div className="section-body py-3">
            <div className="container-fluid" style={{ padding: "0" }}>
              <div className="row clearfix">
                <div className="col-lg-12">
                  <div className="mb-4">
                    <h4>Welcome Praveen Kumar!</h4>
                  </div>
                </div>
              </div>
              <div className="row clearfix">
                <div className="col-6 col-md-4 col-xl-2">
                  <div id="card" className="card">
                    <div className="card-body ribbon">
                      <div className="ribbon-box orange">5</div>
                      <a
                        href="hr-users.html"
                        className="my_sort_cut text-muted"
                      >
                        <img src={UserLogo} />
                        <span>Users</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-xl-2">
                  <div id="card" className="card">
                    <div className="card-body">
                      <a
                        href="hr-holidays.html"
                        className="my_sort_cut text-muted"
                      >
                        <img src={HolidayLogo} />
                        <span>Holidays</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-xl-2">
                  <div id="card" className="card">
                    <div className="card-body ribbon">
                      <div className="ribbon-box voilet">8</div>
                      <a
                        href="hr-events.html"
                        className="my_sort_cut text-muted"
                      >
                        <img src={EventsLogo} />
                        <span>Events</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-xl-2">
                  <div id="card" className="card">
                    <div className="card-body">
                      <a
                        href="hr-payroll.html"
                        className="my_sort_cut text-muted"
                      >
                        <img src={PayrollLogo} />
                         <span>Payroll</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-xl-2">
                  <div id="card" className="card">
                    <div className="card-body">
                      <a
                        href="hr-accounts.html"
                        className="my_sort_cut text-muted"
                      >
                        <img src={AccountLogo} />
                        <span>Accounts</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-xl-2">
                  <div id="card" className="card">
                    <div className="card-body">
                      <a
                        href="hr-report.html"
                        className="my_sort_cut text-muted"
                      >
                        <img src={ReportLogo} />
                        <span>Report</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-body">
            <div className="container-fluid">
              <div className="row clearfix row-deck">
                <div className="col-xl-6 col-lg-12 col-md-12">
                  <div id="card" className="card">
                    <div id="card-header" className="card-header">
                      <h3 className="card-title">Salary Statistics</h3>
                    </div>
                    <div className="card-body">
                      <ChartApex
                        options={chartData}
                        series={chartData.series}
                        type="bar"
                        height={320}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div id="card" className="card">
                    <div id="card-header" className="card-header">
                      <h3 className="card-title">Revenue</h3>
                    </div>
                    <div className="card-body text-center">
                      <div className="mt-3">
                        <ChartApex
                          options={revenueData.options}
                          series={revenueData.series}
                          type="radialBar"
                          height={240}
                        />
                      </div>
                      <h3 className="mb-0 mt-3 font300">
                        <span className="counter">1,24,301</span>
                        <span className="text-green font-15">+3.7%</span>
                      </h3>
                      <small style={{fontSize:"1rem"}}>
                        Quarterly revenue growth <br />
                       
                      </small>
                    
                    </div>
                
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div id="card" className="card">
                    <div id="card-header" className="card-header">
                      <h3 className="card-title">My Balance</h3>
                    </div>
                    <div className="card-body" style={{marginLeft:"10px"}}>
                      <span>Balance</span>
                      <h4>
                        $<span className="counter">20,508</span>
                      </h4>
                      <ChartApex
                        options={balanceData}
                        series={balanceData.series}
                        type="area"
                        height={200}
                      />

                      <div className="form-group" style={{margin:"10px"}}>
                        <label className="d-block">
                          Bank of America
                          <span className="float-right">
                            $<span className="counter">15,025</span>
                          </span>
                        </label>
                        <div id="progress" className="progress progress-xs">
                          <div
                            className="progress-bar bg-azure"
                            role="progressbar"
                            aria-valuenow={77}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: `${57}%` }}
                          />
                        </div>
                      </div>
                      <div className="form-group" style={{margin:"10px"}}>
                        <label className="d-block">
                          RBC Bank
                          <span className="float-right">
                            $<span className="counter">1,843</span>
                          </span>
                        </label>
                        <div id="progress" className="progress progress-xs">
                          <div
                            className="progress-bar bg-green"
                            role="progressbar"
                            aria-valuenow={50}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: `${77}%` }}
                          />
                        </div>
                      </div>
                     
                    </div>
                  
                  </div>
                </div>
              </div>
              <div className="row clearfix row-deck">
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div id="card" className="card" >
                    <div id="card-header" className="card-header">
                      <h3 className="card-title">Growth</h3>
                    </div>
                    <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"60px"}}>
                    
                      <Chart type="doughnut" data={chartDonutData} options={lightOptions} style={{ position: 'relative', width: '240px',height:"240px" }} />

                    </div>
                    
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div id="card" className="card">
                    <div id="card-header" className="card-header">
                      <h3 className="card-title">Performance</h3>
                    </div>
                    <div className="card-body">
                     
                      <ul className="list-group mt-3 mb-0">
                        <li className="list-group-item">
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>35%</strong>
                            </div>
                            <div className="float-right">
                              <small className="text-muted">Design Team</small>
                            </div>
                          </div>
                          <div id="progress" className="progress progress-xs">
                            <div
                              className="progress-bar bg-azure"
                              role="progressbar"
                              style={{ width: "35%" }}
                              aria-valuenow={42}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>25%</strong>
                            </div>
                            <div className="float-right">
                              <small className="text-muted">
                                Developer Team
                              </small>
                            </div>
                          </div>
                          <div id="progress" className="progress progress-xs">
                            <div
                              className="progress-bar bg-green"
                              role="progressbar"
                              style={{ width: "25%" }}
                              aria-valuenow={0}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>15%</strong>
                            </div>
                            <div className="float-right">
                              <small className="text-muted">Marketing</small>
                            </div>
                          </div>
                          <div id="progress" className="progress progress-xs">
                            <div
                              className="progress-bar bg-orange"
                              role="progressbar"
                              style={{ width: "15%" }}
                              aria-valuenow={36}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>20%</strong>
                            </div>
                            <div className="float-right">
                              <small className="text-muted">Management</small>
                            </div>
                          </div>
                          <div id="progress" className="progress progress-xs">
                            <div
                              className="progress-bar bg-indigo"
                              role="progressbar"
                              style={{ width: "20%" }}
                              aria-valuenow={6}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>11%</strong>
                            </div>
                            <div className="float-right">
                              <small className="text-muted">Other</small>
                            </div>
                          </div>
                          <div id="progress" className="progress progress-xs">
                            <div
                              className="progress-bar bg-pink"
                              role="progressbar"
                              style={{ width: "11%" }}
                              aria-valuenow={6}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12 col-md-12">
                  <div id="card" className="card">
                    <div id="card-header" className="card-header">
                      <h3 className="card-title">Product Sales Report</h3>
                    </div>
                    <div className="card-body text-center">
                    <ChartApex
                        options={options}
                        series={options.series}
                        type="bar"
                        height={320}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row clearfix">
                <div className="col-12 col-sm-12">
                  <div id="card" className="card">
                    <div id="card-header" className="card-header">
                      <h3 className="card-title">Project Summary</h3>
                    </div>
                    <div className="card-body">
                      <div id="table-responsive" className="table-responsive">
                        <table id="table" className="table table-hover table-striped text-nowrap table-vcenter mb-0">
                          <thead>
                            <tr>
                              <th>Sr No</th>
                              <th>Client Name</th>
                              <th>Project</th>
                              <th>Project Cost</th>
                              <th>Payment</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Sean Black</td>

                              <td>Angular Admin</td>
                              <td>$14,500</td>
                              <td>Done</td>
                              <td>
                                <span className="tag tag-success">
                                  Delivered
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>Sean Black</td>

                              <td>Angular Admin</td>
                              <td>$14,500</td>
                              <td>Pending</td>
                              <td>
                                <span className="tag tag-success">
                                  Delivered
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>Merri Diamond</td>

                              <td>One page html Admin</td>
                              <td>$500</td>
                              <td>Done</td>
                              <td>
                                <span className="tag tag-orange">Submit</span>
                              </td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>Sean Black</td>

                              <td>Wordpress One page</td>
                              <td>$1,500</td>
                              <td>Done</td>
                              <td>
                                <span className="tag tag-success">
                                  Delivered
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td>Allen Collins</td>

                              <td>VueJs Application</td>
                              <td>$9,500</td>
                              <td>Done</td>
                              <td>
                                <span className="tag tag-success">
                                  Delivered
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-body">
            <footer className="footer">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    Copyright © 2023
                    <a href="https://orivesolutions.com/" style={{marginLeft:"10px"}}>Orive Solutions</a>.
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
      </>
  )
}

export default Landingfile;