// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Fish, User } = initSchema(schema);

export {
  Fish,
  User
};