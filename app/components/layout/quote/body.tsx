import Page, { TBodyProps } from "../page";

const Body: React.FC<TBodyProps> = ({ children, className, ...props }) => {
  return (
    <Page.Body
      className={`flex flex-col justify-center pt-6 pb-[5vh] ${
        className ?? ""
      }`}
      {...props}
    >
      {children}
    </Page.Body>
  );
};

export default Body;
