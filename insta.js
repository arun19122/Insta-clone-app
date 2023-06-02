let likeEl = document.getElementById("like");
let likeNumberEl = document.getElementById("likeNumber");
let followEl = document.getElementById("follow");
let savePostEl = document.getElementById("savePost");
let isLiked = false;
let isSaved = false;
let isFollowed = false;
let prevCount = parseInt(likeNumberEl.textContent);

function toggleLike(){
    if (isLiked === false){
      likeEl.classList.remove("far");
      likeEl.classList.add("fas");
      likeEl.classList.add("red-icon");
      isLiked = true;
      prevCount = prevCount + 1;
      likeNumberEl.textContent = prevCount;
    }
    else{
        likeEl.classList.remove("fas");
        likeEl.classList.remove("red-icon");
        likeEl.classList.add("far");
        isLiked = false;
        prevCount = prevCount - 1;
      likeNumberEl.textContent = prevCount;
    }

}
function toggleSave(){
  if (isSaved === false){
    savePostEl.classList.remove("far");
    savePostEl.classList.add("fas");
    isSaved = true;
  }
  else{
    savePostEl.classList.remove("fas");
    savePostEl.classList.add("far");
      isSaved = false;
  }

}
function onClickFollow(){
  if (isFollowed === false){
    followEl.textContent="Followed";
    isFollowed=true;
  }
  else{
    followEl.textContent="Follow";
    isFollowed=false;
  }
}



