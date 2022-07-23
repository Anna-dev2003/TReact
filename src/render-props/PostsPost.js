import React from "react";

function Post(props){
    const {title, completed, id} = props.post
    return (
        <li key={id}>
            <div>{`Title: ${title} - completed: ${completed}`}</div>
        </li>
    )
}

export function Posts(props){
        return <>
             <div>
                {props.posts.map(post => (
                    <ul key={post.id}>
                        <Post post={post}/>
                    </ul>
                ))}
            </div>
        </>
}