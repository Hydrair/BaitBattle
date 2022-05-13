// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const FishSpecies = {
  "BARSCH": "BARSCH",
  "HECHT": "HECHT",
  "KARPFEN": "KARPFEN",
  "SALMONIDE": "SALMONIDE",
  "WALLER": "WALLER",
  "WEISSFISCH": "WEISSFISCH",
  "ZANDER": "ZANDER"
};

const { Fish, User } = initSchema(schema);

export {
  Fish,
  User,
  FishSpecies
};