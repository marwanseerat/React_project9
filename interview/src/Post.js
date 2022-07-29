import React from 'react'
import axios from 'axios';
class Post extends React.Component {
    state = {
    category: '',
    topic_title:'',
    topic:'',
    posts: []
    }

    componentDidMount() {
        const url = 'http://localhost/React_project9/back-end/post.php'
        axios.get(url).then(response => response.data)
        .then((data) => {
          this.setState({ posts: data })
          console.log(this.state.posts)
         })
      }


      handleFormSubmit( event ) {
        event.preventDefault();
        let formData = new FormData();
        formData.append('category', this.state.category)
        formData.append('topic_title', this.state.topic_title)
        formData.append('topic', this.state.topic)
        axios({
            method: 'post',
            url: 'http://localhost/React_project9/back-end/post.php',
            data: formData,   
        })
        .then(function (response) {
            //handle success
            console.log(response)
            alert('New Post Successfully Added.');  
        })
        .catch(function (response) {
            //handle error
            console.log(response)
        });
    }


      render(){
        return(
            <>
            <div className="container">
  <div className="row">
    <div className="col-md-8 col-md-offset-2">
      <h1>Create post</h1>
      <form action="" >
        <div className="form-group has-error">
        <select className="form-select" aria-label="Default select example " name='category' value={this.state.category} onChange={e => this.setState({  category: e.target.value })}>
        <option selected="">category</option>
        <option >Back-end</option>
        <option >Front-end</option>
        <option >Database</option>
        </select>
          <span className="help-block">Field not entered!</span>
        </div>
        <div className="form-group">
          <label htmlFor="title">
            Title <span className="require">*</span>
          </label>
          <input type="text" className="form-control" name="topic_title" value={this.state.topic_title} onChange={e => this.setState({  topic_title: e.target.value })} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            rows={5}
            className="form-control"
            name="topic"
    
            value={this.state. topic} onChange={e => this.setState({  topic: e.target.value })}
          />
        </div>
        <div className="form-group">
          <p>
            <span className="require">*</span> - required fields
          </p>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary" >
            Create
          </button>
          <button className="btn btn-default">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</div>
 {this.state.posts.map((post,index) => (
    <div key={index}>
        <h4>{ post.category }</h4>
        <h3>{ post.topic_title }</h3>
        <p>{ post.topic }</p>
    </div>
 ))}

</>
        )
      }
   
}
  export default Post;