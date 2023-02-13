<template>
  <div class="containerr">
    <button @click="showModal = true">Detail</button>
    <div v-if="showModal">
      <div class="modal-overlay" @click="showModal = false"></div>
      <div class="modal-content">
        <header class="modal-header">
          <h3>Detail</h3>
        </header>
        <section class="modal-body">
          <table class="w3-table-all w3-hoverable">
            <thead>
              <tr class="w3-light-grey">
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              <td>{{ currentItem.id }}</td>
              <td>{{ currentItem.first_name }}{{ currentItem.last_name }}</td>
              <td>{{ currentItem.email }}</td>
              <td>{{ currentItem.gender }}</td>
            </tbody>
          </table>
        </section>
        <footer class="modal-footer">
          <button @click="showModal = false">Close</button>
        </footer>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: " Detail-user",
  props: {
    currentItem: {
      type: Object,
    },
    user: Object,
  },
  data() {
    return {
      showModal: false,
    };
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
  padding: 50px;
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
  padding: 10px 20px;
  background: lightblue;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>