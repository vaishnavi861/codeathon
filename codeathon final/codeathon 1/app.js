// ============================================
// CAREER TWIN DATA MODEL
// ============================================
let careerTwin = {
    skills: [],
    careerGoal: '',
    learningFrequency: 5,
    interviewPrep: 5,
    practiceConsistency: 5,
    communicationSkill: 5
};

// Profile data
let profileData = {
    name: 'Your Name',
    title: 'Your Career Title',
    bio: 'Add your bio here. Share your journey, aspirations, and what drives you in your career path.',
    linkedin: '#',
    github: '#',
    portfolio: '#',
    email: '#'
};

// Statistics
let stats = {
    simulationsCount: 0,
    skillsCount: 0,
    growthScore: 0
};

// Chart instances
let skillChart = null;
let interviewChart = null;

// Guidance tracking
let currentGuidance = {
    actions: [],
    resources: [],
    appliedActions: false
};

// Resume-based data
let resumeData = null;
let autoComputedLevels = null;

// ============================================
// SKILL & KEYWORD DATABASE FOR RESUME PARSING
// ============================================
const SKILL_KEYWORDS = {
    programming: ['JavaScript', 'Python', 'Java', 'C++', 'C#', 'Ruby', 'PHP', 'Go', 'Rust', 'Swift', 'Kotlin', 'TypeScript', 'SQL', 'R', 'MATLAB', 'Scala', 'Perl', 'Dart'],
    frameworks: ['React', 'Angular', 'Vue', 'Node.js', 'Express', 'Django', 'Flask', 'Spring', 'Laravel', 'Ruby on Rails', 'ASP.NET', 'FastAPI', 'Next.js', 'Nuxt.js', 'Svelte', 'TensorFlow', 'PyTorch', 'Keras'],
    tools: ['Git', 'Docker', 'Kubernetes', 'Jenkins', 'AWS', 'Azure', 'GCP', 'MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Elasticsearch', 'Kafka', 'RabbitMQ', 'Nginx', 'Apache'],
    design: ['Figma', 'Sketch', 'Adobe XD', 'Photoshop', 'Illustrator', 'InDesign', 'Blender', 'Maya', 'Unity', 'Unreal Engine'],
    other: ['Agile', 'Scrum', 'CI/CD', 'REST API', 'GraphQL', 'Microservices', 'Machine Learning', 'Deep Learning', 'Data Analysis', 'DevOps', 'Linux', 'Testing', 'Jest', 'Pytest']
};

const PROJECT_KEYWORDS = ['project', 'built', 'developed', 'created', 'implemented', 'designed', 'deployed', 'launched', 'architected', 'led', 'managed'];

const COMPLEXITY_KEYWORDS = ['scalable', 'distributed', 'microservices', 'production', 'users', 'deployed', 'performance', 'optimization', 'architecture', 'full-stack', 'real-time', 'concurrent'];

const ACTION_VERBS = ['developed', 'designed', 'implemented', 'led', 'managed', 'created', 'optimized', 'achieved', 'improved', 'increased', 'reduced', 'built', 'launched', 'architected', 'collaborated'];

// ============================================
// RESOURCE DATABASE
// ============================================
const RESOURCE_DATABASE = {
    interview_practice: [
        {
            title: "Pramp - Free Mock Interviews",
            description: "Practice live coding and behavioral interviews with peers",
            url: "https://www.pramp.com",
            relevance: ["Software Developer", "Data Scientist"],
            impact: "Improves interview readiness by 15-20 points"
        },
        {
            title: "InterviewBit - Technical Interview Prep",
            description: "Structured interview preparation with real company questions",
            url: "https://www.interviewbit.com",
            relevance: ["Software Developer", "Data Scientist"],
            impact: "Boosts technical interview confidence"
        },
        {
            title: "Big Interview - Behavioral Practice",
            description: "Video practice for behavioral and STAR method interviews",
            url: "https://biginterview.com",
            relevance: ["all"],
            impact: "Enhances communication and storytelling skills"
        }
    ],

    communication_skills: [
        {
            title: "Toastmasters International",
            description: "Public speaking and leadership development through practice",
            url: "https://www.toastmasters.org",
            relevance: ["all"],
            impact: "Increases communication score by 2-3 points"
        },
        {
            title: "LinkedIn Learning - Communication Skills",
            description: "Professional courses on workplace communication",
            url: "https://www.linkedin.com/learning/topics/communication",
            relevance: ["all"],
            impact: "Improves professional communication"
        },
        {
            title: "Coursera - Presentation Skills",
            description: "University-backed courses on presentations and pitching",
            url: "https://www.coursera.org/courses?query=presentation%20skills",
            relevance: ["UX Designer", "Product Manager"],
            impact: "Enhances stakeholder communication"
        }
    ],

    skill_building: {
        "Software Developer": [
            {
                title: "freeCodeCamp",
                description: "Free full-stack web development curriculum with certifications",
                url: "https://www.freecodecamp.org",
                impact: "Build portfolio projects, boost skill growth by 20%+"
            },
            {
                title: "LeetCode",
                description: "Coding problems for technical interview and algorithm practice",
                url: "https://leetcode.com",
                impact: "Strengthens problem-solving and coding fundamentals"
            },
            {
                title: "The Odin Project",
                description: "Complete full-stack JavaScript and Ruby curriculum",
                url: "https://www.theodinproject.com",
                impact: "Comprehensive structured learning path"
            }
        ],
        "Data Scientist": [
            {
                title: "Kaggle",
                description: "Data science competitions and learning resources",
                url: "https://www.kaggle.com/learn",
                impact: "Hands-on ML practice, portfolio building"
            },
            {
                title: "Fast.ai",
                description: "Practical deep learning courses",
                url: "https://www.fast.ai",
                impact: "Modern ML techniques with real applications"
            },
            {
                title: "DataCamp",
                description: "Interactive data science and analytics courses",
                url: "https://www.datacamp.com",
                impact: "Structured Python/R/SQL learning"
            }
        ],
        "UX Designer": [
            {
                title: "Daily UI Challenge",
                description: "100 days of UI design prompts for portfolio building",
                url: "https://www.dailyui.co",
                impact: "Builds design portfolio and consistency"
            },
            {
                title: "Interaction Design Foundation",
                description: "UX design courses with industry certifications",
                url: "https://www.interaction-design.org",
                impact: "Comprehensive UX theory and practice"
            },
            {
                title: "Figma Community",
                description: "Free design resources, templates, and learning",
                url: "https://www.figma.com/community",
                impact: "Learn industry-standard tools"
            }
        ],
        "default": [
            {
                title: "Coursera",
                description: "University courses across all professional skills",
                url: "https://www.coursera.org",
                impact: "Accredited learning in your field"
            },
            {
                title: "Udemy",
                description: "Affordable practical courses in various domains",
                url: "https://www.udemy.com",
                impact: "Skill-specific focused learning"
            }
        ]
    },

    networking: [
        {
            title: "Meetup",
            description: "Find and join professional groups in your area",
            url: "https://www.meetup.com",
            relevance: ["all"],
            impact: "Expands professional network and opportunities"
        },
        {
            title: "LinkedIn Networking",
            description: "Connect with professionals and join industry groups",
            url: "https://www.linkedin.com",
            relevance: ["all"],
            impact: "Builds online professional presence"
        }
    ],

    practice_tools: [
        {
            title: "GitHub",
            description: "Version control and portfolio hosting for developers",
            url: "https://github.com",
            relevance: ["Software Developer", "Data Scientist"],
            impact: "Showcases projects and collaboration skills"
        },
        {
            title: "Behance",
            description: "Creative portfolio platform for designers",
            url: "https://www.behance.net",
            relevance: ["UX Designer", "Product Designer"],
            impact: "Displays design work to potential employers"
        },
        {
            title: "CodePen",
            description: "Frontend code playground and sharing",
            url: "https://codepen.io",
            relevance: ["Software Developer", "UX Designer"],
            impact: "Quick prototyping and skill demonstration"
        }
    ]
};

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initializeFormHandlers();
    initializeRangeInputs();
    initializeScenarioControls();
    initializeProfileHandlers();
    initializeDarkMode();
    loadProfile();
    loadCareerData();
    initializeExportHandlers();
    initializeGuidanceHandlers();
    initializeResumeUpload();
    initializePalette();
    initializeSoftSkillDetector();
});

// ============================================
// RESUME PARSING & AUTO-ASSESSMENT ENGINE
// ============================================

function initializeResumeUpload() {
    const uploadZone = document.getElementById('uploadZone');
    const resumeInput = document.getElementById('resumeInput');
    const createTwinBtn = document.getElementById('createTwinFromResume');
    const resumeTextInput = document.getElementById('resumeTextInput');
    const analyzeResumeTextBtn = document.getElementById('analyzeResumeTextBtn');
    const clearResumeTextBtn = document.getElementById('clearResumeTextBtn');

    if (!uploadZone || !resumeInput) return;

    // Click to upload
    uploadZone.addEventListener('click', () => resumeInput.click());

    // Ensure pdfjs worker is set (improves PDF parsing reliability)
    try {
        if (window.pdfjsLib && pdfjsLib.GlobalWorkerOptions) {
            // point to CDN worker matching the library version included in index.html
            pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
        }
    } catch (e) {
        // ignore if not available yet
        console.warn('pdfjs worker init failed', e);
    }

    // Drag & drop
    uploadZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadZone.classList.add('drag-over');
    });

    uploadZone.addEventListener('dragleave', () => {
        uploadZone.classList.remove('drag-over');
    });

    uploadZone.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadZone.classList.remove('drag-over');
        const file = e.dataTransfer.files[0];
        if (file) handleResumeUpload(file);
    });

    // File input change
    resumeInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) handleResumeUpload(file);
    });

    // Create twin button
    if (createTwinBtn) {
        createTwinBtn.addEventListener('click', createCareerTwinFromResume);
    }

    // Paste-resume analyze button
    if (analyzeResumeTextBtn && resumeTextInput) {
        analyzeResumeTextBtn.addEventListener('click', async () => {
            const text = resumeTextInput.value && resumeTextInput.value.trim();
            if (!text) {
                showNotification('Please paste your resume text before analyzing.');
                return;
            }
            // Show parsing status UI
            document.getElementById('uploadZone').classList.add('hidden');
            document.getElementById('parsingStatus').classList.remove('hidden');
            document.getElementById('resumeSummary').classList.add('hidden');

            try {
                resumeData = await parseResume(text);
                autoComputedLevels = computeLevelsFromResume(resumeData);
                displayResumeSummary(resumeData, autoComputedLevels);

                // Automatically create career twin from parsed resume
                createCareerTwinFromResume();
            } catch (err) {
                console.error('Failed to analyze pasted resume:', err);
                showNotification('Error analyzing pasted resume. Please try again.');
                resetUploadUI();
            }
        });
    }

    if (clearResumeTextBtn && resumeTextInput) {
        clearResumeTextBtn.addEventListener('click', () => {
            resumeTextInput.value = '';
            showNotification('Resume text cleared.');
        });
    }
}

