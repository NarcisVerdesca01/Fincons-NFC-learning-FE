import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Lesson from "../../../models/LessonModel";
import LessonService from "../../../services/LessonService";
import "./CreateLesson.css";

const CreateLesson = () => {
  const [lesson, setLesson] = useState<Lesson>();
  const [titleError, setTitleError] = useState(false);
  const [titleErrorMessage, setTitleErrorMessage] = useState("");
  const [createDisabled, setCreateDisabled] = useState(true);
  const navigate = useNavigate();

  const saveLesson = () => {
    if (titleError) {
      return;
    }

    LessonService.createLesson(lesson!);
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

    if (name === "title" && (inputLength < 1 || inputLength > 255)) {
      setError(true);
      setErrorMessage("Title must be between 1 and 255 characters");
    } else {
      setError(false);
      setErrorMessage("");
    }

    setLesson({
      ...lesson!,
      [name]: inputValue,
    });

    setCreateDisabled(inputLength === 0 || titleError);
  };

  return (
    <div>
      <div>
        <h3 className="titleModal"> Create Lesson </h3>
        <div>
          <form>
            <div>
              <label className="labelModal">Title</label>
              <input
                type="string"
                placeholder="Title"
                name="title"
                className={`form-control ${titleError ? "border-red-500" : ""}`}
                value={lesson?.title}
                onChange={(e) =>
                  handleInputChange(e, setTitleError, setTitleErrorMessage)
                }
              ></input>
              {titleErrorMessage && (
                <p className="text-muted">{titleErrorMessage}</p>
              )}
            </div>
            <div>
              <label className="labelModal">Background Image</label>
              <input
                type="string"
                placeholder="Background Image"
                name="backgroundImage"
                className="form-control"
                value={lesson?.backgroundImage}
                onChange={(e) => {
                  setLesson({
                    ...lesson!,
                    [e.target.name]: e.target.value,
                  });
                }}
              ></input>
            </div>
            <div className="containerButtonModal">
              <button
                className="buttonCheck"
                disabled={createDisabled}
                onClick={saveLesson}
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateLesson;
