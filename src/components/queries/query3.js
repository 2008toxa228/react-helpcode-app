import { useState } from "react";
import Table from "../TableComponent";
import * as helpcodePostsService from "../../services/helpcodePostsService";



function Query3 (props) {
    const columns = [
          {
            Header: `3. Пользователь вводит заголовок поста. Вывести все посты с данным заголовком и всех пользователей, комментировавших эти посты, в формате ID поста - Дата добавления - Имя комментатора - Сколько раз комментатор комментировал этот пост.`,
            columns: [
              {
                Header: 'Id',
                accessor: 'id',
              },
              {
                Header: 'Date',
                accessor: 'date',
              },
              {
                Header: 'Username',
                accessor: 'username',
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
        helpcodePostsService.Query3(title ,setData)
    }

    
    const [title, setTitle] = useState();

    return (<div>
        <input type="text" placeholder="title" value={title} onChange={e => setTitle(e.target.value)}/>
        <button onClick={submit}>
            submit
        </button>
        {data ? <Table columns={columns} data={data}/> : ""}        
    </div>);
}

export default Query3;