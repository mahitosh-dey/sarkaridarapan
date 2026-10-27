# Monetisation: step by step

What to do, in order, to earn money from the Bing traffic this site already has.

## Status at 27 October 2026

| Phase | State | Owner |
|---|---|---|
| 0. Clean up existing setup | **Done** | Claude |
| 1. Apply to networks | **Cuelinks verified 27 Oct**, script installed | Done |
| 2. Code | **Partly done**, 1 of 3 | Claude |
| 3. Place the links | **Next, and the only step that earns anything** | Claude |
| 4. Measure | Blocked on Phase 3 | You |

Nothing earns money until Phase 1 happens, and Phase 1 is yours. Phases 2.2 and 2.3 are
deliberately left until a network approves you, because the ad slot has to be built for
whichever one it is.

## The numbers this plan is built on

Bing Webmaster Tools, 24 October 2026:

| Window | Clicks | Impressions | CTR |
|---|---|---|---|
| 3 months | 649 | 57,200 | 1.13% |
| 30 days | 164 | 13,100 | 1.26% |
| 7 days | 28 | 1,700 | 1.68% |

About 5 clicks a day, roughly 165 a month. Google sends almost nothing: one indexed page
as of 23 October.

At that volume display ads earn roughly **Rs 10 to 50 a month**. Affiliate links on the
same traffic earn roughly **Rs 170 to 340 a month**, because exam aspirants searching
"ssc chsl 2026 exam date" convert to test-prep signups in a way they do not convert to
banner clicks.

So the order below is affiliate first, display second. Display is the floor, not the plan.

---

## Phase 0: clean up what is already there  [DONE 2026-10-27]

Two things are wrong in the current setup and both should go before anything new is added.

### 0.1 The AdSense script runs on every page and does nothing  [DONE]

`app/layout.tsx` loads `AdSenseScript` on every page. AdSense was rejected in July 2026,
so the script loads, finds no approved account, and renders nothing. It costs a request on
every page view and declares an unapproved AdSense account to anyone reading the source.

**Done.** Removed from `app/layout.tsx` on 27 October 2026. Verified in the build: the homepage now carries zero `googlesyndication` script tags, down from one on every page. Restore the `<AdSenseScript />` line and its import if AdSense is ever approved.

### 0.2 The fake publisher ID was in the ad components, not ads.txt  [DONE]

The project notes warn that `public/ads.txt` contains a placeholder,
`pub-XXXXXXXXXXXXXXXX`, and must be updated after AdSense approval. It does not. It
contains a real publisher ID:

```
google.com, pub-1237254119179544, DIRECT, f08c47fec0942fa0
```

That ID was issued at application. It does not mean the account is approved.

**Done, and the warning turned out to be half right.** After correcting CLAUDE.md to say
ads.txt was fine, the `pub-XXXXXXXXXXXXXXXX` placeholder turned up after all, in
`components/ads/AdBanner.tsx` and `components/ads/InArticleAd.tsx`, as the fallback when
`NEXT_PUBLIC_ADSENSE_PUBLISHER_ID` is unset. So the original warning named the right string
and the wrong file. Both components were emitting `<ins>` tags carrying that fake ID on
every page; they now return null until a real publisher ID is configured. CLAUDE.md records
both facts.

---

## Phase 1: apply, in this order  [NOT STARTED, this one is yours]

These are your steps, not Claude's. Each takes under an hour.

### Step 1: Cuelinks  [DONE] registered and verified 27 Oct

The single application that unlocks the most. Cuelinks is an Indian affiliate aggregator:
one approval gives you Testbook and other edtech advertisers, and it pays in rupees to an
Indian bank account.

1. Go to **cuelinks.com** and choose Publisher signup
2. Enter the site as `https://www.sarkaridarapan.com`
3. Category: Education
4. Traffic: be honest, around 165 visits a month from Bing. Understating or inflating it
   both end badly at payout
5. Add PAN and bank details for payout

**Registered 27 October 2026.** Publisher ID 282260, Bronze Publisher, status Active. The dashboard is branded Parity Cube Private Limited, which is Cuelinks' parent company, so a Parity Cube login is a Cuelinks login.

Site ownership is verified with a meta tag. The tag `cuelinks-verification` / `VERIFY-CL-1A5ECC46` is in `app/layout.tsx`, so it renders in the head of every page. Verification can only succeed after that is deployed to production.

Expect a review of a few working days. Approval is not guaranteed at this traffic level.
If they decline, ask what traffic they want and reapply later rather than arguing.

### Step 2: INRDeals as a backup  [ ] not started

Same model, different advertiser mix. Apply at **inrdeals.com** only if Cuelinks declines,
or alongside it if you want to compare the Testbook rate. Do not place both networks' links
on the same page.

### Step 3: Adsterra for display  [ ] not started

Only after Step 1 is settled, because display is the smaller number.

1. Sign up at **adsterra.com** as a Publisher
2. Add the domain and wait for review, usually under 48 hours
3. Create **Banner and Native ad units only**

Do not create Popunder or Social Bar units. They pay more and they make the site worse to
use, and this site already carries a "low value content" judgement from Google. Intrusive
formats make that harder to reverse, not easier.

### What to expect on payout

