import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from "./ApprovalCard";

const App = ()=> {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo={"Today at 4:45PM"} comment={"We need to have more pizza choices."} picture={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Alex" timeAgo={"Today at 2:00AM"} comment={"Well...we do have a lot of choices as is."} picture={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jane" timeAgo={"Yesterday at 5:00PM"} comment={"What else can pizzas have on them????"} picture={faker.image.avatar()}/>
            </ApprovalCard>
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector("#root"))