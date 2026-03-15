import { ResumeIcon } from "/assets/icons/ResumeIcon";
import { LinkedinIcon } from "/assets/icons/LinkedinIcon";
import { GithubIcon } from "/assets/icons/GithubIcon";

export const ExternalLinks = () => {
  return (
    <div className="flex items-center gap-4">
      <ExternalLink url="https://juroalwi.github.io/">
        <ResumeIcon className="fill-dark" width={36} height={36} />
      </ExternalLink>

      <ExternalLink url="https://www.linkedin.com/in/juroalwi">
        <LinkedinIcon className="fill-dark" width={36} height={36} />
      </ExternalLink>

      <ExternalLink url="https://github.com/juroalwi">
        <GithubIcon className="fill-dark" width={36} height={36} />
      </ExternalLink>
    </div>
  );
};

const ExternalLink = ({
  children,
  url,
}: {
  children: React.ReactNode;
  url: string;
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer p-2 duration-200 hover:scale-125"
    >
      {children}
    </a>
  );
};
