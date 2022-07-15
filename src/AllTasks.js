
import React from "react";

// import { App } from "./App";

import './App.css'
import { AppWithContext } from "./AppWithContext";
import { DataProvider } from "./Context";
import { Refs } from "./refs/Refs";
import { VideoPlayer } from "./VideoPlayer/VideoPlayer";



export function AllTasks() {
    return (
        <div className="container">
            <p>
                task 1 part1
            </p>
            {/* <App/> */}

            <p>
                task-1 part-2
            </p>
            {/* <DataProvider>
                <AppWithContext />
            </DataProvider> */}

            <p>
                task-3 part-1
            </p>
            {/* <Refs/> */}

            <p>
                task-3 part-2
            </p>
            <VideoPlayer/>
    
            


        </div>
    )
}

// export AllTasks