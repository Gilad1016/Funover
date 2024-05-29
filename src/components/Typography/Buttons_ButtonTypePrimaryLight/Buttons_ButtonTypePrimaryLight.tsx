import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Buttons_ButtonTypePrimaryLight.module.css';

interface Props {
  className?: string;
}
/* @figmaId 89:1595 */
export const Buttons_ButtonTypePrimaryLight: FC<Props> = memo(function Buttons_ButtonTypePrimaryLight(props = {}) {
  return (
    <button className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.signUp}>Sign up</div>
    </button>
  );
});
