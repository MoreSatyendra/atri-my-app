import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useblogHeaderCb, useFlex9Cb, useFlex7Cb, useFlex6Cb, useFlex8Cb, useFlex11Cb, useFlex13Cb, useFlex14Cb, useFlex15Cb, useFlex46Cb, useFlex45Cb, useFlex44Cb, useFlex49Cb, useFlex48Cb, useFlex47Cb, useFlex52Cb, useFlex51Cb, useFlex50Cb, useFlex55Cb, useFlex54Cb, useFlex53Cb, useTextBox8Cb, useTextBox9Cb, useTextBox10Cb, useTextBox11Cb, useImage2Cb, useTextBox7Cb, useTextBox12Cb, useImage3Cb, useTextBox14Cb, useTextBox15Cb, useTextBox13Cb, useImage6Cb, useImage22Cb, useTextBox38Cb, useTextBox39Cb, useImage21Cb, useTextBox37Cb, useImage24Cb, useTextBox41Cb, useTextBox42Cb, useImage23Cb, useTextBox40Cb, useImage26Cb, useTextBox44Cb, useTextBox45Cb, useImage25Cb, useTextBox43Cb, useImage28Cb, useTextBox47Cb, useTextBox48Cb, useImage27Cb, useTextBox46Cb } from "../page-cbs/blog";
import "../page-css/blog.css";
import "../custom/blog";

