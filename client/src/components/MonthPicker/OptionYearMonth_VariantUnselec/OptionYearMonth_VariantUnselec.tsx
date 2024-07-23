import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './OptionYearMonth_VariantUnselec.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    date?: ReactNode;
  };
}
/* @figmaId 220:5716 */
export const OptionYearMonth_VariantUnselec: FC<Props> = memo(function OptionYearMonth_VariantUnselec(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.date != null ? props.text?.date : <div className={classes.date}>2021</div>}
    </div>
  );
});
