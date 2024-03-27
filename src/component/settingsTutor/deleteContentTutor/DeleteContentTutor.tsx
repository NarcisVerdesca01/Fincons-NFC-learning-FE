import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Content from "../../../models/ContentModel";
import ContentService from "../../../services/ContentService";

const DeleteContentTutor = () => {
  const [contents, setContents] = useState<Content[]>([]);
  const [selectedContentId, setSelectedContentId] = useState<number | null>(null);
  const [content, setContent] = useState<Content>();
  const [titleError, setTitleError] = useState(false);
  const [titleErrorMessage, setTitleErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    ContentService.getContents().then((res) => {
      setContents(res.data);
    });
  }, []);

  useEffect(() => {
    if (selectedContentId !== null) {
      ContentService.getContentById(selectedContentId).then((res) => {
        setContent(res.data);
      });
    }
  }, [selectedContentId]);

  const deleteContent = () => {
    if (titleError) {
      return;
    }

    ContentService.deleteContent(selectedContentId!);
    navigate("/settings_tutor");
  };

  const backToSettings = () => {
    navigate("/settings_tutor");
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, setError: React.Dispatch<React.SetStateAction<boolean>>, setErrorMessage: React.Dispatch<React.SetStateAction<string>>) => {
    const { title, value } = event.target;
    const inputValue = value.trim();
    const inputLength = inputValue.length;

    if (title === 'title' && (inputLength < 1 || inputLength > 255)) {
      setError(true);
      setErrorMessage('Title must be between 1 and 255 characters');
    } else {
      setError(false);
      setErrorMessage('');
    }

    setContent({
      ...content!,
      content: inputValue
    });
  };

  return (
    <div>
      <div>
        <h3>Delete Content</h3> 
        <div>
          <form>
            <div className="form-group">
              <label>Content</label>
              <select
                name="quiz"
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => {
                  setSelectedContentId(Number(e.target.value));
                }}
              >
                <option selected>Select the Content to delete</option>
                {contents.map((content) => {
                  return (
                    <option key={content.id} value={content.id}>
                      {content.content}
                    </option>
                  );
                })}
              </select>
            </div>
            {content && (
              <>
                <button type="button" className="btn btn-success" onClick={deleteContent} disabled={titleError}>
                  delete
                </button>
                <button className="btn btn-danger" onClick={backToSettings}>
                  back
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
export default DeleteContentTutor;