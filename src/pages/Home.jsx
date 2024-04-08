import { useEffect, useState } from "react";
import MainContainer from "../components/MainContainer";

const Home = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const currentTime = new Date().getHours();

    if (currentTime < 12) {
      setGreeting("Good Morning");
    } else if (currentTime < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);
  return (
    <MainContainer showSideBar={true}>
      <div className="md:px-[130px] lg:px-[180px] xl:px-[230px]">
        <h1 className="text-tprimary font-medium text-xl">
          {greeting}, Yashil!
        </h1>
      </div>
    </MainContainer>
  );
};

export default Home;
