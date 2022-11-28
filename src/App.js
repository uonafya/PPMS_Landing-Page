import React, {useState, useEffect, useRef} from 'react'
import { DataQuery, useDataQuery, useDataMutation } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import classes from './App.module.css'
import Collapsible from 'react-collapsible'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/style.css";

<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
/>

import Footer from './components/footer'

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
                            {/* <div className="container-main"> */}
                                <div className='container'>
                                                    <Collapsible trigger="Partner Performance Monitoring System" open="true">
                                                        <hr></hr>   
                                                        <div className='datasetrow flex-container'>
                                                            <div className="card-holder m-2">
                                                                <div className="card m-b-1" style={{backgroundColor: 'white'}}>
                                                                    <div className="card-body p-2">
                                                                        <div className="card-text text-caps p-20" style={{fontSize: '0.8rem', fontWeight: '900', color: '#0F79FA'}}>
                                                                            <a href="https://partnermanagementsystem.uonbi.ac.ke/api/apps/data-import-app/index.html">
                                                                            Data import app</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>                                                    

                                                            <div className="card-holder m-2">
                                                                <div className="card m-b-1" style={{backgroundColor: 'white'}}>
                                                                    <div className="card-body p-2">
                                                                        <div className="card-text text-caps p-20" style={{fontSize: '0.8rem', fontWeight: '900', color: '#0F79FA'}}>
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
                                                    <div className=" datasetrow"  id='dqa_usaid'>
                                                        <div className='flex-container'>
                                                                <div className="card-holder m-2">
                                                                    <div className="card m-b-1" style={{backgroundColor: 'white'}}>
                                                                        <div className="card-body p-2">
                                                                            <div className="card-text text-caps p-20" style={{fontSize: '0.8rem', fontWeight: '900', color: '#0F79FA'}}>
                                                                                <a href="https://partnermanagementsystem.uonbi.ac.ke/dhis-web-capture/index.html#/programId=lWNCcizbWF3">
                                                                                    1. IP  System <br></br>Assessment
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="card-holder m-2">
                                                                    <div className="card m-b-1" style={{backgroundColor: 'white'}}>
                                                                        <div className="card-body p-2">
                                                                            <div className="card-text text-caps p-20" style={{fontSize: '0.8rem', fontWeight: '900', color: '#0F79FA'}}>
                                                                                <a href="https://partnermanagementsystem.uonbi.ac.ke/dhis-web-capture/index.html#/programId=rWscGhjShfE">
                                                                                2. IP Data Quality <br></br> Checklist
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="card-holder m-2">
                                                                    <div className="card m-b-1" style={{backgroundColor: 'white'}}>
                                                                        <div className="card-body p-2">
                                                                            <div className="card-text text-caps p-20" style={{fontSize: '0.8rem', fontWeight: '900', color: '#0F79FA'}}>
                                                                                <a href="https://partnermanagementsystem.uonbi.ac.ke/dhis-web-capture/index.html#/programId=ilWNUxRen9a">
                                                                                    3. Site Visit <br></br> System Assessment
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="card-holder m-2">
                                                                    <div className="card m-b-1" style={{backgroundColor: 'white'}}>
                                                                        <div className="card-body p-2">
                                                                            <div className="card-text text-caps p-20" style={{fontSize: '0.8rem', fontWeight: '900', color: '#0F79FA'}}>
                                                                                <a href="https://partnermanagementsystem.uonbi.ac.ke/dhis-web-dataentry/index.action">
                                                                                4. Site Level <br></br> Data Verification
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            <div className="card-holder m-2">
                                                                <div className="card m-b-1" style={{backgroundColor: 'white'}}>
                                                                    <div className="card-body p-2">
                                                                        <div className="card-text text-caps p-20" style={{fontSize: '0.8rem', fontWeight: '900', color: '#0F79FA'}}>
<<<<<<< HEAD
                                                                            <a href="https://partnermanagementsystem.uonbi.ac.ke/api/apps/hiv-dqa-2022-visuals/html/index.html">
                                                                                5. Dashboard
=======
                                                                            <a href="https://partnermanagementsystem.uonbi.ac.ke/api/apps/HIV-DQA-2022-VISUALS/html/index.html">
                                                                                5. Dashboard <br></br>.
>>>>>>> 66a1a5a79db7bed1c56c76b9f5dd82420c24c427
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div> 
                                                            </div>   
                                                        </div>                                                    
                                                    </Collapsible>
                                    </div>                        
                            {/* </div> */}
                            <Footer/>

                        </>
                    )
                }}
            </DataQuery>
            
        </div>
    )
}

export default MyApp
