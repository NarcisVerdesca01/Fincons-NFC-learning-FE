import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseLessonService from "../../../services/CourseLessonService";
import Content from "../../../models/ContentModel";
import Lesson from "../../../models/LessonModel";
import ContentService from "../../../services/ContentService";
import LessonService from "../../../services/LessonService";
import ContentLesson from "../../../models/ContentLessonModel";



const CreateAssociationContentLesson = () => {
    const [contentId, setContentId] = useState<number | any>();
    const [lessonId, setLessonId] = useState<number | any>();
    const [contents, setContents] = useState<Content | any>();
    const [lessons, setLessons] = useState<Lesson | any>();
    const navigate = useNavigate();

    useEffect(() => {
        ContentService.getContentsWithoutLessonAssociated().then((res1) => {
            setContents(res1.data);
        })
    }, []);

    useEffect(() => {
        LessonService.getNotAssociatedLessonsWithContent().then((res2) => {
            setLessons(res2.data);
        })
    }, []);

  

    const saveAssociation = () => {
        LessonService.associateLessonContent(lessonId, contentId);
        navigate("/settings_tutor")        
    }

    const backToSettings = () => {
        navigate("/settings_tutor")
    }

    return (
        <div>
            <div>
                <h3> Associate Content with Lesson </h3>
                <div>
                    <form>
                        <div className="form-group">
                            <label>Content</label>
                            <select
                                name="content"
                                className="form-select"
                                aria-label="Default select example"
                                onChange={(e) => {
                                    setContentId(parseInt(e.target.value));}}>
                                <option selected>Select the Content</option>
                                {contents?.map((content: Content, index: any) => {
                                    return (
                                        <option key={index} value={content.id}>{content?.content}</option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Lesson</label>
                            <select
                                name="lesson"
                                className="form-select"
                                aria-label="Default select example"
                                onChange={(e) => {
                                    setLessonId(parseInt(e.target.value));}}>
                                <option selected>Select the Answer</option>
                                {lessons?.map((lesson: Lesson, index: any) => {
                                    return (
                                        <option key={index} value={lesson?.id}>{lesson?.title}</option>
                                    );
                                })}
                            </select>
                        </div>

                        <button className='btn btn-success' onClick={saveAssociation}>Associate</button>
                        <button className='btn btn-danger' onClick={backToSettings}>Back</button>
                    </form>
                </div>
            </div> 
        </div>
    );
};

export default CreateAssociationContentLesson;
