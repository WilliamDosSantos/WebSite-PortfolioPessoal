import React from 'react'
import { Item, Icon, Text } from './style'

export default function ItemContact({ IconFa, LinkContact }) {
  return (
    <Item>
      <Icon>
        <IconFa />
      </Icon>
      <Text>
        {LinkContact}
      </Text>
    </Item>
  )
}
