import React, { useState, useEffect, useRef } from "react";
import { DataQuery, useDataQuery, useDataMutation } from "@dhis2/app-runtime";
import i18n from "@dhis2/d2-i18n";
import classes from "./App.module.css";
import Collapsible from "react-collapsible";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import * as ReactBootstrap from "react-bootstrap";

<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
/>;

import Footer from "./components/footer";

let currentUserGroups = {};
let approved_status = null;
let approved = null;
let approveddqa = ["aCvNaROTROK", "Ox2t1UrgXZ7", "ZC3c83Ie1xw"];
const query = {
  me: {
    resource: "me",
  },
};

const MyApp = () => {
  // const [currentUser, setCurrentUser] = useState(null)

  // useEffect(()=> {
  //         setCurrentUser(data.me)

  // },[])
  return (
    <div className={classes.container}>
      <DataQuery query={query}>
        {({ error, loading, data }) => {
          if (error) return <span>ERROR</span>;
          if (loading) return <span>...</span>;
          // setCurrentUser(data.me)
          currentUserGroups = data.me?.userGroups;
          currentUserGroups.map((ace) => {
            approved = approveddqa.includes(ace.id);
            approved_status += approved;
          });
          console.log({ approved_status });
          if (approved_status > 0) {
            approved_status = "";
          } else {
            approved_status = "none";
          }
          console.log(approved_status);
          return (
            <>
              {/* <div className="container-main"> */}

              
              
              {/* <div className="container">
                <Collapsible
                  trigger="Partner Performance Monitoring System"
                  open="true"
                >
                  <hr></hr>
                  <div className="datasetrow flex-container">
                    <div className="card-holder m-2">
                      <div
                        className="card m-b-1"
                        style={{ backgroundColor: "white" }}
                      >
                        <div className="card-body p-2">
                          <div
                            className="card-text text-caps p-20"
                            style={{
                              fontSize: "0.8rem",
                              fontWeight: "900",
                              color: "#0F79FA",
                            }}
                          >
                            <a href="https://partnermanagementsystem.uonbi.ac.ke/api/apps/data-import-app/index.html">
                              Data import app
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card-holder m-2">
                      <div
                        className="card m-b-1"
                        style={{ backgroundColor: "white" }}
                      >
                        <div className="card-body p-2">
                          <div
                            className="card-text text-caps p-20"
                            style={{
                              fontSize: "0.8rem",
                              fontWeight: "900",
                              color: "#0F79FA",
                            }}
                          >
                            <a href="https://partnermanagementsystem.uonbi.ac.ke/api/apps/Partner-Reporting-Dashboards/html/index.html">
                              Dashboard PPMS
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Collapsible>

                <Collapsible trigger="HIV DQA 2022" open="true">
                  <hr></hr>
                  <div className=" datasetrow" id="dqa_usaid">
                    <div className="flex-container">
                      <div className="card-holder m-2">
                        <div
                          className="card m-b-1"
                          style={{ backgroundColor: "white" }}
                        >
                          <div className="card-body p-2">
                            <div
                              className="card-text text-caps p-20"
                              style={{
                                fontSize: "0.8rem",
                                fontWeight: "900",
                                color: "#0F79FA",
                              }}
                            >
                              <a href="https://partnermanagementsystem.uonbi.ac.ke/dhis-web-capture/index.html#/programId=lWNCcizbWF3">
                                1. IP System <br></br>Assessment
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="card-holder m-2">
                        <div
                          className="card m-b-1"
                          style={{ backgroundColor: "white" }}
                        >
                          <div className="card-body p-2">
                            <div
                              className="card-text text-caps p-20"
                              style={{
                                fontSize: "0.8rem",
                                fontWeight: "900",
                                color: "#0F79FA",
                              }}
                            >
                              <a href="https://partnermanagementsystem.uonbi.ac.ke/dhis-web-capture/index.html#/programId=rWscGhjShfE">
                                2. IP Data Quality <br></br> Checklist
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="card-holder m-2">
                        <div
                          className="card m-b-1"
                          style={{ backgroundColor: "white" }}
                        >
                          <div className="card-body p-2">
                            <div
                              className="card-text text-caps p-20"
                              style={{
                                fontSize: "0.8rem",
                                fontWeight: "900",
                                color: "#0F79FA",
                              }}
                            >
                              <a href="https://partnermanagementsystem.uonbi.ac.ke/dhis-web-capture/index.html#/programId=ilWNUxRen9a">
                                3. Site Visit <br></br> System Assessment
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="card-holder m-2">
                        <div
                          className="card m-b-1"
                          style={{ backgroundColor: "white" }}
                        >
                          <div className="card-body p-2">
                            <div
                              className="card-text text-caps p-20"
                              style={{
                                fontSize: "0.8rem",
                                fontWeight: "900",
                                color: "#0F79FA",
                              }}
                            >
                              <a href="https://partnermanagementsystem.uonbi.ac.ke/dhis-web-dataentry/index.action">
                                4. Site Level <br></br> Data Verification
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="card-holder m-2">
                        <div
                          className="card m-b-1"
                          style={{ backgroundColor: "white" }}
                        >
                          <div className="card-body p-2">
                            <div
                              className="card-text text-caps p-20"
                              style={{
                                fontSize: "0.8rem",
                                fontWeight: "900",
                                color: "#0F79FA",
                              }}
                            >
                              <a href="https://partnermanagementsystem.uonbi.ac.ke/api/apps/hiv-dqa-2022-visuals/html/index.html">
                                5. Dashboard
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}

                  {/* <ReactBootstrap.Button bsStyle="success" bsSize="small">
                    Something
                  </ReactBootstrap.Button> */}
                {/* </Collapsible>
              </div> */}
              {/* </div> */}
              <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <u><h4 className="h4 mb-4">Partner Performance Monitoring System</h4></u>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
              <a href="https://partnermanagementsystem.uonbi.ac.ke/api/apps/data-import-app/index.html">
                              Data import app
                            </a>
              </h4>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
              <a href="https://partnermanagementsystem.uonbi.ac.ke/api/apps/Partner-Reporting-Dashboards/html/index.html">
                              Dashboard PPMS
                            </a>
              </h4>
            </div>

            <br />
          </div>

          <br />
          <br />
          <br />

          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                  <a href="https://partnermanagementsystem.uonbi.ac.ke/api/apps/hiv-dqa-2022-visuals/html/index.html">
                    HIV DQA 2020 Dashboard
                  </a>
                </h4>
              </div>
            </div>
            

          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}

            {/* <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h4 className="h4 mb-4">HIV DQA 2022</h4>
            </div> */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                <a href="https://partnermanagementsystem.uonbi.ac.ke/dhis-web-capture/index.html#/programId=lWNCcizbWF3">
                  1. IP System <br></br>Assessment
                </a>
              </h4>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                <a href="https://partnermanagementsystem.uonbi.ac.ke/dhis-web-capture/index.html#/programId=rWscGhjShfE">
                  2. IP Data Quality <br></br> Checklist
                </a>
              </h4>
            </div>

            {/* 5th item */}

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                <a href="https://partnermanagementsystem.uonbi.ac.ke/dhis-web-capture/index.html#/programId=ilWNUxRen9a">
                  3. Site Visit <br></br> System Assessment
                </a>
              </h4>
            </div>
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <h4  className="text-xl font-bold leading-snug tracking-tight mb-1">
                <a href="https://partnermanagementsystem.uonbi.ac.ke/dhis-web-dataentry/index.action">
                  4. Site Level Data Verification
                </a>
              </h4>
            </div>
          
          </div>
        </div>
      </div>
              <Footer />
            </>
          );
        }}
      </DataQuery>
    </div>
  );
};

export default MyApp;
