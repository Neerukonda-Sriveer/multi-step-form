import Classes from './PlanSelectorWidget.module.scss';
import PlanSelectorRadioButton from './PlanSelectorRadioButton';

import ArcadeImg from '../../images/icon-arcade.svg';
import AdvancedImg from '../../images/icon-advanced.svg';
import ProImg from '../../images/icon-pro.svg';

export default function PlanSelectorWidget({
    isMonthly,setSelectedPlan
}){
    return(
        <div className={`${Classes['plan-selector-widget']}`}>
            <PlanSelectorRadioButton 
                name='planSelectorWidget'
                value='arcade'
                imgSrc={ArcadeImg}
                imgAlt='arcade membership icon'
                planName='arcade'
                planCostMonthly='$9/mo'
                planCostYearly='$90/yr'
                isMonthly={isMonthly}
                onChange={(event) => setSelectedPlan(event.target.value)}
            />
            <PlanSelectorRadioButton 
                name='planSelectorWidget'
                value='advanced'
                imgSrc={AdvancedImg}
                imgAlt='advanced membership icon'
                planName='advanced'
                planCostMonthly='$12/mo'
                planCostYearly='$120/yr'
                isMonthly={isMonthly}
                onChange={(event) => setSelectedPlan(event.target.value)}
            />
            <PlanSelectorRadioButton 
                name='planSelectorWidget'
                value='pro'
                imgSrc={ProImg}
                imgAlt='pro membership icon'
                planName='pro'
                planCostMonthly='$15/mo'
                planCostYearly='$150/yr'
                isMonthly={isMonthly}
                onChange={(event) => setSelectedPlan(event.target.value)}
            />
        </div>
        
    );
}