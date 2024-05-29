import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Buttons_ButtonTypePrimaryLight } from '../Buttons_ButtonTypePrimaryLight/Buttons_ButtonTypePrimaryLight';
import classes from './NavigationBars_ColorGreenLogoO.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1:124 */
export const NavigationBars_ColorGreenLogoO: FC<Props> = memo(function NavigationBars_ColorGreenLogoO(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.quickly}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>Quickly</span>
          <span className={classes.label2}>.</span>
        </p>
      </div>
      <div className={classes.frame6}>
        <div className={classes.aboutUs}>About us</div>
        <div className={classes.products}>Products</div>
        <div className={classes.features}>Features</div>
        <div className={classes.ourBlog}>Our Blog</div>
        <div className={classes.downloads}>Downloads</div>
      </div>
      <div className={classes.frame62}>
        <Buttons_ButtonTypePrimaryLight />
        <div className={classes.frame4}>
          <div className={classes.logIn}>Log In</div>
        </div>
      </div>
    </div>
  );
});
