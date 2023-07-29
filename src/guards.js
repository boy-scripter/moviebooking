export function Authentication(goTo) {
    const isUserLoggedin = sessionStorage.getItem("user") || false
    !isUserLoggedin ? goTo('/login') : goTo(true)
}
