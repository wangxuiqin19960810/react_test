import storageUtils from "./storageUtils";

export default {
    user:storageUtils.getUser() //用来保存用户登录的信息，初始值为在localstoreage中读取的user
}