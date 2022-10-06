import Header from "../component/header/Header";
import {searchOptions} from "../data/searchOption";
import AuthorizationWrapper from "../component/AuthorizationWrapper";
import {authenticatedRequest} from "../util/axiosIntance";
import {useState} from "react";
import {generateDataId, generateTableHeaders} from "../data/dataGenerator";
import DataList from "../component/dataList/DataList";
import {PageWrapper} from "../component/commonStyle/PageWrapper";

function MemberPage() {

  const [member, setMember] = useState([]);
  const [tableHeaders, setTableHeaders] = useState([]);
  const [idList, setIdList] = useState([]);

  const handleMember = (startDate, endDate, status) => {

    authenticatedRequest({
      method: 'GET',
      url: `${process.env.REACT_APP_SERVER_ORIGIN}/admin/members?startDate=${startDate}&endDate=${endDate}`
    })
      .then(({data}) => {
        setTableHeaders(generateTableHeaders(data));
        setIdList(generateDataId(data));
        setMember(data);
      })
      .catch(err => console.log(err));
  }

  console.log(member);

  return (
    <AuthorizationWrapper>
      <PageWrapper>
        <Header
          handleSubmit={handleMember}
          searchOption={searchOptions.member}
        />
        <DataList
          idList={idList}
          tableHeaders={tableHeaders}
          tableRows={member}
        />
      </PageWrapper>
    </AuthorizationWrapper>
  );
}

export default MemberPage;
