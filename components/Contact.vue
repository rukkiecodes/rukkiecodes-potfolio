<template>
  <div>
    <v-btn
      color="deep-purple accent-4"
      depressed
      :small="small"
      class="rounded-lg text-capitalize"
      @click.stop="dialog = true"
    >
      Contact me
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="350"
      persistent
    >
      <v-card>
        <v-card-title class="text-h5">
          Contact me
        </v-card-title>

        <v-card-text>
          <v-text-field
            placeholder="Name*"
            dense
            color="deep-purple accent-4"
            v-model="credential.name"
          />
          <v-text-field
            placeholder="Email*"
            dense
            color="deep-purple accent-4"
            v-model="credential.email"
          />
          <v-textarea
            color="deep-purple accent-4"
            dense
            rows="2"
            no-resize
            label="Feedback"
            v-model="credential.feedback"
          />
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="white"
            class="text-capitalize"
            text
            @click="dialog = false"
          >
            Cancel
          </v-btn>

          <v-btn
            color="deep-purple accent-4"
            class="text-capitalize"
            depressed
            @click="sendFeedback"
            :loading="loading"
          >
            Send
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar
      v-model="snackbar"
      left
      bottom
      dark
    >
      <span class="white--text font-weight-bold">{{ text }}</span>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    loading: false,
    snackbar: false,
    text: '',
    credential: {
      name: '',
      email: '',
      feedback: ''
    }
  }),

  methods: {
    sendFeedback () {
      this.loading = true
      this.$axios({
        method: 'post',
        url: 'https://oymo.herokuapp.com',
        data: {
          name: this.credential.name,
          email: this.credential.email,
          feedback: this.credential.feedback
        }
      }).then(result => {
        this.loading = false
        this.snackbar = true
        this.text = "Thank's for raching out 😁😁"
        this.credential.name = ''
        this.credential.email = ''
        this.credential.feedback = ''
        this.dialog = false
      }).catch(error => {
        console.log(error)
        this.loading = false
      })
    }
  },

  computed: {
    small () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return true
        case 'sm': return false
      }
    },
  },
}
</script>
