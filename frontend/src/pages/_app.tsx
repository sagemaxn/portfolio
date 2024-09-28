import '../styles/globals.css';
import { extendTheme } from '@chakra-ui/react';
import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const Button = {
    baseStyle: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        borderRadius: 'base',
    },
    sizes: {
        md: {
            fontSize: 'md',
        },
        lg: {
            fontSize: 'lg',
        },
    },
    variants: {
        solid: {
            bg: 'darkP',
            color: 'beige',
            _hover: {
                bg: 'purple',
            },
        },
    },
    defaultProps: {
        size: 'lg',
        variant: 'solid',
    },
};

const theme = extendTheme({
    colors: {
        beige: '#F5F5DC',
        purple: '#9F87AF',
        darkP: '#592E83',
        brown: '#533E2D',
    },
    styles: {
        global: {
            body: {
                bg: 'beige',
                color: 'darkP',
            },
            '*, *::before, *::after': {
                margin: 0,
                padding: 0,
                boxSizing: 'border-box',
            },
        },
    },
    space: {
        // Define consistent spacing values
        xs: '1em',
        sm: '2em',
        md: '4em',
        lg: '6em',
        xl: '8em',
    },
    components: {
        Button,
        Text: {
            color: 'black',
            fontWeight: 'medium',
        },
    },
});

const uri =
    process.env.NODE_ENV === 'production'
        ? 'https://portfolio-backend.sagemaxn.dev/graphql'
        : 'http://localhost:4000/graphql';
const client = new ApolloClient({
    uri,
    cache: new InMemoryCache(),
});

import { ChakraProvider } from '@chakra-ui/react';
function MyApp({ Component, pageProps }) {
    return (
        <ApolloProvider client={client}>
            <ChakraProvider theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </ApolloProvider>
    );
}

export default MyApp;
