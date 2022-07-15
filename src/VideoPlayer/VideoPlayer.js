
import React from "react";
// import video from './2021-09-14 20.34.11.mp4'

export class VideoPlayer extends React.Component {

    state={isPlaying: false,}

    videoRef = React.createRef();
    
    changeIsPlaying = (e) =>{
        const {isPlaying} = this.state

        if(isPlaying === false){
            this.videoRef.current.play()
            this.setState({isPlaying: true})
            e.target.innerText = 'Pause'

        }else{
            this.videoRef.current.pause()
            this.setState({isPlaying: false})
            e.target.innerText = 'Play'
        }
    }

    // changeButtonText = (isPlay) => {
    //     console.log(isPlay)
    //     if(isPlay === true){
    //         return 'Pause'
    //     }else{
    //         return 'Play'
    //     }
    // }


    render(){
        return(
            <>
            <video ref={this.videoRef}>
               <source src="https://media.istockphoto.com/videos/calm-surface-of-a-lake-in-the-forest-reflecting-the-beautiful-mount-video-id864526000"/>
            </video>
            <div>
                <button onClick={this.changeIsPlaying}>
                   Play
                </button> 
            </div>
            
            </>
        )
    }
}