import PropTypes from 'prop-types';
import {FaSearch} from "react-icons/fa";
import * as yup from 'yup';

import * as Hs from './HeaderStyle';
import OptionList from "../optionList/OptionList";
import {useState} from "react";
import {useFormik} from "formik";
import {regExp} from "../../data/format";
import {warningMessage} from "../../data/message";
import {getFormattedDate, date} from "../../data/dataGenerator";
import {blankOption} from "../../data/searchOption";

function Header({handleSubmit, searchOption}) {

  const [searchOptionActualValue] = useState(searchOption.statuses
    .map(status => status.actualValue));

  const [defaultDate] = useState({
    start: `${getFormattedDate("-", date.getFullYear(), "01", "01")}`,
    end: `${getFormattedDate("-", date.getFullYear(), "12", "31")}`,
  });

  const formik = useFormik({
    initialValues: {
      startDate: `${defaultDate.start}`,
      endDate: `${defaultDate.end}`,
      status: `${blankOption.actualValue}`,
    },
    validationSchema: yup.object({
      startDate: yup.string()
        .matches(regExp.date, warningMessage.invalidDateFormat),
      endDate: yup.string()
        .matches(regExp.date, warningMessage.invalidDateFormat),
      status: yup.string()
        .oneOf([...searchOptionActualValue], warningMessage.invalidSearchOptionStatus),
    }),
    onSubmit: ({startDate, endDate, status}) => {
      handleSubmit(startDate, endDate, status);
    }
  });

  const handleChange = (event) => {
    formik.handleChange(event);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    formik.handleSubmit();
  }

  return (
    <Hs.Header>
      <Hs.HeaderWrapper>
        <Hs.DateBox>
          {searchOption.hasDateOption
          &&
            <>
              <Hs.DateSelection
                name="startDate"
                defaultValue={defaultDate.start}
                onChange={handleChange}
              />
              {formik.touched.startDate
                && formik.errors.startDate
                && <div>{formik.errors.startDate}</div>
              }
              ~
              <Hs.DateSelection
                name="endDate"
                defaultValue={defaultDate.end}
                onChange={handleChange}
              />
              {formik.touched.endDate
                && formik.errors.endDate
                && <div>{formik.errors.endDate}</div>
              }
            </>
          }
        </Hs.DateBox>
        {searchOption.hasStatus
          &&
          <>
            <OptionList
              name={"status"}
              options={searchOption.statuses}
              handleChange={handleChange}
            />
            {formik.touched.status
              && formik.errors.status
              && <div>{formik.errors.status}</div>
            }
          </>
          }
        <Hs.SearchButton onClick={handleSearch}>
          <FaSearch/>
        </Hs.SearchButton>
      </Hs.HeaderWrapper>
    </Hs.Header>
  )
}

Header.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  searchOption: PropTypes.shape({
    hasDateOption: PropTypes.bool,
    hasStatus: PropTypes.bool,
    statuses: PropTypes.arrayOf(PropTypes.shape({
      actualValue: PropTypes.string,
      showedValue: PropTypes.string,
    })),
  }).isRequired,
}

export default Header;
