module.exports = {
  head: [
    [
      "script",
      {},
      `
     var _hmt = _hmt || [];
     (function() {
       var hm = document.createElement("script");
       hm.src = "https://hm.baidu.com/hm.js?73d5a8b04c811a588a4e32f6939f2e41";
       var s = document.getElementsByTagName("script")[0]; 
       s.parentNode.insertBefore(hm, s);
     })();`,
    ],
  ],
  themeConfig: {
    logo: "/assets/img/logo.png",
    nav: [
      { text: "首页", link: "/" },
      { text: "大数据", link: "/大数据/" },
      { text: "后端开发", link: "/后端开发/" },
      { text: "前端开发", link: "/前端开发/" },
      { text: "人工智能", link: "/人工智能/" },
      { text: "数据库", link: "/数据库/" },
      { text: "网络安全", link: "/网络安全/" },
      { text: "移动端开发", link: "/移动端开发/" },
      { text: "游戏开发", link: "/游戏开发/" },
      { text: "云计算", link: "/云计算/" },
      { text: "测试", link: "/测试/" },
      { text: "GitHub", link: "https://github.com/xiechuanan/VuePress" },
    ],

    sidebar: {
      "/游戏开发/": ["", "递归渲染", "剪辑动画", "光照遮蔽", "渲染引擎", "材质", "着色器"],
      "/数据库/": ["", "主键", "关系型数据库", "索引", "BigData", "Redis", "数据访问控制"],
      "/网络安全/":["", "DDoS攻击","SQL注入","VPN技术","XSS攻击","信息安全管理体系","僵尸网络","入侵检测","入侵防御系统","加密算法","口令破解","安全加固","安全培训","安全审计","安全检测","安全漏洞","安全策略","安全管理","恶意软件","数字证书","数据分类保护","数据备份","最小权限原则","漏洞扫描","病毒","网络安全法","网络钓鱼","身份验证技术","防火墙","黑客攻击"],
      "/大数据/": ["","ETL","Hadoop","HDFS","Hive","MapReduce","NoSQL","Pig","Spark","Storm","分布式系统","基于位置的服务","多维数据分析","实时数据","数据仓库","数据仓库自动化","数据可视化","数据建模","数据挖掘","数据架构","数据治理","数据流","数据流处理","数据清洗","数据湖","数据血缘分析","数据质量","时间序列分析","机器学习","流行度计算","神经网络"],
      // fallback
      "/": ["about"],
    },
  },
};