| Network | Threshold | Method |
|---|---|---|
| Cuelinks | Low, paid in INR | Indian bank transfer |
| Adsterra | $5 Paxum, **$25 PayPal**, **$25 local bank plus $7 fee**, $1,000 wire | |

The $5 Adsterra figure quoted everywhere is Paxum only, and Paxum is hard to open from
India. Plan on **$25**, and note the $7 fee takes most of a first payout. At current
traffic a $25 display payout is years away. The affiliate route reaches a payout far
sooner, which is the main reason it comes first.

---

## Phase 2: the code  [1 of 3 DONE]

Claude's steps. Done once, works for whichever network approves you.

### 2.1 Affiliate link component  [DONE]

**Done.** `components/AffiliateLink.tsx`, built 27 October 2026. Two exports:
`AffiliateLink` for a link inside a sentence, and `AffiliateCard` for a block
recommendation at the end of a section. Both emit `rel="sponsored nofollow noopener"` and
`target="_blank"`, and `AffiliateLink` shows a visible "(ad)" tag by default.

Routing every affiliate link through one component means the rel attribute cannot be
forgotten on an individual link. Undisclosed affiliate links breach both Google's link spam
policy and the networks' own terms, and this site cannot afford another quality judgement
against it.

### 2.2 A network-agnostic ad slot  [ ] waiting on Phase 1

Not built yet, on purpose. The existing `AdBanner` is hardcoded to AdSense
(`window.adsbygoogle`) and now renders nothing. Replacing it needs the approved network's
actual embed code, so this waits until Step 3 returns an answer. Building it before then
means guessing at an API and rewriting it.

### 2.3 Visible disclosure  [ ] waiting on Phase 1

Not added yet. An affiliate disclosure line belongs in the footer and on any page carrying
affiliate links, required by the networks and by Indian consumer protection guidance on
endorsements. It goes in at the same time as the first real link, so the site never claims
a commercial relationship it does not have.

---


### What the Cuelinks script does and does not do

Installed 27 October 2026, channel 332035, in `app/layout.tsx`.

Cuelinks is a link converter: it rewrites outbound links to merchant sites into affiliate
links at page load. It does not create links, and it cannot monetise a link to a site that
runs no affiliate programme.

A count of every outbound link on this site on 27 October:

| | |
|---|---|
| Distinct outbound domains | 342 |
| Government and academic | 1,936 of 2,113, or 91% |

The most linked destinations are up.gov.in, upsc.gov.in, ssc.gov.in, pib.gov.in and
pmkisan.gov.in. None pays affiliate commission, and none ever will. So the script currently
converts nothing and earns nothing, which is working as designed rather than broken.

It earns only once merchant links exist on pages where they make sense, which is Phase 3.

#### Why the first install failed their checker

Cuelinks' Check Installation reported "Channel Id Incorrect in the Javascript" on
27 October, while the channel ID in the code was correct.

The script was loaded with `next/script` at `strategy="afterInteractive"`. Next.js hands
that code to React to inject after hydration, so the server-rendered HTML carries it only
as an escaped string inside the Flight payload: `\\"children\\":\\"var cId = \\\\\\"332035\\\\\\"`.
A browser runs it correctly. Cuelinks' checker fetches the HTML without executing
JavaScript, finds no literal snippet, and reports the channel ID as wrong.

Fixed by rendering a plain `<script>` tag instead, byte-identical to the snippet Cuelinks
issues. The same reasoning applies to any third-party verification checker: if a network
has to see the code in the HTML, `next/script` with afterInteractive will hide it.

## Phase 3: where the links go  [NEXT] nothing earns until this happens

Not sitewide banners. Links on the pages that already receive Bing clicks, placed where a
reader is already looking for exam preparation.

The pages worth placing on, by Bing impressions over three months:

| Page | Impressions | Current clicks |
|---|---|---|
| SSC CHSL cluster | ~953 | 14 |
| NSP scholarship cluster | ~1,361 | 1 |
| MKSY / Kanya Sumangala | ~832 | 1 |
| PM Surya Ghar | ~485 | 1 |
| Namo Shetkari | 80 | 9 |

Note the difference between the first and last rows. Namo Shetkari gets 80 impressions and
9 clicks because it ranks at position 3.2. The NSP cluster gets 1,361 impressions and 1
click because it ranks at position 8. Placement matters less than position.

Scholarship and scheme pages are a poor fit for test-prep affiliate links: someone checking
an NSP deadline is not shopping for a coaching subscription. Put affiliate links on the
**exam** pages, and display ads on the scheme pages.

---

## Phase 4: measuring whether it worked  [ ] blocked on Phase 3

Check after 30 days, not sooner. Two numbers:

**Affiliate.** Clicks and conversions in the Cuelinks dashboard. If clicks are happening
and conversions are not, the placement is wrong or the audience is not buying. If clicks
are not happening, the links are in the wrong place on the page.

**Display.** RPM in the Adsterra dashboard. This gives you a real number for what your
traffic is worth per thousand views, which is worth knowing even if the sum is small.

Then the honest question: at 165 visits a month, both numbers will be small whatever you
do. The multiplier is traffic, not monetisation. Four keyword clusters hold about 3,800
Bing impressions and return 17 clicks between them, because the site sits at position 8
where nothing gets clicked. Moving those to position 3 is worth more than any ad network
decision on this page.
