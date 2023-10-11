import React, { useState, useEffect, useRef } from "react";
import { DataQuery, useDataQuery, useDataMutation } from "@dhis2/app-runtime";
import i18n from "@dhis2/d2-i18n";
import classes from "./App.module.css";
import Collapsible from "react-collapsible";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";

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
let approveddqa = ["aCvNaROTROK"];
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
            approved_status = "none";
          } else {
            approved_status = "";
          }
          console.log(approved_status);
          return (
            <>
              <div className="container">
                <Collapsible
                  trigger="Partner Performance Monitoring System"
                  open="true"
                >
                  <section class="page-contain">
                    <a href="/api/apps/Partner-Reporting-Dashboards/html/index.html" class="data-card">
                      <span className="hh4">PPMS Dashboard</span>
                    </a>
                    <a href="/api/apps/data-import-app/index.html" class="data-card" style={{display:approved_status}}>
                      <span className="hh4">Data import app</span>
                    </a>

                  </section>
                </Collapsible>
                <hr></hr>
                <Collapsible
                  trigger="SEIT"
                  open="true"
                >
                  <section class="page-contain">
                    <a href="/dhis-web-tracker-capture/index.html#/?program=bkgTaUe8wlW" class="data-card">
                      <span className="hh4">SEIT Data Entry</span>
                    </a>
                    <a href="/dhis-web-event-reports/index.html?id=gAUp0jSkO1H" class="data-card">
                      <span className="hh4">SEIT Summary</span>
                    </a>
                    <a href="/dhis-web-event-reports/index.html?id=gAUp0jSkO1H" class="data-card">
                      <span className="hh4">SEIT Report</span>
                    </a>
                  </section>
                </Collapsible>
                <hr></hr>
                <Collapsible trigger="HIV DQA 2022" open="true">
                  <section class="page-contain">
                    <a href="/api/apps/HIV-DQA-2022-VISUALS/html/index.html" class="data-card">
                      <span className="hh4">HIV DQA 2022 Dashboard</span>
                    </a>
                    <a href="#" class="data-card not-active">
                      <span className="hh4">1. IP System Assessment</span>
                    </a>
                    <a href="#" class="data-card not-active">
                      <span className="hh4">2. IP Data Quality checklist</span>
                    </a>
                    <a href="#" class="data-card not-active">
                      <span className="hh4">3. Site Visit System Assessment</span>
                    </a>
                    <a href="#" class="data-card not-active">
                      <span className="hh4">4. Site Level Data Verification</span>
                    </a>
                  </section>
                </Collapsible>
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
