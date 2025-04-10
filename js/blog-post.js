// 博客文章详情页脚本
document.addEventListener('DOMContentLoaded', function() {
    // 从URL获取博客ID
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    
    if (!postId) {
        showError('博客ID不存在');
        return;
    }
    
    // 加载博客数据
    loadBlogPost(postId);
    
    // 设置上一篇/下一篇博客链接
    setupNavigationLinks(postId);
});

// 博客数据
const blogPosts = {
    'post1': {
        title: {
            zh: '博客文章标题示例 1',
            en: 'Sample Blog Post Title 1'
        },
        date: {
            zh: '2023年12月15日',
            en: 'December 15, 2023'
        },
        image: 'images/blog/blog1.jpg',
        markdown: 'posts/post1.md'
    },
    'post2': {
        title: {
            zh: '博客文章标题示例 2',
            en: 'Sample Blog Post Title 2'
        },
        date: {
            zh: '2023年11月20日',
            en: 'November 20, 2023'
        },
        image: 'images/blog/blog2.jpg',
        markdown: 'posts/post2.md'
    },
    'post3': {
        title: {
            zh: '博客文章标题示例 3',
            en: 'Sample Blog Post Title 3'
        },
        date: {
            zh: '2023年10月5日',
            en: 'October 5, 2023'
        },
        image: 'images/blog/blog3.jpg',
        markdown: 'posts/post3.md'
    }
};

// 博客ID顺序（用于导航）
const postIds = ['post1', 'post2', 'post3'];

/**
 * 加载博客文章
 * @param {string} postId - 博客ID
 */
function loadBlogPost(postId) {
    const blogData = blogPosts[postId];
    
    if (!blogData) {
        showError('博客不存在');
        return;
    }
    
    // 设置页面标题、日期和图片
    updatePageContent(blogData);
    
    // 如果在本地文件系统中，直接加载嵌入的博客内容
    if (window.location.protocol === 'file:') {
        loadEmbeddedBlogContent(postId);
        return;
    }
    
    // 加载Markdown内容
    fetch(blogData.markdown)
        .then(response => {
            if (!response.ok) {
                console.error('文件加载失败：', response.status, response.statusText);
                throw new Error(`无法加载Markdown文件 (${response.status}: ${response.statusText})`);
            }
            return response.text();
        })
        .then(markdown => {
            // 检查Markdown内容编码问题
            if (markdown.includes('') || markdown.indexOf('\uFFFD') !== -1) {
                console.warn('Markdown内容可能存在编码问题');
                // 尝试修复常见的中文编码问题（如果需要）
                // markdown = fixChineseEncoding(markdown);
            }

            try {
                renderMarkdown(markdown);
            } catch (parseError) {
                console.error('Markdown解析失败:', parseError);
                showError('解析博客内容失败');
            }
        })
        .catch(error => {
            console.error('加载博客内容失败:', error);
            if (window.location.protocol === 'file:') {
                showError('本地文件系统限制可能阻止加载Markdown文件。建议使用本地服务器（如http-server或live-server）来运行此网站。');
            } else {
                showError('加载博客内容失败。请确认博客文件存在且格式正确。');
            }
            // 尝试使用嵌入内容作为备用
            loadEmbeddedBlogContent(postId);
        });
}

/**
 * 加载嵌入的博客内容（当fetch失败时的备用解决方案）
 */
