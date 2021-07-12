import React from 'react';
import classes from "./Paginator.module.css";




type PaginatorTypes = {
    onPageChanged: (pageNumber: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
}


const Paginator = (props: PaginatorTypes) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (

            <div className={classes.currentPage}>
                {pages.map(p => props.currentPage === p ? <span onClick={(e) => {
                        props.onPageChanged(p)
                    }} className={classes.selectedPage}>{p}</span> :
                    <span onClick={(e) => {
                        props.onPageChanged(p)
                    }}>{p}</span>)}
            </div>

    );
};

export default Paginator;