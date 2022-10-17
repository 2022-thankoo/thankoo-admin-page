import Header from "../component/header/Header";
import {searchOptions} from "../data/searchOption";
import AuthorizationWrapper from "../component/AuthorizationWrapper";
import {authenticatedRequest} from "../util/axiosIntance";
import {useState} from "react";
import {generateDataId, generateTableHeaders, getDomainResponseParser} from "../data/dataGenerator";
import DataList from "../component/dataList/DataList";
import {PageWrapper} from "../component/commonStyle/PageWrapper";
import {ApiPath, makeApiUrl} from "../data/path";

function MemberPage() {

  const [member, setMember] = useState([]);
  const [tableHeaders, setTableHeaders] = useState([]);
  const [idList, setIdList] = useState([]);

  const handleMember = (startDate, endDate, status) => {

    authenticatedRequest({
      method: 'GET',
      url: `${process.env.REACT_APP_SERVER_ORIGIN}/admin/members?startDate=${startDate}&endDate=${endDate}`
    })
      .then((response) => {
        let {data} = response;
        if (data.length > 50) {
          data = data.slice(0, 51);
        }
        setTableHeaders(generateTableHeaders(data));
        setIdList(generateDataId(data, "memberId"));
        setMember(getDomainResponseParser(data, "memberId"));
      })
      .catch(err => console.log(err));
  }

  const handleModifyName = (memberId, data) => {
      authenticatedRequest({
        method: 'PUT',
        url: makeApiUrl(ApiPath.changeMemberName(memberId)),
        data: {name: data.name}
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
    // console.log(member);

  return (
    <PageWrapper>
      <Header
        handleSubmit={handleMember}
        searchOption={searchOptions.member}
      />
      <DataList
        idList={idList}
        tableHeaders={tableHeaders}
        tableRows={member}
        modifyTargets={["name"]}
        handleModify={handleModifyName}
      />
    </PageWrapper>
  );
}

export default MemberPage;
