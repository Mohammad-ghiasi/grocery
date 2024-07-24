import { Box, Button, IconButton, Menu, MenuButton, MenuItem, MenuList, Show, Text } from '@chakra-ui/react'
import React from 'react'
import ScrollAnimate from '../Scroll'
import Image from 'next/image'
import Link from 'next/link'
import { BiCategory } from "react-icons/bi";
import { VscSearch } from "react-icons/vsc";
import { LuShoppingBasket } from "react-icons/lu";
import { LuLogIn } from "react-icons/lu";
import ShoppingChart from '../shooping/ShoppingChart'

export default function MyNavbar() {
    return (
        <header>
            <Box as='nav' className="fixed top-0  w-full shadow-lg bg-white">

                <Box className='flex space-x-20 lg:space-x-32 px-pxsm md:px-pxmd lg:px-pxlg py-pysm md:py-pymd lg:py-pylg'>
                    <Link href='/'>
                        <Box className='relative w-[130px] h-[50px] md:w-[140px] md:h-[55px] lg:w-[150px] lg:h-[55.5px]'>
                            <Image
                                alt='logo'
                                src='/images/logo.png'
                                loading='lazy'
                                fill
                            />
                        </Box>
                    </Link>
                    <Show above='md'>
                        <Box className='flex justify-between items-center  w-full '>
                            <Box className='flex space-x-5 '>
                                <Menu>
                                    <MenuButton rounded={'full'} as={Button} background='gray.500' size={'md'}>
                                        <Box className='flex flex-row justify-center items-center space-x-2'>
                                            <BiCategory size='22px' />
                                            <Text className='mt-[-2px]'>Category</Text>
                                        </Box>
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem>Download</MenuItem>
                                        <MenuItem>Create a Copy</MenuItem>
                                        <MenuItem>Mark as Draft</MenuItem>
                                        <MenuItem>Delete</MenuItem>
                                        <MenuItem>Attend a Workshop</MenuItem>
                                    </MenuList>
                                </Menu>
                                <Box className='flex items-center space-x-4 bg-white border rounded-full p-1'>
                                    <VscSearch size='27px' className='text-gray-700 ms-3' />
                                    <input className='outline-none px-2 w-[100%]' type='text' placeholder='Search...' />
                                </Box>
                            </Box>
                            <Box className='flex flex-row-reverse'>
                                <Button size={'md'} textColor='white' background='myGreen.500'>
                                    Login
                                </Button>
                                <ShoppingChart font={13} mx='6' number={2} top='0'  />
                               
                            </Box>
                        </Box>
                    </Show>
                    <Box className='md:hidden flex  justify-end items-center  w-full'>
                        <ShoppingChart font={10} mx='2' number={2} top='0'  />
                        {/* <Box className='flex items-center relative mx-2'>
                            <IconButton
                                icon={<LuShoppingBasket size='28px'  />}
                                aria-label='text'
                            />
                            <Box className='absolute top-0 right-0 bg-red-600 text-white rounded-full px-[5px]'>
                                <Text className='text-[10px]'>2</Text>
                            </Box>
                        </Box> */}
                        <IconButton
                            icon={<LuLogIn size='28px'  />}
                            aria-label='text'
                        />
                    </Box>
                </Box>
                <ScrollAnimate />
            </Box>
        </header>
    )
}