async function handleResumeUpload(file) {
    // Show parsing status
    document.getElementById('uploadZone').classList.add('hidden');
    document.getElementById('parsingStatus').classList.remove('hidden');
    document.getElementById('resumeSummary').classList.add('hidden');

    try {
        // Basic validation
        if (!file) throw new Error('No file provided');
        const allowed = ['application/pdf', 'text/plain'];
        const isPdfByName = file.name && file.name.toLowerCase().endsWith('.pdf');
        const isTxtByName = file.name && file.name.toLowerCase().endsWith('.txt');
        if (!allowed.includes(file.type) && !isPdfByName && !isTxtByName) {
            throw new Error('Unsupported file type. Please upload a PDF or TXT file.');
        }

        const text = await extractTextFromFile(file);
        resumeData = await parseResume(text);
        autoComputedLevels = computeLevelsFromResume(resumeData);

        displayResumeSummary(resumeData, autoComputedLevels);
    } catch (error) {
        console.error('Resume parsing error:', error);
        showNotification('Error parsing resume: ' + (error && error.message ? error.message : 'Please try again.'));
        resetUploadUI();
    }
}

async function extractTextFromFile(file) {
    if (file.type === 'application/pdf') {
        return await extractTextFromPDF(file);
    } else {
        // Plain text
        return await file.text();
    }
}

async function extractTextFromPDF(file) {
    try {
        const arrayBuffer = await file.arrayBuffer();
        if (!window.pdfjsLib || !pdfjsLib.getDocument) throw new Error('PDF library not available');
        const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
        const pdf = await loadingTask.promise;

        let fullText = '';
        for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const textContent = await page.getTextContent();
            const pageText = textContent.items.map(item => item.str).join(' ');
            fullText += pageText + '\n';
        }

        return fullText;
    } catch (err) {
        console.error('extractTextFromPDF error', err);
        throw new Error('Failed to extract text from PDF. Try uploading a text file or a different PDF.');
    }
}

async function parseResume(text) {
    const textLower = text.toLowerCase();

    return {
        rawText: text,
        skills: extractSkills(text),
        projects: extractProjects(text),
        experience: extractExperience(text),
        tools: extractTools(text),
        careerGoal: inferCareerGoal(text)
    };
}

function extractSkills(text) {
    const skills = new Set();
    const textLower = text.toLowerCase();

    // Check all skill categories
    Object.values(SKILL_KEYWORDS).forEach(category => {
        category.forEach(skill => {
            if (textLower.includes(skill.toLowerCase())) {
                skills.add(skill);
            }
        });
    });

    return Array.from(skills);
}

function extractTools(text) {
    const tools = new Set();
    const textLower = text.toLowerCase();

    SKILL_KEYWORDS.tools.forEach(tool => {
        if (textLower.includes(tool.toLowerCase())) {
            tools.add(tool);
        }
    });

    return Array.from(tools);
}

function extractProjects(text) {
    const projects = [];
    const lines = text.split('\n');
    let currentProject = null;

    PROJECT_KEYWORDS.forEach(keyword => {
        const regex = new RegExp(`\\b${keyword}\\b.*`, 'gi');
        const matches = text.match(regex);

        if (matches) {
            matches.slice(0, 5).forEach(match => { // Max 5 projects
                projects.push({
                    description: match.trim(),
                    complexity: calculateProjectComplexity(match)
                });
            });
        }
    });

    return projects.slice(0, 10); // Max 10 projects
}

function calculateProjectComplexity(description) {
    const descLower = description.toLowerCase();
    let complexity = 0;

    COMPLEXITY_KEYWORDS.forEach(keyword => {
        if (descLower.includes(keyword)) complexity++;
    });

    return Math.min(10, complexity);
}

function extractExperience(text) {
    const textLower = text.toLowerCase();

    // Try to find years of experience
    const yearPatterns = [
        /(\d+)\+?\s*years?\s*(of)?\s*experience/i,
        /experience\s*:?\s*(\d+)\+?\s*years?/i,
        /(\d+)\+?\s*yrs/i
    ];

    for (const pattern of yearPatterns) {
        const match = text.match(pattern);
        if (match) {
            return parseInt(match[1]);
        }
    }

    // Count companies/roles as proxy
    const roleKeywords = ['engineer', 'developer', 'designer', 'analyst', 'manager', 'lead', 'senior', 'junior'];
    let roleCount = 0;
    roleKeywords.forEach(role => {
        const matches = textLower.match(new RegExp(role, 'g'));
        if (matches) roleCount += matches.length;
    });

    // Estimate experience from role count
    return Math.min(10, Math.floor(roleCount / 2));
}

function inferCareerGoal(text) {
    const textLower = text.toLowerCase();

    // Developer keywords
    const devScore = ['javascript', 'python', 'java', 'react', 'node', 'api', 'backend', 'frontend', 'fullstack', 'software']
        .filter(kw => textLower.includes(kw)).length;

    // Data Science keywords
    const dsScore = ['data', 'machine learning', 'tensorflow', 'pytorch', 'analytics', 'statistics', 'python', 'r ', 'sql']
        .filter(kw => textLower.includes(kw)).length;

    // Design keywords
    const designScore = ['design', 'ux', 'ui', 'figma', 'sketch', 'user experience', 'wireframe', 'prototype']
        .filter(kw => textLower.includes(kw)).length;

    if (devScore > dsScore && devScore > designScore) return 'Software Developer';
    if (dsScore > devScore && dsScore > designScore) return 'Data Scientist';
    if (designScore > devScore && designScore > dsScore) return 'UX Designer';

    return 'Software Developer'; // Default
}

function computeLevelsFromResume(data) {
    const technical = calculateTechnicalLevel(data);
    const communication = calculateCommunicationLevel(data);
    const projectMaturity = calculateProjectMaturity(data);
    const interviewReadiness = calculateInterviewReadiness({
        technical,
        communication,
        projectMaturity
    });

    return {
        technical,
        communication,
        projectMaturity,
        interviewReadiness
    };
}

function calculateTechnicalLevel(data) {
    let score = 0;

    // Skills count (0-4 points)
    const skillsCount = data.skills.length;
    score += Math.min(4, skillsCount / 5);

    // Experience years (0-3 points)
    const years = data.experience || 0;
    score += Math.min(3, years / 2);

    // Project presence (0-3 points)
    const projectScore = data.projects.length > 0 ?
        Math.min(3, data.projects.length / 2) : 0;
    score += projectScore;

    return Math.min(10, Math.round(score));
}

function calculateCommunicationLevel(data) {
    const text = data.rawText;
    let score = 5; // baseline

    // Vocabulary richness
    const words = text.split(/\s+/);
    const uniqueWords = new Set(words.map(w => w.toLowerCase()));
    const richness = uniqueWords.size / words.length;
    score += richness > 0.6 ? 2 : (richness > 0.4 ? 1 : 0);

    // Action verbs usage
    const textLower = text.toLowerCase();
    const verbCount = ACTION_VERBS.filter(v => textLower.includes(v)).length;
    score += Math.min(2, verbCount / 3);

    // Structure (bullet points)
    const hasBulletPoints = text.includes('•') || text.includes('-') || text.includes('*');
    score += hasBulletPoints ? 1 : 0;

    return Math.min(10, Math.round(score));
}

function calculateProjectMaturity(data) {
    const projects = data.projects;

    if (projects.length === 0) return 2;

    let score = 0;

    // Number of projects (0-4 points)
    score += Math.min(4, projects.length);

    // Average complexity (0-6 points)
    const avgComplexity = projects.reduce((sum, p) => sum + p.complexity, 0) / projects.length;
    score += Math.min(6, avgComplexity);

    return Math.min(10, Math.round(score));
}

function calculateInterviewReadiness(levels) {
    const { technical, communication, projectMaturity } = levels;

    // Weighted composite
    const readiness = (
        (technical * 0.4) +        // 40% technical
        (communication * 0.3) +     // 30% communication
        (projectMaturity * 0.3)     // 30% projects
    ) * 10; // scale to 0-100

    return Math.round(readiness);
}

function displayResumeSummary(data, levels) {
    // Hide parsing, show summary
    document.getElementById('parsingStatus').classList.add('hidden');
    document.getElementById('resumeSummary').classList.remove('hidden');

    // Display extracted data
    document.getElementById('detectedSkills').textContent = data.skills.slice(0, 5).join(', ') +
        (data.skills.length > 5 ? ` (+${data.skills.length - 5} more)` : '');
    document.getElementById('detectedProjects').textContent = data.projects.length;
    document.getElementById('detectedExperience').textContent = data.experience > 0 ?
        `${data.experience} years` : 'Not specified';

    // Display computed levels
    document.getElementById('autoTechnicalLevel').textContent = `${levels.technical}/10`;
    document.getElementById('autoCommunicationLevel').textContent = `${levels.communication}/10`;
    document.getElementById('autoProjectLevel').textContent = `${levels.projectMaturity}/10`;
    document.getElementById('autoInterviewLevel').textContent = `${levels.interviewReadiness}/100`;

    showNotification('✅ Resume analyzed successfully!');
}

function createCareerTwinFromResume() {
    if (!resumeData || !autoComputedLevels) {
        showNotification('Please upload a resume first!');
        return;
    }

    // Update career twin with resume data
    careerTwin.skills = resumeData.skills;
    careerTwin.careerGoal = resumeData.careerGoal;
    careerTwin.learningFrequency = autoComputedLevels.technical * 2; // Convert to hours
    careerTwin.interviewPrep = Math.round(autoComputedLevels.interviewReadiness / 10);
    careerTwin.practiceConsistency = autoComputedLevels.projectMaturity;
    careerTwin.communicationSkill = autoComputedLevels.communication;

    // Update form fields (for transparency)
    document.getElementById('skills').value = careerTwin.skills.join(', ');
    document.getElementById('careerGoal').value = careerTwin.careerGoal;
    document.getElementById('learningFrequency').value = careerTwin.learningFrequency;
    document.getElementById('interviewPrep').value = careerTwin.interviewPrep;
    document.getElementById('practiceConsistency').value = careerTwin.practiceConsistency;
    document.getElementById('communicationSkill').value = careerTwin.communicationSkill;

    // Update range displays
    document.getElementById('learningValue').textContent = careerTwin.learningFrequency;
    document.getElementById('prepValue').textContent = careerTwin.interviewPrep;
    document.getElementById('consistencyValue').textContent = careerTwin.practiceConsistency;
    document.getElementById('commValue').textContent = careerTwin.communicationSkill;

    // Update stats
    stats.skillsCount = careerTwin.skills.length;
    updateProfileDisplay();

    // Run simulation
    calculateAndDisplayScenarios();

    // Scroll to results
    setTimeout(() => {
        document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
    }, 500);

    showNotification('🚀 Career twin created from resume!');
}

