import Classes from './AddOn.module.scss';

export default function AddOn({
    name,description,cost,...inputProps
}){
    return(
        <label className={`${Classes['label']}`}>
            <input className={`${Classes['input']}`} type="checkbox" {...inputProps}/>
            <div className={`${Classes['display-box']}`}>
                <div className={`${Classes['checkbox']}`}></div>
                <div className={`${Classes['text-box']}`}>
                    <div className={`${Classes['text-description-box']}`}>
                        <h2 className={`${Classes['name']}`}>{name}</h2>
                        <h2 className={`${Classes['description']}`}>{description}</h2>
                    </div>
                    <h2 className={`${Classes['cost']}`}>{cost}</h2>
                </div>
            </div>
        </label>
    );
}