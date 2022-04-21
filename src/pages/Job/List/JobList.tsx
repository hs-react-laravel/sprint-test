import { Link } from "react-router-dom"
import PageTemplate from "pages/PageTemplate"

interface Props {
  jobs: TakeHome.JobData[]
  deleteJob: (job: TakeHome.JobData) => void
}

const JobList = ({
  jobs,
  deleteJob
}: Props) => {

  const deleteItem = (job: TakeHome.JobData) => {
    deleteJob(job)
  }

  return (
    <PageTemplate title="To-do">
      <div>
        <Link to={'/todos/create'}>Create a To-do</Link>
      </div>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Title</td>
            <td>Description</td>
            <td>Member</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {jobs.map(job =>
            <tr key={`tr-member-${job.id}`}>
              <td>{job.id}</td>
              <td>{job.title}</td>
              <td>{job.description}</td>
              <td>{job.member}</td>
              <td>
                <Link to={`/todos/${job.id}/edit`}>Edit</Link>
                <button className="btn-danger" onClick={() => deleteItem(job)}>Delete</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </PageTemplate>
  )
}

export default JobList