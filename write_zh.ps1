# Build complete zh.json
$json = [PSCustomObject]@{
  common = @{
    scroll="滚动"; learnMore="了解更多"; viewAll="查看全部"; readMore="阅读更多"; backToHome="返回首页"
    loading="加载中..."; error="发生错误"; close="关闭"; languageLabel="语言"
  }
  nav = @{
    home="首页"; about="关于我们"; programs="项目"; publications="出版物"; partnership="合作伙伴关系"
    apiEsg="API & ESG"; contact="联系我们"; callUs="联系我们"; menuLabel="导航菜单"
    yayasanFull="Yayasan AntangPatahu Mahaga Lewu"
  }
  navSub = @{
    tentangProfil="基金会简介"; tentangSejarah="历史与背景"; tentangVisiMisi="愿景与使命"
    tentangStruktur="组织架构"; tentangLegalitas="合法性及认可"; programOverview="社会林业项目概览"
    programKarbon="碳项目"; programHhbk="非木材林产品"; publikasiDokumen="文件报告"
    publikasiBerita="新闻"; publikasiGaleri="图片库"; publikasiFaq="常见问题"
  }
  footer = @{
    description="Yayasan AMAL 是中加里曼丹社会林业在碳项目、非木材林产品业务开发以及ESG数字创新方面的战略合作伙伴。"
    quickLinks="快速链接"; aboutUs="关于我们"; programPs="社会林业项目"; projectCarbon="碳项目"
    hhbk="非木材林产品"; apiEsgFooter="API & ESG"; newsFooter="新闻"; galleryFooter="图片库"
    mainPrograms="主要项目"
    program1="非木材林产品利用（HHBK）"; program2="保护与生态旅游"
    program3="可持续森林管理"; program4="可持续森林恢复"
    program5="森林社区赋权"; program6="文化与传统"; contactFooter="联系方式"
    address1="Jl. Kwitang Raya No. 13 Gd. Graha Ketut Mas Agung Lt.4"
    address1City="雅加达中部, 10340"; address1Country="印度尼西亚"
    address2="Jl. G. Obos No 80"; address2City="帕朗卡拉亚, 73112"; address2Country="印度尼西亚"
    copyright="© 2026 Yayasan AntangPatahu Mahaga Lewu (AMAL)。版权所有。Develop by BobyMihing"
    privacyPolicy="隐私政策"; termsConditions="条款与条件"
  }
  hero = @{
    tagline="社会林业 · 碳项目 · 非木材林产品 · 泥炭地"
    heading1="保护森林"; heading2="赋权社区"
    subheading="中加里曼丹矿物林和泥炭地碳项目、非木材林产品业务开发以及ESG数字创新的社会林业战略合作伙伴。"
    cta1="支持我们的项目"; cta2="查看林业项目"
    stat1Label="受保护面积（公顷）"; stat2Label="植树数量"
    stat3Label="社会林业小组"; stat4Label="旗舰项目"
  }
  mission = @{
    label="我们的使命"; heading1="建设"; heading2="可持续未来"
    paragraph1="AntangPatahu Mahaga Lewu（AMAL）是一个作为中加里曼丹社会林业战略合作伙伴的基金会。我们促进来自矿物林和泥炭地的碳项目，支持非木材林产品（NTFP）业务的开发，并为战略合作伙伴的ESG需求提供API许可证。"
    paragraph2="以碳项目、非木材林产品利用和战略伙伴关系为重点，我们在中加里曼丹的4个县协助社区，以对环境保护和社区福祉的高度承诺。"
    paragraph3="我们相信，社区福祉和森林保护是同一枚硬币不可分割的两面——两者必须携手并进，才能实现真正可持续的发展。"
    card1Title="碳项目"; card1Desc="通过社会林业社区管理的矿物林和泥炭地的碳信用来减缓气候变化。"
    card2Title="经济赋权"; card2Desc="支持非木材林产品的开发和营销，促进社区福祉。"
    card3Title="森林保护"; card3Desc="通过社会林业方式保护中加里曼丹的矿物林和泥炭地。"
    card4Title="战略伙伴关系"; card4Desc="为社会林业社区与碳市场、NTFP买家以及ESG合作伙伴搭建桥梁，实现可持续影响。"
  }
  programs = @{
    label="旗舰项目"; heading="我们的林业项目"
    subheading="Yayasan AMAL 的三个项目路径 — 碳项目、NTFP开发以及与社会林业小组的联合项目"
    card1Title="碳项目"; card1Desc="促进来自矿物林和泥炭地的碳项目 — 与91个社会林业小组共同生成经过验证的碳信用。"
    card2Title="非木材林产品"; card2Desc="NTFP开发与营销 — 蒲隆手工艺品、藤条、无刺蜂蜜、糖棕、水椰以及泥炭地渔业产品。"
    card3Title="社会林业联合项目"; card3Desc="所有项目都与社会林业小组作为主要行动者共同实施 — 从规划到营销。"
    viewAllPrograms="查看所有项目"
  }
  wilayah = @{
    label="工作区域"; heading="4个受援县"
    subheading="Yayasan AMAL 通过社会林业项目、碳项目和可持续经济赋权，在中加里曼丹的4个县协助社区 — 涵盖矿物林和泥炭地。"
    groupsLabel="社会林业小组"; hectaresLabel="公顷"
    summaryGroups="社会林业小组"; summaryArea="受援总面积（公顷）"
  }
  cta = @{
    heading="加入我们，保护森林并支持碳项目"
    subheading="每一份贡献都支持来自矿物林和泥炭地的碳项目，赋权中加里曼丹的社会林业社区。"
    carbonProject="碳项目"; becomePartner="成为合作伙伴"
  }
  contactForm = @{
    nameLabel="全名 *"; namePlaceholder="请输入您的全名"; emailLabel="电子邮件 *"; emailPlaceholder="请输入您的电子邮件"
    phoneLabel="电话号码"; phonePlaceholder="可选：请输入电话号码"; subjectLabel="主题 *"
    subjectPlaceholder="请输入消息主题"; messageLabel="消息 *"; messagePlaceholder="在此处输入您的消息..."
    submitButton="发送消息"; sending="发送中..."; successTitle="消息已发送！"
    successMessage="感谢您的消息。我们将尽快与您联系。"; sendAnother="发送另一条消息"
    errorMessage="发送消息失败。请重试。"
  }
  languageSwitcher = @{ en="English"; id="Bahasa Indonesia"; ja="日本語"; zh="中文" }
}
$json | ConvertTo-Json -Depth 100 -Compress | Set-Content -LiteralPath "E:\website\yayasanamal-main\src\i18n\locales\zh.json" -Encoding UTF8
Write-Output "Base zh.json rebuilt"
