import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { UnorderedList } from "@atrilabs/react-component-manifests/src/manifests/UnorderedList/UnorderedList.tsx";
import { useheaderHomeCb, useFlex1Cb, useFlex2Cb, useFlex3Cb, useFlex5Cb, useheroBannerCb, useFlex57Cb, useFlex58Cb, useFlex59Cb, useFlex243Cb, useFlex60Cb, useTrustedByCb, useFlex62Cb, uselogoContainerCb, useServicesCb, useservicesContainerCb, useFlex65Cb, useFlex66Cb, useFlex70Cb, useFlex71Cb, useaboutCb, useFlex73Cb, useFlex74Cb, useFlex76Cb, useFlex77Cb, useFlex75Cb, useFlex78Cb, useFlex79Cb, useexperinceCb, useFlex82Cb, useFlex84Cb, useFlex86Cb, useFlex85Cb, useFlex87Cb, useFlex90Cb, useFlex88Cb, useFlex89Cb, useFlex96Cb, useFlex94Cb, useFlex95Cb, useFlex129Cb, useFlex126Cb, useFlex121Cb, useFlex134Cb, useFlex133Cb, useFlex127Cb, useFlex123Cb, useFlex132Cb, useFlex131Cb, useFlex128Cb, useFlex124Cb, useFlex125Cb, useFlex130Cb, useFAQCb, useFlex158Cb, useFlex160Cb, useFlex157Cb, useFlex155Cb, useFlex148Cb, useFlex149Cb, useFlex163Cb, useFlex161Cb, useFlex162Cb, useFlex169Cb, useFlex167Cb, useFlex168Cb, useFlex172Cb, useFlex170Cb, useFlex171Cb, useFlex186Cb, useFlex182Cb, useFlex174Cb, useFlex175Cb, useFlex183Cb, useFlex176Cb, useFlex177Cb, useFlex184Cb, useFlex178Cb, useFlex179Cb, useFlex185Cb, useFlex180Cb, useFlex181Cb, useFlex173Cb, useFooterCb, useFlex215Cb, useFlex213Cb, useFlex214Cb, useFlex211Cb, useFlex203Cb, useFlex204Cb, useFlex205Cb, useFlex212Cb, useFlex201Cb, useFlex210Cb, usetestimonialCb, useFlex240Cb, useFlex239Cb, useFlex238Cb, useFlex232Cb, useFlex220Cb, useFlex217Cb, useFlex242Cb, useblogCb, useFlex272Cb, useFlex269Cb, useFlex267Cb, useFlex259Cb, useFlex285Cb, useFlex284Cb, useFlex287Cb, useFlex286Cb, useFlex289Cb, useFlex288Cb, useFlex291Cb, useFlex290Cb, useFlex270Cb, useFlex292Cb, useprojectCb, useFlex280Cb, useFlex278Cb, useFlex274Cb, useFlex293Cb, useFlex275Cb, useFlex294Cb, useFlex295Cb, useFlex296Cb, useFlex302Cb, useFlex301Cb, useFlex300Cb, useFlex305Cb, useFlex304Cb, useFlex303Cb, useFlex308Cb, useFlex307Cb, useFlex306Cb, useFlex311Cb, useFlex310Cb, useFlex309Cb, useFlex279Cb, useFlex276Cb, useFlex277Cb, useFlex283Cb, useTextBox6Cb, useTextBox2Cb, useTextBox3Cb, useTextBox4Cb, useTextBox5Cb, useTextBox1Cb, useImage1Cb, useImage29Cb, useTextBox52Cb, useTextBox51Cb, useImage30Cb, useButton4Cb, useTextBox49Cb, useTextBox50Cb, useTextBox53Cb, useImage31Cb, useImage32Cb, useImage33Cb, useImage34Cb, useTextBox54Cb, useTextBox55Cb, useTextBox56Cb, useTextBox57Cb, useImage35Cb, useUnorderedList1Cb, useUnorderedList2Cb, useImage36Cb, useTextBox58Cb, useTextBox59Cb, useUnorderedList3Cb, useImage37Cb, useTextBox60Cb, useTextBox61Cb, useTextBox62Cb, useTextBox63Cb, useTextBox64Cb, useImage38Cb, useImage39Cb, useImage40Cb, useImage41Cb, useTextBox65Cb, useTextBox66Cb, useTextBox67Cb, useTextBox68Cb, useImage43Cb, useImage44Cb, useTextBox69Cb, useTextBox70Cb, useTextBox71Cb, useImage46Cb, useTextBox75Cb, useTextBox76Cb, useTextBox77Cb, useTextBox110Cb, useTextBox103Cb, useImage54Cb, useImage59Cb, useTextBox113Cb, useTextBox114Cb, useTextBox106Cb, useImage55Cb, useImage58Cb, useTextBox111Cb, useTextBox112Cb, useImage56Cb, useTextBox107Cb, useImage57Cb, useTextBox108Cb, useTextBox109Cb, useImage68Cb, useTextBox131Cb, useTextBox132Cb, useTextBox137Cb, useTextBox138Cb, useImage69Cb, useTextBox141Cb, useTextBox142Cb, useImage71Cb, useTextBox143Cb, useTextBox144Cb, useImage72Cb, useImage74Cb, useTextBox145Cb, useTextBox146Cb, useImage75Cb, useTextBox147Cb, useTextBox148Cb, useImage76Cb, useTextBox149Cb, useTextBox150Cb, useTextBox151Cb, useTextBox152Cb, useImage77Cb, useTextBox135Cb, useTextBox136Cb, useTextBox169Cb, useTextBox170Cb, useTextBox153Cb, useTextBox173Cb, useTextBox174Cb, useTextBox175Cb, useTextBox176Cb, useTextBox177Cb, useTextBox178Cb, useTextBox179Cb, useTextBox180Cb, useTextBox171Cb, useTextBox167Cb, useTextBox168Cb, useImage85Cb, useTextBox172Cb, useTextBox191Cb, useTextBox200Cb, useImage86Cb, useTextBox187Cb, useImage95Cb, useButton2Cb, useButton3Cb, useTextBox201Cb, useTextBox202Cb, useTextBox217Cb, useTextBox218Cb, useImage103Cb, useTextBox225Cb, useTextBox227Cb, useTextBox228Cb, useTextBox226Cb, useImage108Cb, useTextBox230Cb, useTextBox231Cb, useTextBox229Cb, useImage109Cb, useTextBox233Cb, useTextBox234Cb, useTextBox232Cb, useImage110Cb, useTextBox236Cb, useTextBox237Cb, useTextBox235Cb, useImage111Cb, useTextBox219Cb, useTextBox220Cb, useTextBox238Cb, useImage112Cb, useButton7Cb, useButton8Cb, useImage113Cb, useTextBox239Cb, useTextBox240Cb, useImage114Cb, useTextBox241Cb, useImage118Cb, useTextBox246Cb, useTextBox247Cb, useTextBox245Cb, useImage117Cb, useImage120Cb, useTextBox249Cb, useTextBox250Cb, useTextBox248Cb, useImage119Cb, useImage122Cb, useTextBox252Cb, useTextBox253Cb, useTextBox251Cb, useImage121Cb, useImage124Cb, useTextBox255Cb, useTextBox256Cb, useTextBox254Cb, useImage123Cb, useButton9Cb, useTextBox222Cb, useTextBox223Cb, useTextBox224Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const headerHomeProps = useStore((state)=>state["Home"]["headerHome"]);
const headerHomeIoProps = useIoStore((state)=>state["Home"]["headerHome"]);
const headerHomeCb = useheaderHomeCb()
const Flex1Props = useStore((state)=>state["Home"]["Flex1"]);
const Flex1IoProps = useIoStore((state)=>state["Home"]["Flex1"]);
const Flex1Cb = useFlex1Cb()
const Flex2Props = useStore((state)=>state["Home"]["Flex2"]);
const Flex2IoProps = useIoStore((state)=>state["Home"]["Flex2"]);
const Flex2Cb = useFlex2Cb()
const Flex3Props = useStore((state)=>state["Home"]["Flex3"]);
const Flex3IoProps = useIoStore((state)=>state["Home"]["Flex3"]);
const Flex3Cb = useFlex3Cb()
const Flex5Props = useStore((state)=>state["Home"]["Flex5"]);
const Flex5IoProps = useIoStore((state)=>state["Home"]["Flex5"]);
const Flex5Cb = useFlex5Cb()
const heroBannerProps = useStore((state)=>state["Home"]["heroBanner"]);
const heroBannerIoProps = useIoStore((state)=>state["Home"]["heroBanner"]);
const heroBannerCb = useheroBannerCb()
const Flex57Props = useStore((state)=>state["Home"]["Flex57"]);
const Flex57IoProps = useIoStore((state)=>state["Home"]["Flex57"]);
const Flex57Cb = useFlex57Cb()
const Flex58Props = useStore((state)=>state["Home"]["Flex58"]);
const Flex58IoProps = useIoStore((state)=>state["Home"]["Flex58"]);
const Flex58Cb = useFlex58Cb()
const Flex59Props = useStore((state)=>state["Home"]["Flex59"]);
const Flex59IoProps = useIoStore((state)=>state["Home"]["Flex59"]);
const Flex59Cb = useFlex59Cb()
const Flex243Props = useStore((state)=>state["Home"]["Flex243"]);
const Flex243IoProps = useIoStore((state)=>state["Home"]["Flex243"]);
const Flex243Cb = useFlex243Cb()
const Flex60Props = useStore((state)=>state["Home"]["Flex60"]);
const Flex60IoProps = useIoStore((state)=>state["Home"]["Flex60"]);
const Flex60Cb = useFlex60Cb()
const TrustedByProps = useStore((state)=>state["Home"]["TrustedBy"]);
const TrustedByIoProps = useIoStore((state)=>state["Home"]["TrustedBy"]);
const TrustedByCb = useTrustedByCb()
const Flex62Props = useStore((state)=>state["Home"]["Flex62"]);
const Flex62IoProps = useIoStore((state)=>state["Home"]["Flex62"]);
const Flex62Cb = useFlex62Cb()
const logoContainerProps = useStore((state)=>state["Home"]["logoContainer"]);
const logoContainerIoProps = useIoStore((state)=>state["Home"]["logoContainer"]);
const logoContainerCb = uselogoContainerCb()
const ServicesProps = useStore((state)=>state["Home"]["Services"]);
const ServicesIoProps = useIoStore((state)=>state["Home"]["Services"]);
const ServicesCb = useServicesCb()
const servicesContainerProps = useStore((state)=>state["Home"]["servicesContainer"]);
const servicesContainerIoProps = useIoStore((state)=>state["Home"]["servicesContainer"]);
const servicesContainerCb = useservicesContainerCb()
const Flex65Props = useStore((state)=>state["Home"]["Flex65"]);
const Flex65IoProps = useIoStore((state)=>state["Home"]["Flex65"]);
const Flex65Cb = useFlex65Cb()
const Flex66Props = useStore((state)=>state["Home"]["Flex66"]);
const Flex66IoProps = useIoStore((state)=>state["Home"]["Flex66"]);
const Flex66Cb = useFlex66Cb()
const Flex70Props = useStore((state)=>state["Home"]["Flex70"]);
const Flex70IoProps = useIoStore((state)=>state["Home"]["Flex70"]);
const Flex70Cb = useFlex70Cb()
const Flex71Props = useStore((state)=>state["Home"]["Flex71"]);
const Flex71IoProps = useIoStore((state)=>state["Home"]["Flex71"]);
const Flex71Cb = useFlex71Cb()
const aboutProps = useStore((state)=>state["Home"]["about"]);
const aboutIoProps = useIoStore((state)=>state["Home"]["about"]);
const aboutCb = useaboutCb()
const Flex73Props = useStore((state)=>state["Home"]["Flex73"]);
const Flex73IoProps = useIoStore((state)=>state["Home"]["Flex73"]);
const Flex73Cb = useFlex73Cb()
const Flex74Props = useStore((state)=>state["Home"]["Flex74"]);
const Flex74IoProps = useIoStore((state)=>state["Home"]["Flex74"]);
const Flex74Cb = useFlex74Cb()
const Flex76Props = useStore((state)=>state["Home"]["Flex76"]);
const Flex76IoProps = useIoStore((state)=>state["Home"]["Flex76"]);
const Flex76Cb = useFlex76Cb()
const Flex77Props = useStore((state)=>state["Home"]["Flex77"]);
const Flex77IoProps = useIoStore((state)=>state["Home"]["Flex77"]);
const Flex77Cb = useFlex77Cb()
const Flex75Props = useStore((state)=>state["Home"]["Flex75"]);
const Flex75IoProps = useIoStore((state)=>state["Home"]["Flex75"]);
const Flex75Cb = useFlex75Cb()
const Flex78Props = useStore((state)=>state["Home"]["Flex78"]);
const Flex78IoProps = useIoStore((state)=>state["Home"]["Flex78"]);
const Flex78Cb = useFlex78Cb()
const Flex79Props = useStore((state)=>state["Home"]["Flex79"]);
const Flex79IoProps = useIoStore((state)=>state["Home"]["Flex79"]);
const Flex79Cb = useFlex79Cb()
const experinceProps = useStore((state)=>state["Home"]["experince"]);
const experinceIoProps = useIoStore((state)=>state["Home"]["experince"]);
const experinceCb = useexperinceCb()
const Flex82Props = useStore((state)=>state["Home"]["Flex82"]);
const Flex82IoProps = useIoStore((state)=>state["Home"]["Flex82"]);
const Flex82Cb = useFlex82Cb()
const Flex84Props = useStore((state)=>state["Home"]["Flex84"]);
const Flex84IoProps = useIoStore((state)=>state["Home"]["Flex84"]);
const Flex84Cb = useFlex84Cb()
const Flex86Props = useStore((state)=>state["Home"]["Flex86"]);
const Flex86IoProps = useIoStore((state)=>state["Home"]["Flex86"]);
const Flex86Cb = useFlex86Cb()
const Flex85Props = useStore((state)=>state["Home"]["Flex85"]);
const Flex85IoProps = useIoStore((state)=>state["Home"]["Flex85"]);
const Flex85Cb = useFlex85Cb()
const Flex87Props = useStore((state)=>state["Home"]["Flex87"]);
const Flex87IoProps = useIoStore((state)=>state["Home"]["Flex87"]);
const Flex87Cb = useFlex87Cb()
const Flex90Props = useStore((state)=>state["Home"]["Flex90"]);
const Flex90IoProps = useIoStore((state)=>state["Home"]["Flex90"]);
const Flex90Cb = useFlex90Cb()
const Flex88Props = useStore((state)=>state["Home"]["Flex88"]);
const Flex88IoProps = useIoStore((state)=>state["Home"]["Flex88"]);
const Flex88Cb = useFlex88Cb()
const Flex89Props = useStore((state)=>state["Home"]["Flex89"]);
const Flex89IoProps = useIoStore((state)=>state["Home"]["Flex89"]);
const Flex89Cb = useFlex89Cb()
const Flex96Props = useStore((state)=>state["Home"]["Flex96"]);
const Flex96IoProps = useIoStore((state)=>state["Home"]["Flex96"]);
const Flex96Cb = useFlex96Cb()
const Flex94Props = useStore((state)=>state["Home"]["Flex94"]);
const Flex94IoProps = useIoStore((state)=>state["Home"]["Flex94"]);
const Flex94Cb = useFlex94Cb()
const Flex95Props = useStore((state)=>state["Home"]["Flex95"]);
const Flex95IoProps = useIoStore((state)=>state["Home"]["Flex95"]);
const Flex95Cb = useFlex95Cb()
const Flex129Props = useStore((state)=>state["Home"]["Flex129"]);
const Flex129IoProps = useIoStore((state)=>state["Home"]["Flex129"]);
const Flex129Cb = useFlex129Cb()
const Flex126Props = useStore((state)=>state["Home"]["Flex126"]);
const Flex126IoProps = useIoStore((state)=>state["Home"]["Flex126"]);
const Flex126Cb = useFlex126Cb()
const Flex121Props = useStore((state)=>state["Home"]["Flex121"]);
const Flex121IoProps = useIoStore((state)=>state["Home"]["Flex121"]);
const Flex121Cb = useFlex121Cb()
const Flex134Props = useStore((state)=>state["Home"]["Flex134"]);
const Flex134IoProps = useIoStore((state)=>state["Home"]["Flex134"]);
const Flex134Cb = useFlex134Cb()
const Flex133Props = useStore((state)=>state["Home"]["Flex133"]);
const Flex133IoProps = useIoStore((state)=>state["Home"]["Flex133"]);
const Flex133Cb = useFlex133Cb()
const Flex127Props = useStore((state)=>state["Home"]["Flex127"]);
const Flex127IoProps = useIoStore((state)=>state["Home"]["Flex127"]);
const Flex127Cb = useFlex127Cb()
const Flex123Props = useStore((state)=>state["Home"]["Flex123"]);
const Flex123IoProps = useIoStore((state)=>state["Home"]["Flex123"]);
const Flex123Cb = useFlex123Cb()
const Flex132Props = useStore((state)=>state["Home"]["Flex132"]);
const Flex132IoProps = useIoStore((state)=>state["Home"]["Flex132"]);
const Flex132Cb = useFlex132Cb()
const Flex131Props = useStore((state)=>state["Home"]["Flex131"]);
const Flex131IoProps = useIoStore((state)=>state["Home"]["Flex131"]);
const Flex131Cb = useFlex131Cb()
const Flex128Props = useStore((state)=>state["Home"]["Flex128"]);
const Flex128IoProps = useIoStore((state)=>state["Home"]["Flex128"]);
const Flex128Cb = useFlex128Cb()
const Flex124Props = useStore((state)=>state["Home"]["Flex124"]);
const Flex124IoProps = useIoStore((state)=>state["Home"]["Flex124"]);
const Flex124Cb = useFlex124Cb()
const Flex125Props = useStore((state)=>state["Home"]["Flex125"]);
const Flex125IoProps = useIoStore((state)=>state["Home"]["Flex125"]);
const Flex125Cb = useFlex125Cb()
const Flex130Props = useStore((state)=>state["Home"]["Flex130"]);
const Flex130IoProps = useIoStore((state)=>state["Home"]["Flex130"]);
const Flex130Cb = useFlex130Cb()
const FAQProps = useStore((state)=>state["Home"]["FAQ"]);
const FAQIoProps = useIoStore((state)=>state["Home"]["FAQ"]);
const FAQCb = useFAQCb()
const Flex158Props = useStore((state)=>state["Home"]["Flex158"]);
const Flex158IoProps = useIoStore((state)=>state["Home"]["Flex158"]);
const Flex158Cb = useFlex158Cb()
const Flex160Props = useStore((state)=>state["Home"]["Flex160"]);
const Flex160IoProps = useIoStore((state)=>state["Home"]["Flex160"]);
const Flex160Cb = useFlex160Cb()
const Flex157Props = useStore((state)=>state["Home"]["Flex157"]);
const Flex157IoProps = useIoStore((state)=>state["Home"]["Flex157"]);
const Flex157Cb = useFlex157Cb()
const Flex155Props = useStore((state)=>state["Home"]["Flex155"]);
const Flex155IoProps = useIoStore((state)=>state["Home"]["Flex155"]);
const Flex155Cb = useFlex155Cb()
const Flex148Props = useStore((state)=>state["Home"]["Flex148"]);
const Flex148IoProps = useIoStore((state)=>state["Home"]["Flex148"]);
const Flex148Cb = useFlex148Cb()
const Flex149Props = useStore((state)=>state["Home"]["Flex149"]);
const Flex149IoProps = useIoStore((state)=>state["Home"]["Flex149"]);
const Flex149Cb = useFlex149Cb()
const Flex163Props = useStore((state)=>state["Home"]["Flex163"]);
const Flex163IoProps = useIoStore((state)=>state["Home"]["Flex163"]);
const Flex163Cb = useFlex163Cb()
const Flex161Props = useStore((state)=>state["Home"]["Flex161"]);
const Flex161IoProps = useIoStore((state)=>state["Home"]["Flex161"]);
const Flex161Cb = useFlex161Cb()
const Flex162Props = useStore((state)=>state["Home"]["Flex162"]);
const Flex162IoProps = useIoStore((state)=>state["Home"]["Flex162"]);
const Flex162Cb = useFlex162Cb()
const Flex169Props = useStore((state)=>state["Home"]["Flex169"]);
const Flex169IoProps = useIoStore((state)=>state["Home"]["Flex169"]);
const Flex169Cb = useFlex169Cb()
const Flex167Props = useStore((state)=>state["Home"]["Flex167"]);
const Flex167IoProps = useIoStore((state)=>state["Home"]["Flex167"]);
const Flex167Cb = useFlex167Cb()
const Flex168Props = useStore((state)=>state["Home"]["Flex168"]);
const Flex168IoProps = useIoStore((state)=>state["Home"]["Flex168"]);
const Flex168Cb = useFlex168Cb()
const Flex172Props = useStore((state)=>state["Home"]["Flex172"]);
const Flex172IoProps = useIoStore((state)=>state["Home"]["Flex172"]);
const Flex172Cb = useFlex172Cb()
const Flex170Props = useStore((state)=>state["Home"]["Flex170"]);
const Flex170IoProps = useIoStore((state)=>state["Home"]["Flex170"]);
const Flex170Cb = useFlex170Cb()
const Flex171Props = useStore((state)=>state["Home"]["Flex171"]);
const Flex171IoProps = useIoStore((state)=>state["Home"]["Flex171"]);
const Flex171Cb = useFlex171Cb()
const Flex186Props = useStore((state)=>state["Home"]["Flex186"]);
const Flex186IoProps = useIoStore((state)=>state["Home"]["Flex186"]);
const Flex186Cb = useFlex186Cb()
const Flex182Props = useStore((state)=>state["Home"]["Flex182"]);
const Flex182IoProps = useIoStore((state)=>state["Home"]["Flex182"]);
const Flex182Cb = useFlex182Cb()
const Flex174Props = useStore((state)=>state["Home"]["Flex174"]);
const Flex174IoProps = useIoStore((state)=>state["Home"]["Flex174"]);
const Flex174Cb = useFlex174Cb()
const Flex175Props = useStore((state)=>state["Home"]["Flex175"]);
const Flex175IoProps = useIoStore((state)=>state["Home"]["Flex175"]);
const Flex175Cb = useFlex175Cb()
const Flex183Props = useStore((state)=>state["Home"]["Flex183"]);
const Flex183IoProps = useIoStore((state)=>state["Home"]["Flex183"]);
const Flex183Cb = useFlex183Cb()
const Flex176Props = useStore((state)=>state["Home"]["Flex176"]);
const Flex176IoProps = useIoStore((state)=>state["Home"]["Flex176"]);
const Flex176Cb = useFlex176Cb()
const Flex177Props = useStore((state)=>state["Home"]["Flex177"]);
const Flex177IoProps = useIoStore((state)=>state["Home"]["Flex177"]);
const Flex177Cb = useFlex177Cb()
const Flex184Props = useStore((state)=>state["Home"]["Flex184"]);
const Flex184IoProps = useIoStore((state)=>state["Home"]["Flex184"]);
const Flex184Cb = useFlex184Cb()
const Flex178Props = useStore((state)=>state["Home"]["Flex178"]);
const Flex178IoProps = useIoStore((state)=>state["Home"]["Flex178"]);
const Flex178Cb = useFlex178Cb()
const Flex179Props = useStore((state)=>state["Home"]["Flex179"]);
const Flex179IoProps = useIoStore((state)=>state["Home"]["Flex179"]);
const Flex179Cb = useFlex179Cb()
const Flex185Props = useStore((state)=>state["Home"]["Flex185"]);
const Flex185IoProps = useIoStore((state)=>state["Home"]["Flex185"]);
const Flex185Cb = useFlex185Cb()
const Flex180Props = useStore((state)=>state["Home"]["Flex180"]);
const Flex180IoProps = useIoStore((state)=>state["Home"]["Flex180"]);
const Flex180Cb = useFlex180Cb()
const Flex181Props = useStore((state)=>state["Home"]["Flex181"]);
const Flex181IoProps = useIoStore((state)=>state["Home"]["Flex181"]);
const Flex181Cb = useFlex181Cb()
const Flex173Props = useStore((state)=>state["Home"]["Flex173"]);
const Flex173IoProps = useIoStore((state)=>state["Home"]["Flex173"]);
const Flex173Cb = useFlex173Cb()
const FooterProps = useStore((state)=>state["Home"]["Footer"]);
const FooterIoProps = useIoStore((state)=>state["Home"]["Footer"]);
const FooterCb = useFooterCb()
const Flex215Props = useStore((state)=>state["Home"]["Flex215"]);
const Flex215IoProps = useIoStore((state)=>state["Home"]["Flex215"]);
const Flex215Cb = useFlex215Cb()
const Flex213Props = useStore((state)=>state["Home"]["Flex213"]);
const Flex213IoProps = useIoStore((state)=>state["Home"]["Flex213"]);
const Flex213Cb = useFlex213Cb()
const Flex214Props = useStore((state)=>state["Home"]["Flex214"]);
const Flex214IoProps = useIoStore((state)=>state["Home"]["Flex214"]);
const Flex214Cb = useFlex214Cb()
const Flex211Props = useStore((state)=>state["Home"]["Flex211"]);
const Flex211IoProps = useIoStore((state)=>state["Home"]["Flex211"]);
const Flex211Cb = useFlex211Cb()
const Flex203Props = useStore((state)=>state["Home"]["Flex203"]);
const Flex203IoProps = useIoStore((state)=>state["Home"]["Flex203"]);
const Flex203Cb = useFlex203Cb()
const Flex204Props = useStore((state)=>state["Home"]["Flex204"]);
const Flex204IoProps = useIoStore((state)=>state["Home"]["Flex204"]);
const Flex204Cb = useFlex204Cb()
const Flex205Props = useStore((state)=>state["Home"]["Flex205"]);
const Flex205IoProps = useIoStore((state)=>state["Home"]["Flex205"]);
const Flex205Cb = useFlex205Cb()
const Flex212Props = useStore((state)=>state["Home"]["Flex212"]);
const Flex212IoProps = useIoStore((state)=>state["Home"]["Flex212"]);
const Flex212Cb = useFlex212Cb()
const Flex201Props = useStore((state)=>state["Home"]["Flex201"]);
const Flex201IoProps = useIoStore((state)=>state["Home"]["Flex201"]);
const Flex201Cb = useFlex201Cb()
const Flex210Props = useStore((state)=>state["Home"]["Flex210"]);
const Flex210IoProps = useIoStore((state)=>state["Home"]["Flex210"]);
const Flex210Cb = useFlex210Cb()
const testimonialProps = useStore((state)=>state["Home"]["testimonial"]);
const testimonialIoProps = useIoStore((state)=>state["Home"]["testimonial"]);
const testimonialCb = usetestimonialCb()
const Flex240Props = useStore((state)=>state["Home"]["Flex240"]);
const Flex240IoProps = useIoStore((state)=>state["Home"]["Flex240"]);
const Flex240Cb = useFlex240Cb()
const Flex239Props = useStore((state)=>state["Home"]["Flex239"]);
const Flex239IoProps = useIoStore((state)=>state["Home"]["Flex239"]);
const Flex239Cb = useFlex239Cb()
const Flex238Props = useStore((state)=>state["Home"]["Flex238"]);
const Flex238IoProps = useIoStore((state)=>state["Home"]["Flex238"]);
const Flex238Cb = useFlex238Cb()
const Flex232Props = useStore((state)=>state["Home"]["Flex232"]);
const Flex232IoProps = useIoStore((state)=>state["Home"]["Flex232"]);
const Flex232Cb = useFlex232Cb()
const Flex220Props = useStore((state)=>state["Home"]["Flex220"]);
const Flex220IoProps = useIoStore((state)=>state["Home"]["Flex220"]);
const Flex220Cb = useFlex220Cb()
const Flex217Props = useStore((state)=>state["Home"]["Flex217"]);
const Flex217IoProps = useIoStore((state)=>state["Home"]["Flex217"]);
const Flex217Cb = useFlex217Cb()
const Flex242Props = useStore((state)=>state["Home"]["Flex242"]);
const Flex242IoProps = useIoStore((state)=>state["Home"]["Flex242"]);
const Flex242Cb = useFlex242Cb()
const blogProps = useStore((state)=>state["Home"]["blog"]);
const blogIoProps = useIoStore((state)=>state["Home"]["blog"]);
const blogCb = useblogCb()
const Flex272Props = useStore((state)=>state["Home"]["Flex272"]);
const Flex272IoProps = useIoStore((state)=>state["Home"]["Flex272"]);
const Flex272Cb = useFlex272Cb()
const Flex269Props = useStore((state)=>state["Home"]["Flex269"]);
const Flex269IoProps = useIoStore((state)=>state["Home"]["Flex269"]);
const Flex269Cb = useFlex269Cb()
const Flex267Props = useStore((state)=>state["Home"]["Flex267"]);
const Flex267IoProps = useIoStore((state)=>state["Home"]["Flex267"]);
const Flex267Cb = useFlex267Cb()
const Flex259Props = useStore((state)=>state["Home"]["Flex259"]);
const Flex259IoProps = useIoStore((state)=>state["Home"]["Flex259"]);
const Flex259Cb = useFlex259Cb()
const Flex285Props = useStore((state)=>state["Home"]["Flex285"]);
const Flex285IoProps = useIoStore((state)=>state["Home"]["Flex285"]);
const Flex285Cb = useFlex285Cb()
const Flex284Props = useStore((state)=>state["Home"]["Flex284"]);
const Flex284IoProps = useIoStore((state)=>state["Home"]["Flex284"]);
const Flex284Cb = useFlex284Cb()
const Flex287Props = useStore((state)=>state["Home"]["Flex287"]);
const Flex287IoProps = useIoStore((state)=>state["Home"]["Flex287"]);
const Flex287Cb = useFlex287Cb()
const Flex286Props = useStore((state)=>state["Home"]["Flex286"]);
const Flex286IoProps = useIoStore((state)=>state["Home"]["Flex286"]);
const Flex286Cb = useFlex286Cb()
const Flex289Props = useStore((state)=>state["Home"]["Flex289"]);
const Flex289IoProps = useIoStore((state)=>state["Home"]["Flex289"]);
const Flex289Cb = useFlex289Cb()
const Flex288Props = useStore((state)=>state["Home"]["Flex288"]);
const Flex288IoProps = useIoStore((state)=>state["Home"]["Flex288"]);
const Flex288Cb = useFlex288Cb()
const Flex291Props = useStore((state)=>state["Home"]["Flex291"]);
const Flex291IoProps = useIoStore((state)=>state["Home"]["Flex291"]);
const Flex291Cb = useFlex291Cb()
const Flex290Props = useStore((state)=>state["Home"]["Flex290"]);
const Flex290IoProps = useIoStore((state)=>state["Home"]["Flex290"]);
const Flex290Cb = useFlex290Cb()
const Flex270Props = useStore((state)=>state["Home"]["Flex270"]);
const Flex270IoProps = useIoStore((state)=>state["Home"]["Flex270"]);
const Flex270Cb = useFlex270Cb()
const Flex292Props = useStore((state)=>state["Home"]["Flex292"]);
const Flex292IoProps = useIoStore((state)=>state["Home"]["Flex292"]);
const Flex292Cb = useFlex292Cb()
const projectProps = useStore((state)=>state["Home"]["project"]);
const projectIoProps = useIoStore((state)=>state["Home"]["project"]);
const projectCb = useprojectCb()
const Flex280Props = useStore((state)=>state["Home"]["Flex280"]);
const Flex280IoProps = useIoStore((state)=>state["Home"]["Flex280"]);
const Flex280Cb = useFlex280Cb()
const Flex278Props = useStore((state)=>state["Home"]["Flex278"]);
const Flex278IoProps = useIoStore((state)=>state["Home"]["Flex278"]);
const Flex278Cb = useFlex278Cb()
const Flex274Props = useStore((state)=>state["Home"]["Flex274"]);
const Flex274IoProps = useIoStore((state)=>state["Home"]["Flex274"]);
const Flex274Cb = useFlex274Cb()
const Flex293Props = useStore((state)=>state["Home"]["Flex293"]);
const Flex293IoProps = useIoStore((state)=>state["Home"]["Flex293"]);
const Flex293Cb = useFlex293Cb()
const Flex275Props = useStore((state)=>state["Home"]["Flex275"]);
const Flex275IoProps = useIoStore((state)=>state["Home"]["Flex275"]);
const Flex275Cb = useFlex275Cb()
const Flex294Props = useStore((state)=>state["Home"]["Flex294"]);
const Flex294IoProps = useIoStore((state)=>state["Home"]["Flex294"]);
const Flex294Cb = useFlex294Cb()
const Flex295Props = useStore((state)=>state["Home"]["Flex295"]);
const Flex295IoProps = useIoStore((state)=>state["Home"]["Flex295"]);
const Flex295Cb = useFlex295Cb()
const Flex296Props = useStore((state)=>state["Home"]["Flex296"]);
const Flex296IoProps = useIoStore((state)=>state["Home"]["Flex296"]);
const Flex296Cb = useFlex296Cb()
const Flex302Props = useStore((state)=>state["Home"]["Flex302"]);
const Flex302IoProps = useIoStore((state)=>state["Home"]["Flex302"]);
const Flex302Cb = useFlex302Cb()
const Flex301Props = useStore((state)=>state["Home"]["Flex301"]);
const Flex301IoProps = useIoStore((state)=>state["Home"]["Flex301"]);
const Flex301Cb = useFlex301Cb()
const Flex300Props = useStore((state)=>state["Home"]["Flex300"]);
const Flex300IoProps = useIoStore((state)=>state["Home"]["Flex300"]);
const Flex300Cb = useFlex300Cb()
const Flex305Props = useStore((state)=>state["Home"]["Flex305"]);
const Flex305IoProps = useIoStore((state)=>state["Home"]["Flex305"]);
const Flex305Cb = useFlex305Cb()
const Flex304Props = useStore((state)=>state["Home"]["Flex304"]);
const Flex304IoProps = useIoStore((state)=>state["Home"]["Flex304"]);
const Flex304Cb = useFlex304Cb()
const Flex303Props = useStore((state)=>state["Home"]["Flex303"]);
const Flex303IoProps = useIoStore((state)=>state["Home"]["Flex303"]);
const Flex303Cb = useFlex303Cb()
const Flex308Props = useStore((state)=>state["Home"]["Flex308"]);
const Flex308IoProps = useIoStore((state)=>state["Home"]["Flex308"]);
const Flex308Cb = useFlex308Cb()
const Flex307Props = useStore((state)=>state["Home"]["Flex307"]);
const Flex307IoProps = useIoStore((state)=>state["Home"]["Flex307"]);
const Flex307Cb = useFlex307Cb()
const Flex306Props = useStore((state)=>state["Home"]["Flex306"]);
const Flex306IoProps = useIoStore((state)=>state["Home"]["Flex306"]);
const Flex306Cb = useFlex306Cb()
const Flex311Props = useStore((state)=>state["Home"]["Flex311"]);
const Flex311IoProps = useIoStore((state)=>state["Home"]["Flex311"]);
const Flex311Cb = useFlex311Cb()
const Flex310Props = useStore((state)=>state["Home"]["Flex310"]);
const Flex310IoProps = useIoStore((state)=>state["Home"]["Flex310"]);
const Flex310Cb = useFlex310Cb()
const Flex309Props = useStore((state)=>state["Home"]["Flex309"]);
const Flex309IoProps = useIoStore((state)=>state["Home"]["Flex309"]);
const Flex309Cb = useFlex309Cb()
const Flex279Props = useStore((state)=>state["Home"]["Flex279"]);
const Flex279IoProps = useIoStore((state)=>state["Home"]["Flex279"]);
const Flex279Cb = useFlex279Cb()
const Flex276Props = useStore((state)=>state["Home"]["Flex276"]);
const Flex276IoProps = useIoStore((state)=>state["Home"]["Flex276"]);
const Flex276Cb = useFlex276Cb()
const Flex277Props = useStore((state)=>state["Home"]["Flex277"]);
const Flex277IoProps = useIoStore((state)=>state["Home"]["Flex277"]);
const Flex277Cb = useFlex277Cb()
const Flex283Props = useStore((state)=>state["Home"]["Flex283"]);
const Flex283IoProps = useIoStore((state)=>state["Home"]["Flex283"]);
const Flex283Cb = useFlex283Cb()
const TextBox6Props = useStore((state)=>state["Home"]["TextBox6"]);
const TextBox6IoProps = useIoStore((state)=>state["Home"]["TextBox6"]);
const TextBox6Cb = useTextBox6Cb()
const TextBox2Props = useStore((state)=>state["Home"]["TextBox2"]);
const TextBox2IoProps = useIoStore((state)=>state["Home"]["TextBox2"]);
const TextBox2Cb = useTextBox2Cb()
const TextBox3Props = useStore((state)=>state["Home"]["TextBox3"]);
const TextBox3IoProps = useIoStore((state)=>state["Home"]["TextBox3"]);
const TextBox3Cb = useTextBox3Cb()
const TextBox4Props = useStore((state)=>state["Home"]["TextBox4"]);
const TextBox4IoProps = useIoStore((state)=>state["Home"]["TextBox4"]);
const TextBox4Cb = useTextBox4Cb()
const TextBox5Props = useStore((state)=>state["Home"]["TextBox5"]);
const TextBox5IoProps = useIoStore((state)=>state["Home"]["TextBox5"]);
const TextBox5Cb = useTextBox5Cb()
const TextBox1Props = useStore((state)=>state["Home"]["TextBox1"]);
const TextBox1IoProps = useIoStore((state)=>state["Home"]["TextBox1"]);
const TextBox1Cb = useTextBox1Cb()
const Image1Props = useStore((state)=>state["Home"]["Image1"]);
const Image1IoProps = useIoStore((state)=>state["Home"]["Image1"]);
const Image1Cb = useImage1Cb()
const Image29Props = useStore((state)=>state["Home"]["Image29"]);
const Image29IoProps = useIoStore((state)=>state["Home"]["Image29"]);
const Image29Cb = useImage29Cb()
const TextBox52Props = useStore((state)=>state["Home"]["TextBox52"]);
const TextBox52IoProps = useIoStore((state)=>state["Home"]["TextBox52"]);
const TextBox52Cb = useTextBox52Cb()
const TextBox51Props = useStore((state)=>state["Home"]["TextBox51"]);
const TextBox51IoProps = useIoStore((state)=>state["Home"]["TextBox51"]);
const TextBox51Cb = useTextBox51Cb()
const Image30Props = useStore((state)=>state["Home"]["Image30"]);
const Image30IoProps = useIoStore((state)=>state["Home"]["Image30"]);
const Image30Cb = useImage30Cb()
const Button4Props = useStore((state)=>state["Home"]["Button4"]);
const Button4IoProps = useIoStore((state)=>state["Home"]["Button4"]);
const Button4Cb = useButton4Cb()
const TextBox49Props = useStore((state)=>state["Home"]["TextBox49"]);
const TextBox49IoProps = useIoStore((state)=>state["Home"]["TextBox49"]);
const TextBox49Cb = useTextBox49Cb()
const TextBox50Props = useStore((state)=>state["Home"]["TextBox50"]);
const TextBox50IoProps = useIoStore((state)=>state["Home"]["TextBox50"]);
const TextBox50Cb = useTextBox50Cb()
const TextBox53Props = useStore((state)=>state["Home"]["TextBox53"]);
const TextBox53IoProps = useIoStore((state)=>state["Home"]["TextBox53"]);
const TextBox53Cb = useTextBox53Cb()
const Image31Props = useStore((state)=>state["Home"]["Image31"]);
const Image31IoProps = useIoStore((state)=>state["Home"]["Image31"]);
const Image31Cb = useImage31Cb()
const Image32Props = useStore((state)=>state["Home"]["Image32"]);
const Image32IoProps = useIoStore((state)=>state["Home"]["Image32"]);
const Image32Cb = useImage32Cb()
const Image33Props = useStore((state)=>state["Home"]["Image33"]);
const Image33IoProps = useIoStore((state)=>state["Home"]["Image33"]);
const Image33Cb = useImage33Cb()
const Image34Props = useStore((state)=>state["Home"]["Image34"]);
const Image34IoProps = useIoStore((state)=>state["Home"]["Image34"]);
const Image34Cb = useImage34Cb()
const TextBox54Props = useStore((state)=>state["Home"]["TextBox54"]);
const TextBox54IoProps = useIoStore((state)=>state["Home"]["TextBox54"]);
const TextBox54Cb = useTextBox54Cb()
const TextBox55Props = useStore((state)=>state["Home"]["TextBox55"]);
const TextBox55IoProps = useIoStore((state)=>state["Home"]["TextBox55"]);
const TextBox55Cb = useTextBox55Cb()
const TextBox56Props = useStore((state)=>state["Home"]["TextBox56"]);
const TextBox56IoProps = useIoStore((state)=>state["Home"]["TextBox56"]);
const TextBox56Cb = useTextBox56Cb()
const TextBox57Props = useStore((state)=>state["Home"]["TextBox57"]);
const TextBox57IoProps = useIoStore((state)=>state["Home"]["TextBox57"]);
const TextBox57Cb = useTextBox57Cb()
const Image35Props = useStore((state)=>state["Home"]["Image35"]);
const Image35IoProps = useIoStore((state)=>state["Home"]["Image35"]);
const Image35Cb = useImage35Cb()
const UnorderedList1Props = useStore((state)=>state["Home"]["UnorderedList1"]);
const UnorderedList1IoProps = useIoStore((state)=>state["Home"]["UnorderedList1"]);
const UnorderedList1Cb = useUnorderedList1Cb()
const UnorderedList2Props = useStore((state)=>state["Home"]["UnorderedList2"]);
const UnorderedList2IoProps = useIoStore((state)=>state["Home"]["UnorderedList2"]);
const UnorderedList2Cb = useUnorderedList2Cb()
const Image36Props = useStore((state)=>state["Home"]["Image36"]);
const Image36IoProps = useIoStore((state)=>state["Home"]["Image36"]);
const Image36Cb = useImage36Cb()
const TextBox58Props = useStore((state)=>state["Home"]["TextBox58"]);
const TextBox58IoProps = useIoStore((state)=>state["Home"]["TextBox58"]);
const TextBox58Cb = useTextBox58Cb()
const TextBox59Props = useStore((state)=>state["Home"]["TextBox59"]);
const TextBox59IoProps = useIoStore((state)=>state["Home"]["TextBox59"]);
const TextBox59Cb = useTextBox59Cb()
const UnorderedList3Props = useStore((state)=>state["Home"]["UnorderedList3"]);
const UnorderedList3IoProps = useIoStore((state)=>state["Home"]["UnorderedList3"]);
const UnorderedList3Cb = useUnorderedList3Cb()
const Image37Props = useStore((state)=>state["Home"]["Image37"]);
const Image37IoProps = useIoStore((state)=>state["Home"]["Image37"]);
const Image37Cb = useImage37Cb()
const TextBox60Props = useStore((state)=>state["Home"]["TextBox60"]);
const TextBox60IoProps = useIoStore((state)=>state["Home"]["TextBox60"]);
const TextBox60Cb = useTextBox60Cb()
const TextBox61Props = useStore((state)=>state["Home"]["TextBox61"]);
const TextBox61IoProps = useIoStore((state)=>state["Home"]["TextBox61"]);
const TextBox61Cb = useTextBox61Cb()
const TextBox62Props = useStore((state)=>state["Home"]["TextBox62"]);
const TextBox62IoProps = useIoStore((state)=>state["Home"]["TextBox62"]);
const TextBox62Cb = useTextBox62Cb()
const TextBox63Props = useStore((state)=>state["Home"]["TextBox63"]);
const TextBox63IoProps = useIoStore((state)=>state["Home"]["TextBox63"]);
const TextBox63Cb = useTextBox63Cb()
const TextBox64Props = useStore((state)=>state["Home"]["TextBox64"]);
const TextBox64IoProps = useIoStore((state)=>state["Home"]["TextBox64"]);
const TextBox64Cb = useTextBox64Cb()
const Image38Props = useStore((state)=>state["Home"]["Image38"]);
const Image38IoProps = useIoStore((state)=>state["Home"]["Image38"]);
const Image38Cb = useImage38Cb()
const Image39Props = useStore((state)=>state["Home"]["Image39"]);
const Image39IoProps = useIoStore((state)=>state["Home"]["Image39"]);
const Image39Cb = useImage39Cb()
const Image40Props = useStore((state)=>state["Home"]["Image40"]);
const Image40IoProps = useIoStore((state)=>state["Home"]["Image40"]);
const Image40Cb = useImage40Cb()
const Image41Props = useStore((state)=>state["Home"]["Image41"]);
const Image41IoProps = useIoStore((state)=>state["Home"]["Image41"]);
const Image41Cb = useImage41Cb()
const TextBox65Props = useStore((state)=>state["Home"]["TextBox65"]);
const TextBox65IoProps = useIoStore((state)=>state["Home"]["TextBox65"]);
const TextBox65Cb = useTextBox65Cb()
const TextBox66Props = useStore((state)=>state["Home"]["TextBox66"]);
const TextBox66IoProps = useIoStore((state)=>state["Home"]["TextBox66"]);
const TextBox66Cb = useTextBox66Cb()
const TextBox67Props = useStore((state)=>state["Home"]["TextBox67"]);
const TextBox67IoProps = useIoStore((state)=>state["Home"]["TextBox67"]);
const TextBox67Cb = useTextBox67Cb()
const TextBox68Props = useStore((state)=>state["Home"]["TextBox68"]);
const TextBox68IoProps = useIoStore((state)=>state["Home"]["TextBox68"]);
const TextBox68Cb = useTextBox68Cb()
const Image43Props = useStore((state)=>state["Home"]["Image43"]);
const Image43IoProps = useIoStore((state)=>state["Home"]["Image43"]);
const Image43Cb = useImage43Cb()
const Image44Props = useStore((state)=>state["Home"]["Image44"]);
const Image44IoProps = useIoStore((state)=>state["Home"]["Image44"]);
const Image44Cb = useImage44Cb()
const TextBox69Props = useStore((state)=>state["Home"]["TextBox69"]);
const TextBox69IoProps = useIoStore((state)=>state["Home"]["TextBox69"]);
const TextBox69Cb = useTextBox69Cb()
const TextBox70Props = useStore((state)=>state["Home"]["TextBox70"]);
const TextBox70IoProps = useIoStore((state)=>state["Home"]["TextBox70"]);
const TextBox70Cb = useTextBox70Cb()
const TextBox71Props = useStore((state)=>state["Home"]["TextBox71"]);
const TextBox71IoProps = useIoStore((state)=>state["Home"]["TextBox71"]);
const TextBox71Cb = useTextBox71Cb()
const Image46Props = useStore((state)=>state["Home"]["Image46"]);
const Image46IoProps = useIoStore((state)=>state["Home"]["Image46"]);
const Image46Cb = useImage46Cb()
const TextBox75Props = useStore((state)=>state["Home"]["TextBox75"]);
const TextBox75IoProps = useIoStore((state)=>state["Home"]["TextBox75"]);
const TextBox75Cb = useTextBox75Cb()
const TextBox76Props = useStore((state)=>state["Home"]["TextBox76"]);
const TextBox76IoProps = useIoStore((state)=>state["Home"]["TextBox76"]);
const TextBox76Cb = useTextBox76Cb()
const TextBox77Props = useStore((state)=>state["Home"]["TextBox77"]);
const TextBox77IoProps = useIoStore((state)=>state["Home"]["TextBox77"]);
const TextBox77Cb = useTextBox77Cb()
const TextBox110Props = useStore((state)=>state["Home"]["TextBox110"]);
const TextBox110IoProps = useIoStore((state)=>state["Home"]["TextBox110"]);
const TextBox110Cb = useTextBox110Cb()
const TextBox103Props = useStore((state)=>state["Home"]["TextBox103"]);
const TextBox103IoProps = useIoStore((state)=>state["Home"]["TextBox103"]);
const TextBox103Cb = useTextBox103Cb()
const Image54Props = useStore((state)=>state["Home"]["Image54"]);
const Image54IoProps = useIoStore((state)=>state["Home"]["Image54"]);
const Image54Cb = useImage54Cb()
const Image59Props = useStore((state)=>state["Home"]["Image59"]);
const Image59IoProps = useIoStore((state)=>state["Home"]["Image59"]);
const Image59Cb = useImage59Cb()
const TextBox113Props = useStore((state)=>state["Home"]["TextBox113"]);
const TextBox113IoProps = useIoStore((state)=>state["Home"]["TextBox113"]);
const TextBox113Cb = useTextBox113Cb()
const TextBox114Props = useStore((state)=>state["Home"]["TextBox114"]);
const TextBox114IoProps = useIoStore((state)=>state["Home"]["TextBox114"]);
const TextBox114Cb = useTextBox114Cb()
const TextBox106Props = useStore((state)=>state["Home"]["TextBox106"]);
const TextBox106IoProps = useIoStore((state)=>state["Home"]["TextBox106"]);
const TextBox106Cb = useTextBox106Cb()
const Image55Props = useStore((state)=>state["Home"]["Image55"]);
const Image55IoProps = useIoStore((state)=>state["Home"]["Image55"]);
const Image55Cb = useImage55Cb()
const Image58Props = useStore((state)=>state["Home"]["Image58"]);
const Image58IoProps = useIoStore((state)=>state["Home"]["Image58"]);
const Image58Cb = useImage58Cb()
const TextBox111Props = useStore((state)=>state["Home"]["TextBox111"]);
const TextBox111IoProps = useIoStore((state)=>state["Home"]["TextBox111"]);
const TextBox111Cb = useTextBox111Cb()
const TextBox112Props = useStore((state)=>state["Home"]["TextBox112"]);
const TextBox112IoProps = useIoStore((state)=>state["Home"]["TextBox112"]);
const TextBox112Cb = useTextBox112Cb()
const Image56Props = useStore((state)=>state["Home"]["Image56"]);
const Image56IoProps = useIoStore((state)=>state["Home"]["Image56"]);
const Image56Cb = useImage56Cb()
const TextBox107Props = useStore((state)=>state["Home"]["TextBox107"]);
const TextBox107IoProps = useIoStore((state)=>state["Home"]["TextBox107"]);
const TextBox107Cb = useTextBox107Cb()
const Image57Props = useStore((state)=>state["Home"]["Image57"]);
const Image57IoProps = useIoStore((state)=>state["Home"]["Image57"]);
const Image57Cb = useImage57Cb()
const TextBox108Props = useStore((state)=>state["Home"]["TextBox108"]);
const TextBox108IoProps = useIoStore((state)=>state["Home"]["TextBox108"]);
const TextBox108Cb = useTextBox108Cb()
const TextBox109Props = useStore((state)=>state["Home"]["TextBox109"]);
const TextBox109IoProps = useIoStore((state)=>state["Home"]["TextBox109"]);
const TextBox109Cb = useTextBox109Cb()
const Image68Props = useStore((state)=>state["Home"]["Image68"]);
const Image68IoProps = useIoStore((state)=>state["Home"]["Image68"]);
const Image68Cb = useImage68Cb()
const TextBox131Props = useStore((state)=>state["Home"]["TextBox131"]);
const TextBox131IoProps = useIoStore((state)=>state["Home"]["TextBox131"]);
const TextBox131Cb = useTextBox131Cb()
const TextBox132Props = useStore((state)=>state["Home"]["TextBox132"]);
const TextBox132IoProps = useIoStore((state)=>state["Home"]["TextBox132"]);
const TextBox132Cb = useTextBox132Cb()
const TextBox137Props = useStore((state)=>state["Home"]["TextBox137"]);
const TextBox137IoProps = useIoStore((state)=>state["Home"]["TextBox137"]);
const TextBox137Cb = useTextBox137Cb()
const TextBox138Props = useStore((state)=>state["Home"]["TextBox138"]);
const TextBox138IoProps = useIoStore((state)=>state["Home"]["TextBox138"]);
const TextBox138Cb = useTextBox138Cb()
const Image69Props = useStore((state)=>state["Home"]["Image69"]);
const Image69IoProps = useIoStore((state)=>state["Home"]["Image69"]);
const Image69Cb = useImage69Cb()
const TextBox141Props = useStore((state)=>state["Home"]["TextBox141"]);
const TextBox141IoProps = useIoStore((state)=>state["Home"]["TextBox141"]);
const TextBox141Cb = useTextBox141Cb()
const TextBox142Props = useStore((state)=>state["Home"]["TextBox142"]);
const TextBox142IoProps = useIoStore((state)=>state["Home"]["TextBox142"]);
const TextBox142Cb = useTextBox142Cb()
const Image71Props = useStore((state)=>state["Home"]["Image71"]);
const Image71IoProps = useIoStore((state)=>state["Home"]["Image71"]);
const Image71Cb = useImage71Cb()
const TextBox143Props = useStore((state)=>state["Home"]["TextBox143"]);
const TextBox143IoProps = useIoStore((state)=>state["Home"]["TextBox143"]);
const TextBox143Cb = useTextBox143Cb()
const TextBox144Props = useStore((state)=>state["Home"]["TextBox144"]);
const TextBox144IoProps = useIoStore((state)=>state["Home"]["TextBox144"]);
const TextBox144Cb = useTextBox144Cb()
const Image72Props = useStore((state)=>state["Home"]["Image72"]);
const Image72IoProps = useIoStore((state)=>state["Home"]["Image72"]);
const Image72Cb = useImage72Cb()
const Image74Props = useStore((state)=>state["Home"]["Image74"]);
const Image74IoProps = useIoStore((state)=>state["Home"]["Image74"]);
const Image74Cb = useImage74Cb()
const TextBox145Props = useStore((state)=>state["Home"]["TextBox145"]);
const TextBox145IoProps = useIoStore((state)=>state["Home"]["TextBox145"]);
const TextBox145Cb = useTextBox145Cb()
const TextBox146Props = useStore((state)=>state["Home"]["TextBox146"]);
const TextBox146IoProps = useIoStore((state)=>state["Home"]["TextBox146"]);
const TextBox146Cb = useTextBox146Cb()
const Image75Props = useStore((state)=>state["Home"]["Image75"]);
const Image75IoProps = useIoStore((state)=>state["Home"]["Image75"]);
const Image75Cb = useImage75Cb()
const TextBox147Props = useStore((state)=>state["Home"]["TextBox147"]);
const TextBox147IoProps = useIoStore((state)=>state["Home"]["TextBox147"]);
const TextBox147Cb = useTextBox147Cb()
const TextBox148Props = useStore((state)=>state["Home"]["TextBox148"]);
const TextBox148IoProps = useIoStore((state)=>state["Home"]["TextBox148"]);
const TextBox148Cb = useTextBox148Cb()
const Image76Props = useStore((state)=>state["Home"]["Image76"]);
const Image76IoProps = useIoStore((state)=>state["Home"]["Image76"]);
const Image76Cb = useImage76Cb()
const TextBox149Props = useStore((state)=>state["Home"]["TextBox149"]);
const TextBox149IoProps = useIoStore((state)=>state["Home"]["TextBox149"]);
const TextBox149Cb = useTextBox149Cb()
const TextBox150Props = useStore((state)=>state["Home"]["TextBox150"]);
const TextBox150IoProps = useIoStore((state)=>state["Home"]["TextBox150"]);
const TextBox150Cb = useTextBox150Cb()
const TextBox151Props = useStore((state)=>state["Home"]["TextBox151"]);
const TextBox151IoProps = useIoStore((state)=>state["Home"]["TextBox151"]);
const TextBox151Cb = useTextBox151Cb()
const TextBox152Props = useStore((state)=>state["Home"]["TextBox152"]);
const TextBox152IoProps = useIoStore((state)=>state["Home"]["TextBox152"]);
const TextBox152Cb = useTextBox152Cb()
const Image77Props = useStore((state)=>state["Home"]["Image77"]);
const Image77IoProps = useIoStore((state)=>state["Home"]["Image77"]);
const Image77Cb = useImage77Cb()
const TextBox135Props = useStore((state)=>state["Home"]["TextBox135"]);
const TextBox135IoProps = useIoStore((state)=>state["Home"]["TextBox135"]);
const TextBox135Cb = useTextBox135Cb()
const TextBox136Props = useStore((state)=>state["Home"]["TextBox136"]);
const TextBox136IoProps = useIoStore((state)=>state["Home"]["TextBox136"]);
const TextBox136Cb = useTextBox136Cb()
const TextBox169Props = useStore((state)=>state["Home"]["TextBox169"]);
const TextBox169IoProps = useIoStore((state)=>state["Home"]["TextBox169"]);
const TextBox169Cb = useTextBox169Cb()
const TextBox170Props = useStore((state)=>state["Home"]["TextBox170"]);
const TextBox170IoProps = useIoStore((state)=>state["Home"]["TextBox170"]);
const TextBox170Cb = useTextBox170Cb()
const TextBox153Props = useStore((state)=>state["Home"]["TextBox153"]);
const TextBox153IoProps = useIoStore((state)=>state["Home"]["TextBox153"]);
const TextBox153Cb = useTextBox153Cb()
const TextBox173Props = useStore((state)=>state["Home"]["TextBox173"]);
const TextBox173IoProps = useIoStore((state)=>state["Home"]["TextBox173"]);
const TextBox173Cb = useTextBox173Cb()
const TextBox174Props = useStore((state)=>state["Home"]["TextBox174"]);
const TextBox174IoProps = useIoStore((state)=>state["Home"]["TextBox174"]);
const TextBox174Cb = useTextBox174Cb()
const TextBox175Props = useStore((state)=>state["Home"]["TextBox175"]);
const TextBox175IoProps = useIoStore((state)=>state["Home"]["TextBox175"]);
const TextBox175Cb = useTextBox175Cb()
const TextBox176Props = useStore((state)=>state["Home"]["TextBox176"]);
const TextBox176IoProps = useIoStore((state)=>state["Home"]["TextBox176"]);
const TextBox176Cb = useTextBox176Cb()
const TextBox177Props = useStore((state)=>state["Home"]["TextBox177"]);
const TextBox177IoProps = useIoStore((state)=>state["Home"]["TextBox177"]);
const TextBox177Cb = useTextBox177Cb()
const TextBox178Props = useStore((state)=>state["Home"]["TextBox178"]);
const TextBox178IoProps = useIoStore((state)=>state["Home"]["TextBox178"]);
const TextBox178Cb = useTextBox178Cb()
const TextBox179Props = useStore((state)=>state["Home"]["TextBox179"]);
const TextBox179IoProps = useIoStore((state)=>state["Home"]["TextBox179"]);
const TextBox179Cb = useTextBox179Cb()
const TextBox180Props = useStore((state)=>state["Home"]["TextBox180"]);
const TextBox180IoProps = useIoStore((state)=>state["Home"]["TextBox180"]);
const TextBox180Cb = useTextBox180Cb()
const TextBox171Props = useStore((state)=>state["Home"]["TextBox171"]);
const TextBox171IoProps = useIoStore((state)=>state["Home"]["TextBox171"]);
const TextBox171Cb = useTextBox171Cb()
const TextBox167Props = useStore((state)=>state["Home"]["TextBox167"]);
const TextBox167IoProps = useIoStore((state)=>state["Home"]["TextBox167"]);
const TextBox167Cb = useTextBox167Cb()
const TextBox168Props = useStore((state)=>state["Home"]["TextBox168"]);
const TextBox168IoProps = useIoStore((state)=>state["Home"]["TextBox168"]);
const TextBox168Cb = useTextBox168Cb()
const Image85Props = useStore((state)=>state["Home"]["Image85"]);
const Image85IoProps = useIoStore((state)=>state["Home"]["Image85"]);
const Image85Cb = useImage85Cb()
const TextBox172Props = useStore((state)=>state["Home"]["TextBox172"]);
const TextBox172IoProps = useIoStore((state)=>state["Home"]["TextBox172"]);
const TextBox172Cb = useTextBox172Cb()
const TextBox191Props = useStore((state)=>state["Home"]["TextBox191"]);
const TextBox191IoProps = useIoStore((state)=>state["Home"]["TextBox191"]);
const TextBox191Cb = useTextBox191Cb()
const TextBox200Props = useStore((state)=>state["Home"]["TextBox200"]);
const TextBox200IoProps = useIoStore((state)=>state["Home"]["TextBox200"]);
const TextBox200Cb = useTextBox200Cb()
const Image86Props = useStore((state)=>state["Home"]["Image86"]);
const Image86IoProps = useIoStore((state)=>state["Home"]["Image86"]);
const Image86Cb = useImage86Cb()
const TextBox187Props = useStore((state)=>state["Home"]["TextBox187"]);
const TextBox187IoProps = useIoStore((state)=>state["Home"]["TextBox187"]);
const TextBox187Cb = useTextBox187Cb()
const Image95Props = useStore((state)=>state["Home"]["Image95"]);
const Image95IoProps = useIoStore((state)=>state["Home"]["Image95"]);
const Image95Cb = useImage95Cb()
const Button2Props = useStore((state)=>state["Home"]["Button2"]);
const Button2IoProps = useIoStore((state)=>state["Home"]["Button2"]);
const Button2Cb = useButton2Cb()
const Button3Props = useStore((state)=>state["Home"]["Button3"]);
const Button3IoProps = useIoStore((state)=>state["Home"]["Button3"]);
const Button3Cb = useButton3Cb()
const TextBox201Props = useStore((state)=>state["Home"]["TextBox201"]);
const TextBox201IoProps = useIoStore((state)=>state["Home"]["TextBox201"]);
const TextBox201Cb = useTextBox201Cb()
const TextBox202Props = useStore((state)=>state["Home"]["TextBox202"]);
const TextBox202IoProps = useIoStore((state)=>state["Home"]["TextBox202"]);
const TextBox202Cb = useTextBox202Cb()
const TextBox217Props = useStore((state)=>state["Home"]["TextBox217"]);
const TextBox217IoProps = useIoStore((state)=>state["Home"]["TextBox217"]);
const TextBox217Cb = useTextBox217Cb()
const TextBox218Props = useStore((state)=>state["Home"]["TextBox218"]);
const TextBox218IoProps = useIoStore((state)=>state["Home"]["TextBox218"]);
const TextBox218Cb = useTextBox218Cb()
const Image103Props = useStore((state)=>state["Home"]["Image103"]);
const Image103IoProps = useIoStore((state)=>state["Home"]["Image103"]);
const Image103Cb = useImage103Cb()
const TextBox225Props = useStore((state)=>state["Home"]["TextBox225"]);
const TextBox225IoProps = useIoStore((state)=>state["Home"]["TextBox225"]);
const TextBox225Cb = useTextBox225Cb()
const TextBox227Props = useStore((state)=>state["Home"]["TextBox227"]);
const TextBox227IoProps = useIoStore((state)=>state["Home"]["TextBox227"]);
const TextBox227Cb = useTextBox227Cb()
const TextBox228Props = useStore((state)=>state["Home"]["TextBox228"]);
const TextBox228IoProps = useIoStore((state)=>state["Home"]["TextBox228"]);
const TextBox228Cb = useTextBox228Cb()
const TextBox226Props = useStore((state)=>state["Home"]["TextBox226"]);
const TextBox226IoProps = useIoStore((state)=>state["Home"]["TextBox226"]);
const TextBox226Cb = useTextBox226Cb()
const Image108Props = useStore((state)=>state["Home"]["Image108"]);
const Image108IoProps = useIoStore((state)=>state["Home"]["Image108"]);
const Image108Cb = useImage108Cb()
const TextBox230Props = useStore((state)=>state["Home"]["TextBox230"]);
const TextBox230IoProps = useIoStore((state)=>state["Home"]["TextBox230"]);
const TextBox230Cb = useTextBox230Cb()
const TextBox231Props = useStore((state)=>state["Home"]["TextBox231"]);
const TextBox231IoProps = useIoStore((state)=>state["Home"]["TextBox231"]);
const TextBox231Cb = useTextBox231Cb()
const TextBox229Props = useStore((state)=>state["Home"]["TextBox229"]);
const TextBox229IoProps = useIoStore((state)=>state["Home"]["TextBox229"]);
const TextBox229Cb = useTextBox229Cb()
const Image109Props = useStore((state)=>state["Home"]["Image109"]);
const Image109IoProps = useIoStore((state)=>state["Home"]["Image109"]);
const Image109Cb = useImage109Cb()
const TextBox233Props = useStore((state)=>state["Home"]["TextBox233"]);
const TextBox233IoProps = useIoStore((state)=>state["Home"]["TextBox233"]);
const TextBox233Cb = useTextBox233Cb()
const TextBox234Props = useStore((state)=>state["Home"]["TextBox234"]);
const TextBox234IoProps = useIoStore((state)=>state["Home"]["TextBox234"]);
const TextBox234Cb = useTextBox234Cb()
const TextBox232Props = useStore((state)=>state["Home"]["TextBox232"]);
const TextBox232IoProps = useIoStore((state)=>state["Home"]["TextBox232"]);
const TextBox232Cb = useTextBox232Cb()
const Image110Props = useStore((state)=>state["Home"]["Image110"]);
const Image110IoProps = useIoStore((state)=>state["Home"]["Image110"]);
const Image110Cb = useImage110Cb()
const TextBox236Props = useStore((state)=>state["Home"]["TextBox236"]);
const TextBox236IoProps = useIoStore((state)=>state["Home"]["TextBox236"]);
const TextBox236Cb = useTextBox236Cb()
const TextBox237Props = useStore((state)=>state["Home"]["TextBox237"]);
const TextBox237IoProps = useIoStore((state)=>state["Home"]["TextBox237"]);
const TextBox237Cb = useTextBox237Cb()
const TextBox235Props = useStore((state)=>state["Home"]["TextBox235"]);
const TextBox235IoProps = useIoStore((state)=>state["Home"]["TextBox235"]);
const TextBox235Cb = useTextBox235Cb()
const Image111Props = useStore((state)=>state["Home"]["Image111"]);
const Image111IoProps = useIoStore((state)=>state["Home"]["Image111"]);
const Image111Cb = useImage111Cb()
const TextBox219Props = useStore((state)=>state["Home"]["TextBox219"]);
const TextBox219IoProps = useIoStore((state)=>state["Home"]["TextBox219"]);
const TextBox219Cb = useTextBox219Cb()
const TextBox220Props = useStore((state)=>state["Home"]["TextBox220"]);
const TextBox220IoProps = useIoStore((state)=>state["Home"]["TextBox220"]);
const TextBox220Cb = useTextBox220Cb()
const TextBox238Props = useStore((state)=>state["Home"]["TextBox238"]);
const TextBox238IoProps = useIoStore((state)=>state["Home"]["TextBox238"]);
const TextBox238Cb = useTextBox238Cb()
const Image112Props = useStore((state)=>state["Home"]["Image112"]);
const Image112IoProps = useIoStore((state)=>state["Home"]["Image112"]);
const Image112Cb = useImage112Cb()
const Button7Props = useStore((state)=>state["Home"]["Button7"]);
const Button7IoProps = useIoStore((state)=>state["Home"]["Button7"]);
const Button7Cb = useButton7Cb()
const Button8Props = useStore((state)=>state["Home"]["Button8"]);
const Button8IoProps = useIoStore((state)=>state["Home"]["Button8"]);
const Button8Cb = useButton8Cb()
const Image113Props = useStore((state)=>state["Home"]["Image113"]);
const Image113IoProps = useIoStore((state)=>state["Home"]["Image113"]);
const Image113Cb = useImage113Cb()
const TextBox239Props = useStore((state)=>state["Home"]["TextBox239"]);
const TextBox239IoProps = useIoStore((state)=>state["Home"]["TextBox239"]);
const TextBox239Cb = useTextBox239Cb()
const TextBox240Props = useStore((state)=>state["Home"]["TextBox240"]);
const TextBox240IoProps = useIoStore((state)=>state["Home"]["TextBox240"]);
const TextBox240Cb = useTextBox240Cb()
const Image114Props = useStore((state)=>state["Home"]["Image114"]);
const Image114IoProps = useIoStore((state)=>state["Home"]["Image114"]);
const Image114Cb = useImage114Cb()
const TextBox241Props = useStore((state)=>state["Home"]["TextBox241"]);
const TextBox241IoProps = useIoStore((state)=>state["Home"]["TextBox241"]);
const TextBox241Cb = useTextBox241Cb()
const Image118Props = useStore((state)=>state["Home"]["Image118"]);
const Image118IoProps = useIoStore((state)=>state["Home"]["Image118"]);
const Image118Cb = useImage118Cb()
const TextBox246Props = useStore((state)=>state["Home"]["TextBox246"]);
const TextBox246IoProps = useIoStore((state)=>state["Home"]["TextBox246"]);
const TextBox246Cb = useTextBox246Cb()
const TextBox247Props = useStore((state)=>state["Home"]["TextBox247"]);
const TextBox247IoProps = useIoStore((state)=>state["Home"]["TextBox247"]);
const TextBox247Cb = useTextBox247Cb()
const TextBox245Props = useStore((state)=>state["Home"]["TextBox245"]);
const TextBox245IoProps = useIoStore((state)=>state["Home"]["TextBox245"]);
const TextBox245Cb = useTextBox245Cb()
const Image117Props = useStore((state)=>state["Home"]["Image117"]);
const Image117IoProps = useIoStore((state)=>state["Home"]["Image117"]);
const Image117Cb = useImage117Cb()
const Image120Props = useStore((state)=>state["Home"]["Image120"]);
const Image120IoProps = useIoStore((state)=>state["Home"]["Image120"]);
const Image120Cb = useImage120Cb()
const TextBox249Props = useStore((state)=>state["Home"]["TextBox249"]);
const TextBox249IoProps = useIoStore((state)=>state["Home"]["TextBox249"]);
const TextBox249Cb = useTextBox249Cb()
const TextBox250Props = useStore((state)=>state["Home"]["TextBox250"]);
const TextBox250IoProps = useIoStore((state)=>state["Home"]["TextBox250"]);
const TextBox250Cb = useTextBox250Cb()
const TextBox248Props = useStore((state)=>state["Home"]["TextBox248"]);
const TextBox248IoProps = useIoStore((state)=>state["Home"]["TextBox248"]);
const TextBox248Cb = useTextBox248Cb()
const Image119Props = useStore((state)=>state["Home"]["Image119"]);
const Image119IoProps = useIoStore((state)=>state["Home"]["Image119"]);
const Image119Cb = useImage119Cb()
const Image122Props = useStore((state)=>state["Home"]["Image122"]);
const Image122IoProps = useIoStore((state)=>state["Home"]["Image122"]);
const Image122Cb = useImage122Cb()
const TextBox252Props = useStore((state)=>state["Home"]["TextBox252"]);
const TextBox252IoProps = useIoStore((state)=>state["Home"]["TextBox252"]);
const TextBox252Cb = useTextBox252Cb()
const TextBox253Props = useStore((state)=>state["Home"]["TextBox253"]);
const TextBox253IoProps = useIoStore((state)=>state["Home"]["TextBox253"]);
const TextBox253Cb = useTextBox253Cb()
const TextBox251Props = useStore((state)=>state["Home"]["TextBox251"]);
const TextBox251IoProps = useIoStore((state)=>state["Home"]["TextBox251"]);
const TextBox251Cb = useTextBox251Cb()
const Image121Props = useStore((state)=>state["Home"]["Image121"]);
const Image121IoProps = useIoStore((state)=>state["Home"]["Image121"]);
const Image121Cb = useImage121Cb()
const Image124Props = useStore((state)=>state["Home"]["Image124"]);
const Image124IoProps = useIoStore((state)=>state["Home"]["Image124"]);
const Image124Cb = useImage124Cb()
const TextBox255Props = useStore((state)=>state["Home"]["TextBox255"]);
const TextBox255IoProps = useIoStore((state)=>state["Home"]["TextBox255"]);
const TextBox255Cb = useTextBox255Cb()
const TextBox256Props = useStore((state)=>state["Home"]["TextBox256"]);
const TextBox256IoProps = useIoStore((state)=>state["Home"]["TextBox256"]);
const TextBox256Cb = useTextBox256Cb()
const TextBox254Props = useStore((state)=>state["Home"]["TextBox254"]);
const TextBox254IoProps = useIoStore((state)=>state["Home"]["TextBox254"]);
const TextBox254Cb = useTextBox254Cb()
const Image123Props = useStore((state)=>state["Home"]["Image123"]);
const Image123IoProps = useIoStore((state)=>state["Home"]["Image123"]);
const Image123Cb = useImage123Cb()
const Button9Props = useStore((state)=>state["Home"]["Button9"]);
const Button9IoProps = useIoStore((state)=>state["Home"]["Button9"]);
const Button9Cb = useButton9Cb()
const TextBox222Props = useStore((state)=>state["Home"]["TextBox222"]);
const TextBox222IoProps = useIoStore((state)=>state["Home"]["TextBox222"]);
const TextBox222Cb = useTextBox222Cb()
const TextBox223Props = useStore((state)=>state["Home"]["TextBox223"]);
const TextBox223IoProps = useIoStore((state)=>state["Home"]["TextBox223"]);
const TextBox223Cb = useTextBox223Cb()
const TextBox224Props = useStore((state)=>state["Home"]["TextBox224"]);
const TextBox224IoProps = useIoStore((state)=>state["Home"]["TextBox224"]);
const TextBox224Cb = useTextBox224Cb()

  return (<>
  <Flex className="p-Home headerHome bpt" {...headerHomeProps} {...headerHomeCb} {...headerHomeIoProps}>
<Flex className="p-Home Flex1 bpt" {...Flex1Props} {...Flex1Cb} {...Flex1IoProps}>
<Flex className="p-Home Flex2 bpt" {...Flex2Props} {...Flex2Cb} {...Flex2IoProps}>
<TextBox className="p-Home TextBox6 bpt" {...TextBox6Props} {...TextBox6Cb} {...TextBox6IoProps}/>
</Flex>
<Flex className="p-Home Flex3 bpt" {...Flex3Props} {...Flex3Cb} {...Flex3IoProps}>
<TextBox className="p-Home TextBox2 bpt" {...TextBox2Props} {...TextBox2Cb} {...TextBox2IoProps}/>
<TextBox className="p-Home TextBox3 bpt" {...TextBox3Props} {...TextBox3Cb} {...TextBox3IoProps}/>
<TextBox className="p-Home TextBox4 bpt" {...TextBox4Props} {...TextBox4Cb} {...TextBox4IoProps}/>
<TextBox className="p-Home TextBox5 bpt" {...TextBox5Props} {...TextBox5Cb} {...TextBox5IoProps}/>
<Flex className="p-Home Flex5 bpt" {...Flex5Props} {...Flex5Cb} {...Flex5IoProps}>
<TextBox className="p-Home TextBox1 bpt" {...TextBox1Props} {...TextBox1Cb} {...TextBox1IoProps}/>
<Image className="p-Home Image1 bpt" {...Image1Props} {...Image1Cb} {...Image1IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home heroBanner bpt" {...heroBannerProps} {...heroBannerCb} {...heroBannerIoProps}>
<Flex className="p-Home Flex57 bpt" {...Flex57Props} {...Flex57Cb} {...Flex57IoProps}>
<Flex className="p-Home Flex58 bpt" {...Flex58Props} {...Flex58Cb} {...Flex58IoProps}>
<Flex className="p-Home Flex60 bpt" {...Flex60Props} {...Flex60Cb} {...Flex60IoProps}>
<TextBox className="p-Home TextBox49 bpt" {...TextBox49Props} {...TextBox49Cb} {...TextBox49IoProps}/>
<TextBox className="p-Home TextBox50 bpt" {...TextBox50Props} {...TextBox50Cb} {...TextBox50IoProps}/>
</Flex>
<TextBox className="p-Home TextBox52 bpt" {...TextBox52Props} {...TextBox52Cb} {...TextBox52IoProps}/>
<Flex className="p-Home Flex59 bpt" {...Flex59Props} {...Flex59Cb} {...Flex59IoProps}>
<Flex className="p-Home Flex243 bpt" {...Flex243Props} {...Flex243Cb} {...Flex243IoProps}>
<Button className="p-Home Button4 bpt" {...Button4Props} {...Button4Cb} {...Button4IoProps}/>
</Flex>
<TextBox className="p-Home TextBox51 bpt" {...TextBox51Props} {...TextBox51Cb} {...TextBox51IoProps}/>
<Image className="p-Home Image30 bpt" {...Image30Props} {...Image30Cb} {...Image30IoProps}/>
</Flex>
</Flex>
<Image className="p-Home Image29 bpt" {...Image29Props} {...Image29Cb} {...Image29IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home TrustedBy bpt" {...TrustedByProps} {...TrustedByCb} {...TrustedByIoProps}>
<Flex className="p-Home Flex62 bpt" {...Flex62Props} {...Flex62Cb} {...Flex62IoProps}>
<TextBox className="p-Home TextBox53 bpt" {...TextBox53Props} {...TextBox53Cb} {...TextBox53IoProps}/>
</Flex>
<Flex className="p-Home logoContainer bpt" {...logoContainerProps} {...logoContainerCb} {...logoContainerIoProps}>
<Image className="p-Home Image32 bpt" {...Image32Props} {...Image32Cb} {...Image32IoProps}/>
<Image className="p-Home Image33 bpt" {...Image33Props} {...Image33Cb} {...Image33IoProps}/>
<Image className="p-Home Image31 bpt" {...Image31Props} {...Image31Cb} {...Image31IoProps}/>
<Image className="p-Home Image34 bpt" {...Image34Props} {...Image34Cb} {...Image34IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Services bpt" {...ServicesProps} {...ServicesCb} {...ServicesIoProps}>
<Flex className="p-Home servicesContainer bpt" {...servicesContainerProps} {...servicesContainerCb} {...servicesContainerIoProps}>
<TextBox className="p-Home TextBox54 bpt" {...TextBox54Props} {...TextBox54Cb} {...TextBox54IoProps}/>
<TextBox className="p-Home TextBox55 bpt" {...TextBox55Props} {...TextBox55Cb} {...TextBox55IoProps}/>
<Flex className="p-Home Flex65 bpt" {...Flex65Props} {...Flex65Cb} {...Flex65IoProps}>
<Flex className="p-Home Flex66 bpt" {...Flex66Props} {...Flex66Cb} {...Flex66IoProps}>
<Image className="p-Home Image35 bpt" {...Image35Props} {...Image35Cb} {...Image35IoProps}/>
<TextBox className="p-Home TextBox57 bpt" {...TextBox57Props} {...TextBox57Cb} {...TextBox57IoProps}/>
<TextBox className="p-Home TextBox56 bpt" {...TextBox56Props} {...TextBox56Cb} {...TextBox56IoProps}/>
<UnorderedList className="p-Home UnorderedList1 bpt" {...UnorderedList1Props} {...UnorderedList1Cb} {...UnorderedList1IoProps}/>
</Flex>
<Flex className="p-Home Flex70 bpt" {...Flex70Props} {...Flex70Cb} {...Flex70IoProps}>
<Image className="p-Home Image36 bpt" {...Image36Props} {...Image36Cb} {...Image36IoProps}/>
<TextBox className="p-Home TextBox58 bpt" {...TextBox58Props} {...TextBox58Cb} {...TextBox58IoProps}/>
<TextBox className="p-Home TextBox59 bpt" {...TextBox59Props} {...TextBox59Cb} {...TextBox59IoProps}/>
<UnorderedList className="p-Home UnorderedList2 bpt" {...UnorderedList2Props} {...UnorderedList2Cb} {...UnorderedList2IoProps}/>
</Flex>
<Flex className="p-Home Flex71 bpt" {...Flex71Props} {...Flex71Cb} {...Flex71IoProps}>
<Image className="p-Home Image37 bpt" {...Image37Props} {...Image37Cb} {...Image37IoProps}/>
<TextBox className="p-Home TextBox60 bpt" {...TextBox60Props} {...TextBox60Cb} {...TextBox60IoProps}/>
<TextBox className="p-Home TextBox61 bpt" {...TextBox61Props} {...TextBox61Cb} {...TextBox61IoProps}/>
<UnorderedList className="p-Home UnorderedList3 bpt" {...UnorderedList3Props} {...UnorderedList3Cb} {...UnorderedList3IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home project bpt" {...projectProps} {...projectCb} {...projectIoProps}>
<Flex className="p-Home Flex280 bpt" {...Flex280Props} {...Flex280Cb} {...Flex280IoProps}>
<Flex className="p-Home Flex279 bpt" {...Flex279Props} {...Flex279Cb} {...Flex279IoProps}>
<Flex className="p-Home Flex277 bpt" {...Flex277Props} {...Flex277Cb} {...Flex277IoProps}>
<TextBox className="p-Home TextBox222 bpt" {...TextBox222Props} {...TextBox222Cb} {...TextBox222IoProps}/>
<Flex className="p-Home Flex283 bpt" {...Flex283Props} {...Flex283Cb} {...Flex283IoProps}>
<TextBox className="p-Home TextBox223 bpt" {...TextBox223Props} {...TextBox223Cb} {...TextBox223IoProps}/>
<TextBox className="p-Home TextBox224 bpt" {...TextBox224Props} {...TextBox224Cb} {...TextBox224IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex276 bpt" {...Flex276Props} {...Flex276Cb} {...Flex276IoProps}>
<Button className="p-Home Button9 bpt" {...Button9Props} {...Button9Cb} {...Button9IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex278 bpt" {...Flex278Props} {...Flex278Cb} {...Flex278IoProps}>
<Flex className="p-Home Flex275 bpt" {...Flex275Props} {...Flex275Cb} {...Flex275IoProps}>
<Flex className="p-Home Flex294 bpt" {...Flex294Props} {...Flex294Cb} {...Flex294IoProps}>
<Image className="p-Home Image113 bpt" {...Image113Props} {...Image113Cb} {...Image113IoProps}/>
<Flex className="p-Home Flex295 bpt" {...Flex295Props} {...Flex295Cb} {...Flex295IoProps}>
<TextBox className="p-Home TextBox239 bpt" {...TextBox239Props} {...TextBox239Cb} {...TextBox239IoProps}/>
<TextBox className="p-Home TextBox240 bpt" {...TextBox240Props} {...TextBox240Cb} {...TextBox240IoProps}/>
<Flex className="p-Home Flex296 bpt" {...Flex296Props} {...Flex296Cb} {...Flex296IoProps}>
<TextBox className="p-Home TextBox241 bpt" {...TextBox241Props} {...TextBox241Cb} {...TextBox241IoProps}/>
<Image className="p-Home Image114 bpt" {...Image114Props} {...Image114Cb} {...Image114IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex302 bpt" {...Flex302Props} {...Flex302Cb} {...Flex302IoProps}>
<Image className="p-Home Image118 bpt" {...Image118Props} {...Image118Cb} {...Image118IoProps}/>
<Flex className="p-Home Flex301 bpt" {...Flex301Props} {...Flex301Cb} {...Flex301IoProps}>
<TextBox className="p-Home TextBox247 bpt" {...TextBox247Props} {...TextBox247Cb} {...TextBox247IoProps}/>
<TextBox className="p-Home TextBox246 bpt" {...TextBox246Props} {...TextBox246Cb} {...TextBox246IoProps}/>
<Flex className="p-Home Flex300 bpt" {...Flex300Props} {...Flex300Cb} {...Flex300IoProps}>
<TextBox className="p-Home TextBox245 bpt" {...TextBox245Props} {...TextBox245Cb} {...TextBox245IoProps}/>
<Image className="p-Home Image117 bpt" {...Image117Props} {...Image117Cb} {...Image117IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex311 bpt" {...Flex311Props} {...Flex311Cb} {...Flex311IoProps}>
<Image className="p-Home Image124 bpt" {...Image124Props} {...Image124Cb} {...Image124IoProps}/>
<Flex className="p-Home Flex310 bpt" {...Flex310Props} {...Flex310Cb} {...Flex310IoProps}>
<TextBox className="p-Home TextBox256 bpt" {...TextBox256Props} {...TextBox256Cb} {...TextBox256IoProps}/>
<TextBox className="p-Home TextBox255 bpt" {...TextBox255Props} {...TextBox255Cb} {...TextBox255IoProps}/>
<Flex className="p-Home Flex309 bpt" {...Flex309Props} {...Flex309Cb} {...Flex309IoProps}>
<TextBox className="p-Home TextBox254 bpt" {...TextBox254Props} {...TextBox254Cb} {...TextBox254IoProps}/>
<Image className="p-Home Image123 bpt" {...Image123Props} {...Image123Cb} {...Image123IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex305 bpt" {...Flex305Props} {...Flex305Cb} {...Flex305IoProps}>
<Image className="p-Home Image120 bpt" {...Image120Props} {...Image120Cb} {...Image120IoProps}/>
<Flex className="p-Home Flex304 bpt" {...Flex304Props} {...Flex304Cb} {...Flex304IoProps}>
<TextBox className="p-Home TextBox250 bpt" {...TextBox250Props} {...TextBox250Cb} {...TextBox250IoProps}/>
<TextBox className="p-Home TextBox249 bpt" {...TextBox249Props} {...TextBox249Cb} {...TextBox249IoProps}/>
<Flex className="p-Home Flex303 bpt" {...Flex303Props} {...Flex303Cb} {...Flex303IoProps}>
<TextBox className="p-Home TextBox248 bpt" {...TextBox248Props} {...TextBox248Cb} {...TextBox248IoProps}/>
<Image className="p-Home Image119 bpt" {...Image119Props} {...Image119Cb} {...Image119IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex308 bpt" {...Flex308Props} {...Flex308Cb} {...Flex308IoProps}>
<Image className="p-Home Image122 bpt" {...Image122Props} {...Image122Cb} {...Image122IoProps}/>
<Flex className="p-Home Flex307 bpt" {...Flex307Props} {...Flex307Cb} {...Flex307IoProps}>
<TextBox className="p-Home TextBox253 bpt" {...TextBox253Props} {...TextBox253Cb} {...TextBox253IoProps}/>
<TextBox className="p-Home TextBox252 bpt" {...TextBox252Props} {...TextBox252Cb} {...TextBox252IoProps}/>
<Flex className="p-Home Flex306 bpt" {...Flex306Props} {...Flex306Cb} {...Flex306IoProps}>
<TextBox className="p-Home TextBox251 bpt" {...TextBox251Props} {...TextBox251Cb} {...TextBox251IoProps}/>
<Image className="p-Home Image121 bpt" {...Image121Props} {...Image121Cb} {...Image121IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex274 bpt" {...Flex274Props} {...Flex274Cb} {...Flex274IoProps}>
<Flex className="p-Home Flex293 bpt" {...Flex293Props} {...Flex293Cb} {...Flex293IoProps}>
<Button className="p-Home Button8 bpt" {...Button8Props} {...Button8Cb} {...Button8IoProps}/>
<Button className="p-Home Button7 bpt" {...Button7Props} {...Button7Cb} {...Button7IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home blog bpt" {...blogProps} {...blogCb} {...blogIoProps}>
<Flex className="p-Home Flex272 bpt" {...Flex272Props} {...Flex272Cb} {...Flex272IoProps}>
<Flex className="p-Home Flex270 bpt" {...Flex270Props} {...Flex270Cb} {...Flex270IoProps}>
<TextBox className="p-Home TextBox219 bpt" {...TextBox219Props} {...TextBox219Cb} {...TextBox219IoProps}/>
<TextBox className="p-Home TextBox220 bpt" {...TextBox220Props} {...TextBox220Cb} {...TextBox220IoProps}/>
<Flex className="p-Home Flex292 bpt" {...Flex292Props} {...Flex292Cb} {...Flex292IoProps}>
<TextBox className="p-Home TextBox238 bpt" {...TextBox238Props} {...TextBox238Cb} {...TextBox238IoProps}/>
<Image className="p-Home Image112 bpt" {...Image112Props} {...Image112Cb} {...Image112IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex269 bpt" {...Flex269Props} {...Flex269Cb} {...Flex269IoProps}>
<Flex className="p-Home Flex267 bpt" {...Flex267Props} {...Flex267Cb} {...Flex267IoProps}>
<TextBox className="p-Home TextBox217 bpt" {...TextBox217Props} {...TextBox217Cb} {...TextBox217IoProps}/>
<TextBox className="p-Home TextBox218 bpt" {...TextBox218Props} {...TextBox218Cb} {...TextBox218IoProps}/>
<Flex className="p-Home Flex259 bpt" {...Flex259Props} {...Flex259Cb} {...Flex259IoProps}>
<TextBox className="p-Home TextBox225 bpt" {...TextBox225Props} {...TextBox225Cb} {...TextBox225IoProps}/>
<Image className="p-Home Image103 bpt" {...Image103Props} {...Image103Cb} {...Image103IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex285 bpt" {...Flex285Props} {...Flex285Cb} {...Flex285IoProps}>
<TextBox className="p-Home TextBox228 bpt" {...TextBox228Props} {...TextBox228Cb} {...TextBox228IoProps}/>
<TextBox className="p-Home TextBox227 bpt" {...TextBox227Props} {...TextBox227Cb} {...TextBox227IoProps}/>
<Flex className="p-Home Flex284 bpt" {...Flex284Props} {...Flex284Cb} {...Flex284IoProps}>
<TextBox className="p-Home TextBox226 bpt" {...TextBox226Props} {...TextBox226Cb} {...TextBox226IoProps}/>
<Image className="p-Home Image108 bpt" {...Image108Props} {...Image108Cb} {...Image108IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex287 bpt" {...Flex287Props} {...Flex287Cb} {...Flex287IoProps}>
<TextBox className="p-Home TextBox231 bpt" {...TextBox231Props} {...TextBox231Cb} {...TextBox231IoProps}/>
<TextBox className="p-Home TextBox230 bpt" {...TextBox230Props} {...TextBox230Cb} {...TextBox230IoProps}/>
<Flex className="p-Home Flex286 bpt" {...Flex286Props} {...Flex286Cb} {...Flex286IoProps}>
<TextBox className="p-Home TextBox229 bpt" {...TextBox229Props} {...TextBox229Cb} {...TextBox229IoProps}/>
<Image className="p-Home Image109 bpt" {...Image109Props} {...Image109Cb} {...Image109IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex289 bpt" {...Flex289Props} {...Flex289Cb} {...Flex289IoProps}>
<TextBox className="p-Home TextBox234 bpt" {...TextBox234Props} {...TextBox234Cb} {...TextBox234IoProps}/>
<TextBox className="p-Home TextBox233 bpt" {...TextBox233Props} {...TextBox233Cb} {...TextBox233IoProps}/>
<Flex className="p-Home Flex288 bpt" {...Flex288Props} {...Flex288Cb} {...Flex288IoProps}>
<TextBox className="p-Home TextBox232 bpt" {...TextBox232Props} {...TextBox232Cb} {...TextBox232IoProps}/>
<Image className="p-Home Image110 bpt" {...Image110Props} {...Image110Cb} {...Image110IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex291 bpt" {...Flex291Props} {...Flex291Cb} {...Flex291IoProps}>
<TextBox className="p-Home TextBox237 bpt" {...TextBox237Props} {...TextBox237Cb} {...TextBox237IoProps}/>
<TextBox className="p-Home TextBox236 bpt" {...TextBox236Props} {...TextBox236Cb} {...TextBox236IoProps}/>
<Flex className="p-Home Flex290 bpt" {...Flex290Props} {...Flex290Cb} {...Flex290IoProps}>
<TextBox className="p-Home TextBox235 bpt" {...TextBox235Props} {...TextBox235Cb} {...TextBox235IoProps}/>
<Image className="p-Home Image111 bpt" {...Image111Props} {...Image111Cb} {...Image111IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home about bpt" {...aboutProps} {...aboutCb} {...aboutIoProps}>
<Flex className="p-Home Flex73 bpt" {...Flex73Props} {...Flex73Cb} {...Flex73IoProps}>
<Flex className="p-Home Flex74 bpt" {...Flex74Props} {...Flex74Cb} {...Flex74IoProps}>
<Flex className="p-Home Flex76 bpt" {...Flex76Props} {...Flex76Cb} {...Flex76IoProps}>
<TextBox className="p-Home TextBox63 bpt" {...TextBox63Props} {...TextBox63Cb} {...TextBox63IoProps}/>
<TextBox className="p-Home TextBox62 bpt" {...TextBox62Props} {...TextBox62Cb} {...TextBox62IoProps}/>
</Flex>
<Flex className="p-Home Flex77 bpt" {...Flex77Props} {...Flex77Cb} {...Flex77IoProps}>
<TextBox className="p-Home TextBox64 bpt" {...TextBox64Props} {...TextBox64Cb} {...TextBox64IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex75 bpt" {...Flex75Props} {...Flex75Cb} {...Flex75IoProps}>
<Flex className="p-Home Flex78 bpt" {...Flex78Props} {...Flex78Cb} {...Flex78IoProps}>
<Image className="p-Home Image39 bpt" {...Image39Props} {...Image39Cb} {...Image39IoProps}/>
<Image className="p-Home Image38 bpt" {...Image38Props} {...Image38Cb} {...Image38IoProps}/>
</Flex>
<Flex className="p-Home Flex79 bpt" {...Flex79Props} {...Flex79Cb} {...Flex79IoProps}>
<Image className="p-Home Image41 bpt" {...Image41Props} {...Image41Cb} {...Image41IoProps}/>
<Image className="p-Home Image40 bpt" {...Image40Props} {...Image40Cb} {...Image40IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home experince bpt" {...experinceProps} {...experinceCb} {...experinceIoProps}>
<Flex className="p-Home Flex82 bpt" {...Flex82Props} {...Flex82Cb} {...Flex82IoProps}>
<Flex className="p-Home Flex84 bpt" {...Flex84Props} {...Flex84Cb} {...Flex84IoProps}>
<TextBox className="p-Home TextBox65 bpt" {...TextBox65Props} {...TextBox65Cb} {...TextBox65IoProps}/>
<Flex className="p-Home Flex86 bpt" {...Flex86Props} {...Flex86Cb} {...Flex86IoProps}>
<Flex className="p-Home Flex85 bpt" {...Flex85Props} {...Flex85Cb} {...Flex85IoProps}>
<TextBox className="p-Home TextBox67 bpt" {...TextBox67Props} {...TextBox67Cb} {...TextBox67IoProps}/>
<TextBox className="p-Home TextBox66 bpt" {...TextBox66Props} {...TextBox66Cb} {...TextBox66IoProps}/>
</Flex>
<Flex className="p-Home Flex87 bpt" {...Flex87Props} {...Flex87Cb} {...Flex87IoProps}>
<Image className="p-Home Image43 bpt" {...Image43Props} {...Image43Cb} {...Image43IoProps}/>
<TextBox className="p-Home TextBox68 bpt" {...TextBox68Props} {...TextBox68Cb} {...TextBox68IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex90 bpt" {...Flex90Props} {...Flex90Cb} {...Flex90IoProps}>
<Flex className="p-Home Flex89 bpt" {...Flex89Props} {...Flex89Cb} {...Flex89IoProps}>
<TextBox className="p-Home TextBox70 bpt" {...TextBox70Props} {...TextBox70Cb} {...TextBox70IoProps}/>
<TextBox className="p-Home TextBox71 bpt" {...TextBox71Props} {...TextBox71Cb} {...TextBox71IoProps}/>
</Flex>
<Flex className="p-Home Flex88 bpt" {...Flex88Props} {...Flex88Cb} {...Flex88IoProps}>
<Image className="p-Home Image44 bpt" {...Image44Props} {...Image44Cb} {...Image44IoProps}/>
<TextBox className="p-Home TextBox69 bpt" {...TextBox69Props} {...TextBox69Cb} {...TextBox69IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex96 bpt" {...Flex96Props} {...Flex96Cb} {...Flex96IoProps}>
<Flex className="p-Home Flex95 bpt" {...Flex95Props} {...Flex95Cb} {...Flex95IoProps}>
<TextBox className="p-Home TextBox76 bpt" {...TextBox76Props} {...TextBox76Cb} {...TextBox76IoProps}/>
<TextBox className="p-Home TextBox77 bpt" {...TextBox77Props} {...TextBox77Cb} {...TextBox77IoProps}/>
</Flex>
<Flex className="p-Home Flex94 bpt" {...Flex94Props} {...Flex94Cb} {...Flex94IoProps}>
<Image className="p-Home Image46 bpt" {...Image46Props} {...Image46Cb} {...Image46IoProps}/>
<TextBox className="p-Home TextBox75 bpt" {...TextBox75Props} {...TextBox75Cb} {...TextBox75IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex129 bpt" {...Flex129Props} {...Flex129Cb} {...Flex129IoProps}>
<TextBox className="p-Home TextBox110 bpt" {...TextBox110Props} {...TextBox110Cb} {...TextBox110IoProps}/>
<Flex className="p-Home Flex128 bpt" {...Flex128Props} {...Flex128Cb} {...Flex128IoProps}>
<Flex className="p-Home Flex125 bpt" {...Flex125Props} {...Flex125Cb} {...Flex125IoProps}>
<Image className="p-Home Image57 bpt" {...Image57Props} {...Image57Cb} {...Image57IoProps}/>
<Flex className="p-Home Flex130 bpt" {...Flex130Props} {...Flex130Cb} {...Flex130IoProps}>
<TextBox className="p-Home TextBox108 bpt" {...TextBox108Props} {...TextBox108Cb} {...TextBox108IoProps}/>
<TextBox className="p-Home TextBox109 bpt" {...TextBox109Props} {...TextBox109Cb} {...TextBox109IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex124 bpt" {...Flex124Props} {...Flex124Cb} {...Flex124IoProps}>
<Image className="p-Home Image56 bpt" {...Image56Props} {...Image56Cb} {...Image56IoProps}/>
<TextBox className="p-Home TextBox107 bpt" {...TextBox107Props} {...TextBox107Cb} {...TextBox107IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex127 bpt" {...Flex127Props} {...Flex127Cb} {...Flex127IoProps}>
<Flex className="p-Home Flex132 bpt" {...Flex132Props} {...Flex132Cb} {...Flex132IoProps}>
<Image className="p-Home Image58 bpt" {...Image58Props} {...Image58Cb} {...Image58IoProps}/>
<Flex className="p-Home Flex131 bpt" {...Flex131Props} {...Flex131Cb} {...Flex131IoProps}>
<TextBox className="p-Home TextBox112 bpt" {...TextBox112Props} {...TextBox112Cb} {...TextBox112IoProps}/>
<TextBox className="p-Home TextBox111 bpt" {...TextBox111Props} {...TextBox111Cb} {...TextBox111IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex123 bpt" {...Flex123Props} {...Flex123Cb} {...Flex123IoProps}>
<Image className="p-Home Image55 bpt" {...Image55Props} {...Image55Cb} {...Image55IoProps}/>
<TextBox className="p-Home TextBox106 bpt" {...TextBox106Props} {...TextBox106Cb} {...TextBox106IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex126 bpt" {...Flex126Props} {...Flex126Cb} {...Flex126IoProps}>
<Flex className="p-Home Flex134 bpt" {...Flex134Props} {...Flex134Cb} {...Flex134IoProps}>
<Image className="p-Home Image59 bpt" {...Image59Props} {...Image59Cb} {...Image59IoProps}/>
<Flex className="p-Home Flex133 bpt" {...Flex133Props} {...Flex133Cb} {...Flex133IoProps}>
<TextBox className="p-Home TextBox114 bpt" {...TextBox114Props} {...TextBox114Cb} {...TextBox114IoProps}/>
<TextBox className="p-Home TextBox113 bpt" {...TextBox113Props} {...TextBox113Cb} {...TextBox113IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex121 bpt" {...Flex121Props} {...Flex121Cb} {...Flex121IoProps}>
<Image className="p-Home Image54 bpt" {...Image54Props} {...Image54Cb} {...Image54IoProps}/>
<TextBox className="p-Home TextBox103 bpt" {...TextBox103Props} {...TextBox103Cb} {...TextBox103IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home testimonial bpt" {...testimonialProps} {...testimonialCb} {...testimonialIoProps}>
<Flex className="p-Home Flex240 bpt" {...Flex240Props} {...Flex240Cb} {...Flex240IoProps}>
<Flex className="p-Home Flex239 bpt" {...Flex239Props} {...Flex239Cb} {...Flex239IoProps}>
<TextBox className="p-Home TextBox200 bpt" {...TextBox200Props} {...TextBox200Cb} {...TextBox200IoProps}/>
<TextBox className="p-Home TextBox191 bpt" {...TextBox191Props} {...TextBox191Cb} {...TextBox191IoProps}/>
</Flex>
<Flex className="p-Home Flex238 bpt" {...Flex238Props} {...Flex238Cb} {...Flex238IoProps}>
<Image className="p-Home Image86 bpt" {...Image86Props} {...Image86Cb} {...Image86IoProps}/>
<Flex className="p-Home Flex232 bpt" {...Flex232Props} {...Flex232Cb} {...Flex232IoProps}>
<Image className="p-Home Image95 bpt" {...Image95Props} {...Image95Cb} {...Image95IoProps}/>
<TextBox className="p-Home TextBox187 bpt" {...TextBox187Props} {...TextBox187Cb} {...TextBox187IoProps}/>
<Flex className="p-Home Flex220 bpt" {...Flex220Props} {...Flex220Cb} {...Flex220IoProps}>
<Flex className="p-Home Flex242 bpt" {...Flex242Props} {...Flex242Cb} {...Flex242IoProps}>
<TextBox className="p-Home TextBox201 bpt" {...TextBox201Props} {...TextBox201Cb} {...TextBox201IoProps}/>
<TextBox className="p-Home TextBox202 bpt" {...TextBox202Props} {...TextBox202Cb} {...TextBox202IoProps}/>
</Flex>
<Flex className="p-Home Flex217 bpt" {...Flex217Props} {...Flex217Cb} {...Flex217IoProps}>
<Button className="p-Home Button2 bpt" {...Button2Props} {...Button2Cb} {...Button2IoProps}/>
<Button className="p-Home Button3 bpt" {...Button3Props} {...Button3Cb} {...Button3IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home FAQ bpt" {...FAQProps} {...FAQCb} {...FAQIoProps}>
<Flex className="p-Home Flex158 bpt" {...Flex158Props} {...Flex158Cb} {...Flex158IoProps}>
<Flex className="p-Home Flex173 bpt" {...Flex173Props} {...Flex173Cb} {...Flex173IoProps}>
<TextBox className="p-Home TextBox136 bpt" {...TextBox136Props} {...TextBox136Cb} {...TextBox136IoProps}/>
<TextBox className="p-Home TextBox135 bpt" {...TextBox135Props} {...TextBox135Cb} {...TextBox135IoProps}/>
</Flex>
<Flex className="p-Home Flex160 bpt" {...Flex160Props} {...Flex160Cb} {...Flex160IoProps}>
<Flex className="p-Home Flex157 bpt" {...Flex157Props} {...Flex157Cb} {...Flex157IoProps}>
<Flex className="p-Home Flex155 bpt" {...Flex155Props} {...Flex155Cb} {...Flex155IoProps}>
<Flex className="p-Home Flex149 bpt" {...Flex149Props} {...Flex149Cb} {...Flex149IoProps}>
<TextBox className="p-Home TextBox131 bpt" {...TextBox131Props} {...TextBox131Cb} {...TextBox131IoProps}/>
<TextBox className="p-Home TextBox132 bpt" {...TextBox132Props} {...TextBox132Cb} {...TextBox132IoProps}/>
</Flex>
<Flex className="p-Home Flex148 bpt" {...Flex148Props} {...Flex148Cb} {...Flex148IoProps}>
<Image className="p-Home Image68 bpt" {...Image68Props} {...Image68Cb} {...Image68IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex163 bpt" {...Flex163Props} {...Flex163Cb} {...Flex163IoProps}>
<Flex className="p-Home Flex161 bpt" {...Flex161Props} {...Flex161Cb} {...Flex161IoProps}>
<TextBox className="p-Home TextBox138 bpt" {...TextBox138Props} {...TextBox138Cb} {...TextBox138IoProps}/>
<TextBox className="p-Home TextBox137 bpt" {...TextBox137Props} {...TextBox137Cb} {...TextBox137IoProps}/>
</Flex>
<Flex className="p-Home Flex162 bpt" {...Flex162Props} {...Flex162Cb} {...Flex162IoProps}>
<Image className="p-Home Image69 bpt" {...Image69Props} {...Image69Cb} {...Image69IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex169 bpt" {...Flex169Props} {...Flex169Cb} {...Flex169IoProps}>
<Flex className="p-Home Flex167 bpt" {...Flex167Props} {...Flex167Cb} {...Flex167IoProps}>
<TextBox className="p-Home TextBox142 bpt" {...TextBox142Props} {...TextBox142Cb} {...TextBox142IoProps}/>
<TextBox className="p-Home TextBox141 bpt" {...TextBox141Props} {...TextBox141Cb} {...TextBox141IoProps}/>
</Flex>
<Flex className="p-Home Flex168 bpt" {...Flex168Props} {...Flex168Cb} {...Flex168IoProps}>
<Image className="p-Home Image71 bpt" {...Image71Props} {...Image71Cb} {...Image71IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex172 bpt" {...Flex172Props} {...Flex172Cb} {...Flex172IoProps}>
<Flex className="p-Home Flex170 bpt" {...Flex170Props} {...Flex170Cb} {...Flex170IoProps}>
<TextBox className="p-Home TextBox144 bpt" {...TextBox144Props} {...TextBox144Cb} {...TextBox144IoProps}/>
<TextBox className="p-Home TextBox143 bpt" {...TextBox143Props} {...TextBox143Cb} {...TextBox143IoProps}/>
</Flex>
<Flex className="p-Home Flex171 bpt" {...Flex171Props} {...Flex171Cb} {...Flex171IoProps}>
<Image className="p-Home Image72 bpt" {...Image72Props} {...Image72Cb} {...Image72IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex186 bpt" {...Flex186Props} {...Flex186Cb} {...Flex186IoProps}>
<Flex className="p-Home Flex185 bpt" {...Flex185Props} {...Flex185Cb} {...Flex185IoProps}>
<Flex className="p-Home Flex180 bpt" {...Flex180Props} {...Flex180Cb} {...Flex180IoProps}>
<TextBox className="p-Home TextBox152 bpt" {...TextBox152Props} {...TextBox152Cb} {...TextBox152IoProps}/>
<TextBox className="p-Home TextBox151 bpt" {...TextBox151Props} {...TextBox151Cb} {...TextBox151IoProps}/>
</Flex>
<Flex className="p-Home Flex181 bpt" {...Flex181Props} {...Flex181Cb} {...Flex181IoProps}>
<Image className="p-Home Image77 bpt" {...Image77Props} {...Image77Cb} {...Image77IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex184 bpt" {...Flex184Props} {...Flex184Cb} {...Flex184IoProps}>
<Flex className="p-Home Flex179 bpt" {...Flex179Props} {...Flex179Cb} {...Flex179IoProps}>
<TextBox className="p-Home TextBox149 bpt" {...TextBox149Props} {...TextBox149Cb} {...TextBox149IoProps}/>
<TextBox className="p-Home TextBox150 bpt" {...TextBox150Props} {...TextBox150Cb} {...TextBox150IoProps}/>
</Flex>
<Flex className="p-Home Flex178 bpt" {...Flex178Props} {...Flex178Cb} {...Flex178IoProps}>
<Image className="p-Home Image76 bpt" {...Image76Props} {...Image76Cb} {...Image76IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex183 bpt" {...Flex183Props} {...Flex183Cb} {...Flex183IoProps}>
<Flex className="p-Home Flex177 bpt" {...Flex177Props} {...Flex177Cb} {...Flex177IoProps}>
<TextBox className="p-Home TextBox147 bpt" {...TextBox147Props} {...TextBox147Cb} {...TextBox147IoProps}/>
<TextBox className="p-Home TextBox148 bpt" {...TextBox148Props} {...TextBox148Cb} {...TextBox148IoProps}/>
</Flex>
<Flex className="p-Home Flex176 bpt" {...Flex176Props} {...Flex176Cb} {...Flex176IoProps}>
<Image className="p-Home Image75 bpt" {...Image75Props} {...Image75Cb} {...Image75IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex182 bpt" {...Flex182Props} {...Flex182Cb} {...Flex182IoProps}>
<Flex className="p-Home Flex175 bpt" {...Flex175Props} {...Flex175Cb} {...Flex175IoProps}>
<TextBox className="p-Home TextBox145 bpt" {...TextBox145Props} {...TextBox145Cb} {...TextBox145IoProps}/>
<TextBox className="p-Home TextBox146 bpt" {...TextBox146Props} {...TextBox146Cb} {...TextBox146IoProps}/>
</Flex>
<Flex className="p-Home Flex174 bpt" {...Flex174Props} {...Flex174Cb} {...Flex174IoProps}>
<Image className="p-Home Image74 bpt" {...Image74Props} {...Image74Cb} {...Image74IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Footer bpt" {...FooterProps} {...FooterCb} {...FooterIoProps}>
<Flex className="p-Home Flex215 bpt" {...Flex215Props} {...Flex215Cb} {...Flex215IoProps}>
<Flex className="p-Home Flex213 bpt" {...Flex213Props} {...Flex213Cb} {...Flex213IoProps}>
<TextBox className="p-Home TextBox169 bpt" {...TextBox169Props} {...TextBox169Cb} {...TextBox169IoProps}/>
<TextBox className="p-Home TextBox170 bpt" {...TextBox170Props} {...TextBox170Cb} {...TextBox170IoProps}/>
</Flex>
<Flex className="p-Home Flex214 bpt" {...Flex214Props} {...Flex214Cb} {...Flex214IoProps}>
<Flex className="p-Home Flex212 bpt" {...Flex212Props} {...Flex212Cb} {...Flex212IoProps}>
<Flex className="p-Home Flex201 bpt" {...Flex201Props} {...Flex201Cb} {...Flex201IoProps}>
<TextBox className="p-Home TextBox168 bpt" {...TextBox168Props} {...TextBox168Cb} {...TextBox168IoProps}/>
<TextBox className="p-Home TextBox167 bpt" {...TextBox167Props} {...TextBox167Cb} {...TextBox167IoProps}/>
</Flex>
<TextBox className="p-Home TextBox171 bpt" {...TextBox171Props} {...TextBox171Cb} {...TextBox171IoProps}/>
<Flex className="p-Home Flex210 bpt" {...Flex210Props} {...Flex210Cb} {...Flex210IoProps}>
<Image className="p-Home Image85 bpt" {...Image85Props} {...Image85Cb} {...Image85IoProps}/>
<TextBox className="p-Home TextBox172 bpt" {...TextBox172Props} {...TextBox172Cb} {...TextBox172IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex211 bpt" {...Flex211Props} {...Flex211Cb} {...Flex211IoProps}>
<Flex className="p-Home Flex203 bpt" {...Flex203Props} {...Flex203Cb} {...Flex203IoProps}>
<TextBox className="p-Home TextBox173 bpt" {...TextBox173Props} {...TextBox173Cb} {...TextBox173IoProps}/>
<TextBox className="p-Home TextBox153 bpt" {...TextBox153Props} {...TextBox153Cb} {...TextBox153IoProps}/>
<TextBox className="p-Home TextBox174 bpt" {...TextBox174Props} {...TextBox174Cb} {...TextBox174IoProps}/>
</Flex>
<Flex className="p-Home Flex204 bpt" {...Flex204Props} {...Flex204Cb} {...Flex204IoProps}>
<TextBox className="p-Home TextBox175 bpt" {...TextBox175Props} {...TextBox175Cb} {...TextBox175IoProps}/>
<TextBox className="p-Home TextBox176 bpt" {...TextBox176Props} {...TextBox176Cb} {...TextBox176IoProps}/>
<TextBox className="p-Home TextBox177 bpt" {...TextBox177Props} {...TextBox177Cb} {...TextBox177IoProps}/>
</Flex>
<Flex className="p-Home Flex205 bpt" {...Flex205Props} {...Flex205Cb} {...Flex205IoProps}>
<TextBox className="p-Home TextBox178 bpt" {...TextBox178Props} {...TextBox178Cb} {...TextBox178IoProps}/>
<TextBox className="p-Home TextBox179 bpt" {...TextBox179Props} {...TextBox179Cb} {...TextBox179IoProps}/>
<TextBox className="p-Home TextBox180 bpt" {...TextBox180Props} {...TextBox180Cb} {...TextBox180IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
  </>);
}
