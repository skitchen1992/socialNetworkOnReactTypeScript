import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";
import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


function MyPosts(props: MyPostsPropsType) {
    let postsElements = props.profilePage.posts.map((el) =>
        <Post id={el.id} message={el.message} likesCount={el.likesCount} key={el.id}/>)

    let onAddPost = (values: FormDataType) => {
        props.addPost(values.newPostText)
    }


    return (
        <div>
            <div className={classes.posts}>
                <div className={classes.myPosts}>My posts</div>
                <AddNewPostFormRedux onSubmit={onAddPost}/>
            </div>
            {postsElements}
        </div>
    )
}

type FormDataType = {
    newPostText: string
}
const  maxLength10 =  maxLengthCreator(10)
const AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={"newPostText"}
                   component={Textarea}
                   placeholder="Ввидите сообщение"
                   validate={[required,maxLength10]}/>
            <div>
                <button className={classes.button}>Add Post</button>
            </div>

        </form>
    )
}
const AddNewPostFormRedux = reduxForm<FormDataType>({form: 'profileAddNewPostForm'})(AddNewPostForm)

export default MyPosts;