import { forwardRef, useImperativeHandle } from "react";
import AddOnsList from '../../addOns';
import AddOn from '../AddOn'; //this is the component

import PageHeading from "../ui/PageHeading";

const PickAddOns = forwardRef(({className,formData,setFormData},ref) => {
    
    function validateInput(){
        return true;
    }

    useImperativeHandle(ref,() => {
        return{
            validateInput
        }
    });

    function setAddOns(sAddOn,bClicked){
        if(bClicked === true){
            //add this addon to the selection
            setFormData({
                ...formData,
                addOns: [sAddOn,...formData.addOns]
            });
        }
        else if(bClicked === false){
            //remove this addon from the selection
            setFormData({
                ...formData,
                addOns: formData.addOns.filter((addOn) => addOn !== sAddOn)
            });
        }
        else{
            throw new Error('bClicked must either be true or false, it cant be something else');
        }
    }

    return(
        <div className={className}>
             <PageHeading 
                headingText="Pick add-ons"
                subtitleText="Add-ons help enhance your gaming experience."
            />
            <div className="spacer-2-vertical-desktop spacer-3-vertical-mobile">
                {
                    AddOnsList.map((element) => {
                        return(
                            <AddOn 
                                key={element.id + 'AddOn'}
                                name={element.name}
                                description={element.comment}
                                cost={(formData.yearly)?`+$${element.yearly}/yr`:`+$${element.monthly}/mo`}
                                onChange={(event) => {setAddOns(element.name,event.target.checked)}}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
})
export default PickAddOns;