import { useEffect, useState } from "react";
import { getTodoData,  DeleteTodoDataAPI} from "../API/TodoAPI";
import { useNavigate } from "react-router-dom";

function Todos()
{

    //For Displaying Message

      const [message, setMessage] = useState(null);

      const [todoList, setTodoList] = useState([]);

      useEffect (()=> callingTodoData(), []);

      const navigate = useNavigate();

      function callingTodoData(){

        getTodoData()
        .then((response) => setTodoList(response.data))
        .catch((error) => console.log(error))
        .finally(() => console.log("My Name is called"));

      }

      //Update Function

      function updateTodo(id){

        console.log("On Clicking Update Button : "+ id + " is called!!");
        navigate(`/todos/${id}`);

      }

      //Delete Function

      function deleteTodo(id){

        console.log("On Clicking Delete Button : "+ id + " is called!!");

        DeleteTodoDataAPI(id)
        .then(

            () => {
              
              setMessage(`Record with ID ${id} has been deleted successfully!!`)
              callingTodoData()

                  }
        
        ).catch((error) => console.log(error))

      }

      //Create Todo

      function createTodo(){

        navigate('/todos/-1')
      }

    return(

        <>

        <h1> Things you want to do !! </h1>

        {message && <div className="alert alert-warning"> {message}</div>}

        <br />

        <table className="table table-striped">

                        <thead>
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Username</th>
                        <th scope="col">Discription</th>
                        <th scope="col">Done </th>
                        <th scope="col">Deadline</th>
                        <th scope="col">Update </th>
                        <th scope="col">Delete</th>
                        </tr>
                        </thead>
                        <tbody>

                        {
                            todoList.map(elm => (

                                                    <tr key={elm.id}>
                                                    <td>{elm.id}</td>
                                                    <td>{elm.username}</td>
                                                    <td>{elm.description}</td>
                                                    <td>{elm.done.toString()}</td>
                                                    <td>{elm.deadline.toString()}</td>
                                                    <td><button type="button" className="btn btn-success" onClick={() => updateTodo(elm.id)} > Update </button> </td>
                                                    <td><button type="button" className="btn btn-danger" onClick={() => deleteTodo(elm.id)} > Delete </button> </td>
                                                    </tr>

                                                    )
                                        )
                        }
                       
                        </tbody>
        </table>

        <button style={{borderRadius:"25px", borderColor:"black", borderWidth:"5px"}} type="button" className="btn btn-primary mt-5 pt-4 pb-4" onClick={() => createTodo()} > Create Todo </button>
        
        </>
    );
}

export default Todos;