import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseService from "../../../services/CourseService";
import Course from "../../../models/CourseModel";
import "./UpdateCourse.css";

const UpdateCourse = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null);
  const [course, setCourse] = useState<Course>();
  const [nameError, setNameError] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [descriptionError, setDescriptionError] = useState(false);
  const [descriptionErrorMessage, setDescriptionErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    CourseService.getCourses().then((res) => {
      setCourses(res.data);
    });
  }, []);

  useEffect(() => {
    if (selectedCourseId !== null) {
      CourseService.getCourseById(selectedCourseId).then((res) => {
        setCourse(res.data);
      });
    }
  }, [selectedCourseId]);

  const UpdateCourse = () => {
    if (nameError || descriptionError) {
      return;
    }

    CourseService.updateCourse(selectedCourseId!, course!);
    navigate("/settings_admin");
  };

  const backToSettings = () => {
    navigate("/settings_admin");
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setError: React.Dispatch<React.SetStateAction<boolean>>,
    setErrorMessage: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const { name, value } = event.target;
    const inputValue = value;
    const inputLength = inputValue.length;

    if (name === "name" && (inputLength < 1 || inputLength > 255)) {
      setError(true);
      setErrorMessage("Name must be between 1 and 255 characters");
    } else if (
      name === "description" &&
      (inputLength < 1 || inputLength > 5000)
    ) {
      setError(true);
      setErrorMessage("Description must be between 1 and 5000 characters");
    } else {
      setError(false);
      setErrorMessage("");
    }

    setCourse({
      ...course!,
      [name]: inputValue,
    });
  };

  return (
    <div>
      <div>
        <h3 className="titleModal">Update Course</h3>
        <div>
          <form>
            <div className="form-group">
              <label className="labelModal">Course</label>
              <select
                name="course"
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => {
                  setSelectedCourseId(Number(e.target.value));
                }}
              >
                <option selected>Select the Course to update</option>
                {courses.map((course) => {
                  return (
                    <option key={course.id} value={course.id}>
                      {course.name}
                    </option>
                  );
                })}
              </select>
            </div>
            {course && (
              <>
                <div>
                  <label className="labelModal">Name</label>
                  <input
                    type="string"
                    placeholder={course.name}
                    name="name"
                    className={`form-control ${
                      nameError ? "border-red-500" : ""
                    }`}
                    value={course.name}
                    onChange={(e) =>
                      handleInputChange(e, setNameError, setNameErrorMessage)
                    }
                  ></input>
                  {nameErrorMessage && (
                    <p className="text-muted">{nameErrorMessage}</p>
                  )}
                </div>
                <div>
                  <label className="labelModal">Description</label>
                  <input
                    type="string"
                    placeholder="description"
                    name="description"
                    className={`form-control ${
                      descriptionError ? "border-red-500" : ""
                    }`}
                    value={course.description}
                    onChange={(e) =>
                      handleInputChange(
                        e,
                        setDescriptionError,
                        setDescriptionErrorMessage
                      )
                    }
                  ></input>
                  {descriptionErrorMessage && (
                    <p className="text-muted">{descriptionErrorMessage}</p>
                  )}
                </div>
                <div>
                  <label className="labelModal">Background Image</label>
                  <input
                    type="string"
                    placeholder="backgroundImage"
                    name="backgroundImage"
                    className="form-control"
                    value={course.backgroundImage}
                    onChange={(e) => {
                      setCourse({
                        ...course,
                        backgroundImage: e.target.value,
                      });
                    }}
                  ></input>
                </div>
                <div>
                  <label className="labelModal">Image Resource</label>
                  <input
                    type="string"
                    placeholder="Image Resource"
                    name="imageResource"
                    className="form-control"
                    value={course.imageResource}
                    onChange={(e) => {
                      setCourse({
                        ...course,
                        imageResource: e.target.value,
                      });
                    }}
                  ></input>
                </div>
                <div className="containerButtonModal">
                  <button
                    className="buttonCheck"
                    onClick={UpdateCourse}
                    disabled={nameError || descriptionError}
                  >
                    <span className="frontCheck">
                      <i className="bi bi-check2"></i>
                    </span>
                  </button>
                  <button className="buttonReturn" onClick={backToSettings}>
                    <span className="frontReturn">
                      <i className="bi bi-arrow-left"></i>
                    </span>
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCourse;
