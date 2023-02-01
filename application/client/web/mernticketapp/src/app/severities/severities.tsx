import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./severities.scss";

import  {service}  from './severities.service';


class Severities extends React.Component<any, any> {

     gridApi: any;
     gridColumnApi: any;
    test = new service ("");
    constructor(props:any){
       super(props);
    this.state={ 
    severity : {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        description: '',
    },
    rowData :[],options:[],
 }  }

   
    handlechange = (e: any) => {
         if(e?.target){
            this.setState({ severity: { ...this.state.severity, [e.target.name]: e.target.value } }) 
         }
    }
    

    componentDidMount() {
        this.state.severity.created_by = sessionStorage.getItem('email')||'{}'; 
    }
    GpCreate  () {
      this.test.GpCreate(this.state.severity).then((data:any) => {
            
        },
        (error:any) => {
            console.log('Error', error);
        });
    }

    render(){
        return(
            <>
            <h2 className="screen-align">severities</h2>
            <div id="template-i16e" className="gjs-row">
    <div id="template-ilrj" className="gjs-cell">
        <label id="template-its6" className="label ">Name</label>
        <input id="template-i7x4" placeholder="Name" onChange={this.handlechange}
        name="name" value={this.state.severity.name}className="input form-control "
        />
    </div>
    <div id="template-ikjh" className="gjs-cell">
        <label id="template-i445" className="label ">Description</label>
        <input id="template-ixfg" placeholder="Description"
        onChange={this.handlechange} name="description" value={this.state.severity.description}className="input form-control "
        />
    </div>
</div>
<button id="template-iat23" onClick={()=>this.GpCreate()} className="button btn btn-primary "> Send</button>
            </>
        );
    };
};

export default Severities;