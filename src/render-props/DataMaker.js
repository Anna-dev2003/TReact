import React, {useState, useEffect} from "react";


export function DataMaker(props) {


    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(props.url)
          .then(res => res.json())
          .then(
            (result) => {
              setPosts(result);
            }
          )
    }, [])

        return <>

            {props.renderDataUrl(posts)}
            {/* <ul>
            {posts.map(post => (
            <li key={post.id}>
                {post.title}
            </li>
            ))}
            </ul> */}
        </>
}