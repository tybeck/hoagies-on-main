import {ModelDefinition} from '@nestjs/mongoose';

export const getModelDefinition = (model: Function): Pick<ModelDefinition, 'name' | 'collection'> => {
  return {
    name: model.name,
    collection: model.name.toLowerCase(),
  }
};