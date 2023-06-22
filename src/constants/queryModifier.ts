export const queryModifier = (query: any) => {
  let sort: string;
  if (query.sort) {
    sort = query.sort;
  }

  let skip = 0;
  if (query.skip) {
    skip = query.skip;
  }

  let limit = 1000;
  if (query.limit) {
    limit = query.limit;
  }

  delete query.sort;
  delete query.skip;
  delete query.limit;

  Object.keys(query).map((key) => {
    if (!query[key].trim()) {
      delete query[key];
    }
  });

  if (query.name) {
    query.name = { $regex: new RegExp(`^${query.name}`, 'i') };
  }

  return {
    limit,
    skip,
    sort,
  };
};
