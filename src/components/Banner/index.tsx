import { Box, Text, Image, Flex } from '@chakra-ui/react'

export function Banner() {
  return (
    <Box width="100%" backgroundImage="banner_background.png" bgSize="cover">
      <Flex px="4" w="100%" maxWidth={1240} mx="auto" py={70} gap={100}>
        <Box width="100%" maxWidth="600">
          <Text
            fontSize="36px"
            fontWeight={500}
            lineHeight="54px"
            color="gray.100"
          >
            5 Continentes, <br />
            infinitas possibilidades.
          </Text>
          <Text fontSize="20px" color="gray.200" mt="5">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>

        <Image src="plane.svg" alt="aviao" mb={-100} />
      </Flex>
    </Box>
  )
}
