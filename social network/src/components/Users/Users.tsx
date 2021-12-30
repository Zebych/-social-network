import {UserType} from "../../redux/usersReducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";
import s from './Users.module.css'

type UsersPropsType = {
    users: Array<UserType>
    currentPage: number
    pageSize: number
    totalUsersCount: number
    onPageChanged: (page: number) => void
    isFollowingProgress: string[],
    unfollowUserThunk: (userId: string) => void
    followUserThunk: (userId: string) => void

}

export const Users = ({
                          users,
                          currentPage,
                          onPageChanged,
                          pageSize,
                          unfollowUserThunk,
                          followUserThunk,
                          totalUsersCount,
                          isFollowingProgress
                      }: UsersPropsType) => {


    return (
        <div className={`${s.container} container`}>

            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} pageSize={pageSize}
                       totalUsersCount={totalUsersCount}/>
            <div className={s.userWrapper}>{

                users.map((u) =>
                    <User
                        key={u.id}
                        user={u}
                        isFollowingProgress={isFollowingProgress}
                        unfollowUserThunk={unfollowUserThunk}
                        followUserThunk={followUserThunk}
                    />)
            }
            </div>


        </div>
    )
}