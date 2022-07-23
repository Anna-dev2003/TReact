import React from "react";
import { DataMaker } from "./DataMaker";
import { Posts } from "./PostsPost";

export function App() {
    const url = 'https://jsonplaceholder.typicode.com/todos?_limit=10'

    return <>
        <div>
            <DataMaker url={url} renderDataUrl={data => {
                return <Posts posts={data}/>
            }}/>
        </div>
        {/* <div>
            <DataMaker url={url} renderDataUrl={data => {
                return <Posts posts={data}/>
            }}/>
        </div> */}
    </>
}