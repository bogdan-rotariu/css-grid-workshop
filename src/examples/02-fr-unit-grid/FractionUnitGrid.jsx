import React from 'react'
import { BasicGrid } from '../01-basic/Basic'

export const FractionUnitGrid = () => {
    const styles = {
        gridTemplateColumns: '1fr 1fr 1fr',
        gridTemplateRows: '1fr 1fr 1fr',
        height: '500px',
    }

    return <BasicGrid style={styles} />
}