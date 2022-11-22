import Form from './form';
import MyComment from './myComment';
import './comment.scss';
import { useEffect } from 'react';
export default function Comment({ userMessage, setUserMessage, viewMessage }) {

    return (
        <div className='comment-section'>
            <Form userMessage={userMessage} setUserMessage={setUserMessage} />
            <MyComment viewMessage={viewMessage} />
        </div>
    );
}