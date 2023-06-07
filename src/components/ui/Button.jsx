import Classes from './Button.module.scss';

export default function Button({className,children,...buttonProps}){
    
    let cn = '';
    if(className){
        cn = className.split(' ')
                    .map((name) => Classes[name])
                    .reduce((prev,curr) => prev = prev + ' ' + curr,'');
    }
    
    return(
        <button className={`${Classes['button']} ${cn}`} {...buttonProps}>{children}</button>
    );
}