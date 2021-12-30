import s from './ErrorPage.module.css'
import SuperButton from "../common/SuperButton/SuperButton";
import {useHistory} from 'react-router-dom';

export const Error = () => {
    let history = useHistory()
    const onCLickHandler = () => {
        return history.push('/profile')
    }
    return (<div className={s.wrapper}>
        <h1>
            Woops, page not found 404
        </h1>
        <SuperButton onClick={() => onCLickHandler()}>
            return
        </SuperButton>

    </div>)
}