import {Avatar, Flex, HStack, Icon, IconButton, Text, useBreakpointValue, } from '@chakra-ui/react';
import React from 'react';
import { useSidebarContext } from '../contexts/SidebarContext';
import { FiMenu } from 'react-icons/fi';

const Header = () => {
    const isMobile = useBreakpointValue({
        base: true,
        lg: false,
    });

    const { onOpen } = useSidebarContext();

    return (
        <Flex
            as='header'
            w='100%'
            maxW={1920}
            h='20'
            mx='auto'
            px='2'
            py='2'
            align='center'
            boxShadow='0 1px 0 #ccc'
            color='gray.500'
            fontWeight='bold'>

            {isMobile && (
                <IconButton
                    icon={<Icon as={FiMenu} />}
                    onClick={onOpen}
                    variant='unstyled'
                    fontSize='20'
                    mr='2'
                ></IconButton>
            )}

            {isMobile ? <Text fontSize='1rem'>LOGO</Text> : <Text fontSize='2rem'>LOGO</Text>}

            <Flex ml='auto'>
                <HStack spacing={6}>
                    {isMobile ? <Text fontSize='1rem'>Antonio Miguel</Text> : <Text fontSize='2rem'>Antonio Miguel</Text>}
                    <Avatar size='lg' name='Antonio Miguel' />
                </HStack>
            </Flex>

        </Flex>
    );
};

export default Header;