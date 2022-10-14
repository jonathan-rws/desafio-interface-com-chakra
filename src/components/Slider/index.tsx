import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Navigation, Pagination } from 'swiper'
import { Box } from '@chakra-ui/react'
import { Slide } from './Slide'

export function Slider() {
  return (
    <Box w="100%" maxWidth={1240} mx="auto" my="20">
      <Swiper
        pagination={true}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            link="/europe"
            imgUrl="./slide_images/europe.png"
            place="Europa"
            subtitle="O continente mais antigo"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            link="/america"
            imgUrl="./slide_images/america.jpg"
            place="America"
            subtitle="O novíssimo mundo"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            link="/africa"
            imgUrl="./slide_images/africa.jpg"
            place="África"
            subtitle="Continente selvagem"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            link="/asia"
            imgUrl="./slide_images/asia.jpg"
            place="Ásia"
            subtitle="Cultura oriental"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            link="/oceania"
            imgUrl="./slide_images/oceania.jpg"
            place="Oceania"
            subtitle="Terra do canguru"
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}
