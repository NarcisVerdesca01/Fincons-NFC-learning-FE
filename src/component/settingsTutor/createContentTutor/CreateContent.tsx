import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Content from "../../../models/ContentModel";
import ContentService from "../../../services/ContentService";

const CreateContent = () => {
  const [content, setContent] = useState<Content>();
  const navigate = useNavigate();

<<<<<<< HEAD
    const saveContent = (event: FormEvent) => {
        event.preventDefault();
        ContentService.createContent(content!);
        navigate("/settings_tutor")
    }
=======
  const saveContent = (event: FormEvent) => {
    event.preventDefault();
    console.log(content);
    ContentService.createContent(content!);
    navigate("/settings_tutor");
  };
>>>>>>> 67f5251 (fixed button on modal in SettingsTutor)

  const backToSettings = () => {
    navigate("/settings_tutor");
  };

  return (
    <div>
      <div>
        <h3 className="titleModal"> Create Content </h3>
        <div>
          <form>
            <div>
<<<<<<< HEAD
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
                                }}
                            ></input>
                        </div>
                   

                        <button className='btn btn-success' onClick={saveContent}>Create Content</button>
                        <button className='btn btn-danger' onClick={backToSettings}>Back</button>
                    </form>
                </div>
=======
              <label className="labelModal">Resource Url</label>
              <input
                type="string"
                placeholder="Url"
                name="text"
                className="form-control"
                value={content?.content}
                onChange={(e) => {
                  setContent({
                    ...content!,
                    content: e.target.value,
                  });
                  console.log(content);
                }}
              ></input>
>>>>>>> 67f5251 (fixed button on modal in SettingsTutor)
            </div>
            <div className="containerButtonModal">
              <button className="buttonCheck" onClick={saveContent}>
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

export default CreateContent;
