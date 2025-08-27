import {
  Button,
  Flex,
  Text,
  useColorModeValue,
  Progress,
} from "@chakra-ui/react";

import NextLink from "next/link";

export default function SidebarCard() {
  // Colors based on mode
  const progressColor = useColorModeValue("white", "white");
  const trackColor = useColorModeValue("navy.500", "navy.500");

  return (
    <Flex
      justify="center"
      direction="column"
      align="center"
      bg="blue.500"
      borderRadius="30px"
      me="20px"
      position="relative"
      p="20px"
    >
      {/* Top Text */}
      <Flex direction="column" align="center" justify="center" w="100%">
        <Text
          fontSize={{ base: "md", xl: "lg" }}
          color="white"
          fontWeight="bold"
          mb="10px"
        >
          Available Credits: <span>5</span>
        </Text>

        {/* Progress Bar */}
        <Progress
          value={20} // dummy, replace dynamically
          size="sm"
          w="100%"
          borderRadius="full"
          colorScheme="blackAlpha"
          sx={{
            "& > div": {
              background: progressColor, // filled
            },
            background: trackColor, // track
          }}
          mb="8px"
        />

        {/* Usage Info */}
        <Text fontSize="sm" color="white" mb="16px">
          1 out of 5 credits used
        </Text>
      </Flex>

      {/* Button */}
      <Button
        as={NextLink}
        href="/dashboard/upgrade"
        bg="white"
        color="black"
        _hover={{ bg: "gray.200" }}
        _active={{ bg: "gray.300" }}
        fontWeight="semibold"
        fontSize="sm"
        minW="185px"
        mx="auto"
      >
        Upgrade to PRO
      </Button>
    </Flex>
  );
}
