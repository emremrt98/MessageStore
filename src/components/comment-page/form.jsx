import { useEffect, useState } from "react";

export default function Form({ userMessage, setUserMessage }) {
    const [nameValue, setNameValue] = useState("");
    const [messageValue, setMessageValue] = useState("");
    const [index, setIndex] = useState(1);
    const addMessage = () => {
        setUserMessage((prevList) => ([...prevList, { id: index, name: nameValue, message: messageValue }]));
        setIndex(index + 1);
        setNameValue("");
        setMessageValue("");
    }
    return (
        <div className="comment-section__form">
            <div className="comment-section__form__item comment-section__form__item--flex">
                <figure className="comment-section__form__item__profile-img">
                    <img src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png" />
                </figure>
                <div className="comment-section__form__item__input">
                    <input value={nameValue} onChange={(e) => setNameValue(e.target.value)} type="text" placeholder="Adınızı Giriniz" />
                    <textarea value={messageValue} onChange={(e) => setMessageValue(e.target.value)} placeholder="Mesajınızı Giriniz" />
                </div>
            </div>
            <div className="comment-section__form__item">
                <button onClick={addMessage}>Mesajı Ekle</button>
            </div>

        </div>
    );
}