import {
    Boxes,
    GraduationCap,
    PackageSearch,
    Sparkles,
    FileText,
    Percent,
    Building2,
    Banknote,
    BarChart4,
    Database,
    BookOpen,
    Stethoscope,
    HeartPulse,
  } from "lucide-react";
  
  export const products = [
    {
      id: "erp-system",
      title: "Enterprise Resource Planning (ERP) Solutions",
      icon: Boxes,
      color: "from-blue-500 to-blue-700",
      short:
        "Transform the way you manage your business with our fully integrated ERP system.",
      description:
        "Our ERP (Enterprise Resource Planning) system is a comprehensive, integrated solution designed to streamline and automate your core business processes — from finance, HR, and sales to inventory, production, and customer management. With a unified platform, businesses can eliminate data silos, enhance efficiency, and gain real-time insights for smarter decision-making.",
      features: [
        "Centralized Dashboard: Get a complete overview of your organization’s operations in one place.",
        "Financial Management: Automate accounting, invoicing, and reporting with precision and transparency.",
        "Inventory & Supply Chain: Manage stock levels, suppliers, and distribution efficiently to avoid bottlenecks.",
        "Human Resource Management: Streamline employee records, payroll, attendance, and performance tracking.",
        "Customer Relationship Management (CRM): Maintain stronger relationships with clients and track customer interactions seamlessly.",
        "Project & Task Management: Assign, monitor, and complete tasks within defined timelines and budgets.",
        "Analytics & Reporting: Gain actionable insights with real-time reports and customizable data visualizations.",
        "Role-Based Access: Ensure data security and smooth operations with controlled access levels.",
      ],
      benefits: [
        "Boost operational efficiency and reduce manual work.",
        "Improve collaboration across departments.",
        "Achieve real-time visibility into business performance.",
        "Scale effortlessly as your business grows.",
        "Make data-driven strategic decisions.",
      ],
      industries: [
        "Manufacturing",
        "Retail",
        "Education",
        "Healthcare",
        "Construction",
        "Trading",
        "IT Services",
      ],
      techStackNote:
        "We use the latest and most secure technologies to ensure speed, security, and scalability for your institution.",
      images: ["/images/erp1.png", "/images/erp2.png", "/images/erp3.png"],
    },

    {
      id: "student-management-system",
      title: "Student Management System (SMS)",
      icon: GraduationCap,
      color: "from-green-500 to-emerald-600",
      short:
        "Empowering institutions through smart student data management and automation.",
      description:
        "Our Student Management System (SMS) is a powerful, all-in-one digital platform designed to simplify and automate academic and administrative tasks for educational institutions. From student enrollment to attendance, grading, and communication, our system centralizes every process — helping schools, colleges, and universities operate efficiently and transparently.",
      features: [
        "Student Information Management: Maintain a centralized database of student profiles, academic records, and attendance.",
        "Admission & Enrollment: Digitize the entire admission process — from applications to merit-based selection and enrollment.",
        "Attendance Tracking: Automate attendance marking and generate real-time attendance reports.",
        "Examination & Grading: Manage exam schedules, grading systems, and performance analytics.",
        "Timetable Management: Create and manage class schedules for departments or grades efficiently.",
        "Fees Management: Track payments, generate invoices, and send automated reminders.",
        "Parent-Teacher Communication: Strengthen engagement with notifications, messages, and updates.",
        "Library Management: Digitize catalogs, issue/return processes, and track book inventory.",
        "Reports & Analytics: Generate insightful reports on performance and attendance trends."
      ],
      benefits: [
        "Simplifies and automates administrative work.",
        "Enhances transparency and communication between staff, students, and parents.",
        "Reduces paperwork and human error.",
        "Provides real-time data for better academic decisions.",
        "Improves academic and operational efficiency."
      ],
      industries: [
        "Schools",
        "Colleges & Universities",
        "Coaching Institutes",
        "Training Centers"
      ],
      techStackNote:
        "We use the latest and most secure technologies to ensure speed, security, and scalability for your institution.",
      images: [
        "/images/sms1.png",
        "/images/sms2.png",
        "/images/sms3.png",
        "/images/sms4.png"
      ]
    },
    
    {
      id: "inventory-management-system",
      title: "Inventory Management System (IMS)",
      icon: PackageSearch,
      color: "from-purple-500 to-indigo-600",
      short:
        "Smart Inventory Solutions for Smarter Businesses - manage, track, and optimize inventory effortlessly.",
      description:
        "Our Inventory Management System (IMS) is an advanced, end-to-end software solution that helps businesses efficiently track, manage, and optimize their inventory across multiple locations. From stock monitoring and purchase orders to sales tracking and supplier management, our IMS ensures you have complete visibility and control over your inventory at all times.",
      features: [
        "Real-Time Inventory Tracking: Monitor stock levels, product movements, and availability in real-time.",        
        "Stock Alerts & Notifications: Receive low-stock and reorder alerts to avoid stockouts or overstocking.",
        "Purchase & Supplier Management: Streamline purchase orders, vendor records, and payment tracking.",
        "Sales Management: Track customer orders, invoices, and sales history effortlessly.",
        "Warehouse Management: Manage multiple warehouses with centralized data and easy transfer tracking.",
        "Category & Product Management: Organize items by type, category, or location for efficient operations.",
        "Reports & Analytics: Generate detailed reports on stock levels, sales trends, and profitability.",
        "Role-Based Access Control: Secure sensitive data with user-level permissions and activity tracking."
      ],
      benefits: [
        "Minimizes manual errors and reduces stock wastage.",
        "Increases operational efficiency and accuracy.",
        "Provides real-time insights for better decision-making.",
        "Enhances coordination between purchase, sales, and finance teams.",
        "Scalable solution that grows with your business."
      ],
      industries: [
        "Retail & Wholesale Businesses",
        "Manufacturers & Distributors",
        "E-commerce Platforms",
        "Warehouses & Logistics Companies",
        "Pharmacies & Auto Parts Stores"
      ],
      techStackNote:
        "We use the latest and most secure technologies to ensure reliability, scalability, and smooth performance for your business.",
      images: [
        "/images/ird1.jpg",
        "/images/ird2.png",
        "/images/ird3.png"
      ]
    },
    
    
    {
      id: "custom-made-solutions",
      title: "Custom-Made Software Solutions",
      icon: Sparkles,
      color: "from-pink-500 to-red-600",
      short:
        "Tailored technology solutions designed to match your business goals, workflow, and vision.",
      description:
        "Every business is different and so are its challenges. Our Custom-Made Software Solutions are designed to perfectly align with your business goals, processes, and requirements. Whether you need a web application, automation tool, analytics dashboard, or a complete enterprise system, we build software that fits your vision, not the other way around.",
      features: [
        "Fully Customized Development: Built from scratch to meet your specific workflow, branding, and goals.",
        "Scalable Architecture: Designed to grow seamlessly as your business expands.",
        "Integration Capabilities: Easily connects with your existing tools, databases, and third-party applications.",
        "User-Centric Design: Clean, intuitive interfaces that enhance productivity and user experience.",
        "Automation & Efficiency: Reduce manual processes and operational costs through smart automation.",
        "Advanced Security: Data protection and privacy at every layer of the application.",
        "Continuous Support: From initial development to post-deployment maintenance and updates."
      ],
      benefits: [
        "100% tailored to your business needs.",
        "Boosts productivity and efficiency.",
        "Reduces dependency on multiple tools.",
        "Provides long-term cost savings.",
        "Offers better flexibility and control over data and processes."
      ],
      industries: [
        "Startups & Small Businesses",
        "Enterprises",
        "Educational Institutions",
        "Healthcare & Finance",
        "Retail & E-commerce"
      ],
      expertise: [
        "Business Process Automation Tools",
        "Data Management Systems",
        "Web & Mobile Applications",
        "E-commerce Platforms",
        "Dashboards & Analytics Systems",
        "Integration & API Solutions"
      ],
      techStackNote:
        "We use the latest and most reliable technologies to ensure top performance, security, and scalability.",
      images: [
        "/images/cms1.png",
        "/images/cms2.png",
        "/images/cms3.png",
        "/images/cms4.png",
      ]
    },
    

    {
      id: "fra-proposal-consultancy",
      title: "FRA Proposal Consultancy",
      icon: FileText,
      color: "from-indigo-500 to-sky-600",
      short:
        "Simplifying compliance and empowering communities through expert FRA proposal guidance.",
      description:
        "Our FRA Proposal Consultancy service provides complete guidance and support for preparing and submitting Forest Rights Act (FRA) proposals. We help government bodies, NGOs, and private institutions manage documentation, verification, and approval processes efficiently and transparently.",
      features: [
        "End-to-end FRA proposal preparation and management.",
        "Documentation and data verification support.",
        "Coordination with local authorities and departments.",
        "Real-time progress tracking and report generation.",
        "Expert advisory on compliance and legal standards."
      ],
      benefits: [
        "Saves time and reduces manual errors.",
        "Ensures 100% compliance with FRA regulations.",
        "Streamlined approval process and better coordination."
      ],
      expertise: [
        "Data-backed proposal creation.",
        "Compliance documentation for FRA projects.",
        "Audit-ready submission workflows."
      ],
      techStackNote:
        "We use modern digital tools and compliance automation systems to ensure accuracy and transparency throughout the FRA process.",
      images: [
        "/images/fra1.png",
        "/images/fra2.png",
        "/images/fra3.png",
        "/images/fra4.png"
      ]
    },
    


    {
      id: "tds-consultancy",
      title: "TDS Consultancy",
      icon: Percent,
      color: "from-yellow-500 to-amber-600",
      short:
        "Accurate and hassle-free TDS compliance solutions for stress-free tax management.",
      description:
        "Our TDS Consultancy services help organizations maintain flawless tax compliance by managing TDS deductions, return filings, and reconciliation ensuring zero penalties and complete accuracy.",
      features: [
        "Accurate calculation and deduction of TDS.",
        "Filing of quarterly and annual TDS returns.",
        "Generation of Form 16/16A for employees and vendors.",
        "PAN verification and correction support.",
        "Compliance advisory and audit assistance."
      ],
      benefits: [
        "Avoids penalties and late fees.",
        "Ensures timely and error-free TDS filing.",
        "Simplifies the entire tax deduction and management process.",
        "Brings transparency and accountability to compliance operations."
      ],
      expertise: [
        "End-to-end TDS compliance management.",
        "Support for both employee and vendor deductions.",
        "Experience with TRACES, NSDL, and e-filing systems."
      ],
      techStackNote:
        "We use reliable and government-approved utilities like Excel, TDS Utility, and TRACES portal integration for accurate compliance tracking.",
      images: [
        "/images/tds1.png",
        "/images/tds2.png",
        "/images/tds3.png"
      ]
    },

    
    {
      id: "pf-consultancy",
      title: "PF Consultancy",
      icon: Building2,
      color: "from-teal-500 to-cyan-600",
      short:
        "Simplify PF registration, filing, and compliance with our end-to-end consultancy services.",
      description:
        "Our PF Consultancy streamlines the entire Provident Fund process from registration to contribution filing. We handle your compliance operations so you can focus on your business.",
      features: [
        "New PF registration and account setup.",
        "Monthly contribution and challan generation.",
        "Employee KYC and data management.",
        "Filing of ECR returns with accuracy.",
        "Advisory on EPF notifications and amendments."
      ],
      benefits: [
        "Hassle-free PF operations.",
        "Avoids fines and compliance delays.",
        "Smooth communication with EPFO authorities.",
        "Reduces manual effort and administrative workload."
      ],
      expertise: [
        "EPF documentation and record management.",
        "Payroll integration with PF systems.",
        "PF compliance audits for organizations of all sizes."
      ],
      techStackNote:
        "We utilize tools like Excel, EPFO Portal, and secure Digital Signature integrations to ensure compliant, reliable PF operations.",
      images: [
        "/images/pf5.png",
        "/images/pf2.png",
        "/images/pf3.png",
        "/images/pf4.png",
        "/images/pf1.png"
      ]
    },
    
    {
      id: "professional-tax-consultancy",
      title: "Professional Tax Consultancy",
      icon: Banknote,
      color: "from-orange-500 to-red-500",
      short:
        "Simplify your professional tax registration, filing, and compliance with expert guidance.",
      description:
        "Our Professional Tax Consultancy ensures that your organization meets all state-level tax obligations with timely registration, calculation, and return filing.",
      features: [
        "Professional Tax (PT) registration and certificate renewal.",
        "Monthly and annual tax calculation with accuracy.",
        "Return filing and payment tracking through official portals.",
        "Maintenance of tax records and challans for audits.",
        "Advisory for multi-state professional tax compliance."
      ],
      benefits: [
        "Reduces compliance burden and administrative work.",
        "Ensures timely and accurate PT return filing.",
        "Avoids penalties, interest, and legal issues.",
        "Provides centralized PT management across multiple states."
      ],
      expertise: [
        "Handling PT compliance for multi-state organizations.",
        "Automation-ready systems for payroll and Tally integration.",
        "Experience across diverse industries and state tax rules."
      ],
      techStackNote:
        "We use Excel, state PT portals, and MySQL-based record systems integrated with payroll and Tally for seamless compliance tracking.",
      images: [
        "/images/pt1.png",
        "/images/pt2.png",
        "/images/pt3.png",
        "/images/pt4.png"
      ]
    },
    
    {
      id: "financial-project-consultancy",
      title: "Financial Project Consultancy",
      icon: BarChart4,
      color: "from-gray-700 to-gray-900",
      short:
        "Excel-based financial modeling and project analysis for smarter business planning.",
      description:
        "Our Financial Project Consultancy helps organizations prepare professional, Excel-based financial reports and projections for funding, evaluation, or strategic planning.",
      features: [
        "Custom Excel-based financial model creation.",
        "Cost estimation and ROI analysis for projects.",
        "Cash flow forecasting and feasibility studies.",
        "Funding proposal and documentation support.",
        "Performance, variance, and break-even analysis."
      ],
      benefits: [
        "Simplifies decision-making with accurate data insights.",
        "Improves project transparency and financial accuracy.",
        "Creates investor-ready financial reports and models.",
        "Supports better financial control and planning."
      ],
      expertise: [
        "Building reliable financial models in Excel and Power BI.",
        "Experience in multi-sector financial report development.",
        "Data visualization and scenario-based forecasting."
      ],
      techStackNote:
        "We use Excel, Power BI, and SQL/CSV-based input systems integrated with ERP or accounting platforms to create accurate, professional-grade financial models.",
      images: [
        "/images/fpc1.png",
        "/images/fpc2.png",        
        "/images/fpc4.png"
      ]
    },
    


    {
      id: "tally-data-import-export",
      title: "Tally Data Import & Export",
      icon: Database,
      color: "from-lime-500 to-green-600",
      short:
        "Seamless and secure Tally data integration with Excel and multi-company support.",
      description:
        "Our Tally Data Import & Export service ensures accurate, secure, and quick data transfer across multiple companies, years, or branches saving you hours of manual work.",
      features: [
        "Import/export of ledgers, vouchers, and master data.",
        "Excel-to-Tally and Tally-to-Excel automation.",
        "Comprehensive data validation and correction.",
        "Multi-company and multi-year data migration.",
        "Automated backup and recovery support."
      ],
      benefits: [
        "Eliminates manual entry errors and data duplication.",
        "Saves significant time and improves efficiency.",
        "Ensures complete accuracy and consistency across systems.",
        "Supports smooth Tally data synchronization between branches."
      ],
      expertise: [
        "Tally customization and XML-based integration.",
        "Data cleaning and mapping between Excel and Tally.",
        "Experience with financial data migration and audits."
      ],
      techStackNote:
        "We utilize Tally ERP, Excel, and XML/JSON import utilities integrated with secure MySQL or Tally data files to ensure reliable, scalable operations.",
      images: [
        "/images/tally1.png",
        "/images/tally2.png",
        "/images/tally3.png"
      ]
    },
    


    {
      id: "library-management-system",
      title: "Library Management System",
      icon: BookOpen,
      color: "from-emerald-500 to-teal-600",
      short:
        "Digitize and automate your library operations with smart cataloging and tracking tools.",
      description:
        "Our Library Management System automates and digitizes every aspect of your library from cataloging to issuing books providing a smarter, faster, and more efficient way to manage resources.",
      features: [
        "Digital catalog and member management system.",
        "Barcode/QR-based book issue and return tracking.",
        "Automated fine calculation and late fee management.",
        "Real-time reporting on usage, inventory, and demand.",
        "Support for multiple branches and online access."
      ],
      benefits: [
        "Improves operational efficiency and reduces manual work.",
        "Enhances student and librarian experience through automation.",
        "Provides real-time tracking, reporting, and analytics.",
        "Fully scalable and customizable for all institution sizes."
      ],
      expertise: [
        "System design for schools, colleges, and universities.",
        "Integration with student portals and academic management systems.",
        "Experience in secure, cloud-ready library software."
      ],
      techStackNote:
        "We use the latest technologies such as React, Flask/Django, and SQL-based databases to deliver a secure, scalable, and user-friendly experience.",
      images: [
        "/images/library1.png",
        "/images/library2.png",
        "/images/library3.png",
        "/images/library4.png"
      ]
    },
    


{
  id: "hospital-management-system",
  title: "Hospital Management System",
  icon: HeartPulse,
  color: "from-red-500 to-rose-600",
  short:
    "A complete digital platform to manage hospital operations, patients, and administration efficiently.",
  description:
    "Our Hospital Management System (HMS) is a comprehensive digital solution that integrates patient care, billing, inventory, and administration ensuring smooth operations, reduced errors, and improved service delivery across healthcare facilities.",
  features: [
    "Patient registration and appointment scheduling.",
    "Doctor and staff information management.",
    "EMR (Electronic Medical Records) and prescription tracking.",
    "Billing, insurance, and pharmacy management modules.",
    "Lab test, diagnostics, and reporting integration.",
    "Role-based access and secure data management."
  ],
  benefits: [
    "Streamlines hospital operations and workflow.",
    "Improves patient satisfaction and service efficiency.",
    "Enhances data accuracy, reporting, and transparency.",
    "Ensures regulatory compliance and data privacy."
  ],
  expertise: [
    "Development of scalable healthcare software for hospitals, clinics, and diagnostic centers.",
    "Integration with EMR, pharmacy, and laboratory systems.",
    "Experience in building HIPAA/GDPR-compliant solutions."
  ],
  techStackNote:
    "We use the latest and most reliable technologies to deliver secure, scalable, and compliant healthcare solutions ensuring top-tier performance for hospitals and clinics.",
  images: [
    "/images/hms1.png",
    "/images/hms2.png",
    "/images/hms3.png",
  ]
},

  ];
  