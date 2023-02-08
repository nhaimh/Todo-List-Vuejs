<template>
  <v-container>
    <div class="topnav">
      <a class="active" href="/">Home</a>
      <!-- <a href="/edit">Add User</a> -->
    </div>
    <div>
      <div class="w3-container">
        <h2>List User Table:</h2>
        <table class="w3-table-all w3-hoverable">
          <thead>
            <tr class="w3-light-grey">
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
          <tr v-for="(user,index) in users" :key="user.id">            
            <td>{{user.id}}</td>
            <td>{{user.first_name}} {{user.last_name}}</td>
            <td>{{user.email}}</td>
            <td class="td" style="display:flex;gap:15px;">             
                  <button 
                      class="bt"><a href="/detail" >Detail</a></button>
                  <button 
                      class="bt"><a href="/edit" >Edit</a></button>           
              <button  @click="deleteUser(index)"
                  class="bt">Delete</button>
              </td>
          </tr>
        </tbody>
        </table>
      </div>
    </div>
    <div class="create-user-container">
          <div>
              Create a New User:
          </div>
          <div>
              <label>ID:</label>
              <input type="text"  v-model="newid"/>
          </div>
          <div>
              <label>FirstName:</label>
              <input type="text"  v-model="newfn"/>
          </div>
          <div>
              <label>LasttName:</label>
              <input type="text" v-model="newln" />
          </div>
          <div>
              <label>Email:</label>
              <input type="email" v-model="newemail" />
          </div>
          <div>
              <label>Gender:</label>
              <input type="text" v-model="newgender" />
          </div>
          <div>
              <button type="submit" @click="addUser()"

                  class="btn-submit">Submit</button>
          </div>
  </div>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  
  data() {
        return {
            users: 
            [
              {"id":1,"first_name":"Waldo","last_name":"MacVaugh","email":"wmacvaugh0@ftc.gov","gender":"Male"},
              {"id":2,"first_name":"Mar","last_name":"Maypowder","email":"mmaypowder1@netlog.com","gender":"Male"},
              {"id":3,"first_name":"Patton","last_name":"Daltrey","email":"pdaltrey2@nature.com","gender":"Male"},
              {"id":4,"first_name":"Ulberto","last_name":"Cash","email":"ucash3@msn.com","gender":"Male"},
              {"id":5,"first_name":"Alvis","last_name":"Bilbrey","email":"abilbrey4@vk.com","gender":"Male"},
              {"id":6,"first_name":"Auria","last_name":"Brittles","email":"abrittles5@stanford.edu","gender":"Female"},
              {"id":7,"first_name":"Griffie","last_name":"Izchaki","email":"gizchaki6@google.ca","gender":"Male"},
              {"id":8,"first_name":"Cassandre","last_name":"Parkman","email":"cparkman7@upenn.edu","gender":"Female"},
              {"id":9,"first_name":"Lolita","last_name":"Iacovone","email":"liacovone8@issuu.com","gender":"Female"},
              {"id":10,"first_name":"Linell","last_name":"Ingleby","email":"lingleby9@mapy.cz","gender":"Female"},
              {"id":11,"first_name":"Fidelio","last_name":"Harg","email":"fharga@apache.org","gender":"Male"},
              {"id":12,"first_name":"Ortensia","last_name":"Ridgedell","email":"oridgedellb@addthis.com","gender":"Female"},
              {"id":13,"first_name":"Salvador","last_name":"Statersfield","email":"sstatersfieldc@photobucket.com","gender":"Male"},
              {"id":14,"first_name":"Maurizia","last_name":"Mandifield","email":"mmandifieldd@fema.gov","gender":"Female"},
              {"id":15,"first_name":"Brana","last_name":"Dincke","email":"bdinckee@bbb.org","gender":"Female"}
            ],
            newid:"",
            newfn:"",
            newln:"",
            newemail:"",
            newgender:"", 
          }

    },
    methods:{
      deleteUser(user){
        this.users.splice(user,1)
        // console.log(user)
      },
      addUser(){
            if(this.newfn,this.newemail,this.newgender,this.newln,this.newid){
                this.users.push({
                    id: this.newid,
                    first_name:this.newfn,
                    last_name:this.newln,
                    email:this.newemail,
                    gender:this.newgender,
                }),
                this.newid = "";
                this.newfn = "";
                this.newln = "";
                this.newemail = "";
                this.newgender = ""
            }
        },
        
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
