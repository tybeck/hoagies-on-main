import {gql} from '@apollo/client';
import * as React from 'react';
import * as Apollo from '@apollo/client';
import * as ApolloReactComponents from '@apollo/client/react/components';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<T extends {[key: string]: unknown}, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | {[P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never};
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: {input: string; output: string};
  String: {input: string; output: string};
  Boolean: {input: boolean; output: boolean};
  Int: {input: number; output: number};
  Float: {input: number; output: number};
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: {input: any; output: any};
};

export type AuthTokenEntityResponse = {
  __typename?: 'AuthTokenEntityResponse';
  isValid: Scalars['Boolean']['output'];
};

export type Category = {
  __typename?: 'Category';
  _id: Scalars['String']['output'];
  color?: Maybe<Scalars['String']['output']>;
  key: Scalars['String']['output'];
  longName: Scalars['String']['output'];
  name: Scalars['String']['output'];
  onHomePage: Scalars['Boolean']['output'];
};

export type Cheese = {
  __typename?: 'Cheese';
  _id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type Condiment = {
  __typename?: 'Condiment';
  _id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  subtype?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type FbLoginEntityResponse = {
  __typename?: 'FbLoginEntityResponse';
  ok: Scalars['Boolean']['output'];
};

export type FbPost = {
  __typename?: 'FbPost';
  _id: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  message: Scalars['String']['output'];
};

export type FbReview = {
  __typename?: 'FbReview';
  _id: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  review: Scalars['String']['output'];
};

export type Meat = {
  __typename?: 'Meat';
  _id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  getCategories: Array<Category>;
  getPosts: Array<FbPost>;
  getProducts: Array<VirtualizedProduct>;
  getReviews: Array<FbReview>;
  getSettings: Array<Setting>;
  isValidToken: AuthTokenEntityResponse;
  loginFB: FbLoginEntityResponse;
};

export type QueryGetProductsArgs = {
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type QueryIsValidTokenArgs = {
  token: Scalars['String']['input'];
};

export type Setting = {
  __typename?: 'Setting';
  _id: Scalars['String']['output'];
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type Strategy = {
  __typename?: 'Strategy';
  id: Scalars['String']['output'];
  isActivelySignedIn: Scalars['Boolean']['output'];
  token: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type VirtualizedProduct = {
  __typename?: 'VirtualizedProduct';
  _id: Scalars['String']['output'];
  askForCheese: Scalars['Boolean']['output'];
  categories: Array<Category>;
  cheeses: Array<Cheese>;
  condiments: Array<Condiment>;
  created: Scalars['DateTime']['output'];
  imageKey: Array<Scalars['String']['output']>;
  images: Array<Scalars['String']['output']>;
  key: Scalars['String']['output'];
  meats: Array<Meat>;
  name: Scalars['String']['output'];
  needsOneOf: Array<Scalars['String']['output']>;
  notes: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  updated: Scalars['DateTime']['output'];
};

export type IsValidTokenQueryVariables = Exact<{
  token: Scalars['String']['input'];
}>;

export type IsValidTokenQuery = {
  __typename?: 'Query';
  isValidToken: {__typename?: 'AuthTokenEntityResponse'; isValid: boolean};
};

export type LoginFbQueryVariables = Exact<{[key: string]: never}>;

export type LoginFbQuery = {
  __typename?: 'Query';
  loginFB: {__typename?: 'FbLoginEntityResponse'; ok: boolean};
};

export type CategoryQueryVariables = Exact<{[key: string]: never}>;

export type CategoryQuery = {
  __typename?: 'Query';
  getCategories: Array<{
    __typename?: 'Category';
    _id: string;
    name: string;
    longName: string;
    color?: string | null;
    onHomePage: boolean;
    key: string;
  }>;
};

export type PostQueryVariables = Exact<{[key: string]: never}>;

export type PostQuery = {
  __typename?: 'Query';
  getPosts: Array<{
    __typename?: 'FbPost';
    _id: string;
    createdAt: any;
    message: string;
  }>;
};

export type MeatFieldsFragment = {
  __typename?: 'Meat';
  _id: string;
  name: string;
};

export type CheeseFieldsFragment = {
  __typename?: 'Cheese';
  _id: string;
  name: string;
};

export type CondimentFieldsFragment = {
  __typename?: 'Condiment';
  _id: string;
  name: string;
  type: string;
  subtype?: string | null;
};

export type CategoryFieldsFragment = {
  __typename?: 'Category';
  _id: string;
  name: string;
  longName: string;
  color?: string | null;
};

export type ProductsQueryVariables = Exact<{
  categories?: InputMaybe<
    Array<Scalars['String']['input']> | Scalars['String']['input']
  >;
}>;

export type ProductsQuery = {
  __typename?: 'Query';
  getProducts: Array<{
    __typename?: 'VirtualizedProduct';
    _id: string;
    key: string;
    name: string;
    price: number;
    askForCheese: boolean;
    needsOneOf: Array<string>;
    notes: string;
    images: Array<string>;
    meats: Array<{__typename?: 'Meat'; _id: string; name: string}>;
    cheeses: Array<{__typename?: 'Cheese'; _id: string; name: string}>;
    condiments: Array<{
      __typename?: 'Condiment';
      _id: string;
      name: string;
      type: string;
      subtype?: string | null;
    }>;
    categories: Array<{
      __typename?: 'Category';
      _id: string;
      name: string;
      longName: string;
      color?: string | null;
    }>;
  }>;
};

export type ReviewQueryVariables = Exact<{[key: string]: never}>;

export type ReviewQuery = {
  __typename?: 'Query';
  getReviews: Array<{
    __typename?: 'FbReview';
    _id: string;
    createdAt: any;
    review: string;
  }>;
};

export type SettingQueryVariables = Exact<{[key: string]: never}>;

export type SettingQuery = {
  __typename?: 'Query';
  getSettings: Array<{
    __typename?: 'Setting';
    _id: string;
    key: string;
    value: string;
  }>;
};

export const MeatFieldsFragmentDoc = gql`
  fragment MeatFields on Meat {
    _id
    name
  }
`;
export const CheeseFieldsFragmentDoc = gql`
  fragment CheeseFields on Cheese {
    _id
    name
  }
`;
export const CondimentFieldsFragmentDoc = gql`
  fragment CondimentFields on Condiment {
    _id
    name
    type
    subtype
  }
`;
export const CategoryFieldsFragmentDoc = gql`
  fragment CategoryFields on Category {
    _id
    name
    longName
    color
  }
`;
export const IsValidTokenDocument = gql`
  query IsValidToken($token: String!) {
    isValidToken(token: $token) {
      isValid
    }
  }
`;
export type IsValidTokenComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    IsValidTokenQuery,
    IsValidTokenQueryVariables
  >,
  'query'
> &
  ({variables: IsValidTokenQueryVariables; skip?: boolean} | {skip: boolean});

export const IsValidTokenComponent = (props: IsValidTokenComponentProps) => (
  <ApolloReactComponents.Query<IsValidTokenQuery, IsValidTokenQueryVariables>
    query={IsValidTokenDocument}
    {...props}
  />
);

export type IsValidTokenProps<
  TChildProps = {},
  TDataName extends string = 'data',
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    IsValidTokenQuery,
    IsValidTokenQueryVariables
  >;
} & TChildProps;
export function withIsValidToken<
  TProps,
  TChildProps = {},
  TDataName extends string = 'data',
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    IsValidTokenQuery,
    IsValidTokenQueryVariables,
    IsValidTokenProps<TChildProps, TDataName>
  >,
) {
  return ApolloReactHoc.withQuery<
    TProps,
    IsValidTokenQuery,
    IsValidTokenQueryVariables,
    IsValidTokenProps<TChildProps, TDataName>
  >(IsValidTokenDocument, {
    alias: 'isValidToken',
    ...operationOptions,
  });
}

/**
 * __useIsValidTokenQuery__
 *
 * To run a query within a React component, call `useIsValidTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsValidTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsValidTokenQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useIsValidTokenQuery(
  baseOptions: Apollo.QueryHookOptions<
    IsValidTokenQuery,
    IsValidTokenQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<IsValidTokenQuery, IsValidTokenQueryVariables>(
    IsValidTokenDocument,
    options,
  );
}
export function useIsValidTokenLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    IsValidTokenQuery,
    IsValidTokenQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<IsValidTokenQuery, IsValidTokenQueryVariables>(
    IsValidTokenDocument,
    options,
  );
}
export type IsValidTokenQueryHookResult = ReturnType<
  typeof useIsValidTokenQuery
>;
export type IsValidTokenLazyQueryHookResult = ReturnType<
  typeof useIsValidTokenLazyQuery
>;
export type IsValidTokenQueryResult = Apollo.QueryResult<
  IsValidTokenQuery,
  IsValidTokenQueryVariables
>;
export const LoginFbDocument = gql`
  query LoginFB {
    loginFB {
      ok
    }
  }
`;
export type LoginFbComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    LoginFbQuery,
    LoginFbQueryVariables
  >,
  'query'
>;

export const LoginFbComponent = (props: LoginFbComponentProps) => (
  <ApolloReactComponents.Query<LoginFbQuery, LoginFbQueryVariables>
    query={LoginFbDocument}
    {...props}
  />
);

export type LoginFbProps<
  TChildProps = {},
  TDataName extends string = 'data',
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    LoginFbQuery,
    LoginFbQueryVariables
  >;
} & TChildProps;
export function withLoginFb<
  TProps,
  TChildProps = {},
  TDataName extends string = 'data',
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    LoginFbQuery,
    LoginFbQueryVariables,
    LoginFbProps<TChildProps, TDataName>
  >,
) {
  return ApolloReactHoc.withQuery<
    TProps,
    LoginFbQuery,
    LoginFbQueryVariables,
    LoginFbProps<TChildProps, TDataName>
  >(LoginFbDocument, {
    alias: 'loginFb',
    ...operationOptions,
  });
}

/**
 * __useLoginFbQuery__
 *
 * To run a query within a React component, call `useLoginFbQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoginFbQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoginFbQuery({
 *   variables: {
 *   },
 * });
 */
export function useLoginFbQuery(
  baseOptions?: Apollo.QueryHookOptions<LoginFbQuery, LoginFbQueryVariables>,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<LoginFbQuery, LoginFbQueryVariables>(
    LoginFbDocument,
    options,
  );
}
export function useLoginFbLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    LoginFbQuery,
    LoginFbQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<LoginFbQuery, LoginFbQueryVariables>(
    LoginFbDocument,
    options,
  );
}
export type LoginFbQueryHookResult = ReturnType<typeof useLoginFbQuery>;
export type LoginFbLazyQueryHookResult = ReturnType<typeof useLoginFbLazyQuery>;
export type LoginFbQueryResult = Apollo.QueryResult<
  LoginFbQuery,
  LoginFbQueryVariables
>;
export const CategoryDocument = gql`
  query Category {
    getCategories {
      _id
      name
      longName
      color
      onHomePage
      key
    }
  }
`;
export type CategoryComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    CategoryQuery,
    CategoryQueryVariables
  >,
  'query'
>;

export const CategoryComponent = (props: CategoryComponentProps) => (
  <ApolloReactComponents.Query<CategoryQuery, CategoryQueryVariables>
    query={CategoryDocument}
    {...props}
  />
);

export type CategoryProps<
  TChildProps = {},
  TDataName extends string = 'data',
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    CategoryQuery,
    CategoryQueryVariables
  >;
} & TChildProps;
export function withCategory<
  TProps,
  TChildProps = {},
  TDataName extends string = 'data',
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    CategoryQuery,
    CategoryQueryVariables,
    CategoryProps<TChildProps, TDataName>
  >,
) {
  return ApolloReactHoc.withQuery<
    TProps,
    CategoryQuery,
    CategoryQueryVariables,
    CategoryProps<TChildProps, TDataName>
  >(CategoryDocument, {
    alias: 'category',
    ...operationOptions,
  });
}

