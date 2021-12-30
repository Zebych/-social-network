import {NavLink} from "react-router-dom";
import userPhoto from "../../images/user.png";
import {UserType} from "../../redux/usersReducer";
import s from "./Users.module.css";
import SuperButton from "../common/SuperButton/SuperButton";


type UsersPropsType = {
    user: UserType
    isFollowingProgress: string[],
    unfollowUserThunk: (userId: string) => void
    followUserThunk: (userId: string) => void

}

export const User = ({
                         user,
                         unfollowUserThunk,
                         followUserThunk,
                         isFollowingProgress
                     }: UsersPropsType) => {


    return (
        <div className={s.user}>
            <div>
                <div>
                    <NavLink to={"/profile/" + user.id}> {/* Навлинк на юзера при нажатии на картинку */}
                        <img alt={'userPhoto'} className={s.avatar}
                             src={user.photos.small == null ? userPhoto : user.photos.small}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed ?
                        <SuperButton disabled={isFollowingProgress.some(id => id === user.id)} onClick={() => {
                            unfollowUserThunk(user.id)
                        }}>unfollow</SuperButton> : //дизейблим отдельную кнопку методом some
                        <SuperButton disabled={isFollowingProgress.some(id => id === user.id)} onClick={() => {
                            followUserThunk(user.id)
                        }}> follow</SuperButton>}
                </div>
                {/*если user.follow = true, тогда рисуем кнопку с анфоллов иначе кнопку с фоллов*/}
            </div>
            <div>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </div>

        </div>
    )
}