import { forwardRef, useImperativeHandle } from "react";

const FinishingUp = forwardRef(({className},ref) => {
    
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
            <h1>FinishingUp</h1>
        </div>
    )
});

export default FinishingUp;