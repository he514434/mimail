export default {
  saveUserName (context, username) {
    context.commit('saveUserName', username)
  },
  saveCount (context, cartcount) {
    context.commit('saveCount', cartcount)
  }
}