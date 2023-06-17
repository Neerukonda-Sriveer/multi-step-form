import Classes from './PageAdvancer.module.scss';
import Button from './ui/Button';

export default function PageAdvancer({
    pageNumber,
    setPageNumber,
    pageViewerRef
}){

    function toNextPage(){
        //this function cannot be called if the next button is hidden; try to hide it instead of doing too much validation here
        if(pageViewerRef.current.validateCurrentPage() === false)
            return;
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
        <div hidden={hidePreviousButton() && hideNextButton()} className={`${Classes['page-advancer-wrapper']}`}>
            <div className={`${Classes['page-advancer']}`}>
                <div>
                    <Button className='ghost cursor-link' hidden={hidePreviousButton()} onClick={toPreviousPage}>Go Back</Button>
                </div>
                <div>
                    <Button className='primary cursor-link w-12-fix' hidden={hideNextButton()} onClick={toNextPage}>{nextText}</Button>
                </div>
            </div>
        </div>
    );
}