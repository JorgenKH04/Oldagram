const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];
const container = document.querySelector("#container");
const posterPic = document.querySelector("#poster-pic");
const posterInfo = document.querySelector("#poster-info");
const postImg = document.querySelector("#post-img");
const likes = document.querySelector("#likes");
const comment = document.querySelector("#comment");

function renderPosts() {
  //   console.log(posterPic);
  //   console.log(posterInfo);
  //   console.log(postImg);
  //   console.log(likes);
  //   console.log(comment);
  for (let i = 0; i < posts.length; i++) {
    let currentPost = posts[i];
    let name = posts[i].name;
    let username = posts[i].username;
    let location = posts[i].location;
    let avatar = posts[i].avatar;
    let post = posts[i].post;
    let comment = posts[i].comment;
    let likes = posts[i].likes;

    renderPoster(avatar, name, location, post);
    renderFooter(likes, username, comment);
  }
}

function renderPoster(avatar, name, location, post) {
  let newEl = document.createElement("section");
  newEl.innerHTML = `
      <div class="poster">
          <img class="profile-pics" id="poster-pic" src="${avatar}"/>
          <p id="poster-info">
            <span class="bold" id="poster-name">${name}</span>
            ${location}
          </p>
        </div>
        <img id="post-img" class="post" src="${post}" />`;
  container.append(newEl);
}

function renderFooter(likes, username, comment) {
  let newEl = document.createElement("footer");
  newEl.innerHTML = ` 
    <div class="icon-div">
        <img class="icons" id="heart-icon" src="images/icon-heart.png" />
        <img class="icons" id="comment-icon" src="images/icon-comment.png" />
        <img class="icons" id="dm-icon" src="images/icon-dm.png" />
    </div>
        <p class="bold" id="likes">${likes} likes</p>
        <p id="comment">
            <span class="bold">${username}</span> ${comment}</p>`;
  container.append(newEl);
}

renderPosts();
