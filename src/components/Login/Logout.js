//Just put this where it's needed

function logout() {
    localStorage.clear();
    window.location.href = '/';
}
export default logout 