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
    console.log('status:' + status);
    authenticatedRequest({
      method: 'GET',
      url: `${process.env.REACT_APP_SERVER_ORIGIN}${url}`,
      params: {status, startDate, endDate}
    })
      .then(({data}) => {
        if (data.length > 50) {
          data = data.slice(0, 51);
        }
        console.log(data);
        setTableHeaders(generateTableHeaders(data));
        setIdList(generateDataId(data, idKey));
        setDomain(getDomainResponseParser(data, idKey));
      })
      .catch(err => console.log(err));
  }
  console.log(domain);
  return {domain, tableHeaders, idList, handleDomain};
}

export default useDataList;