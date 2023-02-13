<template>
  <div>
    <div class="topnav">
      <a class="active">
        <router-link to="/" style="padding: 0cm">Home</router-link>
      </a>
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
            <tr v-for="(user, index) in users" :key="index">
              <td>{{ user.id }}</td>
              <td>{{ user.first_name }} {{ user.last_name }}</td>
              <td>{{ user.email }}</td>
              <td class="td" style="display: flex; gap: 15px">
                <button>
                  <detail v-bind:currentItem="user"></detail>
                </button>
                <button @click="currentItem = user">Edit</button>
                <button @click="deleteUser(index)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <button>
          <AddUser v-bind:user="newuser" @add="AddItem"></AddUser>
        </button>
      </div>
    </div>
    <!-- <Detail v-bind:user="currentItem" @update="updateItem" v-if="currentItem"/> -->

    <editUsers
      v-bind:user="currentItem"
      @save="updateItem"
      v-if="currentItem"
    ></editUsers>
  </div>
</template>

<script>
import Detail from "./detail.vue";
import editUsers from "./edit.vue";
import AddUser from "./add.vue";
export default {
  name: "HelloWorld",
  props: {},
  components: {
    Detail,
    editUsers,
    AddUser,
  },

  data() {
    return {
      users: [
        {
          id: 1,
          first_name: "Waldo",
          last_name: "MacVaugh",
          email: "wmacvaugh0@ftc.gov",
          gender: "Male",
        },
        {
          id: 2,
          first_name: "Mar",
          last_name: "Maypowder",
          email: "mmaypowder1@netlog.com",
          gender: "Male",
        },
        {
          id: 3,
          first_name: "Patton",
          last_name: "Daltrey",
          email: "pdaltrey2@nature.com",
          gender: "Male",
        },
        {
          id: 4,
          first_name: "Ulberto",
          last_name: "Cash",
          email: "ucash3@msn.com",
          gender: "Male",
        },
        {
          id: 5,
          first_name: "Alvis",
          last_name: "Bilbrey",
          email: "abilbrey4@vk.com",
          gender: "Male",
        },
        {
          id: 6,
          first_name: "Auria",
          last_name: "Brittles",
          email: "abrittles5@stanford.edu",
          gender: "Female",
        },
        {
          id: 7,
          first_name: "Griffie",
          last_name: "Izchaki",
          email: "gizchaki6@google.ca",
          gender: "Male",
        },
        {
          id: 8,
          first_name: "Cassandre",
          last_name: "Parkman",
          email: "cparkman7@upenn.edu",
          gender: "Female",
        },
        {
          id: 9,
          first_name: "Lolita",
          last_name: "Iacovone",
          email: "liacovone8@issuu.com",
          gender: "Female",
        },
      ],

      currentItem: null,
    };
  },
  methods: {
    updateItem(obj) {
      let index = this.users.findIndex((k) => k.id === obj.id);
      this.users[index] = obj;
      this.currentItem = null;
    },
    deleteUser(user) {
      this.users.splice(user, 1);
    },
    AddItem(newuser) {
      // if (
      //   (newuser.first_name, newuser.last_name, newuser.email, newuser.gender)
      // ) {
      //   this.users.push({
      //     id: Math.floor(Math.random() * 100),
      //     first_name: newuser.first_name,
      //     last_name: newuser.last_name,
      //     email: newuser.email,
      //     gender: newuser.gender,
      //   });
      // }
      this.users.push(newuser);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  padding: 5px;
  background: white;
  color: black;
  border-radius: 25px;
  cursor: pointer;
  margin: 0px;
}
</style>
