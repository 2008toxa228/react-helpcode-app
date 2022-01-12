import { useState } from "react";
import Table from "../TableComponent";
import * as helpcodePostsService from "../../services/helpcodePostsService";



function Query1 (props) {
    const columns = [
          {
            Header: `1. Пользователь вводит username и интервал дат. Вывести все посты этого пользователя в указанный интервал времени в формате Заголовок - Контент (до 100 символов) - Дата создания - Количество комментариев к посту.`,
            columns: [
              {
                Header: 'Title',
                accessor: 'title',
              },
              {
                Header: 'Content',
                accessor: 'content',
              },
              {
                Header: 'CreationDate',
                accessor: 'creationDate',
              },
              {
                Header: 'Count',
                accessor: 'count',
              },
            ],
          },
        ]

    const [data, setData] = useState();

    function submit () {
        helpcodePostsService.Query1(username, date1, date2 ,setData)
    }

    
    const [username, setusername] = useState();
    const [date1, setdate1] = useState();
    const [date2, setdate2] = useState();

    return (<div>
        <input type="text" placeholder="username" value={username} onChange={e => setusername(e.target.value)}/>
        <input type="date" placeholder="date1" value={date1} onChange={e => setdate1(e.target.value)}/>
        <input type="date" placeholder="date2" value={date2} onChange={e => setdate2(e.target.value)}/>
        <button onClick={submit}>
            submit
        </button>
        {data ? <Table columns={columns} data={data}/> : ""}        
    </div>);
}

export default Query1;