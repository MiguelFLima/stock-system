import React from "react";
import { Link as ChakraLink, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

const SidebarNav = () => {
  const { navigate } = useRouter();
  return (
    <Stack spacing="6">
      <Stack>
        <Text fontSize="1.5rem" fontWeight="bold" color="gray.400" ml={0}>
          CADASTRO
        </Text>

        <Stack>
          <ChakraLink
            _hover={{ bg: "gray.100" }}
            px="4"
            py="2"
            borderRadius={5}
            bg={navigate === "/" ? "gray.200" : ""}
          >
            <Link href="/">
              <Text fontSize={"1.2rem"} fontWeight="medium" color="gray.500">
                PRODUTOS
              </Text>
            </Link>
          </ChakraLink>
        </Stack>
      </Stack>

      <Stack>
        <Text fontSize="1.5rem" fontWeight="bold" color="gray.400">
          ESTOQUE
        </Text>

        <Stack>
          <ChakraLink
            _hover={{ bg: "gray.100" }}
            px="4"
            py="2"
            borderRadius={5}
            bg={navigate === "/balance" ? "gray.200" : ""}
          >
            <Link href="/balance">
              <Text fontSize={"1.2rem"} fontWeight="medium" color="gray.500">
                SALDO
              </Text>
            </Link>
          </ChakraLink>
          <ChakraLink
            _hover={{ bg: "gray.100" }}
            px="4"
            py="2"
            borderRadius={5}
            bg={navigate === "/stockEntries" ? "gray.200" : ""}
          >
            <Link href="/stockEntries">
              <Text fontSize={"1.2rem"} fontWeight="medium" color="gray.500">
                ENTRADAS
              </Text>
            </Link>
          </ChakraLink>
          <ChakraLink
            _hover={{ bg: "gray.100" }}
            px="4"
            py="2"
            borderRadius={5}
            bg={navigate === "/stockOutputs" ? "gray.200" : ""}
          >
            <Link href="/stockOutputs">
              <Text fontSize={"1.2rem"} fontWeight="medium" color="gray.500">
                SAÍDAS
              </Text>
            </Link>
          </ChakraLink>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SidebarNav;
