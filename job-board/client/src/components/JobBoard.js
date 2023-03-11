import JobList from "./JobList";
import { getJobs } from "../Graphql/queries";
import { useEffect, useState } from "react";

function JobBoard() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    // const fetchGraphQLData = async () => {
    //   setJobs(await getJobs());
    // };
    // fetchGraphQLData();
    getJobs().then((jobs) => setJobs(jobs));
  }, []);
  console.log(jobs);
  return (
    <div>
      <h1 className="title">Job Board</h1>
      <JobList jobs={jobs} />
    </div>
  );
}

export default JobBoard;
