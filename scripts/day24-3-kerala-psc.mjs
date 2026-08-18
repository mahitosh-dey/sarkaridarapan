// Kerala PSC 2026 — thin-page fix + placeholder deadline removed + reframed
//
// Verified 2026-08-18.
//
// DEFECT
//   last_date  2026-12-31  A placeholder. important_dates held all nulls, so
//              nothing backed it, and the page rendered as an "open" recruitment
//              with a 31 December deadline that does not exist.
//   vacancies  null        Correct already, left as null.
//
// THE DEEPER PROBLEM: Kerala PSC does not run a single annual recruitment with
// one deadline. It publishes rolling notifications continuously, each with its
// own closing date, all applied to through one OTR account on the Thulasi
// portal. A page titled "Kerala PSC Recruitment 2026" with a single last_date
// was mismodelling how the Commission actually works. Reframed as an evergreen
// guide to the OTR and Thulasi system, which is what candidates searching this
// actually need.
//
// FACTS VERIFIED (corroborated across Prepp, Adda247, Entri, CollegeDisha on
// 2026-08-18):
//   - Applications run entirely online through the Thulasi portal at
//     keralapsc.gov.in
//   - One Time Registration creates a single login used for every notification,
//     admit cards and results
//   - Notifications are published on a rolling basis, each with its own deadline
//   - OTR photo rule: a photo uploaded before 2016 must be replaced with one
//     showing name and date written at the bottom, and the "Apply Now" button
//     stays DISABLED until it is updated
//
// NOT ASSERTED: any single closing date, any vacancy total, or the schedule of
// future notifications. Individual notification deadlines are specific to each
// notification and are not generalised here.

import { replaceJob } from "./lib/replace-job.mjs";

const title = "Kerala PSC 2026: Thulasi Login, OTR, How to Apply Guide";

const description =
  "Kerala PSC runs rolling notifications, not one annual exam. Learn One Time Registration, the Thulasi portal, the 2016 photo rule and how to apply online.";

