
changeView();

function goTo(page) {
    model.app.currentPage = page;
    changeView();
}


function changeView(){
    
    let content = "";
    let topbar = Topbar();
    if(model.app.currentPage == 'startpage'){
        content = Startpage();
    } else if(model.app.currentPage == 'homepage'){
        content = Homepage();
    } else if(model.app.currentPage == 'logIn'){
        content = LogIn();
    } else if(model.app.currentPage == 'recipeInput'){
        content = RecipeInput();
    } else if(model.app.currentPage == 'recipeList'){
        content = RecipeList();
    } else if(model.app.currentPage == 'editRecipe'){
        content = EditRecipe();
    } else if(model.app.currentPage == 'favoritesList'){
        content = FavoritesList();
    }
     else {
        content = /*HTML*/`
        <h1>Error: no currentpage</h1>
        `
    }

    // if(model.app.currentUser = ''){
    //     topbar = Topbar();
    // }

    model.app.main.innerHTML = /*HTML*/`
        <main>
            <header>${topbar}</header>
            <section class="content">${content}</section>
        </main>
    `;
}
