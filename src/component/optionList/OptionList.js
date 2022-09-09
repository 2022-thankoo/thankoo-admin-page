import PropTypes from "prop-types";

import * as Ols from './OptionListStyle';

function OptionList({options, handleChange}) {

  return (
    <Ols.ListSelection onChange={handleChange}>
      {options.map(({actualValue, showedValue}) =>
        <option key={actualValue.toString()} value={actualValue.toString()}>
          {showedValue}
        </option>
      )}
    </Ols.ListSelection>
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