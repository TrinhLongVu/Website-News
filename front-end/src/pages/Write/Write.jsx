import "./write.css";
import WriteNew from "../../Components/Writer/WriteNew";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";

const Write = () => {
  return (
    <>
      <Breadcrumbs crumbList={[{ name: "Write", link: "/user/write" }]} />
      <WriteNew />
    </>
  );
};

export default Write;
