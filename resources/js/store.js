import { createStore } from 'vuex'  //powershell에 npm install vuex --save
import axios from 'axios'

const store = createStore({
    state() {
        return {
            ListData: [],
        }
    },
    mutations: {
        // 초기 데이터 세팅용
        createListData(state, data) {
            state.ListData = data;
        },
        // 작성글 데이터 셋팅용
        addWriteData(state, data) {
            state.ListData.unshift(data);
        }
    }, 
    actions: {
        //get
        getMainList(context) {
            axios.get('http://localhost:8000/api/items')
            .then(res => { 
                context.commit('createListData', res.data);
            })
            .catch( err => {
                console.log(err);
            })
        },

        //post
        writeContent(context) {
            let text = document.getElementById('text');
            const data = {
                "item": {
                    "content": text.value,
                }
            }
            console.log(data);
            axios.post('http://localhost:8000/api/items', data)
            .then(res => {
                console.log(res);
                context.dispatch('getMainList');
                text.value = '';
            })
            .catch( err => {
                console.log(err);
            })
        },
        // context.commit('addWriteData', res.data);
        // dispatch는 actions를 불러오고, commit은 mutations를 불러오는 것.
        
        //delete
        deleteContent(context, id) {
            axios.delete('http://localhost:8000/api/items/' + id)
            .then(res => {
                console.log(res);
                context.dispatch('getMainList');
            })
            .catch(err => {
                console.log(err);
            });
        },

        //put
        completeContent(context, id) {
            const data = {
                "item": {
                    "completed": true,
                }
            }
            axios.put('http://localhost:8000/api/items/' + id, data)
            .then(res => {
                console.log(res);
                context.dispatch('getMainList');
            })
            .catch(err => {
                console.log(err);
            });
        },
        cancelContent(context, id) {
            const data = {
                "item": {
                    "completed": false,
                }
            }
            axios.put('http://localhost:8000/api/items/' + id, data)
            .then(res => {
                console.log(res);
                context.dispatch('getMainList');
            })
            .catch( err => {
                console.log(err);
            })
        }
    }
})

export default store