import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Buttons_ButtonTypeOutlineState.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    signUp?: ReactNode;
  };
}
/* @figmaId 89:1582 */
export const Buttons_ButtonTypeOutlineState: FC<Props> = memo(function Buttons_ButtonTypeOutlineState(props = {}) {
  return (
    <button
      className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
    >
      {props.text?.signUp != null ? props.text?.signUp : <div className={classes.signUp}>Sign up</div>}
    </button>
  );
});
