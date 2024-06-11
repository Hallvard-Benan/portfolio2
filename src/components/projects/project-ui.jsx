import { FaGithub } from "react-icons/fa";
export default function ProjectUi({
  id,
  title,
  testUser,
  description,
  image,
  deploy,
  github,
  cms,
  stack,
}) {
  return (
    <div className="project" id={id}>
      <div className="project__coulumn2">
        <div className="project-img">
          <img src={image} alt={"screenshot of " + title} loading="lazy" />
        </div>
        {testUser && (
          <div className="test-user">
            <h4 className="test-user__title font-semibold">Test user:</h4>
            <div className="test-user__row">
              <p className="test-user__label">Email:</p> <p>{testUser.email}</p>
            </div>
            <div className="test-user__row">
              <p className="test-user__label">Password:</p>{" "}
              <p>{testUser.password}</p>
            </div>
          </div>
        )}
        <div className="project-links">
          <a
            href={deploy}
            target="_blank"
            className="project__link project__link--deploy"
          >
            Visit site
          </a>
          <a
            href={github}
            target="_blank"
            className="project__link project__link--repo "
          >
            <span>Github repo</span>
            <div>
              <FaGithub />
            </div>
          </a>
        </div>
      </div>
      <div className="project__coulumn1">
        <h3 className="project__title text-heading-card  font-semibold">
          {title}
        </h3>
        <div className="project__text">
          {description.map((d, i) => (
            <p key={i}>{d}</p>
          ))}
        </div>

        {cms ? (
          <div className="project-technologies">
            <div className="project__cms">
              <h4 className="project-technologies__title font-bold">CMS</h4>
              <div className="project-technologies__logos">
                <div className="project-technologies__logo">
                  <img src={cms.icon.url} alt={cms.icon.alt} loading="lazy" />
                  <p>{cms.name}</p>
                </div>
              </div>
            </div>
            <div className="project__frontend justify-items-center">
              <h4 className="project-technologies__title font-bold">
                Front end
              </h4>
              <div className="project-technologies__logos">
                {stack.map((item) => (
                  <div
                    key={item.name}
                    className="project-technologies__logo grid justify-items-center"
                  >
                    <img
                      src={item.icon.url}
                      alt={item.icon.alt}
                      loading="lazy"
                    />
                    <p>{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="stack">
            <h4 className="project-technologies__title font-bold">
              Built with
            </h4>

            <div className="project-technologies__logos stack-logos">
              {stack.map((item) => (
                <div
                  key={item.name}
                  className="project-technologies__logo stack-logo grid justify-items-center"
                >
                  <img
                    src={item.icon.url}
                    className="logo"
                    alt={item.icon.alt}
                    loading="lazy"
                  />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
