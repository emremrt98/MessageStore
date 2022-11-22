export default function MyComment({ viewMessage }) {
    return (
        <div>
            {viewMessage.map((list, index) => (
                <div key={index} className="comment-section__content comment-section__content--flex">
                    <figure className="comment-section__content__item">
                        <img src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png" />
                    </figure>
                    <div className="comment-section__content__item">
                        <p>{list.name}</p>
                        <p>{list.message}</p>
                    </div>
                </div>
            ))}


        </div>
    );
}