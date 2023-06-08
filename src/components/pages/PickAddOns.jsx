import { forwardRef, useImperativeHandle } from "react";
import AddOns from '../../addOns';

const PickAddOns = forwardRef(({className},ref) => {
    
    function validateInput(){
        return true;
    }

    useImperativeHandle(ref,() => {
        return{
            validateInput
        }
    });

    return(
        <div className={className}>
            <h1>PickAddOns</h1>
            {
                AddOns.map((element) => {
                    return(
                        <label key={element.id + 'fd'} >
                            {element.name}
                            <input type="checkbox" />
                        </label>
                    );
                })
            }
        </div>
    );
})
export default PickAddOns;