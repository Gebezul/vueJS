const App = {
    data() {
      return {
        placeholderString: 'Введите название',
        title: 'Список',
        inputValue: '',
        notes: ['Заметка 1', 'Заметка 2', 'Заметка 3']
      }
    },
    methods: {
      inputChangeHandler(event) {
        this.inputValue = event.target.value
     },
     addNewNote () {
      this.notes.push(this.inputValue)
      this.inputValue = ''
     },
     removeNote() {
      this.notes.splice(index, 1)
     }
    }
  }
  
  Vue.createApp(App).mount("#app");

  
  