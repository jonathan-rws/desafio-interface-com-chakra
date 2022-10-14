import { Flex, Image } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
export function Header() {
  const { asPath } = useRouter()
  console.log(asPath)
  return (
    <Flex
      position="relative"
      mx="auto"
      maxWidth={1240}
      width="100%"
      height={100}
      justify="center"
      align="center"
    >
      {asPath !== '/' && (
        <Link href="/">
          <a>
            <Image
              src="left-arrow.svg"
              position="absolute"
              left="4"
              bottom="0"
              top="0"
              my="auto"
              w="8"
              h="8"
              alt="voltar"
            />
          </a>
        </Link>
      )}
      <Image src="logo.svg" alt="" />
    </Flex>
  )
}
