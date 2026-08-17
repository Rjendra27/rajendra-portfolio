import type { Project } from '../types/portfolio';

export const projectsData: Project[] = [
  {
    id: 'neverasolo',
    title: 'AI Travel Companion — NeverASolo',
    subtitle: 'NeverASolo',
    category: 'Full Stack',
    description: 'Travel planning platform focused on Indian destinations, with trip creation, itinerary planning, multilingual accessibility and responsive UI.',
    highlightText: 'Trip Planning • Destination Discovery',
    technologies: ['React', 'Tailwind CSS', 'Firebase', 'REST APIs'],
    features: [
      'Trip creation and personalized itinerary planning',
      'Curated coverage focused on Indian travel destinations',
      'Multilingual accessibility support for diverse users',
      'Responsive, modern UI built with clean component architecture',
      'REST API integration with extensible structure for Future AI Recommendation Support'
    ],
    githubUrl: 'https://github.com/Rjendra27/trip-together',
    liveUrl: 'https://trip-together-1.vercel.app',
    mockupType: 'terminal',
    caseStudy: {
      overview: 'NeverASolo (trip-together) is a full-stack web application designed to simplify trip planning and itinerary discovery across Indian destinations.',
      problem: 'Planning travel across India often requires combining fragmented travel guides, inconsistent schedules, and non-optimized booking interfaces.',
      approach: 'Constructed a responsive React frontend paired with Firebase for database persistence and REST API endpoints structured to support future AI recommendation modules.',
      architecture: [
        'React SPA Frontend',
        'Tailwind CSS Styling Tokens',
        'Firebase Authentication & Firestore',
        'REST API Service Layer'
      ],
      challenges: 'Ensuring seamless multi-step form state synchronization and maintaining low render latency across mobile viewports.',
      whatILearned: 'Gained hands-on experience in full-stack architecture design, responsive component modularity, and API abstraction.'
    }
  },
  {
    id: 'collision-alert',
    title: 'Collision Alert System',
    subtitle: 'Computer Vision for Vehicle Safety',
    category: 'Computer Vision',
    description: 'Real-time computer vision system for object detection, tracking and movement analysis to support proactive collision alerts.',
    highlightText: 'Real-Time Object Detection',
    technologies: ['Python', 'YOLOv8', 'OpenCV', 'PyTorch'],
    features: [
      'YOLOv8 object detection trained for vehicle recognition',
      'Frame-by-frame object tracking across continuous video streams',
      'Relative distance estimation algorithms',
      'Trajectory analysis and angular motion vector calculation',
      'Dynamic ROI (Region of Interest) processing to minimize false positive signals'
    ],
    githubUrl: 'https://github.com/Rjendra27/Collision-Alert-System',
    mockupType: 'flowchart',
    caseStudy: {
      overview: 'A computer vision safety application engineered to process video feeds and analyze spatial vehicle trajectories for proactive alert triggering.',
      problem: 'Automated driver assistance systems demand rapid spatial object analysis to identify dynamic collision hazards.',
      approach: 'Leveraged PyTorch and YOLOv8 for object detection, coupled with OpenCV geometric calculations to estimate dynamic distance vectors and ROI bounding boxes.',
      architecture: [
        'Camera Feed',
        'YOLOv8 Detection',
        'Object Tracking',
        'Distance Estimation',
        'Trajectory Analysis',
        'Collision Risk Analysis',
        'Alert Signal'
      ],
      challenges: 'Balancing processing speed with detection accuracy under varying camera angles and lighting conditions.',
      whatILearned: 'Deepened expertise in PyTorch tensor processing, real-time video frame manipulation with OpenCV, and geometric trajectory estimation.'
    }
  },
  {
    id: 'ipl-score',
    title: 'IPL Score Prediction',
    subtitle: 'Machine Learning + Web Application',
    category: 'AI / ML',
    description: 'Web application that predicts IPL innings scores using historical match data and selected match conditions.',
    highlightText: 'ML-Based Score Prediction',
    technologies: ['Python', 'Flask', 'TensorFlow/Keras', 'HTML', 'CSS', 'JavaScript'],
    features: [
      'Interactive web form for venue, batting team, bowling team, and player selection',
      'Machine learning model trained on historical Indian Premier League (IPL) match datasets',
      'Flask web application serving real-time model inference',
      'Clean interactive web frontend for match scenario evaluation'
    ],
    githubUrl: 'https://github.com/Rjendra27/ipl-score-prediction',
    mockupType: 'calculator',
    caseStudy: {
      overview: 'IPL Score Prediction integrates machine learning regression modeling with a Flask web application to predict match scores based on historical data.',
      problem: 'Cricket match outcomes depend on multiple dynamic variables (venue, match situation, overs, team rosters), making static guessing unreliable.',
      approach: 'Preprocessed IPL match historical records using Pandas, trained regression models, and built a Flask backend service to handle web inference requests.',
      architecture: [
        'Dataset Preprocessing & Encoding',
        'Regression Model Training',
        'Flask API Controller',
        'Interactive Web Interface'
      ],
      challenges: 'Handling categorical feature encoding for dynamic team compositions and venue historical variations.',
      whatILearned: 'Mastered machine learning deployment with Flask, web parameter passing, and categorical feature transformation.'
    }
  },
  {
    id: 'rainfall-ml',
    title: 'Rainfall Prediction using Machine Learning',
    subtitle: 'Machine Learning / Data Analytics',
    category: 'Data',
    description: 'Data analytics and machine learning research project evaluating multiple regression models to predict rainfall patterns using meteorological features.',
    highlightText: 'Evaluation Metrics: RMSE • MAE',
    technologies: ['Python', 'scikit-learn', 'Pandas', 'Power BI', 'Jupyter Notebook'],
    features: [
      'Comparative evaluation of 6 regression algorithms: Multivariate Linear Regression, MLP Regressor, KNeighbors Regressor, Ridge Regression, Random Forest Regressor, and SVR',
      'Model evaluation using standard statistical metrics (RMSE, MAE)',
      'Exploratory data analysis and meteorological feature importance profiling',
      'Interactive Power BI report for visual rainfall pattern inspection'
    ],
    githubUrl: 'https://github.com/Rjendra27/ML_rainfall_prediction',
    mockupType: 'chart',
    caseStudy: {
      overview: 'An analytical data science project benchmarking machine learning regression algorithms for weather dataset rainfall forecasting.',
      problem: 'Accurate rainfall estimation is crucial for regional planning but relies on complex non-linear meteorological parameters.',
      approach: 'Cleaned climate data in Pandas, trained scikit-learn models, evaluated error performance using RMSE and MAE, and visualized insights in Power BI.',
      architecture: [
        'Data Cleaning & Feature Engineering',
        'Model Benchmarking (Linear, MLP, KNN, Ridge, Random Forest, SVR)',
        'Statistical Evaluation (RMSE & MAE)',
        'Power BI Analytics Report'
      ],
      challenges: 'Mitigating feature collinearity and selecting optimal hyperparameter settings for non-linear regressors.',
      whatILearned: 'Strengthened understanding of data preprocessing pipelines, regression model trade-offs, and analytical reporting.'
    }
  },
  {
    id: 'voice-assistant',
    title: 'Personal Voice Assistant',
    subtitle: 'Python Application',
    category: 'AI / ML',
    description: 'Python-based personal voice assistant project.',
    highlightText: 'Python Scripting & System Dispatch',
    technologies: ['Python'],
    features: [
      'Python-based voice command recognition',
      'Automated task execution for local system utilities',
      'Modular command handler structure built in Python'
    ],
    githubUrl: 'https://github.com/Rjendra27/personal-voice-assistant',
    mockupType: 'voice',
    caseStudy: {
      overview: 'A Python-based personal voice assistant project designed for local command processing.',
      problem: 'Executing common desktop tasks manually requires repeated key input and context switching.',
      approach: 'Built audio listening and keyword mapping routines in Python to trigger local system functions.',
      architecture: [
        'Audio Stream Listener',
        'Keyword Parser',
        'System Command Execution'
      ],
      challenges: 'Managing audio input exceptions and command parsing accuracy.',
      whatILearned: 'Gained practical experience with Python system libraries and basic audio signal handling.'
    }
  }
];