function loadEmbeddedBlogContent(postId) {
    let content = '';
    
    // 使用预先定义的博客内容
    if (postId === 'post1') {
        content = `# 博客文章标题示例 1

*发表于2023年12月15日*

## 引言

这是一篇示例博客文章，展示了Markdown格式的效果。Markdown是一种轻量级标记语言，创建于2004年，目的是让文本内容的格式排版变得简单直观，同时保持文档的可读性。

## Markdown的优点

使用Markdown编写博客有很多优点：

1. **简单易学** - 语法简单，上手快。
2. **专注内容** - 可以让作者专注于内容而不是格式。
3. **兼容性好** - 可以轻松转换为HTML、PDF等格式。
4. **跨平台** - 几乎所有平台都支持。

## 代码示例

以下是一个简单的JavaScript代码示例：

\`\`\`javascript
function greeting(name) {
    return \`你好，\${name}！欢迎来到我的博客！\`;
}

console.log(greeting('访客'));
\`\`\`

## 结语

Markdown是写博客的理想选择，它既易于编写，又能生成美观的格式化文本。希望这个示例能帮助大家了解Markdown的基本用法！`;
    } else if (postId === 'post2') {
        content = `# 博客文章标题示例 2

*发表于2023年11月20日*

## Web开发中的响应式设计

响应式设计是现代Web开发中不可或缺的一部分。它确保您的网站在各种设备和屏幕尺寸上都能提供良好的用户体验。

## 什么是响应式设计？

响应式Web设计是一种设计和开发方法，使网站能根据用户使用的设备自动调整布局和显示效果。无论是在桌面电脑、平板还是手机上访问，网站都能提供最佳的浏览体验。

## CSS媒体查询示例

\`\`\`css
/* 基础样式适用于所有设备 */
body {
  font-size: 16px;
  line-height: 1.5;
}

/* 平板设备 */
@media (max-width: 768px) {
  body {
    font-size: 14px;
  }
}
\`\`\``;
    } else if (postId === 'post3') {
        content = `# 博客文章标题示例 3

*发表于2023年10月5日*

## 数据可视化：将复杂数据转化为直观图表

数据可视化是一门将数字和统计信息转化为图形表示的艺术与科学。在这个信息爆炸的时代，有效的数据可视化技术变得越来越重要。

## JavaScript数据可视化库示例

\`\`\`javascript
// 使用D3.js创建基本条形图
const data = [10, 20, 30, 40, 50];

const svg = d3.select('body')
  .append('svg')
  .attr('width', 400)
  .attr('height', 300);

svg.selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('x', (d, i) => i * 80)
  .attr('y', (d) => 300 - d * 5)
  .attr('width', 70)
  .attr('height', (d) => d * 5)
  .attr('fill', 'steelblue');
\`\`\``;
    } else {
        showError('无法加载嵌入的博客内容');
        return;
    }
    
    try {
        renderMarkdown(content);
    } catch (error) {
        console.error('渲染嵌入内容失败:', error);
        showError('无法显示博客内容');
    }
}

/**
 * 渲染Markdown内容
 */
function renderMarkdown(markdown) {
    const contentElement = document.getElementById('blog-content');
    contentElement.innerHTML = marked.parse(markdown);
    
    // 代码高亮处理由marked配置和highlight.js自动完成
    
    // 添加成功加载后的处理（如果需要）
    document.dispatchEvent(new CustomEvent('blog-loaded', { 
        detail: { success: true } 
    }));
}

/**
 * 更新页面内容
 * @param {Object} blogData - 博客数据
 */
function updatePageContent(blogData) {
    // 获取当前语言
    const currentLang = document.documentElement.lang || 'zh';
    
    // 设置页面标题
    document.title = `${blogData.title[currentLang]} | Blog Post`;
    
    // 设置博客标题和日期
    document.getElementById('blog-title').textContent = blogData.title[currentLang];
    document.getElementById('blog-date').textContent = blogData.date[currentLang];
    
    // 设置封面图片
    const blogImage = document.getElementById('blog-image');
    
    // 添加图片加载错误处理
    blogImage.onerror = function() {
        console.warn('博客封面图片加载失败:', blogData.image);
        this.src = 'images/blog/default.jpg'; // 设置一个默认图片
        this.alt = '默认封面图片';
    };
    
    blogImage.src = blogData.image;
}

/**
 * 设置导航链接
 * @param {string} currentPostId - 当前博客ID
 */
function setupNavigationLinks(currentPostId) {
    const currentIndex = postIds.indexOf(currentPostId);
    
    if (currentIndex === -1) {
        return;
    }
    
    const prevPostLink = document.getElementById('prev-post');
    const nextPostLink = document.getElementById('next-post');
    
    // 设置上一篇链接
    if (currentIndex > 0) {
        const prevPostId = postIds[currentIndex - 1];
        const lang = document.documentElement.lang || 'zh';
        prevPostLink.href = `blog-post.html?id=${prevPostId}&lang=${lang}`;
    } else {
        prevPostLink.style.visibility = 'hidden';
    }
    
    // 设置下一篇链接
    if (currentIndex < postIds.length - 1) {
        const nextPostId = postIds[currentIndex + 1];
        const lang = document.documentElement.lang || 'zh';
        nextPostLink.href = `blog-post.html?id=${nextPostId}&lang=${lang}`;
    } else {
        nextPostLink.style.visibility = 'hidden';
    }
}

/**
 * 显示错误消息
 * @param {string} message - 错误消息
 */
function showError(message) {
    const contentElement = document.getElementById('blog-content');
    contentElement.innerHTML = `
        <div class="error-message">
            <i class="fas fa-exclamation-circle"></i>
            <p>${message}</p>
            <a href="blog.html" class="btn primary-btn">返回博客列表</a>
        </div>
    `;
}

// 添加对语言切换的监听
// 当语言改变时更新页面内容
document.addEventListener('languageChanged', function(e) {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    
    if (postId && blogPosts[postId]) {
        updatePageContent(blogPosts[postId]);
        setupNavigationLinks(postId);
    }
}); 