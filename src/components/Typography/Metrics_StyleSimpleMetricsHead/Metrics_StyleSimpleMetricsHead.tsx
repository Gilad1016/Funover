import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Buttons_ButtonTypePrimaryDarkS } from '../Buttons_ButtonTypePrimaryDarkS/Buttons_ButtonTypePrimaryDarkS';
import classes from './Metrics_StyleSimpleMetricsHead.module.css';

interface Props {
  className?: string;
}
/* @figmaId 76:1727 */
export const Metrics_StyleSimpleMetricsHead: FC<Props> = memo(function Metrics_StyleSimpleMetricsHead(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.metric1}>
        <div className={classes.cupsOfCoffee}>Cups of coffee</div>
        <div className={classes._32}>32</div>
        <div className={classes.designingThisSection}>Designing this section</div>
      </div>
      <div className={classes.metric2}>
        <div className={classes.languagesSpoken}>Languages spoken</div>
        <div className={classes._17}>17</div>
        <div className={classes.onOurTableInThePub}>On our table in the pub</div>
      </div>
      <div className={classes.metric3}>
        <div className={classes.teamMembers}>Team members</div>
        <div className={classes._412}>412</div>
        <div className={classes.workingRightNow}>Working right now</div>
      </div>
      <div className={classes.metric4}>
        <div className={classes.dollarsSpentToday}>Dollars spent today</div>
        <div className={classes._2142}>2,142</div>
        <div className={classes.onKhachapuriImeruli}>On khachapuri imeruli</div>
      </div>
      <div className={classes.someOfOurMilestones}>Some of our milestones</div>
      <div className={classes.weVeBeenReallyBusyThisYearMaki}>
        We’ve been really busy this year making thing like this happen
      </div>
      <div className={classes.divider}></div>
      <Buttons_ButtonTypePrimaryDarkS className={classes.buttons} />
    </div>
  );
});
