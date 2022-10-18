import {useState} from "react";
import {authenticatedRequest} from "../util/axiosIntance";
import {
  generateDataId,
  generateTableHeaders,
  getDomainResponseParser
} from "../data/dataGenerator";

function useDataList(url, idKey) {

  const [domain, setDomain] = useState([]);
  const [tableHeaders, setTableHeaders] = useState([]);
  const [idList, setIdList] = useState([]);

  const handleDomain = (startDate, endDate, status) => {
    authenticatedRequest({
      method: 'GET',
      url: `${process.env.REACT_APP_SERVER_ORIGIN}${url}`,
      params: {status, startDate, endDate}
    })
      .then(({data}) => {
        if (data.length > 50) {
          data = data.slice(0, 51);
        }
        setTableHeaders(generateTableHeaders(data));
        setIdList(generateDataId(data, idKey));
        setDomain(getDomainResponseParser(data, idKey));
      })
      .catch(err => console.log(err));
  }
  return {domain, tableHeaders, idList, handleDomain};
}

export default useDataList;