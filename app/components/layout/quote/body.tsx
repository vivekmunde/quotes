import Page, { TBodyProps } from "../page";

const Body: React.FC<TBodyProps> = ({ children, className, ...props }) => {
  return (
    <Page.Body
      className={`flex flex-col justify-center sm:pb-[5vh] md:pb-[10vh] lg:pb-[10vh] ${
        className ?? ""
      }`}
      {...props}
    >
      {children}
    </Page.Body>
  );
};

export default Body;