export default function Blog() {
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

  const blogHeaderProps = useStore((state)=>state["blog"]["blogHeader"]);
const blogHeaderIoProps = useIoStore((state)=>state["blog"]["blogHeader"]);
const blogHeaderCb = useblogHeaderCb()
const Flex9Props = useStore((state)=>state["blog"]["Flex9"]);
const Flex9IoProps = useIoStore((state)=>state["blog"]["Flex9"]);
const Flex9Cb = useFlex9Cb()
const Flex7Props = useStore((state)=>state["blog"]["Flex7"]);
const Flex7IoProps = useIoStore((state)=>state["blog"]["Flex7"]);
const Flex7Cb = useFlex7Cb()
const Flex6Props = useStore((state)=>state["blog"]["Flex6"]);
const Flex6IoProps = useIoStore((state)=>state["blog"]["Flex6"]);
const Flex6Cb = useFlex6Cb()
const Flex8Props = useStore((state)=>state["blog"]["Flex8"]);
const Flex8IoProps = useIoStore((state)=>state["blog"]["Flex8"]);
const Flex8Cb = useFlex8Cb()
const Flex11Props = useStore((state)=>state["blog"]["Flex11"]);
const Flex11IoProps = useIoStore((state)=>state["blog"]["Flex11"]);
const Flex11Cb = useFlex11Cb()
const Flex13Props = useStore((state)=>state["blog"]["Flex13"]);
const Flex13IoProps = useIoStore((state)=>state["blog"]["Flex13"]);
const Flex13Cb = useFlex13Cb()
const Flex14Props = useStore((state)=>state["blog"]["Flex14"]);
const Flex14IoProps = useIoStore((state)=>state["blog"]["Flex14"]);
const Flex14Cb = useFlex14Cb()
const Flex15Props = useStore((state)=>state["blog"]["Flex15"]);
const Flex15IoProps = useIoStore((state)=>state["blog"]["Flex15"]);
const Flex15Cb = useFlex15Cb()
const Flex46Props = useStore((state)=>state["blog"]["Flex46"]);
const Flex46IoProps = useIoStore((state)=>state["blog"]["Flex46"]);
const Flex46Cb = useFlex46Cb()
const Flex45Props = useStore((state)=>state["blog"]["Flex45"]);
const Flex45IoProps = useIoStore((state)=>state["blog"]["Flex45"]);
const Flex45Cb = useFlex45Cb()
const Flex44Props = useStore((state)=>state["blog"]["Flex44"]);
const Flex44IoProps = useIoStore((state)=>state["blog"]["Flex44"]);
const Flex44Cb = useFlex44Cb()
const Flex49Props = useStore((state)=>state["blog"]["Flex49"]);
const Flex49IoProps = useIoStore((state)=>state["blog"]["Flex49"]);
const Flex49Cb = useFlex49Cb()
const Flex48Props = useStore((state)=>state["blog"]["Flex48"]);
const Flex48IoProps = useIoStore((state)=>state["blog"]["Flex48"]);
const Flex48Cb = useFlex48Cb()
const Flex47Props = useStore((state)=>state["blog"]["Flex47"]);
const Flex47IoProps = useIoStore((state)=>state["blog"]["Flex47"]);
const Flex47Cb = useFlex47Cb()
const Flex52Props = useStore((state)=>state["blog"]["Flex52"]);
const Flex52IoProps = useIoStore((state)=>state["blog"]["Flex52"]);
const Flex52Cb = useFlex52Cb()
const Flex51Props = useStore((state)=>state["blog"]["Flex51"]);
const Flex51IoProps = useIoStore((state)=>state["blog"]["Flex51"]);
const Flex51Cb = useFlex51Cb()
const Flex50Props = useStore((state)=>state["blog"]["Flex50"]);
const Flex50IoProps = useIoStore((state)=>state["blog"]["Flex50"]);
const Flex50Cb = useFlex50Cb()
const Flex55Props = useStore((state)=>state["blog"]["Flex55"]);
const Flex55IoProps = useIoStore((state)=>state["blog"]["Flex55"]);
const Flex55Cb = useFlex55Cb()
const Flex54Props = useStore((state)=>state["blog"]["Flex54"]);
const Flex54IoProps = useIoStore((state)=>state["blog"]["Flex54"]);
const Flex54Cb = useFlex54Cb()
const Flex53Props = useStore((state)=>state["blog"]["Flex53"]);
const Flex53IoProps = useIoStore((state)=>state["blog"]["Flex53"]);
const Flex53Cb = useFlex53Cb()
const TextBox8Props = useStore((state)=>state["blog"]["TextBox8"]);
const TextBox8IoProps = useIoStore((state)=>state["blog"]["TextBox8"]);
const TextBox8Cb = useTextBox8Cb()
const TextBox9Props = useStore((state)=>state["blog"]["TextBox9"]);
const TextBox9IoProps = useIoStore((state)=>state["blog"]["TextBox9"]);
const TextBox9Cb = useTextBox9Cb()
const TextBox10Props = useStore((state)=>state["blog"]["TextBox10"]);
const TextBox10IoProps = useIoStore((state)=>state["blog"]["TextBox10"]);
const TextBox10Cb = useTextBox10Cb()
const TextBox11Props = useStore((state)=>state["blog"]["TextBox11"]);
const TextBox11IoProps = useIoStore((state)=>state["blog"]["TextBox11"]);
const TextBox11Cb = useTextBox11Cb()
const Image2Props = useStore((state)=>state["blog"]["Image2"]);
const Image2IoProps = useIoStore((state)=>state["blog"]["Image2"]);
const Image2Cb = useImage2Cb()
const TextBox7Props = useStore((state)=>state["blog"]["TextBox7"]);
const TextBox7IoProps = useIoStore((state)=>state["blog"]["TextBox7"]);
const TextBox7Cb = useTextBox7Cb()
const TextBox12Props = useStore((state)=>state["blog"]["TextBox12"]);
const TextBox12IoProps = useIoStore((state)=>state["blog"]["TextBox12"]);
const TextBox12Cb = useTextBox12Cb()
const Image3Props = useStore((state)=>state["blog"]["Image3"]);
const Image3IoProps = useIoStore((state)=>state["blog"]["Image3"]);
const Image3Cb = useImage3Cb()
const TextBox14Props = useStore((state)=>state["blog"]["TextBox14"]);
const TextBox14IoProps = useIoStore((state)=>state["blog"]["TextBox14"]);
const TextBox14Cb = useTextBox14Cb()
const TextBox15Props = useStore((state)=>state["blog"]["TextBox15"]);
const TextBox15IoProps = useIoStore((state)=>state["blog"]["TextBox15"]);
const TextBox15Cb = useTextBox15Cb()
const TextBox13Props = useStore((state)=>state["blog"]["TextBox13"]);
const TextBox13IoProps = useIoStore((state)=>state["blog"]["TextBox13"]);
const TextBox13Cb = useTextBox13Cb()
const Image6Props = useStore((state)=>state["blog"]["Image6"]);
const Image6IoProps = useIoStore((state)=>state["blog"]["Image6"]);
const Image6Cb = useImage6Cb()
const Image22Props = useStore((state)=>state["blog"]["Image22"]);
const Image22IoProps = useIoStore((state)=>state["blog"]["Image22"]);
const Image22Cb = useImage22Cb()
const TextBox38Props = useStore((state)=>state["blog"]["TextBox38"]);
const TextBox38IoProps = useIoStore((state)=>state["blog"]["TextBox38"]);
const TextBox38Cb = useTextBox38Cb()
const TextBox39Props = useStore((state)=>state["blog"]["TextBox39"]);
const TextBox39IoProps = useIoStore((state)=>state["blog"]["TextBox39"]);
const TextBox39Cb = useTextBox39Cb()
const Image21Props = useStore((state)=>state["blog"]["Image21"]);
const Image21IoProps = useIoStore((state)=>state["blog"]["Image21"]);
const Image21Cb = useImage21Cb()
const TextBox37Props = useStore((state)=>state["blog"]["TextBox37"]);
const TextBox37IoProps = useIoStore((state)=>state["blog"]["TextBox37"]);
const TextBox37Cb = useTextBox37Cb()
const Image24Props = useStore((state)=>state["blog"]["Image24"]);
const Image24IoProps = useIoStore((state)=>state["blog"]["Image24"]);
const Image24Cb = useImage24Cb()
const TextBox41Props = useStore((state)=>state["blog"]["TextBox41"]);
const TextBox41IoProps = useIoStore((state)=>state["blog"]["TextBox41"]);
const TextBox41Cb = useTextBox41Cb()
const TextBox42Props = useStore((state)=>state["blog"]["TextBox42"]);
const TextBox42IoProps = useIoStore((state)=>state["blog"]["TextBox42"]);
const TextBox42Cb = useTextBox42Cb()
const Image23Props = useStore((state)=>state["blog"]["Image23"]);
const Image23IoProps = useIoStore((state)=>state["blog"]["Image23"]);
const Image23Cb = useImage23Cb()
const TextBox40Props = useStore((state)=>state["blog"]["TextBox40"]);
const TextBox40IoProps = useIoStore((state)=>state["blog"]["TextBox40"]);
const TextBox40Cb = useTextBox40Cb()
const Image26Props = useStore((state)=>state["blog"]["Image26"]);
const Image26IoProps = useIoStore((state)=>state["blog"]["Image26"]);
const Image26Cb = useImage26Cb()
const TextBox44Props = useStore((state)=>state["blog"]["TextBox44"]);
const TextBox44IoProps = useIoStore((state)=>state["blog"]["TextBox44"]);
const TextBox44Cb = useTextBox44Cb()
const TextBox45Props = useStore((state)=>state["blog"]["TextBox45"]);
const TextBox45IoProps = useIoStore((state)=>state["blog"]["TextBox45"]);
const TextBox45Cb = useTextBox45Cb()
const Image25Props = useStore((state)=>state["blog"]["Image25"]);
const Image25IoProps = useIoStore((state)=>state["blog"]["Image25"]);
const Image25Cb = useImage25Cb()
const TextBox43Props = useStore((state)=>state["blog"]["TextBox43"]);
const TextBox43IoProps = useIoStore((state)=>state["blog"]["TextBox43"]);
const TextBox43Cb = useTextBox43Cb()
const Image28Props = useStore((state)=>state["blog"]["Image28"]);
const Image28IoProps = useIoStore((state)=>state["blog"]["Image28"]);
const Image28Cb = useImage28Cb()
const TextBox47Props = useStore((state)=>state["blog"]["TextBox47"]);
const TextBox47IoProps = useIoStore((state)=>state["blog"]["TextBox47"]);
const TextBox47Cb = useTextBox47Cb()
const TextBox48Props = useStore((state)=>state["blog"]["TextBox48"]);
const TextBox48IoProps = useIoStore((state)=>state["blog"]["TextBox48"]);
const TextBox48Cb = useTextBox48Cb()
const Image27Props = useStore((state)=>state["blog"]["Image27"]);
const Image27IoProps = useIoStore((state)=>state["blog"]["Image27"]);
const Image27Cb = useImage27Cb()
const TextBox46Props = useStore((state)=>state["blog"]["TextBox46"]);
const TextBox46IoProps = useIoStore((state)=>state["blog"]["TextBox46"]);
const TextBox46Cb = useTextBox46Cb()

  return (<>
  <Flex1 className="p-blog blogHeader bpt" {...blogHeaderProps} {...blogHeaderCb} {...blogHeaderIoProps}>
<Flex1 className="p-blog Flex9 bpt" {...Flex9Props} {...Flex9Cb} {...Flex9IoProps}>
<Flex1 className="p-blog Flex8 bpt" {...Flex8Props} {...Flex8Cb} {...Flex8IoProps}>
<TextBox1 className="p-blog TextBox12 bpt" {...TextBox12Props} {...TextBox12Cb} {...TextBox12IoProps}/>
</Flex1>
<Flex1 className="p-blog Flex7 bpt" {...Flex7Props} {...Flex7Cb} {...Flex7IoProps}>
<TextBox1 className="p-blog TextBox11 bpt" {...TextBox11Props} {...TextBox11Cb} {...TextBox11IoProps}/>
<TextBox1 className="p-blog TextBox10 bpt" {...TextBox10Props} {...TextBox10Cb} {...TextBox10IoProps}/>
<TextBox1 className="p-blog TextBox9 bpt" {...TextBox9Props} {...TextBox9Cb} {...TextBox9IoProps}/>
<TextBox1 className="p-blog TextBox8 bpt" {...TextBox8Props} {...TextBox8Cb} {...TextBox8IoProps}/>
<Flex1 className="p-blog Flex6 bpt" {...Flex6Props} {...Flex6Cb} {...Flex6IoProps}>
<TextBox1 className="p-blog TextBox7 bpt" {...TextBox7Props} {...TextBox7Cb} {...TextBox7IoProps}/>
<Image1 className="p-blog Image2 bpt" {...Image2Props} {...Image2Cb} {...Image2IoProps}/>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-blog Flex11 bpt" {...Flex11Props} {...Flex11Cb} {...Flex11IoProps}>
<Flex1 className="p-blog Flex49 bpt" {...Flex49Props} {...Flex49Cb} {...Flex49IoProps}>
<Image1 className="p-blog Image24 bpt" {...Image24Props} {...Image24Cb} {...Image24IoProps}/>
<Flex1 className="p-blog Flex48 bpt" {...Flex48Props} {...Flex48Cb} {...Flex48IoProps}>
<TextBox1 className="p-blog TextBox42 bpt" {...TextBox42Props} {...TextBox42Cb} {...TextBox42IoProps}/>
<TextBox1 className="p-blog TextBox41 bpt" {...TextBox41Props} {...TextBox41Cb} {...TextBox41IoProps}/>
<Flex1 className="p-blog Flex47 bpt" {...Flex47Props} {...Flex47Cb} {...Flex47IoProps}>
<TextBox1 className="p-blog TextBox40 bpt" {...TextBox40Props} {...TextBox40Cb} {...TextBox40IoProps}/>
<Image1 className="p-blog Image23 bpt" {...Image23Props} {...Image23Cb} {...Image23IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-blog Flex52 bpt" {...Flex52Props} {...Flex52Cb} {...Flex52IoProps}>
<Image1 className="p-blog Image26 bpt" {...Image26Props} {...Image26Cb} {...Image26IoProps}/>
<Flex1 className="p-blog Flex51 bpt" {...Flex51Props} {...Flex51Cb} {...Flex51IoProps}>
<TextBox1 className="p-blog TextBox45 bpt" {...TextBox45Props} {...TextBox45Cb} {...TextBox45IoProps}/>
<TextBox1 className="p-blog TextBox44 bpt" {...TextBox44Props} {...TextBox44Cb} {...TextBox44IoProps}/>
<Flex1 className="p-blog Flex50 bpt" {...Flex50Props} {...Flex50Cb} {...Flex50IoProps}>
<TextBox1 className="p-blog TextBox43 bpt" {...TextBox43Props} {...TextBox43Cb} {...TextBox43IoProps}/>
<Image1 className="p-blog Image25 bpt" {...Image25Props} {...Image25Cb} {...Image25IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-blog Flex55 bpt" {...Flex55Props} {...Flex55Cb} {...Flex55IoProps}>
<Image1 className="p-blog Image28 bpt" {...Image28Props} {...Image28Cb} {...Image28IoProps}/>
<Flex1 className="p-blog Flex54 bpt" {...Flex54Props} {...Flex54Cb} {...Flex54IoProps}>
<TextBox1 className="p-blog TextBox48 bpt" {...TextBox48Props} {...TextBox48Cb} {...TextBox48IoProps}/>
<TextBox1 className="p-blog TextBox47 bpt" {...TextBox47Props} {...TextBox47Cb} {...TextBox47IoProps}/>
<Flex1 className="p-blog Flex53 bpt" {...Flex53Props} {...Flex53Cb} {...Flex53IoProps}>
<TextBox1 className="p-blog TextBox46 bpt" {...TextBox46Props} {...TextBox46Cb} {...TextBox46IoProps}/>
<Image1 className="p-blog Image27 bpt" {...Image27Props} {...Image27Cb} {...Image27IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-blog Flex13 bpt" {...Flex13Props} {...Flex13Cb} {...Flex13IoProps}>
<Image1 className="p-blog Image3 bpt" {...Image3Props} {...Image3Cb} {...Image3IoProps}/>
<Flex1 className="p-blog Flex14 bpt" {...Flex14Props} {...Flex14Cb} {...Flex14IoProps}>
<TextBox1 className="p-blog TextBox14 bpt" {...TextBox14Props} {...TextBox14Cb} {...TextBox14IoProps}/>
<TextBox1 className="p-blog TextBox15 bpt" {...TextBox15Props} {...TextBox15Cb} {...TextBox15IoProps}/>
<Flex1 className="p-blog Flex15 bpt" {...Flex15Props} {...Flex15Cb} {...Flex15IoProps}>
<TextBox1 className="p-blog TextBox13 bpt" {...TextBox13Props} {...TextBox13Cb} {...TextBox13IoProps}/>
<Image1 className="p-blog Image6 bpt" {...Image6Props} {...Image6Cb} {...Image6IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-blog Flex46 bpt" {...Flex46Props} {...Flex46Cb} {...Flex46IoProps}>
<Image1 className="p-blog Image22 bpt" {...Image22Props} {...Image22Cb} {...Image22IoProps}/>
<Flex1 className="p-blog Flex45 bpt" {...Flex45Props} {...Flex45Cb} {...Flex45IoProps}>
<TextBox1 className="p-blog TextBox39 bpt" {...TextBox39Props} {...TextBox39Cb} {...TextBox39IoProps}/>
<TextBox1 className="p-blog TextBox38 bpt" {...TextBox38Props} {...TextBox38Cb} {...TextBox38IoProps}/>
<Flex1 className="p-blog Flex44 bpt" {...Flex44Props} {...Flex44Cb} {...Flex44IoProps}>
<TextBox1 className="p-blog TextBox37 bpt" {...TextBox37Props} {...TextBox37Cb} {...TextBox37IoProps}/>
<Image1 className="p-blog Image21 bpt" {...Image21Props} {...Image21Cb} {...Image21IoProps}/>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
  </>);
}
