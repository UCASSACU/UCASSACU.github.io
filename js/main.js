// 语言数据
const translations = {
    zh: {
        'nav-about': '关于我',
        'nav-publications': '论文',
        'nav-blog': '博客',
        'nav-contact': '联系',
        'hero-greeting': '你好, 我是',
        'name': '姓名',
        'tagline': '职业头衔 | 专业领域',
        'brief-intro': '简短的个人介绍，专业背景与研究方向。',
        'discover-btn': '了解更多',
        'about-title': '关于我',
        'about-p1': '这里是你的详细自我介绍，可以包括教育背景、工作经历、研究兴趣等内容。',
        'about-p2': '介绍你的专业技能、获得的成就以及职业目标。让访问者更好地了解你的专业背景和价值观。',
        'skills-title': '技能',
        'skill-1': '技能 1',
        'skill-2': '技能 2',
        'skill-3': '技能 3',
        'skill-4': '技能 4',
        'skill-5': '技能 5',
        'publications-title': '发表的论文',
        'pub1-year': '2023',
        'pub1-title': '论文标题示例 1',
        'pub1-authors': '作者 1, 作者 2, 作者 3',
        'pub1-journal': '期刊名称, 卷(期), 页码',
        'pub1-abstract': '论文摘要或简短描述...',
        'pub2-year': '2022',
        'pub2-title': '论文标题示例 2',
        'pub2-authors': '作者 1, 作者 2',
        'pub2-journal': '期刊名称, 卷(期), 页码',
        'pub2-abstract': '论文摘要或简短描述...',
        'pdf': 'PDF',
        'doi': 'DOI',
        'blog-title': '个人博客',
        'blog1-date': '2023年12月15日',
        'blog1-title': '博客文章标题示例 1',
        'blog1-excerpt': '文章摘要内容，简单介绍文章的主要内容和观点...',
        'blog2-date': '2023年11月20日',
        'blog2-title': '博客文章标题示例 2',
        'blog2-excerpt': '文章摘要内容，简单介绍文章的主要内容和观点...',
        'blog3-date': '2023年10月5日',
        'blog3-title': '博客文章标题示例 3',
        'blog3-excerpt': '文章摘要内容，简单介绍文章的主要内容和观点...',
        'read-more': '阅读更多',
        'contact-title': '联系方式',
        'email': 'email@example.com',
        'phone': '+86 123 4567 8900',
        'location': '城市, 国家',
        'form-title': '发送消息',
        'form-name': '姓名',
        'form-email': '邮箱',
        'form-message': '消息',
        'form-submit': '发送',
        'copyright': '© 2023 版权所有',
        'back-to-blog': '返回博客列表',
        'loading': '加载中...',
        'prev-post': '上一篇',
        'next-post': '下一篇',
        'view-publications': '查看论文',
        'view-blog': '浏览博客',
        'contact-me': '联系我',
    },
    en: {
        'nav-about': 'About',
        'nav-publications': 'Publications',
        'nav-blog': 'Blog',
        'nav-contact': 'Contact',
        'hero-greeting': 'Hello, I am',
        'name': 'Name',
        'tagline': 'Job Title | Field of Expertise',
        'brief-intro': 'Brief personal introduction, professional background and research direction.',
        'discover-btn': 'Discover More',
        'about-title': 'About Me',
        'about-p1': 'Here is your detailed self-introduction, which can include educational background, work experience, research interests, etc.',
        'about-p2': 'Introduce your professional skills, achievements, and career goals. Let visitors better understand your professional background and values.',
        'skills-title': 'Skills',
        'skill-1': 'Skill 1',
        'skill-2': 'Skill 2',
        'skill-3': 'Skill 3',
        'skill-4': 'Skill 4',
        'skill-5': 'Skill 5',
        'publications-title': 'Publications',
        'pub1-year': '2023',
        'pub1-title': 'Sample Paper Title 1',
        'pub1-authors': 'Author 1, Author 2, Author 3',
        'pub1-journal': 'Journal Name, Volume(Issue), Pages',
        'pub1-abstract': 'Paper abstract or brief description...',
        'pub2-year': '2022',
        'pub2-title': 'Sample Paper Title 2',
        'pub2-authors': 'Author 1, Author 2',
        'pub2-journal': 'Journal Name, Volume(Issue), Pages',
        'pub2-abstract': 'Paper abstract or brief description...',
        'pdf': 'PDF',
        'doi': 'DOI',
        'blog-title': 'Personal Blog',
        'blog1-date': 'December 15, 2023',
        'blog1-title': 'Sample Blog Post Title 1',
        'blog1-excerpt': 'Article summary content, briefly introducing the main content and viewpoints of the article...',
        'blog2-date': 'November 20, 2023',
        'blog2-title': 'Sample Blog Post Title 2',
        'blog2-excerpt': 'Article summary content, briefly introducing the main content and viewpoints of the article...',
        'blog3-date': 'October 5, 2023',
        'blog3-title': 'Sample Blog Post Title 3',
        'blog3-excerpt': 'Article summary content, briefly introducing the main content and viewpoints of the article...',
        'read-more': 'Read More',
        'contact-title': 'Contact',
        'email': 'email@example.com',
        'phone': '+86 123 4567 8900',
        'location': 'City, Country',
        'form-title': 'Send Message',
        'form-name': 'Name',
        'form-email': 'Email',
        'form-message': 'Message',
        'form-submit': 'Send',
        'copyright': '© 2023 All Rights Reserved',
        'back-to-blog': 'Back to Blog',
        'loading': 'Loading...',
        'prev-post': 'Previous Post',
        'next-post': 'Next Post',
        'view-publications': 'View Publications',
        'view-blog': 'Browse Blog',
        'contact-me': 'Contact Me',
    }
};

