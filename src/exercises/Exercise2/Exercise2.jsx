import React from 'react'
import { BasicGrid } from '../../examples/01-basic/Basic'
import './Exercise2.styles.scss'

export const Exercise2 = () => {
    // Market place example
    return <BasicGrid className='exercise-2'>
        <div className="grid-item grid-item-1">Navigation</div>
        <div className="grid-item grid-item-2">Header</div>
        <div className="grid-item grid-item-3">Content</div>
    </BasicGrid>
}