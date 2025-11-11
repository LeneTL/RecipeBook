
function LogIn(){
    return /*HTML*/ `
        <section class="logInWrapper">
        
        <div>
            <div class="logInText">Hei Mamma! ♥ Logg inn:</div>
            <input placeholder="Brukernavn" oninput="model.viewstate.logIn.name = this.value">
            <input type="password" id="passwordField" placeholder="Passord" oninput="model.viewstate.logIn.password = this.value">
            <button onclick="ChecklogIn()">Log in</button>
            <button onclick="goTo('homepage')">Back</button>

        </div>
    </section>
    `
}