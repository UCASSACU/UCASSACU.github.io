# 博客文章目录

此目录包含所有博客文章的Markdown文件，用于网站的博客部分。

## 如何添加新博客

1. 在此目录中创建一个新的Markdown文件，如`post4.md`
2. 按照现有博客的格式编写文章内容
3. 在`js/blog-post.js`文件中的`blogPosts`对象中添加新博客的信息
4. 在`postIds`数组中添加新博客的ID（这决定了博客的显示顺序）
5. 在`blog.html`中添加新博客的卡片

## Markdown格式指南

博客文章使用标准的Markdown语法，支持以下功能：

### 标题

```markdown
# 一级标题
## 二级标题
### 三级标题
```

### 文本格式

```markdown
*斜体文本*
**粗体文本**
***粗斜体文本***
~~删除线文本~~
```

### 列表

```markdown
无序列表:
- 项目1
- 项目2
  - 子项目A
  - 子项目B

有序列表:
1. 第一项
2. 第二项
3. 第三项
```

### 链接和图片

```markdown
[链接文本](URL)
![图片alt文本](图片URL)
```

### 代码

```markdown
行内代码: `var example = "hello";`

代码块:
```javascript
function greeting(name) {
    return `Hello, ${name}!`;
}
```

### 表格

```markdown
| 表头1 | 表头2 | 表头3 |
|------|-------|------|
| 单元格1 | 单元格2 | 单元格3 |
| 单元格4 | 单元格5 | 单元格6 |
```

### 引用

```markdown
> 这是一段引用文本
> 
> 这是引用的第二段
```

### 分隔线

```markdown
---
```

## 多语言支持

为了支持中英文切换，请在`js/blog-post.js`文件中添加新博客的中英文标题和日期：

```javascript
'post4': {
    title: {
        zh: '中文标题',
        en: 'English Title'
    },
    date: {
        zh: '2023年X月X日',
        en: 'Month X, 2023'
    },
    image: 'images/blog/blog4.jpg',
    markdown: 'posts/post4.md'
}
```

## 注意事项

- 图片建议放在`images/blog/`目录下
- 所有博客文章的Markdown文件应放在`posts/`目录中
- 代码块支持语法高亮，请指定正确的语言
- 文件名请使用英文字母、数字和连字符，避免使用空格和特殊字符 