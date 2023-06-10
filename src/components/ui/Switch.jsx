import Classes from './Switch.module.scss';

export default function Switch({
    labelOne,
    labelTwo,
    checkedStateVariable,
    onChange,
    ...inputProps
}){

    return(
        <div className={`${Classes['switch']}`}>
            <input readOnly={true} checked={checkedStateVariable} className={`${Classes['input']}`} type="checkbox" {...inputProps}/>
            <span onClick={() => onChange(false)} className={`${Classes['label']} ${Classes['label-one']}`}>{labelOne}</span>
            <div onClick={() => onChange(!checkedStateVariable)} className={`${Classes['switch-outer-oval']}`}>
                <div className={`${Classes['switch-pug']}`}></div>
            </div>
            <span onClick={() => onChange(true)} className={`${Classes['label']} ${Classes['label-two']}`}>{labelTwo}</span>
        </div>
    );
}