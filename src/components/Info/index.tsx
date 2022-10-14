import { Image, Tooltip } from '@chakra-ui/react'

export function Info() {
  return (
    <Tooltip
      label="Europa tem 27 entre os 100 países mais visitados do mundo!"
      aria-label="A tooltip"
    >
      <Image marginLeft="4" display="inline" src="./info.svg" w="6" />
    </Tooltip>
  )
}
