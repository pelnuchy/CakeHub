import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { OptionYearMonth_VariantSelecte } from '../OptionYearMonth_VariantSelecte/OptionYearMonth_VariantSelecte';
import { OptionYearMonth_VariantUnselec } from '../OptionYearMonth_VariantUnselec/OptionYearMonth_VariantUnselec';
import classes from './MonthOptions.module.css';

interface Props {
  className?: string;
  classes?: {
    selection?: string;
    optionYearMonth2?: string;
  };
  text?: {
    date?: ReactNode;
  };
}
/* @figmaId 220:5692 */
export const MonthOptions: FC<Props> = memo(function MonthOptions(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.row}>
        <OptionYearMonth_VariantUnselec
          className={classes.optionYearMonth}
          text={{
            date: <div className={classes.date}>Jan</div>,
          }}
        />
        <OptionYearMonth_VariantSelecte
          className={`${props.classes?.optionYearMonth2 || ''} ${classes.optionYearMonth2}`}
          classes={{ selection: props.classes?.selection || '' }}
          text={{
            date: props.text?.date || <div className={classes.date2}>Feb</div>,
          }}
        />
        <OptionYearMonth_VariantUnselec
          className={classes.optionYearMonth3}
          text={{
            date: <div className={classes.date3}>Mar</div>,
          }}
        />
      </div>
      <div className={classes.row2}>
        <OptionYearMonth_VariantUnselec
          className={classes.optionYearMonth4}
          text={{
            date: <div className={classes.date4}>Apr</div>,
          }}
        />
        <OptionYearMonth_VariantUnselec
          className={classes.optionYearMonth5}
          text={{
            date: <div className={classes.date5}>May</div>,
          }}
        />
        <OptionYearMonth_VariantUnselec
          className={classes.optionYearMonth6}
          text={{
            date: <div className={classes.date6}>Jun</div>,
          }}
        />
      </div>
      <div className={classes.row3}>
        <OptionYearMonth_VariantUnselec
          className={classes.optionYearMonth7}
          text={{
            date: <div className={classes.date7}>Jul</div>,
          }}
        />
        <OptionYearMonth_VariantUnselec
          className={classes.optionYearMonth8}
          text={{
            date: <div className={classes.date8}>Aug</div>,
          }}
        />
        <OptionYearMonth_VariantUnselec
          className={classes.optionYearMonth9}
          text={{
            date: <div className={classes.date9}>Sep</div>,
          }}
        />
      </div>
      <div className={classes.row4}>
        <OptionYearMonth_VariantUnselec
          className={classes.optionYearMonth10}
          text={{
            date: <div className={classes.date10}>Oct</div>,
          }}
        />
        <OptionYearMonth_VariantUnselec
          className={classes.optionYearMonth11}
          text={{
            date: <div className={classes.date11}>Nov</div>,
          }}
        />
        <OptionYearMonth_VariantUnselec
          className={classes.optionYearMonth12}
          text={{
            date: <div className={classes.date12}>Dec</div>,
          }}
        />
      </div>
    </div>
  );
});
