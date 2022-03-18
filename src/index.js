import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { auth, provider } from "./firebase.config";

// Select element
const signinBtn = document.querySelector(".signinBtn");
const card = document.querySelector(".card");
const avatar = document.querySelector(".avatar");
const username = document.querySelector(".username");
const email = document.querySelector(".email");
const signoutBtn = document.querySelector(".signoutBtn");

signinBtn.addEventListener("click", async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    card.style.display = "flex";
    signinBtn.style.display = "none";
  } catch (err) {
    console.log(err);
  }
});

signoutBtn.addEventListener("click", async () => {
  try {
    await signOut(auth);
    alert("Signout Successfull");
  } catch (err) {
    alert(err.message);
  }
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    card.style.display = "flex";
    signinBtn.style.display = "none";
    avatar.src = user.photoURL;
    username.textContent = user.displayName;
    email.textContent = user.email;
  } else {
    card.style.display = "none";
    signinBtn.style.display = "block";
  }
});
