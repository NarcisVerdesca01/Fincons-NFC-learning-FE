import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import Content from "../../../models/ContentModel";
import ContentService from "../../../services/ContentService";

const CreateContent = () => {
    const [content, setContent] = useState<Content>();
    const navigate = useNavigate();

    const saveContent = (event: FormEvent) => {
        event.preventDefault();
        console.log(content)
        ContentService.createContent(content!);
        navigate("/settings_tutor")
    }

    const backToSettings = () => {
        navigate("/settings_tutor")
    }

    return (
        <div>
            <div>
                <h3> Create Content </h3>
                <div>
                    <form>
                        <div>
                            <label>Resource Url</label>
                            <input
                                type="string"
                                placeholder="text"
                                name="text"
                                className="form-control"
                                value={content?.content}
                                onChange={(e) => {
                                    setContent({
                                        ...content!,
                                        content: e.target.value,
                                    });
                                    console.log(content)
                                }}
                            ></input>
                        </div>
                   

                        <button className='btn btn-success' onClick={saveContent}>Create Content</button>
                        <button className='btn btn-danger' onClick={backToSettings}>Back</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateContent;
