import "@mdi/font/css/materialdesignicons.css"
import Vue from "vue"
import Vuetify from "vuetify/lib"
import "./common.css"
import "./fonts/roboto.css"
import colors from "vuetify/lib/util/colors"

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.deepPurple.lighten1,
        accent: colors.deepPurple.accent1,
      },
      dark: {
        primary: colors.deepPurple.lighten1,
        accent: colors.deepPurple.accent1,
      },
    },
  },
})