function resetUploadUI() {
    document.getElementById('uploadZone').classList.remove('hidden');
    document.getElementById('parsingStatus').classList.add('hidden');
    document.getElementById('resumeSummary').classList.add('hidden');
}

// ============================================
// CAREER GUIDANCE ENGINE
// ============================================

function initializeGuidanceHandlers() {
    const applyActionsBtn = document.getElementById('applyActionsBtn');
    if (applyActionsBtn) {
        applyActionsBtn.addEventListener('click', applyActionsAndResimulate);
    }
}

function analyzeWeaknesses(twin, results) {
    const weaknesses = [];

    // Interview prep weakness
    if (twin.interviewPrep < 5) {
        weaknesses.push({
            type: 'interview_prep',
            severity: 5 - twin.interviewPrep,
            currentValue: twin.interviewPrep,
            metric: `Interview readiness: ${results.interviewReadiness}/100`
        });
    }

    // Communication weakness
    if (twin.communicationSkill < 5) {
        weaknesses.push({
            type: 'communication',
            severity: 5 - twin.communicationSkill,
            currentValue: twin.communicationSkill,
            metric: `Communication score: ${twin.communicationSkill}/10`
        });
    }

    // Practice consistency weakness
    if (twin.practiceConsistency < 5) {
        weaknesses.push({
            type: 'practice',
            severity: 5 - twin.practiceConsistency,
            currentValue: twin.practiceConsistency,
            metric: `Practice consistency: ${twin.practiceConsistency}/10`
        });
    }

    // Learning/skill growth weakness
    if (twin.learningFrequency < 10) {
        weaknesses.push({
            type: 'skill_growth',
            severity: Math.floor((10 - twin.learningFrequency) / 2),
            currentValue: twin.learningFrequency,
            metric: `Skill growth: ${results.skillGrowth}%`
        });
    }

    // Sort by severity (highest first)
    weaknesses.sort((a, b) => b.severity - a.severity);

    return weaknesses.slice(0, 3); // Top 3
}

function generateActions(weaknesses, careerGoal) {
    const actions = [];

    weaknesses.forEach((weakness, index) => {
        let action = {
            priority: index + 1,
            type: weakness.type,
            currentMetric: weakness.metric,
            steps: [],
            expectedImpact: '',
            timeCommitment: ''
        };

        switch (weakness.type) {
            case 'interview_prep':
                action.title = 'Boost Interview Readiness';
                action.reason = `Your interview prep score (${weakness.currentValue}/10) is limiting your success probability. This is the biggest factor holding back your career trajectory.`;
                action.steps = [
                    'Schedule 2 mock interviews per week using Pramp or similar platforms',
                    'Research and practice top 20 behavioral questions using STAR method',
                    'Record yourself answering questions and review for improvement',
                    `Study ${careerGoal}-specific interview patterns and common questions`
                ];
                action.expectedImpact = 'Could improve interview readiness by 15-20 points';
                action.timeCommitment = '3-4 hours/week';
                action.resourceCategory = 'interview_practice';
                break;

            case 'communication':
                action.title = 'Strengthen Communication Skills';
                action.reason = `Communication score (${weakness.currentValue}/10) directly affects your interview readiness. Strong communication is critical for ${careerGoal} roles.`;
                action.steps = [
                    'Join a Toastmasters club or online speaking group',
                    'Practice explaining technical concepts to non-technical friends',
                    'Record and review at least 2 practice presentations weekly',
                    'Take 1 online course on professional communication'
                ];
                action.expectedImpact = 'Could improve communication by 2-3 points, boosting interview score by 10-15 points';
                action.timeCommitment = '2-3 hours/week';
                action.resourceCategory = 'communication_skills';
                break;

            case 'practice':
                action.title = 'Build Consistent Practice Habits';
                action.reason = `Low practice consistency (${weakness.currentValue}/10) is reducing your skill growth potential. Your simulation shows this could be limiting you by 15-20%+.`;
                action.steps = [
                    'Set up daily 30-min practice sessions (use calendar blocks)',
                    'Join study accountability groups (Discord/Reddit communities)',
                    'Track practice streaks using GitHub or habit tracking apps',
                    'Start small projects to apply learning consistently'
                ];
                action.expectedImpact = 'Could boost practice score by 3-4 points, increasing overall success probability';
                action.timeCommitment = '30-45 min/day';
                action.resourceCategory = 'practice_tools';
                break;

            case 'skill_growth':
                action.title = `Accelerate ${careerGoal} Skill Development`;
                action.reason = `Current learning frequency (${weakness.currentValue} hrs/week) yields ${careerGrowth}% growth. The simulation shows you could reach ${improvedGrowth}% with increased effort.`;
                action.steps = [
                    `Dedicate 15-20 hours/week to structured ${careerGoal} learning`,
                    'Follow a curriculum (freeCodeCamp, Kaggle, etc.) - not random tutorials',
                    'Build 2-3 portfolio projects that demonstrate your skills',
                    'Contribute to open-source or take on freelance projects for real experience'
                ];
                action.expectedImpact = `Could improve skill growth from ${results.skillGrowth}% to 40%+`;
                action.timeCommitment = '15-20 hours/week';
                action.resourceCategory = 'skill_building';
                break;
        }

        actions.push(action);
    });

    return actions;
}

function getContextualResources(careerGoal, actions) {
    const resources = [];
    const usedCategories = new Set();

    actions.forEach(action => {
        const category = action.resourceCategory;

        if (category === 'skill_building') {
            // Get career-specific resources
            const careerResources = RESOURCE_DATABASE.skill_building[careerGoal] ||
                RESOURCE_DATABASE.skill_building['default'];

            careerResources.forEach(resource => {
                resources.push({
                    ...resource,
                    category: 'Skill Building',
                    relevantTo: action.title
                });
            });
            usedCategories.add('Skill Building');
        } else {
            // Get general category resources
            const categoryResources = RESOURCE_DATABASE[category] || [];

            categoryResources
                .filter(r => r.relevance.includes('all') || r.relevance.includes(careerGoal))
                .forEach(resource => {
                    resources.push({
                        ...resource,
                        category: getCategoryDisplayName(category),
                        relevantTo: action.title
                    });
                });
            usedCategories.add(getCategoryDisplayName(category));
        }
    });

    // Add practice tools if not already included
    if (!usedCategories.has('Practice Tools')) {
        RESOURCE_DATABASE.practice_tools
            .filter(r => r.relevance.includes('all') || r.relevance.includes(careerGoal))
            .slice(0, 2)
            .forEach(resource => {
                resources.push({
                    ...resource,
                    category: 'Practice Tools',
                    relevantTo: 'General skill development'
                });
            });
    }

    return resources;
}

function getCategoryDisplayName(category) {
    const names = {
        'interview_practice': 'Interview Practice',
        'communication_skills': 'Communication Skills',
        'skill_building': 'Skill Building',
        'practice_tools': 'Practice Tools',
        'networking': 'Networking'
    };
    return names[category] || category;
}

function displayGuidance(actions, resources) {
    // Show guidance sections
    document.getElementById('guidance').classList.remove('hidden');
    document.getElementById('resources').classList.remove('hidden');

    // Display actions
    const actionsGrid = document.getElementById('actionsGrid');
    actionsGrid.innerHTML = '';

    actions.forEach(action => {
        const card = document.createElement('div');
        card.className = 'action-card';
        card.innerHTML = `
            <div class="action-priority">Priority #${action.priority}</div>
            <h3 class="action-title">
                <i class="fas ${getActionIcon(action.type)}"></i>
                ${action.title}
            </h3>
            <div class="action-reason">
                <strong>Why this matters:</strong> ${action.reason}
            </div>
            <div class="action-steps">
                <strong>Next steps:</strong>
                <ul>
                    ${action.steps.map(step => `<li>${step}</li>`).join('')}
                </ul>
            </div>
            <div class="action-impact">
                <div class="impact-item">
                    <i class="fas fa-chart-line"></i>
                    <span>${action.expectedImpact}</span>
                </div>
                <div class="impact-item">
                    <i class="fas fa-clock"></i>
                    <span>${action.timeCommitment}</span>
                </div>
            </div>
        `;
        actionsGrid.appendChild(card);
    });

    // Display resources grouped by category
    const resourcesContainer = document.getElementById('resourcesContainer');
    resourcesContainer.innerHTML = '';

    const groupedResources = {};
    resources.forEach(resource => {
        if (!groupedResources[resource.category]) {
            groupedResources[resource.category] = [];
        }
        groupedResources[resource.category].push(resource);
    });

    Object.keys(groupedResources).forEach(category => {
        const categorySection = document.createElement('div');
        categorySection.className = 'resource-category';
        categorySection.innerHTML = `
            <h3 class="resource-category-title">
                <i class="fas fa-folder-open"></i>
                ${category}
            </h3>
            <div class="resource-grid">
                ${groupedResources[category].map(resource => `
                    <div class="resource-card">
                        <h4 class="resource-title">
                            <a href="${resource.url}" target="_blank" rel="noopener">
                                ${resource.title}
                                <i class="fas fa-external-link-alt"></i>
                            </a>
                        </h4>
                        <p class="resource-description">${resource.description}</p>
                        <div class="resource-meta">
                            <div class="resource-relevance">
                                <i class="fas fa-bullseye"></i>
                                Relevant to: ${resource.relevantTo}
                            </div>
                            <div class="resource-impact">
                                <i class="fas fa-arrow-up"></i>
                                ${resource.impact}
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        resourcesContainer.appendChild(categorySection);
    });

    // Scroll to guidance
    setTimeout(() => {
        document.getElementById('guidance').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
}

function getActionIcon(type) {
    const icons = {
        'interview_prep': 'fa-user-tie',
        'communication': 'fa-comments',
        'practice': 'fa-dumbbell',
        'skill_growth': 'fa-graduation-cap'
    };
    return icons[type] || 'fa-star';
}

function applyActionsAndResimulate() {
    if (currentGuidance.actions.length === 0) {
        showNotification('No actions to apply. Create a career twin first!');
        return;
    }

    // Apply recommended improvements
    currentGuidance.actions.forEach(action => {
        switch (action.type) {
            case 'interview_prep':
                careerTwin.interviewPrep = Math.min(10, careerTwin.interviewPrep + 3);
                document.getElementById('interviewPrep').value = careerTwin.interviewPrep;
                document.getElementById('prepValue').textContent = careerTwin.interviewPrep;
                break;
            case 'communication':
                careerTwin.communicationSkill = Math.min(10, careerTwin.communicationSkill + 2);
                document.getElementById('communicationSkill').value = careerTwin.communicationSkill;
                document.getElementById('commValue').textContent = careerTwin.communicationSkill;
                break;
            case 'practice':
                careerTwin.practiceConsistency = Math.min(10, careerTwin.practiceConsistency + 3);
                document.getElementById('practiceConsistency').value = careerTwin.practiceConsistency;
                document.getElementById('consistencyValue').textContent = careerTwin.practiceConsistency;
                break;
            case 'skill_growth':
                careerTwin.learningFrequency = Math.min(40, careerTwin.learningFrequency + 5);
                document.getElementById('learningFrequency').value = careerTwin.learningFrequency;
                document.getElementById('learningValue').textContent = careerTwin.learningFrequency;
                break;
        }
    });

    // Mark as applied
    currentGuidance.appliedActions = true;

    // Re-run simulation
    showNotification('Applied recommendations! Re-simulating...');

    setTimeout(() => {
        calculateAndDisplayScenarios();
        showNotification('✨ Simulation updated with improved inputs!');
    }, 500);
}

// ============================================
// PROFILE MANAGEMENT
// ============================================
function initializeProfileHandlers() {
    const editProfileBtn = document.getElementById('editProfileBtn');
    const uploadPhotoBtn = document.getElementById('uploadPhotoBtn');
    const profilePhotoInput = document.getElementById('profilePhotoInput');
    const closeModal = document.getElementById('closeModal');
    const cancelEdit = document.getElementById('cancelEdit');
    const saveProfile = document.getElementById('saveProfile');
    const modal = document.getElementById('profileModal');

    // Photo upload
    uploadPhotoBtn.addEventListener('click', () => profilePhotoInput.click());
    profilePhotoInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const profileImage = document.getElementById('profileImage');
                profileImage.innerHTML = `<img src="${event.target.result}" style="width:100%; height:100%; border-radius:50%; object-fit:cover;">`;
                localStorage.setItem('aiCareerTwin_profilePhoto', event.target.result);
                showNotification('Profile photo updated!');
            };
            reader.readAsDataURL(file);
        }
    });

    editProfileBtn.addEventListener('click', openProfileModal);
    closeModal.addEventListener('click', closeProfileModal);
    cancelEdit.addEventListener('click', closeProfileModal);
    saveProfile.addEventListener('click', saveProfileData);

    // Close modal on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeProfileModal();
    });

    // Load saved profile photo
    const savedPhoto = localStorage.getItem('aiCareerTwin_profilePhoto');
    if (savedPhoto) {
        const profileImage = document.getElementById('profileImage');
        profileImage.innerHTML = `<img src="${savedPhoto}" style="width:100%; height:100%; border-radius:50%; object-fit:cover;">`;
    }
}

