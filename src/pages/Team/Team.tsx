import PageTemplate from "pages/PageTemplate"

interface Props {
  teams: TakeHome.TeamData[]
}

const Team = ({
  teams
}: Props) => {
  return (
    <PageTemplate title="Team">
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Member Counts</td>
          </tr>
        </thead>
        <tbody>
          {teams.map(team =>
            <tr key={`tr-team-${team.id}`}>
              <td>{team.id}</td>
              <td>{team.name}</td>
              <td>{team.member_count}</td>
            </tr>
          )}
        </tbody>
      </table>
    </PageTemplate>
  )
}

export default Team