/**
 * __useCategoryQuery__
 *
 * To run a query within a React component, call `useCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoryQuery(
  baseOptions?: Apollo.QueryHookOptions<CategoryQuery, CategoryQueryVariables>,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<CategoryQuery, CategoryQueryVariables>(
    CategoryDocument,
    options,
  );
}
export function useCategoryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CategoryQuery,
    CategoryQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<CategoryQuery, CategoryQueryVariables>(
    CategoryDocument,
    options,
  );
}
export type CategoryQueryHookResult = ReturnType<typeof useCategoryQuery>;
export type CategoryLazyQueryHookResult = ReturnType<
  typeof useCategoryLazyQuery
>;
export type CategoryQueryResult = Apollo.QueryResult<
  CategoryQuery,
  CategoryQueryVariables
>;
export const PostDocument = gql`
  query Post {
    getPosts {
      _id
      createdAt
      message
    }
  }
`;
export type PostComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<PostQuery, PostQueryVariables>,
  'query'
>;

export const PostComponent = (props: PostComponentProps) => (
  <ApolloReactComponents.Query<PostQuery, PostQueryVariables>
    query={PostDocument}
    {...props}
  />
);

export type PostProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<PostQuery, PostQueryVariables>;
} & TChildProps;
export function withPost<
  TProps,
  TChildProps = {},
  TDataName extends string = 'data',
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    PostQuery,
    PostQueryVariables,
    PostProps<TChildProps, TDataName>
  >,
) {
  return ApolloReactHoc.withQuery<
    TProps,
    PostQuery,
    PostQueryVariables,
    PostProps<TChildProps, TDataName>
  >(PostDocument, {
    alias: 'post',
    ...operationOptions,
  });
}

/**
 * __usePostQuery__
 *
 * To run a query within a React component, call `usePostQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostQuery({
 *   variables: {
 *   },
 * });
 */
