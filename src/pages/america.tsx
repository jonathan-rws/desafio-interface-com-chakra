import {
  AspectRatio,
  Box,
  Flex,
  SimpleGrid,
  Text,
  useBreakpointValue,
  Wrap,
  WrapItem,
  Image,
} from '@chakra-ui/react'
import { Info } from '../components/Info'
import { Header } from '../components/Header'

export default function America() {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  })
  return (
    <Box>
      <Header />
      <AspectRatio
        ratio={14.4 / 5}
        mx="auto"
        maxW="1440px"
        backgroundColor="red"
        backgroundPosition="center"
        backgroundSize="cover"
        bgImage="continent_banners/america.png"
      >
        <Box position="relative">
          {isWideVersion ? (
            <Text
              position="absolute"
              bottom="59"
              left="140"
              fontSize="5xl"
              fontWeight="700"
              color="gray.100"
              textShadow="2px 2px 5px #000000"
            >
              América
            </Text>
          ) : (
            <Text
              fontSize="5xl"
              fontWeight="700"
              color="gray.100"
              textShadow="2px 2px 5px #000000"
            >
              América
            </Text>
          )}
        </Box>
      </AspectRatio>
      <SimpleGrid
        mx="auto"
        mt={['10', '20']}
        px="4"
        minChildWidth={['300px', '400px']}
        spacing="50px"
        maxWidth="1192px"
      >
        <Text fontSize="xl" lineHeight="36px" textAlign="justify">
          A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>
        <Flex justifyContent="space-between" direction="row" align="center">
          <Flex direction="column" align="center">
            <Text color="highlight" fontWeight="600" fontSize={['3xl', '4xl']}>
              50
            </Text>
            <Text color="gray.700" fontWeight="600" fontSize={['md', '2xl']}>
              países
            </Text>
          </Flex>
          <Flex direction="column" align="center">
            <Text color="highlight" fontWeight="600" fontSize={['3xl', '4xl']}>
              60
            </Text>
            <Text color="gray.700" fontWeight="600" fontSize={['md', '2xl']}>
              línguas
            </Text>
          </Flex>
          <Flex direction="column" align="center">
            <Text color="highlight" fontWeight="600" fontSize={['3xl', '4xl']}>
              27
            </Text>
            <Text
              align="center"
              display="flex"
              color="gray.700"
              fontWeight="600"
              fontSize={['md', '2xl']}
            >
              cidades +100
              <Info />
            </Text>
          </Flex>
        </Flex>
      </SimpleGrid>
      <Text
        px="4"
        maxWidth="1192px"
        mx="auto"
        fontSize="4xl"
        fontWeight="500"
        color="gray.700"
        mt="20"
        mb="10"
      >
        Cidades +100
      </Text>
      <Wrap
        mx="auto"
        px="4"
        maxW="1192px"
        mb="20"
        spacing="10"
        justify={isWideVersion ? 'flex-start' : 'center'}
      >
        <WrapItem>
          <Flex direction="column">
            <Image
              src="./city_images/europe/london.png"
              w="256px"
              alt="imagem do continente"
            />
            <Flex
              border="1px solid  #FFBA08"
              borderBottomRadius="4px"
              borderTop="none"
              justify="space-between"
              align="center"
              p="6"
            >
              <Box>
                <Text fontSize="xl" fontWeight="600" color="gray.700">
                  Londres
                </Text>
                <Text fontWeight="500" color="gray.500">
                  Reino Unido
                </Text>
              </Box>
              <Image
                src="./country_images/uk.png"
                w="30px"
                h="30px"
                alt="imagem da cidade"
              />
            </Flex>
          </Flex>
        </WrapItem>
        <WrapItem mx="auto">
          <Flex direction="column">
            <Image
              src="./city_images/europe/london.png"
              w="256px"
              alt="imagem do continente"
            />
            <Flex
              border="1px solid  #FFBA08"
              borderBottomRadius="4px"
              borderTop="none"
              justify="space-between"
              align="center"
              p="6"
            >
              <Box>
                <Text fontSize="xl" fontWeight="600" color="gray.700">
                  Londres
                </Text>
                <Text fontWeight="500" color="gray.500">
                  Reino Unido
                </Text>
              </Box>
              <Image
                src="./country_images/uk.png"
                w="30px"
                h="30px"
                alt="imagem da cidade"
              />
            </Flex>
          </Flex>
        </WrapItem>
        <WrapItem mx="auto">
          <Flex direction="column">
            <Image
              src="./city_images/europe/london.png"
              w="256px"
              alt="imagem do continente"
            />
            <Flex
              border="1px solid  #FFBA08"
              borderBottomRadius="4px"
              borderTop="none"
              justify="space-between"
              align="center"
              p="6"
            >
              <Box>
                <Text fontSize="xl" fontWeight="600" color="gray.700">
                  Londres
                </Text>
                <Text fontWeight="500" color="gray.500">
                  Reino Unido
                </Text>
              </Box>
              <Image
                src="./country_images/uk.png"
                w="30px"
                h="30px"
                alt="imagem da cidade"
              />
            </Flex>
          </Flex>
        </WrapItem>
        <WrapItem mx="auto">
          <Flex direction="column">
            <Image
              src="./city_images/europe/london.png"
              w="256px"
              alt="imagem do continente"
            />
            <Flex
              border="1px solid  #FFBA08"
              borderBottomRadius="4px"
              borderTop="none"
              justify="space-between"
              align="center"
              p="6"
            >
              <Box>
                <Text fontSize="xl" fontWeight="600" color="gray.700">
                  Londres
                </Text>
                <Text fontWeight="500" color="gray.500">
                  Reino Unido
                </Text>
              </Box>
              <Image
                src="./country_images/uk.png"
                w="30px"
                h="30px"
                alt="imagem da cidade"
              />
            </Flex>
          </Flex>
        </WrapItem>
        <WrapItem mx="auto">
          <Flex direction="column">
            <Image
              src="./city_images/europe/london.png"
              w="256px"
              alt="imagem do continente"
            />
            <Flex
              border="1px solid  #FFBA08"
              borderBottomRadius="4px"
              borderTop="none"
              justify="space-between"
              align="center"
              p="6"
            >
              <Box>
                <Text fontSize="xl" fontWeight="600" color="gray.700">
                  Londres
                </Text>
                <Text fontWeight="500" color="gray.500">
                  Reino Unido
                </Text>
              </Box>
              <Image
                src="./country_images/uk.png"
                w="30px"
                h="30px"
                alt="imagem da cidade"
              />
            </Flex>
          </Flex>
        </WrapItem>
      </Wrap>
    </Box>
  )
}
