import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseService from "../../../services/CourseService";
import Course from "../../../models/CourseModel";
import "./UpdateCourse.css";

const DeleteCourse = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null);
  const [course, setCourse] = useState<Course>();
  const navigate = useNavigate();

  useEffect(() => {
    CourseService.getCourses().then((res) => {
      setCourses(res.data);
    });
  }, []);

  useEffect(() => {
    if (selectedCourseId !== null) {
      CourseService.getCourseById(selectedCourseId!).then((res) => {
        setCourse(res.data);
      });
    }
  }, [selectedCourseId]);

  const DeleteCourse = () => {
    CourseService.deleteCourse(selectedCourseId!);
    navigate("/settings_admin");
  };

  const backToSettings = () => {
    navigate("/settings_admin");
  };

  return (
    <div>
      <div>
        <h3 className="titleModal">Delete Course</h3>
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
                <option selected>Select the Course to Delete</option>
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
                  <p>{course.name}</p>
                </div>
                <div>
                  <label className="labelModal">Description</label>
                  <p>{course.description}</p>
                </div>
                <div>
                  <label className="labelModal">Background Image</label>
                  <p>{course.backgroundImage}</p>
                </div>
                <div>
                  <label className="labelModal">Image Resource</label>
                  <p>{course.imageResource}</p>
                </div>
                <div className="containerButtonModal">
                  <button className="buttonCheck" onClick={DeleteCourse}>
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

export default DeleteCourse;
