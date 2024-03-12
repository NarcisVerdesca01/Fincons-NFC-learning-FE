import { useEffect, useState } from "react";
import CourseModel from "../../models/CourseModel";
import { useNavigate } from "react-router-dom";
import CourseService from "../../services/CourseService";
import "./Course.css";
import Header from "../header/Header";

interface Props {
  changeFilterHandler: React.ChangeEventHandler<HTMLInputElement>;
  tableData: any;
  setTableData: React.Dispatch<React.SetStateAction<any | undefined>>;
  filter: string | undefined;
  setfilter: React.Dispatch<React.SetStateAction<string | undefined>>;
  toDisplay: string | undefined;
}

const Course = (props: Props) => {
  const [courseList, setCourseList] = useState<CourseModel[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    CourseService.getCourses().then((res) => {
      setCourseList(res.data.data);
    });
  }, []);

  const gotToPage = (idCorso: any) => {
    navigate("/course_page_presentation/" + idCorso);
  };

  const [search, setSearch] = useState<string>("");
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  const fiteredData = props.tableData?.data?.flter((course: any) => {
    return course.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <Header />
      <div className={`containerCourse`}>
        <div className={`containerTitleCourse`}>
          <h1>Our Course</h1>
        </div>
        <div className={`containerButtonSearch`}>
          <button className={`buttonSearch btn-filter`}>
            <input
              type="text"
              className={`inputButtonSearch`}
              placeholder="Search for names"
              aria-label="Search for names"
              aria-describedby="basic-addon1"
              value={search}
              onChange={handleSearchChange}
            />
          </button>
        </div>
        <div className={`containerCardCourse`}>
          {courseList.map((course: CourseModel) => (
            <div className={`cardCourse`}>
              <div
                className={`containerImgCardCourse`}
                onClick={() => gotToPage(course?.id)}
              >
                <img
                  src={
                    course.backgroundImage
                      ? course.backgroundImage
                      : "https://cdn.icon-icons.com/icons2/510/PNG/512/person_icon-icons.com_50075.png"
                  }
                  alt={course.name}
                  className={`imgCardCourse`}
                />
              </div>
              <div className={`titleCardCourse`}>
                <h3>{course.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
