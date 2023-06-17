import Classes from './Summary.module.scss';
import planTypes from '../PlanTypes.js';
import addOns from '../addOns.js';

export default function Summary({formData}){

    if(!formData.planType)
        return <h1>if no planType is selected; dont allow the user into summary</h1>

    const planCostKey = (formData.yearly === false)?'monthly':'yearly';
    const planCostAbbreviation = (formData.yearly)?'yr':'mo';

    const totalAmount = planTypes[formData.planType][planCostKey] + formData.addOns.reduce((prev,current) => {
        return prev + addOns.find((item) => item.name === current)[planCostKey];
    },0);

    return(
        <div className={`${Classes['wrapper']}`}>
            <div className={`${Classes['summary']}`}>
                <div className={`${Classes['planType-summary-box']}`}>
                    <div className={`${Classes['text-box']}`}>
                        <h2 className={`${Classes['planType-heading']}`}>{formData.planType} ({planCostKey})</h2>
                        <a className={`${Classes['link']}`} href='https://www.google.com'>Change</a>
                    </div>
                    <h2 className={`${Classes['planType-cost']}`}>${planTypes[formData.planType][planCostKey]}/{planCostAbbreviation}</h2>
                </div>
                <hr />
                <div className={`${Classes['planType-addOns-box']} ${()}`}>
                    {formData.addOns.map((addOn,index) => <h2 key={`ste-${index}`} className={`${Classes['add-on-entry']}`}>
                        <span className={`${Classes['add-on-entry__heading']}`}>{addOn}</span>
                        <span className={`${Classes['add-on-entry__price']}`}>+${addOns.find((item) => item.name === addOn)[planCostKey]}/{planCostAbbreviation}</span>
                    </h2>)}
                </div>
            </div>
            <h2 className={`${Classes['total']}`}>
                <span className={`${Classes['total-heading']}`}>Total (per {(formData.yearly === true)?'year':'month'})</span>
                <span className={`${Classes['total-amount']}`}>+${totalAmount}/{planCostAbbreviation}</span>
            </h2>
        </div>
        
    );
}