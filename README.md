# AI Career Twin (Digital Shadow) ✨

A **premium, personalized** web application that creates a parallel digital version of your career trajectory based on skills, habits, and learning patterns.

## 🎯 Purpose

Help students and early professionals **visualize alternate career futures** through AI-powered simulation — not static predictions, but interactive exploration tools with a beautiful, modern interface.

## ✨ New Premium Features

### 🌟 Recent Enhancements
- **Personal Profile Section**: Add your photo, name, bio, and social media links
- **Dark Mode**: Toggle between light and dark themes with persistence
- **Data Persistence**: Auto-save and load your career data
- **Modern UI**: Gradients, glassmorphism, and smooth animations
- **Profile Management**: Edit your profile with a beautiful modal interface
- **Notification System**: Visual feedback for all actions
- **Export Options**: Share and export your results (PDF coming soon)
- **Enhanced Visualizations**: Improved charts with modern styling
- **Responsive Design**: Premium experience on all devices

## ⚙️ Key Features

### 1. **Personal Profile Hero**
- Customizable profile photo (placeholder/upload)
- Editable name, career title, and bio
- Social media links (LinkedIn, GitHub, Portfolio, Email)
- Live statistics (Skills count, Simulations run, Growth score)

### 2. **Career Twin Creation**
- Input current skills, learning frequency, interview preparation level, and career goals
- Save and load data functionality
- Creates a baseline "digital shadow" representing your current career state

### 3. **Career Simulation Engine**
- Simulates interview performance evolution over time
- Models skill growth, stagnation, or decay based on behaviors
- Outputs **probabilities and growth trends** (not guaranteed predictions)

### 4. **What-If Scenario Explorer**
- Adjust parameters: practice consistency, communication improvement, upskilling effort
- Real-time recalculation of alternate career trajectories
- Interactive controls for exploring different effort levels

### 5. **Outcome Comparison Dashboard**
- Side-by-side visualization of three paths:
  - **Risk Path**: Minimal effort scenario
  - **Current Path**: Based on your actual inputs
  - **Improved Path**: Optimized effort scenario
- Clear metrics with beautiful gradient cards

### 6. **Enhanced Visualizations**
- Professional line charts for skill growth timeline
- Bar charts for interview readiness comparison
- Smooth animations and modern styling
- Dark mode compatible

### 7. **Explainable Insights**
- Every outcome change includes simple explanations of **why** results changed
- Neutral, ethical language — no judgment or labeling
- Emphasizes simulation and exploration over absolute predictions

## 🎨 Design Philosophy

- **Premium & Modern**: Gradient backgrounds, glassmorphism effects
- **Smooth Animations**: Subtle transitions and hover effects
- **Professional UI**: Clean, state-of-the-art interface
- **Dark Mode Support**: Beautiful in both light and dark themes
- **Responsive Design**: Perfect on desktop, tablet, and mobile
- **Icon Integration**: Font Awesome icons throughout
- **Google Fonts**: Premium typography with Inter font family

## 🚀 Deploy on Vercel

1. Push this repo to GitHub (e.g. `https://github.com/vaishnavi861/codeathon`).
2. Go to [vercel.com](https://vercel.com) and sign in (GitHub or email).
3. Click **Add New** → **Project** and import your repo `vaishnavi861/codeathon`.
4. **Leave Root Directory empty** (app files are at repo root). Leave **Build Command** and **Output Directory** empty.
5. Click **Deploy**. Your app will be live at a `*.vercel.app` URL.

---

## 🚀 How to Run locally

1. **No installation required!** This is a pure frontend application
2. Simply open `index.html` in any modern web browser:
   - Chrome, Firefox, Edge, Safari all supported
3. The application runs entirely in your browser

### Quick Start
```bash
# Navigate to the project directory
cd "c:\Users\VAISHNAVI GANDEWAR\OneDrive\Desktop\codeathon 1"

# Open in your default browser (Windows)
start index.html

# Or simply double-click index.html in File Explorer
```

## 🎮 How to Use

1. **First Time Setup**:
   - Click the "Edit Profile" button (pencil icon) on your profile image
   - Add your name, career title, bio, and social links
   - Click "Save Profile" - your data will be saved automatically

2. **Create Your Career Twin**:
   - Fill in the "Create Career Twin" form with your skills and goals
   - Adjust the sliders for your learning habits
   - Click "Create Career Twin" to generate simulations
   - Use "Save Data" to save your inputs for later

3. **Explore Scenarios**:
   - Adjust the "What-If Scenario Explorer" sliders
   - Click "Recalculate Scenarios" to see different outcomes
   - Compare Risk, Current, and Improved paths

4. **Customize Your Experience**:
   - Toggle dark mode with the moon/sun icon in navigation
   - Your theme preference is saved automatically
   - All your data persists between sessions

5. **Share Results**:
   - Click "Export PDF" or "Share" buttons in the results section
   - Copy link to clipboard to share with others

   6. **Soft Skill Gap Detector++**:
      - Navigate to the "Soft Skill Gap Detector++" section on the homepage
      - Answer the three short interview-style questions (Behavioral, Technical, HR)
      - Click "Analyze Answers" to get a neutral, explainable assessment
      - Use simulation toggles to preview improvements (structure, examples, reduce fillers)
      - Previous assessment is saved locally for quick comparison

## 📊 Technologies Used

- **HTML5**: Semantic, accessible structure
- **CSS3**: Modern styling with CSS variables, gradients, glassmorphism
- **JavaScript (ES6+)**: Application logic and simulation engine
- **Chart.js**: Professional data visualization
- **Font Awesome**: Beautiful, scalable icons
- **Google Fonts (Inter)**: Premium typography
- **LocalStorage API**: Data persistence
- **jsPDF**: PDF export capability (coming soon)

## 🎨 UI/UX Features

### Modern Styling
- **Gradient Colors**: Purple-blue primary, orange-pink secondary, teal success
- **Glassmorphism**: Semi-transparent cards with backdrop blur
- **Smooth Transitions**: 0.3s cubic-bezier animations
- **Hover Effects**: Lift and shadow effects on cards
- **Border Radius**: Consistent 8px/16px rounded corners

### Interactive Elements
- **Range Sliders**: Custom-styled with gradient tracks
- **Buttons**: Multiple styles (primary, secondary, gradient, outline)
- **Modal Window**: Beautiful profile editor with smooth animations
- **Notifications**: Toast-style messages for user feedback
- **Smooth Scrolling**: Navigate sections seamlessly

### Responsive Breakpoints
- **Desktop**: 1200px+ (full featured layout)
- **Tablet**: 768px-1199px (adjusted grid layouts)
- **Mobile**: < 768px (stacked layouts, optimized for touch)

## 🔒 Ethical AI Principles

This application adheres to strict ethical constraints:

- ❌ **NO guaranteed success/failure predictions**
- ❌ **NO user rankings or comparisons with others**
- ❌ **NO personality, mental health, or personal trait inferences**
- ✅ **Emphasizes simulation, exploration, and learning**
- ✅ **Uses neutral, non-judgmental language throughout**
- ✅ **Clearly labeled as exploratory models, not guarantees**

## 📁 Project Structure

```
codeathon 1/
├── index.html          # Enhanced structure with profile section and modal
├── styles.css          # Premium styling with gradients and dark mode
├── app.js              # Extended logic with profile & data management
└── README.md           # This file (updated with new features)
```

## 🧮 How the Simulation Works

### Skill Growth Calculation
- Based on learning hours per week and practice consistency
- Models compound growth over 12 months
- Formula: `baseGrowth × consistencyMultiplier × timeframe`

### Interview Readiness Score
- Weighted combination of:
  - Interview preparation (40%)
  - Communication skills (35%)
  - Practice consistency (25%)
- Scored on 0-100 scale

### Success Probability
- Combines skill growth and interview readiness
- Presented as percentage probability
- **Note**: This is a simulation model, not a prediction

## 🎯 Future Enhancements

- ✅ Personal profile section with editable details
- ✅ Dark mode toggle with persistence
- ✅ Data save/load functionality
- ✅ Modern gradient-based UI
- ✅ Notification system
- 🔄 PDF export functionality (in progress)
- 📱 Progressive Web App (PWA) support
- 🌐 Multi-language support
- 📊 Additional chart types (radar, doughnut)
- 💾 Cloud sync for cross-device access
- 🎨 Custom theme builder

## 💡 Use Cases

- **Hackathons**: Premium, demo-ready professional application
- **Career Platforms**: Integration into career guidance systems
- **Educational Institutions**: Student career exploration tool
- **Personal Development**: Self-assessment and planning
- **Portfolio Projects**: Showcase modern web development skills

## 🎨 Color Palette

### Light Mode
- Primary: `#667eea` (Purple-blue)
- Secondary: `#f093fb` (Pink)
- Success: `#11998e` (Teal)
- Warning: `#f5a623` (Orange)
- Background: `#ffffff` / `#f8f9fa`

### Dark Mode
- Background: `#0f172a` / `#1e293b`
- Text: `#f1f5f9`
- Borders: `#334155`

## 📝 License

This is an educational project created for hackathons and learning purposes.

## 👤 Customization Guide

### Adding Your Details

1. **Profile Information**:
   - Click the edit button (pencil icon) on the profile hero
   - Fill in your name, title, and bio
   - Add your LinkedIn, GitHub, Portfolio, and Email links

2. **Profile Photo**:
   - Currently shows a placeholder icon
   - To add your photo: Replace the placeholder in `index.html` or add image upload functionality

3. **Branding**:
   - Edit colors in `:root` section of `styles.css`
   - Modify `--gradient-primary`, `--gradient-secondary`, etc.
   - Change font by updating the Google Fonts import

## 🚀 Advanced Features

### Data Persistence
- Profile data stored in `localStorage` as `aiCareerTwin_profile`
- Career twin data stored as `aiCareerTwin_data`
- Theme preference stored as `aiCareerTwin_theme`

### Notification System
- Auto-dismissing toast notifications
- Slide-in/slide-out animations
- Positioned top-right for visibility

### Modal System
- Click-outside-to-close functionality
- Smooth fade-in animations
- Form validation and data binding

---

**Remember**: This tool is for exploration, not prediction. Your actual career path depends on many factors beyond what any simulation can model. Use it as a thinking tool and motivation for your career development journey! ✨

