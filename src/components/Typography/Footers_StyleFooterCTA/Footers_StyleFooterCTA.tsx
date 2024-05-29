import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { CheckIcon2 } from './CheckIcon2.js';
import { CheckIcon3 } from './CheckIcon3.js';
import { CheckIcon4 } from './CheckIcon4.js';
import { CheckIcon } from './CheckIcon.js';
import classes from './Footers_StyleFooterCTA.module.css';

interface Props {
  className?: string;
  swap?: {
    check?: ReactNode;
    check2?: ReactNode;
    check3?: ReactNode;
    check4?: ReactNode;
  };
}
/* @figmaId 83:173 */
export const Footers_StyleFooterCTA: FC<Props> = memo(function Footers_StyleFooterCTA(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.startYourFreeTrial}>Start your free trial</div>
      <div className={classes.companyLinks}>
        <div className={classes.ourCompany}>Our Company</div>
        <div className={classes.ourTeam}>Our Team</div>
        <div className={classes.companyVision}>Company Vision</div>
        <div className={classes.ourHistory}>Our History</div>
        <div className={classes.investorys}>Investorys</div>
      </div>
      <div className={classes.resourcesLinks}>
        <div className={classes.ourResources}>Our Resources</div>
        <div className={classes.theBlog}>The Blog</div>
        <div className={classes.downloads}>Downloads</div>
        <div className={classes.changeLog}>Change Log</div>
        <div className={classes.slackChannel}>Slack Channel</div>
      </div>
      <div className={classes.productLinks}>
        <div className={classes.ourProduct}>Our Product</div>
        <div className={classes.newFeatures}>New Features</div>
        <div className={classes.roadmap}>Roadmap</div>
        <div className={classes.productDemo}>Product Demo</div>
        <div className={classes.pricing}>Pricing</div>
      </div>
      <div className={classes.divider}></div>
      <div className={classes.input_Email}>
        <div className={classes.cTA}>
          <div className={classes.signUp}>Sign up</div>
        </div>
        <div className={classes.placeholder}>Enter your email</div>
      </div>
      <div className={classes.benefitPoints}>
        <div className={classes.benefitPoint}>
          <div className={classes.frame14}>
            <div className={classes.rectangle5}></div>
            <div className={classes.check}>{props.swap?.check || <CheckIcon className={classes.icon} />}</div>
          </div>
          <div className={classes.allFeatures}>All features</div>
        </div>
        <div className={classes.benefitPoint2}>
          <div className={classes.frame142}>
            <div className={classes.rectangle52}></div>
            <div className={classes.check2}>{props.swap?.check2 || <CheckIcon2 className={classes.icon2} />}</div>
          </div>
          <div className={classes.unlimitedProjects}>Unlimited projects</div>
        </div>
        <div className={classes.benefitPoint3}>
          <div className={classes.frame143}>
            <div className={classes.rectangle53}></div>
            <div className={classes.check3}>{props.swap?.check3 || <CheckIcon3 className={classes.icon3} />}</div>
          </div>
          <div className={classes.freeOnboarding}>Free onboarding</div>
        </div>
        <div className={classes.benefitPoint4}>
          <div className={classes.frame144}>
            <div className={classes.rectangle54}></div>
            <div className={classes.check4}>{props.swap?.check4 || <CheckIcon4 className={classes.icon4} />}</div>
          </div>
          <div className={classes.noPaymentNeeded}>No payment needed</div>
        </div>
      </div>
      <div className={classes.logo}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>Quickly</span>
          <span className={classes.label2}>.</span>
        </p>
      </div>
    </div>
  );
});
