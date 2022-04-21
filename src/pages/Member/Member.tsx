import PageTemplate from "pages/PageTemplate"

interface Props {
  members: TakeHome.MemberData[]
}

const Member = ({
  members
}: Props) => {
  return (
    <PageTemplate title="Team">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Team</th>
          </tr>
        </thead>
        <tbody>
          {members.map(member =>
            <tr key={`tr-member-${member.id}`}>
              <td>{member.id}</td>
              <td>{member.first_name} {member.last_name}</td>
              <td>{member.email}</td>
              <td>{member.team.name}</td>
            </tr>
          )}
        </tbody>
      </table>
    </PageTemplate>
  )
}

export default Member