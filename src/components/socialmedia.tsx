import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaItchIo,
  FaDiscord,
  FaTwitter,
} from "react-icons/fa";

interface SocialMediaProps {}

export const SocialMediaComponent: React.FC<SocialMediaProps> = () => {
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
      <a href="https://discord.com/users/356155984412147723/" className="btn">
        <FaDiscord size={32} />
      </a>
      <a href="https://twitter.com/EugeneMatsumur1" className="btn">
        <FaTwitter size={32} />
      </a>
      <a
        href="https://www.linkedin.com/in/eugene-matsumura-68334922b/"
        className="btn"
      >
        <FaLinkedin size={32} />
      </a>
    </>
  );
};
