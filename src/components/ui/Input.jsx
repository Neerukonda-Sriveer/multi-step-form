import Classes from './Input.module.scss';

export default function Input({labelText,placeholderText,errorText,inErrorState,...inputProps}){
    return(
        <label className={`${Classes['label']} ${(inErrorState===true)?Classes['in-error-state']:''}`}>
            <div className={`${Classes['text-container']}`}>
                <span className={`${Classes['label-text']}`}>{labelText}</span>
                <span className={`${Classes['error-text']}`}>{errorText}</span>
            </div>
            <input className={`${Classes['input']}`} type="text" placeholder={placeholderText} {...inputProps} />
        </label>
    );
}