const btn = document.querySelector(".btn");
const email = document.querySelector(".email");
const error_message = document.querySelector(".error_message");

btn.addEventListener("click", (event) => {
   event.preventDefault();
   if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(email.value)) {
      email.classList.add("active");
      error_message.classList.add("active");
   } else {
      email.classList.remove("active");
      error_message.classList.remove("active");
   }
});
