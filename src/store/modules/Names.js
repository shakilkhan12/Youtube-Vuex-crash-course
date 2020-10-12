const Names = {
    state: {
        names: [{id: 1, name: 'Shakil Khan'}]
      },
      getters: {
        allNames: (state) => {
          return state.names;
        }
      },
      mutations: {
        newName: (state,userInfo) => {
          state.names = [userInfo, ...state.names]
        },
        deleteName: (state, id) => {
          state.names = state.names.filter(name => name.id != id);
        }
      },
      actions: {
        addName: (context, userInfo) => {
          context.commit("newName", userInfo)
        },
        removeName: (context, id) => {
          context.commit("deleteName", id)
        }
      }
}

export default Names;