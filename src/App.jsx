import { useState } from "react"
import PageViewer from "./components/PageViewer"
import PageSelector from "./components/PageSelector";
import PageAdvancer from "./components/PageAdvancer";

import Classes from './App.module.scss';

export default function App(){
    const [pageNumber,setPageNumber] = useState(1);
    
    return(
        <div className={`${Classes['app-container']}`}>
            <PageSelector pageNumber={pageNumber} setPageNumber={setPageNumber}/>
            <div className={`${Classes['desktop-right-grouper']}`}>
                <PageViewer pageNumber={pageNumber} />
                <PageAdvancer pageNumber={pageNumber} setPageNumber={setPageNumber} />
            </div>
        </div>
    )
}