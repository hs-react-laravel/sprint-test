import Header from "components/Header";

interface Props {
  title: string
  children: React.ReactNode
}

const PageTemplate = ({
  title,
  children
}: Props) => {
  return (
    <div className="page-wrapper">
      <Header />
      <div className="container">
        {children}
      </div>
    </div>
  )
}

export default PageTemplate;