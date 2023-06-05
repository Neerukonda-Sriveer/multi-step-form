import { useState } from "react"
import PageViewer from "./components/PageViewer"
import PageSelector from "./components/PageSelector";

export default function App(){

    const [pageNumber,setPageNumber] = useState(1);
    
    function nextPage(){
        if(pageNumber < 5)
            setPageNumber(pageNumber + 1);
    }
    function previousPage(){
        if(pageNumber > 1)
            setPageNumber(pageNumber - 1);
    }

    return(
        <>
            <PageSelector pageNumber={pageNumber} setPageNumber={setPageNumber}/>
            <PageViewer pageNumber={pageNumber} />
            <button onClick={previousPage}>previous</button>
            <button onClick={nextPage}>next</button>
        </>
    )
}