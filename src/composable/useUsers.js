import { ref } from 'vue'
import { User } from '@/models/User'
import { initialUsers } from '@/library/userData'

const users = ref(initialUsers)

export function useUsers() {
  function addUser(data) {
    const lastUser = users.value.at(-1)
    const newId = lastUser ? lastUser.id + 1 : 1

    users.value.push(new User(newId, data.name, data.age, data.skills, true))
  }

  function editUser(data) {
    const index = users.value.findIndex((u) => u.id === data.id)

    if (index !== -1) {
      users.value[index] = new User(
        data.id,
        data.name,
        data.age,
        data.skills,
        users.value[index].isOn,
      )
    }
  }

  function deleteUser(id) {
    users.value = users.value.filter((u) => u.id !== id)
  }

  return {
    users,
    addUser,
    editUser,
    deleteUser,
  }
}
