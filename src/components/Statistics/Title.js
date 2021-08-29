import s from './Statistics.module.css';

function Title(props) {
  // return ({ title && <h2 className={s.title}>{props.title}</h2> });
  if (props.title) {
    return <h2 className={s.title}>{props.title}</h2>;
  } else return null;
}

export default Title;
