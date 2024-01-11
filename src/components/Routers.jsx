import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Menus from "./Menus";
import Homebanner from "../pages/Homebanner";
import Featurebanner from "../pages/Featurebanner";
import Populardestination from "../pages/Populardestination";
import Category from "../pages/Category";
import About from "../pages/About";
import Featurecategory from "../pages/Featurecategory";
import Home from "../pages/Home";
import Langaugetype from "../pages/Langaugetype";
import AddLanguage from "../pages/Addlangauge";
import Quetiontype from "../pages/Questiontype";
import Question from "../pages/Addquestion";
// import Signup from "./Signup";
// import Forgotpassword from "./Forgotpassword";
// import Home from "./Home";
// import Homebanner from "./Homebanner";
// import About from "./About";
// import Service from "./Service";
// import Programmingskills from "./Programmingskill";
// import Developmentkills from "./Developementskill";
// import Mywork from "./Mywork";
// import Contactbanner from "./Contactbanner";

const Routers = () => {
  return(
    <>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Langaugetype" element={<Langaugetype />} />
        <Route path="/addlangauge" element={<AddLanguage />} />
        <Route path="/questiontype" element={<Quetiontype />} />
        <Route path="/addquestion" element={<Question />} />
        <Route path="/menus" element={<Menus />} />
        <Route path="/homebanner" element={<Homebanner />} />
        <Route path="/featurebanner" element={<Featurebanner />} />
        <Route path="/populardestination" element={<Populardestination />} />
        <Route path="/category" element={<Category />} />
        <Route path="/about" element={<About />} />
        <Route path="/addfeatures" element={<Featurecategory />} />
        {/* <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="/homebanner" element={<Homebanner />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/programmingskills" element={<Programmingskills />} />
        <Route path="/developmentSkills" element={<Developmentkills />} />
        <Route path="/mywork" element={<Mywork />} />
        <Route path="/contactbanner" element={<Contactbanner />} /> */}
      </Routes>
    </>
  )
}

export default Routers;