import AboutComponent from "./components/AboutComponent";
import FormRegisterComponent from "./components/FormRegisterComponent";
import MapComponent from "./components/MapComponent";
import Skaters from "./components/SkatersComponent";
import FormSkateUseFormik from "./components/pure/FormSkateUseFormik";

export default function Home() {
  return (
    <>
    <main id="home" className="flex min-h-screen flex-col items-center justify-between p-10">
      <MapComponent/>
     {/*  <FormRegisterComponent/> */}
      <FormSkateUseFormik/>
      <Skaters></Skaters>
      <AboutComponent/>
    </main>
    </>
  )
}
