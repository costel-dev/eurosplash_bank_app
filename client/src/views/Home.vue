<template>
  <v-card class="overflow-hidden" height="100%">
    <!-- Navbar -->
    <v-app-bar color="blue" dark>
      <!-- Hamburger Menu -->
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>EuroSplash</v-toolbar-title>
    </v-app-bar>
    <!-- Sidebar Navigation -->
    <v-navigation-drawer absolute temporary v-model="drawer">
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="blue--text">
          <v-list-item v-for="(item, ndx) in menuItems" v-bind:key="ndx">
            <v-list-item-icon>
              <v-icon> {{ item.icon }} </v-icon>
            </v-list-item-icon>
            <v-list-item-title> {{ item.text }} </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <!--  -->
    <v-toolbar color="blue darken-3" dark app clipped-left fixed>
      <v-toolbar-title
        :style="$vuetify.breakpoint.smAndUp ? '' : 'min-width: 72px'"
        class="ml-0 pl-3"
      >
        <v-toolbar-side-icon
          @click.stop="drawer = !drawer"
        ></v-toolbar-side-icon>
        <span class="hidden-xs-only">Globomantics Rewards</span>
      </v-toolbar-title>
      <header-actions></header-actions>
    </v-toolbar>
    <!--  -->
    <!-- Content of our view -->
    <v-main>
      <v-container fluid>
        <v-layout>
          <Transactions />
        </v-layout>
      </v-container>
    </v-main>
    <EditTransactions />
  </v-card>
</template>

<script>
import Transactions from "./Transactions";
import EditTransactions from "./EditTransactions.vue";
import HeaderActions from "../components/HeaderActions";

export default {
  name: "Home",
  components: {
    Transactions,
    EditTransactions,
    HeaderActions,
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
  data: () => ({
    drawer: false,
    group: null,
    menuItems: [
      { icon: "contacts", text: "Add Transaction" },
      { icon: "history", text: "Current Month" },
      { icon: "content_copy", text: "Notes" },
      { icon: "settings", text: "Settings" },
      { icon: "chat_bubble", text: "Send feedback" },
      { icon: "help", text: "Help" },
    ],
  }),
  methods: {
    menuAction: function() {
      // TODO
    },
    showProfile: function() {
      console.log("show profile clicked!");
    },
  },
  mounted: function() {
    console.log("Is user logged in?", this.isLoggedIn);
    if (!this.isLoggedIn) {
      this.$router.push({ path: "/" });
    }
  },
};
</script>
