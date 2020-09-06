import React from 'react'
import { BasicGrid } from '../../examples/01-basic/Basic'
import './Exercise1.styles.scss'

export const Exercise1 = () => {
    return <BasicGrid className='exercise-1'>
        {[...Array(60).keys()].map(idx => {
            return <div className={`grid-item grid-item-${idx}`}>{idx}</div>
        })}
    </BasicGrid>
}