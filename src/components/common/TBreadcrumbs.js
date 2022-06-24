import { Breadcrumbs, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

function TBreadcrumbs({ data = [] }) {
  const breadcrumbs = data.map(e => {
    return (
      <Link
        key={e.href}
        to={e.href}
        className="no-underline text-inherit text-[#445464]"
      >
        <Typography variant="subtitle2" gutterBottom component="span">
          {e.label}
        </Typography>
      </Link>
    )
  })
  return (
    <div>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </div>
  )
}

export default TBreadcrumbs

TBreadcrumbs.defaultProps = {
  data: [],
}
