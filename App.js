import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
const ApplicationForm = () => {
const { register, handleSubmit, formState: { errors } } = useForm();
const [posts,setPosts]=useState([]);
console.log(errors);
    
async function onPostHandler(){
    const posts = await axios.get("https://jsonplaceholder.typicode.com/posts")
 console.log(posts);
 setPosts(posts.data)
}
const onSubmit = async (data) => {
console.log(data);
axios.post("https://jsonplaceholder.typicode.com/posts",data)
};
return ( 
<>
<form onSubmit={handleSubmit(onSubmit)}>
<h1>Axios Form</h1>
<label>
User id:
<input type="number"{...register('userId', { required: true, maxLength: 2 })} placeholder="User id" />
 {errors?.userId &&  <p>user id is required and should not exceed 2</p>}
 </label>
<br />
<label>
Title:
 <input type='text' {...register('Title', { required: true, maxLength: 10 })} placeholder="Title" />
{errors?.title && <p>Title is required and should not exceed 10</p>}
</label>
 <br />
<label>
 id:
<input type="id" {...register('id', { required: true, maxLength: 2 })} placeholder='id'/>
{errors?.id && <p> id is required and should not exceed 2</p>}
 </label>
 <br />
 <label>
 body:
<input type="body" {...register('body', { required: true, maxLength: 20 })} placeholder='body'/>
{errors?.body && <p> body is required and should not exceed 20</p>}
 </label>
 <br />
 <br />
<button type="submit">Submit</button>
</form>  
<button onClick={onPostHandler}> Open </button>{
posts.length && posts.map(post => <><p> {post.id}  </p> <p> {post.body} </p> <p> {post.title}</p></>)
 }</>
);
}
export default ApplicationForm;