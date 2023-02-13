<template>
  <div>
    <div class="container">
      <div class="modal-overlay" @click="showModal = false"></div>
      <div class="modal-content">
        <header class="modal-header">
          <h3>Edit user</h3>
          <button @click="showModal = false">X</button>
        </header>
        <section class="modal-body">
          <div>
            <label>ID:</label>
            <a>{{ currentItem.id }}</a>
          </div>
          <div>
            <label>FirstName:</label>
            <input type="text" v-model="currentItem.first_name" />
          </div>
          <div>
            <label>LasttName:</label>
            <input type="text" v-model="currentItem.last_name" />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" v-model="currentItem.email" />
          </div>
          <div>
            <label>Gender:</label>
            <input type="text" v-model="currentItem.gender" />
          </div>
        </section>
        <footer class="modal-footer">
          <button @click="clickSave">Submit</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "editUsers",
  props: {
    user: Object,
  },
  //   edituers : this.props.users

  data() {
    return {
      showModal: false,
      currentItem: Object.assign({}, this.user),
    };
  },

  methods: {
    clickSave() {
      this.$emit("save", this.currentItem);
    },
  },
};
</script>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}

.modal-content {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

button {
  padding: 5px;
  background: white;
  color: black;
  border-radius: 25px;
  cursor: pointer;
  margin: 0px;
}
</style>
