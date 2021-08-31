import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" timeAgo="Today 6:00pm" blogDesc="Hiya 1" imgSrc={faker.image.avatar()} />
            <CommentDetail author="Alex" timeAgo="Today 5:00pm" blogDesc="Hiya 2" imgSrc={faker.image.avatar()} />
            <CommentDetail author="Jane" timeAgo="Today 4:00pm" blogDesc="Hiya 3" imgSrc={faker.image.avatar()} />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));