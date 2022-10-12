import { Flex, Image } from '@chakra-ui/react'
export function Header() {
  return (
    <Flex
      mx="auto"
      maxWidth={1240}
      width="100%"
      height={100}
      justify="center"
      align="center"
    >
      <Image src="logo.svg" alt="" />
    </Flex>
  )
}
