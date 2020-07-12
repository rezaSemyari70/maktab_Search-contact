import React, { Component } from 'react'

import TableRow from './TableRow';

export default class TableBody extends Component {

    state = {
        contacts : [
            {id:1 , name:"reza" , lastname:'kamrani'  , email:'reza@gmail.com' , phone:'09102347382'},
            {id:2 , name:"saeed" , lastname:'nasehi'  , email:'saeed@gmail.com' , phone:'09102347382'},
            {id:3 , name:"nader" , lastname:'alipour'  , email:'nader@gmail.com' , phone:'09102347382'},
            {id:4 , name:"homan" , lastname:'mohammdi' , email:'homan@gmail.com' , phone:'09102347382'},
            {id:5 , name:"mohmmad" , lastname:'abtahi' , email:'mohmmad@gmail.com' , phone:'09102347382'},
            {id:6 , name:"ali" , lastname:'navidi'  , email:'ali@gmail.com' , phone:'09102347382'},
            {id:7 , name:"masoud" , lastname:'javid'  , email:'masoud@gmail.com' , phone:'09102347382'},
            {id:8 , name:"alireza" , lastname:'sadrosadati' , email:'alireza@gmail.com' , phone:'09102347382'},
            {id:9 , name:"ramin" , lastname:'afazeli'  , email:'ramin@gmail.com' , phone:'09102347382'},
            {id:10 , name:"kamran" , lastname:'mokhtari'  , email:'kamran@gmail.com' , phone:'09102347382'},
        ]   
    }

    render() {
        const {contacts} = this.state;
        return (
                <tbody>
                    {contacts.map(contact => (
                        <TableRow
                            key={contact.id}
                            name={contact.name}
                            lastname={contact.lastname}
                            email={contact.email}
                            phone={contact.phone} 
                        />
                    ))}
                </tbody>
        )
    }
}
