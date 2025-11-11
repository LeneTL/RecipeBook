
function Topbar(){
    return /*HTML*/ `
    <section class="sidebar-container">
        
        <div>
            <h3 onclick="goTo('logIn')">Anne's Kokebok</h3>
        </div>
        ${drawAdminButtons()}


            

        </div>
    </section> 
    `
}

function drawAdminButtons(){
    if(model.app.currentUser != null){
        return /*HTML*/ `
        <div>
            <button onclick="goTo('recipeInput')">
                <img src="" alt="Input">
            </button>
            <button onclick="goTo('favoritesList')">
                <img src="" alt="Favorites">
            </button>
            <button onclick="goTo('recipeList')">
                <img src="" alt="List">
            </button>
            <button onclick="logOut()">
                <img src="" alt="LogOut">
            </button>
        </div>
    `
    } else {
        return ''
    }
}