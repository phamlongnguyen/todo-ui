import { Breadcrumbs, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function TBreadcrumbs({ data = [] }) {
  const breadcrumbs = data.map((e, index) => {
    return (
      <Link
        key={e.href}
        to={e.href}
        className="no-underline text-inherit text-[#445464] "
      >
        <Typography
          variant="subtitle2"
          gutterBottom
          component="span"
          className={` ${
            index === data.length - 1 ? 'font-bold ' : 'hover:underline'
          }`}
        >
          {e.label}
        </Typography>
      </Link>
    );
  });
  return (
    <div>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </div>
  );
}

export default TBreadcrumbs;

TBreadcrumbs.defaultProps = {
  data: [],
};
