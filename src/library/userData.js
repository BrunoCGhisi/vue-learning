import { User } from '@/models/User'

export const initialUsers = [
  new User(1, 'Zezinho', 25, ['Vue', 'Node'], true),
  new User(2, 'Luizinho', 15, ['HTML', 'CSS'], false),
  new User(3, 'Huguinho', 20, ['JavaScript'], true),
  new User(4, 'Matheus', 26, ['Vue', 'Firebase'], true),
  new User(5, 'Suelen', 17, ['HTML', 'CSS', 'Design'], false),
]
