import { takeLatest, call, put } from 'redux-saga/effects'
import postApi from '../Api/postApi'
import userApi from '../Api/userApi'
import * as postAction from '../Redux/action/postAction'
import * as userAction from '../Redux/action/userAction'
function* fetchPost() {
    const posts = yield call(postApi.fetchAllPost)

    if (posts.status === 200) {
        yield put(postAction.fetchAllPostSuccess(posts.data))
    }
}
function* fetchUser() {
    const users = yield call(userApi.fetchUser)
    if (users.status === 200) {
        yield put(userAction.fetchUserSuccess(users.data))
    }

}

function* mySaga() {
    yield takeLatest("FETCH_ALL_POST", fetchPost)
    yield takeLatest("FETCH_USER", fetchUser)
}
export default mySaga