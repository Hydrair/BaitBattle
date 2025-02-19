import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

type FishMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerFish = {
  readonly id: string;
  readonly length?: number | null;
  readonly points?: number | null;
  readonly species?: string | null;
  readonly target?: boolean | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFish = {
  readonly id: string;
  readonly length?: number | null;
  readonly points?: number | null;
  readonly species?: string | null;
  readonly target?: boolean | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Fish = LazyLoading extends LazyLoadingDisabled ? EagerFish : LazyFish

export declare const Fish: (new (init: ModelInit<Fish, FishMetaData>) => Fish) & {
  copyOf(source: Fish, mutator: (draft: MutableModel<Fish, FishMetaData>) => MutableModel<Fish, FishMetaData> | void): Fish;
}

type EagerUser = {
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
}

type LazyUser = {
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly avatar?: string | null;
  readonly fish: AsyncCollection<Fish>;
  readonly rank?: number | null;
  readonly points?: number | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User, UserMetaData>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}