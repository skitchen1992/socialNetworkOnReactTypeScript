import s from './MyPosts.module.css';
import Post from './Post/Post';
import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";
import React from 'react';
import Typography from "@material-ui/core/Typography";



const MyPosts = React.memo(function MyPosts(props: MyPostsPropsType) {
    let postsElements = props.profilePage.posts.map((el) =>
        <Post id={el.id} message={el.message}  key={el.id}/>)

    let onAddPost = (values: FormDataType) => {
        props.addPost(values.newPostText)
    }
    return (
        <div >
            <div className={s.wrapper}>
                <Typography variant="h6" >My posts</Typography>
                <AddNewPostFormRedux onSubmit={onAddPost}/>
            </div>
            {postsElements}
        </div>
    )
})

type FormDataType = {
    newPostText: string
}
const maxLength10 = maxLengthCreator(100)
const AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={"newPostText"}
                   component={Textarea}
                   placeholder="What are you thinking now?"
                   validate={[required, maxLength10]}/>
            <div className={s.wrapButton}>
                <button className={s.button}>Add Post</button>
            </div>

        </form>
    )
}
const AddNewPostFormRedux = reduxForm<FormDataType>({form: 'profileAddNewPostForm'})(AddNewPostForm)

export default MyPosts;