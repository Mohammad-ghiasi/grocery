'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

const customTheme = extendTheme({
    components: {
        // Text: {
        //     baseStyle: {
        //         padding: 0,  // Disable default padding
        //     },
        // },
    },
    colors: {
        gray: {
            500: '#dde3ed', // Define your gray color here if needed
        },
        myGreen: {
            500: '#39B763',
        },
    },
})



export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ChakraProvider theme={customTheme}>
            {children}
        </ChakraProvider>
    )
}