# Monetisation: step by step

What to do, in order, to earn money from the Bing traffic this site already has.

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

## Phase 0: clean up what is already there

Two things are wrong in the current setup and both should go before anything new is added.

### 0.1 The AdSense script runs on every page and does nothing

`app/layout.tsx` loads `AdSenseScript` on every page. AdSense was rejected in July 2026,
so the script loads, finds no approved account, and renders nothing. It costs a request on
every page view and declares an unapproved AdSense account to anyone reading the source.

Claude removes this. It can be restored in one line if AdSense is ever approved.

### 0.2 CLAUDE.md is wrong about ads.txt

The project notes warn that `public/ads.txt` contains a placeholder,
`pub-XXXXXXXXXXXXXXXX`, and must be updated after AdSense approval. It does not. It
contains a real publisher ID:

```
google.com, pub-1237254119179544, DIRECT, f08c47fec0942fa0
```

That ID was issued at application. It does not mean the account is approved. The warning in
CLAUDE.md has been corrected so nobody acts on it again.

---

## Phase 1: apply, in this order

These are your steps, not Claude's. Each takes under an hour.

### Step 1: Cuelinks (do this first)

The single application that unlocks the most. Cuelinks is an Indian affiliate aggregator:
one approval gives you Testbook and other edtech advertisers, and it pays in rupees to an
Indian bank account.

1. Go to **cuelinks.com** and choose Publisher signup
2. Enter the site as `https://www.sarkaridarapan.com`
3. Category: Education
4. Traffic: be honest, around 165 visits a month from Bing. Understating or inflating it
   both end badly at payout
5. Add PAN and bank details for payout

Expect a review of a few working days. Approval is not guaranteed at this traffic level.
If they decline, ask what traffic they want and reapply later rather than arguing.

### Step 2: INRDeals as a backup

Same model, different advertiser mix. Apply at **inrdeals.com** only if Cuelinks declines,
or alongside it if you want to compare the Testbook rate. Do not place both networks' links
on the same page.

### Step 3: Adsterra for display

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

## Phase 2: the code

Claude's steps. Done once, works for whichever network approves you.

### 2.1 Affiliate link component

A component that renders an outbound affiliate link with `rel="sponsored noopener"` and
`target="_blank"`, so the links are disclosed correctly. Undisclosed affiliate links are a
policy breach for both Google and the affiliate networks, and this site cannot afford
another quality judgement against it.

### 2.2 A network-agnostic ad slot

The existing `AdBanner` is hardcoded to AdSense (`window.adsbygoogle`). It is replaced with
a slot that renders whichever network is configured, so switching networks later is a
config change rather than an edit to every page.

### 2.3 Visible disclosure

An affiliate disclosure line in the footer and on any page carrying affiliate links.
Required by the networks, and by Indian consumer protection guidelines on endorsements.

---

## Phase 3: where the links go

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

## Phase 4: measuring whether it worked

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
