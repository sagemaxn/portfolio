import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};

export type MessageInput = {
    email: Scalars['String'];
    message: Scalars['String'];
    name: Scalars['String'];
};

export type Mutation = {
    __typename?: 'Mutation';
    contactMessage: Scalars['String'];
};

export type MutationContactMessageArgs = {
    messageInput: MessageInput;
};

export type Query = {
    __typename?: 'Query';
    test: Scalars['String'];
};

export type ContactMutationVariables = Exact<{
    email: Scalars['String'];
    message: Scalars['String'];
    name: Scalars['String'];
}>;

export type ContactMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'contactMessage'
>;

export type TestQueryVariables = Exact<{ [key: string]: never }>;

export type TestQuery = { __typename?: 'Query' } & Pick<Query, 'test'>;

export const ContactDocument = gql`
    mutation Contact($email: String!, $message: String!, $name: String!) {
        contactMessage(
            messageInput: { email: $email, message: $message, name: $name }
        )
    }
`;
export type ContactMutationFn = Apollo.MutationFunction<
    ContactMutation,
    ContactMutationVariables
>;

/**
 * __useContactMutation__
 *
 * To run a mutation, you first call `useContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [contactMutation, { data, loading, error }] = useContactMutation({
 *   variables: {
 *      email: // value for 'email'
 *      message: // value for 'message'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useContactMutation(
    baseOptions?: Apollo.MutationHookOptions<
        ContactMutation,
        ContactMutationVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<ContactMutation, ContactMutationVariables>(
        ContactDocument,
        options,
    );
}
export type ContactMutationHookResult = ReturnType<typeof useContactMutation>;
export type ContactMutationResult = Apollo.MutationResult<ContactMutation>;
export type ContactMutationOptions = Apollo.BaseMutationOptions<
    ContactMutation,
    ContactMutationVariables
>;
export const TestDocument = gql`
    query Test {
        test
    }
`;

/**
 * __useTestQuery__
 *
 * To run a query within a React component, call `useTestQuery` and pass it any options that fit your needs.
 * When your component renders, `useTestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTestQuery({
 *   variables: {
 *   },
 * });
 */
export function useTestQuery(
    baseOptions?: Apollo.QueryHookOptions<TestQuery, TestQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<TestQuery, TestQueryVariables>(
        TestDocument,
        options,
    );
}
export function useTestLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<TestQuery, TestQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<TestQuery, TestQueryVariables>(
        TestDocument,
        options,
    );
}
export type TestQueryHookResult = ReturnType<typeof useTestQuery>;
export type TestLazyQueryHookResult = ReturnType<typeof useTestLazyQuery>;
export type TestQueryResult = Apollo.QueryResult<TestQuery, TestQueryVariables>;
