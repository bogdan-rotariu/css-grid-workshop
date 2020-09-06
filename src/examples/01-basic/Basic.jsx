import React from 'react'
import classNames from 'classnames'
import './Basic.styles.scss'

export const BasicGrid = ({style, className, children}) => {
    return (
        <div className={classNames('grid-container', className)} style={style}>
          {children || (
            <>
              <div className="grid-item">item 1</div>
              <div className="grid-item">item 2</div>
              <div className="grid-item">item 3</div>
              <div className="grid-item">item 4</div>
              <div className="grid-item">item 5</div>
              <div className="grid-item">item 6</div>
              <div className="grid-item">item 7</div>
              <div className="grid-item">item 8</div>
              <div className="grid-item">item 9</div>
              <div className="grid-item">item 10</div>
            </>
          )}
      </div>
    )
}