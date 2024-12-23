import { useNavigate, useParams } from "react-router-dom";
import { getTodoDataWithId, updateTodoDataWithId, createTodoDataAPI} from "../API/TodoAPI";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import moment from 'moment'
import { authContext } from "../Security/AuthContext";

function TodoUpdate() {

    const { id } = useParams();

    const navigate = useNavigate();

    const AuthContext = authContext();

    const currentUsername = AuthContext.username;

    // For Storing Description, Deadline and current USERNAME

    const [description, setDescription] = useState("");
    const [deadline, setDeadline] = useState("");
    const [username, setUsername] = useState("");

    function updateTodoById() {

        if(id != -1){
 
        getTodoDataWithId(id)
            .then((response) => {
                setDescription(response.data.description);
                setDeadline(response.data.deadline);
                setUsername(response.data.username);
            })
            .catch((error) => console.log(error));
                    }
}

    // To call updateTodoById() when this component mount

    useEffect(() => {
        updateTodoById();
    }, []);

    
    function onSubmit(values)
    {
        
            console.log(values);

            const todo = {

                id: id,
                username: username,
                description: values.description,
                done: false,
                deadline: values.deadline
            }

            const todo2 = {

                username: currentUsername,
                description: values.description,
                done: false,
                deadline: values.deadline
            }

            console.log(todo);

            if(id == -1){
                createTodoDataAPI(todo2)
                .then((response) => {
                    navigate('/todos')
                })
                .catch((error) => console.log(error));
            
            }else{

                updateTodoDataWithId(id, todo)
                .then((response) => {
                    navigate('/todos')
                })
                .catch((error) => console.log(error));
            }    
    }


    function validate(values)
    {
        let errors = { }

        if(values.description.length <=3)
            {
                errors.description = "Enter atleast 4 Characters"
            }

        if(values.deadline == null || values.deadline == '' || !moment(values.deadline).isValid())
            {
                errors.description = "Enter a Valid Date"
            }

        console.log(values);

        return errors

    }


    return (
        <div className="container">
            <h1>Updating Todo Form</h1> <br />
            
            <div>
                <Formik
                    initialValues={{ description, deadline }}
                    enableReinitialize = {true}

                    //On Submitting the values are stored inside values automatically!!
                    onSubmit={onSubmit}

                    validate = {validate}
                    validateOnChange = {false}
                    validateOnBlur = {false}
                >

                    {
                     (props) => (
                        <Form>

                            <ErrorMessage
                               
                                name="description"
                                component="div"
                                className="alert alert-warning"
                            />

                            <ErrorMessage
                                    
                                name="deadline"
                                component="div"
                                className="alert alert-warning"
                                
                                />

                            <fieldset className="form-group">
                                <label htmlFor="description">Description</label>
                                <Field type="text" name="description" className="form-control" />
                            </fieldset>

                            <fieldset className="form-group">
                                <label htmlFor="deadline">Deadline</label>
                                <Field type="date" name="deadline" className="form-control"/>
                            </fieldset>

                            <button type="submit" className="btn btn-success m-5">
                                Update
                            </button>
                        </Form>
                               )
                    }
                </Formik>
            </div>
        </div>
    );
}

export default TodoUpdate;


// export default TodoUpdate;


// For Updating we need a form: 

// Use Formic and Moment Libraries for it.

// npm install formik moment

// DONE
// "formik": "^2.4.6",
// "moment": "^2.30.1",