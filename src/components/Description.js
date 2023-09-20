let Description = ({
  title,
  text,
  anotherText,
  link,
  sectionAttribute,
  sectionId,
  divClassName,
  linkHref,
  linkBtn,
}) => {
  return (
    <section className={sectionAttribute} id={sectionId}>
      <div className={divClassName}>
        <h1>{title}</h1>
        <p> {anotherText ? anotherText : ""}</p>
        <p>{text}</p>
        <a href={linkHref} className={linkBtn}>
          {link}
        </a>
      </div>
    </section>
  );
};

export default Description;
