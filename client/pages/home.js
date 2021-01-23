const home = props => {
  <div>
    {props.notifications.map(txt => (
      <p>{txt}</p>
    ))}
  </div>;
};
