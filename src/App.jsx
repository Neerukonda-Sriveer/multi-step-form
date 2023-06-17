import {useRef, useState } from "react"
import PageViewer from "./components/PageViewer"
import PageSelector from "./components/PageSelector";
import PageAdvancer from "./components/PageAdvancer";

import Classes from './App.module.scss';

export default function App(){
    const [pageNumber,setPageNumber] = useState(1);
    const [numberOfStepsVisited, setnumberOfStepsVisited] = useState(1);
    const pageViewerRef = useRef();

    //can now vist this page with page selector if you made it here
    if(pageNumber > numberOfStepsVisited){
        setnumberOfStepsVisited(pageNumber);
    }

    return(
        <div className={`${Classes['app-container']}`}>
            <PageSelector pageNumber={pageNumber} setPageNumber={setPageNumber} pageViewerRef={pageViewerRef} numberOfStepsVisited={numberOfStepsVisited} />
            <div className={`${Classes['desktop-right-grouper']}`}>
                <PageViewer pageNumber={pageNumber} ref={pageViewerRef} />
                <PageAdvancer pageNumber={pageNumber} setPageNumber={setPageNumber} pageViewerRef={pageViewerRef} />
            </div>
        </div>
    )
}