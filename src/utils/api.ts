import axios from "axios";

export const getTodos = () => {
    return axios.get(`https://6319a47a6b4c78d91b3fd4c9.mockapi.io/api/v1/todo`)

}

export const deleteTodo = (id: string) => {
    return axios.delete(
        `https://6319a47a6b4c78d91b3fd4c9.mockapi.io/api/v1/todo/${id}`
    )
}
export const addTodos = (title1: string, assign: string) => {
    return axios.post(`https://6319a47a6b4c78d91b3fd4c9.mockapi.io/api/v1/todo`, {
        createdAt: new Date(),
        title: title1,
        assginedTo: assign,
        isComplete: false,
        id: new Date().getUTCMilliseconds(),
    })
}
export const updateTodos = (id: string, isComplete: boolean) => {
    return axios.put(`https://6319a47a6b4c78d91b3fd4c9.mockapi.io/api/v1/todo/${id}`, {
        isComplete,
    })
}