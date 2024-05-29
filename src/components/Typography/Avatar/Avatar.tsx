import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Avatar.module.css';
import { ImageIcon } from './ImageIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    image?: ReactNode;
  };
  text?: {
    elliotRosenberg?: ReactNode;
    productLead?: ReactNode;
  };
}
/* @figmaId 91:1851 */
export const Avatar: FC<Props> = memo(function Avatar(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.elliotRosenberg != null ? (
        props.text?.elliotRosenberg
      ) : (
        <div className={classes.elliotRosenberg}>Elliot Rosenberg</div>
      )}
      {props.text?.productLead != null ? (
        props.text?.productLead
      ) : (
        <div className={classes.productLead}>Product Lead</div>
      )}
      <div className={classes.image}>{props.swap?.image || <ImageIcon className={classes.icon} />}</div>
    </div>
  );
});
