import { motion } from "motion/react";
import { 
  Theater, 
  Video, 
  Ticket, 
  Users, 
  Lightbulb, 
  Wrench, 
  Building2, 
  Phone, 
  Mail, 
  ChevronRight,
  Menu,
  X,
  ChevronDown
} from "lucide-react";
import { useState, useEffect } from "react";

const PROJECTS = [
  { 
    name: "莲花楼", 
    type: "舞台剧", 
    description: "十年前,惊才绝艳的四顾门门主李相夷为追查师兄单孤刀遗骨,与金鸳盟盟主笛飞声决战东海,而后两大高手就此消失在万顷碧波之上。十年后,江湖游医李莲花偶遇仗义行侠安天下的方多病,机缘巧合下“被迫”重新卷入江湖,一幕交织着侠骨柔情、快意恩仇的武侠长卷就此在舞台上缓缓展开……本剧改编自藤萍原著小说《吉祥纹莲花楼》,舞台剧版《莲花楼》不仅展现了李莲花对江湖的“漫长告别”, 也讲述了李相夷是如何成为“天下第一”的故事。",
    mainImage: "/image6.png",
    stills: [
      "/image7.png",
      "/image8.png",
      "/image9.png",
      "/image10.png",
      "/image11.png",
    ]
  },
  { 
    name: "Time Share House", 
    type: "沉浸式音乐剧", 
    description: "一个奇妙的夜晚，一次千年不遇的月亮奇观，把四位身处不同年代的年轻男女带入了一个拥有神秘力量的超时空酒馆。当2021年的倒霉少女莫晓芸遇上来自2031年的未来人周仁章，加上一个明朝的皇世子莲叶，还有来自民国的诗人狄辰。面对不可知的命运、混乱的时空，这三男一女由彼此怀疑到靠近，相处的日常搞笑又温馨。最终，四人的宿命被揭开，彼此拯救是唯一破局的方法，他们携手穿梭时空，既拯救了自己，也收获了爱情与友情。",
    mainImage: "/image12.png",
    stills: [
      "/image13.png",
      "/image14.png",
      "/image15.png",
      "/image16.png",
    ]
  },
  { 
    name: "梦见狮子", 
    type: "音乐剧", 
    description: "缮灯艇京剧坤生余婉仪，搞砸演出，被师叔倪麟逐出师门。阴差阳错结识二次元舞台剧制作人白翡丽，为了重回缮灯艇，她答应加入《如梦南歌》剧组。谁知白翡丽还隐藏着更大的秘密，层出不穷的事件，缮灯艇尘封的秘密也浮出水面……",
    mainImage: "/image17.png",
    stills: [
      "/image18.png",
      "/image19.png",
      "/image20.png",
    ]
  },
];

