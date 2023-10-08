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
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type AuthTokenResponse = {
  __typename?: 'AuthTokenResponse';
  isValid: Scalars['Boolean'];
};

export type Category = {
  __typename?: 'Category';
  _id: Scalars['String'];
  color?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  longName?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  onHomePage?: Maybe<Scalars['Boolean']>;
};

export type Cheese = {
  __typename?: 'Cheese';
  _id: Scalars['String'];
  name: Scalars['String'];
};

export type Condiment = {
  __typename?: 'Condiment';
  _id: Scalars['String'];
  name: Scalars['String'];
  subtype?: Maybe<Scalars['String']>;
  type: Scalars['String'];
};

export type FbPost = {
  __typename?: 'FbPost';
  _id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  message: Scalars['String'];
};

export type FbReview = {
  __typename?: 'FbReview';
  _id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  review: Scalars['String'];
};

export type Inventory = {
  __typename?: 'Inventory';
  _id: Scalars['String'];
  name: Scalars['String'];
  value: Scalars['Int'];
};

export type Meat = {
  __typename?: 'Meat';
  _id: Scalars['String'];
  name: Scalars['String'];
};

export type Product = {
  __typename?: 'Product';
  _id: Scalars['String'];
  askForCheese?: Maybe<Scalars['Boolean']>;
  categories: Array<Category>;
  cheeses: Array<Cheese>;
  condiments: Array<Condiment>;
  created: Scalars['DateTime'];
  key?: Maybe<Scalars['String']>;
  meats: Array<Meat>;
  name: Scalars['String'];
  needsOneOf?: Maybe<Array<Scalars['String']>>;
  notes?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  updated: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  getCategories: Array<Category>;
  getInventory: Array<Inventory>;
  getPosts: Array<FbPost>;
  getProducts: Array<Product>;
  getReviews: Array<FbReview>;
  getSettings: Array<Setting>;
  isValidToken: AuthTokenResponse;
};

export type QueryGetProductsArgs = {
  categories?: InputMaybe<Array<Scalars['String']>>;
};

export type QueryIsValidTokenArgs = {
  token: Scalars['String'];
};

export type Setting = {
  __typename?: 'Setting';
  _id: Scalars['String'];
  key: Scalars['String'];
  value: Scalars['String'];
};

export type Strategy = {
  __typename?: 'Strategy';
  id: Scalars['String'];
  isActivelySignedIn?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
  type: Scalars['String'];
};

export type IsValidTokenQueryVariables = Exact<{
  token: Scalars['String'];
}>;

export type IsValidTokenQuery = {
  __typename?: 'Query';
  isValidToken: {__typename?: 'AuthTokenResponse'; isValid: boolean};
};

export type CategoryQueryVariables = Exact<{[key: string]: never}>;

export type CategoryQuery = {
  __typename?: 'Query';
  getCategories: Array<{
    __typename?: 'Category';
    _id: string;
    name: string;
    longName?: string | null;
    color?: string | null;
    onHomePage?: boolean | null;
    key?: string | null;
  }>;
};

export type InventoryQueryVariables = Exact<{[key: string]: never}>;

export type InventoryQuery = {
  __typename?: 'Query';
  getInventory: Array<{__typename?: 'Inventory'; _id: string; name: string}>;
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
  longName?: string | null;
  color?: string | null;
};

export type ProductsQueryVariables = Exact<{
  categories?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;

export type ProductsQuery = {
  __typename?: 'Query';
  getProducts: Array<{
    __typename?: 'Product';
    _id: string;
    key?: string | null;
    name: string;
    price: number;
    askForCheese?: boolean | null;
    needsOneOf?: Array<string> | null;
    notes?: string | null;
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
      longName?: string | null;
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
export const InventoryDocument = gql`
  query Inventory {
    getInventory {
      _id
      name
    }
  }
`;
export type InventoryComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    InventoryQuery,
    InventoryQueryVariables
  >,
  'query'
>;

export const InventoryComponent = (props: InventoryComponentProps) => (
  <ApolloReactComponents.Query<InventoryQuery, InventoryQueryVariables>
    query={InventoryDocument}
    {...props}
  />
);

export type InventoryProps<
  TChildProps = {},
  TDataName extends string = 'data',
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    InventoryQuery,
    InventoryQueryVariables
  >;
} & TChildProps;
export function withInventory<
  TProps,
  TChildProps = {},
  TDataName extends string = 'data',
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    InventoryQuery,
    InventoryQueryVariables,
    InventoryProps<TChildProps, TDataName>
  >,
) {
  return ApolloReactHoc.withQuery<
    TProps,
    InventoryQuery,
    InventoryQueryVariables,
    InventoryProps<TChildProps, TDataName>
  >(InventoryDocument, {
    alias: 'inventory',
    ...operationOptions,
  });
}

/**
 * __useInventoryQuery__
 *
 * To run a query within a React component, call `useInventoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useInventoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInventoryQuery({
 *   variables: {
 *   },
 * });
 */
export function useInventoryQuery(
  baseOptions?: Apollo.QueryHookOptions<
    InventoryQuery,
    InventoryQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<InventoryQuery, InventoryQueryVariables>(
    InventoryDocument,
    options,
  );
}
export function useInventoryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    InventoryQuery,
    InventoryQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<InventoryQuery, InventoryQueryVariables>(
    InventoryDocument,
    options,
  );
}
export type InventoryQueryHookResult = ReturnType<typeof useInventoryQuery>;
export type InventoryLazyQueryHookResult = ReturnType<
  typeof useInventoryLazyQuery
>;
export type InventoryQueryResult = Apollo.QueryResult<
  InventoryQuery,
  InventoryQueryVariables
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
