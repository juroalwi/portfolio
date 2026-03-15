import { LoadingIcon } from "/assets/icons/LoadingIcon";

export const Spinner = ({ fill }: { fill?: string }) => {
  return <LoadingIcon fill={fill} className="animate-spin" />;
};
