const postHolder = document.getElementById("postHolder")
const logEl = document.getElementById("log-el")



const posts = [
    {
        name: "MD TAUFIK",
        username: "Hunter",
        location: "Portland, USA",
        avatar: "images/taufik.jpg",
        post: "https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBsYW5lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        comment: "It was a beautiful evening....",
        likes: 40000
    },
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "./images/avatar-vangogh.jpg",
        post: "./images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }

]

function render(){
    let postHtml =""
    for(let i = 0;i<posts.length;i++){
        postHtml += `<section>
        <div class="container">
            <div>
                <img class="user-img post-user" src="${posts[i].avatar}" alt="user-img">
            </div>
            <div class="username">

                 <p class="post-username">${posts[i].name}</p>
                     <p class="post-location">${posts[i].location}</p> 

            </div>
        </div>
        <div>

            <img class="post-img" src="${posts[i].post}" alt="">

        </div>
        <div class="ico">
            <img class="icons" src="./images/icon-heart.png" alt="">
            <img class="icons" src="./images/icon-comment.png" alt="">
            <img class="icons" src="./images/icon-dm.png" alt="">
        </div>
        <div>
            <p class="post-likes bold-text">${posts[i].likes} likes</p>
        </div>
        <div class="post-comments">

            <p class="comment bold-text">${posts[i].username}</p> 

            <p class="comment">${posts[i].comment}</p>
        </div>
    </section>`
    }
    postHolder.innerHTML = postHtml
    setTimeout (function(){
        modal.style.display = 'none'
    },500)
}

const modal = document.getElementById('modal')
const acceptBtn = document.getElementById('accept-btn')
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('modal-inner')

setTimeout(function(){
    modal.style.display = 'inline'
},1500)




consentForm.addEventListener('submit', function(event){
    event.preventDefault(); 
    
    const consentFormData = new FormData(consentForm)
    const name =  consentFormData.get('fullName')
    
    
    modalText.innerHTML = `
    <h1 id="upload-text">Welcome to the OldaGram Thanks For Login </h1>
    <h1 class='modal-display-name'>${name}</h1>
    <button id="log-el" onclick='render(), dispNone()'>Log In</button>
    `
   
})