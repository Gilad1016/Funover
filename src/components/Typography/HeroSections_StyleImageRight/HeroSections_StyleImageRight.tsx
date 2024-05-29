import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Buttons_ButtonTypeOutlineState } from '../Buttons_ButtonTypeOutlineState/Buttons_ButtonTypeOutlineState';
import { Buttons_ButtonTypePrimaryDarkS } from '../Buttons_ButtonTypePrimaryDarkS/Buttons_ButtonTypePrimaryDarkS';
import { AvatarIcon } from './AvatarIcon.js';
import { CheckmarkIcon } from './CheckmarkIcon.js';
import classes from './HeroSections_StyleImageRight.module.css';

interface Props {
  className?: string;
  classes?: {
    untitled_Artwork31?: string;
    untitled_Artwork21?: string;
    bGImage?: string;
  };
  swap?: {
    checkmark?: ReactNode;
    avatar?: ReactNode;
  };
}
/* @figmaId 3:298 */
export const HeroSections_StyleImageRight: FC<Props> = memo(function HeroSections_StyleImageRight(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={`${props.classes?.untitled_Artwork31 || ''} ${classes.untitled_Artwork31}`}></div>
      <div className={classes.headline}>
        <div className={classes.textBlock}>Get the important</div>
        <div className={classes.textBlock2}>work done faster</div>
      </div>
      <div className={classes.description}>
        <div className={classes.textBlock3}>With Quickly, you can get more productive </div>
        <div className={classes.textBlock4}>work done in far less time than ever before.</div>
      </div>
      <div className={classes.microtitle}>The new way to work online</div>
      <div className={`${props.classes?.untitled_Artwork21 || ''} ${classes.untitled_Artwork21}`}></div>
      <div className={`${props.classes?.bGImage || ''} ${classes.bGImage}`}></div>
      <div className={classes.uIElement1}>
        <div className={classes.bG}></div>
        <div className={classes.checkmark}>{props.swap?.checkmark || <CheckmarkIcon className={classes.icon} />}</div>
        <div className={classes.headline2}> Project Updated</div>
        <div className={classes.mockupText}></div>
        <div className={classes.mockupText2}></div>
        <div className={classes.fakeButton}></div>
      </div>
      <div className={classes.uIElement2}>
        <div className={classes.bG2}></div>
        <div className={classes.avatar}>{props.swap?.avatar || <AvatarIcon className={classes.icon2} />}</div>
        <div className={classes.headline3}>New task assigned</div>
        <div className={classes.subheading}>Louise assigned you a project</div>
      </div>
      <Buttons_ButtonTypePrimaryDarkS className={classes.buttons} />
      <Buttons_ButtonTypeOutlineState
        className={classes.buttons2}
        text={{
          signUp: <div className={classes.signUp}>Learn more</div>,
        }}
      />
    </div>
  );
});
