import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Buttons_ButtonTypePrimaryDarkS.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 89:1574 */
export const Buttons_ButtonTypePrimaryDarkS: FC<Props> = memo(function Buttons_ButtonTypePrimaryDarkS(props = {}) {
  return (
    <button
      className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
    >
      <div className={classes.signUp}>Sign up</div>
    </button>
  );
});
