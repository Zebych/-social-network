import React, {useState} from 'react';
import s from '../../Users/User.module.css'

type UsersPropsType = {
    onPageChanged: (currentPage: number) => void,
    totalItemCount: number,
    pageSize: number,
    currentPage: number,
    portionSize: number,
}

const Paginator = (props: UsersPropsType) => {

    const pagesCount = Math.ceil(props.totalItemCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const portionCount = Math.ceil(pagesCount / props.portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber-1) * props.portionSize + 1
    const rightPortionPageNumber = portionNumber * (props.portionSize)

    return (
        <div>
            {portionNumber>1 && <button onClick={()=>{setPortionNumber(portionNumber-1)}}>Prev</button> }
            {pages.filter(p=>p>=leftPortionPageNumber && p<=rightPortionPageNumber).map(p => {
                return (
                    <span className={props.currentPage === p ? s.selected : ''}
                          onClick={(e) => {
                              props.onPageChanged(p)
                          }}>
                                {p}
                            </span>
                )
            })}
            {portionCount>portionNumber &&
            <button onClick={()=>{setPortionNumber(portionNumber+1) }}>Next</button>
            }
        </div>
    )
}

export default Paginator;