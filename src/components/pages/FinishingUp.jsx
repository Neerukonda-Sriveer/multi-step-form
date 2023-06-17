import { forwardRef, useImperativeHandle } from "react";

import PageHeading from '../ui/PageHeading';
import Summary from "../Summary";

const FinishingUp = forwardRef(({className,formData,setFormData},ref) => {
    
    function ValidateInput(){
        return true;
    }
    
    useImperativeHandle(ref,() => {
        return {
            ValidateInput
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
            />
        </div>
    )
});

export default FinishingUp;