const content = `Kerala Public Service Commission does not run a single annual recruitment with one deadline. It publishes notifications continuously through the year, each with its own closing date, and every one of them is applied to through a single account on the Thulasi portal.

That structure is the reason a page promising one Kerala PSC deadline is misleading, and it is why this page explains the system instead. Once your One Time Registration is set up correctly, applying to any notification takes minutes. Getting it wrong blocks you from applying at all.

## How the Kerala PSC system actually works

| Element | What it is |
|---|---|
| Thulasi | The Commission's candidate portal at keralapsc.gov.in |
| One Time Registration | A single profile used for every notification you apply to |
| Notifications | Published on a rolling basis, each with its own deadline |
| My Profile | Your dashboard for applications, admit cards and results |

You register once. After that, applying to a notification means logging in, finding it, confirming your details and submitting. You do not re-enter your personal and educational details each time, which is the entire point of the design.

The consequence is that your OTR profile is the thing that matters. If it is accurate and current, you can apply to anything you are eligible for the moment it appears. If it is incomplete or outdated, you discover that at the worst possible time, usually on the closing day of a notification you wanted.

## The photo rule that silently blocks applications

This is the single most useful thing to know about Kerala PSC, and it catches candidates every year.

If the photograph in your OTR profile was uploaded before 2016, you must replace it. The replacement has to show your name and the date written at the bottom of the photograph itself, not added digitally afterwards in most readings of the rule.

Until you do this, the Apply Now button stays disabled. It does not show an error explaining why. It simply does not work, and candidates spend hours assuming the site is broken or that they are ineligible.

If you registered years ago and have not applied recently, check this before a notification you care about opens rather than during it. Updating the photo is straightforward. Discovering the requirement at 4pm on a closing day is not.

While you are in there, verify the rest of the profile at the same time: name spelling against your certificates, date of birth, community, qualifications and contact details. A mismatch between your profile and your documents surfaces at verification, long after you could have fixed it cheaply.

## Setting up One Time Registration

Go to keralapsc.gov.in and select One Time Registration, then Sign Up.

You provide basic identifying details first: name, gender, date of birth, mobile number, email address and community. These generate your registration number, which becomes your identity with the Commission across every application you ever make.

Enter your name exactly as it appears on your certificates. Not a shortened version, not a common spelling variant. This is checked at document verification, and a mismatch is a genuine problem rather than a formality.

You then upload a photograph and signature meeting the specified format and dimensions, and complete the educational and personal detail sections.

Keep the registration number and password somewhere durable. This is not a per-recruitment login that you can afford to lose and recreate. It is a permanent identity, it holds your application history, and recovering access to it is more troublesome than storing it properly.

## Finding and applying to notifications

Notifications appear on the Commission's website and in the Gazette. Because they are rolling rather than scheduled together, the practical approach is to check on a fixed routine rather than waiting to hear about one.

Read the notification itself rather than a summary. Kerala PSC notifications specify the post, the department, the scale of pay, the qualifications, the age limits, the method of appointment and the mode of selection, and those vary considerably between posts. Two notifications published the same week can have entirely different eligibility.

Pay particular attention to the qualification wording. Kerala PSC defines eligibility by named qualifications, and an equivalent-sounding degree is not automatically accepted. Where your qualification is not the exact one named, equivalence has to be established, and that is a process rather than an assumption you can make on the application form.

Age limits vary by post and category, with relaxation under Kerala rules. Check the limit for the specific notification rather than carrying an assumption from a previous one.

Submit before the closing date rather than on it. The portal slows near deadlines, as every recruitment portal does.

## How selection works

The selection method varies by post and is stated in each notification. Broadly, Kerala PSC uses written examinations, and for some posts adds practical tests, physical standards or interviews.

For most posts the process runs: an objective written test, then a shortlist, then document verification, and finally inclusion in a ranked list.

The ranked list is the part that distinguishes Kerala PSC from many other recruiting bodies, and it deserves explanation because it shapes the whole experience of applying.

## The ranked list, and what it means to be on one

Kerala PSC publishes ranked lists of qualified candidates for each post. Appointments are then made from that list as vacancies arise, in rank order, over the life of the list.

Being placed on a list is not the same as being appointed. It means you are eligible for appointment when a vacancy reaches your rank. Whether that happens depends on how many vacancies arise while the list is live and where you sit in the order.

Lists have a defined validity period. When it expires, a new examination and a new list replace it, and candidates who were never reached do not carry over.

Two practical implications follow. Your rank matters enormously, far more than simply clearing the examination, because the difference between rank 50 and rank 500 is often the difference between an appointment and an expired list. And you should keep applying to other notifications while on a list, because waiting passively for a call that may not come is how candidates lose years.

Candidates sometimes describe this as being appointed already. They are not. They are in a queue whose length they can see and whose speed they cannot control.

## What Kerala PSC recruits for

The Commission recruits across essentially the whole of Kerala's state government and its public sector, which is why the notification stream is continuous rather than annual.

That covers administrative posts from clerical grades upward, technical and engineering positions across departments, teaching posts, medical and paramedical roles, police and uniformed services, and specialist positions in individual departments and public sector undertakings.

At the top of the structure is the Kerala Administrative Service, the state's senior civil service, recruited through its own examination with its own eligibility and a considerably narrower field than the general notifications.

For a candidate, this breadth means eligibility is worth checking often. A graduate with a particular technical qualification may be eligible for notifications that appear rarely and close quickly, and the only way to catch them is to be watching.

## Preparing when notifications are continuous

The rolling model changes how preparation should work compared with a single annual examination.

Build the common foundation rather than preparing for one notification. Kerala PSC written tests draw heavily on general knowledge, Kerala-specific history, geography, culture and current affairs, general science, mental ability and language. That core serves most notifications you will apply to.

Kerala-specific material deserves particular weight, for the same reason state material matters in every state commission examination: it is where candidate performance actually varies, and national compilations do not cover it.

Keep current affairs running continuously, with Kerala-level developments noted separately from national ones.

Because notifications appear with limited notice, a candidate who has been preparing steadily can apply and sit an examination that a candidate starting from cold cannot. The rolling model rewards readiness rather than intensity.

Work previous question papers for the post types you are targeting. Kerala PSC question patterns are stable enough that past papers are a strong guide to level and phrasing.

## Document verification, and preparing for it early

Document verification sits late in the process and is decided by choices you made at registration, which is why it is worth thinking about now rather than when the call comes.

The Commission checks that the person appearing matches the profile that applied. That means your name, date of birth, community, qualifications and any claimed relaxation all have to be supported by original documents that agree with what your OTR profile says.

The failures are almost always administrative rather than substantive. A name spelled one way on a degree certificate and another way in the profile. A date of birth taken from a different document. A community certificate in an outdated format or issued too long ago to be accepted. A qualification entered as equivalent to the one named in the notification without equivalence having been established.

None of those reflect on whether you can do the job, and all of them can end a candidature.

Assemble the set once and keep it current: matriculation certificate for date of birth, degree and mark sheets, community certificate in the prescribed format with a valid issue date, identity proof, and any document supporting a claimed relaxation. Check each against your OTR profile line by line.

Doing this once, early, covers every notification you apply to afterwards. That is the advantage of a single registration model, and most candidates never take it.

## Kerala-specific preparation in practice

Since the state portion is where candidates actually separate, it is worth being concrete about what it covers.

Kerala history spans the early kingdoms, the colonial period, the social reform movements that shaped the modern state, the formation of Kerala in 1956, and post-independence political and social development. The reform movement material in particular appears regularly and rewards proper reading rather than a skim of a compilation.

Geography covers the state's physical divisions from coast to Western Ghats, the river systems, climate and monsoon pattern, agriculture and plantation crops, fisheries, and the district structure.

Culture covers art forms, festivals, literature and the figures associated with them, which is material national compilations do not touch at the level required.

Renaissance figures and social reformers form their own recurring area and are worth treating as a distinct topic rather than folding into general history.

Current affairs at state level covers Kerala government schemes, budget announcements, appointments, and developments across districts. These change constantly, which is why they belong in a daily routine rather than a one-time reading.

State government publications and standard Kerala-focused texts are the base material. Coaching compilations are for revision, not foundation, because errors propagate between them.

## Why readiness beats intensity in a rolling system

The structural difference between Kerala PSC and an annual examination is worth drawing out, because it should change how you organise your year.

With an annual examination you can plan backwards from a known date, build intensity toward it, and recover afterwards. That rhythm does not work here. Notifications appear with limited notice, close within weeks, and are followed by examinations scheduled at the Commission's convenience.

What that rewards is a steady baseline maintained continuously rather than peaks. A candidate who has kept general knowledge, Kerala material and current affairs ticking over can apply to a notification the week it appears and sit the examination competently. A candidate who prepares in bursts will repeatedly find notifications arriving during a trough.

It also rewards breadth of eligibility. The more post types you qualify for, the more notifications are available to you, and additional qualifications that widen eligibility can be worth more than marginal improvement in examination performance.

Finally, it rewards persistence across years rather than a single decisive attempt. Candidates who succeed with Kerala PSC typically apply to many notifications over a long period, accumulate places on several lists, and are eventually reached on one. Treating any single notification as the attempt that decides everything misreads the system.

## Common mistakes

Assuming there is one Kerala PSC deadline. There is not. Each notification has its own, and a page or person quoting a single date for Kerala PSC recruitment is describing something that does not exist.

Leaving an outdated OTR photograph in place. If it predates 2016 the Apply Now button stays disabled with no explanation, and candidates lose notifications to this.

Registering with a name that does not match certificates. This surfaces at verification when it is expensive rather than at registration when it is trivial.

Assuming an equivalent qualification will be accepted. Kerala PSC names qualifications specifically, and equivalence must be established rather than assumed.

Treating a place on a ranked list as an appointment. It is a position in a queue against vacancies that may or may not arise before the list expires.

Stopping applications after making one list. Keep applying, because a list you are low on may never reach you.

## Frequently asked questions

**What is the last date for Kerala PSC recruitment 2026?**

There is no single date. Kerala PSC publishes notifications on a rolling basis through the year and each carries its own closing date. Check the specific notification you intend to apply to. Any source quoting one deadline for Kerala PSC recruitment as a whole is describing something that does not exist.

**What is Thulasi?**

Thulasi is the Commission's candidate portal at keralapsc.gov.in. After completing One Time Registration you use a single login to apply to notifications, access My Profile, download admit cards and check results.

**Why is the Apply Now button disabled on my Kerala PSC account?**

The most common cause is an outdated profile photograph. If your photo was uploaded before 2016 you must replace it with one showing your name and the date written at the bottom, and the button remains disabled until you do. The portal does not explain this, which is why candidates assume the site is broken.

**What is One Time Registration?**

A single profile you create once and then use for every Kerala PSC notification, rather than re-entering personal and educational details for each application. It generates a registration number that becomes your permanent identity with the Commission.

**Does being on a Kerala PSC rank list mean I have a job?**

No. A ranked list makes you eligible for appointment as vacancies arise, in rank order, over the list's validity period. Whether you are appointed depends on how many vacancies occur and where you sit in the order. Lists expire, and candidates who were never reached do not carry over, so continue applying to other notifications.

**How long is a Kerala PSC rank list valid?**

Each list has a defined validity period stated by the Commission, after which a fresh examination and list replace it. Because of that, your rank matters far more than simply qualifying: the gap between a high rank and a low one is often the difference between an appointment and an expired list.

**What qualifications does Kerala PSC accept?**

Each notification names the qualifications it accepts specifically. An equivalent-sounding degree is not automatically accepted, and where your qualification is not the one named, equivalence has to be formally established rather than assumed on the form. Read the notification rather than a summary.

**What is the Kerala Administrative Service?**

The state's senior civil service, at the top of the structure Kerala PSC recruits for. It is conducted as its own examination with its own eligibility and a considerably narrower field than the general notifications.

**What should I prepare for Kerala PSC exams?**

A common foundation serves most notifications: general knowledge, Kerala-specific history, geography, culture and current affairs, general science, mental ability and language. Kerala-specific material deserves particular weight because it is where candidate performance varies and national compilations do not cover it.

**How do I keep track of new notifications?**

Check the Commission's website on a fixed routine rather than waiting to be told. Notifications appear on a rolling basis with limited notice, and the model rewards candidates who are already prepared and watching over those who react after hearing about one.

**Can candidates from outside Kerala apply?**

Eligibility conditions including any residence or language requirements are set out in each notification. Some posts require knowledge of Malayalam, consistent with administration being conducted in the state language, and reservation benefits under Kerala rules generally apply to candidates who qualify under those rules. Check the specific notification against your own position rather than assuming a general answer.

**Do I need to pay a fee for each application?**

Fee provisions are stated in each notification, and Kerala PSC's arrangements differ from commissions that charge per application as a matter of course. Read the notification for the post you are applying to rather than assuming from another recruiting body's practice.

**How many notifications can I apply to?**

There is no cap imposed by the registration system. You may apply to every notification you are eligible for, and given the ranked-list model that is the sensible strategy: accumulating places on several lists materially improves the chance that one of them reaches you before it expires.

**What happens if my rank list expires without an appointment?**

The list lapses and a fresh examination and list replace it. Candidates who were not reached do not carry over and must compete again in the new cycle. This is the strongest argument for continuing to apply to other notifications rather than waiting on a single list.

## Official sources

- Kerala Public Service Commission: https://www.keralapsc.gov.in
- The Thulasi candidate portal, reached from the same site, for One Time Registration, applications, admit cards and results
- The individual notification for any post you intend to apply to, which is the authority on its qualifications, age limits, closing date and selection method

Where anything on this page conflicts with a specific notification, the notification is correct.`;

