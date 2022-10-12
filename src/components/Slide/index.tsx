import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Navigation, Pagination } from 'swiper'
import { Box, Flex, Text } from '@chakra-ui/react'

export function Slide() {
  return (
    <Box w="100%" maxWidth={1240} mx="auto" my="20">
      <Swiper
        pagination={true}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Flex
            w="1240px"
            h="450px"
            bgImage="europe.png"
            justify="center"
            align="center"
            direction="column"
          >
            <Text color="gray.50" fontSize="5xl" fontWeight="600">
              Europa
            </Text>
            <Text color="gray.200" fontSize="xl" fontWeight="600">
              O continente mais antigo.
            </Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            w="1240px"
            h="450px"
            bgImage="europe.png"
            justify="center"
            align="center"
            direction="column"
          >
            <Text color="gray.50" fontSize="5xl" fontWeight="600">
              Europa
            </Text>
            <Text color="gray.200" fontSize="xl" fontWeight="600">
              O continente mais antigo.
            </Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            w="1240px"
            h="450px"
            bgImage="europe.png"
            justify="center"
            align="center"
            direction="column"
          >
            <Text color="gray.50" fontSize="5xl" fontWeight="600">
              Europa
            </Text>
            <Text color="gray.200" fontSize="xl" fontWeight="600">
              O continente mais antigo.
            </Text>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}
