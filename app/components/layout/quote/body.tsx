import Page, { TBodyProps } from "../page";

const Body: React.FC<TBodyProps> = ({ children, className, ...props }) => {
  return (
    <Page.Body
      className={`flex flex-col justify-center pb-[10vh] md:pb-[15vh] lg:pb-[15vh] ${
        className ?? ""
      }`}
      {...props}
    >
      {children}
    </Page.Body>
  );
};

export default Body;
