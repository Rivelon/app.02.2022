import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id:1, message: 'Hi, how are you', likesCount: 12},
            {id:2, message: 'It`s my first post', likesCount: 10},
        ],
        newPostText: 'input text'
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Artem'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Victor'},
            {id: 6, name: 'Valera'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is you it-kamasutra?'},
            {id: 3, message: 'YO'},
            {id: 4, message: 'YO'},
        ]
    }

}

export let addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 0
    }

    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}


export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export default  state