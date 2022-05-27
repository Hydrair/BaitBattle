import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type FishMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Fish {
  readonly id: string;
  readonly length?: number | null;
  readonly points?: number | null;
  readonly species?: string | null;
  readonly target?: boolean | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Fish, FishMetaData>);
  static copyOf(source: Fish, mutator: (draft: MutableModel<Fish, FishMetaData>) => MutableModel<Fish, FishMetaData> | void): Fish;
}

export declare class User {
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly avatar?: string | null;
  readonly fish?: (Fish | null)[] | null;
  readonly rank?: number | null;
  readonly points?: number | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}