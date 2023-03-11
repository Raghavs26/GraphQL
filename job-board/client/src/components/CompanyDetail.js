import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { companies } from "../fake-data";
import { getCompany } from "../Graphql/queries";

function CompanyDetail() {
  const { companyId } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    getCompany(companyId).then((res) => setCompany(res));
  });
  if (!company) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h1 className="title">{company.name}</h1>
      <div className="box">{company.description}</div>
    </div>
  );
}

export default CompanyDetail;
