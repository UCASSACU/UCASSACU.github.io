# 个人简历网站 | Personal Resume Website

一个简洁、专业的个人简历网站模板，具有响应式设计和中英文切换功能。

## 零基础快速入门

如果你不懂网页设计，请按照以下简单步骤自定义你的个人网站：

### 1. 基础设置（无需代码知识）

1. **下载与安装**：
   - 下载这个模板的压缩包并解压到你的电脑上
   - 安装一个简单的文本编辑器，推荐 [Visual Studio Code](https://code.visualstudio.com/) 或 [Notepad++](https://notepad-plus-plus.org/)
   - 安装 [Python](https://www.python.org/downloads/)（用于本地预览网站）

2. **修改个人资料**：
   - 打开 `js/main.js` 文件
   - 找到以下内容（约在文件开头）：
     ```
     'name': '姓名',
     'tagline': '职业头衔 | 专业领域',
     'brief-intro': '简短的个人介绍...'
     ```
   - 直接修改引号中的文字（不要删除引号和逗号）

3. **更换照片**：
   - 准备一张你的证件照（建议正方形，比如 300×300 像素）
   - 重命名为 `profile.jpg`
   - 替换到 `images` 文件夹中（覆盖原有的文件）

4. **预览网站**：
   - 打开命令提示符（Windows）或终端（Mac）
   - 输入以下命令进入你的网站目录：
     ```
     cd 你的网站目录的完整路径
     ```
   - 输入以下命令启动本地服务器：
     ```
     python -m http.server 8080
     ```
   - 在浏览器中访问 http://localhost:8080

### 2. 常见问题与解决方法

1. **图片不显示**：
   - 确保图片文件存在于正确的文件夹中
   - 检查图片的格式是否为 jpg、png 或 svg
   - 确保文件名与代码中的一致（区分大小写）

2. **文字没有更新**：
   - 确保保存了修改的文件
   - 尝试清除浏览器缓存（按 Ctrl+F5 或 Cmd+Shift+R）
   - 检查是否修改了正确的文本内容（注意引号内的文字）

3. **本地服务器启动失败**：
   - 确认已安装 Python
   - 确认当前目录是网站根目录
   - 如果端口被占用，尝试更换端口号：`python -m http.server 8081`

### 3. 无代码自定义技巧

1. **修改网站颜色**：
   - 打开 `styles/main.css` 文件
   - 找到以下内容（约在文件开头）：
     ```css
     :root {
         --primary-color: #4ECDC4;
         --secondary-color: #556270;
         --accent-color: #FF6B6B;
         /* ... 其他颜色 ... */
     }
     ```
   - 修改这些颜色代码（可以使用[在线颜色选择器](https://htmlcolorcodes.com/)）

2. **修改技能标签**：
   - 打开 `js/main.js` 文件
   - 找到以下类似内容：
     ```javascript
     'skill-1': '技能 1',
     'skill-2': '技能 2',
     ```
   - 修改为你自己的技能

3. **修改联系信息**：
   - 在 `js/main.js` 中找到：
     ```javascript
     'email': 'email@example.com',
     'phone': '+86 123 4567 8900',
     'location': '城市, 国家',
     ```
   - 替换为你的联系方式

### 4. 推荐在线工具

以下工具可以帮助你在不懂代码的情况下进行更多自定义：

1. **图片优化工具**：
   - [TinyPNG](https://tinypng.com/) - 压缩图片大小而不损失质量
   - [Canva](https://www.canva.com/) - 创建精美的banner和标志

2. **颜色选择工具**：
   - [Coolors](https://coolors.co/) - 生成配色方案
   - [Color Hunt](https://colorhunt.co/) - 流行的色彩组合

3. **图标资源**：
   - [Font Awesome](https://fontawesome.com/icons) - 查找适合的图标
   - [Flaticon](https://www.flaticon.com/) - 免费图标下载

4. **在线编辑器**：
   - [CodePen](https://codepen.io/) - 测试HTML/CSS修改
   - [JS Bin](https://jsbin.com/) - 快速测试前端代码

### 5. 部署网站（简易版）

按照以下简单步骤将网站发布到网络上：

1. **使用GitHub Pages（免费）**：
   - 注册 [GitHub](https://github.com/) 账号
   - 下载并安装 [GitHub Desktop](https://desktop.github.com/)
   - 创建新仓库，名称为：`你的用户名.github.io`
   - 将网站文件复制到仓库文件夹
   - 点击"Commit to main"并"Push to origin"
   - 几分钟后访问：`https://你的用户名.github.io`

2. **其他免费托管选项**：
   - [Netlify](https://www.netlify.com/) - 拖放上传文件夹即可部署
   - [Vercel](https://vercel.com/) - 支持简单部署静态网站
   - [Surge](https://surge.sh/) - 命令行工具，一行代码部署

### 6. 简易博客更新指南

不需要了解Markdown和代码也能更新博客：

1. **修改现有博客内容**：
   - 找到并打开 `posts` 目录
   - 用文本编辑器打开任意博客文件（如 `post1.md`）
   - 直接修改文件内容即可更新博客文章
   - 注意保持格式：标题前面的 `#` 号和其他符号不要删除

2. **添加新博客**：
   - 复制一个现有的 `.md` 文件（如 `post1.md`）
   - 重命名为新名称（如 `post4.md`）
   - 打开并修改内容
   - 更新博客列表：
     1. 打开 `blog.html` 文件
     2. 找到类似下面的代码块：
        ```html
        <div class="blog-item">
            <div class="blog-content">
                <!-- 博客信息 -->
            </div>
        </div>
        ```
     3. 复制整个代码块并粘贴到同级位置
     4. 修改新复制块中的博客标题、日期和链接

3. **添加博客图片**：
   - 将图片文件放入 `images/blog` 目录
   - 图片名称建议使用英文和数字，避免空格
   - 在博客文件中引用图片：
     ```
     ![图片描述](images/blog/你的图片文件名.jpg)
     ```

### 7. 文件编辑小技巧

1. **查找和替换**：
   - 使用文本编辑器的"查找"功能（通常是Ctrl+F或Cmd+F）
   - 要批量修改相同内容，使用"替换"功能（通常是Ctrl+H或Cmd+H）

2. **复制粘贴注意事项**：
   - 从Word等软件复制文本可能会带入不可见格式导致错误
   - 建议先粘贴到记事本等纯文本编辑器，再复制到代码文件中

3. **保存文件注意事项**：
   - 保存文件时使用原格式（如.html, .js, .css）
   - 确保文件编码为UTF-8（大多数现代编辑器默认为此编码）
   - 不要改变文件的扩展名

更详细的修改说明请参考下方的完整使用指南。

## 特点

- 现代简洁设计
- 多页面结构，易于导航
- 响应式布局，适应所有设备尺寸
- 渐变背景效果
- 中英文语言切换（包括页面跳转时保持语言选择）
- 包含个人简介、发表论文、个人博客和联系方式页面
- 博客支持Markdown格式编写和代码高亮
- 平滑滚动和过渡动画
- 使用纯HTML、CSS和JavaScript构建，无需框架

## 如何使用

1. 克隆或下载此仓库
2. 根据需要修改以下文件：
   - `index.html`: 更新个人信息和简介
   - `publications.html`: 更新发表的论文信息
   - `blog.html`: 更新博客内容
   - `contact.html`: 更新联系方式
   - `js/main.js`: 编辑中英文翻译文本
   - `styles/main.css`: 根据个人喜好调整颜色和样式
   - `images/`: 替换个人照片和博客图片

## 网站内容修改攻略

### 1. 修改个人信息

#### 基本信息修改
- 打开`js/main.js`，找到`translations`对象
- 修改以下键值对：
  ```javascript
  'name': '姓名', // 改为你的姓名
  'tagline': '职业头衔 | 专业领域', // 改为你的职业信息
  'brief-intro': '简短的个人介绍...' // 个人简介
  ```
- 同时更新英文版本（`en`对象中的相应条目）

#### 关于我页面
- 修改`index.html`中的个人描述部分
- 或在`js/main.js`中修改以下翻译项：
  ```javascript
  'about-p1': '这里是你的详细自我介绍...',
  'about-p2': '介绍你的专业技能、获得的成就...'
  ```

#### 技能标签
- 在`index.html`中找到技能标签部分
- 添加或删除技能标签：
  ```html
  <div class="skill-tags">
      <span class="skill-tag" data-i18n="skill-1">技能 1</span>
      <!-- 添加更多技能 -->
  </div>
  ```
- 在`js/main.js`中添加相应的翻译

### 2. 修改论文信息

- 打开`publications.html`，找到论文列表部分
- 复制现有论文条目，调整数量
- 对于每篇论文，在`js/main.js`中添加翻译：
  ```javascript
  'pub3-year': '2021',
  'pub3-title': '你的论文标题',
  'pub3-authors': '作者列表',
  'pub3-journal': '期刊名称...',
  'pub3-abstract': '论文摘要...'
  ```

### 3. 修改博客内容

#### 更新博客列表
- 打开`blog.html`，找到博客条目部分
- 复制现有博客条目结构，修改链接和数据属性
- 在`js/main.js`中添加新的博客翻译：
  ```javascript
  'blog4-date': '2023年X月X日',
  'blog4-title': '新博客标题',
  'blog4-excerpt': '博客摘要内容...'
  ```

#### 博客列表样式
博客列表采用简洁的垂直列表布局，不使用图片，这样可以：
- 提高页面加载速度
- 避免图片资源不可用的问题
- 专注于内容展示
- 在手机等小屏幕设备上提供更好的阅读体验

每个博客条目包含：
- 标题
- 发布日期
- 博客分类/标签（使用FontAwesome图标）
- 摘要内容
- "阅读更多"链接（带动画效果）

自定义博客标签：
```html
<span class="blog-category"><i class="fas fa-tag"></i> 你的标签名称</span>
```

#### 添加新博客文章
1. 在`posts/`目录创建新的Markdown文件（如`post4.md`）
2. 按照现有格式编写内容
3. 打开`js/blog-post.js`，在`blogPosts`对象中添加：
   ```javascript
   'post4': {
       title: {
           zh: '中文标题',
           en: '英文标题'
       },
       date: {
           zh: '2023年X月X日',
           en: 'Month X, 2023'
       },
       markdown: 'posts/post4.md'
   }
   ```
4. 在同文件的`postIds`数组中添加`'post4'`
5. 在`blog.html`中添加新的博客条目

#### 嵌入式博客内容（备用方案）
为了解决本地文件系统限制，网站提供了嵌入式博客内容作为备用方案：

1. 打开`js/blog-post.js`
2. 找到`loadEmbeddedBlogContent`函数
3. 为新添加的博客文章添加嵌入式内容：
   ```javascript
   else if (postId === 'post4') {
       content = `# 你的博客标题
       
       *发表于2023年X月X日*
       
       你的博客内容...`;
   }
   ```

### 4. 修改联系方式

- 打开`contact.html`
- 更新联系信息，或在`js/main.js`中修改：
  ```javascript
  'email': 'your.email@example.com',
  'phone': '你的电话号码',
  'location': '你的位置'
  ```

### 5. 修改网站样式

#### 颜色方案
- 打开`styles/main.css`，修改CSS变量：
  ```css
  :root {
      --primary-color: #你喜欢的颜色;
      --secondary-color: #你喜欢的颜色;
      --accent-color: #你喜欢的颜色;
      --bg-gradient-start: #你喜欢的颜色;
      --bg-gradient-end: #你喜欢的颜色;
  }
  ```

#### Logo和图片
- 替换`images/logo.svg`为你自己的logo
- 替换`images/profile.jpg`为你的个人照片
- 更新`images/blog/`目录中的博客图片

#### 字体和间距
- 在`styles/main.css`中修改字体和间距设置：
  ```css
  body {
      font-family: '你喜欢的字体', sans-serif;
      /* 其他样式 */
  }
  ```

### 6. 添加/修改页面元素

如需添加新的文本元素并支持多语言：

1. 在HTML中添加元素并设置`data-i18n`属性：
   ```html
   <p data-i18n="new-element">新内容</p>
   ```

2. 在`js/main.js`的`translations`对象中添加翻译：
   ```javascript
   'new-element': '新内容的中文',  // zh对象中
   'new-element': 'New content in English',  // en对象中
   ```

### 7. 网站结构优化

网站采用了清晰的多页面结构，各页面功能划分明确：

#### 首页简化设计
- 首页(`index.html`)只保留"关于我"部分，移除了重复的论文、博客和联系方式部分
- 使用导航按钮引导访问者前往专门的内容页面：
  ```html
  <div class="cta-buttons">
      <a href="publications.html" class="btn primary-btn" data-i18n="view-publications">查看论文</a>
      <a href="blog.html" class="btn primary-btn" data-i18n="view-blog">浏览博客</a>
      <a href="contact.html" class="btn primary-btn" data-i18n="contact-me">联系我</a>
  </div>
  ```
- 这种设计保持首页简洁专注，使用户能更快地了解你的核心信息

#### 专业内容页面
- **论文页面**(`publications.html`): 集中展示学术成果和研究论文
- **博客页面**(`blog.html`): 使用优化的无图片列表布局展示博客文章
- **博客详情页**(`blog-post.html`): 展示完整博客内容，支持Markdown和代码高亮
- **联系页面**(`contact.html`): 提供联系方式和联系表单

通过这种结构优化，既减少了页面加载内容，提高了性能，也提供了更清晰的用户体验和内容导航。

## 本地开发与部署

### 运行本地服务器

由于浏览器安全限制，直接打开HTML文件可能无法正常加载Markdown文件。建议使用本地服务器来开发和预览网站：

1. **使用Python（推荐）**：
   ```bash
   # 进入网站目录
   cd 你的网站目录
   
   # Python 3
   python -m http.server 8080
   
   # 或 Python 2
   python -m SimpleHTTPServer 8080
   ```
   然后访问 http://localhost:8080

2. **使用Node.js**：
   - 安装http-server: `npm install -g http-server`
   - 运行: `http-server -p 8080`

3. **使用VSCode Live Server插件**：
   - 安装Live Server插件
   - 右键点击HTML文件，选择"Open with Live Server"

### 使用GitHub Pages部署（详细步骤）

GitHub Pages是GitHub提供的免费静态网站托管服务，非常适合部署这个个人简历网站。以下是面向零基础用户的详细部署步骤：

#### 第1步：创建GitHub账号

1. 访问 [GitHub官网](https://github.com/)
2. 点击右上角的"Sign up"按钮
3. 填写用户名、电子邮件和密码
4. 完成验证步骤
5. 选择免费计划（Free）
6. 完成注册流程

#### 第2步：创建新仓库

1. 登录GitHub账号
2. 点击右上角"+"图标，选择"New repository"
3. 在"Repository name"字段中输入：`你的用户名.github.io`
   - 例如，如果你的GitHub用户名是johndoe，则输入`johndoe.github.io`
   - **注意**：必须严格遵循这个格式，才能使用默认域名
4. 保持仓库为"Public"（公开）
5. 点击"Create repository"按钮

#### 第3步：上传网站文件（使用GitHub网页界面）

如果你不熟悉Git命令行，可以使用GitHub的网页界面上传文件：

1. 在新创建的仓库页面，点击"uploading an existing file"链接
2. 将你电脑上的所有网站文件拖拽到上传区域
   - 确保上传所有文件和文件夹，包括HTML文件、CSS、JavaScript和图片
   - 如果文件较多，可能需要分批上传
3. 在页面底部，添加提交信息（例如："上传初始网站文件"）
4. 点击"Commit changes"按钮

#### 第4步：使用GitHub Desktop（更简便的方法）

如果文件较多，使用GitHub Desktop会更方便：

1. 下载并安装[GitHub Desktop](https://desktop.github.com/)
2. 登录你的GitHub账号
3. 点击"Clone a repository from the Internet..."
4. 选择你刚创建的仓库（`你的用户名.github.io`）
5. 选择要保存仓库的本地文件夹，点击"Clone"
6. 将你的网站文件复制到刚才选择的本地文件夹中
7. 回到GitHub Desktop，你会看到已更改的文件列表
8. 在左下角添加简短描述（例如："添加网站文件"）
9. 点击"Commit to main"按钮
10. 然后点击顶部的"Push origin"按钮上传到GitHub

#### 第5步：启用GitHub Pages

1. 在GitHub上打开你的仓库页面
2. 点击顶部的"Settings"（设置）选项卡
3. 在左侧菜单中，点击"Pages"
4. 在"Source"部分，从下拉菜单中选择"main"分支
5. 点击"Save"按钮
6. 等待几分钟（通常1-3分钟），页面会显示："Your site is published at https://你的用户名.github.io/"

#### 第6步：访问你的网站

1. 在浏览器中输入 `https://你的用户名.github.io/`
2. 你的个人简历网站现在已经上线了！
3. 分享这个链接，让他人也能访问你的简历网站

#### 第7步：更新网站内容

当你需要更新网站内容时：

1. 在本地修改网站文件
2. 使用GitHub Desktop：
   - 会自动显示所有更改的文件
   - 添加简短描述
   - 点击"Commit to main"
   - 点击"Push origin"将更改上传
3. 或使用GitHub网页界面：
   - 导航到要修改的文件
   - 点击编辑图标（铅笔图标）
   - 进行修改
   - 点击"Commit changes"

网站通常会在几分钟内自动更新。

#### 第8步：自定义域名（可选）

如果你拥有自己的域名，可以设置让访问者通过你的域名访问网站：

1. 在你的域名注册商（如GoDaddy、NameCheap等）控制面板中：
   - 添加一条CNAME记录
   - 名称/主机设置为：www 或 @（取决于你是否希望包含www）
   - 值/指向设置为：`你的用户名.github.io`

2. 在GitHub Pages设置中：
   - 打开仓库的"Settings" > "Pages"
   - 在"Custom domain"字段输入你的域名（例如：`www.yourdomain.com`）
   - 点击"Save"
   - 建议勾选"Enforce HTTPS"选项，提供更安全的访问

3. 在仓库根目录创建名为`CNAME`的文件（无文件扩展名）：
   - 文件内容仅为你的域名，例如：`www.yourdomain.com`
   - 这可以通过GitHub界面直接创建

DNS设置生效可能需要24-48小时，请耐心等待。

#### 常见问题解答

1. **网站已部署但显示404错误**
   - 确认你的仓库名称格式正确：`用户名.github.io`
   - 检查仓库中是否存在`index.html`文件（必须存在于根目录）
   - 尝试清除浏览器缓存后重试

2. **图片不显示**
   - 确保所有图片路径正确，使用相对路径（如`images/profile.jpg`）
   - 检查大小写是否一致（GitHub Pages区分大小写）

3. **样式或脚本未加载**
   - 检查文件路径是否正确
   - 查看浏览器开发者工具中的Console和Network选项卡寻找错误

4. **修改后网站没有更新**
   - GitHub Pages缓存可能需要几分钟才能刷新
   - 尝试在浏览器中强制刷新（Ctrl+F5 或 Cmd+Shift+R）

5. **无法推送更新**
   - 确保你有仓库的写入权限
   - 检查网络连接
   - 尝试刷新GitHub Desktop或重新登录

通过GitHub Pages托管个人简历网站不仅完全免费，而且流量不限，足以应对一般的访问需求。

### 故障排除

#### 博客内容无法加载

1. **检查是否使用本地服务器**：
   - 使用`file://`协议直接打开HTML文件时，浏览器会阻止JavaScript加载本地Markdown文件
   - 解决方法：使用上述的本地服务器方法预览网站

2. **编码问题**：
   - 确保Markdown文件使用UTF-8编码保存
   - 避免使用Windows记事本编辑，推荐使用VSCode、Sublime Text等编辑器

3. **文件路径**：
   - 确认`posts/`目录中存在对应的Markdown文件
   - 检查文件名大小写是否正确（在某些服务器上区分大小写）

4. **图片问题**：
   - 确保`images/blog/`目录中存在博客封面图片
   - 检查图片格式是否受支持（推荐JPG、PNG格式）

#### 语言切换问题

- 检查`js/main.js`中的翻译对象是否包含所有需要翻译的文本
- 确保HTML元素有正确的`data-i18n`属性

## 博客系统

网站包含一个使用Markdown格式的博客系统：

1. **创建新博客文章**：
   - 在`posts/`目录中创建新的Markdown文件（如`post4.md`）
   - 按照现有博客的格式编写内容
   - 在`js/blog-post.js`文件中的`blogPosts`对象中添加新博客的信息
   - 在`blog.html`中添加新博客的条目

2. **简洁无图片设计**：
   - 博客列表采用纯文本布局，无需准备封面图片
   - 使用左侧彩色边框区分不同博客条目
   - 在移动设备上自动切换为顶部边框样式
   - 包含标题、日期、分类标签和摘要，重点突出内容

3. **博客分类标签**：
   - 每篇博客可添加自定义分类标签
   - 在`blog.html`中使用FontAwesome图标增强视觉效果：
   ```html
   <span class="blog-category"><i class="fas fa-tag"></i> 分类名称</span>
   ```

4. **Markdown支持**：
   - 支持标准Markdown语法（标题、列表、链接、图片等）
   - 代码高亮（使用highlight.js）
   - 表格和引用
   - 查看`posts/README.md`获取完整Markdown格式指南

5. **多语言支持**：
   - 博客标题和日期支持中英文切换
   - 在`js/blog-post.js`中配置多语言内容

6. **响应式设计**：
   - 在桌面端显示为左侧边框样式
   - 在平板和手机端自动调整为顶部边框样式
   - 博客元数据（日期和标签）在移动端垂直排列
   - 字体大小和间距自动调整以适应不同屏幕

7. **兼容模式**：
   - 网站提供嵌入式博客内容作为备用方案
   - 当无法通过网络请求加载Markdown文件时自动启用

## 文件结构

```
personal-resume/
│
├── index.html           # 主页/关于我页面
├── publications.html    # 发表的论文页面
├── blog.html            # 个人博客列表页面
├── blog-post.html       # 博客文章详情页面
├── contact.html         # 联系方式页面
├── styles/              # 样式文件
│   ├── main.css         # 主样式表
│   └── blog-post.css    # 博客详情页样式
├── js/                  # JavaScript文件
│   ├── main.js          # 主脚本文件（包含语言切换功能）
│   └── blog-post.js     # 博客详情页脚本
├── posts/               # 博客Markdown文件
│   ├── post1.md
│   ├── post2.md
│   ├── post3.md
│   └── README.md        # Markdown格式指南
├── images/              # 图片资源
│   ├── logo.svg         # 网站Logo
│   ├── profile.jpg      # 个人照片
│   └── blog/            # 博客图片
│       ├── blog1.jpg
│       ├── blog2.jpg
│       ├── blog3.jpg
│       └── default.jpg  # 默认/备用图片
└── README.md            # 项目说明
```

## 语言切换功能

此网站支持中英文双语切换，并且会在页面跳转时保持所选语言：

- 用户的语言选择会保存在localStorage中，确保下次访问时保持一致
- 页面导航链接会自动添加语言参数，以便在跳转后保持当前选择的语言
- 所有静态文本都支持翻译，可在`main.js`文件中的translations对象中进行编辑或添加新的翻译项

## 自定义联系表单

当前表单是静态的，如需启用实际提交功能，请修改`main.js`中的表单提交事件处理部分，添加您自己的提交逻辑或后端API。

```javascript
// 表单提交事件
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 在这里添加表单提交逻辑
        // 例如发送到后端API或邮件服务
    });
}
```

## 兼容性

此网站兼容所有现代浏览器，包括：
- Chrome, Firefox, Safari, Edge (最新版本)
- 移动端浏览器

## 许可

免费使用，可自由修改适应个人需求。

---

✨ 希望这个模板能帮助您展示您的专业形象！