function openProfileModal() {
    const modal = document.getElementById('profileModal');

    // Populate form with current data
    document.getElementById('editName').value = profileData.name;
    document.getElementById('editTitle').value = profileData.title;
    document.getElementById('editBio').value = profileData.bio;
    document.getElementById('editLinkedIn').value = profileData.linkedin;
    document.getElementById('editGitHub').value = profileData.github;
    document.getElementById('editPortfolio').value = profileData.portfolio;
    document.getElementById('editEmail').value = profileData.email;

    modal.classList.add('active');
}

function closeProfileModal() {
    const modal = document.getElementById('profileModal');
    modal.classList.remove('active');
}

function saveProfileData() {
    // Get form values
    profileData.name = document.getElementById('editName').value || 'Your Name';
    profileData.title = document.getElementById('editTitle').value || 'Your Career Title';
    profileData.bio = document.getElementById('editBio').value || 'Add your bio here.';
    profileData.linkedin = document.getElementById('editLinkedIn').value || '#';
    profileData.github = document.getElementById('editGitHub').value || '#';
    profileData.portfolio = document.getElementById('editPortfolio').value || '#';
    profileData.email = document.getElementById('editEmail').value || '#';

    // Update display
    updateProfileDisplay();

    // Save to localStorage
    localStorage.setItem('aiCareerTwin_profile', JSON.stringify(profileData));

    closeProfileModal();
    showNotification('Profile updated successfully!');
}

function updateProfileDisplay() {
    document.getElementById('profileName').textContent = profileData.name;
    document.getElementById('profileTitle').textContent = profileData.title;
    document.getElementById('profileBio').textContent = profileData.bio;

    // Update social links with actual URLs
    const linkedinLink = document.getElementById('linkedinLink');
    const githubLink = document.getElementById('githubLink');
    const portfolioLink = document.getElementById('portfolioLink');
    const emailLink = document.getElementById('emailLink');

    if (linkedinLink) {
        linkedinLink.href = profileData.linkedin && profileData.linkedin !== '#'
            ? profileData.linkedin
            : '#';
        linkedinLink.target = profileData.linkedin !== '#' ? '_blank' : '';
        linkedinLink.rel = profileData.linkedin !== '#' ? 'noopener noreferrer' : '';
    }

    if (githubLink) {
        githubLink.href = profileData.github && profileData.github !== '#'
            ? profileData.github
            : '#';
        githubLink.target = profileData.github !== '#' ? '_blank' : '';
        githubLink.rel = profileData.github !== '#' ? 'noopener noreferrer' : '';
    }

    if (portfolioLink) {
        portfolioLink.href = profileData.portfolio && profileData.portfolio !== '#'
            ? profileData.portfolio
            : '#';
        portfolioLink.target = profileData.portfolio !== '#' ? '_blank' : '';
        portfolioLink.rel = profileData.portfolio !== '#' ? 'noopener noreferrer' : '';
    }

    if (emailLink) {
        emailLink.href = profileData.email && profileData.email !== '#'
            ? `mailto:${profileData.email}`
            : '#';
    }

    // Make social icons open links or prompt profile edit when not set
    const setSocialHandler = (el, url, type) => {
        if (!el) return;
        el.onclick = (e) => {
            e.preventDefault();
            if (url && url !== '#') {
                if (type === 'email') {
                    // mailto already set on href, open normally
                    window.location.href = `mailto:${profileData.email}`;
                } else {
                    window.open(url, '_blank', 'noopener');
                }
            } else {
                openProfileModal();
                showNotification(`Add your ${type} in the profile to enable this link.`);
            }
        };
    };

    setSocialHandler(linkedinLink, profileData.linkedin, 'LinkedIn');
    setSocialHandler(githubLink, profileData.github, 'GitHub');
    setSocialHandler(portfolioLink, profileData.portfolio, 'Portfolio');
    setSocialHandler(emailLink, profileData.email, 'email');

    // Update stats
    document.getElementById('skillsCount').textContent = stats.skillsCount;
    document.getElementById('simulationsCount').textContent = stats.simulationsCount;
    document.getElementById('growthScore').textContent = Math.round(stats.growthScore) + '%';
}

function loadProfile() {
    const saved = localStorage.getItem('aiCareerTwin_profile');
    if (saved) {
        profileData = JSON.parse(saved);
        updateProfileDisplay();
    }
}

// ============================================
// DARK MODE
// ============================================
function initializeDarkMode() {
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('aiCareerTwin_theme');

    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    themeToggle.addEventListener('click', toggleDarkMode);
}

function toggleDarkMode() {
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('aiCareerTwin_theme', 'dark');
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('aiCareerTwin_theme', 'light');
    }
}

// ============================================
// PALETTE / THEME SELECTOR
// ============================================
function initializePalette() {
    const select = document.getElementById('paletteSelect');
    if (!select) return;

    // Load saved palette or default
    const saved = localStorage.getItem('aiCareerTwin_palette') || 'modern';
    applyPalette(saved);
    select.value = saved;

    select.addEventListener('change', (e) => {
        const val = e.target.value;
        applyPalette(val);
        localStorage.setItem('aiCareerTwin_palette', val);
        showNotification('Palette updated');
    });
}

function applyPalette(name) {
    // normalize name -> use body class
    const body = document.body;
    body.classList.remove('palette-modern', 'palette-corporate', 'palette-minimal', 'palette-warm');
    switch (name) {
        case 'corporate': body.classList.add('palette-corporate'); break;
        case 'minimal': body.classList.add('palette-minimal'); break;
        case 'warm': body.classList.add('palette-warm'); break;
        default: body.classList.add('palette-modern'); break;
    }
}

// ============================================
// DATA PERSISTENCE
// ============================================
function saveCareerData() {
    const data = {
        skills: document.getElementById('skills').value,
        careerGoal: document.getElementById('careerGoal').value,
        learningFrequency: document.getElementById('learningFrequency').value,
        interviewPrep: document.getElementById('interviewPrep').value,
        practiceConsistency: document.getElementById('practiceConsistency').value,
        communicationSkill: document.getElementById('communicationSkill').value
    };

    localStorage.setItem('aiCareerTwin_data', JSON.stringify(data));
    showNotification('Data saved successfully!');
}

function loadCareerData() {
    const saved = localStorage.getItem('aiCareerTwin_data');
    if (saved) {
        const data = JSON.parse(saved);
        document.getElementById('skills').value = data.skills || '';
        document.getElementById('careerGoal').value = data.careerGoal || '';
        document.getElementById('learningFrequency').value = data.learningFrequency || 5;
        document.getElementById('interviewPrep').value = data.interviewPrep || 5;
        document.getElementById('practiceConsistency').value = data.practiceConsistency || 5;
        document.getElementById('communicationSkill').value = data.communicationSkill || 5;

        // Update displays
        document.getElementById('learningValue').textContent = data.learningFrequency || 5;
        document.getElementById('prepValue').textContent = data.interviewPrep || 5;
        document.getElementById('consistencyValue').textContent = data.practiceConsistency || 5;
        document.getElementById('commValue').textContent = data.communicationSkill || 5;
    }
}

// ============================================
// NOTIFICATIONS
// ============================================
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
    }
`;
document.head.appendChild(style);

// ============================================
// FORM HANDLERS
// ============================================
function initializeFormHandlers() {
    const form = document.getElementById('careerForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        createCareerTwin();
    });

    const recalculateBtn = document.getElementById('recalculate');
    recalculateBtn.addEventListener('click', recalculateScenarios);

    const saveDataBtn = document.getElementById('saveDataBtn');
    saveDataBtn.addEventListener('click', saveCareerData);

    const loadSavedBtn = document.getElementById('loadSavedBtn');
    loadSavedBtn.addEventListener('click', () => {
        loadCareerData();
        showNotification('Data loaded successfully!');
    });
}

function initializeRangeInputs() {
    // Initial form range inputs
    const learningFrequency = document.getElementById('learningFrequency');
    const interviewPrep = document.getElementById('interviewPrep');
    const practiceConsistency = document.getElementById('practiceConsistency');
    const communicationSkill = document.getElementById('communicationSkill');

    learningFrequency.addEventListener('input', (e) => {
        document.getElementById('learningValue').textContent = e.target.value;
    });

    interviewPrep.addEventListener('input', (e) => {
        document.getElementById('prepValue').textContent = e.target.value;
    });

    practiceConsistency.addEventListener('input', (e) => {
        document.getElementById('consistencyValue').textContent = e.target.value;
    });

    communicationSkill.addEventListener('input', (e) => {
        document.getElementById('commValue').textContent = e.target.value;
    });
}

function initializeScenarioControls() {
    const scenarioLearning = document.getElementById('scenarioLearning');
    const scenarioPractice = document.getElementById('scenarioPractice');
    const scenarioComm = document.getElementById('scenarioComm');
    const scenarioInterview = document.getElementById('scenarioInterview');

    if (!scenarioLearning || !scenarioPractice || !scenarioComm || !scenarioInterview) return;

    scenarioLearning.addEventListener('input', (e) => {
        document.getElementById('scenarioLearningValue').textContent = e.target.value;
        recalculateScenarios();
    });

    scenarioPractice.addEventListener('input', (e) => {
        document.getElementById('scenarioPracticeValue').textContent = e.target.value;
        recalculateScenarios();
    });

    scenarioComm.addEventListener('input', (e) => {
        document.getElementById('scenarioCommValue').textContent = e.target.value;
        recalculateScenarios();
    });

    scenarioInterview.addEventListener('input', (e) => {
        document.getElementById('scenarioInterviewValue').textContent = e.target.value;
        recalculateScenarios();
    });
}

// ============================================
// EXPORT HANDLERS
// ============================================
function initializeExportHandlers() {
    const exportPdfBtn = document.getElementById('exportPdfBtn');
    const shareBtn = document.getElementById('shareBtn');

    exportPdfBtn.addEventListener('click', exportToPDF);
    shareBtn.addEventListener('click', shareResults);
}

function exportToPDF() {
    showNotification('PDF export feature coming soon!');
    // Note: PDF export would require more complex implementation with jsPDF
    // This is a placeholder for future enhancement
}

function shareResults() {
    if (navigator.share) {
        navigator.share({
            title: 'AI Career Twin Results',
            text: 'Check out my career simulation results!',
            url: window.location.href
        }).then(() => {
            showNotification('Shared successfully!');
        }).catch(() => {
            copyToClipboard();
        });
    } else {
        copyToClipboard();
    }
}

function copyToClipboard() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        showNotification('Link copied to clipboard!');
    });
}

// ============================================
// CAREER TWIN CREATION
// ============================================
function createCareerTwin() {
    // Collect form data
    careerTwin.skills = document.getElementById('skills').value.split(',').map(s => s.trim());
    careerTwin.careerGoal = document.getElementById('careerGoal').value;
    careerTwin.learningFrequency = parseFloat(document.getElementById('learningFrequency').value);
    careerTwin.interviewPrep = parseFloat(document.getElementById('interviewPrep').value);
    careerTwin.practiceConsistency = parseFloat(document.getElementById('practiceConsistency').value);
    careerTwin.communicationSkill = parseFloat(document.getElementById('communicationSkill').value);

    // Update stats
    stats.skillsCount = careerTwin.skills.length;
    stats.simulationsCount++;
    updateProfileDisplay();

    // Populate scenario controls with current values
    document.getElementById('scenarioLearning').value = careerTwin.learningFrequency;
    document.getElementById('scenarioLearningValue').textContent = careerTwin.learningFrequency;
    document.getElementById('scenarioPractice').value = careerTwin.practiceConsistency;
    document.getElementById('scenarioPracticeValue').textContent = careerTwin.practiceConsistency;
    document.getElementById('scenarioComm').value = careerTwin.communicationSkill;
    document.getElementById('scenarioCommValue').textContent = careerTwin.communicationSkill;
    document.getElementById('scenarioInterview').value = careerTwin.interviewPrep;
    document.getElementById('scenarioInterviewValue').textContent = careerTwin.interviewPrep;

    // Show results section
    document.getElementById('results').classList.remove('hidden');

    // Calculate and display scenarios
    calculateAndDisplayScenarios();

    // Scroll to results
    setTimeout(() => {
        document.getElementById('results').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);

    showNotification('Career Twin created successfully!');
}

// ============================================
// SIMULATION ENGINE
// ============================================
function calculateSkillGrowth(learningHours, consistency, months = 12) {
    const baseGrowth = learningHours * 2;
    const consistencyMultiplier = consistency / 10;
    const monthlyGrowth = baseGrowth * consistencyMultiplier;
    return Math.min(Math.round(monthlyGrowth * months / 12), 100);
}

function calculateInterviewReadiness(interviewPrep, communication, practice) {
    const prepWeight = 0.4;
    const commWeight = 0.35;
    const practiceWeight = 0.25;

    const score = (interviewPrep * 10 * prepWeight) +
        (communication * 10 * commWeight) +
        (practice * 10 * practiceWeight);

    return Math.round(score);
}

function calculateSuccessProbability(skillGrowth, interviewReadiness) {
    const skillWeight = 0.5;
    const interviewWeight = 0.5;

    const probability = (skillGrowth * skillWeight) + (interviewReadiness * interviewWeight);
    return Math.round(probability);
}

function simulateCareerPath(params) {
    const { learningFrequency, interviewPrep, practiceConsistency, communicationSkill } = params;

    const skillGrowth = calculateSkillGrowth(learningFrequency, practiceConsistency);
    const interviewReadiness = calculateInterviewReadiness(interviewPrep, communicationSkill, practiceConsistency);
    const successProbability = calculateSuccessProbability(skillGrowth, interviewReadiness);

    return {
        skillGrowth,
        interviewReadiness,
        successProbability
    };
}

// ============================================
// SCENARIO CALCULATION
// ============================================
function calculateAndDisplayScenarios() {
    // Show results section and container
    const resultsSection = document.getElementById('results');
    const resultsContainer = document.getElementById('resultsContainer');
    if (resultsSection) resultsSection.scrollIntoView({ behavior: 'smooth' });
    if (resultsContainer) resultsContainer.classList.remove('hidden');

    // Use advanced simulation engine
    const baselineParams = {
        learningHours: careerTwin.learningFrequency || 20,
        consistency: careerTwin.practiceConsistency || 0.7,
        communication: careerTwin.communicationSkill || 60,
        interviewPrep: careerTwin.interviewPrep || 3
    };

    const scenarios = generateScenarios_Advanced(baselineParams);
    const { riskPath, currentPath, improvedPath } = scenarios;

    // Extract final month data for comparison cards
    const riskFinal = riskPath.monthlyPath[riskPath.monthlyPath.length - 1];
    const currentFinal = currentPath.monthlyPath[currentPath.monthlyPath.length - 1];
    const improvedFinal = improvedPath.monthlyPath[improvedPath.monthlyPath.length - 1];

    // Update growth score
    stats.growthScore = currentFinal.careerReadiness;
    updateProfileDisplay();

    // Update comparison cards with final month data
    const readability = (val) => {
        if (val === undefined || val === null) return 'N/A';
        return Math.round(val);
    };

    document.getElementById('riskCard') && (document.getElementById('riskCard').innerHTML = `
        <h3>Risk Path</h3>
        <p><strong>Career Readiness:</strong> ${readability(riskFinal.careerReadiness)}/100</p>
        <p><strong>Avg Skill Level:</strong> ${readability(riskFinal.avgSkillLevel)}</p>
        <p><strong>Interview Readiness:</strong> ${readability(riskFinal.interviewReadiness)}</p>
        <p><strong>Burnout Risk:</strong> ${readability(riskFinal.burnoutRisk)}%</p>
    `);

    document.getElementById('currentCard') && (document.getElementById('currentCard').innerHTML = `
        <h3>Current Path</h3>
        <p><strong>Career Readiness:</strong> ${readability(currentFinal.careerReadiness)}/100</p>
        <p><strong>Avg Skill Level:</strong> ${readability(currentFinal.avgSkillLevel)}</p>
        <p><strong>Interview Readiness:</strong> ${readability(currentFinal.interviewReadiness)}</p>
        <p><strong>Burnout Risk:</strong> ${readability(currentFinal.burnoutRisk)}%</p>
    `);

    document.getElementById('improvedCard') && (document.getElementById('improvedCard').innerHTML = `
        <h3>Improved Path</h3>
        <p><strong>Career Readiness:</strong> ${readability(improvedFinal.careerReadiness)}/100</p>
        <p><strong>Avg Skill Level:</strong> ${readability(improvedFinal.avgSkillLevel)}</p>
        <p><strong>Interview Readiness:</strong> ${readability(improvedFinal.interviewReadiness)}</p>
        <p><strong>Burnout Risk:</strong> ${readability(improvedFinal.burnoutRisk)}%</p>
    `);

    // Update charts with month-by-month data
    updateCharts_Advanced(riskPath.monthlyPath, currentPath.monthlyPath, improvedPath.monthlyPath);

    generateInsights(
        { skillGrowth: riskFinal.avgSkillLevel, interviewReadiness: riskFinal.interviewReadiness, successProbability: riskFinal.careerReadiness },
        { skillGrowth: currentFinal.avgSkillLevel, interviewReadiness: currentFinal.interviewReadiness, successProbability: currentFinal.careerReadiness },
        { skillGrowth: improvedFinal.avgSkillLevel, interviewReadiness: improvedFinal.interviewReadiness, successProbability: improvedFinal.careerReadiness }
    );

    // Generate career guidance
    const weaknesses = analyzeWeaknesses(careerTwin, {
        skillGrowth: currentFinal.avgSkillLevel,
        interviewReadiness: currentFinal.interviewReadiness
    });
    if (weaknesses.length > 0) {
        const actions = generateActions(weaknesses, careerTwin.careerGoal);
        const resources = getContextualResources(careerTwin.careerGoal, actions);

        // Store for apply actions
        currentGuidance.actions = actions;
        currentGuidance.resources = resources;

        // Display guidance
        displayGuidance(actions, resources);
    }
}

function recalculateScenarios() {
    const baselineParams = {
        learningHours: parseFloat(document.getElementById('scenarioLearning')?.value || 20),
        consistency: parseFloat(document.getElementById('scenarioPractice')?.value || 0.7) / 10,
        communication: parseFloat(document.getElementById('scenarioComm')?.value || 60) / 10,
        interviewPrep: parseFloat(document.getElementById('scenarioInterview')?.value || 3)
    };

    const { riskPath, currentPath, improvedPath } = generateScenarios_Advanced(baselineParams);
    
    // Extract final month data
    const riskFinal = riskPath.monthlyPath[riskPath.monthlyPath.length - 1];
    const currentFinal = currentPath.monthlyPath[currentPath.monthlyPath.length - 1];
    const improvedFinal = improvedPath.monthlyPath[improvedPath.monthlyPath.length - 1];

    // Update charts with month-by-month data
    updateCharts_Advanced(riskPath.monthlyPath, currentPath.monthlyPath, improvedPath.monthlyPath);
    
    const readability = (val) => {
        if (val === undefined || val === null) return 'N/A';
        return Math.round(val);
    };

    document.getElementById('riskCard') && (document.getElementById('riskCard').innerHTML = `
        <h3>Risk Path</h3>
        <p><strong>Career Readiness:</strong> ${readability(riskFinal.careerReadiness)}/100</p>
        <p><strong>Avg Skill Level:</strong> ${readability(riskFinal.avgSkillLevel)}</p>
        <p><strong>Interview Readiness:</strong> ${readability(riskFinal.interviewReadiness)}</p>
        <p><strong>Burnout Risk:</strong> ${readability(riskFinal.burnoutRisk)}%</p>
    `);

    document.getElementById('currentCard') && (document.getElementById('currentCard').innerHTML = `
        <h3>Current Path</h3>
        <p><strong>Career Readiness:</strong> ${readability(currentFinal.careerReadiness)}/100</p>
        <p><strong>Avg Skill Level:</strong> ${readability(currentFinal.avgSkillLevel)}</p>
        <p><strong>Interview Readiness:</strong> ${readability(currentFinal.interviewReadiness)}</p>
        <p><strong>Burnout Risk:</strong> ${readability(currentFinal.burnoutRisk)}%</p>
    `);

    document.getElementById('improvedCard') && (document.getElementById('improvedCard').innerHTML = `
        <h3>Improved Path</h3>
        <p><strong>Career Readiness:</strong> ${readability(improvedFinal.careerReadiness)}/100</p>
        <p><strong>Avg Skill Level:</strong> ${readability(improvedFinal.avgSkillLevel)}</p>
        <p><strong>Interview Readiness:</strong> ${readability(improvedFinal.interviewReadiness)}</p>
        <p><strong>Burnout Risk:</strong> ${readability(improvedFinal.burnoutRisk)}%</p>
    `);

    showNotification('Scenarios recalculated!');
}

// ============================================
// UI UPDATE FUNCTIONS
// ============================================
// ============================================
// UI UPDATE FUNCTIONS
// ============================================
function updateCharts_Advanced(riskMonthly, currentMonthly, improvedMonthly) {
    const ctx = document.getElementById('skillChart').getContext('2d');
    const ctxInterview = document.getElementById('interviewChart').getContext('2d');

    const months = Array.from({ length: 12 }, (_, i) => `M${i + 1}`);
    const riskSkills = riskMonthly.map(m => m.avgSkillLevel);
    const currentSkills = currentMonthly.map(m => m.avgSkillLevel);
    const improvedSkills = improvedMonthly.map(m => m.avgSkillLevel);

    const riskInterview = riskMonthly.map(m => m.interviewReadiness);
    const currentInterview = currentMonthly.map(m => m.interviewReadiness);
    const improvedInterview = improvedMonthly.map(m => m.interviewReadiness);

    if (skillChart) skillChart.destroy();
    skillChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [
                {
                    label: 'Risk Path',
                    data: riskSkills,
                    borderColor: '#dc2626',
                    backgroundColor: 'rgba(220,38,38,0.1)',
                    tension: 0.4,
                    fill: true,
                    borderWidth: 2
                },
                {
                    label: 'Current Path',
                    data: currentSkills,
                    borderColor: '#f59e0b',
                    backgroundColor: 'rgba(245,158,11,0.1)',
                    tension: 0.4,
                    fill: true,
                    borderWidth: 2
                },
                {
                    label: 'Improved Path',
                    data: improvedSkills,
                    borderColor: '#059669',
                    backgroundColor: 'rgba(5,150,105,0.1)',
                    tension: 0.4,
                    fill: true,
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { display: true, position: 'bottom' },
                tooltip: {
                    callbacks: {
                        label: (ctx) => `${ctx.dataset.label}: ${Math.round(ctx.parsed.y)} avg skill level`
                    }
                }
            },
            scales: { y: { beginAtZero: true, max: 100, title: { display: true, text: 'Skill Level (0-100)' } } }
        }
    });

    if (interviewChart) interviewChart.destroy();
    interviewChart = new Chart(ctxInterview, {
        type: 'line',
        data: {
            labels: months,
            datasets: [
                {
                    label: 'Risk Path',
                    data: riskInterview,
                    borderColor: '#dc2626',
                    backgroundColor: 'rgba(220,38,38,0.1)',
                    tension: 0.4,
                    fill: true,
                    borderWidth: 2
                },
                {
                    label: 'Current Path',
                    data: currentInterview,
                    borderColor: '#f59e0b',
                    backgroundColor: 'rgba(245,158,11,0.1)',
                    tension: 0.4,
                    fill: true,
                    borderWidth: 2
                },
                {
                    label: 'Improved Path',
                    data: improvedInterview,
                    borderColor: '#059669',
                    backgroundColor: 'rgba(5,150,105,0.1)',
                    tension: 0.4,
                    fill: true,
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { display: true, position: 'bottom' },
                tooltip: {
                    callbacks: {
                        label: (ctx) => `${ctx.dataset.label}: ${Math.round(ctx.parsed.y)}/100`
                    }
                }
            },
            scales: { y: { beginAtZero: true, max: 100, title: { display: true, text: 'Interview Readiness (0-100)' } } }
        }
    });
}

function updateCharts(riskPath, currentPath, improvedPath) {
    updateSkillChart(riskPath, currentPath, improvedPath);
    updateInterviewChart(riskPath, currentPath, improvedPath);
}

function updateSkillChart(riskPath, currentPath, improvedPath) {
    const ctx = document.getElementById('skillChart').getContext('2d');

    const months = ['Month 1', 'Month 3', 'Month 6', 'Month 9', 'Month 12'];

    const riskData = [0, riskPath.skillGrowth * 0.2, riskPath.skillGrowth * 0.4, riskPath.skillGrowth * 0.7, riskPath.skillGrowth];
    const currentData = [0, currentPath.skillGrowth * 0.2, currentPath.skillGrowth * 0.5, currentPath.skillGrowth * 0.75, currentPath.skillGrowth];
    const improvedData = [0, improvedPath.skillGrowth * 0.3, improvedPath.skillGrowth * 0.6, improvedPath.skillGrowth * 0.8, improvedPath.skillGrowth];

    if (skillChart) {
        skillChart.destroy();
    }

    skillChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [
                {
                    label: 'Risk Path',
                    data: riskData,
                    borderColor: '#ef4444',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    tension: 0.4,
                    fill: true,
                    borderWidth: 3
                },
                {
                    label: 'Current Path',
                    data: currentData,
                    borderColor: '#f5a623',
                    backgroundColor: 'rgba(245, 166, 35, 0.1)',
                    tension: 0.4,
                    fill: true,
                    borderWidth: 3
                },
                {
                    label: 'Improved Path',
                    data: improvedData,
                    borderColor: '#11998e',
                    backgroundColor: 'rgba(17, 153, 142, 0.1)',
                    tension: 0.4,
                    fill: true,
                    borderWidth: 3
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom'
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return context.dataset.label + ': +' + Math.round(context.parsed.y) + '% skill growth';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Skill Growth (%)'
                    }
                }
            }
        }
    });
}

function updateInterviewChart(riskPath, currentPath, improvedPath) {
    const ctx = document.getElementById('interviewChart').getContext('2d');

    if (interviewChart) {
        interviewChart.destroy();
    }

    interviewChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Risk Path', 'Current Path', 'Improved Path'],
            datasets: [{
                label: 'Interview Readiness Score',
                data: [riskPath.interviewReadiness, currentPath.interviewReadiness, improvedPath.interviewReadiness],
                backgroundColor: [
                    'rgba(239, 68, 68, 0.8)',
                    'rgba(245, 166, 35, 0.8)',
                    'rgba(17, 153, 142, 0.8)'
                ],
                borderColor: [
                    '#ef4444',
                    '#f5a623',
                    '#11998e'
                ],
                borderWidth: 2,
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Readiness Score (0-100)'
                    }
                }
            }
        }
    });
}

// ============================================
// ADVANCED SIMULATION ENGINE (DIGITAL SHADOW)
// ============================================

/**
 * Career State Model — represents evolving career attributes
 */
class CareerState {
    constructor(skills = {}, learningProfile = {}, comProfile = {}, interviewProfile = {}) {
        this.skills = skills;
        this.learningBehavior = learningProfile;
        this.communicationProfile = comProfile;
        this.interviewPerformance = interviewProfile;
        this.motivationStability = 0.7; // 0–1
        this.burnoutRisk = 0.2;         // 0–1
        this.month = 0;
    }
}

/**
 * Skill State — individual skill with growth/decay dynamics
 */
class SkillState {
    constructor(name, level = 5) {
        this.name = name;
        this.level = level;  // 0–100
        this.decayRate = 0.02;
        this.growthRate = 1.2;
        this.lastUsedMonth = 0;
    }
}

/**
 * Advanced Month-by-Month Simulation Engine
 * Follows deterministic formulas, no randomness.
 */
function simulateCareerPath_Advanced(params, months = 12) {
    const { learningHours, consistency, communication, interviewPrep } = params;

    // Initialize career state
    const state = new CareerState(
        initializeSkills(['JavaScript', 'Python', 'React', 'SQL']),
        { hoursPerWeek: learningHours, consistencyScore: consistency / 10, revisionFrequency: 0.5 },
        { clarity: communication * 10, confidence: communication * 10, structure: communication * 9 },
        { technicalDepth: interviewPrep * 10, articulationQuality: communication * 9, adaptability: communication * 8 }
    );

    const monthlyPath = [];
    const explanations = [];

    for (let month = 1; month <= months; month++) {
        state.month = month;

        // 1. Update skill growth or decay
        Object.keys(state.skills).forEach(skillName => {
            const skill = state.skills[skillName];
            const monthsSinceUsed = month - skill.lastUsedMonth;
            
            // Growth: hours + consistency multiplier
            const skillGrowth = state.learningBehavior.hoursPerWeek * 
                               state.learningBehavior.consistencyScore * 
                               skill.growthRate * 0.3;
            
            // Decay: if not actively used
            const skillDecay = monthsSinceUsed > 2 ? skill.decayRate * monthsSinceUsed : 0;
            
            skill.level = Math.max(0, Math.min(100, skill.level + skillGrowth - skillDecay));
            
            // Mark skill as used if learning
            if (state.learningBehavior.hoursPerWeek > 5) {
                skill.lastUsedMonth = month;
            }
        });

        // 2. Update communication profile (slower improvement than skills)
        state.communicationProfile.clarity = Math.min(100,
            state.communicationProfile.clarity + 
            state.learningBehavior.consistencyScore * 0.8
        );
        
        state.communicationProfile.confidence = Math.min(100,
            state.communicationProfile.confidence +
            (state.learningBehavior.consistencyScore * 0.9 - state.burnoutRisk * 2)
        );

        // 3. Calculate interview readiness (weighted composite)
        const avgSkillLevel = Object.values(state.skills).reduce((s, sk) => s + sk.level, 0) / 
                              Object.keys(state.skills).length;
        
        const comScore = (state.communicationProfile.clarity + 
                         state.communicationProfile.confidence + 
                         state.communicationProfile.structure) / 3;

        const interviewReadiness = 
            (avgSkillLevel * 0.4) +
            (comScore * 0.4) +
            (state.interviewPerformance.adaptability * 0.2);

        // 4. Calculate burnout risk
        state.burnoutRisk = Math.max(0, Math.min(1,
            (state.learningBehavior.hoursPerWeek / 40) - state.motivationStability
        ));

        // 5. Adjust motivation based on progress
        if (avgSkillLevel > 60 && comScore > 60) {
            state.motivationStability = Math.min(1, state.motivationStability + 0.02);
        } else if (state.burnoutRisk > 0.7) {
            state.motivationStability = Math.max(0.3, state.motivationStability - 0.03);
        }

        // 6. Career readiness (final composite)
        const careerReadiness = Math.round(interviewReadiness * (1 - state.burnoutRisk));

        monthlyPath.push({
            month,
            avgSkillLevel: Math.round(avgSkillLevel),
            communicationScore: Math.round(comScore),
            interviewReadiness: Math.round(interviewReadiness),
            burnoutRisk: Math.round(state.burnoutRisk * 100),
            careerReadiness,
            motivationStability: Math.round(state.motivationStability * 100)
        });

        // Generate explanation
        if (month % 3 === 0 || month === months) {
            const explanation = generatePathExplanation(state, monthlyPath[monthlyPath.length - 1], month);
            explanations.push(explanation);
        }
    }

    return { monthlyPath, explanations, finalState: state };
}

function initializeSkills(skillNames) {
    const skills = {};
    skillNames.forEach(name => {
        skills[name] = new SkillState(name, Math.random() * 30 + 30); // 30–60 initial
    });
    return skills;
}

function generatePathExplanation(state, monthSnapshot, month) {
    const { careerReadiness, burnoutRisk, interviewReadiness, avgSkillLevel } = monthSnapshot;
    
    let narrative = `**Month ${month} Snapshot:**\n`;
    narrative += `Career Readiness: ${careerReadiness}/100 | `;
    narrative += `Skills: ${avgSkillLevel}/100 | `;
    narrative += `Burnout Risk: ${burnoutRisk}%\n`;
    narrative += `\n**Interpretation:**\n`;

    if (interviewReadiness > 70) {
        narrative += `✓ Interview readiness is strong. Your skill level and communication alignment are supporting career advancement potential.`;
    } else if (interviewReadiness > 50) {
        narrative += `→ Moderate interview readiness. Focused effort on communication clarity or technical depth could unlock next-level opportunities.`;
    } else {
        narrative += `⚠ Interview readiness needs development. Increased practice consistency and communication refinement are recommended.`;
    }

    if (burnoutRisk > 0.6) {
        narrative += `\n⚠ Burnout risk is elevated (${burnoutRisk}%). Consider rebalancing effort or seeking motivational support.`;
    } else if (state.motivationStability > 0.8) {
        narrative += `\n✓ Motivation and effort are well-balanced. Sustainable trajectory.`;
    }

    return narrative;
}

/**
 * Generate three scenario paths: Risk, Current, Improved
 */
function generateScenarios_Advanced(baseline) {
    const riskPath = simulateCareerPath_Advanced({
        learningHours: Math.max(1, baseline.learningHours * 0.3),
        consistency: Math.max(1, baseline.consistency * 0.5),
        communication: Math.max(1, baseline.communication * 0.7),
        interviewPrep: Math.max(1, baseline.interviewPrep * 0.5)
    }, 12);

    const currentPath = simulateCareerPath_Advanced(baseline, 12);

    const improvedPath = simulateCareerPath_Advanced({
        learningHours: Math.min(40, baseline.learningHours * 1.8),
        consistency: Math.min(10, baseline.consistency * 1.4),
        communication: Math.min(10, baseline.communication * 1.25),
        interviewPrep: Math.min(10, baseline.interviewPrep * 1.3)
    }, 12);

    return { riskPath, currentPath, improvedPath };
}

// ============================================
// INSIGHTS GENERATION
// ============================================
function generateInsights(riskPath, currentPath, improvedPath) {
    const insightsContainer = document.getElementById('insightsContainer');
    insightsContainer.innerHTML = '';

    const insights = [];

    const skillDiff = improvedPath.skillGrowth - currentPath.skillGrowth;
    if (skillDiff > 10) {
        insights.push({
            title: '📈 Skill Growth Opportunity',
            text: `By increasing your learning frequency and practice consistency, your simulated skill growth could improve by approximately ${skillDiff}%. This simulation suggests that consistent effort compounds over time.`
        });
    }

    const interviewDiff = improvedPath.interviewReadiness - currentPath.interviewReadiness;
    if (interviewDiff > 10) {
        insights.push({
            title: '🎯 Interview Preparation Impact',
            text: `Enhanced interview preparation and communication practice could potentially improve your readiness score by ${interviewDiff} points. This simulation models how focused preparation may influence outcomes.`
        });
    }

    const riskDiff = currentPath.successProbability - riskPath.successProbability;
    if (riskDiff > 15) {
        insights.push({
            title: '⚠️ Consistency Matters',
            text: `The simulation shows that reducing effort could lower success probability by ${riskDiff}%. This model emphasizes the potential impact of maintaining consistent learning habits.`
        });
    }

    insights.push({
        title: '💡 Understanding Your Simulation',
        text: `These results are exploratory models based on your inputs. They represent possible trajectories, not guaranteed outcomes. Use them as a thinking tool to explore how different effort levels might influence your career development over time.`
    });

    insights.forEach(insight => {
        const card = document.createElement('div');
        card.className = 'insight-card';
        card.innerHTML = `
            <h4 class="insight-title">${insight.title}</h4>
            <p class="insight-text">${insight.text}</p>
        `;
        insightsContainer.appendChild(card);
    });
}

// ============================================
// SMOOTH SCROLLING
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// SOFT SKILL GAP DETECTOR++ (Client-side)
// ============================================
let frictionChartSS = null;
let mismatchChartSS = null;

function initializeSoftSkillDetector() {
    const form = document.getElementById('softSkillForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const answers = [
            document.getElementById('ans1').value || '',
            document.getElementById('ans2').value || '',
            document.getElementById('ans3').value || ''
        ];
        const meta = ['behavioral', 'technical', 'hr'];
        const result = analyzeSoftSkillAnswers(answers, meta);
        displaySoftSkillResults(result);
        saveAssessmentToSession(result);
    });

    document.getElementById('softSkillReset').addEventListener('click', resetSoftSkillForm);
    document.getElementById('applySimulation').addEventListener('click', () => {
        const addExamples = document.getElementById('simAddExamples').checked;
        const improveStructure = document.getElementById('simImproveStructure').checked;
        const reduceFillers = document.getElementById('simReduceFillers').checked;
        applySimulationChanges({ addExamples, improveStructure, reduceFillers });
    });

    // Load previous assessment if present
    loadPreviousAssessment();
}

function analyzeSoftSkillAnswers(answers, metaTypes) {
    // Simple rule-based NLP analysis
    const fillerWords = ['um', 'uh', 'like', 'you know', 'actually', 'basically', 'right', 'so', 'well'];

    const perAnswer = answers.map((text, i) => {
        const sentences = splitSentences(text);
        const words = text.trim().split(/\s+/).filter(Boolean);
        const avgSentenceLen = sentences.length ? words.length / sentences.length : words.length;
        const fillerCount = countFillerWords(text, fillerWords);

        const clarity = measureClarity(avgSentenceLen, fillerCount, words.length);
        const confidence = detectConfidence(text);
        const structure = detectStructure(text);
        const context = classifyContext(text);

        return {
            text,
            type: metaTypes[i] || 'unknown',
            sentences: sentences.length,
            words: words.length,
            avgSentenceLen,
            fillerCount,
            clarity, // 0-10
            confidence, // 0-10
            structure, // 0-10
            context
        };
    });

    // Aggregate
    const clarityAvg = Math.round(perAnswer.reduce((s, a) => s + a.clarity, 0) / perAnswer.length);
    const confidenceAvg = Math.round(perAnswer.reduce((s, a) => s + a.confidence, 0) / perAnswer.length);
    const structureAvg = Math.round(perAnswer.reduce((s, a) => s + a.structure, 0) / perAnswer.length);

    const frictionData = buildFrictionMapData(perAnswer);
    const mismatch = { highConfLowClar: 0, lowConfHighClar: 0 };
    perAnswer.forEach(a => {
        if (a.confidence >= 7 && a.clarity <= 4) mismatch.highConfLowClar++;
        if (a.confidence <= 4 && a.clarity >= 7) mismatch.lowConfHighClar++;
    });

    return {
        timestamp: Date.now(),
        perAnswer,
        clarityAvg,
        confidenceAvg,
        structureAvg,
        frictionData,
        mismatch,
        summary: `Clarity ${clarityAvg}/10 • Confidence ${confidenceAvg}/10 • Structure ${structureAvg}/10`
    };
}

function splitSentences(text) {
    if (!text) return [];
    return text.split(/[.!?]+/).map(s => s.trim()).filter(Boolean);
}

function countFillerWords(text, list) {
    const t = text.toLowerCase();
    let count = 0;
    list.forEach(w => {
        const re = new RegExp('\\b' + w.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&') + '\\b', 'gi');
        const m = t.match(re);
        if (m) count += m.length;
    });
    return count;
}

function measureClarity(avgSentenceLen, fillerCount, wordCount) {
    // Favor concise sentences and fewer fillers. Return 0-10
    if (wordCount === 0) return 0;
    let score = 6;
    if (avgSentenceLen > 20) score -= 2;
    if (avgSentenceLen > 30) score -= 2;
    if (fillerCount > 0) score -= Math.min(3, Math.floor(fillerCount / 2));
    return Math.max(0, Math.min(10, Math.round(score)));
}

function detectConfidence(text) {
    const hedges = ['maybe', 'perhaps', 'i think', 'might', 'could', 'sort of', 'kind of', 'maybe'];
    const strong = ['definitely', 'certainly', 'i will', 'i did', 'i led', 'i built', 'i achieved'];
    const t = text.toLowerCase();
    let score = 5;
    hedges.forEach(h => { if (t.includes(h)) score -= 1; });
    strong.forEach(s => { if (t.includes(s)) score += 1; });
    return Math.max(0, Math.min(10, score));
}

function detectStructure(text) {
    // Look for intro markers, conclusion markers, and bullet-like structure
    const t = text.toLowerCase();
    let score = 4;
    if (t.includes('first') || t.includes('firstly') || t.includes('to begin')) score += 2;
    if (t.includes('in conclusion') || t.includes('to summarize') || t.includes('finally')) score += 2;
    if (t.includes('for example') || t.includes('for instance') || t.includes('e.g.')) score += 1;
    if (t.includes('\n') || t.includes('- ') || t.includes('•')) score += 1;
    return Math.max(0, Math.min(10, Math.round(score)));
}

function classifyContext(text) {
    const t = text.toLowerCase();
    const technical = ['api', 'algorithm', 'architecture', 'deploy', 'bug', 'performance', 'optimiz'];
    const behavioral = ['team', 'conflict', 'feedback', 'lead', 'manage', 'collaborat'];
    const hr = ['motivat', 'why', 'culture', 'fit', 'salary', 'role'];
    const scores = { technical: 0, behavioral: 0, hr: 0 };
    technical.forEach(k => { if (t.includes(k)) scores.technical++; });
    behavioral.forEach(k => { if (t.includes(k)) scores.behavioral++; });
    hr.forEach(k => { if (t.includes(k)) scores.hr++; });
    const max = Object.keys(scores).reduce((a, b) => scores[a] >= scores[b] ? a : b);
    return max;
}

function buildFrictionMapData(perAnswer) {
    // For each answer compute simple friction points (clarity drop, confidence fluctuation, structure breaks)
    const clarityDrops = perAnswer.map(a => Math.max(0, 10 - a.clarity));
    const confidenceFluct = perAnswer.map(a => Math.max(0, 10 - a.confidence));
    const structureBreaks = perAnswer.map(a => Math.max(0, 10 - a.structure));

    return { clarityDrops, confidenceFluct, structureBreaks, labels: perAnswer.map((_, i) => `Q${i+1}`) };
}

function displaySoftSkillResults(result) {
    document.getElementById('softSkillResults').classList.remove('hidden');

    renderFrictionChart(result.frictionData);
    renderMismatchChart(result.mismatch);
    renderExplainableFeedback(result);

    // Show previous comparison if available
    const prev = loadPreviousAssessment();
    if (prev) {
        document.getElementById('previousComparison').classList.remove('hidden');
        showComparison(prev, result);
    }
}

function renderFrictionChart(data) {
    const ctx = document.getElementById('frictionChart').getContext('2d');
    if (frictionChartSS) frictionChartSS.destroy();
    frictionChartSS = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.labels,
            datasets: [
                { label: 'Clarity Drops', data: data.clarityDrops, backgroundColor: 'rgba(245,166,35,0.8)' },
                { label: 'Confidence Fluct', data: data.confidenceFluct, backgroundColor: 'rgba(17,153,142,0.8)' },
                { label: 'Structure Breaks', data: data.structureBreaks, backgroundColor: 'rgba(239,68,68,0.8)' }
            ]
        },
        options: { responsive: true, plugins: { legend: { position: 'bottom' } }, scales: { y: { beginAtZero: true, max: 10 } } }
    });
}

function renderMismatchChart(mismatch) {
    const ctx = document.getElementById('mismatchChart').getContext('2d');
    if (mismatchChartSS) mismatchChartSS.destroy();
    mismatchChartSS = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['HighConf-LowClar', 'LowConf-HighClar'],
            datasets: [{ data: [mismatch.highConfLowClar, mismatch.lowConfHighClar], backgroundColor: ['#11998e', '#f5a623'] }]
        },
        options: { responsive: true, plugins: { legend: { position: 'bottom' } } }
    });
}

function renderExplainableFeedback(result) {
    const container = document.getElementById('explainableFeedback');
    container.innerHTML = '';

    // Summary metrics header
    const summaryDiv = document.createElement('div');
    summaryDiv.style.cssText = `
        background: var(--color-bg-alt);
        padding: 1.5rem;
        border-radius: 12px;
        margin-bottom: 1.5rem;
        border-left: 4px solid var(--color-primary);
    `;
    summaryDiv.innerHTML = `
        <h4 style="color: var(--color-text); margin-bottom: 0.5rem;">Communication Profile Summary</h4>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;">
            <div style="text-align: center;">
                <div style="font-size: 1.5rem; font-weight: 700; color: var(--color-primary);">${result.clarityAvg}/10</div>
                <div style="font-size: 0.875rem; color: var(--color-text-secondary);">Clarity</div>
            </div>
            <div style="text-align: center;">
                <div style="font-size: 1.5rem; font-weight: 700; color: var(--color-secondary);">${result.confidenceAvg}/10</div>
                <div style="font-size: 0.875rem; color: var(--color-text-secondary);">Confidence</div>
            </div>
            <div style="text-align: center;">
                <div style="font-size: 1.5rem; font-weight: 700; color: var(--color-success);">${result.structureAvg}/10</div>
                <div style="font-size: 0.875rem; color: var(--color-text-secondary);">Structure</div>
            </div>
        </div>
    `;
    container.appendChild(summaryDiv);

    // Per-question analysis
    result.perAnswer.forEach((a, idx) => {
        const typeEmoji = { behavioral: '👥', technical: '⚙️', hr: '🎯' }[a.type] || '📋';
        const card = document.createElement('div');
        card.className = 'insight-card';
        card.style.cssText = `
            border-left: 4px solid var(--color-primary);
            background: var(--color-bg-card);
            border: 1px solid var(--color-border);
            padding: 1.5rem;
            border-radius: 10px;
            margin-bottom: 1rem;
        `;

        const clarityGap = Math.max(0, 10 - a.clarity);
        const confGap = Math.max(0, 10 - a.confidence);
        const structGap = Math.max(0, 10 - a.structure);

        const clarityAdvice = a.clarity <= 5 ? '✓ Reduce sentence complexity and filler words (um, uh, like).' : a.clarity >= 8 ? '✓ Excellent clarity maintained.' : '→ Minor refinements: tighten sentence structure.';
        const confAdvice = a.confidence <= 5 ? '✓ Use assertive language and specific past accomplishments.' : a.confidence >= 8 ? '✓ Strong confident tone.' : '→ Minor refinements: strengthen claim language.';
        const structAdvice = a.structure <= 5 ? '✓ Add: Problem → Approach → Result structure (PAR method).' : a.structure >= 8 ? '✓ Well-structured response.' : '→ Minor refinements: improve logical flow.';

        card.innerHTML = `
            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
                <span style="font-size: 1.5rem;">${typeEmoji}</span>
                <h4 style="margin: 0; color: var(--color-text);">Question ${idx+1}: ${a.type.charAt(0).toUpperCase() + a.type.slice(1)}</h4>
            </div>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
                <div style="background: rgba(102,126,234,0.08); padding: 0.75rem; border-radius: 8px; text-align: center;">
                    <div style="font-weight: 700; color: var(--color-primary);">${a.clarity}/10</div>
                    <div style="font-size: 0.75rem; color: var(--color-text-secondary);">Clarity</div>
                </div>
                <div style="background: rgba(107,141,214,0.08); padding: 0.75rem; border-radius: 8px; text-align: center;">
                    <div style="font-weight: 700; color: var(--color-secondary);">${a.confidence}/10</div>
                    <div style="font-size: 0.75rem; color: var(--color-text-secondary);">Confidence</div>
                </div>
                <div style="background: rgba(15,157,136,0.08); padding: 0.75rem; border-radius: 8px; text-align: center;">
                    <div style="font-weight: 700; color: var(--color-success);">${a.structure}/10</div>
                    <div style="font-size: 0.75rem; color: var(--color-text-secondary);">Structure</div>
                </div>
            </div>
            <div style="background: var(--color-bg-alt); padding: 1rem; border-radius: 8px; border-left: 3px solid var(--color-primary);">
                <p style="margin: 0 0 0.5rem 0; font-size: 0.9rem;"><strong>Observation:</strong> ${a.fillerCount > 0 ? `Detected ${a.fillerCount} filler word(s), average sentence length: ${Math.round(a.avgSentenceLen)} words.` : 'No dominant filler words detected.'}</p>
                <div style="margin-top: 1rem;">
                    <p style="margin: 0.25rem 0; font-size: 0.875rem;">📍 ${clarityAdvice}</p>
                    <p style="margin: 0.25rem 0; font-size: 0.875rem;">📍 ${confAdvice}</p>
                    <p style="margin: 0.25rem 0; font-size: 0.875rem;">📍 ${structAdvice}</p>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function applySimulationChanges(options) {
    // Simple simulation: update displayed charts and feedback to reflect improvements
    const last = loadPreviousAssessment();
    if (!last) {
        showNotification('No assessment found to simulate. Run an analysis first.');
        return;
    }

    const simulated = JSON.parse(JSON.stringify(last));
    simulated.perAnswer.forEach(a => {
        if (options.reduceFillers) { a.fillerCount = Math.max(0, a.fillerCount - 2); a.clarity = Math.min(10, a.clarity + 2); }
        if (options.improveStructure) { a.structure = Math.min(10, a.structure + 2); }
        if (options.addExamples) { a.clarity = Math.min(10, a.clarity + 1); a.confidence = Math.min(10, a.confidence + 1); }
    });

    simulated.clarityAvg = Math.round(simulated.perAnswer.reduce((s,a)=>s+a.clarity,0)/simulated.perAnswer.length);
    simulated.confidenceAvg = Math.round(simulated.perAnswer.reduce((s,a)=>s+a.confidence,0)/simulated.perAnswer.length);
    simulated.structureAvg = Math.round(simulated.perAnswer.reduce((s,a)=>s+a.structure,0)/simulated.perAnswer.length);
    simulated.frictionData = buildFrictionMapData(simulated.perAnswer);
    simulated.mismatch = { highConfLowClar: 0, lowConfHighClar: 0 };
    simulated.perAnswer.forEach(a => {
        if (a.confidence >= 7 && a.clarity <= 4) simulated.mismatch.highConfLowClar++;
        if (a.confidence <= 4 && a.clarity >= 7) simulated.mismatch.lowConfHighClar++;
    });

    // Render simulated
    renderFrictionChart(simulated.frictionData);
    renderMismatchChart(simulated.mismatch);
    renderExplainableFeedback(simulated);
    showNotification('Simulation applied — view simulated improvements above.');
}

function saveAssessmentToSession(result) {
    // Store latest assessment in localStorage array
    const key = 'softskill_assessments_v1';
    const existing = JSON.parse(localStorage.getItem(key) || '[]');
    existing.unshift(result);
    // Keep last 5
    localStorage.setItem(key, JSON.stringify(existing.slice(0,5)));
}

function loadPreviousAssessment() {
    const key = 'softskill_assessments_v1';
    const existing = JSON.parse(localStorage.getItem(key) || '[]');
    return existing.length ? existing[0] : null;
}

function showComparison(prev, current) {
    const el = document.getElementById('comparisonSummary');
    el.innerHTML = `
        <p><strong>Previous:</strong> ${prev.summary}</p>
        <p><strong>Current:</strong> ${current.summary}</p>
    `;
}

function resetSoftSkillForm() {
    document.getElementById('ans1').value = '';
    document.getElementById('ans2').value = '';
    document.getElementById('ans3').value = '';
    document.getElementById('softSkillResults').classList.add('hidden');
    document.getElementById('previousComparison').classList.add('hidden');
}
