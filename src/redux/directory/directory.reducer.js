const INITIAL_STATE = {
    sections: [
        {
            title: 'hats',
            imageUrl : 'https://images.unsplash.com/photo-1504087263797-29091cad4826?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGF0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
            id: 1,
            linkUrl:'shop/hats' 
        },
        {
            title: 'jackets',
            imageUrl: 'https://images.unsplash.com/photo-1521165946603-4019d13d7d46?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGVuaW0lMjBqYWNrZXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
            id: 2,
            linkUrl:'shop/jackets'
        },
        {
            title: 'sneakers',
            imageUrl: 'https://images.unsplash.com/photo-1554192833-a5cd504427dd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjY1fHxzbmVha2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
            id: 3,
            //linkUrl:''
            linkUrl: 'shop/sneakers'
        },
        {
            title: 'women',
            imageUrl: 'https://images.unsplash.com/photo-1561766619-7446603148a2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM1fHx3b21hbiUyMGxhbmRzY2FwZSUyMGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
            size: 'large',
            id: 4,
            //linkUrl:''
            linkUrl: 'shop/womens'
          },
          {
            title: 'men',
            imageUrl: 'https://images.unsplash.com/photo-1549043671-1e4550948355?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjYxfHxtYW58ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
            size: 'large',
            id: 5,
            //linkUrl:''
            linkUrl: 'shop/mens'
          }
        ]
};

const directoryReducer = (state = INITIAL_STATE , action) => {
    switch(action.type ){
        default:
            return state;
    }
};

export default directoryReducer;