import Classes from './PageAdvancer.module.scss';

export default function PageAdvancer({
    pageNumber,
    setPageNumber
}){

    function toNextPage(){
        //no checks are being performed as this function should not be called if the operation cannot be performed..
        setPageNumber(pageNumber+1);
    }

    function toPreviousPage(){
        //no checks are being performed as this function should not be called if the operation cannot be performed..
        setPageNumber(pageNumber-1);
    }

    //will hide the previous button if this button returns true
    function hidePreviousButton(){
        return pageNumber === 1 || pageNumber === 5;
    }

    //will hide the next button if this button returns true
    function hideNextButton(){
        return pageNumber === 5;
    }

    //update text on next button
    let nextText = "Next Step";
    if(pageNumber === 4){
        nextText = "Confirm";
    }

    return(
        <div className={`${Classes['page-advancer']}`}>
            <button hidden={hidePreviousButton()} onClick={toPreviousPage}>Go Back</button>
            <button hidden={hideNextButton()} onClick={toNextPage}>{nextText}</button>
        </div>
    );
}