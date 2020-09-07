import React from 'react'
import { BasicGrid } from "../01-basic/Basic"

export const MinMaxGrid = () => {
    // Worth Mentioning: auto-fit (stretching columns if needed) and auto-fill (creating more columns if needed)
    const styles = {
        gridTemplateColumns: 'repeat(auto-fill, 200px)',
        // gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
    }
    return <BasicGrid style={styles} />
}