const fields = {
  vacancies: null,
  last_date: null,
  post_name:
    "Posts across Kerala state government departments and public sector undertakings, recruited through rolling notifications rather than a single annual examination. The range covers administrative posts from clerical grades upward, technical and engineering positions, teaching posts, medical and paramedical roles, police and uniformed services, and specialist departmental positions. The Kerala Administrative Service sits at the top of the structure and is recruited through its own examination.",
  eligibility: {
    education:
      "Varies by notification. Kerala PSC names accepted qualifications SPECIFICALLY in each notification, and an equivalent-sounding degree is not automatically accepted: where your qualification is not the one named, equivalence must be formally established rather than assumed on the application form. Read the individual notification rather than a summary, since two notifications published in the same week can carry entirely different eligibility.",
    age: "Varies by post and category, with relaxation under Kerala rules. Check the limit stated in the specific notification rather than carrying an assumption from a previous one.",
  },
  important_dates: {
    note: "Kerala PSC does NOT run a single annual recruitment with one deadline. It publishes notifications on a rolling basis through the year, each carrying its own closing date, all applied to through one One Time Registration account on the Thulasi portal at keralapsc.gov.in. Any single date quoted for 'Kerala PSC recruitment' as a whole is meaningless. Check the specific notification you intend to apply to.",
  },
  how_to_apply:
    "Applications run entirely online through the Thulasi portal at keralapsc.gov.in. Complete One Time Registration once: select One Time Registration then Sign Up, provide name, gender, date of birth, mobile number, email and community to generate your registration number, then upload a photograph and signature in the specified format and complete the educational and personal sections. Enter your name EXACTLY as it appears on your certificates, since a mismatch surfaces at document verification. CRITICAL: if your OTR photograph was uploaded before 2016 you must replace it with one showing your name and the date written at the bottom. Until you do, the Apply Now button stays DISABLED with no explanation, and candidates routinely lose notifications to this. After registration, applying to a notification means logging in, finding it, confirming details and submitting. Keep the registration number and password durable: this is a permanent identity holding your application history, not a per-recruitment login.",
  selection_process:
    "Varies by post and is stated in each notification. Broadly Kerala PSC uses written examinations, adding practical tests, physical standards or interviews for some posts. For most posts the sequence is an objective written test, a shortlist, document verification, and inclusion in a RANKED LIST.\n\n**The ranked list is what distinguishes Kerala PSC from most recruiting bodies.** The Commission publishes ranked lists of qualified candidates for each post, and appointments are then made from that list as vacancies arise, in rank order, over the life of the list.\n\nBeing placed on a list is NOT the same as being appointed. It means you are eligible for appointment when a vacancy reaches your rank, which depends on how many vacancies arise while the list is live and where you sit in the order. Lists have a defined validity period, and when it expires a new examination and list replace it: candidates never reached do not carry over.\n\nTwo consequences follow. Your RANK matters far more than simply clearing the examination, because the difference between a high rank and a low one is often the difference between an appointment and an expired list. And you should keep applying to other notifications while on a list, since waiting passively for a call that may never come is how candidates lose years.",
  reading_time: "11 min read",
};

await replaceJob({ slug: "kerala-psc-recruitment-2026", title, description, content, fields });
