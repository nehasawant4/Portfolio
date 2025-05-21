import { captureOwnerStack } from "react";

export const items = [
    {
        id:1,
        title: 'Gitfluence - RAG',
        tech: 'React · FastAPI · LangChain · OpenAI API · Pinecone',
        img:'RAG.png',
        desc:'In most organizations, Confluence is the backbone of internal documentation — from API guides and onboarding manuals to product specs and test plans. Developers, testers, and team members rely on it daily, yet finding the right information or understanding outdated docs is a major pain point.\n\nThis app transforms documentation into a queryable, intelligent assistant.\n\n🔍 Ask questions about platform usage, UI flows, or how to construct API payloads — the AI retrieves the exact context from Confluence or GitHub.\n\n🔧 Integrate GitHub repos to query codebases directly and understand internal APIs, handlers, or utils without reading every file.\n\n📑 Bridge the gap between code and docs — the AI detects undocumented features or mismatched Confluence pages and suggests content updates.\n\nBuilt for developer enablement, QA assistance, and living documentation, this tool doesn\'t just read your docs — it understands them, reasons with them, and keeps them in sync with your code.',
        github:'https://github.com/nehasawant4/RAG-AgenticAI-Confluence',
        link:'https://rag-assist.vercel.app/',
        layout: [
            { type: 'text', content: 'In most organizations, Confluence is the backbone of internal documentation — from API guides and onboarding manuals to product specs and test plans.' },
            { type: 'text', content: 'Developers, testers, and team members rely on it daily, yet finding the right information or understanding outdated docs is a major pain point.' },
            { type: 'text', content: 'This app transforms documentation and codebase into a queryable, intelligent assistant.' },
            { type: 'image', src: 'rag-assist.png',},
            { type:'text', content:'Confluence integration allows for real-time document ingestion and processing.'},
            { type: 'image', src: 'ingest_confluence.png',},
            { type:'text', content:'GitHub integration enables code context to be included in the knowledge base.'},
            { type: 'image', src: 'ingest_github.png', },
            { type: 'text', content: '🔍 Ask questions about platform usage, UI flows, or how to construct API payloads — the AI retrieves the exact context from Confluence or GitHub.'},
            { type: 'text', content: '📑 Bridge the gap between code and docs — the AI detects undocumented features or mismatched Confluence pages and suggests content updates.'},
            { type: 'text', content: '👩🏻‍💻 Built for developer enablement, QA assistance, and living documentation, this tool doesn\'t just read your docs — it understands them, reasons with them, and keeps them in sync with your code.'},    
            { type: 'youtube', videoId: 'mYPHm5qu2Vc' },
            { type: 'youtube', videoId: 'aeqBr36kt4o' },
            { type: 'youtube', videoId: 'nSmSw1z3h3o' },
        ]
    },
    {
        id:2,
        title: 'Norma - RAG',
        tech: 'React · TypeScript · Python · Flask · Pinecone · FAISS · GPT-4',
        img:'Compliance.png',
        desc:'Easily audit and improve your SOPs, policies, and internal documentation with AI-powered insights and real-time comparison against FDA and other regulatory standards.',
        github:'https://github.com/vrushabhh97/NormaAI-RAG',
        link:'https://norma-ai-rag.vercel.app/',
        layout: [
            { type: 'text', content: '📄 Easily audit and improve your SOPs, policies, and internal documentation with AI-powered insights and real-time comparison against FDA and other regulatory standards.' },
            { type: 'text', content: '🏙️ Modern organizations face immense pressure to comply with a growing maze of regulations — from healthcare mandates like FDA, HIPAA, and GDPR, to internal policy standards and cloud security benchmarks. Yet, compliance reviews are often manual, time-consuming, and error-prone.' },
            { type: 'text', content: '☑️ This app brings AI into the compliance loop — making regulatory alignment faster, smarter, and actionable.' },
            { type: 'image', src: 'Norma.png'},
            { type: 'text', content: '💡 Origin\n\nOriginally built at a hackathon hosted by Commure, this idea stemmed from the need to automate regulatory SOP reviews in hospitals. The prototype resonated so well, we kept building beyond the hackathon — turning it into a scalable AI compliance solution.'},
            { type: 'text', content:'⚙️ How it works\n\nNorma analyzes your document against official regulatory standards using Retrieval-Augmented Generation (RAG).'},
            { type: 'text', content: '✨ Features'},
            { type: 'text', content: '1. Side-by-side comparison of your document and FDA requirements with issue breakdown.'},
            { type:'image', src:'Analysis.png',},
            { type: 'text', content: '2. Ask document-specific questions and get plain-language answers grounded in regulatory context.'},
            { type:'image', src:'Chatbot.png', },
            { type: 'text', content: '3. Quickly view and export AI-detected compliance gaps with actionable suggestions for each.'},
            { type:'image', src:'ActionItems.png', },

        ]
    },
    {
        id:3,
        title: 'Bilingual Math App',
        tech: 'Flutter, Firebase, Figma',
        img:'Fractions.png',
        desc:'A mobile app for iOS/Android designed meticulously in Figma and developed using Flutter and Firebase, intended to interactively teach mathematics, assisting Hispanic children to overcome language barriers. Features include quizzes, games, flashcards, text-to-speech, streak calendar, etc.',
        github:'https://github.com/nehasawant4/Bilingual-Maths-Flutter-App',
        layout: [
            { type: 'image', src: 'Fractions.png' },
            { type: 'text', content: 'A mobile app for iOS/Android designed meticulously in Figma and developed using Flutter and Firebase, intended to interactively teach mathematics, assisting Hispanic children to overcome language barriers.' },
            { type: 'text', content: 'Features include quizzes, games, flashcards, text-to-speech, streak calendar, etc.' }
        ]
    },
    {
        id:4,
        title: 'Data Structure Visualizer',
        tech: 'JavaFX, MVC, MongoDB',
        img:'DataStructures.png',
        desc:'Developed a React web application integrated with AWS for detection of Personal Protective Equipment and monitoring its compliance on custom building premises. Used Amazon Rekognition for detection of PPE in images. Additionally used services like Amazon S3, DynamoDB, etc.',
        github:'https://github.com/nehasawant4/Data-Structure-Visualizer',
        layout: [
            { type: 'text', content: 'Developed a React web application integrated with AWS for detection of Personal Protective Equipment and monitoring its compliance on custom building premises.' },
            { type: 'image', src: 'DataStructures.png' },
            { type: 'text', content: 'Used Amazon Rekognition for detection of PPE in images. Additionally used services like Amazon S3, DynamoDB, etc.' }
        ]
    },
    {
        id:5,
        title: 'Blogging App',
        tech: 'React, Next.js, CSS, MongoDB',
        img:'Blog.png',
        desc:'A full-stack blog app with responsive UI and interactive UX developed with React, Next.js, CSS, MongoDB, etc. The app supports CRUD operations for blogs and comments, filtering of blogs based on categories and users, pagination, Google OAuth for Google Sign-In, etc.',
        link:'https://github.com/nehasawant4/Blogging-App-React',
        github:'https://github.com/nehasawant4/Blogging-App-React',
        layout: [
            { type: 'text', content: 'A full-stack blog app with responsive UI and interactive UX developed with React, Next.js, CSS, MongoDB.' },
            { type: 'image', src: 'Blog.png' },
            { type: 'text', content: 'The app supports CRUD operations for blogs and comments, filtering of blogs based on categories and users, pagination, Google OAuth for Google Sign-In, etc.' }
        ]
    },

];