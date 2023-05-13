import '../styles/globals.css';

// 1. Import `extendTheme`
import { extendTheme } from '@chakra-ui/react';

import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const Button = {
    // The styles all button have in common
    baseStyle: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        borderRadius: 'base', // <-- border radius is same for all variants and sizes
    },
    // Two sizes: sm and md
    sizes: {
        sm: {
            fontSize: 'sm',
            px: 4, // <-- px is short for paddingLeft and paddingRight
            py: 3, // <-- py is short for paddingTop and paddingBottom
        },
        md: {
            fontSize: 'md',
            px: 6, // <-- these values are tokens from the design system
            py: 4, // <-- these values are tokens from the design system
        },
    },
    // Two variants: outline and solid
    variants: {
        outline: {
            border: '2px solid',
            borderColor: 'red.200',
            color: 'red.200',
        },
        solid: {
            bg: '#white',
            color: '#black',
            //#ff8547 orangey
            //"#ff6961" pastel red
        },
    },
    // The default size and variant values
    defaultProps: {
        size: 'md',
        variant: 'solid',
    },
};

const theme = extendTheme({
    components: {
        Button,
    },
});
const uri = process.env.NODE_ENV === 'production' ? 'http://portfolio-backend.sagemaxn.dev/graphql' : 'http://localhost:4000'
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