export function usePostQuery(
  baseOptions?: Apollo.QueryHookOptions<PostQuery, PostQueryVariables>,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<PostQuery, PostQueryVariables>(PostDocument, options);
}
export function usePostLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PostQuery, PostQueryVariables>,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<PostQuery, PostQueryVariables>(
    PostDocument,
    options,
  );
}
export type PostQueryHookResult = ReturnType<typeof usePostQuery>;
export type PostLazyQueryHookResult = ReturnType<typeof usePostLazyQuery>;
export type PostQueryResult = Apollo.QueryResult<PostQuery, PostQueryVariables>;
export const ProductsDocument = gql`
  query Products($categories: [String!]) {
    getProducts(categories: $categories) {
      _id
      key
      name
      meats {
        ...MeatFields
      }
      cheeses {
        ...CheeseFields
      }
      condiments {
        ...CondimentFields
      }
      categories {
        ...CategoryFields
      }
      price
      askForCheese
      needsOneOf
      notes
      images
    }
  }
  ${MeatFieldsFragmentDoc}
  ${CheeseFieldsFragmentDoc}
  ${CondimentFieldsFragmentDoc}
  ${CategoryFieldsFragmentDoc}
`;
export type ProductsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    ProductsQuery,
    ProductsQueryVariables
  >,
  'query'
