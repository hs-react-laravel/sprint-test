declare namespace TakeHome {
  export interface TeamData {
    id: number
    name: string
    member_count: number
  }
  export interface MemberData {
    id: number
    first_name: string
    last_name: string
    email: string
    team: {
      id: number
      name: string
    }
  }
}