import { request, gql } from "graphql-request";

const GRAPHQL_URL = "http://localhost:9000/graphql";

export const getJobs = async () => {
  const query = gql`
    query {
      jobs {
        id
        title
        description
        company {
          name
        }
      }
    }
  `;
  const { jobs } = await request(GRAPHQL_URL, query);
  return jobs;
};

export const getJob = async (id) => {
  const query = gql`
    query jobQuery($id: ID!) {
      job(id: $id) {
        id
        title
        company {
          id
          name
        }
        description
      }
    }
  `;
  const variables = { id };
  const { job } = await request(GRAPHQL_URL, query, variables);
  return job;
};

export const getCompany = async (id) => {
  //   console.log(id);
  const query = gql`
    query CompanyQuery($id: ID!) {
      company(id: $id) {
        name
        description
      }
    }
  `;
  const variables = { id };
  const { company } = await request(GRAPHQL_URL, query, variables);
  return company;
};
