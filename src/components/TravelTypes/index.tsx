import {
  Flex,
  Text,
  Image,
  WrapItem,
  Wrap,
  useBreakpointValue,
  Box,
} from '@chakra-ui/react'

export function TravelTypes() {
  const isWideVersion = useBreakpointValue({
    base: true,
    md: false,
  })
  return (
    <Wrap
      width="100%"
      maxWidth={1240}
      mx="auto"
      px="4"
      mt="20"
      justify="space-around"
      spacing="20"
    >
      <WrapItem>
        <Flex
          direction={isWideVersion ? 'row' : 'column'}
          gap="4"
          justify="center"
          align="center"
        >
          {!isWideVersion ? (
            <Image src="cocktail.svg" alt="" />
          ) : (
            <Box
              w="3"
              h="3"
              color="highlight"
              bg="highlight"
              borderRadius="50%"
              alignSelf="center"
            />
          )}
          <Text fontSize="2xl" fontWeight="600">
            vida noturna
          </Text>
        </Flex>
      </WrapItem>
      <WrapItem>
        <Flex
          direction={isWideVersion ? 'row' : 'column'}
          gap="4"
          justify="center"
          align="center"
        >
          {!isWideVersion ? (
            <Image src="surf.svg" alt="" />
          ) : (
            <Box
              w="3"
              h="3"
              color="highlight"
              bg="highlight"
              borderRadius="50%"
              alignSelf="center"
            />
          )}
          <Text fontSize="2xl" fontWeight="600">
            praia
          </Text>
        </Flex>
      </WrapItem>
      <WrapItem>
        <Flex
          direction={isWideVersion ? 'row' : 'column'}
          gap="4"
          justify="center"
          align="center"
        >
          {!isWideVersion ? (
            <Image src="building.svg" alt="" />
          ) : (
            <Box
              w="3"
              h="3"
              color="highlight"
              bg="highlight"
              borderRadius="50%"
              alignSelf="center"
            />
          )}
          <Text fontSize="2xl" fontWeight="600">
            moderno
          </Text>
        </Flex>
      </WrapItem>
      <WrapItem>
        <Flex
          direction={isWideVersion ? 'row' : 'column'}
          gap="4"
          justify="center"
          align="center"
        >
          {!isWideVersion ? (
            <Image src="museum.svg" alt="" />
          ) : (
            <Box
              w="3"
              h="3"
              color="highlight"
              bg="highlight"
              borderRadius="50%"
              alignSelf="center"
            />
          )}
          <Text fontSize="2xl" fontWeight="600">
            clássico
          </Text>
        </Flex>
      </WrapItem>
      <WrapItem>
        <Flex
          direction={isWideVersion ? 'row' : 'column'}
          gap="4"
          justify="center"
          align="center"
        >
          {!isWideVersion ? (
            <Image src="earth.svg" alt="" />
          ) : (
            <Box
              w="3"
              h="3"
              color="highlight"
              bg="highlight"
              borderRadius="50%"
              alignSelf="center"
            />
          )}
          <Text fontSize="2xl" fontWeight="600">
            e mais...
          </Text>
        </Flex>
      </WrapItem>
    </Wrap>
  )
}
