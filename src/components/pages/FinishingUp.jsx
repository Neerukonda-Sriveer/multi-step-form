import { forwardRef, useImperativeHandle } from "react";

import PageHeading from '../ui/PageHeading';
import Summary from "../Summary";

const FinishingUp = forwardRef(({className,formData,setFormData,setPageNumber},ref) => {
    
    function validateInput(){
        return true;
    }
    
    useImperativeHandle(ref,() => {
        return {
            validateInput
        }
    });

    return(
        <div className={className}>
            <PageHeading 
                headingText='Finishing Up'
                subtitleText='Double-check everything looks OK before confirming.'
            />
            <Summary 
                formData={formData}
                setPageNumber={setPageNumber}
            />
        </div>
    )
});

export default FinishingUp;