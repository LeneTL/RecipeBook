function logOut(){
model.app.currentUser = null;
model.app.currentPage = 'homepage'
changeView();
console.log(model.app.currentUser)
}