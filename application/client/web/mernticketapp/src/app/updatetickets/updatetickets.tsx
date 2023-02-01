import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./updatetickets.scss";

import  {service}  from './updatetickets.service';
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


class Updatetickets extends React.Component<any, any> {
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
    GpUpdate  () {
      this.test.GpUpdate(this.state.tickets).then((data:any) => {
            
        },
        (error:any) => {
            console.log('Error', error);
        });
    }

    render(){
        return(
            <>
            <h2 className="screen-align">updatetickets</h2>
            <div id="template-izo9" className="gjs-row">
    <div id="template-ia45" className="gjs-cell">
        <input id="template-i4x4" placeholder="NAme" onChange={this.handlechange}
        name="name" value={this.state.tickets.name}className="input form-control "
        />
    </div>
    <div id="template-ij63" className="gjs-cell">
        <input id="template-itdj" placeholder="Des" onChange={this.handlechange}
        name="des" value={this.state.tickets.des}className="input form-control "
        />
    </div>
    <div id="template-iwmr" className="gjs-cell">
        <input id="template-ivsa2" placeholder="Caller" onChange={this.handlechange}
        name="callername" value={this.state.tickets.callername}className="input form-control "
        />
    </div>
</div>
<div id="template-im8q" className="gjs-row">
    <div id="template-il7p" className="gjs-cell">
        <div id="template-ijzpc">
            <Select id="template-iy9xf" options={this.state.options} onChange={this.handlechange}
            value={this.state.tickets.types}className="form-control "></Select>
        </div>
    </div>
    <div id="template-imcl" className="gjs-cell">
        <div id="template-iqmar">
            <Select id="template-ihdlb" isMulti closeMenuOnSelect={false} options={this.state.options}
            onChange={this.handlechange}className="form-control "></Select>
        </div>
    </div>
</div>
<button id="template-ixmzv" onClick={()=>this.GpUpdate()} className="button btn btn-primary "> Update</button>
            </>
        );
    };
};

export default Updatetickets;