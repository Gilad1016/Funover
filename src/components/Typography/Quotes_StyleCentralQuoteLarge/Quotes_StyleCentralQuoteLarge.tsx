import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Avatar } from '../Avatar/Avatar';
import { Icon } from './Icon.js';
import { ImageIcon } from './ImageIcon.js';
import { PositionIndicatorsIcon } from './PositionIndicatorsIcon.js';
import classes from './Quotes_StyleCentralQuoteLarge.module.css';

interface Props {
  className?: string;
  swap?: {
    image?: ReactNode;
  };
}
/* @figmaId 76:1738 */
export const Quotes_StyleCentralQuoteLarge: FC<Props> = memo(function Quotes_StyleCentralQuoteLarge(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.imagineTheBestProductYouVeUsed}>
        Imagine the best product you’ve used, times it by ten, and you’ll have something similar
      </div>
      <div className={classes.unnamed}>
        <Icon className={classes.icon2} />
      </div>
      <div className={classes.positionIndicators}>
        <PositionIndicatorsIcon className={classes.icon3} />
      </div>
      <Avatar
        className={classes.avatar}
        swap={{
          image: props.swap?.image || <ImageIcon className={classes.icon} />,
        }}
        text={{
          elliotRosenberg: <div className={classes.elliotRosenberg}>Elliot Rosenberg</div>,
          productLead: <div className={classes.productLead}>Product Lead</div>,
        }}
      />
    </div>
  );
});
