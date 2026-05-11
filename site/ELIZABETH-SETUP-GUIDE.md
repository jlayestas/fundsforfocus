# Your Website Setup Guide
### Funds for Focus — No coding required

Welcome! This guide walks you through everything you need to get your new website running. You'll be able to add projects, receive bids, and collect applications — all without touching any code.

---

## What you'll need before you start

- A Google account (you already have one if you use Gmail)
- About 30 minutes the first time

---

## PART 1 — Connect your project listings (Google Sheets)

Your website automatically reads project listings from a Google Sheet. When you update the sheet, the website updates too — usually within 5 minutes. No logging in to anything else.

### Step 1: Make a copy of the project sheet template

1. Open Google Sheets at **sheets.google.com**
2. Click **+ Blank spreadsheet** to create a new one
3. Name it something like **Funds for Focus — Projects**

### Step 2: Set up the columns

In the very first row, type each of these headers exactly as shown (one per cell, starting at cell A1):

```
id | title | category | payout | time | format | location | spots | total | eligibility | deadline | status | isNew | isHot | formUrl
```

Here's what each column means:

| Column | What to put there | Example |
|--------|------------------|---------|
| **id** | A short nickname for the project, no spaces | `coffee-study` |
| **title** | The full project name | `Morning Coffee Ritual — Ethnography` |
| **category** | Type of study | `Ethnography`, `Online Survey`, `Taste Test` |
| **payout** | Dollar amount (numbers only, no $ sign) | `300` |
| **time** | Minutes the study takes (numbers only) | `120` |
| **format** | How it's done | `Online`, `In-Person`, `In-Home`, `Phone`, `Central Location` |
| **location** | City or "Nationwide" | `Austin, TX` or `Nationwide` |
| **spots** | How many spots are still open | `4` |
| **total** | Total spots for the study | `12` |
| **eligibility** | Who qualifies | `Daily coffee drinkers, brew at home` |
| **deadline** | Last day to apply | `May 31` |
| **status** | Whether it's visible on the website | `live` (visible) or `draft` (hidden) |
| **isNew** | Show a "New" badge? | `TRUE` or `FALSE` |
| **isHot** | Show a "Filling fast" badge? | `TRUE` or `FALSE` |
| **formUrl** | The Google Form link for this project's screener (see Part 2) | *(paste link here)* |

### Step 3: Add your projects

Fill in one row per project. Here's an example row:

| id | title | category | payout | ... | status |
|----|-------|----------|--------|-----|--------|
| coffee-study | Morning Coffee Ritual | Ethnography | 300 | ... | live |

**Tip:** Change `status` to `draft` to hide a project from the website, or `live` to show it. This is how you turn projects on and off.

### Step 4: Publish the sheet so the website can read it

1. Click **File** in the top menu
2. Click **Share**, then **Publish to web**
3. A window appears. Under the first dropdown, select **Sheet1**
4. Under the second dropdown, select **Comma-separated values (.csv)**
5. Click **Publish**, then click **OK** to confirm
6. A link appears — copy the entire link (it starts with `https://docs.google.com/spreadsheets/...`)

### Step 5: Paste the link into your website

1. On your computer, find the website folder (the `/site` folder)
2. Open the folder named **js**, then open the file **data.js** — you can open it with TextEdit (Mac) or Notepad (Windows)
3. Near the top, find this line:
   ```
   const SHEET_CSV_URL = "";
   ```
4. Paste your link between the two quote marks, like this:
   ```
   const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/YOUR-SHEET-ID/pub?output=csv";
   ```
5. Save and close the file

That's it! Your website will now read from your Google Sheet.

---

## PART 2 — Set up screener forms for each project (Google Forms)

Each project on your website has an "Apply" button. That button should link to a short Google Form so people can answer a few quick questions. You'll create one Google Form per project.

### Step 1: Create a Google Form for a project

