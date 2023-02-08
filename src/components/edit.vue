<template>
    <div>
        <div class="topnav">
            <a class="active" href="#home">Home</a>
            <!-- <a href="/edit">Add User</a> -->
          </div>
        <div class="update-user-container">
                <div>
                    <label>First Name :</label>
                    <input name="firstName"  />
                </div>
                <div>
                    <label>Last Name :</label>
                    <input name="lastName" />
                </div>
                <div>
                    <label>Email :</label>
                    <input name="email" />
                </div>
                <div>
                    <label>Gender :</label>
                    <input name="address" />
                </div>
                <input type="text" value="<%= dataUser.id %>" hidden name="id"
                />
                <div>
                    <button class="btn-save" type="submit">Save</button>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TodolistDetail',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>