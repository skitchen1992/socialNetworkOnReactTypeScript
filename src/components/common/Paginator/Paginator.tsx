import React, {useState} from 'react';
import classes from "./Paginator.module.css";


type PaginatorTypes = {
    onPageChanged: (pageNumber: number) => void
    totalItemsCount: number
    pageSize: number
    currentPage: number
}


const Paginator = (props: PaginatorTypes) => {
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const portionSize = 10

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize

    return (

        <div className={classes.currentPage}>
            {portionNumber > 1 &&
            <button onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>}

            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => props.currentPage === p ? <span onClick={(e) => {
                        props.onPageChanged(p)
                    }} className={classes.selectedPage}>{p}</span> :
                    <span className={classes.span} onClick={(e) => {
                        props.onPageChanged(p)
                    }}>{p}</span>)}
            {portionCount > portionNumber &&
            <button className={classes.button} onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>}
        </div>

    );
};

export default Paginator;