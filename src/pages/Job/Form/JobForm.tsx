import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import PageTemplate from "pages/PageTemplate"

interface Props {
  members: TakeHome.MemberData[]
  jobs: TakeHome.JobData[]
  mode: 'create' | 'edit'
  newID: number
  addJob: (job: TakeHome.JobData) => void
  editJob: (job: TakeHome.JobData) => void
}

const JobForm = ({
  members,
  jobs,
  mode,
  newID,
  addJob,
  editJob
}: Props) => {
  const navigate = useNavigate()
  const params = useParams()

  const [job, setJob] = useState<TakeHome.JobData>({
    id: undefined,
    title: '',
    description: '',
    member: undefined
  })

  useEffect(() => {
    if (params.id) {
      const id = parseInt(params.id)
      const orgJob = jobs.find(j => j.id === id)
      if (orgJob) setJob(orgJob)
    }
  }, [params, jobs])

  const onSave = (ev: any) => {
    ev.preventDefault()
    if (mode === 'create') {
      console.log(newID)
      const newObj: TakeHome.JobData = {
        ...job,
        id: newID
      }
      console.log(newObj)
      addJob(newObj)
    } else if (mode === 'edit') {
      editJob(job)
    }
    navigate('/todos')
  }

  return (
    <PageTemplate title="To-do Form">
      <div className="form-wrapper">
        <form className="input-form" onSubmit={onSave}>
          <div className="input-wrapper">
            <label htmlFor="input-desc">Member</label>
            <select
              className="form-select"
              value={job.member}
              onChange={ev => {
                const selected = Number.parseInt(ev.target.value)
                setJob(prev => ({ ...prev , member: isNaN(selected) ? undefined : selected}))
              }}
              required>
              <option value="">Choose...</option>
              {members.map(m => 
                <option value={m.id} key={`option-member-${m.id}`}>
                  {m.first_name} {m.last_name}
                </option>
              )}
            </select>
          </div>
          <div className="input-wrapper">
            <label htmlFor="input-title">Title</label>
            <input
              id="input-title"
              type="text"
              className="form-input"
              value={job.title}
              onChange={ev => setJob(prev => ({ ...prev, title: ev.target.value }))}
              required />
          </div>
          <div className="input-wrapper">
            <label htmlFor="input-desc">Description</label>
            <textarea
              id="input-desc"
              className="form-input"
              value={job.description}
              onChange={ev => setJob(prev => ({ ...prev, description: ev.target.value }))}
              required />
          </div>
          <div className="button-wrapper">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
      
    </PageTemplate>
  )
}

export default JobForm