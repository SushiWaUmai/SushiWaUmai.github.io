import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaItchIo,
  FaDiscord,
} from "react-icons/fa";

interface IntroProps {}

export const SocialMediaComponent: React.FC<IntroProps> = () => {
  return (
    <>
      <a href="https://github.com/SushiWaUmai" className="btn">
        <FaGithub size={32} />
      </a>
      <a href="https://sushiwaumai.itch.io/" className="btn">
        <FaItchIo size={32} />
      </a>
      <a href="https://www.instagram.com/eugenematsumura/" className="btn">
        <FaInstagram size={32} />
      </a>
      <a
        href="https://www.linkedin.com/in/eugene-matsumura-68334922b/"
        className="btn"
      >
        <FaLinkedin size={32} />
      </a>
      <a href="https://discord.com/users/356155984412147723/" className="btn">
        <FaDiscord size={32} />
      </a>
    </>
  );
};
