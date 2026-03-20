import { User } from '@/models/User'

export const initialUsers = [
  new User(1, 'Veigar', 25, ['Vue', 'Node', 'Java', 'Kotlin', 'Typescript'], true),
  new User(2, 'Omen', 15, ['HTML', 'CSS'], false),
  new User(3, 'Cypher', 20, ['JavaScript', 'Python', 'Html', 'Css', 'WordPress'], true),
  new User(4, 'DoorsMan', 26, ['Vue', 'Firebase'], true),
  new User(5, 'Viscuos', 17, ['HTML', 'CSS', 'Design'], false),
]
