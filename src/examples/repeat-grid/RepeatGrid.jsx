import React from 'react'
import { BasicGrid } from '../basic/Basic'

export const RepeatGrid = () => {
    const styles = {
        // gridTemplateColumns: 'repeat(5, 2fr 1fr)',
        // gridTemplateColumns: '1rem repeat(3, 3fr 2fr) 2rem repeat(2, 1fr)',
        gridTemplateColumns: 'repeat(12, 1fr)',
    }

    return (
        <BasicGrid style={styles} />
    )
}