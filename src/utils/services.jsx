import {
  FaBuilding,
  FaRulerCombined,
  FaPaintBrush,
  FaHammer,
  FaLayerGroup,
  FaHome,
  FaTools,
  FaClipboardCheck,
} from "react-icons/fa";
export const services = [
  {
    icon: () => <FaBuilding size={40} className="text-orange" />,
    title: "التصميم المعماري",
    desc: "نقدم تصميمات معمارية حديثة تلبي احتياجات العملاء بإبداع واحترافية.",
  },
  {
    icon: () => <FaRulerCombined size={40} className="text-orange" />,
    title: "التصميم الإنشائي",
    desc: "نوفر حلولًا إنشائية قوية تضمن متانة وسلامة المباني في جميع الظروف.",
  },
  {
    icon: () => <FaPaintBrush size={40} className="text-orange" />,
    title: "التشطيبات الداخلية",
    desc: "تشطيبات راقية بمواصفات فنية عالية تناسب ذوقك وميزانيتك.",
  },
  {
    icon: () => <FaHammer size={40} className="text-orange" />,
    title: "تنفيذ المشاريع",
    desc: "إدارة وتنفيذ مشاريع الإنشاء بدقة عالية وجودة متكاملة في كل مرحلة.",
  },
  {
    icon: () => <FaLayerGroup size={40} className="text-orange" />,
    title: "إدارة المواقع",
    desc: "فريقنا يشرف على مواقع التنفيذ لضمان الجودة والانضباط بالمواعيد.",
  },
  {
    icon: () => <FaHome size={40} className="text-orange" />,
    title: "الترميم والتجديد",
    desc: "إعادة تأهيل المباني القديمة وتحسين مظهرها الهيكلي والمعماري.",
  },
  {
    icon: () => <FaTools size={40} className="text-orange" />,
    title: "الخدمات الهندسية",
    desc: "نوفر كافة الاستشارات والخدمات الهندسية بدقة ومهنية عالية.",
  },
  {
    icon: () => <FaClipboardCheck size={40} className="text-orange" />,
    title: "الإشراف الهندسي",
    desc: "متابعة ميدانية كاملة تضمن مطابقة العمل للمخططات والمواصفات.",
  },
];
