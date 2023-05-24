import { atom } from 'recoil'

export interface Cartnum {
  id: number
  content: string
}

export const Cartpuls = atom<Cartnum[]>({
  key: 'todo',
  default: [],
})