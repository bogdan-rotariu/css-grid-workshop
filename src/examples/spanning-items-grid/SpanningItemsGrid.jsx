import React from 'react'
import { BasicGrid } from '../basic/Basic'
import './SpanningItemsGrid.styles.scss'

export const SpanningItemsGrid = () => {
    return <BasicGrid className={'spanning-children'} style={{
        gridTemplateColumns: 'repeat(12, 1fr)',
    }} />
}