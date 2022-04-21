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
      <div className="button-wrapper">
        <Link className="btn btn-primary" to={'/todos/create'}>Create a To-do</Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Member</th>
            <th></th>
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
                <Link className="btn btn-primary fs-14" to={`/todos/${job.id}/edit`}>Edit</Link>
                <button className="btn btn-danger fs-14" style={{ marginLeft: 10 }} onClick={() => deleteItem(job)}>Delete</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </PageTemplate>
  )
}

export default JobList