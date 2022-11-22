import { useEffect, useState } from "react";
import Comment from "./components/comment-page/comment";
import Confirm from "./components/confirm-page/confirm";
import './styles/app.scss';

function App() {
  const [userMessage, setUserMessage] = useState([]);
  const [viewMessage, setViewMessage] = useState([]);

  return (
    <div className="section">
      <div className="section__layout">
        <div className="section__layout__flex">
          <Comment userMessage={userMessage} setUserMessage={setUserMessage} viewMessage={viewMessage} />
          <Confirm userMessage={userMessage} setUserMessage={setUserMessage} setViewMessage={setViewMessage} />
        </div>
      </div>
    </div>
  );
}

export default App;
