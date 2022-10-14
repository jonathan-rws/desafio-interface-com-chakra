import { Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'

interface SlideProps {
  place: string
  subtitle: string
  imgUrl: string
  link: string
}

export function Slide({ place, subtitle, imgUrl, link }: SlideProps) {
  return (
    <Link href={link}>
      <Flex
        cursor="pointer"
        w="100%"
        h="450px"
        maxWidth="1240px"
        bgImage={imgUrl}
        backgroundSize="cover"
        justify="center"
        align="center"
        direction="column"
      >
        <Text color="gray.50" fontSize="5xl" fontWeight="600">
          {place}
        </Text>
        <Text color="gray.200" fontSize="xl" fontWeight="600">
          {subtitle}
        </Text>
      </Flex>
    </Link>
  )
}
