import PropTypes from "prop-types";

import * as ols from './OptionListStyle';

function OptionList({options, handleChange}) {

  return (
    <ols.ListSelection onChange={handleChange}>
      {options.map(({actualValue, showedValue}) =>
        <option key={actualValue.toString()} value={actualValue.toString()}>
          {showedValue}
        </option>
      )}
    </ols.ListSelection>
  );
}

OptionList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    actualValue: PropTypes.string,
    showedValue: PropTypes.string
  })),
  handleChange: PropTypes.func,
}

export default OptionList;