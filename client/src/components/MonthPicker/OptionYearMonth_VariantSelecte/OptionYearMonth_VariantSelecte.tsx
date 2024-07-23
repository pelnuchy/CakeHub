import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './OptionYearMonth_VariantSelecte.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
    selection?: string;
  };
  text?: {
    date?: ReactNode;
  };
}
/* @figmaId 220:5718 */
export const OptionYearMonth_VariantSelecte: FC<Props> = memo(function OptionYearMonth_VariantSelecte(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.selection || ''} ${classes.selection}`}></div>
      {props.text?.date != null ? props.text?.date : <div className={classes.date}>2021</div>}
    </div>
  );
});
