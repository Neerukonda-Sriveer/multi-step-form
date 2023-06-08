import { forwardRef, useImperativeHandle } from "react";

const PersonalInfo = forwardRef(({className,formData,setFormData},ref) => {
    
    //this function returns false and adds in all the little red messages on the inputs if the page is not completely filled; returns true if page is completely filled.
    function validateInput(){
        let flag =true;
        if(!formData.name){
            flag = false;
        }
        if(!formData.emailId){
            flag = false;
        }
        if(!formData.phoneNumber){
            flag = false;
        }
        return flag;
    }

    //must definitely return validateInput
    useImperativeHandle(ref,function(){
        return{
            validateInput
        }
    });

    return(
        <div className={className}>
            <h1>PersonalInfo</h1>
            <input
                type="text" 
                value={formData.name} 
                onChange={(event) => setFormData({...formData,name: event.target.value})}
            />
            <input
                type="text" 
                value={formData.emailId} 
                onChange={(event) => setFormData({...formData,emailId: event.target.value})}
            />
            <input
                type="text" 
                value={formData.phoneNumber} 
                onChange={(event) => setFormData({...formData,phoneNumber: event.target.value})}
            />
        </div>
    )
})

export default PersonalInfo;