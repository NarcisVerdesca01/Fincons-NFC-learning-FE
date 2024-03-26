import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseService from "../../../services/CourseService";
import Course from "../../../models/CourseModel";
import "./CreateCourse.css";

const CreateCourse = () => {
    const [course, setCourse] = useState<Course>({} as Course);
    const [nameError, setNameError] = useState(false);
    const [nameErrorMessage, setNameErrorMessage] = useState("");
    const [backgroundImageErrorMessage, setBackgroundImageErrorMessage] = useState("");
    const [descriptionError, setDescriptionError] = useState(false);
    const [backgroundImageError, setBackgroundImageError] = useState(false);
    const [descriptionErrorMessage, setDescriptionErrorMessage] = useState("");
    const [createDisabled, setCreateDisabled] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const saveCourse = async () => {
        if (!course.name || !course.description || !course.backgroundImage) {
            setErrorMessage("Name, Description, and Background Image fields are required.");
            return;
        } else if (course.name && course.description && course.backgroundImage) {
            CourseService.createCourse(course)
        }
    };

    const backToSettings = () => {
        navigate("/settings_admin");
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const inputValue = value.trim();
        const inputLength = inputValue.length;

        if (name === "name" && (inputLength < 1 || inputLength > 255)) {
            setNameError(true);
            setNameErrorMessage("Name must be between 1 and 255 characters");
        } else {
            setNameError(false);
            setNameErrorMessage("");
        }

        setCourse({ ...course, [name]: inputValue });
        setCreateDisabled(nameError || descriptionError || backgroundImageError || inputLength === 0);
    };

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const inputValue = value.trim();
        const inputLength = inputValue.length;

        if (name === "description" && (inputLength < 1 || inputLength > 5000)) {
            setDescriptionError(true);
            setDescriptionErrorMessage("Description must be between 1 and 5000 characters");
        } else {
            setDescriptionError(false);
            setDescriptionErrorMessage("");
        }

        setCourse({ ...course, [name]: inputValue });
        setCreateDisabled(nameError || descriptionError || backgroundImageError || inputLength === 0);
    };


    const handleBackgroundImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const inputValue = value.trim();
        const inputLength = inputValue.length;

        if (name === "backgroundImage" && (inputLength < 1 || inputLength > 5000)) {
            setBackgroundImageError(true);
            setBackgroundImageErrorMessage("backgroundImage must be between 1 and 5000 characters");
        } else {
            setBackgroundImageError(false);
            setBackgroundImageErrorMessage("");
        }

        setCourse({ ...course, [name]: inputValue });
        setCreateDisabled(nameError || descriptionError || backgroundImageError || inputLength === 0);
    };

    return (
        <div>
            <h3>Create Course</h3>
            <div className="mb-3">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="string"
                            placeholder="Name"
                            name="name"
                            className={`form-control ${nameError ? "border-red-500" : ""}`}
                            value={course?.name || ""}
                            onChange={(e) => handleNameChange(e)}
                        />
                        {nameErrorMessage && <p className="text-muted">{nameErrorMessage}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input
                            type="string"
                            placeholder="Description"
                            name="description"
                            className={`form-control ${descriptionError ? "border-red-500" : ""}`}
                            value={course?.description || ""}
                            onChange={(e) => handleDescriptionChange(e)}
                        />
                        {descriptionErrorMessage && <p className="text-muted">{descriptionErrorMessage}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="backgroundImage">backgroundImage</label>
                        <input
                            type="string"
                            placeholder="backgroundImage"
                            name="backgroundImage"
                            className={`form-control ${backgroundImageError ? "border-red-500" : ""}`}
                            value={course?.backgroundImage || ""}
                            onChange={(e) => handleBackgroundImageChange(e)}
                        ></input>
                        {backgroundImageErrorMessage && <p className="text-muted">{backgroundImageErrorMessage}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="imageResource">imageResource</label>
                        <input
                            type="string"
                            placeholder="imageResource"
                            name="imageResource"
                            className="form-control"
                            value={course?.imageResource || ""}
                            onChange={(e) => {
                                setCourse({
                                    ...course!,
                                    [e.target.name]: e.target.value,
                                });
                            }}
                        ></input>
                    </div>
                    {errorMessage && <p className="text-danger">{errorMessage}</p>}
                    <button
                        type="button"
                        className="btn btn-success"
                        disabled={createDisabled}
                        onClick={saveCourse}
                    >
                        add
                    </button>
                    <button className="btn btn-danger" onClick={backToSettings}>
                        back
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateCourse;