import { Box, Text } from '@chakra-ui/react'
import { Banner } from '../components/Banner'
import { Header } from '../components/Header'
import { Slide } from '../components/Slide'
import { TravelTypes } from '../components/TravelTypes'

export default function Home() {
  return (
    <Box>
      <Header />
      <Banner />
      <TravelTypes />
      <Box width={90} borderBottom="2px solid #47585B" mx="auto" my="20"></Box>
      <Text textAlign="center" fontSize="4xl" fontWeight="500">
        Vamos nessa?? <br /> Então escolha seu continente
      </Text>

      <Slide />
    </Box>
  )
}
