import { Link, useLocation } from 'react-router-dom';
import css from './GoBackBtn.module.css';
import { useRef } from 'react';

export const GoBackBtn = () => {
  const location = useLocation();
  const backLinkHref = useRef(location.state ?? '/');
  console.log(location);

  return (
    <Link to={backLinkHref.current} className={css.link}>
      Go back
    </Link>
  );
};
