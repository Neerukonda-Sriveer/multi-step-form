import { forwardRef, useImperativeHandle, useState } from "react";

import PageHeading from "../ui/PageHeading";
import Switch from '../ui/Switch';
import PlanSelectorWidget from "../PlanSelectorWidget/PlanSelectorWidget";

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

    const [yearly,setYearly] = useState(false);
    function setIsYearly(bValue){
        console.log(bValue);
        setYearly(bValue);
    }

    return(
        <div className={className}>
            <PageHeading 
                headingText="Plan Selector"
                subtitleText="You have the option of monthly or yearly billing."
            />
            <div className="spacer-5-vertical-desktop spacer-3-vertical-mobile">
                <PlanSelectorWidget
                    isMonthly={!yearly}
                />
                <Switch 
                    labelOne='Monthly'
                    labelTwo='Yearly'
                    checkedStateVariable={yearly}
                    onChange={setIsYearly}
                />
            </div>
        </div>
    );
})
export default PlanSelector;