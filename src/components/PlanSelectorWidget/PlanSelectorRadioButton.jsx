import Classes from './PlanSelectorRadioButton.module.scss';

export default function PlanSelectorRadioButton({
    name,value,
    imgSrc,imgAlt,
    planName,planCostMonthly,planCostYearly,
    isMonthly,
    ...inputProps
}){
    return(
        <label className={`${Classes['label']}`}>
            <input className={`${Classes['input']}`} type="radio" name={name} value={value} {...inputProps}/>
            <div className={`${Classes['display-wrapper']}`}>
                <img className={`${Classes['img']}`} src={imgSrc} alt={imgAlt} />
                <div className={`${Classes['box']}`}>
                    <h2 className={`${Classes['plan-name']}`}>{planName}</h2>
                    <h2 className={`${Classes['plan-cost']}`}>{(isMonthly === true)?planCostMonthly:planCostYearly}</h2>
                    <h2 className={`${Classes['plan-discount']}`} hidden={isMonthly === true}>2 months free</h2>
                </div>
            </div>
        </label>
    )
}