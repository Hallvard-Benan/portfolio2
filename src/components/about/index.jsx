export default function AboutSection() {
  return (
    <div className="container content">
      <h2 className="section__title">About Me</h2>
      <div className="content">
        <img
          className="portrait"
          src="/images/Profilbilde.webp"
          alt="picture of me"
        />
      </div>
      <div className="about-text">
        <p>I&apos;m a Front End Developer from Oslo, Norway.</p>
        <p>
          Studying at Noroff I&apos;ve gained practical experience with design
          and development using HTML, Javascript/Typescript, CSS, React, NextJS
          and more.
        </p>
        <p>
          I&apos;m always interested in learning new tools and technologies, and
          currently looking for new opportunities as a developer.
        </p>
      </div>
    </div>
  );
}
