import Classes from './RadioButton.module.scss';
import StepNames from '../../stepNames.js';

export default function RadioButton({
    name,value,
    buttonPageNumber,pageNumber,...inputProps
}){

    return(
        <label className={`${Classes['label']}`}>
            <input className={`${Classes['input']}`} type="radio" name={name} value={value} {...inputProps}/>
            <h2 className={`${Classes['step-number']}`}>{buttonPageNumber}</h2>
            <div className={`${Classes['desktop-labels']}`}>
                <h3 className={`${Classes['step-number-label']}`}>step {buttonPageNumber}</h3>
                <h3 className={`${Classes['step-name']}`}>{StepNames[buttonPageNumber-1]}</h3>
            </div>
        </label>
    );
}