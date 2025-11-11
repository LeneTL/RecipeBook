const model = {
    app: {
        main: document.getElementById('main'),
        currentPage:'startpage', //startpage is where it will start
        viewerPages: ['homepage', 'startpage', 'login',  'savedRecipe', ],
        onlyAdminPages: ['recipeInput', 'recipeList', 'editRecipe'],
        currentUser: null,

    },

    viewstate:{
        logIn: {
            name: '',
            password: '',
        },

        registerRecipes: {
            RecipeID: null,
            name: '',
            img: '',
            madeFor: '',
            ingredients: '',
            amount: '',
            howTo: '',
        },
        selectedRecipe: null,
        editRecipe:{
            name: '',
            img: '',
            madeFor: '',
            ingredients: '',
            amount: '',
            howTo: '',
        },
        

    },

    data: {
        registeredUsers: [
            {userID:1, name: 'Anne', password: 'Mamma', favorites: [1,2]},
            {userID:2, name: 'Lene', password: 'Admin'},

        ],
        registeredRecipes: [
            {   RecipeID: 1,
                name: "Pannekaker",
                Img: "",
                madeFor: "6personer",
                ingredients: "", //array??????
                amount: "", //array????
                howTo: "Ha mel og salt i en bolle; Tilsett halvparten av melken; rør ut klumper og tilsett resten an melken; ha dermed i et og et egg; La røren hvile i 30 minutter før du steker i smør på middels varme", //ARRAY? sfdhjbhjgb
                favorite: true,
            }
        ]
    },





























}