declare namespace TakeHome {
  export interface UIState {
    menu: string
  }
  export interface DataState {
    teams: TeamData[]
    members: MemberData[]
    jobs: JobData[]
  }
  export interface StoreState {
    ui: UIState
    data: DataState
  }
}