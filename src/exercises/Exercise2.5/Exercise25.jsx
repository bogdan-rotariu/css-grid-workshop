import React from 'react'
import { BasicGrid } from '../../examples/01-basic/Basic'
import './Exercise25.styles.scss'

export const Exercise25 = () => {
    // Market place example
    // 
    return <BasicGrid className='exercise-25'>
        <div className="grid-item grid-item-1">
            <ul>
                <li className="nav-item">LOGO</li>
                <li className="nav-item">Nav Item</li>
                <li className="nav-item">Nav Item</li>
                <li className="nav-item">Nav Item</li>
                <li className="nav-item">Nav Item</li>
                <li className="nav-item">Nav Item</li>
                <li className="nav-item"><span>🔥</span></li>
                <li className="nav-item"><span>🐧</span></li>
                <li className="nav-item"><span>🔫</span></li>
            </ul>
        </div>
        <div className="grid-item grid-item-2">Header</div>
        <div className="grid-item grid-item-3">Content</div>
    </BasicGrid>
}