// 当前语言
let currentLang = 'zh';

// DOM 元素加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 检查URL中的语言参数
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    
    // 如果URL中有语言参数，使用它
    if (langParam === 'en' || langParam === 'zh') {
        currentLang = langParam;
    } else {
        // 或者尝试从localStorage获取上次使用的语言设置
        const savedLang = localStorage.getItem('preferredLanguage');
        if (savedLang) {
            currentLang = savedLang;
        }
    }
    
    // 初始化语言
    setLanguage(currentLang);
    
    // 语言切换按钮事件监听
    const langToggle = document.getElementById('language-toggle');
    if (langToggle) {
        // 设置正确的初始按钮文本
        langToggle.textContent = currentLang === 'zh' ? 'EN' : '中文';
        
        langToggle.addEventListener('click', function() {
            currentLang = currentLang === 'zh' ? 'en' : 'zh';
            setLanguage(currentLang);
            langToggle.textContent = currentLang === 'zh' ? 'EN' : '中文';
            
            // 保存语言偏好到localStorage
            localStorage.setItem('preferredLanguage', currentLang);
            
            // 触发语言变更事件，通知其他脚本
            document.dispatchEvent(new CustomEvent('languageChanged', {
                detail: { language: currentLang }
            }));
        });
    }
    
    // 响应式导航菜单
    let header = document.querySelector('header');
    let navLinks = document.querySelectorAll('.nav-link');
    
    // 创建汉堡菜单按钮
    const hamburger = document.createElement('div');
    hamburger.classList.add('hamburger');
    hamburger.innerHTML = '<span></span><span></span><span></span>';
    
    // 插入到导航之前
    header.querySelector('.container').appendChild(hamburger);
    
    // 获取导航菜单
    const navMenu = document.querySelector('nav ul');
    
    // 汉堡菜单点击事件
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('show');
    });
    
    // 点击导航链接时关闭菜单
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('show');
        });
    });
    
    // 滚动监听，高亮当前导航项 (仅在单页面应用中使用)
    if (document.querySelectorAll('section[id]').length > 1) {
        window.addEventListener('scroll', function() {
            let current = '';
            const sections = document.querySelectorAll('section[id]');
            const navHeight = header.offsetHeight;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (pageYOffset >= (sectionTop - navHeight - 50)) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            });
        });
    }
    
    // 滚动时改变导航栏背景
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // 表单提交事件
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 在这里添加表单提交逻辑
            // 例如发送到后端API或邮件服务
            
            // 为示例，显示提交成功消息
            alert(currentLang === 'zh' ? '消息已发送！' : 'Message sent!');
            contactForm.reset();
        });
    }
    
    // 添加滚动动画
    const animateElements = document.querySelectorAll('.section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
    
    // 初始动画
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        setTimeout(() => {
            heroContent.classList.add('animate');
        }, 300);
    }
    
    // 添加凝聚态物理粒子效果
    addPhysicsEffects();
});

// 设置语言函数
function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // 设置HTML语言属性
    document.documentElement.lang = lang;
    
    // 特殊处理网站标题
    if (lang === 'zh') {
        document.title = document.title.split('|')[1] ? `${translations[lang][document.title.split('|')[0].trim()]} | ${translations['en'][document.title.split('|')[0].trim()]}` : '个人简历 | Personal Resume';
        document.getElementById('name').textContent = '姓名 | Name';
    } else {
        document.title = document.title.split('|')[1] ? `${translations[lang][document.title.split('|')[0].trim()]} | ${translations['zh'][document.title.split('|')[0].trim()]}` : 'Personal Resume | 个人简历';
        document.getElementById('name').textContent = 'Name | 姓名';
    }
    
    // 为了保持语言设置在多页面应用中的一致性，在链接上添加语言参数
    const pageLinks = document.querySelectorAll('a[href]:not([href^="#"]):not([href^="javascript"]):not([href^="mailto"]):not([href^="tel"])');
    pageLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href.includes('.html')) {
            // 如果链接已经包含查询参数
            if (href.includes('?')) {
                if (href.includes('lang=')) {
                    // 替换现有的语言参数
                    link.setAttribute('href', href.replace(/lang=(zh|en)/, `lang=${lang}`));
                } else {
                    // 添加语言参数
                    link.setAttribute('href', `${href}&lang=${lang}`);
                }
            } else {
                // 添加语言参数作为第一个查询参数
                link.setAttribute('href', `${href}?lang=${lang}`);
            }
        }
    });
}

// 添加凝聚态物理粒子效果
function addPhysicsEffects() {
    // 创建电子云效果
    const physicsContainer = document.querySelector('.physics-elements');
    
    if (!physicsContainer) return;
    
    // 添加随机浮动粒子
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.classList.add('physics-particle');
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${5 + Math.random() * 10}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        physicsContainer.appendChild(particle);
    }
    
    // 添加量子效应，点击屏幕产生波纹效果
    document.addEventListener('click', function(e) {
        const ripple = document.createElement('div');
        ripple.classList.add('quantum-ripple');
        ripple.style.top = `${e.pageY}px`;
        ripple.style.left = `${e.pageX}px`;
        document.body.appendChild(ripple);
        
        // 动画结束后移除
        setTimeout(() => {
            ripple.remove();
        }, 2000);
    });
} 