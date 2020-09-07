import React from 'react'
import { BasicGrid } from '../../examples/01-basic/Basic'
import './Exercise25.styles.scss'

export const Exercise25 = () => {
    // Market place example
    // 
    return <BasicGrid className='exercise-2'>
        <div className="grid-item grid-item-1">
            <nav>
                <ul>
                    <li className="nav-item">LOGO</li>
                    <li className="nav-item">Nav Item</li>
                    <li className="nav-item">Nav Item</li>
                    <li className="nav-item">Nav Item</li>
                    <li className="nav-item">Nav Item</li>
                    <li className="nav-item">Nav Item</li>
                    <li className="nav-item"><span>🔥</span>Icon Item</li>
                    <li className="nav-item"><span>🐧</span>Icon Item</li>
                    <li className="nav-item"><span>🔫</span>Icon Item</li>
                </ul>
            </nav>
        </div>
        <div className="grid-item grid-item-2">Header</div>
        <div className="grid-item grid-item-3">Content</div>
    </BasicGrid>
}