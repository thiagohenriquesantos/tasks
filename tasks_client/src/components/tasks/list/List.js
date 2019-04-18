import React, { Component } from 'react';
   import Row from 'react-bootstrap/Row';
   import Card from 'react-bootstrap/Card';
   import Table from 'react-bootstrap/Table';
   import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

   class List extends Component {
     render() {
       return (
         <div>
           <Card>
             <Card.Body>
             <Table responsive>
               <tbody>
                 {this.props.tasks.map((task, index) => {
                   return <tr key={task.id}>
                     <td className="col-md-10">{task.title}</td>
                     <td>
                       {
                         task.done == false
                         ? <a className="check" href="#">
                             <FontAwesomeIcon icon={['far', 'check-circle']} size="lg"/>
                           </a>
                         : null
                       }
                     </td>
                     <td>
                       <a className="delete" href="#">
                         <FontAwesomeIcon icon={['far', 'trash-alt']}/>
                       </a>
                     </td>
                   </tr>;
                 })}
               </tbody>
             </Table>
             </Card.Body>
           </Card>
         </div>
       );
     }
   }

   export default List;
