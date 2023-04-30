import React from 'react';
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
    console.log(props)
    return (
        <div>
            <div className={"post"}>
                <div className={"post-content"}>
                    <strong>{props.post.id}. {props.post.title}</strong>
                    <div>
                        {props.post.body}
                    </div>
                </div>
                <div className={"post-btns"}>
                    <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
                </div>
            </div>
        </div>
    );
};

export default PostItem;