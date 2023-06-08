import { forwardRef, useImperativeHandle } from "react";

const PlanSelector = forwardRef(({className,formData,setFormData},ref) => {
    
    //this function is used to check if the page is valid and prompt something to the user if it is no
    function validateInput(){
        let flag = true;
        if(!formData.planType){
            flag=false;

        }   
        return flag;
    }

    //must give access to atleast validateInput
    useImperativeHandle(ref,() => {
        return{
            validateInput
        }
    });

    return(
        <div className={className}>
            <h1>PlanSelector</h1>

            <div className="plan-type">
                <h2>select plan type</h2>
                <label>
                    Arcade
                    <input type="radio" value="Arcade" name="plan type" />
                </label>
                <label>
                    Advanced
                    <input type="radio" value="Advanced" name="plan type" />
                </label>
                <label>
                    Pro
                    <input type="radio" value="Pro" name="plan type" />
                </label>    
            </div>

            <div className="montly-slider">
                <label>
                    monthly
                    <input type="checkbox" />
                    yearly
                </label>
            </div>
        </div>
    );
})
export default PlanSelector;