>;

export const ProductsComponent = (props: ProductsComponentProps) => (
  <ApolloReactComponents.Query<ProductsQuery, ProductsQueryVariables>
    query={ProductsDocument}
    {...props}
  />
);

export type ProductsProps<
  TChildProps = {},
  TDataName extends string = 'data',
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    ProductsQuery,
    ProductsQueryVariables
  >;
} & TChildProps;
export function withProducts<
  TProps,
  TChildProps = {},
  TDataName extends string = 'data',
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    ProductsQuery,
    ProductsQueryVariables,
    ProductsProps<TChildProps, TDataName>
  >,
) {
  return ApolloReactHoc.withQuery<
    TProps,
    ProductsQuery,
    ProductsQueryVariables,
    ProductsProps<TChildProps, TDataName>
  >(ProductsDocument, {
    alias: 'products',
    ...operationOptions,
  });
}

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *      categories: // value for 'categories'
 *   },
 * });
 */
export function useProductsQuery(
  baseOptions?: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(
    ProductsDocument,
    options,
  );
}
export function useProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ProductsQuery,
    ProductsQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(
    ProductsDocument,
    options,
  );
}
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<
  typeof useProductsLazyQuery
>;
export type ProductsQueryResult = Apollo.QueryResult<
  ProductsQuery,
  ProductsQueryVariables
