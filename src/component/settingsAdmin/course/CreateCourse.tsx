import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseService from "../../../services/CourseService";
import Course from "../../../models/CourseModel";
import './CreateCourse.css'

const CreateCourse = () => {
    const [course, setCourse] = useState<Course>();
    
  const [nameError, setNameError] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState('');
  const [descriptionError, setDescriptionError] = useState(false);
  const [descriptionErrorMessage, setDescriptionErrorMessage] = useState('');
    const navigate = useNavigate();
    const saveCourse = () => {
        CourseService.createCourse(course!);
        navigate("/settings_admin")
    }

    const backToSettings = () => {
        navigate("/settings_admin")
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, setError: React.Dispatch<React.SetStateAction<boolean>>, setErrorMessage: React.Dispatch<React.SetStateAction<string>>) => {
        const { name, value } = event.target;
        const inputValue = value.trim();
        const inputLength = inputValue.length;

        if (name === 'name' && (inputLength < 1 || inputLength > 255)) {
            setError(true);
            setErrorMessage('Name must be between 1 and 255 characters');
          } else if (name === 'description' && (inputLength < 1 || inputLength > 5000)) {
            setError(true);
            setErrorMessage('Description must be between 1 and 5000 characters');
          } else {
            setError(false);
            setErrorMessage('');
        }

        setCourse({
            ...course!,
            [name]: inputValue
        });
    };

    return (
        <div>
            <div>
                <h3> Create Course </h3>
                <div>
                    <form>
                        <div>
                            <label>Name</label>
                            <input
                                type="string"
                                placeholder="name"
                                name="name"
                                className={`form-control ${nameError ? 'border-red-500' : ''}`}
                                value={course?.name}
                                onChange={(e) => handleInputChange(e, setNameError, setNameErrorMessage)}
                            ></input>
                            {nameErrorMessage && <p className="text-muted">{nameErrorMessage}</p>}
                        </div>

                        <div>
                            <label>Description</label>
                            <input
                                type="string"
                                placeholder="description"
                                name="description"
                                className={`form-control ${descriptionError ? 'border-red-500' : ''}`}
                                value={course?.description}
                                onChange={(e) => handleInputChange(e, setDescriptionError, setDescriptionErrorMessage)}
                            ></input>
                            {descriptionErrorMessage && <p className="text-muted">{descriptionErrorMessage}</p>}
                        </div>
                        <div>
                            <label>backgroundImage</label>
                            <input
                                type="string"
                                placeholder="backgroundImage"
                                name="backgroundImage"
                                className="form-control"
                                value={course?.backgroundImage}
                                onChange={(e) => {
                                    setCourse({
                                        ...course!,
                                        [e.target.name]: e.target.value,
                                    });
                                }}
                            ></input>
                        </div>
                        <div>
                            <label>imageResource</label>
                            <input
                                type="string"
                                placeholder="imageResource"
                                name="imageResource"
                                className="form-control"
                                value={course?.imageResource}
                                onChange={(e) => {
                                    setCourse({
                                        ...course!,
                                        [e.target.name]: e.target.value,
                                    });
                                }}
                            ></input>
                        </div>
                        <button className='btn btn-success' disabled={nameError || descriptionError} onClick={saveCourse}>add</button>
                        <button className='btn btn-danger' onClick={backToSettings}>back</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateCourse;
