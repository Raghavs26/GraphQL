import { Job, Company } from "./db.js";

export const resolvers = {
  Query: {
    job: (_root, { id }) => Job.findById(id),
    company: async (_root, args) => Company.findById(args.id),
    jobs: async () => Job.findAll(),
  },
  Job: {
    company: async (job) => {
      return Company.findById(job.companyId);
    },
  },
};
