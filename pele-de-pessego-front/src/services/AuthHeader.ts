export default function AuthHeader() {
    const token = localStorage.getItem("jwt");
    console.log(token)
  
    if (token) {
      return { Authorization: 'Bearer ' + token };
    } else {
      return { Authorization: '' };
    }
}