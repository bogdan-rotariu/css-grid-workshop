import React from 'react'
import { BasicGrid } from '../01-basic/Basic'
import './TemplateAreasGrid.styles.scss'

export const TemplateAreasGrid = () => {
    const styles = {
        gridTemplateAreas: 
            `
            "left center right"
            "left center right"
            "bottom bottom bottom"
            `,
        gridTemplateColumns: '100px 1fr 100px',
    }
    return <BasicGrid style={styles} className='template-areas-grid' />
}