export default function CoreComponents({image,title,description}) {
    return (
      <li>
        <img src={image} alt="hampe naye" />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }