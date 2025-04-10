# Personal Resume Website

A clean and professional personal resume website template with responsive design and bilingual (Chinese/English) language switching capability.

## Quick Start Guide for Beginners

If you have no web design experience, follow these simple steps to customize your personal website:

### 1. Basic Setup (No Coding Knowledge Required)

1. **Download and Install**:
   - Download the template package and extract it to your computer
   - Install a simple text editor, recommended: [Visual Studio Code](https://code.visualstudio.com/) or [Notepad++](https://notepad-plus-plus.org/)
   - Install [Python](https://www.python.org/downloads/) (for local website preview)

2. **Modify Personal Information**:
   - Open the `js/main.js` file
   - Find the following content (near the beginning of the file):
     ```
     'name': 'Name',
     'tagline': 'Job Title | Field of Expertise',
     'brief-intro': 'Brief personal introduction...'
     ```
   - Directly modify the text inside the quotes (do not delete the quotes or commas)

3. **Replace Photo**:
   - Prepare your portrait photo (square format recommended, e.g., 300×300 pixels)
   - Rename it to `profile.jpg`
   - Replace the file in the `images` folder (overwrite the existing file)

4. **Preview Website**:
   - Open Command Prompt (Windows) or Terminal (Mac)
   - Enter the following command to navigate to your website directory:
     ```
     cd complete/path/to/your/website
     ```
   - Enter the following command to start a local server:
     ```
     python -m http.server 8080
     ```
   - Visit http://localhost:8080 in your browser

### 2. Common Issues and Solutions

1. **Images Not Displaying**:
   - Ensure image files exist in the correct folders
   - Check if the image format is jpg, png, or svg
   - Make sure the filenames match those in the code (case-sensitive)

2. **Text Not Updating**:
   - Ensure you've saved the modified files
   - Try clearing your browser cache (press Ctrl+F5 or Cmd+Shift+R)
   - Check if you modified the correct text content (inside the quotes)

3. **Local Server Startup Failure**:
   - Confirm that Python is installed
   - Verify the current directory is the website root
   - If the port is occupied, try changing the port: `python -m http.server 8081`

### 3. No-Code Customization Tips

1. **Change Website Colors**:
   - Open the `styles/main.css` file
   - Find the following content (near the beginning of the file):
     ```css
     :root {
         --primary-color: #4ECDC4;
         --secondary-color: #556270;
         --accent-color: #FF6B6B;
         /* ... other colors ... */
     }
     ```
   - Modify these color codes (you can use an [online color picker](https://htmlcolorcodes.com/))

2. **Modify Skill Tags**:
   - Open the `js/main.js` file
   - Find similar content:
     ```javascript
     'skill-1': 'Skill 1',
     'skill-2': 'Skill 2',
     ```
   - Replace with your own skills

3. **Update Contact Information**:
   - In `js/main.js`, find:
     ```javascript
     'email': 'email@example.com',
     'phone': '+86 123 4567 8900',
     'location': 'City, Country',
     ```
   - Replace with your contact details

### 4. Recommended Online Tools

The following tools can help you customize more without coding knowledge:

1. **Image Optimization Tools**:
   - [TinyPNG](https://tinypng.com/) - Compress images without losing quality
   - [Canva](https://www.canva.com/) - Create beautiful banners and logos

2. **Color Selection Tools**:
   - [Coolors](https://coolors.co/) - Generate color schemes
   - [Color Hunt](https://colorhunt.co/) - Popular color combinations

3. **Icon Resources**:
   - [Font Awesome](https://fontawesome.com/icons) - Find suitable icons
   - [Flaticon](https://www.flaticon.com/) - Free icon downloads

4. **Online Editors**:
   - [CodePen](https://codepen.io/) - Test HTML/CSS modifications
   - [JS Bin](https://jsbin.com/) - Quick front-end code testing

### 5. Website Deployment (Simplified)

Follow these simple steps to publish your website online:

1. **Using GitHub Pages (Free)**:
   - Register a [GitHub](https://github.com/) account
   - Download and install [GitHub Desktop](https://desktop.github.com/)
   - Create a new repository named: `yourusername.github.io`
   - Copy your website files to the repository folder
   - Click "Commit to main" and "Push to origin"
   - After a few minutes, visit: `https://yourusername.github.io`

2. **Other Free Hosting Options**:
   - [Netlify](https://www.netlify.com/) - Deploy by dragging and dropping your folder
   - [Vercel](https://vercel.com/) - Supports simple static website deployment
   - [Surge](https://surge.sh/) - Command-line tool, one-line code deployment

### 6. Easy Blog Update Guide

You can update blogs without understanding Markdown or code:

1. **Modify Existing Blog Content**:
   - Find and open the `posts` directory
   - Open any blog file (e.g., `post1.md`) with a text editor
   - Directly modify the file content to update the blog post
   - Maintain the format: don't remove the `#` symbol before titles and other formatting marks

2. **Add a New Blog**:
   - Copy an existing `.md` file (e.g., `post1.md`)
   - Rename it (e.g., `post4.md`)
   - Open and modify the content
   - Update the blog list:
     1. Open the `blog.html` file
     2. Find code blocks similar to:
        ```html
        <div class="blog-item">
            <div class="blog-content">
                <!-- Blog info -->
            </div>
        </div>
        ```
     3. Copy the entire block and paste it at the same level
     4. Modify the blog title, date, and link in the newly copied block

3. **Add Blog Images**:
   - Place image files in the `images/blog` directory
   - Use English and numbers for image names, avoid spaces
   - Reference images in blog files:
     ```
     ![Image description](images/blog/your-image-filename.jpg)
     ```

### 7. File Editing Tips

1. **Find and Replace**:
   - Use your text editor's "Find" function (usually Ctrl+F or Cmd+F)
   - For batch modifications of the same content, use "Replace" (usually Ctrl+H or Cmd+H)

2. **Copy-Paste Considerations**:
   - Copying text from Word or similar software may bring invisible formatting that causes errors
   - First paste into Notepad or other plain text editors, then copy to code files

3. **File Saving Notes**:
   - Save files using their original formats (e.g., .html, .js, .css)
   - Ensure file encoding is UTF-8 (default in most modern editors)
   - Don't change file extensions

For more detailed modification instructions, refer to the complete guide below.

## Features

- Modern clean design
- Multi-page structure, easy navigation
- Responsive layout, adapts to all device sizes
- Gradient background effect
- Chinese/English language switching (preserves language choice during page navigation)
- Includes personal introduction, publications, personal blog, and contact pages
- Blog supports Markdown format and code highlighting
- Smooth scrolling and transition animations
- Built with pure HTML, CSS, and JavaScript, no frameworks required

## How to Use

1. Clone or download this repository
2. Modify the following files as needed:
   - `index.html`: Update personal information and introduction
   - `publications.html`: Update published papers information
   - `blog.html`: Update blog content
   - `contact.html`: Update contact information
   - `js/main.js`: Edit Chinese/English translation text
   - `styles/main.css`: Adjust colors and styles according to preference
   - `images/`: Replace personal photos and blog images

## Website Content Modification Guide

### 1. Modify Personal Information

#### Basic Information Changes
- Open `js/main.js`, find the `translations` object
- Modify the following key-value pairs:
  ```javascript
  'name': 'Name', // Change to your name
  'tagline': 'Job Title | Field of Expertise', // Change to your professional info
  'brief-intro': 'Brief personal introduction...' // Personal intro
  ```
- Also update the English version (corresponding entries in the `en` object)

#### About Me Page
- Modify the personal description section in `index.html`
- Or in `js/main.js`, modify the following translations:
  ```javascript
  'about-p1': 'This is your detailed self-introduction...',
  'about-p2': 'Introduce your professional skills, achievements...'
  ```

#### Skill Tags
- Find the skill tags section in `index.html`
- Add or remove skill tags:
  ```html
  <div class="skill-tags">
      <span class="skill-tag" data-i18n="skill-1">Skill 1</span>
      <!-- Add more skills -->
  </div>
  ```
- Add corresponding translations in `js/main.js`

### 2. Modify Publications Information

- Open `publications.html`, find the publications list section
- Copy existing publication entries, adjust the quantity
- For each paper, add translations in `js/main.js`:
  ```javascript
  'pub3-year': '2021',
  'pub3-title': 'Your Paper Title',
  'pub3-authors': 'Author List',
  'pub3-journal': 'Journal Name...',
  'pub3-abstract': 'Paper Abstract...'
  ```

### 3. Modify Blog Content

#### Update Blog List
- Open `blog.html`, find the blog entry section
- Copy existing blog entry structure, modify links and data attributes
- Add new blog translations in `js/main.js`:
  ```javascript
  'blog4-date': 'Month X, 2023',
  'blog4-title': 'New Blog Title',
  'blog4-excerpt': 'Blog summary content...'
  ```

#### Blog List Style
The blog list uses a clean vertical layout without images, which:
- Improves page loading speed
- Avoids image resource unavailability issues
- Focuses on content presentation
- Provides better reading experience on mobile and small-screen devices

Each blog entry contains:
- Title
- Publication date
- Blog category/tags (using FontAwesome icons)
- Summary content
- "Read More" link (with animation effect)

Custom blog tags:
```html
<span class="blog-category"><i class="fas fa-tag"></i> Your Tag Name</span>
```

#### Add New Blog Articles
1. Create a new Markdown file in the `posts/` directory (e.g., `post4.md`)
2. Write content following the existing format
3. Open `js/blog-post.js`, add to the `blogPosts` object:
   ```javascript
   'post4': {
       title: {
           zh: 'Chinese Title',
           en: 'English Title'
       },
       date: {
           zh: '2023年X月X日',
           en: 'Month X, 2023'
       },
       markdown: 'posts/post4.md'
   }
   ```
4. Add `'post4'` to the `postIds` array in the same file
5. Add a new blog entry in `blog.html`

#### Embedded Blog Content (Fallback)
To address local file system limitations, the website provides embedded blog content as a fallback:

1. Open `js/blog-post.js`
2. Find the `loadEmbeddedBlogContent` function
3. Add embedded content for your new blog post:
   ```javascript
   else if (postId === 'post4') {
       content = `# Your Blog Title
       
       *Published on Month X, 2023*
       
       Your blog content...`;
   }
   ```

### 4. Modify Contact Information

- Open `contact.html`
- Update contact information, or modify in `js/main.js`:
  ```javascript
  'email': 'your.email@example.com',
  'phone': 'Your Phone Number',
  'location': 'Your Location'
  ```

### 5. Modify Website Style

#### Color Scheme
- Open `styles/main.css`, modify CSS variables:
  ```css
  :root {
      --primary-color: #your-color;
      --secondary-color: #your-color;
      --accent-color: #your-color;
      --bg-gradient-start: #your-color;
      --bg-gradient-end: #your-color;
  }
  ```

#### Logo and Images
- Replace `images/logo.svg` with your own logo
- Replace `images/profile.jpg` with your personal photo
- Update blog images in the `images/blog/` directory

#### Fonts and Spacing
- Modify font and spacing settings in `styles/main.css`:
  ```css
  body {
      font-family: 'your-preferred-font', sans-serif;
      /* other styles */
  }
  ```

### 6. Add/Modify Page Elements

To add new text elements with multilingual support:

1. Add elements in HTML with `data-i18n` attribute:
   ```html
   <p data-i18n="new-element">New Content</p>
   ```

2. Add translations in the `translations` object in `js/main.js`:
   ```javascript
   'new-element': 'Chinese content',  // in zh object
   'new-element': 'English content',  // in en object
   ```

### 7. Website Structure Optimization

The website uses a clear multi-page structure, with each page having well-defined functions:

#### Simplified Homepage Design
- The homepage (`index.html`) only keeps the "About Me" section, removing duplicate paper, blog, and contact sections
- Uses navigation buttons to guide visitors to dedicated content pages:
  ```html
  <div class="cta-buttons">
      <a href="publications.html" class="btn primary-btn" data-i18n="view-publications">View Publications</a>
      <a href="blog.html" class="btn primary-btn" data-i18n="view-blog">Browse Blog</a>
      <a href="contact.html" class="btn primary-btn" data-i18n="contact-me">Contact Me</a>
  </div>
  ```
- This design keeps the homepage concise and focused, allowing users to quickly understand your core information

#### Professional Content Pages
- **Publications Page** (`publications.html`): Focuses on academic achievements and research papers
- **Blog Page** (`blog.html`): Uses optimized image-free list layout to display blog posts
- **Blog Detail Page** (`blog-post.html`): Displays complete blog content, supports Markdown and code highlighting
- **Contact Page** (`contact.html`): Provides contact methods and contact form

This structure optimization reduces page loading content, improves performance, and provides clearer user experience and content navigation.

## Local Development and Deployment

### Running a Local Server

Due to browser security restrictions, directly opening HTML files may not properly load Markdown files. It's recommended to use a local server to develop and preview the website:

1. **Using Python (Recommended)**:
   ```bash
   # Navigate to your website directory
   cd your-website-directory
   
   # Python 3
   python -m http.server 8080
   
   # Or Python 2
   python -m SimpleHTTPServer 8080
   ```
   Then visit http://localhost:8080

2. **Using Node.js**:
   - Install http-server: `npm install -g http-server`
   - Run: `http-server -p 8080`

3. **Using VSCode Live Server Plugin**:
   - Install the Live Server plugin
   - Right-click on an HTML file, select "Open with Live Server"

### Deploying with GitHub Pages (Detailed Steps)

GitHub Pages is a free static website hosting service provided by GitHub, perfect for deploying this personal resume website. Here are detailed deployment steps for beginners:

#### Step 1: Create a GitHub Account

1. Visit [GitHub's website](https://github.com/)
2. Click the "Sign up" button in the top right
3. Fill in username, email, and password
4. Complete the verification steps
5. Choose the free plan (Free)
6. Complete the registration process

#### Step 2: Create a New Repository

1. Log in to your GitHub account
2. Click the "+" icon in the top right, select "New repository"
3. In the "Repository name" field, enter: `yourusername.github.io`
   - For example, if your GitHub username is johndoe, enter `johndoe.github.io`
   - **Note**: You must strictly follow this format to use the default domain
4. Keep the repository "Public"
5. Click the "Create repository" button

#### Step 3: Upload Website Files (Using GitHub Web Interface)

If you're not familiar with Git command line, you can use GitHub's web interface to upload files:

1. On the new repository page, click the "uploading an existing file" link
2. Drag and drop all your website files to the upload area
   - Ensure you upload all files and folders, including HTML files, CSS, JavaScript, and images
   - If there are many files, you may need to upload in batches
3. At the bottom of the page, add a commit message (e.g., "Upload initial website files")
4. Click the "Commit changes" button

#### Step 4: Using GitHub Desktop (Easier Method)

If you have many files, using GitHub Desktop is more convenient:

1. Download and install [GitHub Desktop](https://desktop.github.com/)
2. Log in to your GitHub account
3. Click "Clone a repository from the Internet..."
4. Select your newly created repository (`yourusername.github.io`)
5. Choose a local folder to save the repository, click "Clone"
6. Copy your website files to the selected local folder
7. Return to GitHub Desktop, you'll see a list of changed files
8. Add a brief description in the lower left corner (e.g., "Add website files")
9. Click the "Commit to main" button
10. Then click the "Push origin" button at the top to upload to GitHub

#### Step 5: Enable GitHub Pages

1. Open your repository page on GitHub
2. Click the "Settings" tab at the top
3. In the left menu, click "Pages"
4. In the "Source" section, select "main" branch from the dropdown menu
5. Click the "Save" button
6. Wait a few minutes (usually 1-3 minutes), the page will display: "Your site is published at https://yourusername.github.io/"

#### Step 6: Access Your Website

1. Enter `https://yourusername.github.io/` in your browser
2. Your personal resume website is now online!
3. Share this link so others can access your resume website

#### Step 7: Update Website Content

When you need to update website content:

1. Modify website files locally
2. Using GitHub Desktop:
   - It will automatically show all changed files
   - Add a brief description
   - Click "Commit to main"
   - Click "Push origin" to upload changes
3. Or using the GitHub web interface:
   - Navigate to the file you want to modify
   - Click the edit icon (pencil icon)
   - Make your changes
   - Click "Commit changes"

Your website will usually update automatically within a few minutes.

#### Step 8: Custom Domain (Optional)

If you own a domain, you can set it up so visitors can access your website through your domain:

1. In your domain registrar's control panel (e.g., GoDaddy, NameCheap):
   - Add a CNAME record
   - Set the name/host to: www or @ (depending on whether you want to include www)
   - Set the value/points to: `yourusername.github.io`

2. In GitHub Pages settings:
   - Open your repository's "Settings" > "Pages"
   - Enter your domain in the "Custom domain" field (e.g., `www.yourdomain.com`)
   - Click "Save"
   - Recommend checking the "Enforce HTTPS" option for more secure access

3. Create a file named `CNAME` (no file extension) in the repository root:
   - The file content should only be your domain, e.g.: `www.yourdomain.com`
   - This can be created directly through the GitHub interface

DNS settings may take 24-48 hours to take effect, please be patient.

#### Frequently Asked Questions

1. **Website deployed but shows 404 error**
   - Confirm your repository name format is correct: `username.github.io`
   - Check if the `index.html` file exists in the root directory (must be in the root)
   - Try clearing your browser cache and retry

2. **Images not displaying**
   - Ensure all image paths are correct, use relative paths (like `images/profile.jpg`)
   - Check if case sensitivity matches (GitHub Pages is case-sensitive)

3. **Styles or scripts not loading**
   - Check if file paths are correct
   - Look for errors in the Console and Network tabs of browser developer tools

4. **Website not updating after changes**
   - GitHub Pages cache may take a few minutes to refresh
   - Try forcing a refresh in your browser (Ctrl+F5 or Cmd+Shift+R)

5. **Cannot push updates**
   - Ensure you have write permission to the repository
   - Check your network connection
   - Try refreshing GitHub Desktop or logging in again

Hosting your personal resume website through GitHub Pages is not only completely free but also has unlimited traffic, sufficient for general access needs.

### Troubleshooting

#### Blog Content Not Loading

1. **Check if using a local server**:
   - Browsers block JavaScript from loading local Markdown files when using the `file://` protocol
   - Solution: Use the local server methods described above to preview the website

2. **Encoding issues**:
   - Ensure Markdown files are saved with UTF-8 encoding
   - Avoid using Windows Notepad for editing, recommend VSCode, Sublime Text, etc.

3. **File paths**:
   - Confirm the corresponding Markdown files exist in the `posts/` directory
   - Check if the filename case matches (case-sensitive on some servers)

4. **Image issues**:
   - Ensure blog cover images exist in the `images/blog/` directory
   - Check if the image format is supported (JPG, PNG recommended)

#### Language Switching Issues

- Check if the translation object in `js/main.js` contains all text that needs translation
- Ensure HTML elements have the correct `data-i18n` attribute

## Blog System

The website includes a blog system using Markdown format:

1. **Create new blog posts**:
   - Create new Markdown files in the `posts/` directory (e.g., `post4.md`)
   - Write content following the existing format
   - Add new blog information in the `blogPosts` object in `js/blog-post.js`
   - Add new blog entries in `blog.html`

2. **Clean image-free design**:
   - Blog list uses text-only layout, no need for cover images
   - Uses colored left borders to distinguish different blog entries
   - Automatically switches to top border style on mobile devices
   - Includes title, date, category tags, and summary, emphasizing content

3. **Blog category tags**:
   - Each blog can add custom category tags
   - Use FontAwesome icons in `blog.html` to enhance visual effect:
   ```html
   <span class="blog-category"><i class="fas fa-tag"></i> Category Name</span>
   ```

4. **Markdown support**:
   - Supports standard Markdown syntax (headings, lists, links, images, etc.)
   - Code highlighting (using highlight.js)
   - Tables and quotes
   - See `posts/README.md` for complete Markdown formatting guide

5. **Multilingual support**:
   - Blog titles and dates support Chinese/English switching
   - Configure multilingual content in `js/blog-post.js`

6. **Responsive design**:
   - Displays as left border style on desktop
   - Automatically adjusts to top border style on tablets and phones
   - Blog metadata (date and tags) arranged vertically on mobile
   - Font size and spacing automatically adjust to different screens

7. **Compatibility mode**:
   - Website provides embedded blog content as a fallback
   - Automatically enabled when Markdown files cannot be loaded via network requests

## File Structure

```
personal-resume/
│
├── index.html           # Homepage/About Me page
├── publications.html    # Published papers page
├── blog.html            # Personal blog list page
├── blog-post.html       # Blog article detail page
├── contact.html         # Contact information page
├── styles/              # Style files
│   ├── main.css         # Main stylesheet
│   └── blog-post.css    # Blog detail page style
├── js/                  # JavaScript files
│   ├── main.js          # Main script file (includes language switching)
│   └── blog-post.js     # Blog detail page script
├── posts/               # Blog Markdown files
│   ├── post1.md
│   ├── post2.md
│   ├── post3.md
│   └── README.md        # Markdown formatting guide
├── images/              # Image resources
│   ├── logo.svg         # Website Logo
│   ├── profile.jpg      # Personal photo
│   └── blog/            # Blog images
│       ├── blog1.jpg
│       ├── blog2.jpg
│       ├── blog3.jpg
│       └── default.jpg  # Default/fallback image
└── README.md            # Project documentation
```

## Language Switching Feature

This website supports Chinese/English bilingual switching and maintains the selected language during page navigation:

- User language selection is saved in localStorage, ensuring consistency in future visits
- Page navigation links automatically add language parameters to maintain the current language after navigation
- All static text supports translation, which can be edited or added in the translations object in `main.js`

## Custom Contact Form

The current form is static. To enable actual submission functionality, modify the form submission event handler in `main.js` to add your own submission logic or backend API.

```javascript
// Form submission event
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Add your form submission logic here
        // Such as sending to a backend API or email service
    });
}
```

## Compatibility

This website is compatible with all modern browsers, including:
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers

## License

Free to use, can be freely modified to suit personal needs.

---

✨ Hope this template helps you showcase your professional image! 