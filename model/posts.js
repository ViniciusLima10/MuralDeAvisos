module.exports = {
    posts: [],

    getAll(){
        return this.posts;
    },

    newPost(title, description){

        this.posts.push({id: genereteId() , title, description})

    }

    //implementar Delete
}


function genereteId () {
    return Math.random().toString(36).substr(2, 9);
}