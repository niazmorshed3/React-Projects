import PropTypes from 'prop-types';
const Link = ({route}) => {
  return (
    <ul>
      <li className="hover:bg-green-700  px-6 mr-10 " key={route.id}>
        {" "}
        {route.name} <a href={route.path}></a>{" "}
      </li>
    </ul>
  );
};
Link.propTypes={
    route : PropTypes.object,
}
export default Link;
