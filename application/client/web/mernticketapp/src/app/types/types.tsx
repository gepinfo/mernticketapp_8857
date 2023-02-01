import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./types.scss";

import  {service}  from './types.service';


class Types extends React.Component<any, any> {

     gridApi: any;
     gridColumnApi: any;
    test = new service ("");
    constructor(props:any){
       super(props);
    this.state={ 
    types : {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        types: '',
        description: '',
    },
    rowData :[],options:[],
 }  }

   
    handlechange = (e: any) => {
         if(e?.target){
            this.setState({ types: { ...this.state.types, [e.target.name]: e.target.value } }) 
         }
    }
    

    componentDidMount() {
        this.state.types.created_by = sessionStorage.getItem('email')||'{}'; 
    }
    GpCreate  () {
      this.test.GpCreate(this.state.types).then((data:any) => {
            
        },
        (error:any) => {
            console.log('Error', error);
        });
    }

    render(){
        return(
            <>
            <h2 className="screen-align">types</h2>
            <div id="template-i1sx" className="gjs-row">
    <div id="template-ivnv" className="gjs-cell">
        <label id="template-i4gw" className="label ">Type</label>
        <input id="template-ihqc" onChange={this.handlechange} name="types"
        value={this.state.types.types}className="input form-control " />
    </div>
    <div id="template-irhr" className="gjs-cell">
        <label id="template-i432" className="label ">Description</label>
        <input id="template-iqw1" onChange={this.handlechange}
        name="description" value={this.state.types.description}className="input form-control "
        />
    </div>
</div>
<button id="template-ikdz8" onClick={()=>this.GpCreate()} className="button btn btn-primary "> Send</button>
            </>
        );
    };
};

export default Types;