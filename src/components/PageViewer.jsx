import Classes from './PageViewer.module.scss';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';

import PersonalInfo from './pages/PersonalInfo'; //page 1
import PlanSelector from './pages/PlanSelector'; //page 2
import PickAddOns from './pages/PickAddOns'; //page 3
import FinishingUp from './pages/FinishingUp'; //page 4
import ThankYou from './pages/ThankYou'; //page 5

const PageViewer = forwardRef(({pageNumber},ref) => {

    function validateCurrentPage(){
        console.log('page viewer validate called!');
        return false;
    }

    useImperativeHandle(ref,()=>{
        return{
            validateCurrentPage    
        }
    });

    const [formData,setFormData] = useState({
        name: '',
        emailId: '',
        phoneNumber: '',
        planType: '',
        yearly: true,
        addOns: []
    });

    const personalInfoRef = useRef();
    const planSelectorRef = useRef();
    const pickAddOnsRef = useRef();
    const finishingUpRef = useRef();

    return(
        <div className={`${Classes['page-viewer']}`}>
            <PersonalInfo
                ref={personalInfoRef}
                className={`${Classes['page']} ${(pageNumber===1)?Classes['visible']:Classes['hidden']}`} 
                formData={formData} setFormData={setFormData}
            />
            <PlanSelector
                ref={planSelectorRef}
                className={`${Classes['page']} ${(pageNumber===2)?Classes['visible']:Classes['hidden']}`}
                formData={formData} setFormData={setFormData}
            />
            <PickAddOns
                ref={pickAddOnsRef}
                className={`${Classes['page']} ${(pageNumber===3)?Classes['visible']:Classes['hidden']}`} 
                formData={formData} setFormData={setFormData}
            />
            <FinishingUp
                ref={finishingUpRef}
                className={`${Classes['page']} ${(pageNumber===4)?Classes['visible']:Classes['hidden']}`} 
                formData={formData} setFormData={setFormData}
            />
            <ThankYou className={`${Classes['page']} ${(pageNumber===5)?Classes['visible']:Classes['hidden']}`} />
        </div>
    );
})
export default PageViewer;