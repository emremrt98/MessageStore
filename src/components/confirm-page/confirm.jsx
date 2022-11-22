import './confirm.scss';
import Table from 'react-bootstrap/Table';
import { AiFillCheckCircle, AiFillDelete } from 'react-icons/ai';

export default function Confirm({ userMessage, setUserMessage, setViewMessage }) {

    const handleChecked = (id) => {
        setViewMessage(prevList => {
            const newItem = userMessage.filter((prevList) => (prevList.id == id))
            return ([...prevList, ...newItem]);
        })
        
        handleDelete(id);
    }

    const handleDelete = (id) => {
        setUserMessage((prevList) => (prevList.filter(userId => (userId.id != id))));
    }

    return (

        <div className='confirm-section'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Adı ve Soyadı</th>
                        <th>Mesaj</th>
                        <th>Onayla/Reddet</th>
                    </tr>
                </thead>
                <tbody>
                    {userMessage.map((messageData, index) => (
                        <tr key={index}>
                            <td>{messageData.id}</td>
                            <td>{messageData.name}</td>
                            <td>{messageData.message}</td>
                            <td><AiFillCheckCircle onClick={() => handleChecked(messageData.id)} className='confirm-section__icon confirm-section__icon--checked' />
                                <AiFillDelete onClick={() => handleDelete(messageData.id)} className='confirm-section__icon confirm-section__icon--delete' />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}