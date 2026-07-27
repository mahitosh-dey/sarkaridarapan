// Day 8 (Mon 2026-07-27) — SAFE FIX of the live TN free-LPG scheme page.
// Owner directive (2026-07-27): no fabricated data; fix existing DB pages the safe way.
// The prior live content asserted an unverifiable 2026 election outcome (who is CM) plus
// fabricated operational detail (free connection + stove + 2 cylinders, live tnpds application,
// auto-credit DBT) and an internal 6-vs-16 cylinder contradiction. This rewrite keeps ONLY
// verifiable facts, frames the scheme as an announced election promise with unconfirmed rollout,
// asserts no election result, and anchors on the live central PMUY. Not padded to 3000w on
// purpose (doubtful topic) — minWords relaxed. Humanizer preflight (dashes/quotes/banned/lengths)
// still enforced.
import { replaceScheme } from "./lib/replace-scheme.mjs";

const title = "Tamil Nadu Free LPG Cylinder Scheme 2026: Status Update";

const description =
  "The Tamil Nadu free LPG cylinder scheme was a 2026 election promise. As of July 2026 no official rollout is confirmed. Here is the verified current status.";

const content = `## Current status: announced, not yet officially notified

A promise of free LPG cylinders for Tamil Nadu families was made ahead of the 2026 Tamil Nadu Assembly election. As of 27 July 2026, no order or application process for such a scheme has been notified by the Tamil Nadu Civil Supplies and Consumer Protection Department, so its eligibility, benefit terms, and rollout date are not confirmed.

This page states only what can be verified today. Several websites carry firm-looking details such as an online application, a free connection with a stove and two cylinders, or an automatic subsidy credit. None of these traces to an official Tamil Nadu government order, so treat them as unconfirmed. This page will be updated when the government issues a formal notification.

## What was actually promised

As reported in coverage of the 2026 election manifesto, the promise was six free LPG cylinders per year for families, framed as a cost-of-living measure. That headline figure is the extent of what was publicly announced. The working details that a real scheme needs, meaning who qualifies, how to apply, and how the money reaches the beneficiary, were not part of a government order at the time of writing. Until the Civil Supplies Department publishes those rules, no one can say for certain how the benefit will be delivered or who will receive it.

## What is actually live today: PMUY

The verifiable LPG benefit available to eligible Tamil Nadu households right now is the central Pradhan Mantri Ujjwala Yojana (PMUY). PMUY provides a deposit-free LPG connection to women in eligible poor households, along with support for the first refill and a stove, and a targeted subsidy of Rs 300 per 14.2 kg cylinder credited to the beneficiary's bank account by direct benefit transfer, per the Ministry of Petroleum and Natural Gas. If you are looking for a free or subsidised LPG connection in Tamil Nadu today, PMUY is the scheme that is actually operating.

For price context, a domestic 14.2 kg LPG cylinder in Chennai costs about Rs 957.50 as of July 2026, per Goodreturns. The PMUY subsidy of Rs 300 per cylinder is credited after each refill for eligible beneficiaries, which is separate from any state scheme.

## How LPG subsidy usually reaches a household

Across LPG subsidy schemes, the benefit generally depends on three things being in order: a valid ration card, an Aadhaar-linked bank account for direct benefit transfer, and an active domestic LPG connection. When a state scheme is notified, it typically works through this same plumbing. That is why keeping your ration card active and your Aadhaar seeded to your bank account is useful groundwork, regardless of which scheme finally applies.

## How to check the real status

Follow the primary sources rather than aggregator pages. Any official Tamil Nadu LPG scheme will be notified by the Tamil Nadu Civil Supplies and Consumer Protection Department and published in the state gazette, with details on the Tamil Nadu Public Distribution System portal at tnpds.gov.in. For PMUY, the source is the official Ujjwala Yojana portal and your LPG distributor. If a claim about a state free-cylinder scheme does not appear on one of these, treat it as unconfirmed.

## Frequently asked questions

### Is the Tamil Nadu free LPG cylinder scheme live?
As of July 2026 it is an announced election promise, not a confirmed scheme. No official Tamil Nadu Civil Supplies and Consumer Protection Department order or application process for it has been notified, so its terms and rollout are unconfirmed.

### Is it a free connection or free refills?
The reported promise was free cylinders, meaning refills, rather than a free connection. The benefit that provides a free LPG connection in Tamil Nadu is the central Pradhan Mantri Ujjwala Yojana (PMUY), not a state connection scheme.

### How can I get a free or subsidised LPG connection in Tamil Nadu now?
Through the central PMUY (Ujjwala Yojana), if you are eligible. It provides a deposit-free connection to women in eligible poor households, with first-refill and stove support and a Rs 300 per cylinder subsidy by direct benefit transfer.

### Where will an official Tamil Nadu LPG scheme be announced?
Any official scheme will be notified by the Tamil Nadu Civil Supplies and Consumer Protection Department, published in the state gazette, and reflected on tnpds.gov.in. Details circulating on other sites should be treated as unconfirmed until they appear there.`;

const faqs = [
  {
    question: "Is the Tamil Nadu free LPG cylinder scheme live?",
    answer:
      "As of July 2026 it is an announced election promise, not a confirmed scheme. No official Tamil Nadu Civil Supplies and Consumer Protection Department order or application process for it has been notified, so its terms and rollout are unconfirmed.",
  },
  {
    question: "Is it a free connection or free refills?",
    answer:
      "The reported promise was free cylinders, meaning refills, rather than a free connection. The benefit that provides a free LPG connection in Tamil Nadu is the central Pradhan Mantri Ujjwala Yojana (PMUY), not a state connection scheme.",
  },
  {
    question: "How can I get a free or subsidised LPG connection in Tamil Nadu now?",
    answer:
      "Through the central PMUY (Ujjwala Yojana), if you are eligible. It provides a deposit-free connection to women in eligible poor households, with first-refill and stove support and a Rs 300 per cylinder subsidy by direct benefit transfer.",
  },
  {
    question: "Where will an official Tamil Nadu LPG scheme be announced?",
    answer:
      "Any official scheme will be notified by the Tamil Nadu Civil Supplies and Consumer Protection Department, published in the state gazette, and reflected on tnpds.gov.in. Details circulating on other sites should be treated as unconfirmed until they appear there.",
  },
];

await replaceScheme({
  slug: "chief-ministers-free-lpg-connection-scheme-tamil-nadu-2026",
  title,
  description,
  content,
  faqs,
  minWords: 600,
});
