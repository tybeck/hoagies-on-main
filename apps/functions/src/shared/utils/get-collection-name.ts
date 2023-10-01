const getCollectionName = (collection: {name: string}) => {
  return collection.name.toLowerCase();
};

export {getCollectionName};
