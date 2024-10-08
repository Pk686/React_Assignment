// courseData.js

export const courseData = [
  {
    id: 1,
    name: 'Introduction to React Native',
    instructor: 'John Doe',
    description: 'Learn the basics of React Native development and build your first mobile app.',
    enrollmentStatus: 'Open',
    duration: '8 weeks',
    thumbnail: '/images/ai.png',
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    progress:40,
    prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
    syllabus: [
      { week: 1, topic: 'Introduction to React Native', content: 'Overview of React Native, setting up your development environment.' },
      { week: 2, topic: 'Building Your First App', content: 'Creating a simple mobile app using React Native components.' },
    ],
    students: [
      { id: 101, name: 'Alice Johnson', email: 'alice@example.com' },
      { id: 102, name: 'Bob Smith', email: 'bob@example.com' },
    ],
    dueDate:'06/09/2024',
    likes: 85,
  },
  {
    id: 2,
    name: 'Advanced React',
    instructor: 'Jane Smith',
    description: 'Deep dive into advanced React concepts and build complex applications.',
    enrollmentStatus: 'In Progress',
    duration: '12 weeks',
    thumbnail: '/images/design.png',
    schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
    location: 'Online',
    progress:60,
    prerequisites: ['Intermediate JavaScript', 'Familiarity with React'],
    syllabus: [
      { week: 1, topic: 'React Hooks', content: 'Understanding the basics of hooks and their applications.' },
      { week: 2, topic: 'Context API', content: 'State management using Context API.' },
    ],
    students: [
      { id: 201, name: 'Chris Evans', email: 'chris@example.com' },
      { id: 202, name: 'Scarlett Johansson', email: 'scarlett@example.com' },
    ],
    dueDate:'05/09/2024',
    likes: 60,
  },
  {
    id: 3,
    name: 'Data Science with Python',
    instructor: 'Michael Brown',
    description: 'Learn data science concepts and apply them using Python.',
    enrollmentStatus: 'Open',
    duration: '10 weeks',
    thumbnail: '/images/about.png',
    schedule: 'Wednesdays and Fridays, 6:00 PM - 9:00 PM',
    location: 'Online',
    progress:70,
    prerequisites: ['Basic Python knowledge'],
    syllabus: [
      { week: 1, topic: 'Introduction to Data Science', content: 'Overview of data science concepts and tools.' },
      { week: 2, topic: 'Data Cleaning and Preprocessing', content: 'Understanding how to clean and preprocess data.' },
    ],
    students: [
      { id: 301, name: 'John Adams', email: 'john@example.com' },
      { id: 302, name: 'Emily Davis', email: 'emily@example.com' },
    ],
    dueDate:'08/09/2024',
    likes: 70,
  },
  {
    id: 4,
    name: 'Full Stack Web Development',
    instructor: 'Sarah Lee',
    description: 'Master full stack development with both frontend and backend technologies.',
    enrollmentStatus: 'Closed',
    duration: '16 weeks',
    thumbnail: '/images/ecom.png',
    schedule: 'Mondays and Thursdays, 7:00 PM - 10:00 PM',
    location: 'Online',
    progress:80,
    prerequisites: ['HTML, CSS, JavaScript'],
    syllabus: [
      { week: 1, topic: 'Introduction to Full Stack', content: 'Overview of frontend and backend technologies.' },
      { week: 2, topic: 'Frontend Development', content: 'Deep dive into frontend development with React.' },
    ],
    students: [
      { id: 401, name: 'William Turner', email: 'william@example.com' },
      { id: 402, name: 'Sophia Martinez', email: 'sophia@example.com' },
    ],
    dueDate:'07/09/2024',
    likes: 80,
  },
  {
    id: 5,
    name: 'UI/UX Design Essentials',
    instructor: 'Jessica White',
    description: 'Learn the fundamentals of user interface and user experience design.',
    enrollmentStatus: 'Open',
    duration: '6 weeks',
    thumbnail: '/images/seo.png',
    schedule: 'Tuesdays, 5:00 PM - 7:00 PM',
    location: 'Online',
    prerequisites: ['Basic design principles'],
    syllabus: [
      { week: 1, topic: 'Introduction to UI/UX', content: 'Understanding user interface and user experience design.' },
      { week: 2, topic: 'Design Thinking', content: 'Applying design thinking to solve user problems.' },
    ],
    students: [
      { id: 501, name: 'Lucas White', email: 'lucas@example.com' },
      { id: 502, name: 'Amelia Clark', email: 'amelia@example.com' },
    ],
    dueDate:'expired',
    likes: 100,
  },
  {
    id: 6,
    name: 'Machine Learning A-Z',
    instructor: 'David Kim',
    description: 'A complete guide to machine learning algorithms and their applications.',
    enrollmentStatus: 'In Progress',
    duration: '14 weeks',
    thumbnail: '/images/home.png',
    schedule: 'Saturdays and Sundays, 2:00 PM - 4:00 PM',
    location: 'Online',
    progress:90,
    prerequisites: ['Basic Python knowledge', 'Statistics'],
    syllabus: [
      { week: 1, topic: 'Introduction to Machine Learning', content: 'Overview of machine learning concepts.' },
      { week: 2, topic: 'Supervised Learning', content: 'Understanding supervised learning algorithms.' },
    ],
    students: [
      { id: 601, name: 'Daniel Scott', email: 'daniel@example.com' },
      { id: 602, name: 'Mia Lopez', email: 'mia@example.com' },
    ],
    dueDate:'09/09/2024',
    likes: 90,
  },
  {
    id: 7,
    name: 'Cloud Computing with AWS',
    instructor: 'Emily Johnson',
    description: 'Learn the fundamentals of cloud computing and how to use AWS services.',
    enrollmentStatus: 'Open',
    duration: '9 weeks',
    thumbnail: '/images/services.png',
    schedule: 'Wednesdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['Basic networking knowledge'],
    syllabus: [
      { week: 1, topic: 'Introduction to Cloud Computing', content: 'Overview of cloud computing concepts.' },
      { week: 2, topic: 'AWS Core Services', content: 'Understanding AWS core services.' },
    ],
    students: [
      { id: 701, name: 'Chris Miller', email: 'chris@example.com' },
      { id: 702, name: 'Olivia Wilson', email: 'olivia@example.com' },
    ],
    dueDate:'10/09/2024',
    likes: 70,
  },
  {
    id: 8,
    name: 'DevOps with Docker',
    instructor: 'Richard Brown',
    description: 'Learn how to automate deployment and management using Docker and Kubernetes.',
    enrollmentStatus: 'Closed',
    duration: '10 weeks',
    thumbnail: '/images/login.png',
    schedule: 'Thursdays and Saturdays, 4:00 PM - 6:00 PM',
    location: 'Online',
    progress:80,
    prerequisites: ['Basic Linux knowledge', 'Networking'],
    syllabus: [
      { week: 1, topic: 'Introduction to DevOps', content: 'Overview of DevOps principles and practices.' },
      { week: 2, topic: 'Docker Basics', content: 'Understanding Docker and containerization.' },
    ],
    students: [
      { id: 801, name: 'James Rodriguez', email: 'james@example.com' },
      { id: 802, name: 'Ella Hernandez', email: 'ella@example.com' },
    ],
    dueDate:'expired',
    likes: 40,
  },
  {
    id: 9,
    name: 'Cybersecurity for Beginners',
    instructor: 'Linda Thompson',
    description: 'Learn the basics of cybersecurity and how to protect digital assets.',
    enrollmentStatus: 'In Progress',
    duration: '8 weeks',
    thumbnail: '/images/support.png',
    schedule: 'Mondays and Fridays, 6:00 PM - 8:00 PM',
    location: 'Online',
    progress:50,
    prerequisites: ['Basic IT knowledge'],
    syllabus: [
      { week: 1, topic: 'Introduction to Cybersecurity', content: 'Overview of cybersecurity concepts and practices.' },
      { week: 2, topic: 'Network Security', content: 'Understanding how to secure networks.' },
    ],
    students: [
      { id: 901, name: 'Henry Lee', email: 'henry@example.com' },
      { id: 902, name: 'Ava Martinez', email: 'ava@example.com' },
    ],
    dueDate:'11/09/2024',
    likes: 10,
  },
  {
    id: 10,
    name: 'Artificial Intelligence for Everyone',
    instructor: 'Sophia Nguyen',
    description: 'An introduction to artificial intelligence and its applications across industries.',
    enrollmentStatus: 'Closed',
    duration: '7 weeks',
    thumbnail: '/images/register.png',
    schedule: 'Tuesdays, 7:00 PM - 9:00 PM',
    location: 'Online',
    progress:100,
    prerequisites: ['None'],
    syllabus: [
      { week: 1, topic: 'Introduction to AI', content: 'Overview of artificial intelligence concepts and history.' },
      { week: 2, topic: 'AI in Industry', content: 'Exploring the impact of AI across various industries.' },
    ],
    students: [
      { id: 1001, name: 'Liam Wilson', email: 'liam@example.com' },
      { id: 1002, name: 'Sophia Anderson', email: 'sophia@example.com' },
    ],
    dueDate:'12/09/2024',
    likes: 10,
  },
];