>;
export const ReviewDocument = gql`
  query Review {
    getReviews {
      _id
      createdAt
      review
    }
  }
`;
export type ReviewComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    ReviewQuery,
    ReviewQueryVariables
  >,
  'query'
>;

export const ReviewComponent = (props: ReviewComponentProps) => (
  <ApolloReactComponents.Query<ReviewQuery, ReviewQueryVariables>
    query={ReviewDocument}
    {...props}
  />
);

export type ReviewProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    ReviewQuery,
    ReviewQueryVariables
  >;
} & TChildProps;
export function withReview<
  TProps,
  TChildProps = {},
  TDataName extends string = 'data',
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    ReviewQuery,
    ReviewQueryVariables,
    ReviewProps<TChildProps, TDataName>
  >,
) {
  return ApolloReactHoc.withQuery<
    TProps,
    ReviewQuery,
    ReviewQueryVariables,
    ReviewProps<TChildProps, TDataName>
  >(ReviewDocument, {
    alias: 'review',
    ...operationOptions,
  });
}

/**
 * __useReviewQuery__
 *
 * To run a query within a React component, call `useReviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useReviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReviewQuery({
 *   variables: {
 *   },
 * });
 */
export function useReviewQuery(
  baseOptions?: Apollo.QueryHookOptions<ReviewQuery, ReviewQueryVariables>,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<ReviewQuery, ReviewQueryVariables>(
    ReviewDocument,
    options,
  );
}
export function useReviewLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ReviewQuery, ReviewQueryVariables>,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<ReviewQuery, ReviewQueryVariables>(
    ReviewDocument,
    options,
  );
}
export type ReviewQueryHookResult = ReturnType<typeof useReviewQuery>;
export type ReviewLazyQueryHookResult = ReturnType<typeof useReviewLazyQuery>;
export type ReviewQueryResult = Apollo.QueryResult<
  ReviewQuery,
  ReviewQueryVariables
>;
export const SettingDocument = gql`
  query Setting {
    getSettings {
      _id
      key
      value
    }
  }
`;
export type SettingComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    SettingQuery,
    SettingQueryVariables
  >,
  'query'
>;

export const SettingComponent = (props: SettingComponentProps) => (
  <ApolloReactComponents.Query<SettingQuery, SettingQueryVariables>
    query={SettingDocument}
    {...props}
  />
);

export type SettingProps<
  TChildProps = {},
  TDataName extends string = 'data',
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    SettingQuery,
    SettingQueryVariables
  >;
} & TChildProps;
export function withSetting<
  TProps,
  TChildProps = {},
  TDataName extends string = 'data',
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    SettingQuery,
    SettingQueryVariables,
    SettingProps<TChildProps, TDataName>
  >,
) {
  return ApolloReactHoc.withQuery<
    TProps,
    SettingQuery,
    SettingQueryVariables,
    SettingProps<TChildProps, TDataName>
  >(SettingDocument, {
    alias: 'setting',
    ...operationOptions,
  });
}

/**
 * __useSettingQuery__
 *
 * To run a query within a React component, call `useSettingQuery` and pass it any options that fit your needs.
 * When your component renders, `useSettingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSettingQuery({
 *   variables: {
 *   },
 * });
 */
export function useSettingQuery(
  baseOptions?: Apollo.QueryHookOptions<SettingQuery, SettingQueryVariables>,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<SettingQuery, SettingQueryVariables>(
    SettingDocument,
    options,
  );
}
export function useSettingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SettingQuery,
    SettingQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<SettingQuery, SettingQueryVariables>(
    SettingDocument,
    options,
  );
}
export type SettingQueryHookResult = ReturnType<typeof useSettingQuery>;
export type SettingLazyQueryHookResult = ReturnType<typeof useSettingLazyQuery>;
export type SettingQueryResult = Apollo.QueryResult<
  SettingQuery,
  SettingQueryVariables
>;
