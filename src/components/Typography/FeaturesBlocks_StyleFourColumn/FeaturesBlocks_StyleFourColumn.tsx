import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { AlarmIcon } from './AlarmIcon.js';
import { Check_circle_outlineIcon } from './Check_circle_outlineIcon.js';
import classes from './FeaturesBlocks_StyleFourColumn.module.css';
import { FingerprintIcon } from './FingerprintIcon.js';
import { Tab_unselectedIcon } from './Tab_unselectedIcon.js';

interface Props {
  className?: string;
  classes?: {
    divider?: string;
  };
  swap?: {
    alarm?: ReactNode;
    check_circle_outline?: ReactNode;
    tab_unselected?: ReactNode;
    fingerprint?: ReactNode;
  };
}
/* @figmaId 76:1326 */
export const FeaturesBlocks_StyleFourColumn: FC<Props> = memo(function FeaturesBlocks_StyleFourColumn(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.mainFrame}>
        <div className={classes.weReMoreThanJustAnotheProjectM}>
          We’re more than just anothe project management software.
        </div>
        <div className={classes.headling}>What Quickly can do for you</div>
        <div className={classes.blockOne}>
          <div className={classes.frame20}>
            <div className={classes.alarm}>{props.swap?.alarm || <AlarmIcon className={classes.icon} />}</div>
          </div>
          <div className={classes.saveTimeWhenDesigning}>Save time when designing</div>
          <div className={classes.yourNewProjectsAreSimplyAClick}>
            Your new projects are simply a click away with our intuitive creation flow
          </div>
        </div>
        <div className={classes.blockTwo}>
          <div className={classes.frame21}>
            <div className={classes.check_circle_outline}>
              {props.swap?.check_circle_outline || <Check_circle_outlineIcon className={classes.icon2} />}
            </div>
          </div>
          <div className={classes.getUpdatedOnProjects}>Get updated on projects</div>
          <div className={classes.youReceiveNotificationsWheneve}>
            <div className={classes.textBlock}>You receive notifications whenever</div>
            <div className={classes.textBlock2}>a team member finishes a task</div>
          </div>
        </div>
        <div className={classes.blockThree}>
          <div className={classes.frame22}>
            <div className={classes.tab_unselected}>
              {props.swap?.tab_unselected || <Tab_unselectedIcon className={classes.icon3} />}
            </div>
          </div>
          <div className={classes.worksOnTheWeb}>Works on the web</div>
          <div className={classes.donTDownloadAnApplicationWhenY}>
            Don’t download an application when you can just work in browser
          </div>
        </div>
        <div className={classes.blockFour}>
          <div className={classes.frame23}>
            <div className={classes.fingerprint}>
              {props.swap?.fingerprint || <FingerprintIcon className={classes.icon4} />}
            </div>
          </div>
          <div className={classes.highlySecureInterface}>Highly secure interface</div>
          <div className={classes.useBiometrics2FAAndMoreToEnsur}>
            <div className={classes.textBlock3}>Use biometrics, 2FA and more to </div>
            <div className={classes.textBlock4}>ensure your security in here</div>
          </div>
        </div>
      </div>
      <div className={`${props.classes?.divider || ''} ${classes.divider}`}></div>
    </div>
  );
});
