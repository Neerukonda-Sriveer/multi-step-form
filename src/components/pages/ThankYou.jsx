import ThankYouImg from '../../images/icon-thank-you.svg'
import Classes from './ThankYou.module.scss'

export default function ThankYou({
    className
}){
    return(
        <div className={`${className} ${Classes['page']}`}>
            <img className={`${Classes['img']}`} src={ThankYouImg} alt="thank you" />
            <h1 className={`${Classes['heading']}`}>Thank you!</h1>
            <p className={`${Classes['paragraph']}`}>Thanks for confirming your subscription! we hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
        </div>
    )
}