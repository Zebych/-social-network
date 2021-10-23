import React from 'react';
import s from '../../Users/User.module.css'

type UsersPropsType = {
    onPageChanged: (currentPage: number) => void,
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
}

const Paginator = (props: UsersPropsType) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
            <div>
                {pages.map(p => {
                    return (
                        <span className={props.currentPage === p ? s.selected : ''}
                              onClick={(e) => {
                                  props.onPageChanged(p)
                              }}>
                                {p}
                            </span>
                    )
                })}
            </div>
    )
}

export default Paginator;