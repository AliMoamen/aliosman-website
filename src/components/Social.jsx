import { Tooltip } from "./Tooltip";
const Social = () => {
  return (
    <ul className="social-icons social-icons-muted social-icons-sm mt-lg-auto ms-auto ms-lg-0 d-flex">
      <li className="social-icons-facebook">
        <Tooltip text="Linkedin" placement="top">
          <a
            href="https://www.linkedin.com/in/ali-osman-435804254/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
        </Tooltip>
      </li>
      <li className="social-icons-github">
        <Tooltip text="Google" placement="top">
          <a
            href="http://www.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" />
          </a>
        </Tooltip>
      </li>
    </ul>
  );
};
export default Social;
