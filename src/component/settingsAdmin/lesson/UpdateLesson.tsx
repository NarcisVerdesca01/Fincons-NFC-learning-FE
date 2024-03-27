import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Lesson from "../../../models/LessonModel";
import LessonService from "../../../services/LessonService";
import "./UpdateLesson.css";

const UpdateLesson = () => {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [selectedLessonId, setSelectedLessonId] = useState<number | null>(null);
  const [lesson, setLesson] = useState<Lesson>();
  const [updateDisabled, setUpdateDisabled] = useState(true);

  const [titleError, setTitleError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    LessonService.getLessons().then((res) => {
      setLessons(res.data);
    });
  }, []);

  useEffect(() => {
    if (selectedLessonId !== null) {
      LessonService.getLessonById(selectedLessonId).then((res) => {
        setLesson(res.data);
      });
    }
  }, [selectedLessonId]);

  const UpdateLesson = () => {
    LessonService.updateLesson(selectedLessonId!, lesson!);
    navigate("/settings_admin");
  };

  const backToSettings = () => {
    navigate("/settings_admin");
  };

  return (
    <div>
      <div>
        <h3 className="titleModal">Update Lesson</h3>
        <div>
          <form>
            <div className="form-group">
              <label className="labelModal">Lesson</label>
              <select
                name="course"
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => {
                  setSelectedLessonId(Number(e.target.value));
                }}
              >
                <option selected>Select the Course to update</option>
                {lessons.map((lesson) => {
                  return (
                    <option key={lesson.id} value={lesson.id}>
                      {lesson.title}
                    </option>
                  );
                })}
              </select>
            </div>
            {lesson && (
              <>
                <div>
                  <label className="labelModal">Title</label>
                  <input
                    type="string"
                    placeholder={lesson.title}
                    name="name"
                    className={`form-control ${
                      titleError ? "border-red-500" : ""
                    }`}
                    value={lesson.title}
                    onChange={(e) => {
                      if (e.target.value.length > 255) {
                        setTitleError(true);
                      } else {
                        setTitleError(false);
                      }
                      setLesson({
                        ...lesson,
                        title: e.target.value,
                      });
                      setUpdateDisabled(
                        e.target.value.length === 0 || titleError
                      );
                    }}
                  ></input>
                </div>
                <div>
                  <label className="labelModal">Background Image</label>
                  <input
                    type="string"
                    placeholder="Background Image"
                    name="backgroundImage"
                    className="form-control"
                    value={lesson.backgroundImage}
                    onChange={(e) => {
                      setLesson({
                        ...lesson,
                        backgroundImage: e.target.value,
                      });
                    }}
                  ></input>
                </div>
                <div className="containerButtonModal">
                  <button
                    className="buttonCheck"
                    disabled={updateDisabled}
                    onClick={UpdateLesson}
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

export default UpdateLesson;
