import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { AlarmIcon } from './AlarmIcon.js';
import { AvatarIcon } from './AvatarIcon.js';
import { Check_circle_outlineIcon } from './Check_circle_outlineIcon.js';
import { CheckIcon2 } from './CheckIcon2.js';
import { CheckIcon3 } from './CheckIcon3.js';
import { CheckIcon4 } from './CheckIcon4.js';
import { CheckIcon } from './CheckIcon.js';
import { CheckmarkIcon } from './CheckmarkIcon.js';
import { FeaturesBlocks_StyleFourColumn } from './FeaturesBlocks_StyleFourColumn/FeaturesBlocks_StyleFourColumn';
import { FingerprintIcon } from './FingerprintIcon.js';
import { Footers_StyleFooterCTA } from './Footers_StyleFooterCTA/Footers_StyleFooterCTA';
import { HeroSections_StyleImageRight } from './HeroSections_StyleImageRight/HeroSections_StyleImageRight';
import { ImageIcon } from './ImageIcon.js';
import { Metrics_StyleSimpleMetricsHead } from './Metrics_StyleSimpleMetricsHead/Metrics_StyleSimpleMetricsHead';
import { NavigationBars_ColorGreenLogoO } from './NavigationBars_ColorGreenLogoO/NavigationBars_ColorGreenLogoO';
import { Quotes_StyleCentralQuoteLarge } from './Quotes_StyleCentralQuoteLarge/Quotes_StyleCentralQuoteLarge';
import { Tab_unselectedIcon } from './Tab_unselectedIcon.js';
import classes from './Typography.module.css';

interface Props {
  className?: string;
}
/* @figmaId 94:9893 */
export const Typography: FC<Props> = memo(function Typography(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <NavigationBars_ColorGreenLogoO />
      <HeroSections_StyleImageRight
        classes={{
          untitled_Artwork31: classes.untitled_Artwork31,
          untitled_Artwork21: classes.untitled_Artwork21,
          bGImage: classes.bGImage,
        }}
        swap={{
          checkmark: <CheckmarkIcon className={classes.icon} />,
          avatar: <AvatarIcon className={classes.icon2} />,
        }}
      />
      <FeaturesBlocks_StyleFourColumn
        classes={{ divider: classes.divider }}
        swap={{
          alarm: <AlarmIcon className={classes.icon3} />,
          check_circle_outline: <Check_circle_outlineIcon className={classes.icon4} />,
          tab_unselected: <Tab_unselectedIcon className={classes.icon5} />,
          fingerprint: <FingerprintIcon className={classes.icon6} />,
        }}
      />
      <Quotes_StyleCentralQuoteLarge
        swap={{
          image: <ImageIcon className={classes.icon7} />,
        }}
      />
      <Metrics_StyleSimpleMetricsHead />
      <Footers_StyleFooterCTA
        swap={{
          check: <CheckIcon className={classes.icon8} />,
          check2: <CheckIcon2 className={classes.icon9} />,
          check3: <CheckIcon3 className={classes.icon10} />,
          check4: <CheckIcon4 className={classes.icon11} />,
        }}
      />
    </div>
  );
});
