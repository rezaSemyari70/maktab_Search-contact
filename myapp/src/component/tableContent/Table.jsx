import React, { Component } from 'react';

import TableRow from './TableRow';
export default class Table extends Component {

state = {
    contacts : [
        {id:1 , name:"reza" , lastname:'kamrani' , email:'reza@gmail.com' , phone:'09152349012'},
        {id:2 , name:"saeed" , lastname:'nasehi' , email:'saeed@gmail.com' , phone:'09192347382'},
        {id:3 , name:"nader" , lastname:'alipour' , email:'nader@gmail.com' , phone:'09358237378'},
        {id:4 , name:"homan" , lastname:'mohammdi' , email:'homan@gmail.com' , phone:'09192382302'},
        {id:5 , name:"mohmmad" , lastname:'abtahi' , email:'mohmmad@gmail.com' , phone:'09122345021'},
        {id:6 , name:"ali" , lastname:'navidi' , email:'ali@gmail.com' , phone:'09102557382'},
        {id:7 , name:"masoud" , lastname:'javid' , email:'masoud@gmail.com' , phone:'09362347382'},
        {id:8 , name:"alireza" , lastname:'sadrosadati' , email:'alireza@gmail.com' , phone:'09102347382'},
        {id:9 , name:"ramin" , lastname:'afazeli' , email:'ramin@gmail.com' , phone:'09102347382'},
        {id:10 , name:"kamran" , lastname:'mokhtari' , email:'kamran@gmail.com' , phone:'09122347343'},
    ],

    search:''
}

handleChange = (event) => {
    const {name , value} = event.target;
    this.setState({[name]: value});
}

render() {
    const {contacts , search} = this.state;
    let filterdContacts = contacts.filter(contact => contact.phone.startsWith(search) || contact.name.startsWith(search.toLowerCase()));
        return (
            <div className="container">
                <div className="row justify-content-center mt-3">
                    <input className="inputSearch" name={"search"} value={search} onChange={this.handleChange} placeholder="Search contact  by  Name  or  Phone number"/>
                </div>
                <div className="row justify-content-center">
                    <div className="col">
                        <table className="table table-hover ">
                            <thead className="headerColor">
                                <tr className="">
                                    <th>Name</th>
                                    <th>Lastname</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filterdContacts.map(contact => (
                                    <TableRow key={contact.id} 
                                        name={contact.name} 
                                        lastname={contact.lastname} 
                                        email={contact.email}
                                        phone={contact.phone} 
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )}
}