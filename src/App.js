import React, {useState, useEffect, useRef} from 'react'
import { DataQuery, useDataQuery, useDataMutation } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import classes from './App.module.css'
import Collapsible from 'react-collapsible'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/style.css";

let currentUserGroups = {}
let approved_status = null
let approved = null
let approveddqa = ['aCvNaROTROK', 'Ox2t1UrgXZ7', 'ZC3c83Ie1xw']
const query = {
    me: {
        resource: 'me',
    },
}



const MyApp = () => {
    // const [currentUser, setCurrentUser] = useState(null)
    
    // useEffect(()=> {
    //         setCurrentUser(data.me)
        
    // },[])
    return (
        <div className={classes.container}>
            <DataQuery query={query}>
                {({ error, loading, data }) => {
                    if (error) return <span>ERROR</span>
                    if (loading) return <span>...</span>
                    // setCurrentUser(data.me)
                    currentUserGroups = data.me?.userGroups
                    currentUserGroups.map((ace) => {
                        approved = approveddqa.includes(ace.id)
                        approved_status += approved
                    })
                    console.log({approved_status})
                    if (approved_status > 0) {
                        approved_status = ""
                    }else{
                        approved_status = "none"
                    }
                    console.log(approved_status)
                    return (
                        <>
                        <div className="d-flex flex-col" style={{ width: '80%', padding: '5% !important'}}>
                            <div className={`parent-container`} style={{ width: '80%', padding: '5% !important'}}>
                                <div className="main w-full bg-info-light flex flex-col items-center">
                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <Collapsible trigger="Partner Performance Monitoring System" open="true">
                                                    <div className="card-body flex-row" style={{display: 'flex'}}>
                                                        <div className="col-md-2 card-holder m-2">
                                                            <div className="card m-b-1" style={{backgroundColor: 'white'}}>
                                                                <div className="card-body p-2">
                                                                    <div className="card-text text-caps p-20" style={{fontSize: '0.8rem', fontWeight: '900', color: '#0F79FA'}}>
                                                                        <a href="https://partnermanagementsystem.uonbi.ac.ke/api/apps/data-import-app/index.html">
                                                                        Data import app</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>                                                    

                                                        <div className="col-md-2 card-holder m-2">
                                                            <div className="card m-b-1" style={{backgroundColor: 'white'}}>
                                                                <div className="card-body p-2">
                                                                    <div className="card-text text-caps p-20" style={{fontSize: '0.8rem', fontWeight: '900', color: '#0F79FA'}}>
                                                                        <a href="https://partnermanagementsystem.uonbi.ac.ke/api/apps/Partner-Reporting-Dashboards/html/index.html">
                                                                            Dashboard
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </Collapsible>
                                            </div>
                                        </div>

                                        <div className="row"  id='dqa_usaid' style = {{display:approved_status}}>
                                            <div className='col-md-12'>
                                                <Collapsible trigger="HIV DQA 2022" open="true">
                                                    <div className="card-body" style={{display: 'flex'}}>
                                                        <div className="col-md-2 card-holder m-2">
                                                            <div className="card m-b-1" style={{backgroundColor: 'white'}}>
                                                                <div className="card-body p-2">
                                                                    <div className="card-text text-caps p-20" style={{fontSize: '0.8rem', fontWeight: '900', color: '#0F79FA'}}>
                                                                        <a href="https://partnermanagementsystem.uonbi.ac.ke/dhis-web-capture/index.html#/programId=lWNCcizbWF3">
                                                                            1. IP Assessment
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-2 card-holder m-2">
                                                            <div className="card m-b-1" style={{backgroundColor: 'white'}}>
                                                                <div className="card-body p-2">
                                                                    <div className="card-text text-caps p-20" style={{fontSize: '0.8rem', fontWeight: '900', color: '#0F79FA'}}>
                                                                        <a href="https://partnermanagementsystem.uonbi.ac.ke/dhis-web-capture/index.html#/programId=rWscGhjShfE">
                                                                        2. IP Data Quality
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-2 card-holder m-2">
                                                            <div className="card m-b-1" style={{backgroundColor: 'white'}}>
                                                                <div className="card-body p-2">
                                                                    <div className="card-text text-caps p-20" style={{fontSize: '0.8rem', fontWeight: '900', color: '#0F79FA'}}>
                                                                        <a href="https://partnermanagementsystem.uonbi.ac.ke/dhis-web-capture/index.html#/programId=ilWNUxRen9a">
                                                                            3. Site Visit
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-2 card-holder m-2">
                                                            <div className="card m-b-1" style={{backgroundColor: 'white'}}>
                                                                <div className="card-body p-2">
                                                                    <div className="card-text text-caps p-20" style={{fontSize: '0.8rem', fontWeight: '900', color: '#0F79FA'}}>
                                                                        <a href="https://partnermanagementsystem.uonbi.ac.ke/dhis-web-dataentry/index.action">
                                                                        4. Data Verification
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-2 card-holder m-2">
                                                            <div className="card m-b-1" style={{backgroundColor: 'white'}}>
                                                                <div className="card-body p-2">
                                                                    <div className="card-text text-caps p-20" style={{fontSize: '0.8rem', fontWeight: '900', color: '#0F79FA'}}>
                                                                        <a href="https://partnermanagementsystem.uonbi.ac.ke/dhis-web-dashboard/index.html#/D7ctG2OXl1U">
                                                                            5. Dashboard
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </Collapsible>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }}
            </DataQuery>
        </div>
    )
}

export default MyApp
