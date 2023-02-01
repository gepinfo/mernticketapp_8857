import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./createscreen.scss";

import  {service}  from './createscreen.service';
import  Select  from '';
import  Select  from '';
import  Select  from '';
import  Select  from '';
import  Select  from '';
import  Select  from '';
import  Select  from '';
import  Select  from '';
import  Select  from '';
import  Select  from '';
import  Select  from '';
import  Select  from '';


class Createscreen extends React.Component<any, any> {
    typesitemArray: any = [];
    severitylistArray: any = [];

     gridApi: any;
     gridColumnApi: any;
    test = new service ("");
    constructor(props:any){
       super(props);
    this.state={ 
    tickets : {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        des: '',
        callername: '',
        types: '',
        severity: '',
    },
    rowData :[],options:[],
 }  }

   
    handlechange = (e: any) => {
         if(e?.target){
            this.setState({ tickets: { ...this.state.tickets, [e.target.name]: e.target.value } }) 
         }
    }
    

    componentDidMount() {
        this.state.tickets.created_by = sessionStorage.getItem('email')||'{}'; 
          this.entitytypesGpGetAllValues();
          this.listseverityGpGetAllValues();
    }
    entitytypesGpGetAllValues  () {
      this.test.entitytypesGpGetAllValues().then((data:any) => {
            this.typesitemArray = data.data;
                                                                                        this.setState({options: this.typesitemArray.map((value: any) => {
                                                                                        return {name:"types",label:value.types,value:value.types}})})
        },
        (error:any) => {
            console.log('Error', error);
        });
    }
    listseverityGpGetAllValues  () {
      this.test.listseverityGpGetAllValues().then((data:any) => {
            this.severitylistArray = data.data;
                                                                                        this.setState({options: this.severitylistArray.map((value: any) => {
                                                                                        return {name:"severity",label:value.severity,value:value.severity}})})
 	 	this.severitylistArray = data.data;
                                                                                        this.setState({options: this.severitylistArray.map((value: any) => {
                                                                                        return {name:"severity",label:value.severity,value:value.severity}})})
        },
        (error:any) => {
            console.log('Error', error);
        });
    }
    GpCreate  () {
      this.test.GpCreate(this.state.tickets).then((data:any) => {
            
        },
        (error:any) => {
            console.log('Error', error);
        });
    }

    render(){
        return(
            <>
            <h2 className="screen-align">createscreen</h2>
            <div id="template-ievf" className="grid">
    <div id="template-i9ol" className="template-ievf-div0 grid-cell">
        <input id="template-i4zk" placeholder="Name" onChange={this.handlechange}
        name="name" value={this.state.tickets.name}className="input form-control "
        />
    </div>
    <div id="template-ibxi" className="template-ievf-div1 grid-cell">
        <input id="template-io93" placeholder="Description" onChange={this.handlechange}
        name="des" value={this.state.tickets.des}className="input form-control "
        />
    </div>
    <div id="template-ivub" className="template-ievf-div2 grid-cell">
        <div id="template-idleh">
            <Select id="template-iltf3" options={this.state.options} onChange={this.handlechange}
            value={this.state.tickets.types}className="form-control "></Select>
        </div>
    </div>
    <div id="template-iy3k" className="template-ievf-div3 grid-cell">
        <input id="template-i5xeh" placeholder="caller" onChange={this.handlechange}
        name="callername" value={this.state.tickets.callername}className="input form-control "
        />
    </div>
</div>
            </>
        );
    };
};

export default Createscreen;