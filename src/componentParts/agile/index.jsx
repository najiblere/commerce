import React, {useEffect, useState} from "react";
import {Table,Row,Col,Card, Button, Modal, Form, Input, Select, message} from "antd";
import axios from "axios";

import { FilterList } from "@mui/icons-material";
import { hideLoader, showLoader } from "../../utils/loader";
import { customBaseUrl, httpGet } from "../services/http";



const Reports = () => {

    const [customers, setCustomers] = useState([]);
    const [showBulkUpload, setShowBulkUpload] = useState(false);
    const [stats, setStat] = useState({});
    const [filter, setFilter] = useState('');
    const [showUpdateUser, setShowUpdateUser] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState([]);
    const [searchText, setSearchText] = useState("");
    const columns = [
        {
            title: 'School',
            dataIndex: 'school',
            key: 'school',
        },
        {
            title: 'LGA',
            dataIndex: 'lga',
            key: 'lga',
        },
        {
            title: 'Ward',
            dataIndex: 'ward',
            key: 'ward',
        },
        {
            title: 'Girls present',
            dataIndex: 'present',
            key: 'present',
        },
        {
            title: 'Girls Absent',
            dataIndex: 'absent',
            key: 'absent',
        },
       
        {
            title: 'Reason for Absenteeism',
            dataIndex: 'reason',
            key: 'reason',
        },
        {
            title: 'Success Recorded',
            dataIndex: 'success',
            key: 'success',
        },
        {
            title: 'Challenges Encountered',
            dataIndex: 'challenges',
            key: 'challenges',
        },
        {
            title: 'Recommendation',
            dataIndex: 'recomendation',
            key: 'recom',
        },
        {
            title: 'Mentor',
            dataIndex: 'mentor',
            key: 'mentor',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Session',
            dataIndex: 'session',
            key: 'session',
        },
        /*{
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <span>
                    
                    <Button type="primary" onClick={() => {setSelectedCustomer(record); setShowUpdateUser(true)}}>Edit</Button>
                    <Button type="danger" onClick={() => deleteCustomer(record)}>Delete</Button>
                </span>
            ),
        }*/
    ];
    const editCustomer = (record) => {
        console.log(record)
    }
    const deleteCustomer = (record) => {
        console.log(record)
    }

    const getAll = async()=>{
        showLoader();
        let res = await httpGet(`${customBaseUrl}/api/v1/reports/allreports`)
        if(res.status){
            console.log('all1', res.data)
            hideLoader();
            setCustomers(res.data)
        }else{
            hideLoader();
        }
    }

    const getStat = async()=>{
        showLoader();
        let res = await httpGet(`${customBaseUrl}/api/v1/customers/stats`)
        if(res.status){
            console.log('all', res.data)
            hideLoader();
            setStat(res.data)
        }else{
            hideLoader();
        }
    }

    useEffect(() => {
        /*
        axios.get('/api/v1/customers/plotcount')
            .then(res => {
                console.log(res.data)
                setCustomers(res.data)
            }).catch(err => {
                console(err)
            }
            )*/
            getStat();
            getAll();
           
    },[])
    const addOptions = [
        "Add Single",
        "Excel Upload",
      ];
      const handleAddDropdown = (item) => {
        if (item === "Add Single") alert(true);
        if (item === "Excel Upload") setShowBulkUpload(true);
        //if (item === "Send Using Webforms") setShowTransferForms(true);
      };
      const filterOp = ["ALL","DAMISHI", "MARABAN JOS", "KAFIN GANYE"]

      const handleFilter = (item) => {
        if (item==="ALL"){
             setFilter("")
        }else{
        setFilter(item)
        }
      }
    return(
        <>
             <div style={{margin:40}}>
                <Row>
                   
                    <Input placeholder="Search by school name" onChange={(e)=>setSearchText(e.target.value)} style={{width:'10%',marginLeft:'5%'}}/>
                    <Button type="primary" style={{marginLeft:'10px'}}>Search</Button>
                    <div className="mx-auto">
                    
                    </div>
                    <div style={{position:'absolute',  right:15,float:'right'}}>
                        <Button type="primary" style={{marginLeft:'10px'}}>Export</Button>
                      
                    </div>
                </Row>
            </div>
            <div className="row">
                <Row>
            <div>
               
                        <Card>
                                <h1>Total Reports</h1>  
                                <p><h1 className="mx-auto text-center">{stats.allCustomers}</h1></p>  
                        </Card>
        
            </div>
            <div>
                        <Card>
                                <h1>No. of Girls Present This Week</h1>  
                                <p><h1 className="mx-auto text-center">{stats.maraba}</h1></p>  
                        </Card>
                    
            </div>
            <div>
                        <Card>
                                <h1>No. of Girls Absent This Week</h1>  
                                <p><h1 className="mx-auto text-center">{stats.damishi}</h1></p>  
                        </Card>
                    
            </div>
            </Row>
            </div>
            <div style={{margin:20}}>
                <Table columns={columns} dataSource={searchText?customers.filter(e=>e?.school?.toLowerCase()?.includes(searchText.toLowerCase()) ) :customers} />
            </div>
          
          
        </>
    )
}

export default Reports;


