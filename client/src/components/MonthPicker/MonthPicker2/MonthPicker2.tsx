import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { MonthOptions } from '../MonthOptions/MonthOptions';
import classes from './MonthPicker2.module.css';
import { SelectoriconIcon } from './SelectoriconIcon';
import { SelectoriconIcon2 } from './SelectoriconIcon2';
import { SelectoriconIcon3 } from './SelectoriconIcon3';

interface Props {
  className?: string;
  classes?: {
    selection?: string;
    root?: string;
    optionYearMonth?: string;
  };
  text?: {
    date?: ReactNode;
    date2?: ReactNode;
  };
}
/* @figmaId 220:5680 */
export const MonthPicker2: FC<Props> = memo(function MonthPicker2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.header}>
        <div className={classes.selector}>
          {props.text?.date != null ? props.text?.date : <div className={classes.date}>2022</div>}
          <div className={classes.selectorIcon}>
            <SelectoriconIcon className={classes.icon} />
          </div>
        </div>
        <div className={classes.navigate}>
          <div className={classes.selectorIcon2}>
            <SelectoriconIcon2 className={classes.icon2} />
          </div>
          <div className={classes.selectorIcon3}>
            <SelectoriconIcon3 className={classes.icon3} />
          </div>
        </div>
      </div>
      <MonthOptions
        classes={{ selection: props.classes?.selection || '', optionYearMonth2: props.classes?.optionYearMonth || '' }}
        text={{
          date: props.text?.date2,
        }}
      />
    </div>
  );
});
