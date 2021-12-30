import s from "./Paginator.module.css"
import {createPages} from "./PagesCreator";

type PropsType = {
    currentPage: number
    onPageChanged: (page: number) => void
    pageSize: number
    totalUsersCount: number
}
export const Paginator = ({totalUsersCount, pageSize,currentPage, onPageChanged}: PropsType) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize) // Делим Количество юзеров на количество юзеров доступных на странице
    let pages = createPages(pagesCount, currentPage) // createPages возвращает массив


    return <div>
        {currentPage > 6 && <span className={s.page} onClick={()=> onPageChanged(1)}>1...</span>}
        {pages.map((p, index) => <span key={index} className={`${s.page} ${currentPage === p? s.selectedPage : ''}`}
                              onClick={() => onPageChanged(p)}>{p}</span>)} {/*Мапим Массив страниц */}
    </div>
}