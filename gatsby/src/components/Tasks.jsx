import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import { Table } from 'antd';
import moment from 'moment';

const CONST_FORMAT_HOUR = 'DD/MM/YYYY HH:mm';

let columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width:250,
  },
  {
    title: 'Author',
    dataIndex: 'author',
    key: 'author',
    width: 250,
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    width:300,
  },
  {
    title: 'Created',
    dataIndex: 'created_at',
    key: 'created_at',
    render: text => {
        return moment(text).format(CONST_FORMAT_HOUR);
    },
  },
  {
    title: 'End Date',
    dataIndex: 'end_date',
    key: 'end_date',
    render: text => {
        return moment(text).format(CONST_FORMAT_HOUR);
    },
  },

  {
    title: 'Done',
    dataIndex: 'done',
    key: 'done',
    render: text => {
        return text?"Yes":"No";
    },
  }
  // { 
  //   title: '',
  //   key: 'action',
  //   width: 150,
  //   render: (text, record) => {
  //     return (
  //       <div class="dropdown dropdown-default">
  //         <button className="btn btn-link dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Opciones</button>
  //           <div className="dropdown-menu dropdown-link">
  //             <a className="dropdown-item" onClick={() => goUpdateRow(this.props.history, record)} >Editar</a>
  //             <a className="dropdown-item" onClick={() => this.onDelete(record)}>Eliminar</a>
  //           </div>
  //       </div>

  //   )}
  // }
  ];


const Tasks = () => (
  <Query
    query={gql`
      {
        allTasks{
          id
          author
          name
          endDate
          description
          done
          
        }
      }
    `}
  >
    {({ loading, error, data }) => {
        console.log(error)
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(  error</p>;
      return <Table columns={columns} dataSource={data.allTasks} />

      // return data.allTasks.map(({ id, author,name, endDate,description,done }) => (
      //   <div key={id}>
      //     <p>{`${id} by ${author}, ${name}, ${endDate}, ${description}, ${done} `}</p>
      //   </div>
      // ));
    }}
  </Query>
);
export default Tasks;