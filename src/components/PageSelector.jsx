import Classes from './PageSelector.module.scss';
import RadioButton from './ui/RadioButton';

export default function PageSelector({
    pageNumber,
    setPageNumber,
    pageViewerRef,
    numberOfStepsVisited
}){

    function setPage(number){
        //do not allow using this function if we are in thank you page
        if(pageNumber === 5)
            return;

        //going back requires no validation
        if(number < pageNumber){
            setPageNumber(number);
            return;
        }

        //you can only go as front as you have already been using the advancer
        if(pageViewerRef.current.validateCurrentPage() === false || number > numberOfStepsVisited)
            return;
        
        setPageNumber(number);
    }

    return(
        <div className={`${Classes['page-selector']}`}>
            <RadioButton 
                onChange={() => setPage(1)} 
                checked={pageNumber === 1} 
                buttonPageNumber={1} 
                pageNumber={pageNumber}
                name="Pages" value="1"
            />
            <RadioButton 
                onChange={() => setPage(2)} 
                checked={pageNumber === 2} 
                buttonPageNumber={2} 
                pageNumber={pageNumber}
                name="Pages" value="2"
            />
            <RadioButton 
                onChange={() => setPage(3)} 
                checked={pageNumber === 3} 
                buttonPageNumber={3} 
                pageNumber={pageNumber}
                name="Pages" value="3"
            />
            <RadioButton 
                onChange={() => setPage(4)} 
                checked={pageNumber===4 || pageNumber === 5} 
                buttonPageNumber={4} 
                pageNumber={pageNumber}
                name="Pages" value="4"
            />
        </div>
    );
}