import Classes from './PageViewer.module.scss';

import PersonalInfo from './pages/PersonalInfo'; //page 1
import PlanSelector from './pages/PlanSelector'; //page 2
import PickAddOns from './pages/PickAddOns'; //page 3
import FinishingUp from './pages/FinishingUp'; //page 4
import ThankYou from './pages/ThankYou'; //page 5

export default function PageViewer({
    pageNumber
}){

    console.log(pageNumber);

    return(
        <div className={`${Classes['page-viewer']}`}>
            <PersonalInfo   className={`${Classes['page']} ${(pageNumber===1)?Classes['visible']:Classes['hidden']}`} />
            <PlanSelector   className={`${Classes['page']} ${(pageNumber===2)?Classes['visible']:Classes['hidden']}`} />
            <PickAddOns     className={`${Classes['page']} ${(pageNumber===3)?Classes['visible']:Classes['hidden']}`} />
            <FinishingUp    className={`${Classes['page']} ${(pageNumber===4)?Classes['visible']:Classes['hidden']}`} />
            <ThankYou       className={`${Classes['page']} ${(pageNumber===5)?Classes['visible']:Classes['hidden']}`} />
        </div>
    );
}