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
        sm: {
            fontSize: 'sm',
            px: 4,
            py: 3,
        },
        md: {
            fontSize: 'md',
            px: 6,
            py: 4,
        },
    },
    variants: {
        outline: {
            border: '2px solid',
            borderColor: 'red.200',
            color: 'red.200',
        },
        solid: {
            bg: '#white',
            color: '#black',
        },
    },
    defaultProps: {
        size: 'md',
    },
};

const theme = extendTheme({
    colors: {
        blue: '#0F172A',
    },
    styles: {
        global: {
            body: {
                bg: '#F5F5DC',
                color: '#0F172A',
            },
        },
    },
    components: {
        Button,
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
