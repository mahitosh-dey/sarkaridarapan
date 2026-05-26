import type { TocItem } from "@/components/ui/TableOfContents";

// =============================================================================
// Guide Types
// =============================================================================

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Guide {
  slug: string;
  title: string;
  description: string;
  category: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  image?: string;
  content: string;
  tags: string[];
  faqs?: FAQItem[];
}

// =============================================================================
// Guide Categories
// =============================================================================

export const GUIDE_CATEGORIES = [
  "Exam Preparation",
  "Career Guide",
  "Scheme Guide",
  "Application Help",
] as const;

export type GuideCategory = (typeof GUIDE_CATEGORIES)[number];

// =============================================================================
// Helper: slugify heading text (matches rehype-slug output)
// =============================================================================

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

// =============================================================================
// Extract TOC items from markdown headings
// =============================================================================

export function extractTocItems(markdown: string): TocItem[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const items: TocItem[] = [];
  let match;

  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length;
    const title = match[2].trim();
    items.push({
      id: slugify(title),
      title,
      level,
    });
  }

  return items;
}

// =============================================================================
// Starter Guide Content
// =============================================================================

const guides: Guide[] = [
  {
    slug: "how-to-prepare-for-ssc-cgl",
    title: "How to Prepare for SSC CGL 2026 - Complete Strategy Guide",
    description:
      "A comprehensive preparation strategy for SSC CGL 2026 covering syllabus, study plan, best books, and expert tips to crack the exam in the first attempt.",
    category: "Exam Preparation",
    author: "SarkariDarapan Team",
    publishedAt: "2026-01-15",
    updatedAt: "2026-05-20",
    tags: ["SSC CGL", "SSC", "Government Exams", "Preparation Tips", "Study Plan"],
    content: `## What is SSC CGL?

The Staff Selection Commission Combined Graduate Level (SSC CGL) examination is one of the most sought-after competitive exams in India. Conducted annually by the Staff Selection Commission, it recruits candidates for various Group B and Group C posts across central government ministries, departments, and organizations. Posts include Tax Assistant, Auditor, Inspector, Sub-Inspector, and Assistant in ministries like Finance, External Affairs, and Statistics.

SSC CGL is known for its vast syllabus and intense competition, with millions of aspirants appearing every year. However, with the right preparation strategy, consistent effort, and smart study techniques, you can crack this exam in your very first attempt.

## SSC CGL 2026 Exam Pattern

Understanding the exam pattern is the first step toward effective preparation. SSC CGL is conducted in two tiers:

### Tier 1 - Computer Based Examination

Tier 1 is the preliminary screening round with the following structure:

- **General Intelligence & Reasoning** - 25 questions, 50 marks
- **General Awareness** - 25 questions, 50 marks
- **Quantitative Aptitude** - 25 questions, 50 marks
- **English Comprehension** - 25 questions, 50 marks
- **Total**: 100 questions, 200 marks, 60 minutes duration
- **Negative Marking**: 0.50 marks deducted for each wrong answer

### Tier 2 - Computer Based Examination

Tier 2 is the main examination for final selection:

- **Paper 1 (Compulsory)**: Mathematical Abilities, Reasoning, English/Hindi, General Awareness, Computer Knowledge - 390 marks
- **Paper 2 (For JSO posts)**: Statistics - 200 marks
- **Paper 3 (For AAO posts)**: General Studies (Finance & Economics) - 200 marks

## Subject-wise Preparation Strategy

### Quantitative Aptitude

Quantitative Aptitude carries significant weight in both tiers. Focus on these high-scoring topics:

- **Arithmetic**: Percentage, Profit & Loss, SI/CI, Time & Work, Time Speed & Distance, Ratio & Proportion, Average, Mixture & Alligation
- **Algebra**: Linear equations, Quadratic equations, Surds & Indices
- **Geometry**: Triangles, Circles, Quadrilaterals, Coordinate geometry
- **Trigonometry**: Heights & Distances, Identities
- **Data Interpretation**: Tables, Pie charts, Bar graphs, Line graphs

Start with NCERT books from Class 9 and 10 to build your foundation. Then move to advanced problem-solving books like Rakesh Yadav or Kiran Prakashan. Practice at least 50 questions daily to build speed and accuracy.

### General Intelligence and Reasoning

Reasoning is often the highest-scoring section for well-prepared candidates. Cover these areas:

- **Verbal Reasoning**: Analogy, Classification, Series, Coding-Decoding, Blood Relations, Direction Sense, Syllogism, Statement & Conclusions
- **Non-Verbal Reasoning**: Pattern completion, Mirror/Water images, Figure counting, Paper folding, Embedded figures

Practice reasoning puzzles regularly. This section rewards consistent practice more than theoretical study. Aim to solve reasoning sets in under 15 minutes during mock tests.

### English Language and Comprehension

For English, focus on both grammar fundamentals and comprehension skills:

- **Grammar**: Tenses, Subject-Verb Agreement, Articles, Prepositions, Active/Passive Voice, Direct/Indirect Speech
- **Vocabulary**: Synonyms, Antonyms, Idioms & Phrases, One-word substitutions, Spelling corrections
- **Comprehension**: Reading comprehension passages, Cloze tests, Para jumbles, Sentence improvement and error spotting

Read English newspapers daily, particularly editorials. Maintain a vocabulary notebook and learn 10 new words every day with their usage in sentences.

### General Awareness

General Awareness requires regular and consistent effort:

- **Static GK**: Indian History, Geography, Polity, Economy, Science, Culture
- **Current Affairs**: Last 6 months news covering national, international, sports, awards, summits, government schemes
- **Economy**: Budget highlights, RBI policies, GDP data, inflation data

Read a daily current affairs digest and make short notes. Revise static GK topics from Lucent's General Knowledge or a similar comprehensive book. Follow government scheme announcements closely.

## 6-Month Study Plan

### Month 1-2: Foundation Building

- Complete NCERT books for all subjects (Class 6-10)
- Focus on understanding basic concepts, especially in Mathematics
- Start reading the newspaper daily for current affairs
- Take a diagnostic mock test to identify strengths and weaknesses

### Month 3-4: Advanced Preparation

- Move to advanced-level books for each subject
- Start topic-wise practice with timed sessions
- Solve previous year papers (last 5 years minimum)
- Begin attempting full-length mock tests weekly

### Month 5: Revision and Mock Tests

- Intensive revision of all subjects
- Attempt 3-4 full-length mock tests per week
- Analyze each mock test to identify recurring mistakes
- Focus on weak areas while maintaining strengths

### Month 6: Final Push

- Daily mock tests in exam-like conditions
- Quick revision from short notes
- Focus on current affairs from the last 3 months
- Manage exam anxiety through meditation and proper sleep

## Best Books for SSC CGL Preparation

- **Quantitative Aptitude**: Rakesh Yadav (7300+ Objectivewise), R.S. Aggarwal
- **Reasoning**: Kiran Prakashan, R.S. Aggarwal (Verbal & Non-Verbal)
- **English**: S.P. Bakshi (Objective General English), Neetu Singh (Plinth to Paramount)
- **General Awareness**: Lucent's General Knowledge, Pratiyogita Darpan magazine
- **Previous Year Papers**: Kiran's SSC CGL Solved Papers

## Expert Tips to Crack SSC CGL

1. **Start early and be consistent** - Regular study of 6-8 hours is more effective than marathon sessions
2. **Mock tests are non-negotiable** - They simulate exam conditions and improve time management
3. **Analyze mistakes** - Maintain an error log and revisit problematic topics weekly
4. **Don't ignore negative marking** - Avoid random guessing; attempt only when you can eliminate at least two options
5. **Stay updated with current affairs** - Dedicate 30 minutes daily to news reading and note-making
6. **Health matters** - Regular exercise, proper sleep, and a balanced diet keep your mind sharp
7. **Join a study group** - Discussing concepts with peers deepens understanding and keeps you motivated
8. **Revise regularly** - Follow the spaced repetition technique for long-term retention

## Important Dates and Resources

Keep checking the official SSC website (ssc.gov.in) for the latest notifications about SSC CGL 2026. Typically, the notification is released between March and April, with the Tier 1 exam scheduled between June and August. Start your preparation well in advance to give yourself enough time to cover the entire syllabus.

Remember, SSC CGL is a marathon, not a sprint. Stay patient, stay consistent, and trust the process. Thousands of candidates clear this exam every year, and with dedicated effort, you can be one of them.`,
  },
  {
    slug: "complete-guide-to-pm-kisan-yojana",
    title: "Complete Guide to PM Kisan Samman Nidhi Yojana 2026",
    description:
      "Everything you need to know about PM-KISAN Yojana including eligibility, benefits, registration process, installment status check, and common issues with solutions.",
    category: "Scheme Guide",
    author: "SarkariDarapan Team",
    publishedAt: "2026-02-10",
    updatedAt: "2026-05-18",
    tags: ["PM Kisan", "Government Schemes", "Agriculture", "Farmer Welfare", "Direct Benefit Transfer"],
    content: `## What is PM Kisan Samman Nidhi Yojana?

Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) is a landmark central government scheme launched on 1st February 2019 by Prime Minister Narendra Modi. Under this scheme, eligible farmer families across India receive direct income support of Rs. 6,000 per year, transferred in three equal installments of Rs. 2,000 each, directly into their bank accounts through Direct Benefit Transfer (DBT).

The scheme aims to supplement the financial needs of small and marginal farmers in procuring various inputs to ensure proper crop health and appropriate yields. Since its inception, PM-KISAN has benefited over 11 crore farmer families across the country, making it one of the largest direct benefit transfer programs in the world.

## Who is Eligible for PM Kisan Yojana?

### Eligibility Criteria

All landholding farmer families across the country are eligible for the scheme, subject to certain exclusion criteria. A farmer family is defined as a family comprising husband, wife, and minor children who own cultivable land as per the land records of the respective state or union territory.

### Exclusion Categories

The following categories of beneficiaries are NOT eligible for benefits under PM-KISAN:

- **Institutional Land Holders**: Farmers who hold institutional land are excluded
- **Former and Present Government Employees**: Serving or retired officers and employees of central/state government ministries, departments, and offices, along with their family members. Multi-tasking staff and Group D employees are exempted from this exclusion
- **Income Tax Payers**: Farmer families in which one or more members are income tax payers (for the last assessment year)
- **Constitutional Post Holders**: Former and present holders of constitutional posts
- **Professionals**: Registered doctors, engineers, lawyers, chartered accountants, and architects with professional bodies who practice their profession
- **Pensioners**: Retired pensioners receiving monthly pension of Rs. 10,000 or more (excluding MTS/Group D employees)

## How Much Money Do Beneficiaries Receive?

Under PM-KISAN, each eligible farmer family receives Rs. 6,000 per year in three installments:

- **Installment 1** (April to July): Rs. 2,000
- **Installment 2** (August to November): Rs. 2,000
- **Installment 3** (December to March): Rs. 2,000

The amount is transferred directly to the bank account of the beneficiary through the Direct Benefit Transfer mechanism, ensuring transparency and eliminating middlemen.

## How to Register for PM Kisan Yojana

### Online Registration (Self-Registration)

You can register yourself for PM-KISAN through the official portal. Follow these steps:

1. Visit the official PM-KISAN website at **pmkisan.gov.in**
2. Click on **"New Farmer Registration"** on the homepage
3. Select your registration type - Rural or Urban farmer
4. Enter your **Aadhaar number** and select your state
5. Enter the **CAPTCHA** and click on **"Get OTP"** sent to your Aadhaar-linked mobile number
6. Fill in the registration form with your personal details including name, gender, category (SC/ST/General), bank account details, and IFSC code
7. Enter your **land details** including survey number, Khata number, and area of land
8. Upload required documents
9. Submit the form and note down the registration number for future reference

### Offline Registration (Through CSC or Local Office)

If you prefer offline registration or face difficulties with online registration:

1. Visit your nearest **Common Service Centre (CSC)** or **Krishi Vigyan Kendra**
2. Contact your **Lekhpal/Patwari** or **Village Level Worker (VLW)**
3. Visit the local **Agriculture Department office** in your block or district
4. Carry all required documents (Aadhaar card, land records, bank passbook, mobile number)
5. The officer will help you fill out the registration form and submit it on your behalf

### Required Documents

- **Aadhaar Card** (mandatory for all beneficiaries)
- **Land Ownership Documents** (Khatauni, Khasra, or equivalent land records)
- **Bank Account Passbook** (first page with account number and IFSC code)
- **Mobile Number** linked with Aadhaar for OTP verification

## How to Check PM Kisan Installment Status

### Method 1: Through the Official Website

1. Visit **pmkisan.gov.in**
2. Click on **"Beneficiary Status"** in the menu
3. Enter your **Aadhaar Number**, **Account Number**, or **Mobile Number**
4. Click **"Get Data"** to view your payment history and installment status

### Method 2: Through the PM-KISAN Mobile App

1. Download the **PM-KISAN** app from Google Play Store
2. Open the app and tap on **"Check Beneficiary Status"**
3. Enter your details to view your installment information

### Method 3: Check via Helpline

Call the PM-KISAN helpline at **155261** or **011-24300606** during working hours (Monday to Friday, 9:30 AM to 6:00 PM) to inquire about your installment status.

## PM Kisan eKYC - Why It's Important

The government has made **eKYC mandatory** for all PM-KISAN beneficiaries. Without completing eKYC, your installments may be held. Here is how to complete it:

### Online eKYC

1. Visit **pmkisan.gov.in** and click on **"eKYC"**
2. Enter your **Aadhaar number** linked with PM-KISAN
3. Click **"Search"** and verify your details
4. Enter the **OTP** sent to your Aadhaar-linked mobile number
5. Submit to complete eKYC

### Biometric eKYC at CSC

If OTP-based eKYC fails or your mobile number is not linked with Aadhaar, visit a CSC center for biometric-based eKYC using fingerprint verification.

## Common Issues and Solutions

### Issue 1: Installment Not Received

- Check if your eKYC is completed
- Verify your Aadhaar is seeded with your bank account
- Check if your land records are verified by the state government
- Ensure your name in Aadhaar matches the name in bank records

### Issue 2: Registration Rejected

- Ensure you do not fall under any exclusion category
- Verify your land records are up to date
- Check if another family member is already registered (only one registration per family)
- Contact your local agriculture office for specific rejection reasons

### Issue 3: Name Correction or Update

- Visit the PM-KISAN portal and click on "Updation of Self Registered Farmer"
- Enter your Aadhaar number to access your profile
- Update the necessary details and submit supporting documents
- Alternatively, visit your local CSC or agriculture office for assistance

## PM KISAN Installment Schedule 2026

Here is the expected installment schedule for 2026:

- **17th Installment**: Expected in April-May 2026
- **18th Installment**: Expected in August-September 2026
- **19th Installment**: Expected in December 2026-January 2027

Note that exact dates are announced by the government and may vary. Keep checking the official portal for the latest updates.

## Frequently Asked Questions

### Can tenant farmers apply for PM-KISAN?

Yes, tenant farmers can also apply, but their state must have provisions for identifying tenant farmers and sharing their data with the central government. Currently, many states have included tenant farmers in their beneficiary lists.

### Is the scheme only for small and marginal farmers?

Initially, PM-KISAN was limited to small and marginal farmers (owning up to 2 hectares), but from June 2019, the scheme was extended to cover all landholding farmer families, irrespective of their landholding size, subject to exclusion criteria.

### Can both husband and wife register separately?

No. Only one member per farmer family (husband, wife, and minor children) can register for PM-KISAN benefits. If both apply, the duplicate application will be rejected, and recovery proceedings may be initiated.

PM-KISAN remains one of the most impactful welfare schemes for the farming community. If you are an eligible farmer, register at the earliest to avail the benefits. For any assistance, call the helpline or visit your nearest agriculture office.`,
  },
  {
    slug: "how-to-fill-government-job-application-online",
    title: "How to Fill Government Job Applications Online - Step by Step Guide",
    description:
      "A detailed walkthrough for filling online government job application forms covering registration, document upload, fee payment, and common mistakes to avoid.",
    category: "Application Help",
    author: "SarkariDarapan Team",
    publishedAt: "2026-03-05",
    updatedAt: "2026-05-15",
    tags: ["Online Application", "Government Jobs", "Form Filling", "Application Tips", "Sarkari Naukri"],
    content: `## Why Filling Government Job Applications Correctly Matters

Every year, lakhs of candidates miss out on government job opportunities not because they lacked qualifications, but because they made errors in their application forms. A wrong photograph size, an incorrect date of birth, or a missed payment can lead to outright rejection, regardless of how well-prepared you are for the exam.

This comprehensive guide walks you through the entire process of filling online government job applications. Whether you are applying for SSC, UPSC, Railway, Banking, or any state-level exam, these steps and tips will help you submit error-free applications.

## Before You Start: Gather All Required Documents

Before sitting down to fill any government job application, make sure you have the following ready:

### Essential Documents (Digital Copies)

- **Passport-size photograph**: Recent, colored, white background, JPEG format, typically 20-50 KB, dimensions as specified (usually 3.5cm x 4.5cm at 100 DPI)
- **Signature scan**: Black ink on white paper, JPEG format, typically 10-20 KB
- **Aadhaar Card**: For identity verification and address proof
- **Educational Certificates**: 10th, 12th, Graduation, Post-graduation mark sheets and certificates
- **Caste/Category Certificate**: SC/ST/OBC/EWS certificate from the competent authority (if applicable)
- **Domicile Certificate**: State domicile or residential proof (for state-level posts)
- **Experience Certificate**: If experience is required for the post
- **Disability Certificate**: For PwBD candidates (if applicable)

### Important Personal Details

- Valid email ID (preferably Gmail)
- Active mobile number (that you will keep active for at least 1 year)
- Bank account details (for fee payment through net banking/UPI)
- Debit/Credit card details (if paying through card)

## Step-by-Step Application Process

### Step 1: Registration (One-Time)

Most government recruitment portals require one-time registration before you can apply for specific posts.

1. Visit the official recruitment website (e.g., ssc.gov.in, upsc.gov.in, rfrb.org.in)
2. Click on **"New Registration"** or **"Register"**
3. Enter your basic details: Full Name (as in 10th certificate), Father's Name, Mother's Name, Date of Birth, Gender, Mobile Number, Email ID
4. Create a strong password with at least 8 characters including uppercase, lowercase, numbers, and special characters
5. Verify your mobile number and email through OTP
6. Note down your **Registration Number/ID** and password securely

### Step 2: Login and Select the Post

1. Login to the portal using your Registration Number and password
2. Navigate to the **"Apply Online"** or **"Latest Notifications"** section
3. Read the official notification thoroughly before clicking apply
4. Click on **"Apply"** for the desired post

### Step 3: Fill Personal Details

This is the most critical section. Double-check every entry:

- **Full Name**: Exactly as printed on your 10th class certificate. Do not use nicknames or abbreviations
- **Father's/Mother's Name**: As on official documents
- **Date of Birth**: Match it with your 10th certificate, not Aadhaar (in case of discrepancy, 10th certificate is the standard)
- **Gender**: Male/Female/Transgender
- **Category**: General/OBC/SC/ST/EWS - Select the correct category as per your certificate
- **Nationality**: Indian
- **Marital Status**: As applicable
- **Address**: Current and permanent address with correct PIN code
- **Educational Qualification**: Enter details of all qualifications starting from 10th standard
- **Email and Mobile**: Provide active contact details

### Step 4: Upload Photographs and Documents

Document upload is where most candidates make mistakes. Follow these guidelines:

**Photograph Requirements (Typical)**:
- Format: JPEG/JPG only
- Size: Between 20 KB and 50 KB (varies by organization)
- Dimensions: 200 x 230 pixels or as specified
- Background: White or light-colored
- Recency: Taken within the last 3 months
- Attire: Formal, without sunglasses or cap (unless religious headgear)

**Signature Requirements (Typical)**:
- Sign with black ink pen on white paper
- Scan or photograph it clearly
- Format: JPEG/JPG
- Size: Between 10 KB and 20 KB
- Dimensions: 140 x 60 pixels or as specified

**Tips for Perfect Photo and Signature Scans**:
- Use a scanner app on your smartphone (like CamScanner or Adobe Scan)
- Crop tightly around the photo/signature
- Use an image resizing tool to get exact dimensions
- Compress if file size exceeds the limit (use tinyjpg.com or similar)
- Always preview the uploaded image before proceeding

### Step 5: Select Exam Center Preferences

- Choose 3-4 exam center preferences based on proximity to your location
- Popular centers fill up fast, so apply early
- Consider travel time, accommodation availability, and familiarity with the city
- Some exams allow center changes later, but do not rely on this

### Step 6: Pay the Application Fee

Most government exams charge an application fee (often with exemptions for SC/ST/PwBD/Female candidates):

**Payment Methods Available**:
- **Net Banking**: Using any nationalized or private bank
- **Debit Card**: Visa/Mastercard/Rupay
- **Credit Card**: Visa/Mastercard
- **UPI**: PhonePe, Google Pay, Paytm, BHIM
- **Challan**: Some organizations offer offline payment through bank challans (SBI e-challan is common)

**Fee Payment Tips**:
- Pay within the deadline; late fees are rarely accepted
- Take a screenshot of the payment confirmation screen
- Save the transaction ID/reference number
- If payment is deducted but status shows "pending," wait 24-48 hours before retrying
- Never pay twice without confirming the first transaction failed
- Download the payment receipt/confirmation email

### Step 7: Review and Submit

This is your final chance to catch errors:

1. Review every section of the application form carefully
2. Preview the uploaded photograph and signature
3. Verify your exam center preferences
4. Check fee payment status shows "Success" or "Completed"
5. Click **"Final Submit"** only when everything is correct
6. Once submitted, most forms cannot be edited (some allow correction windows)

### Step 8: Download and Print Confirmation

- Download the **application form PDF** and save it on your computer and phone
- Take a printout and keep it safely until the recruitment process is complete
- Note the **Application Number/Roll Number** for future reference
- You will need this for downloading admit cards, checking results, etc.

## Common Mistakes to Avoid

### Mistake 1: Name Mismatch

Ensure your name is exactly as on your 10th certificate across all documents. Even minor variations like "Raj Kumar" vs "Rajkumar" can cause issues during document verification.

### Mistake 2: Wrong Category Selection

Selecting a wrong category (e.g., General instead of OBC) can disqualify you during verification. Double-check your category certificate validity and the issuing authority.

### Mistake 3: Uploading Wrong Photo/Signature

An unclear photo, wrong dimensions, or signature in pencil can lead to rejection. Always follow the exact specifications mentioned in the notification.

### Mistake 4: Missing the Deadline

Government application deadlines are strict. Most portals close at 11:59 PM on the last date, and servers are overloaded in the final hours. Apply at least 3-5 days before the deadline.

### Mistake 5: Not Saving the Confirmation

If you lose your application number and did not save the confirmation page, recovering your application can be extremely difficult.

## Pro Tips for Government Job Applicants

1. **Create a dedicated email** for government job applications to keep all notifications in one place
2. **Maintain a document folder** on your phone and computer with all certificates pre-scanned in various sizes
3. **Apply early** in the application window to avoid last-minute technical glitches
4. **Read the notification PDF** completely before starting the form, especially eligibility conditions and reservation details
5. **Keep your Aadhaar updated** with current mobile number and address
6. **Track all applications** in a spreadsheet with application numbers, dates, fee status, and exam dates
7. **Set reminders** for admit card release dates and exam dates

## What to Do After Submitting the Application

After successful submission, stay alert for these milestones:

- **Correction Window**: Some organizations provide a 3-5 day window to correct application errors. Do not miss this
- **Admit Card Release**: Download it as soon as it is released and verify all details
- **Exam Day Preparation**: Carry your admit card, valid photo ID, and any other documents mentioned in the admit card instructions
- **Result and Cut-off**: Check the official website regularly after the exam

Filling government job applications may seem tedious, but getting it right the first time saves you from unnecessary hassle and ensures your candidacy is not rejected on technical grounds. Bookmark this guide and refer to it every time you apply for a new government job.`,
  },
  {
    slug: "how-to-apply-for-ssc-cgl-2026",
    title: "How to Apply for SSC CGL 2026 - Application Form, Fees & Process",
    description:
      "Step-by-step guide to fill the SSC CGL 2026 application form online. Covers eligibility, important dates, documents required, fee payment, and common mistakes to avoid while applying.",
    category: "Application Help",
    author: "SarkariDarapan Team",
    publishedAt: "2026-04-20",
    updatedAt: "2026-05-25",
    tags: ["SSC CGL 2026", "SSC CGL Application", "SSC", "Application Form", "Government Exams"],
    faqs: [
      {
        question: "Can I edit my SSC CGL 2026 application form after submitting it?",
        answer: "Yes, but only during the correction window that SSC opens a few days after the last date of application. You can change details like exam centre, category, and photo/signature. You cannot change your name or date of birth after the correction window closes. Always double-check before final submission.",
      },
      {
        question: "What is the application fee for SSC CGL 2026?",
        answer: "The application fee for SSC CGL 2026 is Rs. 100 for General and OBC male candidates. Female candidates and candidates belonging to SC, ST, PwBD, and Ex-Servicemen categories are fully exempted from paying the fee.",
      },
      {
        question: "Can I apply for SSC CGL 2026 from my mobile phone?",
        answer: "Yes, you can apply from a mobile phone using any browser. However, applying from a laptop or desktop is recommended because uploading photos and signatures is easier on a bigger screen, and you are less likely to make mistakes. If you do use a phone, make sure your photo and signature files are already resized and ready.",
      },
      {
        question: "I paid the fee but my payment status shows pending. What should I do?",
        answer: "Do not pay again immediately. Wait for 24 to 48 hours and check your payment status on the SSC portal. In most cases, the status updates automatically. If it still shows pending after 48 hours, contact SSC helpdesk at ssc-cr@nic.in with your registration ID and payment screenshot. Also check your bank statement to confirm if the amount was debited.",
      },
      {
        question: "How many times can I attempt the SSC CGL exam?",
        answer: "There is no limit on the number of attempts for SSC CGL as long as you meet the age criteria. General category candidates can appear till they turn 32 years. OBC candidates get 3 years of age relaxation (up to 35 years) and SC/ST candidates get 5 years of age relaxation (up to 37 years). You can apply every year within these age limits.",
      },
    ],
    content: `## What is SSC CGL 2026?

SSC CGL stands for Staff Selection Commission Combined Graduate Level examination. It is one of the biggest government exams in India, and lakhs of candidates apply every year. Through this exam, SSC recruits staff for Group B and Group C posts in various central government ministries and departments.

I appeared for SSC CGL twice before I finally understood how the process works. The exam itself is tough, but honestly, half the battle is just getting your application right. I have seen friends lose their chance because of a blurry photo upload or a wrong date of birth. This guide covers everything you need to know to fill the SSC CGL 2026 application form online without any mistakes.

If you are also preparing for the exam, check out our detailed [SSC CGL 2026 notification with syllabus and vacancies](/sarkari-naukri/ssc-cgl-2026) and browse all [SSC exam updates](/category/ssc) on our portal.

## Who is Eligible?

Before you start filling the form, make sure you actually qualify. There is no point paying the fee and spending time on the application if you do not meet the basic criteria.

### Educational Qualification

You need a **Bachelor's degree from a recognised university** at the time of applying. Final-year students who are awaiting results can also apply, but they must have their degree before the document verification stage. The degree can be in any subject - BA, B.Com, B.Sc, BCA, B.Tech, anything works.

Some posts have specific requirements. For example, the Statistical Investigator post needs Statistics as a subject in graduation, and the Assistant Audit Officer post needs a relevant background. But for most posts, any graduation degree is enough.

### Age Limit

The age limit varies depending on the post you are applying for:

| Category | Minimum Age | Maximum Age |
|----------|-------------|-------------|
| General (most posts) | 18 years | 27-32 years |
| OBC (Non-Creamy Layer) | 18 years | 30-35 years |
| SC / ST | 18 years | 32-37 years |
| PwBD (General) | 18 years | 37-42 years |
| Ex-Servicemen | 18 years | As per rules |

The age is calculated as on **1st January 2026** (as mentioned in the official notification). For most popular posts like Tax Assistant and Auditor, the upper age limit for General category is 27 years. For Inspector posts, it goes up to 30-32 years.

### Number of Attempts

There is **no limit on the number of attempts**. You can keep appearing for SSC CGL every year as long as you are within the age limit. This is one of the best things about this exam compared to UPSC which has a fixed attempt limit.

## Important Dates

Here are the key dates for SSC CGL 2026 based on the official notification. Bookmark this page and check back for updates.

| Event | Date |
|-------|------|
| Notification Release | 2nd April 2026 |
| Online Application Start | 10th April 2026 |
| Last Date to Apply | 15th May 2026 |
| Last Date for Fee Payment | 16th May 2026 |
| Correction Window | 19-20 May 2026 |
| Tier 1 Exam Date | July-August 2026 |
| Tier 2 Exam Date | October-November 2026 |

**Pro tip from experience**: Do not wait until the last date to apply. The SSC website gets extremely slow in the last 2-3 days because lakhs of candidates try to submit at the same time. I once got stuck on the payment page for 3 hours on the last day. Apply within the first week if possible.

## Step-by-Step Application Process

Follow these steps carefully. I am going to walk you through the exact screens you will see on the SSC portal.

### Step 1: One-Time Registration on SSC Portal

If you have never applied for any SSC exam before, you first need to create an account.

1. Go to **ssc.gov.in** and click on **"Register"** in the top menu
2. You will see a long registration form. Fill in your **name exactly as it appears on your 10th class certificate**. This is very important - if your certificate says "RAJESH KUMAR" and you type "Rajesh Kumar Sharma", it will cause problems later
3. Enter your **father's name**, **mother's name**, **date of birth**, and **gender**
4. Provide a **working email address** and **mobile number**. SSC will send your registration ID and password to this email, so use one you check regularly
5. Set a **password** - use something you will remember, with a mix of letters, numbers, and symbols
6. Submit the form. You will get an **SSC Registration ID** - write this down or take a screenshot. You will need it every time you log in

If you already have a registration from a previous SSC exam (like CHSL or MTS), you can use the same ID. No need to register again.

### Step 2: Log In and Select SSC CGL 2026

1. Go back to **ssc.gov.in** and click **"Login"**
2. Enter your **Registration ID** and **password**
3. On the dashboard, you will see a list of open exams. Find **"Combined Graduate Level Examination 2026"** and click **"Apply"**

### Step 3: Fill the Application Form

The form has several sections. Here is what you will fill in each one:

**Personal Information**: Your name, father's name, date of birth - these will be auto-filled from your registration. Verify that everything is correct.

**Educational Details**: Enter your **graduation details** - university name, year of passing, percentage/CGPA, and subject. If you are in the final year, select "Appearing" as your status.

**Post Preferences**: SSC CGL covers many posts. You need to select which posts you want to be considered for. You can select **multiple posts**, and I recommend selecting all posts you are eligible for. This increases your chances of getting selected somewhere. You can always decline a post later if you do not want it.

**Exam Centre Preferences**: Choose **3 to 4 cities** where you would like to give the exam. Pick cities that are close to you or where you have relatives you can stay with. Centres in big cities like Delhi, Lucknow, and Kolkata fill up fast.

### Step 4: Upload Photo and Signature

This is the step where most applications get rejected. Pay close attention.

**Photo requirements**:
- Recent colour photograph with **white background**
- **JPEG format**, file size between **20 KB and 50 KB**
- Dimensions: **100 x 120 pixels** approximately
- Your face should cover about 60-70% of the frame
- No sunglasses, no caps (religious headgear is allowed)

**Signature requirements**:
- Sign with a **black ink pen on white paper**
- Scan or photograph it and crop tightly
- **JPEG format**, file size between **10 KB and 20 KB**
- Dimensions: **140 x 60 pixels** approximately

**How I do it**: I take the photo against a white wall using my phone camera, then use a free app like "Passport Size Photo Maker" to crop it to the right size. For the signature, I sign on a clean white paper, take a photo, and use the app to resize it. This method has worked for me across SSC, Railway, and Banking applications.

### Step 5: Preview and Final Submit

Before clicking the final submit button:
- Check your **name and date of birth** one more time
- Make sure the **photo is clear** and shows your face properly
- Verify the **signature is readable**
- Confirm your **post preferences** and **exam centres**

Once you click **"Final Submit"**, you cannot make changes (except during the correction window). Take a **screenshot of the confirmation page** and save it.

## Application Fee and Payment Methods

| Category | Fee Amount |
|----------|-----------|
| General / OBC Male | Rs. 100 |
| SC / ST / PwBD / Ex-Servicemen | Exempted (Rs. 0) |
| All Female Candidates | Exempted (Rs. 0) |

### How to Pay

After filling the form, you will be redirected to the payment page. You can pay using:

- **UPI** (Google Pay, PhonePe, Paytm) - fastest and most reliable in my experience
- **Net Banking** - works well with SBI, PNB, and other major banks
- **Debit Card / Credit Card** - Visa, Mastercard, or Rupay
- **SBI Challan** - offline payment at an SBI branch (takes 1-2 working days to reflect)

After successful payment, download the **payment receipt**. If the payment fails but the money is debited, **do not pay again for 48 hours**. The amount usually gets auto-refunded or the status updates on its own. I have had this happen to me once with net banking, and it resolved itself the next day.

## Documents Required

Keep these documents ready before you start the application. You do not need to upload all of them during application, but you will need them during document verification later:

- **10th class certificate and marksheet** - for date of birth proof
- **12th class certificate and marksheet**
- **Graduation degree and marksheet** (or final-year appearing certificate)
- **Aadhaar Card** - for identity verification
- **Category certificate** (SC/ST/OBC/EWS) - must be in the prescribed format and from the correct authority
- **PwBD certificate** - if applicable, from a government hospital
- **Passport-size photographs** - keep 10-15 copies ready for exam day and verification
- **Domicile / Residential certificate** - some posts require this

**For the online application specifically**, you only need the **photo and signature files** in the correct format and size. Everything else is self-declaration at this stage.

## Common Mistakes to Avoid

These are mistakes I have either made myself or seen my friends make. Learn from them.

1. **Typing your name differently than your 10th certificate** - Even a small difference like "Md." versus "Mohammad" can cause rejection at document verification. Always match your 10th certificate exactly.

2. **Uploading a blurry or dark photograph** - The photo will be printed on your admit card and used for identification at the exam centre. If the invigilator cannot match your face with the photo, you might not be allowed to sit for the exam.

3. **Not selecting all eligible posts** - Many candidates select only one or two posts because they only want "Inspector" or "Tax Assistant." Select all posts you qualify for. You can always decline later, but you cannot add posts after submission.

4. **Applying on the last day** - The SSC server crashes almost every year on the last date. Apply at least 5-7 days before the deadline. This is not just advice - it is from painful experience.

5. **Forgetting to save the confirmation page** - You need your application number to download your admit card, check your roll number, and track your result. If you lose it and forgot your login credentials, recovering your application is extremely hard.

6. **Wrong category certificate** - OBC candidates must ensure their certificate is **valid for central government posts** and issued recently. An old OBC certificate or one meant for state-level reservation may not be accepted by SSC.

7. **Not using the correction window** - SSC usually gives a 2-3 day window after the application deadline to fix mistakes. Use it. Check every field again and correct anything that is wrong. This is your last chance.

## Frequently Asked Questions

### Can I edit my SSC CGL 2026 application form after submitting it?

Yes, but only during the correction window that SSC opens a few days after the last date of application. You can change details like exam centre, category, and photo/signature. You cannot change your name or date of birth after the correction window closes. Always double-check before final submission.

### What is the application fee for SSC CGL 2026?

The application fee for SSC CGL 2026 is Rs. 100 for General and OBC male candidates. Female candidates and candidates belonging to SC, ST, PwBD, and Ex-Servicemen categories are fully exempted from paying the fee.

### Can I apply for SSC CGL 2026 from my mobile phone?

Yes, you can apply from a mobile phone using any browser. However, applying from a laptop or desktop is recommended because uploading photos and signatures is easier on a bigger screen, and you are less likely to make mistakes. If you do use a phone, make sure your photo and signature files are already resized and ready.

### I paid the fee but my payment status shows pending. What should I do?

Do not pay again immediately. Wait for 24 to 48 hours and check your payment status on the SSC portal. In most cases, the status updates automatically. If it still shows pending after 48 hours, contact SSC helpdesk at ssc-cr@nic.in with your registration ID and payment screenshot. Also check your bank statement to confirm if the amount was debited.

### How many times can I attempt the SSC CGL exam?

There is no limit on the number of attempts for SSC CGL as long as you meet the age criteria. General category candidates can appear till they turn 32 years. OBC candidates get 3 years of age relaxation (up to 35 years) and SC/ST candidates get 5 years of age relaxation (up to 37 years). You can apply every year within these age limits.

---

Applying for SSC CGL is not complicated once you know the process, but one careless mistake can cost you the entire attempt. Follow this guide step by step, keep your documents ready beforehand, and do not leave it for the last minute. For the full exam notification with syllabus, vacancy details, and salary information, visit our [SSC CGL 2026 job page](/sarkari-naukri/ssc-cgl-2026). Good luck with your application and preparation!`,
  },
  {
    slug: "how-to-apply-for-ibps-po-2026",
    title: "How to Apply for IBPS PO 2026 - Registration, Fees & Full Process",
    description:
      "Complete step-by-step guide to fill the IBPS PO 2026 application form online. Covers eligibility criteria, important dates, application fee, documents needed, and mistakes to avoid.",
    category: "Application Help",
    author: "SarkariDarapan Team",
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-25",
    tags: ["IBPS PO 2026", "IBPS PO Application", "Banking Jobs", "Application Form", "Bank PO"],
    faqs: [
      {
        question: "What is the age limit for IBPS PO 2026?",
        answer:
          "The minimum age is 20 years and the maximum age is 30 years for General category candidates. OBC candidates get 3 years relaxation (up to 33 years), SC/ST candidates get 5 years relaxation (up to 35 years), and PwBD candidates get 10 years relaxation. Age is calculated as on 1st August 2026 as mentioned in the official notification.",
      },
      {
        question: "Can final-year students apply for IBPS PO 2026?",
        answer:
          "Yes, final-year graduation students can apply for IBPS PO 2026. However, you must have your degree completion certificate or mark sheet before the interview stage. If you cannot produce proof of graduation by the time of the interview, your candidature will be cancelled. So make sure your results are expected before the interview dates.",
      },
      {
        question: "Is there a limit on the number of attempts for IBPS PO?",
        answer:
          "There is no fixed limit on the number of attempts. You can appear for IBPS PO every year as long as you meet the age criteria. General category candidates can apply until they turn 30, OBC until 33, and SC/ST until 35. So depending on when you start, you may get 8 to 13 attempts over the years.",
      },
      {
        question: "Are education gaps allowed for IBPS PO eligibility?",
        answer:
          "Yes, education gaps are generally allowed for IBPS PO. IBPS does not specifically disqualify candidates for having gaps in their education. However, you should be prepared to explain any gaps during the interview stage. Keep supporting documents ready if you had a gap due to health reasons, family issues, or preparation for competitive exams.",
      },
      {
        question: "I forgot my IBPS registration number. How can I recover it?",
        answer:
          "If you forgot your registration number, go to the IBPS official website and click on the login page for IBPS PO 2026. You will find a 'Forgot Registration Number' or 'Know Your Registration Number' link. Enter your name, date of birth, and the email ID or mobile number you used during registration. Your registration details will be sent to your registered email or mobile. If this does not work, contact the IBPS helpdesk.",
      },
    ],
    content: `## What is IBPS PO 2026?

IBPS PO stands for Institute of Banking Personnel Selection Probationary Officer examination. It is one of the most popular banking exams in India, and every year lakhs of candidates apply for it. Through this exam, IBPS recruits Probationary Officers and Management Trainees for public sector banks like Punjab National Bank, Bank of Baroda, Canara Bank, Indian Overseas Bank, and several others.

If you have been dreaming of a career in banking, IBPS PO is your best bet. The salary is good, the job is stable, and there are plenty of growth opportunities. I have helped several friends go through this process, and one thing I can tell you is that applying correctly is just as important as preparing well. A small mistake in the form can waste months of preparation.

For the full notification details, check the [IBPS PO 2026 notification](/sarkari-naukri/ibps-po-2026) on our portal. You can also browse all [banking jobs](/category/banking) for similar opportunities.

## Who is Eligible?

Before spending time on the application, make sure you meet the eligibility criteria. IBPS is strict about this, and if you do not qualify, your candidature will be rejected at the verification stage.

### Educational Qualification

You need a **Bachelor's degree from a recognised university** or any equivalent qualification recognised by the Central Government. The degree can be in any discipline — Arts, Science, Commerce, Engineering, anything works. You should have the degree certificate or the final-year mark sheet by the time of the interview.

Final-year students can apply, but they must produce their degree proof before the interview. Distance education degrees are also accepted as long as the university is recognised by UGC or AICTE.

### Age Limit

| Category | Minimum Age | Maximum Age |
|----------|-------------|-------------|
| General | 20 years | 30 years |
| OBC (Non-Creamy Layer) | 20 years | 33 years |
| SC / ST | 20 years | 35 years |
| PwBD (General) | 20 years | 40 years |
| Ex-Servicemen | 20 years | As per rules |

Age is calculated as on **1st August 2026**. So if you were born between 2nd August 1996 and 1st August 2006, you are eligible under the General category.

### Nationality

You must be a citizen of India. Citizens of Nepal, Bhutan, Tibetan refugees who came to India before 1962, and persons of Indian origin migrated from certain countries are also eligible, subject to a certificate of eligibility issued by the Government of India.

## Important Dates

Keep these dates handy. I recommend bookmarking this page so you can check back.

| Event | Expected Date |
|-------|---------------|
| Official Notification | June 2026 |
| Online Registration Starts | June 2026 |
| Last Date to Apply | July 2026 |
| Last Date for Fee Payment | July 2026 |
| Prelims Admit Card | September 2026 |
| Prelims Exam | October 2026 |
| Mains Exam | November 2026 |
| Interview | January-February 2027 |

**Note**: These dates are based on the expected IBPS calendar. The exact dates will be confirmed once the official notification is released. Keep checking the IBPS website and our [IBPS PO 2026 notification](/sarkari-naukri/ibps-po-2026) page for updates.

## Step-by-Step Application Process

Here is the complete process from start to finish. Follow each step carefully and do not rush through it.

### Step 1: Visit the IBPS Official Website

Go to **ibps.in** and look for the IBPS PO/MT CRR-XVI notification link on the homepage. Click on it to reach the application page. You will see two options — **New Registration** and **Already Registered**. If you are applying for the first time through IBPS this year, click on New Registration.

### Step 2: Complete the Registration

Fill in your basic details to create your IBPS account:

1. Enter your **full name** as it appears on your 10th class certificate
2. Enter your **date of birth**, **email address**, and **mobile number**
3. Choose a **password** with at least 8 characters including uppercase, lowercase, numbers, and a special character
4. A **provisional registration number** will be generated. Write this down immediately or take a screenshot
5. You will also receive an email and SMS with your registration details

### Step 3: Fill the Application Form

Log in with your registration number and password. The form has several sections:

**Personal Details**: Name, father's name, mother's name, date of birth, gender, marital status, category, nationality, and address. Make sure every detail matches your official documents.

**Educational Qualification**: Enter your graduation details including university name, year of passing, percentage or CGPA, and stream. If you have post-graduation or professional qualifications, enter those too.

**Post Preferences and Bank Preferences**: You can select which participating banks you prefer to be allocated to. Select multiple banks to increase your chances. The allocation depends on your rank and preference order.

**Exam Centre Preference**: Choose **4 to 5 exam centre cities** near your location. Popular cities fill up fast, so keep backup options ready.

### Step 4: Upload Photo and Signature

This is where most candidates make mistakes. Follow the specifications exactly.

**Photo specifications**:
- Recent colour photograph with **white or light background**
- JPEG format, file size between **20 KB and 50 KB**
- Dimensions approximately **200 x 230 pixels**
- Face should cover about 60-70 percent of the photograph
- No sunglasses or dark glasses

**Signature specifications**:
- Sign with **black ink** on white paper
- JPEG format, file size between **10 KB and 20 KB**
- Dimensions approximately **140 x 60 pixels**
- Must be your own handwritten signature, not typed

**Left thumb impression**:
- IBPS also requires a left thumb impression
- Press your left thumb on a white paper using black or blue stamp ink
- Scan it in JPEG format, **20 KB to 50 KB**

**Hand-written declaration**:
- Write the declaration text provided in the notification in your own handwriting in English
- Scan the page in JPEG format, **50 KB to 100 KB**

### Step 5: Pay the Application Fee

After filling the form, proceed to payment. Here are the fee details:

## Application Fee and Payment Methods

| Category | Fee Amount |
|----------|-----------|
| General / OBC / EWS | Rs. 850 |
| SC / ST / PwBD | Rs. 175 |

You can pay through:
- **Debit Card** (Visa, Mastercard, Rupay)
- **Credit Card**
- **Net Banking** (all major banks)
- **UPI** (Google Pay, PhonePe, BHIM)
- **IMPS / Cash Cards / Mobile Wallets**

After payment, **download the payment receipt** and save it. If the payment gets stuck, wait for 24-48 hours before trying again.

### Step 6: Preview and Submit

Review every section of the form one final time. Check your name, date of birth, photo, signature, and payment status. Once you click **Final Submit**, you cannot make changes. Take a printout or screenshot of the confirmation page.

## Documents Required

Keep these documents ready. You need some during the application and all of them during verification:

- **10th class certificate and mark sheet** (for date of birth proof)
- **12th class certificate and mark sheet**
- **Graduation degree and mark sheet** (or appearing certificate for final-year students)
- **Aadhaar Card**
- **PAN Card** (useful for identity verification)
- **Category certificate** (SC/ST/OBC/EWS) in the prescribed format
- **PwBD certificate** from a government hospital (if applicable)
- **Passport-size photographs** (keep 15-20 copies for exam day, interview, and verification)
- **Bank passbook** showing account number and IFSC code

## Common Mistakes to Avoid

I have seen these mistakes happen again and again. Do not let them happen to you.

1. **Name mismatch between documents** — Your name in the application must match your 10th certificate exactly. Even minor differences like "Mohd" versus "Mohammad" can cause problems during document verification.

2. **Uploading incorrect photo or signature** — A blurry photo, wrong background colour, or oversized file will get your application rejected. Use a free image resizer app to get the exact pixel dimensions.

3. **Applying after the deadline** — IBPS does not extend deadlines. The portal shuts down at midnight on the last date. Apply at least a week before the deadline.

4. **Not saving the registration number** — If you lose your registration number and forget your password, recovering your application becomes very difficult. Write it in a notebook and save the email.

5. **Paying the fee twice** — If your payment is stuck, wait 48 hours before retrying. Most payment issues resolve automatically. Paying twice means you lose the extra amount.

6. **Wrong category selection** — If you select General instead of OBC, you will not get age relaxation or reservation benefits. OBC candidates must ensure their certificate is valid for the central government and the non-creamy layer income certificate is current.

7. **Ignoring the declaration upload** — IBPS requires a handwritten declaration that many candidates overlook. Read the notification carefully and prepare this document in advance.

## Frequently Asked Questions

### What is the age limit for IBPS PO 2026?

The minimum age is 20 years and the maximum age is 30 years for General category candidates. OBC candidates get 3 years relaxation (up to 33 years), SC/ST candidates get 5 years relaxation (up to 35 years), and PwBD candidates get 10 years relaxation. Age is calculated as on 1st August 2026 as mentioned in the official notification.

### Can final-year students apply for IBPS PO 2026?

Yes, final-year graduation students can apply for IBPS PO 2026. However, you must have your degree completion certificate or mark sheet before the interview stage. If you cannot produce proof of graduation by the time of the interview, your candidature will be cancelled. So make sure your results are expected before the interview dates.

### Is there a limit on the number of attempts for IBPS PO?

There is no fixed limit on the number of attempts. You can appear for IBPS PO every year as long as you meet the age criteria. General category candidates can apply until they turn 30, OBC until 33, and SC/ST until 35. So depending on when you start, you may get 8 to 13 attempts over the years.

### Are education gaps allowed for IBPS PO eligibility?

Yes, education gaps are generally allowed for IBPS PO. IBPS does not specifically disqualify candidates for having gaps in their education. However, you should be prepared to explain any gaps during the interview stage. Keep supporting documents ready if you had a gap due to health reasons, family issues, or preparation for competitive exams.

### I forgot my IBPS registration number. How can I recover it?

If you forgot your registration number, go to the IBPS official website and click on the login page for IBPS PO 2026. You will find a "Forgot Registration Number" or "Know Your Registration Number" link. Enter your name, date of birth, and the email ID or mobile number you used during registration. Your registration details will be sent to your registered email or mobile. If this does not work, contact the IBPS helpdesk.`,
  },
  {
    slug: "ssc-cgl-syllabus-2026-complete-topic-wise-breakdown",
    title: "SSC CGL Syllabus 2026 - Complete Topic-Wise Breakdown for Tier 1 & Tier 2",
    description:
      "Detailed SSC CGL 2026 syllabus covering every topic for Tier 1 and Tier 2 with weightage, important chapters, and preparation priority for each subject.",
    category: "Exam Preparation",
    author: "SarkariDarapan Team",
    publishedAt: "2026-04-10",
    updatedAt: "2026-05-25",
    tags: ["SSC CGL Syllabus", "SSC CGL 2026", "SSC", "Exam Syllabus", "Topic-Wise Syllabus"],
    faqs: [
      {
        question: "Is the Tier 1 and Tier 2 syllabus the same for SSC CGL 2026?",
        answer:
          "No, the syllabus is not the same. Tier 1 covers four subjects — Reasoning, General Awareness, Quantitative Aptitude, and English. Tier 2 includes all four plus additional modules like Computer Knowledge, Data Entry, and for some posts Statistics or General Studies (Finance and Economics). The difficulty level in Tier 2 is also higher than Tier 1.",
      },
      {
        question: "Which topics have the highest weightage in SSC CGL Tier 1?",
        answer:
          "In Reasoning, Analogy, Classification, and Coding-Decoding carry the highest weightage. In Quantitative Aptitude, Arithmetic topics like Percentage, Profit and Loss, Time and Work, and Data Interpretation are most important. In English, Error Spotting, Cloze Test, and Reading Comprehension dominate. In General Awareness, Static GK (History, Polity, Geography) and Science carry the most marks.",
      },
      {
        question: "Do I need to study the same material for both Tier 1 and Tier 2?",
        answer:
          "Your Tier 1 preparation forms the base for Tier 2, but Tier 2 requires deeper study. For example, Quantitative Aptitude in Tier 2 has more advanced questions on Algebra, Geometry, and Trigonometry. English in Tier 2 includes essay writing and letter writing which are not in Tier 1. Start with Tier 1 level and then build up to Tier 2 difficulty.",
      },
      {
        question: "Is there negative marking in SSC CGL 2026?",
        answer:
          "Yes, there is negative marking in both Tier 1 and Tier 2. In Tier 1, 0.50 marks are deducted for each wrong answer. In Tier 2, the deduction varies by section — it is 1 mark for Maths and Reasoning questions and 0.25 marks for English and General Awareness questions. So be careful with guessing, especially in Tier 2.",
      },
      {
        question: "Are NCERT books enough for General Awareness in SSC CGL?",
        answer:
          "NCERT books from Class 6 to 10 are excellent for building your foundation in History, Geography, Polity, and Science. However, they are not enough on their own. You also need a dedicated General Knowledge book like Lucent's GK for static facts, and a current affairs source for the last 6-8 months. Combine NCERTs, Lucent's, and monthly current affairs magazines for complete coverage.",
      },
    ],
    content: `## What Does the SSC CGL 2026 Syllabus Cover?

The SSC CGL (Staff Selection Commission Combined Graduate Level) exam syllabus can feel overwhelming when you first look at it. There are multiple subjects, two tiers, and hundreds of topics. But here is the truth — if you understand the syllabus properly and know which topics matter the most, you can prepare smartly instead of working hard on everything.

I went through this exact confusion when I started my SSC CGL preparation. I wasted the first month studying topics that barely had any questions in the exam. Once I understood the actual topic-wise breakdown and weightage, my preparation became much more focused and productive.

This guide gives you the **complete topic-wise syllabus** for both Tier 1 and Tier 2, along with the expected number of questions from each topic and which ones to prioritise. For the full exam notification, visit our [SSC CGL 2026 page](/sarkari-naukri/ssc-cgl-2026) and stay updated with all [SSC updates](/category/ssc).

## SSC CGL 2026 Exam Pattern at a Glance

Before diving into the syllabus, let us understand the exam structure:

| Feature | Tier 1 | Tier 2 |
|---------|--------|--------|
| Mode | Computer Based (Online) | Computer Based (Online) |
| Total Questions | 100 | Varies by paper |
| Total Marks | 200 | 390 (Paper 1 compulsory) |
| Duration | 60 minutes | 2 hours 15 minutes (Paper 1) |
| Negative Marking | 0.50 per wrong answer | 1.0 or 0.25 per wrong answer |
| Purpose | Screening round | Final selection |

Tier 1 is the qualifying round — you need to clear the cutoff to sit for Tier 2. Your final merit is based mostly on Tier 2 marks, so both tiers are important but Tier 2 carries more weight in your selection.

## Tier 1 Syllabus - Topic-Wise Breakdown

Tier 1 has four sections with 25 questions each. Here is the detailed topic-wise breakdown for every section.

### General Intelligence and Reasoning (25 Questions, 50 Marks)

Reasoning is usually the highest-scoring section for well-prepared candidates. Most questions are logic-based and do not require memorisation.

**High Priority Topics** (expect 15-18 questions from these):
- **Analogy** — 3 to 4 questions. You get a pair and need to find a similar relationship
- **Classification / Odd One Out** — 2 to 3 questions. Identify the item that does not belong
- **Coding-Decoding** — 2 to 3 questions. Letter and number-based coding patterns
- **Series** — 2 to 3 questions. Number series, letter series, and figure series
- **Blood Relations** — 1 to 2 questions. Family tree-based problems
- **Direction Sense** — 1 to 2 questions. Map and compass-based questions
- **Syllogism** — 1 to 2 questions. Statement and conclusion problems

**Medium Priority Topics** (expect 5-8 questions):
- Mirror and Water Images
- Paper Folding and Cutting
- Embedded Figures
- Figure Counting (triangles, squares)
- Pattern Completion
- Matrix and Dice problems

**Study tip**: Practice 20-30 reasoning questions daily. This section improves dramatically with regular practice.

### General Awareness (25 Questions, 50 Marks)

This section tests your knowledge of current events and static general knowledge. Many candidates struggle here because the syllabus feels unlimited.

**High Priority Topics** (expect 15-17 questions):
- **Indian History** — 3 to 4 questions on Ancient, Medieval, and Modern India
- **Indian Polity** — 3 to 4 questions on Constitution, Parliament, Fundamental Rights
- **Geography** — 2 to 3 questions on Indian and World Geography
- **General Science** — 3 to 4 questions on Physics, Chemistry, Biology basics
- **Current Affairs** — 3 to 4 questions from the last 6-8 months

**Medium Priority Topics** (expect 6-8 questions):
- Indian Economy (GDP, budget, banking terms)
- Awards and Honours
- Books and Authors
- Sports events
- Government Schemes
- International organisations
- Important dates and events

**Study tip**: Read Lucent's General Knowledge for static GK and follow a monthly current affairs PDF for the last 6 months.

### Quantitative Aptitude (25 Questions, 50 Marks)

This section carries the most weight in preparation time because the topics are vast and require regular practice.

**High Priority Topics** (expect 16-18 questions):
- **Percentage** — 2 to 3 questions. Foundation for Profit/Loss and SI/CI
- **Profit and Loss** — 1 to 2 questions
- **Simple and Compound Interest** — 1 to 2 questions
- **Ratio and Proportion** — 1 to 2 questions
- **Average** — 1 to 2 questions
- **Time and Work** — 1 to 2 questions including pipe and cistern problems
- **Time, Speed, and Distance** — 1 to 2 questions including trains and boats
- **Data Interpretation** — 3 to 4 questions based on tables, pie charts, or bar graphs
- **Geometry** — 2 to 3 questions on triangles, circles, and quadrilaterals
- **Algebra** — 1 to 2 questions on simplification and equations

**Medium Priority Topics** (expect 5-7 questions):
- Trigonometry (heights and distances, identities)
- Mensuration (area and volume formulas)
- Number System
- Mixture and Alligation
- Surds and Indices

**Study tip**: Master arithmetic first (Percentage through Speed-Distance). These topics form a chain — once you understand Percentage, Profit/Loss becomes easy, and so on.

### English Comprehension (25 Questions, 50 Marks)

English tests your grammar, vocabulary, and reading ability. If English is not your strong point, focus on the high-scoring topics.

**High Priority Topics** (expect 15-18 questions):
- **Error Spotting** — 3 to 4 questions. Find grammatical errors in sentences
- **Cloze Test** — 4 to 5 questions. Fill in blanks in a passage
- **Reading Comprehension** — 4 to 5 questions based on a passage
- **Sentence Improvement** — 2 to 3 questions
- **Synonyms and Antonyms** — 2 to 3 questions

**Medium Priority Topics** (expect 5-8 questions):
- Idioms and Phrases
- One Word Substitution
- Active/Passive Voice
- Direct/Indirect Speech
- Spelling Correction
- Para Jumbles

**Study tip**: Read English newspapers daily for 30 minutes. It improves comprehension, vocabulary, and grammar all at once.

## Tier 2 Syllabus

Tier 2 Paper 1 is compulsory for all candidates and is divided into modules:

### Module 1: Mathematical Abilities (30 questions, 90 marks)

Covers the same topics as Tier 1 Quantitative Aptitude but at a **higher difficulty level**. Expect more advanced questions on Algebra, Geometry, Trigonometry, and Data Interpretation. You need to solve problems faster here since the question count is higher relative to time.

### Module 2: Reasoning and General Intelligence (30 questions, 90 marks)

Similar topics as Tier 1 but with more complex patterns, advanced coding-decoding, and multi-step logical reasoning. Matrix and arrangement-based questions are more frequent here.

### Module 3: English Language and Comprehension (45 questions, 90 marks)

Includes everything from Tier 1 plus **essay writing** (250 words) and **letter writing** (150 words). This is a significant addition. Practice writing essays on current topics and both formal and informal letters.

### Module 4: General Awareness (25 questions, 50 marks)

Same topics as Tier 1 but with more specific and detailed questions. The current affairs component is more recent — focus on the last 3 months especially.

### Module 5: Computer Knowledge (20 questions, 40 marks)

- Computer fundamentals (hardware, software, memory)
- Operating Systems basics
- MS Office (Word, Excel, PowerPoint)
- Internet and Networking basics
- Database basics (DBMS concepts)
- Computer security (virus, firewall, encryption)

### Special Papers

- **Paper 2 — Statistics** (for Junior Statistical Officer): Covers collection, classification, and presentation of data, measures of central tendency and dispersion, probability, sampling, and statistical inference
- **Paper 3 — General Studies (Finance and Economics)** (for Assistant Audit Officer and Assistant Accounts Officer): Covers financial accounting, economics, and governance

## How to Prioritise Your Study

With such a vast syllabus, you need a clear priority system. Here is what I recommend based on the exam pattern and previous years' analysis:

| Priority | Topics | Why |
|----------|--------|-----|
| First | Arithmetic (Percentage to Speed-Distance), Reasoning basics, Error Spotting | These topics appear in every exam and are easy to master |
| Second | Geometry, Trigonometry, DI, Reading Comprehension | Higher marks but need more time to prepare |
| Third | Static GK, Computer Knowledge | Requires memorisation — start early and revise often |
| Fourth | Current Affairs, Essay Writing | Do these alongside your main preparation daily |

**My recommended daily schedule**:
- 2 hours on Quantitative Aptitude
- 1.5 hours on Reasoning
- 1 hour on English
- 1 hour on General Awareness
- 30 minutes on Current Affairs
- 1 mock test (alternate days)

## Frequently Asked Questions

### Is the Tier 1 and Tier 2 syllabus the same for SSC CGL 2026?

No, the syllabus is not the same. Tier 1 covers four subjects — Reasoning, General Awareness, Quantitative Aptitude, and English. Tier 2 includes all four plus additional modules like Computer Knowledge, Data Entry, and for some posts Statistics or General Studies (Finance and Economics). The difficulty level in Tier 2 is also higher than Tier 1.

### Which topics have the highest weightage in SSC CGL Tier 1?

In Reasoning, Analogy, Classification, and Coding-Decoding carry the highest weightage. In Quantitative Aptitude, Arithmetic topics like Percentage, Profit and Loss, Time and Work, and Data Interpretation are most important. In English, Error Spotting, Cloze Test, and Reading Comprehension dominate. In General Awareness, Static GK (History, Polity, Geography) and Science carry the most marks.

### Do I need to study the same material for both Tier 1 and Tier 2?

Your Tier 1 preparation forms the base for Tier 2, but Tier 2 requires deeper study. For example, Quantitative Aptitude in Tier 2 has more advanced questions on Algebra, Geometry, and Trigonometry. English in Tier 2 includes essay writing and letter writing which are not in Tier 1. Start with Tier 1 level and then build up to Tier 2 difficulty.

### Is there negative marking in SSC CGL 2026?

Yes, there is negative marking in both Tier 1 and Tier 2. In Tier 1, 0.50 marks are deducted for each wrong answer. In Tier 2, the deduction varies by section — it is 1 mark for Maths and Reasoning questions and 0.25 marks for English and General Awareness questions. So be careful with guessing, especially in Tier 2.

### Are NCERT books enough for General Awareness in SSC CGL?

NCERT books from Class 6 to 10 are excellent for building your foundation in History, Geography, Polity, and Science. However, they are not enough on their own. You also need a dedicated General Knowledge book like Lucent's GK for static facts, and a current affairs source for the last 6-8 months. Combine NCERTs, Lucent's, and monthly current affairs magazines for complete coverage.`,
  },
  {
    slug: "upsc-eligibility-2026-age-limit-qualification-attempts",
    title: "UPSC Eligibility 2026 - Age Limit, Qualification & Number of Attempts",
    description:
      "Complete guide to UPSC CSE 2026 eligibility covering age limits for all categories, educational qualification, number of attempts allowed, and special relaxations for reserved categories.",
    category: "Career Guide",
    author: "SarkariDarapan Team",
    publishedAt: "2026-03-15",
    updatedAt: "2026-05-25",
    tags: ["UPSC Eligibility", "UPSC 2026", "IAS Eligibility", "Civil Services", "UPSC Age Limit"],
    faqs: [
      {
        question: "Is a degree from an open university valid for UPSC?",
        answer:
          "Yes, a degree from an open university like IGNOU, Dr. B.R. Ambedkar Open University, or any other open university recognised by the UGC is valid for UPSC CSE. The key requirement is that the university must be recognised by the University Grants Commission. Distance learning and correspondence degrees are also accepted as long as the university has UGC recognition.",
      },
      {
        question: "What happens if I have exhausted all my UPSC attempts?",
        answer:
          "Once you exhaust all your allowed attempts, you cannot appear for UPSC CSE again regardless of your age. General category gets 6 attempts, OBC gets 9, and SC/ST have unlimited attempts until the age limit. There is no provision to get extra attempts. However, you can still explore other civil services exams at the state level (State PCS) which have separate attempt limits.",
      },
      {
        question: "Does appearing for UPSC Prelims count as an attempt?",
        answer:
          "Yes, appearing for the UPSC Preliminary exam counts as one attempt regardless of whether you qualify for Mains or not. Even if you just sit for Paper 1 of Prelims and leave it blank, it counts as an attempt. However, simply filling the application form without actually appearing for the exam does not count as an attempt. This distinction is important for managing your attempts wisely.",
      },
      {
        question: "Is there a minimum percentage required in graduation for UPSC?",
        answer:
          "No, UPSC does not require any minimum percentage in graduation. You just need to have a Bachelor's degree from a recognised university. Whether you passed with 40 percent or 90 percent, you are equally eligible. This is one of the most democratic aspects of the UPSC exam — your graduation marks have no bearing on your eligibility or selection.",
      },
      {
        question: "Can a person with a criminal record appear for UPSC?",
        answer:
          "There is no bar on appearing for the UPSC exam if you have a criminal record. However, at the time of final appointment, a thorough background verification is done. If you have been convicted of a serious criminal offence, your appointment may be denied. Minor offences or cases that were dismissed may not affect your candidature. Each case is evaluated individually during the verification process.",
      },
    ],
    content: `## What is UPSC CSE?

The Union Public Service Commission Civil Services Examination, commonly known as UPSC CSE, is the gateway to India's most prestigious government positions. Through this single exam, candidates are selected for the Indian Administrative Service (IAS), Indian Police Service (IPS), Indian Foreign Service (IFS), Indian Revenue Service (IRS), and about 20 other All India and Central Services.

Every year, roughly 10 to 12 lakh candidates apply for UPSC CSE, making it one of the toughest competitive exams in the world. But before you start dreaming about becoming a District Collector or an Ambassador, the first thing you need to check is whether you are eligible to appear for this exam. The eligibility criteria cover your age, education, nationality, and the number of attempts you get.

I have seen many aspirants spend months preparing only to realise that they missed the age limit by a few months or did not understand the attempt rules properly. This guide covers every detail of UPSC CSE 2026 eligibility so you can plan accordingly. For more UPSC-related content, check out [UPSC jobs](/category/upsc) on our portal.

## Educational Qualification

### Degree Requirement

The basic educational qualification for UPSC CSE is a **Bachelor's degree from any recognised university**. The degree can be in any subject or stream — Arts, Science, Commerce, Engineering, Medicine, Law, or anything else. UPSC does not discriminate based on your field of study.

Here is what counts as a valid qualification:
- A Bachelor's degree (BA, B.Sc, B.Com, B.Tech, BBA, BCA, LLB, MBBS, etc.) from a university incorporated by an Act of the Central or State Legislature
- A degree from an institution recognised by UGC or AICTE
- A degree declared equivalent to a recognised university degree by a government order
- A professional or technical qualification recognised as equivalent to a Bachelor's degree by the government

### Can Final-Year Students Apply?

**Yes**, students who are appearing in the final year of their graduation can apply for UPSC CSE. If you have not received your degree but have appeared for the qualifying exam, you are eligible to appear for the Preliminary exam. However, you must produce proof of passing the degree before the Mains examination. If selected for Mains, you will need to submit your degree or provisional certificate.

### Distance Education and Open University Degrees

Degrees obtained through distance education or open universities are fully accepted as long as the university is recognised by UGC. IGNOU degrees, for example, are completely valid for UPSC. There is no difference in treatment between a regular degree and a distance degree for eligibility purposes.

## Age Limit

Age is one of the most critical eligibility factors for UPSC. Missing the upper age limit by even one day means you cannot appear, no matter how well-prepared you are.

### Age Limits by Category

| Category | Minimum Age | Maximum Age | Age as on |
|----------|-------------|-------------|-----------|
| General | 21 years | 32 years | 1st August 2026 |
| OBC (Non-Creamy Layer) | 21 years | 35 years | 1st August 2026 |
| SC / ST | 21 years | 37 years | 1st August 2026 |
| PwBD (General) | 21 years | 42 years | 1st August 2026 |
| PwBD (OBC) | 21 years | 45 years | 1st August 2026 |
| PwBD (SC/ST) | 21 years | 47 years | 1st August 2026 |

**How to calculate**: If you were born on or after 2nd August 1994, you are within the General category upper age limit for UPSC CSE 2026. If you were born on 1st August 1994 or earlier, you are overage.

### Additional Age Relaxations

- **Defence Services personnel** disabled in operations: 3 years (General), 6 years (OBC), 8 years (SC/ST)
- **Ex-Servicemen** including Commissioned Officers and ECOs: 5 years
- **Residents of Jammu & Kashmir** (who resided there from 1st January 1980 to 31st December 1989): 5 years

These relaxations are cumulative with category-based relaxations in some cases. Always check the official notification for the exact relaxation applicable to your category combination.

## Number of Attempts Allowed

The number of attempts is limited for most categories. Planning your attempts is crucial for a long-term UPSC strategy.

| Category | Maximum Attempts |
|----------|-----------------|
| General | 6 attempts |
| OBC (Non-Creamy Layer) | 9 attempts |
| SC / ST | Unlimited (until age limit) |
| PwBD (General) | 9 attempts |
| PwBD (OBC) | 9 attempts |
| PwBD (SC/ST) | Unlimited (until age limit) |

### What Counts as an Attempt?

This is something many candidates get confused about. **Appearing for the Preliminary exam counts as one attempt**. It does not matter whether you passed Prelims or not, whether you appeared for both papers or just one, or whether you scored zero marks. If you sat in the examination hall for even one paper of Prelims, that is one attempt used.

**Filling the application form alone does not count as an attempt** if you do not appear for the exam. So if you applied but could not go to the exam centre, your attempt is not wasted.

### Strategic Attempt Planning

For General category candidates with 6 attempts, here is a common approach:
- **Attempt 1-2**: Learn the process, understand the pattern, and identify weak areas
- **Attempt 3-4**: Peak preparation phase with maximum focus
- **Attempt 5-6**: Final serious attempts with complete revision

Many successful candidates clear the exam in their 3rd or 4th attempt. Do not panic if your first attempt does not work out.

## Nationality Requirements

To appear for UPSC CSE, you must be one of the following:
1. A **citizen of India**
2. A **subject of Nepal or Bhutan**
3. A **Tibetan refugee** who came to India before 1st January 1962 with the intention of permanently settling
4. A **person of Indian origin** who migrated from Pakistan, Burma, Sri Lanka, East African countries (Kenya, Uganda, Tanzania), Zambia, Malawi, Zaire, Ethiopia, or Vietnam with the intention of permanently settling in India

For categories 2, 3, and 4, the candidate must have a certificate of eligibility issued by the Government of India. Also, candidates from Nepal and Bhutan and category 4 candidates are **not eligible for the IAS and IPS** — they can only be appointed to other services.

## Physical Standards

While UPSC does not have a physical test for most services, certain services like IPS, IRS (Customs), Railway Protection Force, and some others have specific physical standards:

- **IPS**: Minimum height 165 cm for men, 150 cm for women (with relaxations for certain categories)
- **Vision**: For IPS and some other services, a minimum vision standard is required. Candidates with vision defects may be declared unfit for certain services
- **General health**: All candidates must be in good physical and mental health. A medical examination is conducted before final appointment

For IAS and most other civil services, there are no specific height, weight, or physical fitness requirements beyond general good health.

## Key Points to Remember

Here are the most important things to keep in mind about UPSC eligibility:

1. **No minimum percentage** in graduation is required. Even a third-division pass is eligible.
2. **Any degree discipline** is accepted. You do not need a specific subject to appear for UPSC.
3. **Age relaxation is category-specific**. Make sure you have the correct category certificate.
4. **Attempts are precious**. Plan them wisely, especially if you are in the General category.
5. **Physical standards** apply only for specific services like IPS, not for all services.
6. **Nationality certificate** is needed for non-Indian citizens who are otherwise eligible.
7. **Check the notification every year**. While eligibility criteria remain largely the same, small changes can happen. Always refer to the latest official notification.
8. **EWS (Economically Weaker Sections)** candidates from the General category do not get age relaxation but get reservation benefits. The attempt limit remains 6.

**One last piece of advice**: Do not let eligibility doubts hold you back from starting preparation. If you have a graduation degree, are within the age limit, and have remaining attempts, you are eligible. Start preparing today. The UPSC journey is long, but it begins with knowing that you qualify.

## Frequently Asked Questions

### Is a degree from an open university valid for UPSC?

Yes, a degree from an open university like IGNOU, Dr. B.R. Ambedkar Open University, or any other open university recognised by the UGC is valid for UPSC CSE. The key requirement is that the university must be recognised by the University Grants Commission. Distance learning and correspondence degrees are also accepted as long as the university has UGC recognition.

### What happens if I have exhausted all my UPSC attempts?

Once you exhaust all your allowed attempts, you cannot appear for UPSC CSE again regardless of your age. General category gets 6 attempts, OBC gets 9, and SC/ST have unlimited attempts until the age limit. There is no provision to get extra attempts. However, you can still explore other civil services exams at the state level (State PCS) which have separate attempt limits.

### Does appearing for UPSC Prelims count as an attempt?

Yes, appearing for the UPSC Preliminary exam counts as one attempt regardless of whether you qualify for Mains or not. Even if you just sit for Paper 1 of Prelims and leave it blank, it counts as an attempt. However, simply filling the application form without actually appearing for the exam does not count as an attempt. This distinction is important for managing your attempts wisely.

### Is there a minimum percentage required in graduation for UPSC?

No, UPSC does not require any minimum percentage in graduation. You just need to have a Bachelor's degree from a recognised university. Whether you passed with 40 percent or 90 percent, you are equally eligible. This is one of the most democratic aspects of the UPSC exam — your graduation marks have no bearing on your eligibility or selection.

### Can a person with a criminal record appear for UPSC?

There is no bar on appearing for the UPSC exam if you have a criminal record. However, at the time of final appointment, a thorough background verification is done. If you have been convicted of a serious criminal offence, your appointment may be denied. Minor offences or cases that were dismissed may not affect your candidature. Each case is evaluated individually during the verification process.`,
  },
  {
    slug: "railway-group-d-2026-notification-dates-apply-online",
    title: "Railway Group D 2026 - Notification, Dates & How to Apply Online",
    description:
      "Everything about RRB Group D 2026 recruitment including notification details, eligibility, important dates, application process, exam pattern, and selection procedure.",
    category: "Application Help",
    author: "SarkariDarapan Team",
    publishedAt: "2026-04-25",
    updatedAt: "2026-05-25",
    tags: ["Railway Group D", "RRB Group D 2026", "Railway Jobs", "Group D Apply", "Indian Railways"],
    faqs: [
      {
        question: "What is the minimum qualification for Railway Group D?",
        answer:
          "The minimum educational qualification for Railway Group D is 10th pass (Matriculation) from a recognised board OR an ITI certificate from a recognised institution. Either of these qualifications makes you eligible. You do not need 12th or graduation for Group D posts. This makes it one of the most accessible government job opportunities for candidates who have not pursued higher education.",
      },
      {
        question: "What is the physical test for Railway Group D?",
        answer:
          "The Physical Efficiency Test (PET) for male candidates includes lifting and carrying 35 kg weight for 100 metres in 2 minutes and running 1000 metres in 4 minutes 15 seconds. For female candidates, the requirements are lifting and carrying 20 kg weight for 100 metres in 2 minutes and running 1000 metres in 5 minutes 40 seconds. Candidates who fail the PET are eliminated regardless of their CBT score.",
      },
      {
        question: "How many vacancies are expected in Railway Group D 2026?",
        answer:
          "Based on previous recruitment cycles, Railway Group D 2026 is expected to have approximately 50,000 to 1,00,000 vacancies across all Railway Recruitment Boards. The exact number will be confirmed in the official notification. The 2019 cycle had over 1,03,000 vacancies, making it one of the largest single recruitment drives in India. Keep checking for official updates.",
      },
      {
        question: "Can I apply for Railway Group D from any state?",
        answer:
          "Yes, you can apply from any state in India regardless of where you live. Railway recruitment is a central government process and there is no state-level domicile requirement. However, you need to choose a specific Railway Recruitment Board zone for your application. Choose the RRB zone closest to your location for the exam centre convenience. Your posting after selection could be anywhere in India.",
      },
      {
        question: "What is the salary for Railway Group D posts?",
        answer:
          "Railway Group D posts are in Level 1 of the 7th Pay Commission pay matrix. The basic pay starts at Rs. 18,000 per month. With Dearness Allowance, House Rent Allowance, and other benefits, the gross salary comes to approximately Rs. 25,000 to Rs. 30,000 per month depending on the city of posting. Additional benefits include free railway passes, medical facilities, pension, and other allowances. The salary increases with experience and promotions.",
      },
    ],
    content: `## What is Railway Group D?

Railway Group D is one of the largest government job recruitments in India. Conducted by the Railway Recruitment Boards (RRBs) across the country, it fills positions like Track Maintainer Grade-IV, Helper/Assistant in various technical departments (Electrical, Mechanical, Signal & Telecom), and other Level-1 posts under the 7th Central Pay Commission.

What makes Railway Group D special is its accessibility — you only need to be 10th pass or have an ITI certificate to apply. This opens the door for millions of candidates who may not have higher education but are looking for a stable government job with good benefits. If you are one of them, this guide walks you through everything from eligibility to the application process.

For more railway opportunities, browse all [railway jobs](/category/railway) on our portal.

## Who is Eligible?

### Educational Qualification

The minimum qualification is straightforward:
- **10th pass (Matriculation)** from a recognised board, OR
- **ITI certificate** from a recognised institution under NCVT or SCVT

You do not need 12th pass or graduation for Group D posts. This is one of the lowest qualification requirements among central government jobs, making it accessible to a huge number of candidates.

### Age Limit

| Category | Minimum Age | Maximum Age |
|----------|-------------|-------------|
| General (UR) | 18 years | 33 years |
| OBC (Non-Creamy Layer) | 18 years | 36 years |
| SC / ST | 18 years | 38 years |
| PwBD (General) | 18 years | 43 years |
| Ex-Servicemen | 18 years | As per rules |

Age is calculated as on the date mentioned in the official notification (usually 1st January or 1st July of the recruitment year).

### Medical Standards

Railway Group D has specific medical fitness requirements since these are physically demanding jobs:
- **Vision**: Distant vision 6/9 in each eye without glasses for some categories. Colour vision must be normal
- **Hearing**: Normal hearing ability in both ears
- **Physical fitness**: Must be free from any condition that could interfere with efficient performance of duties

A medical examination is conducted after the Physical Efficiency Test, and candidates who do not meet the medical standards are rejected.

## Important Dates

Here are the expected important dates for Railway Group D 2026:

| Event | Expected Date |
|-------|---------------|
| Official Notification | April-May 2026 |
| Online Application Starts | May 2026 |
| Last Date to Apply | June 2026 |
| Last Date for Fee Payment | June 2026 |
| CBT Exam Date | August-October 2026 |
| PET Date | To be announced |
| Document Verification | To be announced |

**Important**: These dates are approximate and based on the expected RRB calendar. The exact dates will be confirmed in the official notification. Check the RRB website regularly.

## Step-by-Step Application Process

The application process for Railway Group D involves multiple steps. Follow each one carefully.

### Step 1: Choose Your RRB Zone

India has 21 Railway Recruitment Boards spread across the country. Before you start the application, decide which RRB zone you want to apply under. Here are some major ones:
- RRB Ahmedabad, RRB Ajmer, RRB Allahabad, RRB Bangalore
- RRB Bhopal, RRB Bhubaneswar, RRB Bilaspur, RRB Chandigarh
- RRB Chennai, RRB Gorakhpur, RRB Guwahati, RRB Jammu
- RRB Kolkata, RRB Malda, RRB Mumbai, RRB Muzaffarpur
- RRB Patna, RRB Ranchi, RRB Secunderabad, RRB Siliguri, RRB Thiruvananthapuram

Choose the RRB closest to your current location. This determines where your exam centre will be. **You can only apply to one RRB** — multiple applications will be rejected.

### Step 2: Visit the Official Website and Register

1. Go to the official website of your chosen RRB (for example, rrbcdg.gov.in for RRB Chandigarh)
2. Look for the **RRB Group D CEN (Centralised Employment Notice)** notification
3. Click on **"New Registration"**
4. Enter your **name** (as on your 10th certificate), **date of birth**, **email address**, and **mobile number**
5. Create a **password** and complete the registration
6. Note down your **Registration Number** — this is your login ID for the entire process

### Step 3: Fill the Application Form

Log in and fill the complete application form:

**Personal Information**: Name, father's name, mother's name, date of birth, gender, marital status, religion, category, Aadhaar number, and complete address.

**Educational Qualification**: Enter your 10th pass details or ITI certificate details including board/institution name, year of passing, and percentage/grade.

**Post Preferences**: Select the posts you are interested in (Track Maintainer, Helper, Assistant Pointsman, etc.). Select all that you are eligible for.

**Language Preference**: Choose the language for your Computer Based Test — English, Hindi, or one of the regional languages offered.

**Exam Centre Preference**: Choose your preferred exam cities within the RRB zone.

### Step 4: Upload Photo and Signature

**Photo requirements**:
- Recent colour photograph with **white background**
- JPEG format, **20 KB to 50 KB**
- Face clearly visible, no sunglasses

**Signature requirements**:
- Black ink on white paper
- JPEG format, **10 KB to 20 KB**
- Clear and readable

### Step 5: Pay the Application Fee

## Application Fee and Payment

| Category | Fee Amount |
|----------|-----------|
| General / OBC / EWS Male | Rs. 500 |
| SC / ST / Ex-Servicemen / PwBD / Female / Transgender / Minorities / EBC | Rs. 250 |

**Note**: Rs. 400 is refunded for General/OBC candidates and Rs. 250 is refunded for others after they appear for the CBT exam. So the effective cost of applying is very low if you actually take the exam.

Payment can be made through:
- **Net Banking**
- **Debit Card / Credit Card**
- **UPI** (Google Pay, PhonePe, etc.)
- **SBI Challan** (offline at SBI branch)

After payment, download the receipt and save it.

### Step 6: Final Submission

Review all details, verify your photo and signature, and click **Final Submit**. Take a printout of the completed application form. You will need the registration number to download your admit card later.

## Documents Required

Keep these ready before you start:

- **10th class certificate and mark sheet** (for date of birth and qualification proof)
- **ITI certificate** (if applying with ITI qualification)
- **Aadhaar Card**
- **Category certificate** (SC/ST/OBC/EWS) from the competent authority
- **PwBD certificate** (if applicable)
- **Passport-size photographs** (keep 15-20 copies)
- **Bank account details** (for fee refund after appearing for exam)

## Common Mistakes to Avoid

1. **Applying to multiple RRBs** — You can only apply to ONE RRB. If you submit multiple applications, all of them will be rejected. Choose wisely.

2. **Wrong date of birth** — Your date of birth must match your 10th certificate exactly. Even one day's difference can cause rejection during document verification.

3. **Not choosing enough post preferences** — Select all posts you are eligible for. This maximises your chances of selection. You can always decline a post later.

4. **Uploading poor quality photos** — A blurry or dark photo will be printed on your admit card and used for identification. Use a proper passport-size photo.

5. **Waiting for the last date** — The RRB website gets extremely slow in the final days because crores of candidates apply. Submit your application at least a week before the deadline.

6. **Not saving registration details** — Your registration number is essential for admit card download, result checking, and any future correspondence. Save it in multiple places.

7. **Incorrect category certificate** — OBC candidates must have a certificate valid for central government purposes. State OBC certificates may not be accepted. SC/ST certificates must be from the District Magistrate or equivalent authority.

## Frequently Asked Questions

### What is the minimum qualification for Railway Group D?

The minimum educational qualification for Railway Group D is 10th pass (Matriculation) from a recognised board OR an ITI certificate from a recognised institution. Either of these qualifications makes you eligible. You do not need 12th or graduation for Group D posts. This makes it one of the most accessible government job opportunities for candidates who have not pursued higher education.

### What is the physical test for Railway Group D?

The Physical Efficiency Test (PET) for male candidates includes lifting and carrying 35 kg weight for 100 metres in 2 minutes and running 1000 metres in 4 minutes 15 seconds. For female candidates, the requirements are lifting and carrying 20 kg weight for 100 metres in 2 minutes and running 1000 metres in 5 minutes 40 seconds. Candidates who fail the PET are eliminated regardless of their CBT score.

### How many vacancies are expected in Railway Group D 2026?

Based on previous recruitment cycles, Railway Group D 2026 is expected to have approximately 50,000 to 1,00,000 vacancies across all Railway Recruitment Boards. The exact number will be confirmed in the official notification. The 2019 cycle had over 1,03,000 vacancies, making it one of the largest single recruitment drives in India. Keep checking for official updates.

### Can I apply for Railway Group D from any state?

Yes, you can apply from any state in India regardless of where you live. Railway recruitment is a central government process and there is no state-level domicile requirement. However, you need to choose a specific Railway Recruitment Board zone for your application. Choose the RRB zone closest to your location for the exam centre convenience. Your posting after selection could be anywhere in India.

### What is the salary for Railway Group D posts?

Railway Group D posts are in Level 1 of the 7th Pay Commission pay matrix. The basic pay starts at Rs. 18,000 per month. With Dearness Allowance, House Rent Allowance, and other benefits, the gross salary comes to approximately Rs. 25,000 to Rs. 30,000 per month depending on the city of posting. Additional benefits include free railway passes, medical facilities, pension, and other allowances. The salary increases with experience and promotions.`,
  },
  {
    slug: "pm-kisan-samman-nidhi-apply-check-status-fix-errors",
    title: "PM Kisan Samman Nidhi - How to Apply, Check Status & Fix Errors",
    description:
      "Practical guide for PM Kisan Yojana covering new registration, eKYC, installment status check, and how to fix common problems like payment failures and name mismatches.",
    category: "Scheme Guide",
    author: "SarkariDarapan Team",
    publishedAt: "2026-03-20",
    updatedAt: "2026-05-25",
    tags: ["PM Kisan", "PM Kisan Status", "PM Kisan Apply", "Government Schemes", "Farmer Scheme"],
    faqs: [
      {
        question: "How can I check my PM Kisan payment status online?",
        answer:
          "Visit pmkisan.gov.in, click on 'Beneficiary Status' in the top menu, enter your Aadhaar number or account number or mobile number, and click 'Get Data'. You will see all your installment details including the amount, date, and status of each payment. The status will show as 'FTO is Generated and Payment confirmed' if the payment was successful, or 'Pending' if it is still being processed.",
      },
      {
        question: "My PM Kisan payment failed. How do I fix it?",
        answer:
          "Payment failures usually happen because of incorrect bank details, inactive Aadhaar seeding, or incomplete eKYC. First, check if your bank account is linked to your Aadhaar (visit your bank for Aadhaar seeding). Then complete your eKYC on pmkisan.gov.in. If your name in Aadhaar does not match your bank records, get it corrected. After fixing the issue, your pending payment will be released in the next cycle automatically.",
      },
      {
        question: "Can I register for PM Kisan without land in my name?",
        answer:
          "No, you generally cannot register if the land is not in your name. PM Kisan requires land ownership records that match the applicant's name. However, in some states, land can be in the joint name of family members. If the land is in your father's or spouse's name, the registration should be in their name, not yours. Check your state's specific rules, as some states have provisions for tenant farmers.",
      },
      {
        question: "Is eKYC mandatory for PM Kisan beneficiaries?",
        answer:
          "Yes, eKYC is mandatory for all PM Kisan beneficiaries. Without completing eKYC, your installments will be held and you will not receive any new payments. You can complete eKYC online through the PM Kisan portal using your Aadhaar-linked mobile number for OTP verification, or you can visit a Common Service Centre (CSC) for biometric eKYC using fingerprint. Complete it as soon as possible to avoid payment delays.",
      },
      {
        question: "I received PM Kisan money by mistake. What should I do?",
        answer:
          "If you received PM Kisan money despite being ineligible (for example, you are a government employee or income tax payer), you are required to return the amount. The government conducts periodic verification and ineligible beneficiaries are asked to refund the money. You can voluntarily return it through the 'Refund Online' option on the PM Kisan portal, or contact your local agriculture office. Not returning the money can result in recovery proceedings.",
      },
    ],
    content: `## What is PM Kisan Samman Nidhi?

Pradhan Mantri Kisan Samman Nidhi, commonly called PM Kisan, is one of the most important government schemes for farmers in India. Under this scheme, eligible farmer families receive **Rs. 6,000 per year** in three installments of Rs. 2,000 each, directly deposited into their bank accounts. The scheme was launched in February 2019 and has since benefited over 11 crore farmer families across the country.

What makes PM Kisan different from many other government schemes is that the money goes **directly to the farmer's bank account** — there are no middlemen, no agents, and no commissions. If you are a farmer or someone in your family is, this guide will help you register, check your payment status, complete eKYC, and fix common problems.

For a broader overview of the scheme, you can also read our [complete PM Kisan Yojana guide](/blog/complete-guide-to-pm-kisan-yojana).

## How to Apply

There are three ways to register for PM Kisan. Choose the one that works best for you.

### Method 1: Online Registration (Self)

This is the fastest way to apply if you have internet access and basic smartphone or computer skills.

1. Open your browser and go to **pmkisan.gov.in**
2. Click on **"New Farmer Registration"** on the homepage
3. Select **"Rural Farmer Registration"** or **"Urban Farmer Registration"** based on your area
4. Enter your **Aadhaar number** and select your **state**
5. Enter the CAPTCHA code and click **"Search"**
6. If you are not already registered, you will see the registration form
7. Fill in your **name** (exactly as on Aadhaar), **gender**, **category** (SC/ST/General/OBC)
8. Enter your **bank account number**, **IFSC code**, and confirm the account number
9. Enter your **land details** — survey number, Khasra number, Khata number, and the area of land in hectares
10. Upload your **Aadhaar card** and **land documents** if required by your state
11. Submit the form and note down the **registration reference number**

### Method 2: Through Common Service Centre (CSC)

If you find the online process difficult, visit your nearest CSC:

1. Find a **Common Service Centre** in your village or nearby town
2. Carry your **Aadhaar card**, **bank passbook**, and **land documents** (Khatauni/Khasra)
3. Tell the CSC operator you want to register for PM Kisan
4. The operator will fill the form on your behalf and take your **biometric verification** (fingerprint)
5. You will get a registration slip — keep it safe

**CSC charges**: The CSC may charge a nominal service fee of Rs. 10-30 for the registration. This is not an official fee but is allowed for the operator's service.

### Method 3: Offline Through Patwari or Agriculture Office

In some states, the local Patwari or Lekhpal collects farmer details and submits them to the block agriculture office:

1. Contact your **village Pradhan**, **Patwari**, or **Block Agriculture Officer**
2. Submit copies of your Aadhaar card, bank passbook, and land documents
3. The official will add your details to the PM Kisan database
4. You can check your registration status online after 2-3 weeks

## How to Complete eKYC

eKYC is **mandatory** for all PM Kisan beneficiaries. Without it, your installments will stop. Here is how to do it:

### Online eKYC (OTP-Based)

1. Go to **pmkisan.gov.in**
2. Click on **"eKYC"** in the top menu bar
3. Enter your **Aadhaar number** and click **"Search"**
4. Your name and registration details will appear
5. Click **"Get OTP"** — an OTP will be sent to your Aadhaar-linked mobile number
6. Enter the OTP and click **"Submit"**
7. Your eKYC is now complete. You will see a confirmation message

**Important**: This method only works if your mobile number is linked to your Aadhaar. If it is not, you will need biometric eKYC.

### Biometric eKYC (at CSC)

1. Visit your nearest **Common Service Centre**
2. Carry your **Aadhaar card**
3. The CSC operator will use a biometric device to scan your **fingerprint**
4. Your fingerprint will be matched with your Aadhaar database
5. Once verified, your eKYC is complete

Biometric eKYC is the backup option when OTP-based eKYC fails. It is also more secure since it uses your fingerprint directly.

## How to Check PM Kisan Payment Status

### Method 1: Beneficiary Status on the Website

1. Visit **pmkisan.gov.in**
2. Click on **"Beneficiary Status"**
3. Enter your **Aadhaar number**, **account number**, or **mobile number**
4. Click **"Get Data"**
5. You will see a table showing all installments with dates and amounts

### Method 2: Through the PM Kisan Mobile App

1. Download the **PM Kisan Mobile App** from Google Play Store
2. Open the app and tap **"Check Beneficiary Status"**
3. Enter your Aadhaar number or mobile number
4. Your installment history will be displayed

### Method 3: Helpline Number

Call the PM Kisan helpline at **155261** or **011-24300606** (Monday to Friday, 9:30 AM to 6:00 PM).

### Understanding Status Terms

| Status | Meaning |
|--------|---------|
| FTO is Generated and Payment confirmed | Payment successful, money has been sent to your bank |
| Rft Signed by State | State has approved your payment, waiting for central processing |
| Pending for approval at State/District | Your details are under verification at the state or district level |
| Aadhaar Authentication Failed | Your Aadhaar number does not match bank records |
| Account Number / IFSC Incorrect | Your bank details in PM Kisan records are wrong |

## How to Fix Common Errors

### Error 1: Aadhaar Authentication Failed

**Cause**: Your name in Aadhaar does not match the name in PM Kisan records, or your Aadhaar is not seeded with your bank account.

**Fix**: Visit your bank and get Aadhaar seeding done. Make sure the name in your bank account, Aadhaar card, and PM Kisan registration are all the same. If there is a spelling difference, get it corrected at the Aadhaar centre first.

### Error 2: Bank Account Validation Failed

**Cause**: Incorrect account number, wrong IFSC code, or closed bank account.

**Fix**: Log in to pmkisan.gov.in, go to **"Updation of Self Registered Farmer"**, and update your bank details. If the account is closed, open a new one and update the details. Make sure the IFSC code matches your specific branch.

### Error 3: Payment Status Shows Pending for Months

**Cause**: Your state government has not verified your land records yet, or there is a data mismatch.

**Fix**: Contact your **Block Agriculture Officer** or **District Agriculture Officer**. Ask them to check your record in the PM Kisan dashboard. They can approve pending applications or flag issues that need correction.

### Error 4: Name Mismatch Between Documents

**Cause**: Your name is spelled differently in Aadhaar, bank account, and land records. For example, "Ram Prasad" in Aadhaar and "Ramprasad" in the bank.

**Fix**: Get the name corrected in whichever document has the error. It is easiest to correct the Aadhaar name (visit an Aadhaar centre) or the bank name (visit your bank branch with ID proof). All three should match exactly.

### Error 5: Double Registration in Family

**Cause**: Both husband and wife registered separately, or a duplicate registration exists.

**Fix**: Only one member per family can be a beneficiary. If both have registered, the duplicate entry needs to be deleted. Contact your local agriculture office to remove the extra registration. The person whose name is on the land records should remain as the beneficiary.

## Frequently Asked Questions

### How can I check my PM Kisan payment status online?

Visit pmkisan.gov.in, click on "Beneficiary Status" in the top menu, enter your Aadhaar number or account number or mobile number, and click "Get Data". You will see all your installment details including the amount, date, and status of each payment. The status will show as "FTO is Generated and Payment confirmed" if the payment was successful, or "Pending" if it is still being processed.

### My PM Kisan payment failed. How do I fix it?

Payment failures usually happen because of incorrect bank details, inactive Aadhaar seeding, or incomplete eKYC. First, check if your bank account is linked to your Aadhaar (visit your bank for Aadhaar seeding). Then complete your eKYC on pmkisan.gov.in. If your name in Aadhaar does not match your bank records, get it corrected. After fixing the issue, your pending payment will be released in the next cycle automatically.

### Can I register for PM Kisan without land in my name?

No, you generally cannot register if the land is not in your name. PM Kisan requires land ownership records that match the applicant's name. However, in some states, land can be in the joint name of family members. If the land is in your father's or spouse's name, the registration should be in their name, not yours. Check your state's specific rules, as some states have provisions for tenant farmers.

### Is eKYC mandatory for PM Kisan beneficiaries?

Yes, eKYC is mandatory for all PM Kisan beneficiaries. Without completing eKYC, your installments will be held and you will not receive any new payments. You can complete eKYC online through the PM Kisan portal using your Aadhaar-linked mobile number for OTP verification, or you can visit a Common Service Centre (CSC) for biometric eKYC using fingerprint. Complete it as soon as possible to avoid payment delays.

### I received PM Kisan money by mistake. What should I do?

If you received PM Kisan money despite being ineligible (for example, you are a government employee or income tax payer), you are required to return the amount. The government conducts periodic verification and ineligible beneficiaries are asked to refund the money. You can voluntarily return it through the "Refund Online" option on the PM Kisan portal, or contact your local agriculture office. Not returning the money can result in recovery proceedings.`,
  },
  {
    slug: "best-books-for-ssc-cgl-2026-tier-1-and-tier-2",
    title: "Best Books for SSC CGL 2026 - Tier 1 and Tier 2 Recommendations",
    description:
      "Curated list of the best books for SSC CGL 2026 preparation covering Quantitative Aptitude, Reasoning, English, General Awareness, and previous year papers for both Tier 1 and Tier 2.",
    category: "Exam Preparation",
    author: "SarkariDarapan Team",
    publishedAt: "2026-04-05",
    updatedAt: "2026-05-25",
    tags: ["SSC CGL Books", "SSC CGL 2026", "SSC", "Best Books", "Study Material"],
    faqs: [
      {
        question: "What is the single best book for Quantitative Aptitude for SSC CGL?",
        answer:
          "If you can buy only one book, go with 'Rakesh Yadav 7300+ Objectivewise' for Quantitative Aptitude. It covers every topic in the SSC CGL syllabus with hundreds of practice questions arranged by difficulty level. The explanations are clear and the book is updated regularly with new patterns. Many successful candidates consider it the gold standard for SSC Maths preparation.",
      },
      {
        question: "Do I need separate books for Tier 1 and Tier 2?",
        answer:
          "For most subjects, you do not need completely separate books. A good comprehensive book for each subject will cover both Tier 1 and Tier 2 level content. However, for English, you may want an additional resource for essay and letter writing since that is only in Tier 2. For Maths, the same book works but you should focus on advanced chapters for Tier 2. Previous year papers should include both Tier 1 and Tier 2 papers.",
      },
      {
        question: "Are NCERT books enough for General Awareness in SSC CGL?",
        answer:
          "NCERT books from Class 6 to 10 are an excellent starting point for History, Geography, Polity, and Science. They build a strong foundation that helps you understand and remember facts better. However, for SSC CGL, you also need Lucent's General Knowledge for additional static GK and a monthly current affairs magazine. NCERTs alone will cover about 40-50 percent of the GK section.",
      },
      {
        question: "Should I use previous year papers or a question bank for practice?",
        answer:
          "Previous year papers are more valuable than question banks. They show you the exact difficulty level, question types, and topic distribution of the actual SSC CGL exam. Solve at least 10 years of previous papers for both Tier 1 and Tier 2. After that, if you want more practice, a question bank can be useful. But always prioritise previous year papers first — they are the closest you can get to the real exam.",
      },
      {
        question: "Can I prepare for SSC CGL using only online material?",
        answer:
          "While there are excellent free and paid resources online (YouTube channels, apps, PDFs), relying solely on online material has some drawbacks. Books provide structured, comprehensive coverage that random online content may not. I recommend using books as your primary source and supplementing with online material for current affairs, video explanations, and mock tests. Many toppers use a combination of books and online resources.",
      },
    ],
    content: `## Why Choosing the Right Books Matters

When I started preparing for SSC CGL, I made a mistake that many candidates make — I bought too many books. I had three books for Maths, two for Reasoning, and four different GK books. Within a month, I had not finished even one book completely. The result was scattered preparation and low confidence.

After speaking with candidates who actually cleared the exam, I learned something important: **it is better to finish one good book thoroughly than to half-read five average books**. The right books save you time, cover the syllabus completely, and match the actual difficulty level of the exam.

This guide gives you a carefully curated list of the best books for every SSC CGL subject. I have included books for both Tier 1 and Tier 2, with honest pros and cons for each. Check the [SSC CGL 2026 notification](/sarkari-naukri/ssc-cgl-2026) for the latest exam details, and stay updated with [SSC updates](/category/ssc). If you want to understand the syllabus in detail first, read our [SSC CGL syllabus guide](/blog/ssc-cgl-syllabus-2026-complete-topic-wise-breakdown).

## Quantitative Aptitude Books

Maths is the most important subject for SSC CGL. Here are the top recommendations:

### 1. Rakesh Yadav 7300+ Objectivewise

This is widely considered the **best book for SSC CGL Maths**. It covers every arithmetic and advanced topic with a huge question bank organised by topic and difficulty.

**Pros**:
- Covers every SSC CGL topic comprehensively
- Questions are arranged from easy to difficult, helping you build up gradually
- Includes previous year questions with detailed solutions
- Regularly updated with new question patterns
- Affordable price

**Cons**:
- Can feel overwhelming due to the sheer number of questions
- Some advanced Tier 2 topics need supplementary material
- Explanations for some geometry questions could be more detailed

### 2. R.S. Aggarwal - Quantitative Aptitude

A classic book that has helped millions of candidates across all competitive exams.

**Pros**:
- Excellent theory and concept explanations before each chapter
- Good for beginners who need to build their foundation
- Covers both basic and advanced topics
- Well-structured chapter-wise layout

**Cons**:
- Not specifically designed for SSC, so some topics may be unnecessary
- Fewer questions compared to Rakesh Yadav
- Some questions are easier than actual SSC level

### 3. Kiran Prakashan - SSC Mathematics Chapterwise

**Pros**:
- 100 percent focused on SSC exam patterns
- Contains only previous year questions from actual SSC exams
- Great for revision and understanding question patterns

**Cons**:
- Does not teach concepts — assumes you already know the basics
- Best used as a supplement, not as a primary book

**My recommendation**: Start with R.S. Aggarwal if you are a beginner, then move to Rakesh Yadav for intensive practice. Use Kiran's for final revision.

## Reasoning Books

### 1. Kiran Prakashan - SSC Reasoning Chapterwise

The best book specifically designed for SSC Reasoning. It contains previous year questions organised by topic.

**Pros**:
- Directly aligned with SSC CGL exam pattern
- Excellent for understanding the types of questions asked
- Good explanations with multiple solving methods
- Updated regularly

**Cons**:
- Not ideal if you need to learn reasoning from scratch
- Limited practice for some newer question types

### 2. R.S. Aggarwal - A Modern Approach to Verbal and Non-Verbal Reasoning

The all-rounder reasoning book that covers every possible topic.

**Pros**:
- Comprehensive coverage of both verbal and non-verbal reasoning
- Great for beginners with clear concept explanations
- Huge question bank for practice
- Used by candidates across all competitive exams

**Cons**:
- Many topics are not relevant to SSC CGL
- Some sections are too detailed for the exam requirement

**My recommendation**: Use R.S. Aggarwal for learning concepts and Kiran Prakashan for SSC-specific practice.

## English Language Books

### 1. S.P. Bakshi - Objective General English (Arihant)

A widely recommended English book for all competitive exams.

**Pros**:
- Covers grammar, vocabulary, and comprehension thoroughly
- Clear explanations with lots of examples
- Good practice exercises after each chapter
- Affordable and widely available

**Cons**:
- Some sections go beyond what SSC CGL requires
- Could have more SSC-specific practice questions

### 2. Neetu Singh - Plinth to Paramount (KD Publications)

Designed specifically for SSC English by a renowned SSC coaching expert.

**Pros**:
- Specifically designed for SSC CGL exam pattern
- Covers error spotting, cloze test, and comprehension in detail
- Builds skills progressively from basic to advanced
- Excellent for candidates who are weak in English

**Cons**:
- Available in multiple volumes which can be expensive together
- Some candidates find the approach too detailed for Tier 1

**My recommendation**: S.P. Bakshi for a solid all-round foundation, Neetu Singh if English is your weak area and you need extra help.

## General Awareness Books

### 1. Lucent's General Knowledge

The undisputed king of static GK for all competitive exams.

**Pros**:
- Covers History, Geography, Polity, Science, Economy in one book
- Facts are presented in a concise, exam-friendly format
- Updated editions include recent data and events
- Very affordable

**Cons**:
- Does not cover current affairs — you need a separate source
- Can feel dry since it is mostly factual content
- Some sections need better organisation

### 2. NCERT Books (Class 6 to 10)

**For**: History (Old NCERT by R.S. Sharma for Ancient India), Geography, Science, Polity

**Pros**:
- Build conceptual understanding rather than just memorisation
- Free to download from ncert.nic.in
- Help you remember facts because they explain the context

**Cons**:
- Time-consuming to read all of them
- Not enough on their own for the GK section

### 3. Current Affairs Magazine

Use **Pratiyogita Darpan** (monthly) or any reputable current affairs monthly PDF for the last 6-8 months.

**My recommendation**: Read NCERTs first (especially for Polity, History, and Science), then use Lucent's for quick revision, and supplement with a monthly current affairs source.

## Previous Year Papers and Mock Tests

### 1. Kiran's SSC CGL Solved Papers (Tier 1 and Tier 2)

**Why it is essential**: Previous year papers are the most important resource for any SSC exam. They show you exactly what to expect — the difficulty level, question types, time pressure, and topic distribution.

**What to buy**: Get the latest edition that includes papers from the last 8-10 years for both Tier 1 and Tier 2.

### 2. Online Mock Tests

SSC itself releases practice tests on its website. Additionally, platforms like Testbook, Oliveboard, and Adda247 offer mock tests that closely simulate the actual exam. Attempt at least 30 mock tests before the exam.

## Books for Tier 2 Specific Topics

### Computer Knowledge

- **Arihant's Objective Computer Awareness** covers everything from computer fundamentals to MS Office and networking
- Focus on practical topics: MS Word, MS Excel, PowerPoint, Internet basics, and computer security

### Essay and Letter Writing (Tier 2 English Module)

- Practice writing essays on current topics (government schemes, technology, social issues)
- For letters, practice both formal (to authorities) and informal (personal) formats
- There is no specific book needed — practice 2-3 essays per week and review them

### Statistics (for JSO Post)

- **Pratiyogita Darpan Extra Issue on Statistics** or any basic Statistics textbook covering descriptive statistics, probability, and inference

## How Many Books Do You Actually Need?

Here is a summary table of the minimum books you need:

| Subject | Primary Book | Supplementary |
|---------|-------------|---------------|
| Quantitative Aptitude | Rakesh Yadav 7300+ | R.S. Aggarwal (beginners) |
| Reasoning | Kiran Prakashan SSC Reasoning | R.S. Aggarwal (concepts) |
| English | S.P. Bakshi | Neetu Singh (if weak in English) |
| General Awareness | Lucent's GK | NCERT Class 6-10, Monthly CA |
| Previous Year Papers | Kiran's Solved Papers | Online mock tests |
| Computer Knowledge | Arihant Computer Awareness | — |

**Total books needed**: 5 to 7 books maximum. Do not buy more than this. Focus on completing these thoroughly rather than collecting more material.

**Final advice**: The best book is the one you actually finish. Pick one primary book per subject, complete it cover to cover, revise it twice, and then supplement with practice from previous year papers. This simple approach works better than buying every book in the market.

## Frequently Asked Questions

### What is the single best book for Quantitative Aptitude for SSC CGL?

If you can buy only one book, go with "Rakesh Yadav 7300+ Objectivewise" for Quantitative Aptitude. It covers every topic in the SSC CGL syllabus with hundreds of practice questions arranged by difficulty level. The explanations are clear and the book is updated regularly with new patterns. Many successful candidates consider it the gold standard for SSC Maths preparation.

### Do I need separate books for Tier 1 and Tier 2?

For most subjects, you do not need completely separate books. A good comprehensive book for each subject will cover both Tier 1 and Tier 2 level content. However, for English, you may want an additional resource for essay and letter writing since that is only in Tier 2. For Maths, the same book works but you should focus on advanced chapters for Tier 2. Previous year papers should include both Tier 1 and Tier 2 papers.

### Are NCERT books enough for General Awareness in SSC CGL?

NCERT books from Class 6 to 10 are an excellent starting point for History, Geography, Polity, and Science. They build a strong foundation that helps you understand and remember facts better. However, for SSC CGL, you also need Lucent's General Knowledge for additional static GK and a monthly current affairs magazine. NCERTs alone will cover about 40-50 percent of the GK section.

### Should I use previous year papers or a question bank for practice?

Previous year papers are more valuable than question banks. They show you the exact difficulty level, question types, and topic distribution of the actual SSC CGL exam. Solve at least 10 years of previous papers for both Tier 1 and Tier 2. After that, if you want more practice, a question bank can be useful. But always prioritise previous year papers first — they are the closest you can get to the real exam.

### Can I prepare for SSC CGL using only online material?

While there are excellent free and paid resources online (YouTube channels, apps, PDFs), relying solely on online material has some drawbacks. Books provide structured, comprehensive coverage that random online content may not. I recommend using books as your primary source and supplementing with online material for current affairs, video explanations, and mock tests. Many toppers use a combination of books and online resources.`,
  },
  {
    slug: "government-jobs-after-12th-in-india-2026",
    title: "Government Jobs After 12th in India 2026 - Complete List & How to Apply",
    description:
      "Comprehensive list of government jobs you can apply for after 12th pass in 2026 including Railway, SSC, Defence, Police, and state-level posts with eligibility, salary, and application details.",
    category: "Career Guide",
    author: "SarkariDarapan Team",
    publishedAt: "2026-02-25",
    updatedAt: "2026-05-25",
    tags: ["Government Jobs After 12th", "12th Pass Jobs", "Sarkari Naukri", "Career Guide", "Entry Level Jobs"],
    faqs: [
      {
        question: "What is the highest paying government job after 12th?",
        answer:
          "The highest paying government jobs after 12th are in the defence sector. Commissioned Officers in the Indian Army, Navy, and Air Force (through NDA) receive a starting salary of approximately Rs. 56,100 per month (Level 10 of 7th Pay Commission) plus allowances, which totals around Rs. 80,000 to Rs. 1,00,000 per month. Among non-defence jobs, SSC CHSL posts like Postal Assistant and Data Entry Operator offer Rs. 25,500 to Rs. 29,200 basic pay.",
      },
      {
        question: "Can I get a government job without appearing for any exam?",
        answer:
          "Very few government jobs are available without a written exam. Some state governments conduct direct recruitment for Group D posts (peons, sweepers, ward attendants) based on educational qualification and interview. The Indian Army also has a rally-based recruitment for soldier positions. Sports quota recruitments in various departments sometimes skip the written exam. However, for most stable government positions, an exam is required.",
      },
      {
        question: "What age relaxation is available for SC/ST/OBC candidates?",
        answer:
          "Age relaxation for reserved categories varies by exam but generally follows this pattern: OBC (Non-Creamy Layer) gets 3 years relaxation, SC/ST gets 5 years relaxation, and PwBD candidates get 10 years relaxation over the upper age limit. Ex-servicemen also get relaxation as per government rules. These relaxations are over and above the general category upper age limit specified for each exam.",
      },
      {
        question: "Should I apply for government jobs now or complete my degree first?",
        answer:
          "If you are 12th pass and meet the age criteria, start applying for 12th-pass level government jobs immediately while pursuing your degree. You can do both simultaneously since most exam preparations can be managed alongside college studies. The advantage is that if you get selected now, you have a secure job. If not, you will have exam experience that helps in graduate-level exams later. Many candidates clear exams while still in college.",
      },
      {
        question: "Which government exam after 12th has the most vacancies?",
        answer:
          "Railway Group D and Railway NTPC typically have the most vacancies among 12th-pass level government exams. Railway Group D alone had over 1,03,000 vacancies in its last major recruitment cycle. SSC CHSL also recruits for thousands of posts annually. State Police Constable exams in large states like UP, Bihar, and Rajasthan also release very large vacancy numbers, sometimes exceeding 50,000 posts at a time.",
      },
    ],
    content: `## Why Consider Government Jobs After 12th?

If you have just finished your 12th standard and are wondering what to do next, government jobs are one of the best options to consider. A government job after 12th gives you financial stability, job security, and social respect — often at an age when most of your peers are still studying.

I have seen many young people around me who cleared exams like SSC CHSL or Railway NTPC right after 12th and started earning a good salary while their friends were still figuring out which college to join. The benefits of a government job — pension, medical facilities, housing allowances, and job security — are hard to match in the private sector, especially at the 12th-pass level.

This guide covers every major government job opportunity available to 12th pass candidates in 2026. Check our [government job openings](/sarkari-naukri) page for the latest notifications.

## Top Government Jobs After 12th - Complete List

Here is a comprehensive list of government jobs you can apply for with just a 12th pass certificate.

### SSC CHSL (Combined Higher Secondary Level)

SSC CHSL is one of the most popular exams for 12th pass candidates. It recruits for posts like **Lower Division Clerk (LDC)**, **Junior Secretariat Assistant (JSA)**, **Postal Assistant (PA)**, and **Data Entry Operator (DEO)** across central government offices.

| Detail | Information |
|--------|------------|
| Conducting Body | Staff Selection Commission |
| Qualification | 12th pass from recognised board |
| Age Limit | 18-27 years (General) |
| Approximate Vacancies | 3,000-5,000 per year |
| Starting Salary | Rs. 25,500 - Rs. 29,200 per month (basic) |
| Exam Pattern | Tier 1 (Online) + Tier 2 (Online) + Tier 3 (Typing Test) |

For more SSC exam details, visit the [SSC category](/category/ssc) on our portal.

### Railway NTPC (Non-Technical Popular Categories)

Railway NTPC recruits for various non-technical posts in Indian Railways. 12th pass candidates are eligible for several posts under this recruitment.

| Detail | Information |
|--------|------------|
| Conducting Body | Railway Recruitment Boards |
| Qualification | 12th pass for some posts, Graduation for others |
| Age Limit | 18-30 years (varies by post) |
| Approximate Vacancies | 25,000-35,000 per cycle |
| Starting Salary | Rs. 19,900 - Rs. 35,400 per month (basic, varies by level) |
| 12th Pass Posts | Commercial Cum Ticket Clerk, Accounts Clerk, Junior Clerk |

Check all [railway jobs](/category/railway) for current openings.

### Railway Group D

This is the entry-level railway recruitment with the **lowest qualification requirement** — you only need to be 10th pass with an ITI certificate, or simply 12th pass.

| Detail | Information |
|--------|------------|
| Qualification | 10th pass + ITI OR 12th pass |
| Age Limit | 18-33 years (General) |
| Approximate Vacancies | 50,000-1,00,000 per cycle |
| Starting Salary | Rs. 18,000 per month (basic) + allowances |
| Posts | Track Maintainer, Helper, Assistant Pointsman |

Read our detailed [Railway Group D guide](/blog/railway-group-d-2026-notification-dates-apply-online) for the complete application process.

### Indian Army (Soldier)

The Indian Army recruits soldiers through rally-based and online registration processes. This is an excellent career for physically fit young people.

| Detail | Information |
|--------|------------|
| Qualification | 10th/12th pass (varies by trade) |
| Age Limit | 17.5 - 23 years |
| Posts | Soldier General Duty, Soldier Technical, Soldier Clerk, Soldier Tradesman |
| Starting Salary | Rs. 21,700 per month (basic) + allowances |
| Selection | Written Exam + Physical Test + Medical |

For more defence opportunities, check [defence jobs](/category/defence).

### Indian Navy (Sailor and Artificer Apprentice)

The Navy recruits 12th pass candidates as Sailors and Artificer Apprentices.

| Detail | Information |
|--------|------------|
| Qualification | 12th pass with Science (Physics, Chemistry, Maths) for technical; 12th pass for non-technical |
| Age Limit | 17-20 years |
| Starting Salary | Rs. 21,700 per month (basic) + naval allowances |
| Selection | Written Exam + Physical Fitness Test + Medical |

### Indian Air Force (Airmen)

The Air Force recruits Airmen in Group X (Technical) and Group Y (Non-Technical) trades.

| Detail | Information |
|--------|------------|
| Qualification | 12th pass with Physics and Maths (Group X); 12th pass any stream (Group Y) |
| Age Limit | 17-21 years |
| Starting Salary | Rs. 21,700 per month + flying allowance + other benefits |
| Selection | Online Test + Physical Fitness Test + Medical |

### State Police Constable

Every state in India recruits police constables periodically. The qualification is usually 12th pass, and the vacancies are often in large numbers.

| Detail | Information |
|--------|------------|
| Qualification | 12th pass (10th in some states) |
| Age Limit | 18-25 or 18-28 years (varies by state) |
| Salary | Rs. 21,700 - Rs. 25,500 per month (varies by state and pay commission) |
| Selection | Written Exam + Physical Test + Medical + Document Verification |
| Major Recruiting States | UP, Bihar, Rajasthan, MP, Maharashtra, Tamil Nadu |

### India Post (Postman and Mail Guard)

India Post recruits Postman, Mail Guard, and Gramin Dak Sevak (GDS) positions for 12th and 10th pass candidates.

| Detail | Information |
|--------|------------|
| Qualification | 12th pass for Postman/Mail Guard; 10th pass for GDS |
| Age Limit | 18-27 years |
| Salary | Rs. 21,700 per month (Postman); Rs. 12,000-14,500 per month (GDS) |
| Selection | Merit-based or Exam-based depending on the recruitment |

### CRPF, BSF, CISF (Paramilitary Forces)

Central Armed Police Forces like CRPF, BSF, CISF, ITBP, and SSB recruit constables with 12th pass qualification.

| Detail | Information |
|--------|------------|
| Qualification | 12th pass (10th for some trades) |
| Age Limit | 18-23 years (General) |
| Salary | Rs. 21,700 per month (basic) + risk allowance + other benefits |
| Selection | Written Exam + Physical Efficiency Test + Physical Standard Test + Medical |

## How to Apply

The application process is similar for most government exams:

1. **Watch for notifications** — Check our [government job openings](/sarkari-naukri) page regularly or subscribe to alerts
2. **Register on the official website** — Each recruiting body has its own portal (ssc.gov.in for SSC, rrbcdg.gov.in for Railway, joinindianarmy.nic.in for Army, etc.)
3. **Fill the application form** — Enter personal details, educational qualification, and category
4. **Upload documents** — Photo, signature, and other documents as required
5. **Pay the application fee** — Through UPI, debit card, net banking, or challan
6. **Download the confirmation** — Save the application form and registration number

## Which Exam Should You Target First?

If you are confused about where to start, here is my suggestion based on practicality:

| Priority | Exam | Why |
|----------|------|-----|
| 1st | SSC CHSL | Office job with good salary, exam pattern is straightforward, annual recruitment |
| 2nd | Railway NTPC/Group D | Huge number of vacancies, lower competition per seat |
| 3rd | State Police | Large vacancies in your own state, physical fitness adds an advantage |
| 4th | Army/Navy/Air Force | Best salary and benefits but requires high physical fitness and has strict age limits |

**Important tip**: You do not have to choose just one. Apply for every exam you are eligible for. The preparation for all these exams overlaps significantly — Reasoning, Maths, English, and GK are common across most of them. Preparing for one exam automatically prepares you for others.

## Frequently Asked Questions

### What is the highest paying government job after 12th?

The highest paying government jobs after 12th are in the defence sector. Commissioned Officers in the Indian Army, Navy, and Air Force (through NDA) receive a starting salary of approximately Rs. 56,100 per month (Level 10 of 7th Pay Commission) plus allowances, which totals around Rs. 80,000 to Rs. 1,00,000 per month. Among non-defence jobs, SSC CHSL posts like Postal Assistant and Data Entry Operator offer Rs. 25,500 to Rs. 29,200 basic pay.

### Can I get a government job without appearing for any exam?

Very few government jobs are available without a written exam. Some state governments conduct direct recruitment for Group D posts (peons, sweepers, ward attendants) based on educational qualification and interview. The Indian Army also has a rally-based recruitment for soldier positions. Sports quota recruitments in various departments sometimes skip the written exam. However, for most stable government positions, an exam is required.

### What age relaxation is available for SC/ST/OBC candidates?

Age relaxation for reserved categories varies by exam but generally follows this pattern: OBC (Non-Creamy Layer) gets 3 years relaxation, SC/ST gets 5 years relaxation, and PwBD candidates get 10 years relaxation over the upper age limit. Ex-servicemen also get relaxation as per government rules. These relaxations are over and above the general category upper age limit specified for each exam.

### Should I apply for government jobs now or complete my degree first?

If you are 12th pass and meet the age criteria, start applying for 12th-pass level government jobs immediately while pursuing your degree. You can do both simultaneously since most exam preparations can be managed alongside college studies. The advantage is that if you get selected now, you have a secure job. If not, you will have exam experience that helps in graduate-level exams later. Many candidates clear exams while still in college.

### Which government exam after 12th has the most vacancies?

Railway Group D and Railway NTPC typically have the most vacancies among 12th-pass level government exams. Railway Group D alone had over 1,03,000 vacancies in its last major recruitment cycle. SSC CHSL also recruits for thousands of posts annually. State Police Constable exams in large states like UP, Bihar, and Rajasthan also release very large vacancy numbers, sometimes exceeding 50,000 posts at a time.`,
  },
  {
    slug: "how-to-download-ibps-po-admit-card-2026",
    title: "How to Download IBPS PO Admit Card 2026 - Step-by-Step Guide",
    description:
      "Complete guide to downloading your IBPS PO 2026 Prelims and Mains admit card including login steps, troubleshooting download issues, and what to carry on exam day.",
    category: "Application Help",
    author: "SarkariDarapan Team",
    publishedAt: "2026-05-10",
    updatedAt: "2026-05-25",
    tags: ["IBPS PO Admit Card", "IBPS PO 2026", "Admit Card Download", "Banking Exams", "Call Letter"],
    faqs: [
      {
        question: "When will the IBPS PO 2026 admit card be released?",
        answer:
          "The IBPS PO 2026 Prelims admit card is expected to be released about 10-15 days before the Prelims exam date, typically in September-October 2026. The Mains admit card is released about 10-15 days before the Mains exam, usually in November 2026. IBPS announces the exact date on its website. Keep checking ibps.in regularly after the application deadline closes. We will also update the dates on our portal.",
      },
      {
        question: "I forgot my IBPS registration number. How can I download my admit card?",
        answer:
          "If you forgot your registration number, go to ibps.in and look for the 'Forgot Registration Number' link on the IBPS PO login page. Enter your name, date of birth, and the email ID or mobile number you used during registration. IBPS will send your registration details to your registered email or phone. Alternatively, check the email you received when you first registered — it contains your registration number.",
      },
      {
        question: "My photo on the admit card is blurry. What should I do?",
        answer:
          "If the photo on your admit card is blurry or unclear, first try downloading the admit card again using a different browser or device. Sometimes the PDF does not render correctly. If the photo is still blurry, it was likely an issue with the photo you uploaded during application. In this case, carry two additional recent passport-size photographs to the exam centre and inform the invigilator. They will usually attach a fresh photo to your attendance sheet.",
      },
      {
        question: "Can I download the IBPS PO admit card from my mobile phone?",
        answer:
          "Yes, you can download the admit card from a mobile phone. Use any browser (Chrome or Safari work best), go to ibps.in, and follow the same login process. The admit card downloads as a PDF file. Make sure you have a PDF reader app installed. However, you will need to get a printout of the admit card before exam day since a digital copy on your phone is not accepted at the exam centre.",
      },
      {
        question: "There are wrong details on my IBPS PO admit card. What should I do?",
        answer:
          "If there are errors in your name, date of birth, photo, or category on the admit card, contact the IBPS helpdesk immediately at the email address mentioned in the notification. Also carry the original documents that show the correct information to the exam centre. Inform the invigilator about the discrepancy before the exam starts. In most cases, they will note the correction and allow you to take the exam. After the exam, follow up with IBPS to get the records corrected.",
      },
    ],
    content: `## What is the IBPS PO Admit Card?

The IBPS PO admit card, also called the **call letter**, is the most important document you need to carry on exam day. Think of it as your entry ticket to the examination centre — without it, you will not be allowed to sit for the exam, no matter how well-prepared you are.

The admit card contains your personal details, photograph, signature, exam centre address, reporting time, and important instructions for the exam day. IBPS releases separate admit cards for the Prelims and Mains exams, so you need to download it twice during the recruitment process.

I remember the first time I had to download an IBPS admit card — I was nervous and the website was slow because everyone was trying to download at the same time. This guide walks you through the exact process so you can download yours smoothly and be fully prepared for exam day.

For the complete application process, read our [IBPS PO application guide](/blog/how-to-apply-for-ibps-po-2026). For vacancy and syllabus details, check the [IBPS PO 2026 notification](/sarkari-naukri/ibps-po-2026), and stay updated with [banking updates](/category/banking).

## When is the Admit Card Released?

IBPS typically releases the admit card 10 to 15 days before the exam. Here are the expected timelines:

| Exam Stage | Expected Admit Card Release | Expected Exam Date |
|-----------|---------------------------|-------------------|
| Prelims | September 2026 | October 2026 |
| Mains | November 2026 | November-December 2026 |

**Important note**: The admit card is available for download only for a limited period — usually from the release date until 2-3 days after the exam. Do not delay downloading it.

IBPS does not send the admit card by post or email. You must download it yourself from the official website. Set a reminder for the expected release date so you do not miss it.

## Step-by-Step Download Process

Follow these steps carefully to download your IBPS PO 2026 admit card.

### Step 1: Visit the Official IBPS Website

Open your browser and go to **ibps.in**. This is the only official website for downloading the admit card. Do not use any third-party website, as they may be fraudulent or contain malware.

### Step 2: Find the Admit Card Link

On the IBPS homepage, look for the link that says something like **"Download Online Preliminary Exam Call Letter for CRP PO/MT-XVI"** (the exact wording changes each year). You may find it under the **"Click Here to Download"** section or in the **"Important Links"** area.

### Step 3: Enter Your Login Details

You will see a login form. Enter the following details:

1. **Registration Number / Roll Number** — This is the number you received when you submitted your IBPS PO application
2. **Date of Birth** — Enter in the DD/MM/YYYY format as per your application
3. **Password** — The password you created during registration

Some years, IBPS asks for your registration number and password, while other years it asks for registration number and date of birth. Keep both ready.

### Step 4: Enter the Captcha

Type the captcha code shown on the screen. If the captcha is hard to read, click the **refresh icon** next to it to get a new one.

### Step 5: Click Login and Download

After entering all details correctly, click **"Login"** or **"Submit"**. Your admit card will appear on the screen as a PDF. Click the **"Download"** or **"Print"** button to save it.

### Step 6: Take a Printout

Print the admit card on **A4 size paper**. Use a colour printer if possible, as the photo will be in colour. A black-and-white printout is also accepted but colour is preferred for clear identification.

### Step 7: Verify All Details

After printing, carefully check:
- Your **name** (matches your ID proof)
- Your **photograph** (clearly visible and recognisable)
- **Date of birth**
- **Category**
- **Exam centre address** (note the exact location and check it on a map)
- **Reporting time** and **exam time**
- **Exam date**

## What Details Are on the Admit Card?

Your IBPS PO admit card contains the following information:

- **Candidate's Name** — As entered during registration
- **Registration Number / Roll Number**
- **Candidate's Photograph** — The photo you uploaded during application
- **Candidate's Signature** — The signature you uploaded
- **Date of Birth**
- **Category** (General / OBC / SC / ST / PwBD)
- **Exam Date and Time** — The specific date and time slot for your exam
- **Exam Centre Name and Address** — The complete address of your exam venue
- **Reporting Time** — When you need to arrive (usually 1 hour before exam time)
- **Instructions** — Important rules for exam day

## Troubleshooting Common Download Problems

### Problem 1: Website is Not Loading

**Cause**: The IBPS website gets heavy traffic when admit cards are released. Millions of candidates try to download at the same time.

**Solution**:
- Try early morning (6 AM to 8 AM) or late night (after 11 PM) when traffic is lower
- Use a different browser (Chrome, Firefox, Edge)
- Clear your browser cache and cookies
- Try from a different device or internet connection
- Be patient — the website will eventually load

### Problem 2: Login Credentials Not Working

**Cause**: Wrong registration number, incorrect date of birth format, or forgotten password.

**Solution**:
- Double-check your registration number from the email or SMS you received during registration
- Make sure the date of birth format matches what the form asks for (DD/MM/YYYY or DD-MM-YYYY)
- Use the **"Forgot Password"** option to reset your password
- Use the **"Know Your Registration Number"** option if you forgot it

### Problem 3: Admit Card PDF is Blank or Corrupted

**Cause**: Poor internet connection causing incomplete download, or browser compatibility issues.

**Solution**:
- Download again with a stable internet connection
- Try a different browser
- Disable pop-up blockers and ad blockers
- If using mobile, try on a laptop or desktop instead
- Right-click the download link and select "Save As" instead of opening directly

### Problem 4: Photo or Signature Not Showing

**Cause**: The photo or signature you uploaded during application may not have been saved correctly.

**Solution**:
- Download the admit card again and check if it appears
- If the photo is genuinely missing, contact IBPS immediately at the helpdesk email
- Carry extra passport-size photographs to the exam centre as backup
- Inform the invigilator about the issue before the exam starts

## What to Carry on Exam Day

### Mandatory Items

- **Printed admit card** — The original printout, not a photocopy
- **Valid photo ID proof** (original, not photocopy) — Aadhaar Card, PAN Card, Passport, Voter ID, Driving License, or any government-issued photo ID
- **One passport-size photograph** — Same as the one on the admit card, for the attendance sheet
- **Black ballpoint pen** — For signing on the attendance sheet

### Not Allowed Inside the Exam Centre

- Mobile phones or smartphones
- Calculators
- Smart watches or digital watches with calculators
- Earphones or Bluetooth devices
- Wallets, purses, or bags (some centres provide lockers)
- Books, notes, or any study material
- Water bottles (some centres provide water)
- Food items (varies by centre)

**Pro tip**: Visit the exam centre one day before the exam to know the exact location, parking availability, and the time it takes to reach. This reduces exam day stress significantly.

## Important Reminders

1. **Download early** — Do not wait until the day before the exam. Download as soon as the admit card is released.

2. **Keep multiple copies** — Print 2-3 copies and keep one at home. Also save the PDF on your phone and email.

3. **Check the exam centre address** — Make sure you know exactly where it is. Some centres have multiple buildings or floors.

4. **Reach early** — The admit card mentions a reporting time (usually 1 hour before the exam). Reach at least 30 minutes before the reporting time to avoid any last-minute panic.

5. **Carry the right ID** — The name on your ID proof must match the name on the admit card. If there is a slight mismatch, carry an additional ID proof.

6. **Do not lose the admit card after the exam** — You will need it again for the Mains exam admit card download, interview call letter, and during document verification. Keep all admit cards safe until the final selection process is complete.

7. **Check for any corrigendum** — Sometimes IBPS releases corrections or changes to exam dates and centres after the admit card is downloaded. Keep checking the website for any updates.

## Frequently Asked Questions

### When will the IBPS PO 2026 admit card be released?

The IBPS PO 2026 Prelims admit card is expected to be released about 10-15 days before the Prelims exam date, typically in September-October 2026. The Mains admit card is released about 10-15 days before the Mains exam, usually in November 2026. IBPS announces the exact date on its website. Keep checking ibps.in regularly after the application deadline closes. We will also update the dates on our portal.

### I forgot my IBPS registration number. How can I download my admit card?

If you forgot your registration number, go to ibps.in and look for the "Forgot Registration Number" link on the IBPS PO login page. Enter your name, date of birth, and the email ID or mobile number you used during registration. IBPS will send your registration details to your registered email or phone. Alternatively, check the email you received when you first registered — it contains your registration number.

### My photo on the admit card is blurry. What should I do?

If the photo on your admit card is blurry or unclear, first try downloading the admit card again using a different browser or device. Sometimes the PDF does not render correctly. If the photo is still blurry, it was likely an issue with the photo you uploaded during application. In this case, carry two additional recent passport-size photographs to the exam centre and inform the invigilator. They will usually attach a fresh photo to your attendance sheet.

### Can I download the IBPS PO admit card from my mobile phone?

Yes, you can download the admit card from a mobile phone. Use any browser (Chrome or Safari work best), go to ibps.in, and follow the same login process. The admit card downloads as a PDF file. Make sure you have a PDF reader app installed. However, you will need to get a printout of the admit card before exam day since a digital copy on your phone is not accepted at the exam centre.

### There are wrong details on my IBPS PO admit card. What should I do?

If there are errors in your name, date of birth, photo, or category on the admit card, contact the IBPS helpdesk immediately at the email address mentioned in the notification. Also carry the original documents that show the correct information to the exam centre. Inform the invigilator about the discrepancy before the exam starts. In most cases, they will note the correction and allow you to take the exam. After the exam, follow up with IBPS to get the records corrected.`,
  },

];

// =============================================================================
// Helper Functions
// =============================================================================

export function getAllGuides(): Guide[] {
  return guides;
}

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((guide) => guide.slug === slug);
}

export function getRelatedGuidesForJob(category: string): Guide[] {
  const cat = category.toLowerCase();
  return guides
    .filter((guide) =>
      guide.tags.some((tag) => tag.toLowerCase().includes(cat))
    )
    .slice(0, 3);
}
