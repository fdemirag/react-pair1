import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import BizKimiz from "./Pages/BizKimiz";
import BireylerIcın from "./Pages/BireylerIcin";
import BasindaBiz from "./Pages/BasindaBiz";
import Blog from "./Pages/Blog";
import Codeacademy from "./Pages/Codeacademy";
import IstanbulKodluyor from "./Pages/IstanbulKodluyor";
import Katalog from "./Pages/Katalog";
import KurumlarIcin from "./Pages/KurumlarIcin";
import Takvim from "./Pages/Takvim";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Education from "./Pages/Education";
import Platform from "./Pages/Platform/Platform";
import Degerlendirmeler from "./Pages/Platform/Degerlendirmeler";
import Profil from "./Pages/Platform/Profil";
import PlatformKatalog from "./Pages/Platform/PlatformKatalog";
import PlatformTakvim from "./Pages/Platform/PlatformTakvim";
import MyEducation from "./Pages/Platform/MyEducation";
import PrivateRoute from "./Routes/PrivateRoute";
import KisiselBilgiler from "./Pages/Platform/ProfilBilgileri/KisiselBilgiler";
import NotFound from "./Pages/NotFound";
import AdminLogin from "./AdminPanel/pages/AdminLogin";
import AdminPanel from "./AdminPanel/pages/AdminPanel";
import PrivateRouteAdmin from "./AdminPanel/routes/PrivateRouteAdmin";
import React, { useState, useEffect } from "react";
import Spinner from "./Components/Common/Spinner/Spinner";
import { useDispatch } from "react-redux";
import { checkTokenAndLogin } from "./Store/Actions/userActions";
import Frontend from "./Pages/Programs/Frontend";
import Backend from "./Pages/Programs/Backend";
import CyberSecurity from "./Pages/Programs/CyberSecurity";
import DataScience from "./Pages/Programs/DataScience";
import FullStack from "./Pages/Programs/FullStack";
import UI_UX from "./Pages/Programs/UI_UX";
import Web_Mobile from "./Pages/Programs/Web_Mobile";
import GetInformationFromPrograms from "./Pages/Programs/GetInformationFromPrograms";
import ForgotPassword from "./Pages/ForgotPassword";
import BlogIcerik from "./Pages/BlogIcerik";
import BasindaBizIcerik from "./Pages/BasindaBizIcerik";
import LmsPage from "./Lms/pages/LmsPage";
import ContactUs from "./Pages/ContactUs";
import MyNotification from "./Pages/Platform/MyNotification";
import RegistrationModal from "./Components/Common/RegistrationModal";

function App() {
  const dispatch = useDispatch();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
    return () => clearTimeout(timeout);
  }, []);

    useEffect(() => {
      dispatch(checkTokenAndLogin());
    }, [dispatch]);

  return (
    <Router>
      {isLoading ? (
        <Spinner />
      ) : (
        <Routes>
          <Route path="/admin" element={<AdminLogin setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/adminpanel" element={ <PrivateRouteAdmin isAuthenticated={isAuthenticated}><AdminPanel /> </PrivateRouteAdmin> }
          />
          <Route path="/" element={<HomePage />} />
          <Route path="/bizkimiz" element={<BizKimiz />} />
          <Route path="/bireylericin" element={<BireylerIcın />} />
          <Route path="/BasindaBiz" element={<BasindaBiz />} />
          <Route path="/basindabizblog/getbyId/:pressId" element={<BasindaBizIcerik />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Codeacademy" element={<Codeacademy />} />
          <Route path="/IstanbulKodluyor" element={<IstanbulKodluyor />} />
          <Route path="/Katalog" element={<Katalog />} />
          <Route path="/KurumlarIcin" element={<KurumlarIcin />} />
          <Route path="/Takvim" element={<Takvim />} />
          <Route path="/girisyap" element={<SignIn />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/uyeol" element={<SignUp />} />
          <Route path="/Frontend" element={<Frontend />} />
          <Route path="/Backend" element={<Backend />} />
          <Route path="/FullStack" element={<FullStack />} />
          <Route path="/Web_Mobile" element={<Web_Mobile />} />
          <Route path="/DataScience" element={<DataScience />} />
          <Route path="/CyberSecurity" element={<CyberSecurity />} />
          <Route path="/UI_UX" element={<UI_UX />} />
          <Route path="/bilgi-al" element={<GetInformationFromPrograms/>} />
          <Route path="/platform" element={<PrivateRoute><Platform /></PrivateRoute>}/>
          <Route path="/degerlendirmeler"element={<PrivateRoute><Degerlendirmeler /></PrivateRoute>}/>
          <Route path="/profil"element={<PrivateRoute><Profil /> </PrivateRoute>}/>
          <Route path="/platform-katalog"element={<PrivateRoute><PlatformKatalog /> </PrivateRoute> } />
          <Route path="/Duyurularım" element={<PrivateRoute><MyNotification/></PrivateRoute>}/>
          <Route path="/platform-takvim" element={ <PrivateRoute> <PlatformTakvim /> </PrivateRoute> } />
          <Route path="/sifremi-unuttum" element={<ForgotPassword/>} />
          <Route path="/kisiselbilgiler" element={<PrivateRoute><KisiselBilgiler /> </PrivateRoute>}/>
          <Route path="/egitimlerim" element={ <PrivateRoute> <MyEducation /> </PrivateRoute>}/>
          <Route path="/Frontend" element={<Frontend/>} />
          <Route path="/Backend" element={<Backend/>} />
          <Route path="/FullStack" element={<FullStack/>} />
          <Route path="/Web_Mobile" element={<Web_Mobile/>} />
          <Route path="/DataScience" element={<DataScience/>} />
          <Route path="/bloglar/:blogId" element={<BlogIcerik/>} />
          <Route path="/CyberSecurity" element={<CyberSecurity/>} />
          <Route path="/UI_UX" element={<UI_UX/>} />
          <Route path="/iletisim" element={<ContactUs/>} />
          <Route path="/registermodal" element={<RegistrationModal/>} />
          <Route path="/lms" element={<PrivateRoute><LmsPage/></PrivateRoute>}/>
          <Route
            path="/platform"
            element={
              <PrivateRoute>
                <Platform />
              </PrivateRoute>
            }
          />
          <Route
            path="/degerlendirmeler"
            element={
              <PrivateRoute>
                <Degerlendirmeler />
              </PrivateRoute>
            }
          />
          <Route
            path="/profil"
            element={
              <PrivateRoute>
                <Profil />
              </PrivateRoute>
            }
          />
          <Route
            path="/platform-katalog"
            element={
              <PrivateRoute>
                <PlatformKatalog />
              </PrivateRoute>
            }
          />
          <Route
            path="/platform-takvim"
            element={
              <PrivateRoute>
                <PlatformTakvim />
              </PrivateRoute>
            }
          />
          <Route
            path="/kisiselbilgiler"
            element={
              <PrivateRoute>
                <KisiselBilgiler />
              </PrivateRoute>
            }
          />
          <Route
            path="/egitimlerim"
            element={
              <PrivateRoute>
                <MyEducation />
              </PrivateRoute>
            }
          />
        </Routes>
      )}
    </Router>
  );
}

export default App;
