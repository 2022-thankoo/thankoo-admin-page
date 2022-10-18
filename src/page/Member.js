import Header from "../component/header/Header";
import {searchOptions} from "../data/searchOption";
import {authenticatedRequest} from "../util/axiosIntance";
import DataList from "../component/dataList/DataList";
import {PageWrapper} from "../component/commonStyle/PageWrapper";
import {ApiPath, makeApiUrl} from "../data/path";
import useDataList from "../hooks/useDataList";

function MemberPage() {

  const {domain: member,
    tableHeaders,
    idList,
    handleDomain
  } = useDataList(ApiPath.getMembers, "memberId");

  const handleModifyName = (memberId, data) => {
      authenticatedRequest({
        method: 'PUT',
        url: makeApiUrl(ApiPath.changeMemberName(memberId)),
        data: {name: data.name}
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

  console.log(member);
  return (
    <PageWrapper>
      <Header
        handleSubmit={handleDomain}
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
