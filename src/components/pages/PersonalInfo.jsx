import { forwardRef, useImperativeHandle, useState } from "react";
import Input from '../ui/Input';
import PageHeading from "../ui/PageHeading";

const PersonalInfo = forwardRef(({className,formData,setFormData},ref) => {
    
    const [nameErrorText,setNameErrorText] = useState('Please enter a valid name');
    const [nameErrorState,setNameErrorState] = useState(false);

    const [emailErrorText,setEmailErrorText] = useState('Please enter a valid email');
    const [emailErrorState,setEmailErrorState] = useState(false);

    const [phoneNumberErrorText,setPhoneNumberErrorText] = useState('Please enter a valid phone number');
    const [phoneNumberErrorState,setPhoneNumberErrorState] = useState(false);

    //this function returns false and adds in all the little red messages on the inputs if the page is not completely filled; returns true if page is completely filled.
    function validateInput(){
        let flag =true;

        //see if name is valid
        if(!formData.name){
            flag = false;
            setNameErrorState(true);
            setNameErrorText('Name required')
        }
        else if(!formData.name.match(/^[A-Za-z]+((\s)?([A-Za-z])+)*$/)){
            flag = false;
            setNameErrorState(true);
            setNameErrorText('Letters and spaces only')
        }
        else{
            setNameErrorState(false);
            setNameErrorText('');
        }


        if(!formData.emailId){
            flag = false;
            setEmailErrorState(true);
            setEmailErrorText('Email required')
        }
        else if(!formData.emailId.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)){
            flag = false;
            setEmailErrorState(true);
            setEmailErrorText('Email invalid')
        }
        else{
            setEmailErrorState(false);
            setEmailErrorText('');
        }


        if(!formData.phoneNumber){
            flag = false;
            setPhoneNumberErrorState(true);
            setPhoneNumberErrorText('Phone Required')
        }
        else if(!formData.phoneNumber.match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/))
        {
            flag = false;
            setPhoneNumberErrorState(true);
            setPhoneNumberErrorText('Number Invalid')
        }
        else{
            setPhoneNumberErrorState(false);
            setPhoneNumberErrorText('')
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
            <PageHeading 
                headingText="Personal Info"
                subtitleText="Please provide your name, email adress and phone number."
            />
            <div className="spacer-5-vertical-desktop spacer-3-vertical-mobile">
                <Input 
                    labelText='Name'
                    placeholderText='e.g. Stephen King'
                    errorText={nameErrorText}
                    inErrorState={nameErrorState}
                    value={formData.name} 
                    onChange={(event) => setFormData({...formData,name: event.target.value})}
                />
                <Input 
                    labelText='Email Address'
                    placeholderText='e.g. Stephenking@lorem.com'
                    errorText={emailErrorText}
                    inErrorState={emailErrorState}
                    value={formData.emailId} 
                    onChange={(event) => setFormData({...formData,emailId: event.target.value})}
                />
                <Input 
                    labelText='Phone Number'
                    placeholderText='e.g. +1 234 567 890'
                    errorText={phoneNumberErrorText}
                    inErrorState={phoneNumberErrorState}
                    value={formData.phoneNumber} 
                    onChange={(event) => setFormData({...formData,phoneNumber: event.target.value})}
                />
            </div>
        </div>
    )
})

export default PersonalInfo;