const TEAM = [
  {
    name: "曹一凡",
    role: "厂牌创始人 / 制作人",
    bio: "2015年-2021年就职于开心麻花，参与制作多部舞台剧及线上演出作品。2021成立厂牌BRAVO整挺好，参与制作多部音乐剧及舞台剧。",
    image: "/image1.png"
  },
  {
    name: "张雨萱",
    role: "运营总监 / 制作人",
    bio: "AI制片项目：五粮液火爆品牌新春广告、巩俐60周岁庆生短片。演出类项目：音乐剧《秘密花园》舞台剧《莲花楼》音乐剧《北上》文旅项目《华山忆秦娥》音乐剧《唐朝诡事录之曼陀罗》《Time Share House》《灵魂摆渡之永生》《梦见狮子》",
    image: "/image2.png"
  },
  {
    name: "喻丽蕊",
    role: "编剧 / 戏剧制作人",
    bio: "代表作：爱奇艺国潮音乐剧《梦见狮子》、军旅话剧《铁心向党》、2026山东春晚小品《深舱向日葵》。",
    image: "/image3.png"
  },
  {
    name: "何慧谦",
    role: "影视导演 / 摄影师",
    bio: "电影《穷途漫步》《银河差等生》，短片《Meant to meet》《寻她》，广告《金领冠奶粉》《伊利安慕希》。",
    image: "/image4.png"
  },
  {
    name: "吴泳宏",
    role: "戏剧导演",
    bio: "《寻找家人》中方导演，《Time Share House》导演，《忘川引》执行导演，《隐婚男女》复排导演，《不能说的秘密》执行导演。",
    image: "/image5.png"
  },
  {
    name: "黄润景",
    role: "制作人/经纪人",
    bio: "舞剧《天工开物》舞台剧《莲花楼》话剧《钦差大臣》《会走路的全家福》音乐剧《丝路之声》《七月与安生》《Time Share House》《织梦》",
    image: "/image21.png"
  },
  {
    name: "杨沐琳",
    role: "制作人/舞台监督",
    bio: "中非合作论坛峰会文艺演出、庆祝中华人民共和国成立75周年交响音乐会、全国政协2026年新年茶话会、2025年中共中央国务院春节团拜会、音乐话剧《受到召唤·敦煌》舞台剧《莲花楼》儿童音乐剧《小东东奇幻历险》2025中国国际孔子文化节开幕式话剧《钦差大臣》",
    image: "/image22.jpg"
  },
  {
    name: "王霏",
    role: "艺人统筹",
    bio: "曾负责多名艺人工作日常规划，参与线上中剧制作。负责杂志社艺人统筹邀约工作。参与制作舞台剧《莲花楼》。",
    image: "/image23.jpg"
  }
];

const SERVICES = [
  { icon: Theater, name: "戏剧制作" },
  { icon: Video, name: "影视拍摄" },
  { icon: Ticket, name: "票务运营" },
  { icon: Building2, name: "场地运营" },
  { icon: Wrench, name: "设备支持" },
  { icon: Users, name: "艺人经纪" },
];

