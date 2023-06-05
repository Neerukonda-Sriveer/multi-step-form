export default function PageSelector({
    pageNumber,
    setPageNumber
}){

    function setPage(number){
        setPageNumber(number);
    }

    return(
        <>
            <input onClick={() => setPage(1)} checked={pageNumber === 1} type="radio" id="PersonalInfo" name="Pages" value="1" />
            <label for="PersonalInfo">Page 1</label><br />
            
            <input onClick={() => setPage(2)} checked={pageNumber === 2} type="radio" id="PlanSelector" name="Pages" value="2" />
            <label for="PlanSelector">Page 2</label><br />
            
            <input onClick={() => setPage(3)} checked={pageNumber === 3} type="radio" id="PickAddOns" name="Pages" value="3" />
            <label for="PickAddOns">Page 3</label><br/>

            <input onClick={() => setPage(4)} checked={pageNumber===4 || pageNumber === 5} type="radio" id="FinishingUp" name="Pages" value="4" />
            <label for="FinishingUp">Page 4</label>
        </>
    );
}