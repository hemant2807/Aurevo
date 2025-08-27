import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { AurevoLogo } from "../../icons/Icons";

// Custom components

export function SidebarBrand() {
  // Chakra color mode
  const logoColor = useColorModeValue("blue.500", "blue.500");
  const textColor = useColorModeValue("navy.800", "white");

  return (
    <>
      {/* Row: Logo + Brand name left aligned */}
      <Flex
        alignItems="center"
        flexDirection="row"
        w="100%"
        px="30px"
        my="24px"
      >
        <AurevoLogo h="50px" w="50px" color={logoColor} />
        <Text
          ml="12px"
          fontSize="4xl"
          fontWeight="bold"
          color={textColor}
        >
          Aurevo
        </Text>
      </Flex>

      {/* Separator line */}
      {/* <HSeparator mb="0px" /> */}
    </>
  );
}

export default SidebarBrand;