const EQUIPMENT_SECTIONS = [
  {
    title: "一、业务概述",
    content: "我司主营线下舞台演出全套影音舞台设备租赁服务，深耕脱口秀、喜剧综艺演播录制赛道，可为单人脱口秀剧场巡演、棚内喜剧综艺录制提供整套灯光、音响、视频、舞台配套设备，配套专业技术落地全流程服务，已落地多项知名喜剧项目，包含门腔《一门心思》脱口秀、综艺《喜人奇妙夜》、庞博个人脱口秀专场等案例。"
  },
  {
    title: "二、服务项目细分",
    content: [
      "1. 单人线下脱口秀专场设备租赁：适配剧场、小剧场、巡演场次，代表项目：门腔《一门心思》脱口秀巡演、庞博个人脱口秀专场。按需配置轻量化专业人声音响、舞台基础灯光、现场大屏、简易舞台桁架、供电配套，搭配调音、灯光专职技术人员，贴合脱口秀单人讲话收音需求，保障巡演多场地快速搭建、稳定演出。",
      "2. 喜剧综艺棚内录制设备租赁：适配演播厅长期录制、多机位拍摄需求，代表项目：《喜人奇妙夜》。提供全套综艺级摄制设备、多机位摄像机组、导播切换系统、多层次影视灯光、多路收音系统、大屏提词设备，满足多演员同台录制、高清直播、节目成片拍摄高标准需求。"
    ]
  },
  {
    title: "三、全套租赁设备范围",
    content: [
      "1. 音频音响设备：线阵音响、舞台返听音箱、无线手持/领夹麦克风、专业数字调音台、音频处理器、防啸叫系统、全套线材配件；针对脱口秀人声优化收音效果。",
      "2. 舞台灯光设备：面光、侧光、追光、LED平板补光灯、氛围染色灯、灯光控台、桁架及配套支架，兼顾线下剧场演出氛围感与综艺拍摄画面质感。",
      "3. 视频摄制大屏设备：4K摄影机、导播台、监视器、LED大屏、舞台投影、提词器、直播推流设备，支持节目录制、现场字幕投放。",
      "4. 舞台基础配套：铝合金桁架、舞台板、配电箱、电缆、护栏、设备机柜等搭建物料，含设备运输、进场搭建、完工拆除服务。"
    ]
  },
  {
    title: "四、配套增值服务",
    content: [
      "1. 前期场地勘测，定制专属设备布场方案；",
      "2. 配备灯光师、调音师、摄像导播等专业技术人员全程驻场；",
      "3. 短期单日租赁、专场巡演长期打包、综艺整季成套租赁多种合作模式；",
      "4. 全品类备用应急设备储备，保障演出、录制无中断；",
      "5. 一体化全包服务：设备运输、搭建调试、现场保障、后期拆除清运一站式交付。"
    ]
  },
  {
    title: "五、项目服务优势",
    content: [
      "1. 专项喜剧行业经验，熟悉脱口秀线下演出、喜剧综艺录制设备使用痛点；",
      "2. 自有全品类设备库存，档期稳定，无需外借调配；",
      "3. 大小场景全覆盖：小型开放麦、千人剧场脱口秀、大型演播厅综艺均可承接；",
      "4. 方案灵活定制，按需增减设备，控制租赁成本。"
    ]
  },
  {
    title: "六、经典服务案例",
    content: [
      "1. 门腔《一门心思》全国脱口秀专场 — 全舞台影音设备租赁及现场技术保障；",
      "2. 喜剧综艺《喜人奇妙夜》演播厅录制 — 全套灯光、摄像、音频设备租赁服务；",
      "3. 庞博个人脱口秀线下专场 — 剧场巡演整套舞台设备一站式租赁。"
    ]
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isTeamOpen, setIsTeamOpen] = useState(false);
  const [isEquipmentOpen, setIsEquipmentOpen] = useState(false);
  const [openEquipmentIdx, setOpenEquipmentIdx] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "关于我们", href: "#about" },
    { name: "业务范围", href: "#services" },
    { name: "团队介绍", href: "#team" },
    { name: "项目展示", href: "#projects" },
    { name: "未来发展", href: "#future" },
    { name: "联系我们", href: "#contact" },
  ];

  return (
    <div className="min-h-screen selection:bg-zinc-900 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-2xl tracking-tighter">BRAVO</span>
            <span className="text-xs font-medium bg-zinc-900 text-white px-2 py-0.5 rounded">整挺好</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium hover:text-zinc-500 transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-white border-b border-zinc-100 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-zinc-100">
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none flex items-center justify-center">
          <h1 className="text-[30vw] font-display font-black leading-none tracking-tighter">BRAVO</h1>
        </div>
        
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-12">
              <p className="text-3xl md:text-7xl font-display font-bold tracking-[0.15em] text-zinc-900 leading-tight">
                <span className="inline-block bg-zinc-900 text-white px-4 py-1 rounded-sm mr-4 shadow-xl">整</span>
                点不一样的，
                <span className="inline-block bg-zinc-900 text-white px-5 py-1 rounded-sm ml-2 shadow-xl">挺好</span>
              </p>
            </div>
            
            <div className="flex flex-col items-center gap-6">
              <div className="h-px w-24 bg-zinc-300" />
              <h2 className="text-xl md:text-3xl font-display font-bold tracking-[0.4em] text-zinc-500 uppercase">
                上海整挺好文化传媒有限公司
              </h2>
              <div className="h-px w-24 bg-zinc-300" />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-12"
          >
            <a href="#about" className="inline-flex items-center gap-2 group">
              <span className="text-sm font-bold tracking-widest uppercase">探索更多</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-12">
              <h3 className="text-sm font-bold tracking-widest uppercase text-zinc-400 mb-2">About Us</h3>
              <h2 className="text-4xl font-display font-bold">关于我们</h2>
            </div>
            <div className="space-y-8 text-lg md:text-xl text-zinc-600 leading-relaxed font-light">
              <p>
                <span className="font-bold text-zinc-900">整挺好 BRAVO</span> 是由制作人曹一凡于2021年创立的戏剧厂牌。
              </p>
              <p>
                业务覆盖剧目出品制作、影视拍摄、演艺新空间开发、剧场票务运营管理、剧团运营、艺人经纪、戏剧IP孵化、运输服务、品牌营销等多个细分领域。
              </p>
              <p>
                我们联动众多一线创制团体及独立艺术家，致力于打造精品演出现场、拓展新形态演艺空间。不断取得良好的口碑和票房成绩。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-sm font-bold tracking-widest uppercase text-zinc-400 mb-2">Our Services</h3>
            <h2 className="text-4xl font-display font-bold">业务范围</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center group"
              >
                <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                  <service.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-zinc-900">{service.name}</h4>
              </motion.div>
            ))}
          </div>

          {/* Equipment Support — Collapsible Section */}
          <div className="mt-12 flex flex-col items-center gap-6">
            <button
              onClick={() => setIsEquipmentOpen(!isEquipmentOpen)}
              className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 text-white rounded-full hover:bg-zinc-700 transition-colors text-sm font-bold uppercase tracking-wider shadow-md"
            >
              {isEquipmentOpen ? (
                <>
                  收起设备支持业务介绍
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
                </>
              ) : (
                <>
                  点击查看设备支持业务介绍
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </>
              )}
            </button>

            {isEquipmentOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-4xl bg-white rounded-2xl shadow-sm overflow-hidden"
              >
                <div className="px-6 py-5 border-b border-zinc-100">
                  <p className="text-xs font-bold tracking-widest uppercase text-zinc-400 mb-1">Equipment Support</p>
                  <h3 className="text-2xl font-display font-bold text-zinc-900">设备支持业务介绍</h3>
                </div>
                <div>
                  {EQUIPMENT_SECTIONS.map((section, idx) => {
                    const isOpen = openEquipmentIdx === idx;
                    return (
                      <div key={section.title} className="border-b border-zinc-100 last:border-b-0">
                        <button
                          onClick={() => setOpenEquipmentIdx(isOpen ? null : idx)}
                          className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-zinc-50 transition-colors"
                        >
                          <span className="font-bold text-zinc-900 text-base">{section.title}</span>
                          <ChevronDown
                            className={`w-5 h-5 text-zinc-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="px-6 pb-6 pt-0"
                          >
                            <div className="text-sm text-zinc-600 leading-relaxed space-y-3">
                              {Array.isArray(section.content) ? (
                                section.content.map((line, i) => (
                                  <p key={i} className="leading-relaxed">{line}</p>
                                ))
                              ) : (
                                <p className="leading-relaxed">{section.content}</p>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className="px-6 py-5 bg-zinc-50 text-center">
                  <a
                    href="#contact"
                    onClick={() => setIsEquipmentOpen(false)}
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-zinc-900 hover:text-zinc-600 transition-colors"
                  >
                    立即咨询设备支持
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h3 className="text-sm font-bold tracking-widest uppercase text-zinc-400 mb-2">Our Team</h3>
              <h2 className="text-4xl font-display font-bold">团队介绍</h2>
            </div>
            <button
              onClick={() => setIsTeamOpen(!isTeamOpen)}
              className="self-start md:self-auto inline-flex items-center gap-3 px-6 py-3 bg-zinc-900 text-white rounded-full hover:bg-zinc-700 transition-colors text-sm font-bold uppercase tracking-wider"
            >
              {isTeamOpen ? (
                <>
                  收起团队
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
                </>
              ) : (
                <>

                </>
              )}
            </button>
          </div>

          {isTeamOpen && (
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {TEAM.map((member, idx) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  className="group text-center"
                >
                  <div className="aspect-square rounded-full overflow-hidden mb-6 bg-zinc-100 shadow-sm group-hover:shadow-xl transition-all duration-500 max-w-[200px] mx-auto">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                  <p className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-4">{member.role}</p>
                  <p className="text-sm text-zinc-500 leading-relaxed">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-zinc-900 text-white overflow-hidden">
        {PROJECTS.map((project, idx) => (
          <div key={project.name} className="min-h-screen py-24 flex items-center border-b border-zinc-800 last:border-0 relative">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="z-10"
              >
                <div className="mb-8">
                  <h3 className="text-xs font-bold tracking-widest uppercase text-zinc-500 mb-2">{project.type}</h3>
                  <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tighter">{project.name}</h2>
                  <div className="h-1 w-16 bg-white" />
                </div>
                <p className="text-base md:text-lg text-zinc-400 leading-relaxed mb-12 font-light">
                  {project.description}
                </p>
                
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-600">Stage Stills / 剧照精选</h4>
                  <div className="grid grid-cols-3 gap-6">
                    {project.stills.map((still, sIdx) => (
                      <motion.div 
                        key={sIdx}
                        whileHover={{ scale: 1.05 }}
                        className="aspect-[4/3] rounded-lg overflow-hidden bg-zinc-800 border border-white/5"
                      >
                        <img 
                          src={still} 
                          alt={`${project.name} still ${sIdx + 1}`} 
                          className="w-full h-full object-cover transition-all duration-500" 
                          referrerPolicy="no-referrer" 
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl relative order-first md:order-last max-w-sm mx-auto md:ml-auto md:mr-0"
              >
                <img 
                  src={project.mainImage} 
                  alt={project.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60" />
              </motion.div>
            </div>
            
            {/* Background Accent */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 text-[40vw] font-display font-bold text-white/5 pointer-events-none select-none">
              {idx + 1}
            </div>
          </div>
        ))}
      </section>

      {/* Future Section */}
      <section id="future" className="relative min-h-[80vh] flex flex-col items-center justify-center bg-[#e5e5e5] overflow-hidden py-24">
        {/* Giant BRAVO Background from PDF Page 14 */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <h1 className="text-[35vw] font-display font-black leading-none tracking-tighter text-[#cccccc]">
            BRAVO
          </h1>
        </div>

        <div className="relative z-10 text-center px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-6xl font-display font-bold text-white mb-2 drop-shadow-sm">
              未来发展
            </h2>
            <p className="text-xl md:text-2xl font-light text-white tracking-[0.2em] font-display">
              Future development
            </p>
          </motion.div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 mt-12 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-4 text-zinc-800 font-bold tracking-tight text-lg md:text-xl leading-relaxed"
          >
            <p>
              2026年BRAVO整挺好将推出数部全新的小剧场驻演剧目和中大剧场巡演剧目，小剧场院线业务也将拓展到全国更多城市
            </p>
            <p>
              并计划在现有艺人经纪业务的基础上建立全新的剧团管理模式和演员培训体系，完善演员梯队建设不断提升演出质量！
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-zinc-900 rounded-[3rem] p-12 md:p-24 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            
            <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">联系我们</h2>
                <p className="text-zinc-400 text-lg mb-12">
                  如果您有任何合作意向或疑问，欢迎通过以下方式联系我们。
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-zinc-900 transition-colors">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-1">电话</p>
                      <p className="text-2xl font-display font-bold">18920709293</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-zinc-900 transition-colors">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-1">邮箱</p>
                      <p className="text-lg md:text-2xl font-display font-bold break-all">bravo@zhengtinghao.cn</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative group flex flex-col items-center md:items-end">
                <div className="bg-white p-4 rounded-3xl shadow-2xl relative">
                  <div className="w-32 h-32 md:w-44 md:h-44 relative">
                    <img 
                      src="/qrcode.png" 
                      alt="QR Code" 
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=BRAVO-DRAMA";
                      }}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-2 text-zinc-400">
                  <Users className="w-4 h-4" />
                  <p className="text-sm font-bold tracking-widest uppercase">扫码添加微信</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-xl tracking-tighter">BRAVO</span>
            <span className="text-[10px] font-medium bg-zinc-900 text-white px-1.5 py-0.5 rounded">整挺好</span>
          </div>
          
          <p className="text-sm text-zinc-400">
            © 2026 上海整挺好文化传媒有限公司. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            {navLinks.slice(0, 3).map(link => (
              <a key={link.name} href={link.href} className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
