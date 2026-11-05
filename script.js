function updateCount(filter) {
    let visibleItems;
    if (filter === "all") {
        visibleItems = document.querySelectorAll(".gallery-item");
    } else {
        visibleItems = document.querySelectorAll("." + filter);
    }
    document.getElementById("imageCount").innerText =
        "📸 Total Images: " + visibleItems.length;
}
const buttons = document.querySelectorAll(".filter-buttons button");
const items = document.querySelectorAll(".gallery-item");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    document
      .querySelector(".active")
      .classList.remove("active");
    button.classList.add("active");
    const filter = button.getAttribute("data-filter");
    items.forEach(item => {
      if(filter === "all"){
        item.style.display = "block";
      }
      else{
        if(item.classList.contains(filter)){
          item.style.display = "block";
        }
        else{
          item.style.display = "none";
        }
      }
    });
    updateCount(filter);
  });
});
const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
let currentIndex = 0;
galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
    currentIndex = index;
  });
});
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});
nextBtn.addEventListener("click", () => {
  currentIndex++;
  if(currentIndex >= galleryImages.length){
    currentIndex = 0;
  }
  lightboxImg.src = galleryImages[currentIndex].src;
});
prevBtn.addEventListener("click", () => {
  currentIndex--;
  if(currentIndex < 0){
    currentIndex = galleryImages.length - 1;
  }
  lightboxImg.src = galleryImages[currentIndex].src;
});
lightbox.addEventListener("click", (e) => {
  if(e.target === lightbox){
    lightbox.style.display = "none";
  }
});
document.getElementById("searchBox").addEventListener("keyup", function() {
    let value = this.value.toLowerCase();
    let count = 0;
    document.querySelectorAll(".gallery-item").forEach(item => {
      let text = item.innerText.toLowerCase();
        if(text.includes(value)){
            item.style.display = "";
            count++;
        } else {
            item.style.display = "none";
        }
    });
    document.getElementById("imageCount").innerText =
             "📸 Total Images: " + count;
});
const themeBtn = document.getElementById("themeToggle");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    if(document.body.classList.contains("light-mode")){
        themeBtn.innerHTML = "🌙 Dark Mode";
    } else {
        themeBtn.innerHTML = "☀️ Light Mode";
    }
});
document.getElementById("imageCount").innerText =
"📸 Total Images: " +
document.querySelectorAll(".gallery-item").length;
document.getElementById("topBtn").onclick = () =>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
};
updateCount("all");
updateCount(filter);