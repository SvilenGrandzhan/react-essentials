const CoreConcept = ({ title, description, img }) => {
  return (
    <li>
      <img src={img} alt={description} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};
export default CoreConcept;
