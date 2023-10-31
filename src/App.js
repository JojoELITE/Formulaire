function App() {
  return (
    <div className="App">
        
        <div class="bg-blue-500">
              <h1 class="text-center py-10 font-bold text-2xl">FORMULAIRE D'ADHESION</h1>
        </div>
                
        <form >
          <div class="p-10 bg-blue-500">
            <div class="flex justify-center gap-14">
                <div class="">
                    <label for="">Prénom(s) </label>
                        <input type="text" class="" name="" id="" placeholder=""/>
                </div>
                <div class="">
                    <label for="name">Nom(s) </label>
                    <input type="" class="" name="" id="" placeholder=""/>
                </div>
           </div>


           <div className="flex justify-center py-6 gap-16">
                <div class="">
                    <label for="email">Email </label>
                    <input type="email" class="" name="email" id="email" placeholder=""/>
                </div>
                <div class="">
                    <label for="">Nationalité </label>
                    <input type="" class="" name="Locality" id="" placeholder=""/>
                </div>
           </div>

            
            <div className="flex justify-center gap-28 py-6">
                <div class="">
                    <label for="Date">Date de naissance </label>
                    <input type="Date" name="" class="" id="Date" placeholder=""/>
                </div>
                <div class="">
                    <label for="sex">Sexe </label>
                    <select id="sex" class="">
                      <option value="male">Masculin</option>
                      <option value="female">Feminin</option>
                      <option value="unspesified">Ne pas spécifier</option>
                    </select>
                </div>
            </div>

            <div className="flex justify-center py-6 gap-16">
                <div class="">
                    <label for="phone">Téléphone </label>
                    <input type="phone" class="" name="phone" id="phone" placeholder=""/>
                </div>
                <div class="">
                    <label for="">CNI </label>
                    <input type="" class="" name="" id="" placeholder=""/>
                </div>
           </div>



            <div className="flex justify-center py-8 gap-32">

                <div class="">
                    <label for="">Profession </label>
                    <input type="" class="" name="" id="" placeholder=""/>
                </div>

                <div class="">
                    <label for="Adress">Adresse </label>
                    <input type="Adress" class="" name="Adress" id="Adress" placeholder=""/>
                </div>

            </div>



                <div class="flex justify-center gap-32">

                  <h4>
                    Type:
                  </h4>

                <div>
                  <div>

                      <input type="radio" name="type" checked id="human"/>
                      <label for="human">Membre Actif</label>

                  </div>

                  <div>
                      <input type="radio" name="type" id="dog"/>
                      <label for="dog">Membre Adhérent</label>
                  </div>

                </div>
                  
                </div>



                <div class="px-72 py-10">
                      <label><input type="checkbox"/> J'ai lu le statut du Copil Citoyen et J'accepte ces exigences</label><br></br>
                </div>

                
            <div class="text-center">
              <button class="bg-white p-4 text-2xl font-bold">Envoyer</button>
            </div>
      
          </div>
        </form>

    </div>
  );
}

export default App;
