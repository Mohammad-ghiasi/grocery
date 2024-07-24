import { Box, IconButton, Text } from '@chakra-ui/react'
import React from 'react'
import { LuShoppingBasket } from 'react-icons/lu'

type propType= {
    mx: string;
    top: string;
    font: number;
    number: number
}

export default function ShoppingChart({mx, top, font, number} : propType) {
    return (
        <Box className={`flex items-center relative mx-${mx}`}>
            <IconButton
                icon={<LuShoppingBasket size='28px' />}
                aria-label='text'
            />
            <Box className={`absolute top-${top} right-0 bg-red-600 text-white rounded-full px-[5px]`}>
                <Text style={{ fontSize: `${font}px` }}>{number}</Text>
            </Box>
        </Box>
    )
}
