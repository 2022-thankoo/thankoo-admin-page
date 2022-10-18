import useDataList from "../hooks/useDataList";
import {ApiPath} from "../data/path";
import {PageWrapper} from "../component/commonStyle/PageWrapper";
import {searchOptions} from "../data/searchOption";
import Header from "../component/header/Header";
import DataList from "../component/dataList/DataList";

function Organization() {

  const {domain: organization,
    tableHeaders,
    idList,
    handleDomain
  } = useDataList(ApiPath.getOrganizations, "organizationId");

  return (
    <PageWrapper>
      <Header
        handleSubmit={handleDomain}
        searchOption={searchOptions.organization}
      />
      <DataList
        idList={idList}
        tableHeaders={tableHeaders}
        tableRows={organization}
      />
    </PageWrapper>
  )
}

export default Organization;