1. Go to **forms.google.com**
2. Click **+** to create a new form
3. Name it after the project (e.g., "Coffee Study Screener")
4. Add your screening questions (age, location, habits, etc.)
5. Under **Settings** (the gear icon), turn on **Collect email addresses** so you can contact applicants
6. Under **Responses**, click the green Sheets icon to connect it to a Google Sheet — this is where all responses will go

### Step 2: Get the form link

1. Click the **Send** button (top right)
2. Click the **link icon** (looks like a chain link)
3. Copy the link

### Step 3: Add the link to your project sheet

1. Open your Google Sheet
2. Find the row for that project
3. In the **formUrl** column, paste the form link
4. The website will now link directly to that form when someone clicks "Apply"

> **Repeat Steps 1–3 for each project.** Each project gets its own Google Form so you can see responses organized by study.

---

## PART 3 — Updating your email address

Your website sends bid requests, participant applications, and newsletter signups to one email address. It's set in a single place — you only need to change it once.

1. In the site folder, open the **js** folder, then open the file **data.js** with a text editor
2. Near the very top, find this line:
   ```
   const CONTACT_EMAIL = "info@fundsforfocus.com";
   ```
3. Replace `info@fundsforfocus.com` with your new email address
4. Save the file — that's it, every form on the site now uses your new address

---

## PART 4 — Publishing your website (one-time setup)

You'll upload your site to Netlify — it's free, takes about 5 minutes, and connects to your domain name.

### Step 1: Create a free Netlify account

1. Go to **netlify.com**
2. Click **Sign up** and create a free account

### Step 2: Upload your site

1. Once logged in, you'll see a big area that says **"Drag and drop your site folder here"**
2. On your computer, find the `/site` folder (the one with `index.html`, `bid.html`, etc. in it)
3. Drag the entire **site folder** into that area on the Netlify website
4. Wait about 30 seconds — Netlify will give you a temporary web address like `random-name.netlify.app`
5. Your site is live!

### Step 3: Connect your domain (fundsforfocus.com)

1. In Netlify, click on your site, then go to **Domain settings**
2. Click **Add custom domain**
3. Type `fundsforfocus.com` and follow the instructions
4. Netlify will walk you through pointing your domain to your new site (you'll need to log in to wherever you bought your domain — GoDaddy, Namecheap, etc.)

> If you're unsure where your domain is registered, your web person or whoever set up the original site will know.

---

## DAY-TO-DAY: How to manage your site

Once everything is set up, here's your normal routine:

### To add a new project:
1. Open your Google Sheet
2. Add a new row with all the project details
3. Set `status` to `live`
4. Create a Google Form for the screener
5. Paste the form link in the `formUrl` column
6. Done — the website updates within 5 minutes

### To close a project:
1. Open your Google Sheet
2. Find the project row
3. Change `status` from `live` to `draft`
4. Done — it disappears from the website within 5 minutes

### To update spots remaining:
1. Open your Google Sheet
2. Find the project row
3. Change the number in the `spots` column
4. Done — the progress bar on the website updates automatically

### When someone submits a bid (Request Bid form):
- You'll receive an email at your inbox from yourself
- The email contains all the details the client filled in
- Reply directly to that email to follow up

### When someone applies to participate:
- You'll receive an email at your inbox with their full application
- Their screener responses also go directly into the Google Sheet you connected in Part 2

---

## Quick reference

| Task | Where to do it |
|------|---------------|
| Add / edit a project | Google Sheet |
| Hide a project | Google Sheet → change `status` to `draft` |
| Update available spots | Google Sheet → edit `spots` column |
| Create a project screener | Google Forms |
| See screener responses | Google Sheets (linked to your form) |
| Receive bid requests | Your email inbox |
| Receive participant applications | Your email inbox |
| Change your email address | Edit `bid.html` and `participate.html` in a text editor |
| Update the website | Re-drag the `/site` folder to Netlify |

---

## Getting help

If anything isn't working or you have questions:

- **Email:** jlayestas@gmail.com *(your developer)*
- **Netlify support:** netlify.com/support (free tier includes community support)
- **Google Forms help:** support.google.com/docs/topic/6063584

---

*Last updated: May 2026*
