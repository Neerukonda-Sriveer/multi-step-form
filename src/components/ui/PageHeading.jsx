import Classes from './PageHeading.module.scss';

export default function PageHeading({headingText,subtitleText}){
    return(
        <div className={Classes['heading-box']}>
            <h1 className={Classes['heading']}>{headingText}</h1>
            <h2 className={Classes['subtitle']}>{subtitleText}</h2>
        </div>
    );
}