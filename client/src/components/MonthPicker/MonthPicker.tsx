import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { MonthPicker2 } from './MonthPicker2/MonthPicker2';
import classes from './MonthPicker.module.css';

interface Props {
  className?: string;
  classes?: {
    selection?: string;
    optionYearMonth?: string;
    root?: string;
  };
}
/* @figmaId 220:5810 */
export const MonthPicker: FC<Props> = memo(function MonthPicker(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <MonthPicker2
        className={classes.monthPicker}
        classes={{
          selection: `${props.classes?.selection || ''} ${classes.selection}`,
          optionYearMonth: props.classes?.optionYearMonth || '',
        }}
        text={{
          date: <div className={classes.date}>2024</div>,
          date2: <div className={classes.date2}>Feb</div>,
        }}
      />
    </div>
  );
});
