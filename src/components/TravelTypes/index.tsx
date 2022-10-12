import { Flex, Text, Image, Box } from '@chakra-ui/react'

export function TravelTypes() {
  return (
    <Box width="100%" maxWidth={1240} mx="auto" px="4" mt="20">
      <Flex justify="space-between">
        <Flex direction="column" justify="center" align="center">
          <Image src="cocktail.svg" alt="" />
          <Text fontSize="2xl" fontWeight="600" mt="6">
            vida noturna
          </Text>
        </Flex>
        <Flex direction="column" justify="center" align="center">
          <Image src="surf.svg" alt="" />
          <Text fontSize="2xl" fontWeight="600" mt="6">
            praia
          </Text>
        </Flex>
        <Flex direction="column" justify="center" align="center">
          <Image src="building.svg" alt="" />
          <Text fontSize="2xl" fontWeight="600" mt="6">
            moderno
          </Text>
        </Flex>
        <Flex direction="column" justify="center" align="center">
          <Image src="museum.svg" alt="" />
          <Text fontSize="2xl" fontWeight="600" mt="6">
            clássico
          </Text>
        </Flex>
        <Flex direction="column" justify="center" align="center">
          <Image src="earth.svg" alt="" />
          <Text fontSize="2xl" fontWeight="600" mt="6">
            e mais...
          </Text>
        </Flex>
      </Flex>
    </Box>
  )
}
