import Image from "next/image";

interface SocialMediaProps {
  src: string;
  size: number;
  alt: string;
  url: string;
}

const SocialMedia: React.FC<SocialMediaProps> = ({ url, src, size, alt }) => {
  return (
    <a href={url}>
      <Image src={src} width={size} height={size} alt={alt} />
    </a>
  );
};

export default SocialMedia;
