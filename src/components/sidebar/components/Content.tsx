// chakra imports
import { Box, Flex, Stack, Button, useColorModeValue } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import SidebarBrand from './Brand';
//   Custom components
import Brand from './Brand';
import Links from './Links';
import SidebarCard from './SidebarCard';
import { IRoute } from '@/src/types/navigation';

// FUNCTIONS
interface SidebarContentProps {
  routes: IRoute[];
}

function SidebarContent(props: SidebarContentProps) {
  const { routes } = props;

  // Button colors depending on mode
  const btnBg = useColorModeValue("blue.500", "white");
  const btnColor = useColorModeValue("white", "black");
  const btnHover = useColorModeValue("blue.500", "gray.200");

  return (
    <Flex direction="column" height="100%" pt="25px" borderRadius="30px">
      {/* Brand + Create Button */}
    <Brand />
      <Stack px="30px" mt="20px">
        <Button
          w="100%"
          leftIcon={<AddIcon />}
          bg={btnBg}
          color={btnColor}
          _hover={{ bg: btnHover }}
          borderRadius="12px"
          fontWeight="bold"
          shadow="sm"
        >
          Create New
        </Button>
      </Stack>

      {/* Sidebar Links */}
      <Stack direction="column" mt="30px" mb="auto">
        <Box ps="20px" pe={{ lg: '16px', '2xl': '16px' }}>
          <Links routes={routes} />
        </Box>
      </Stack>

      {/* Sidebar Bottom Card */}
      <Box
        ps="20px"
        pe={{ lg: '16px', '2xl': '20px' }}
        mt="60px"
        mb="40px"
        borderRadius="30px"
      >
        <SidebarCard />
      </Box>
    </Flex>
  );
}

export default SidebarContent;
