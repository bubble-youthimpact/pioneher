/* =====================================================================
   CONFIG — edit these
   ===================================================================== */
// Paste your Firebase web config here (Firebase console → Project settings → Your apps → Web).
// Firebase runs on your real domain. Inside previews (claude.ai, file://) the site uses preview mode instead,
// because Google sign-in cannot run there; preview data stays in that browser.
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDU0rfTNZGmUPZK0M4otq4iVRUjRdxodyc",
  authDomain: "pioneher-17699.firebaseapp.com",
  projectId: "pioneher-17699",
  storageBucket: "pioneher-17699.firebasestorage.app",
  messagingSenderId: "850401077955",
  appId: "1:850401077955:web:b35a61aea7917d08ac9076"
};
const FIREBASE_VERSION = "10.12.2";

// If the site lives in a sub-folder (e.g. username.github.io/pioneher), set BASE = "/pioneher".
const BASE = "";

// FormSubmit (formsubmit.co) emails Apply and Contact submissions to you.
// The address is encoded so it never appears as text on the site. After FormSubmit gives you
// a random alias string (see its activation email), you can paste that here instead.
const FORMSUBMIT_ID = atob("YnViYmxlLnlvdXRoaW1wYWN0QGdtYWlsLmNvbQ==");

// Your images — drop files into /images with these names (or change the paths).
const IMAGES = {
  hero:        "/images/hero.webp",
  issue:       "/images/issue-silhouette.png",
  mentorship:  "/images/mentorship.webp",
  funding:     "/images/funding.webp",
  networking:  "/images/networking.webp",
  founder:     "/images/elly-kim.webp"
};

// Links used by worksheets and educational materials.
const LINKS = {
  pitchDeckTemplate:  "",   // Session 4 · "Click to download pitch deck" + Pitch deck template card
  leanCanvasTemplate: "https://www.canva.com/design/DAHCm7kKqek/D48bpiZtetO2tW3q_ZaRpA/edit",   // Session 2 · "Click to download lean canvas"
  session3Example:    "https://docs.google.com/document/d/1CWc-smxYhrBROYTFUQJ8HdardUnQHvx-SJq7sVd01R4/edit?tab=t.0"    // Session 3 · "Link to example"
};

/* =====================================================================
   DATA
   ===================================================================== */
const NAV = [
  ["/about","About"],["/curriculum","Curriculum"],["/resources","Resources"],
  ["/stories","Stories"],["/crowdfunding","Crowdfunding"],["/apply","Join/Apply"],["/contact","Contact"]
];

const SESSIONS = [
  {slug:"session-1-introduction", title:"Session 1: Introduction", card:"Pioneher Education Curriculum", sub:"Mentoring and funding youth female entrepreneurs",
   desc:"Introduction to Pioneher, our mission, entrepreneurship, and idea development.", fileID:"1QpPNDyZcv25DoXbfGf7B49evNOHgp883"},
  {slug:"session-2-lean-canvas", title:"Session 2: Lean Canvas", card:"Session 2 (Lean Canvas)",
   desc:"Learn about the lean canvas and how it can help your business.", fileID:"1x0jUK0_Pxo-nt0QPhOLcUOo5zR6OY1X1"},
  {slug:"session-3-feedback-business-strategy-basics", title:"Session 3: Feedback & Business Strategy Basics", card:"Session 3 (Feedback & Business Strategy Basics)",
   desc:"Learn about the fundamentals of business strategy and marketing principles and strategies.", fileID:"1vwatz76K0scg98P8FQU5wsN3G0SqANXx"},
  {slug:"session-4-pitch-deck", title:"Session 4: Pitch Deck", card:"Session 4 (Pitch Deck)",
   desc:"Learn about the pitch deck and how to create one for your business.", fileID:"1G--nPbsz3wfoJ4epUu9FDfCgIcMGsqvF"},
  {slug:"session-5-prototype-mvp-development", title:"Session 5: Prototype/MVP Development", card:"Session 5 (Prototype / MVP Development)",
   desc:"Learn what an MVP is and how to make one.", fileID:"1CIAgwmRC9xe8JuEH1t1PWwkWINYMakJn"}
];

/* Worksheet fields. Every worksheet starts with a required Name field.
   type: h = section heading · text = long answer · line = short answer · url = link to their work · link = centered link
   hint formatting: "**Bold line**", "- list item", blank line = gap */
const WORKSHEETS = {
  "session-1-introduction": [
    {type:"text", key:"problem", label:"Part 1: Identify a Real Problem", hint:"What is one real problem you notice in your school, community, or daily life? Why is this a problem? Who does it affect? Describe the problem clearly in 2–3 sentences."},
    {type:"text", key:"business_idea", label:"Part 2: Your Business Idea", hint:"What is your business idea that solves this problem?\nWrite 3–5 sentences explaining what your product or service is and how it works. What makes your idea different or better than what already exists (if anything)?"},
    {type:"text", key:"target_customers", label:"Part 3: Target Customers", hint:"Who would your customers be? Be specific (age, interests, location, etc.) What do your customers need or struggle with that your business helps solve?"},
    {type:"text", key:"demand_and_incentive", label:"Part 4: Demand and Incentive", hint:"Why would people want to buy your product or service?\nWhat is their incentive? (Examples: saves time, saves money, makes life easier, more fun, safer, etc.) Why would they choose your idea instead of ignoring the problem?"},
    {type:"text", key:"testing_your_idea", label:"Part 5: Testing Your Idea", hint:"What is one way you could test your business idea before fully launching it?\n(Examples: create a survey, ask classmates, make a sketch or prototype, post a poll, collect feedback.) How would you know if your idea is successful based on this test?"},
    {type:"text", key:"improvement_after_testing", label:"Part 6: Improvement After Testing", hint:"Based on the feedback you might receive, what is one improvement you would make to your business idea?"},
    {type:"text", key:"reflection", label:"Reflection", hint:"What was the most challenging part of creating your business idea?\nWould you actually want to start this business? Why or why not?"}
  ],
  "session-2-lean-canvas": [
    {type:"url", key:"lean_canvas_link", label:"Lean Canvas Link", hint:"Make a copy of the lean canvas, fill it in, then share it so anyone with the link can view it (Canva: Share → Anyone with the link). Paste the link here."},
    {type:"link", text:"Click to download lean canvas", url:()=>LINKS.leanCanvasTemplate}
  ],
  "session-3-feedback-business-strategy-basics": [
    {type:"h", text:"Part 1: Campaign Planning"},
    {type:"text", key:"brand", label:"Brand", hint:"Write the name of the brand you are creating the campaign for."},
    {type:"text", key:"reason_for_campaign", label:"Reason for Campaign", hint:"Explain why this campaign is needed. Is the brand facing criticism, launching something new, trying to reach a new audience, or improving its image? Provide background context."},
    {type:"text", key:"target_audience", label:"Target Audience", hint:"Identify the specific audience for this campaign. Include age range, gender (if applicable), interests, lifestyle, and any other relevant characteristics."},
    {type:"text", key:"campaign_objectives", label:"Campaign Objectives", hint:"List 3–5 clear goals of the campaign. What does the brand want to achieve? (Examples: increase sales, improve brand reputation, expand audience, launch new products, etc.)"},
    {type:"text", key:"key_message", label:"Key Message", hint:"Write one clear sentence that captures the main idea of your campaign. This should be simple and memorable."},
    {type:"text", key:"content_tone_and_style", label:"Content Tone and Style", hint:"Describe the tone (e.g., playful, professional, bold, minimal, soft, empowering) and visual style of the campaign."},
    {type:"h", text:"Part 2: Marketing Content Creation"},
    {type:"text", key:"email_marketing_draft", label:"Email Marketing Draft", tall:true, hint:"Write a promotional email announcing the campaign. Include:\n- A subject line\n- A greeting\n- Information about the campaign or new launch\n- A call to action\n- A closing signature"},
    {type:"line", key:"blog_title", label:"Blog post", hint:"Create a blog title related to your campaign."},
    {type:"text", key:"blog_description", hint:"Write a short blog post announcing and explaining the campaign. Include details about what is new, why it matters, and how it connects to the brand's message."},
    {type:"link", text:"Link to example", url:()=>LINKS.session3Example}
  ],
  "session-4-pitch-deck": [
    {type:"url", key:"pitch_deck_link", label:"Pitch Deck Link", hint:"Make a copy of the pitch deck template, fill it in, then share it so anyone with the link can view it (Canva, Google Slides or Google Drive). Paste the link here."},
    {type:"link", text:"Click to download pitch deck", url:()=>LINKS.pitchDeckTemplate}
  ],
  "session-5-prototype-mvp-development": [
    {type:"text", key:"create_a_product_idea", label:"Part 1: Create a Product Idea", hint:"Choose a service or app/ web idea that you would like to build and briefly explain it.\n\n**Include:**\n- Product Name\n- What the product does\n- Target Users (who would use it)\n\n**Example**\nProduct Name: StudyMate\nWhat the product does: An app that helps students find study partners.\nTarget Users: High school students preparing for exams."},
    {type:"text", key:"design_mvp_features", label:"Part 2: Design the MVP Features", hint:"If you were to build the simplest possible version (MVP) of this product, what features would it include?\n\n**Include:**\n- Core feature 1\n- Core feature 2\n- Core feature 3 (optional)\n\n**Example**\nCore Feature 1: Find study partners\nCore Feature 2: Track study time\nCore Feature 3: Simple chat feature"},
    {type:"text", key:"mvp_testing_plan", label:"Part 3: MVP Testing Plan", hint:"Explain how you would test this MVP.\n\n**Include:**\n- Who will test it?\n- What will you check?\n- How will you know if it works?\n\n**Example**\nWho will test it: 10 classmates\nWhat will you check: Whether the study partner matching is helpful\nHow will you know it works: If more than half say they would continue using it"}
  ]
};

const CATEGORIES = ["Idea Validation","Pitch Deck","Finance","Marketing","Fundraising"];
const MATERIALS = [{category:"Pitch Deck", title:"Pitch deck template", url:LINKS.pitchDeckTemplate}];

const VIDEOS = ["Do_LjDsisIE","YkEzLn_FhN8","niOV_jSVCKs","KHq_EDi2PE8","UIJUgnykkOA","vRy-_w4cvT8","_xNE5G5Q0qQ","TGo_AH67jVI","OgR4xYO8GtY","7CLwzoqfhY0","bRBLPJguU-0"];

const ARTICLES = [
  {type:"article", title:"[스타트업 여성 창업가 인터뷰] 누적 투자금액 170억, ‘오늘회’ 를 창업했을 때 딱 1년만 해보려고 했어요", link:"https://www.mobiinside.co.kr/2021/06/09/onul-hoi-interview/", image:"/images/stories/story-01-mobiinside.webp",
   desc:"제철 수산물을 먹기 위해 수산시장이나 제주도까지 가야 했던 번거로움 없이 이제 사람들은 ‘오늘회’를 통해 신선한 활어회 한 상을 저녁으로 차립니다. 생일, 기념일 같은 특별한 날뿐만 아니라 퇴근 후 혼회(혼자 먹는 회)로 스트레스를 풀기도 합니다. 월간 160만 명이 방문하는 오늘회의 성장 스토리와 투자 유치 소식은 많이 볼 수 있는데요, 스여일삶은 ‘오늘회’의 여성 창업가 김재현 대표의 이야기에 더 초점을 맞춰봤습니다."},
  {type:"article", title:"Empowering Women in Agrifood 2025: Interview with Nadica Desanova Co-founder of MIMIC TECH", link:"https://www.eu-startups.com/2025/12/empowering-women-in-agrifood-2025-interview-with-nadica-desanova-co-founder-of-mimic-tech/", image:"/images/stories/story-02-eu-startups.webp",
   desc:"On 20 November 2025 concluded the six-month Empowering Women in Agrifood (EWA) programme concluded with Demo Day in North Macedonia. The event showcased the innovative ideas of women entrepreneurs who received support, training, mentorship, and financial backing to develop their agrifood innovations."},
  {type:"article", title:"Empowering Women in Agrifood 2025: Interview with Nina Bazela founder of Antyszpak", link:"https://www.eu-startups.com/2025/12/empowering-women-in-agrifood-2025-interview-with-nina-bazela-founder-of-antyszpak/", image:"/images/stories/story-03-eu-startups.webp",
   desc:"On 25 November, the Demo Day of the Empowering Women in Agrifood (EWA) programme took place in the PKO Rotunda in Warsaw, an initiative that supports women entrepreneurs working to create a more sustainable and innovative food system."},
  {type:"article", title:"Daniella Pierson Wants to Empower the Next Generation of Female Entrepreneurs", link:"https://www.elle.com/culture/career-politics/a64946838/daniella-pierson-chasm-interview/", image:"/images/stories/story-04-elle.webp",
   desc:"The Newsette founder Daniella Pierson has a new venture to add to her portfolio: Chasm. According to TechCrunch, all-women teams currently receive just 1.8 percent of VC funding. This initiative aims to close that gender gap in entrepreneurship, supported by an impressive roster of members, including musician Lionel Richie and Sneex inventor Sara Blakely."},
  {type:"article", title:"Sharmadean Reid is 1 of 10 Black female entrepreneurs in the UK this past decade who's raised VC. Her business aims to empower entrepreneurial women.", link:"https://www.businessinsider.com/interview-sharmadean-reid-founder-of-the-stack-world-2021-7", image:"/images/stories/story-05-businessinsider.webp",
   desc:"Reid launched her news The Stack World in March as a way to deliver in-depth news and economically empower female entrepreneurs. The Stack World reports on beauty, business, culture, society, and wellness, with recent pieces on the misogynistic history of soccer and how Britney Spears' conservatorship highlights the economic abuse of women."},
  {type:"article", title:"Kim Kardashian shaped Skims into a $5 billion brand—now she wants to help other entrepreneurs mold their skills for success", link:"https://fortune.com/2025/12/04/kim-kardashian-masterclass-skims-marketing-branding/", image:"/images/stories/story-06-fortune.webp",
   desc:"Today we have an exclusive interview with Kim Kardashian. The occasion? Her new class on MasterClass, where the superstar shares what she’s calling her “ten Kimmandments” of business. Over two decades in the public eye, Kardashian has learned how to sell a product—starting with social media and licensing deals, and now with her startup Skims valued at $5 billion and on IPO watch."},
  {type:"article", title:"Self-made millionaire behind $4 billion Skims says it all began with a cold call to Kris Jenner: ‘I have no delusions of who gets to run a business’", link:"https://fortune.com/2025/09/23/millionaire-behind-4-billion-skims-emma-grede-all-began-with-a-cold-call-to-kris-jenner-i-have-no-imposter-syndrome-delusions-gen-z-career-advice/", image:"/images/stories/story-07-fortune.webp",
   desc:"You’ve probably heard of the British Entrepreneur Emma Grede because of Skims, the $4 billion shapewear company she runs with Kim Kardashian. She’s also invested in other brands with the family, such as the cleaning products company Safely and Kylie Jenner’s clothing line, Khy. And the growing empire can all be traced back to one phone call she made to Kris Jenner that changed everything."},
  {type:"article", title:"The future is female: The rise of women entrepreneurs in India", link:"https://www.campaignindia.in/article/the-future-is-female-the-rise-of-women-entrepreneurs-in-india/4hxzcvrdk19cs7baazeqtm18dn", image:"/images/stories/story-08-campaignindia.webp",
   desc:"The co-founder and CIO, Honasa Consumer, shares her optimism about the prospects of women-led startups in India with an increasing number of females entering entrepreneurship, overcoming cultural biases and societal barriers in the process."},
  {type:"article", title:"Lesleigh Jermanus: On Building a Global Fashion Brand Rooted in Colour, Craft and Conscience", link:"https://www.marieclaire.co.uk/fashion/lesleigh-jermanus-alemais-women-who-win-interview", image:"/images/stories/story-09-marieclaire.webp",
   desc:"In our latest Women Who Win, Lesleigh Jermanus opens up about the mid-career pause that led her to create her fashion brand Alémais, which is rooted in colour, joy and sustainability. Jermanus talks to Lily Russo-Bah about redefining success and learning to trust her gut in creative and business decisions."},
  {type:"article", title:"Q&A: Why Success Gave Mira Founder Sylvia Kang The Big Chill", link:"https://rebelliousmagazine.com/mira-founder-ceo-sylvia-kang-interview/", image:"/images/stories/story-10-rebelliousmagazine.webp",
   desc:"In the novel “Grand Hotel” (1929), Austrian author Vicki Baum wrote, “Success is as ice-cold and lonely as the North Pole.” Nearly a century later, China-born bioengineer and business manager Sylvia Kang felt the freeze. The Asian American entrepreneur founded Mira, a fertility device and women’s health company, in 2018. Since then, success presented some chilling surprises for the former pianist and current CEO."},
  {type:"article", title:"Confessions of a Female Founder review – Meghan’s sycophantic interview podcast is stomach-turning", link:"https://www.theguardian.com/tv-and-radio/2025/apr/08/confessions-of-a-female-founder-review-meghans-sycophantic-interview-podcast-is-stomach-turning", image:"/images/stories/story-11-theguardian.webp",
   desc:"Remember the girl boss? She burst in to the zeitgeist in the 2010s, riding the era’s nebulous wave of female empowerment and proving that women could become incredibly rich by helming capitalist empires – just like men. Branding-wise, she had some issues: beginning with that infantile moniker and peaking with a series of toxic workplace scandals."},
  {type:"pdf", title:"Case Studies of Successful Women Entrepreneurs in the ICT Industry in 21 APEC Economies", link:"https://www.unapcict.org/sites/default/files/2019-03/APEC.pdf", image:"/images/stories/story-12-unapcict.webp",
   desc:"This report presents findings of case studies of successful women entrepreneurs engaged in ICT business or actively integrating ICTs into their business. A total of 24 women entrepreneurs from 21 APEC Economies participated in the research study."}
];

// Fundraisers come from Firestore (created by signed-in users, shown after admin approval).
const FUNDRAISERS = [];

/* =====================================================================
   UTILITIES
   ===================================================================== */
const $ = (s,el=document)=>el.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));
const esc = s => String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const slugify = s => s.toLowerCase().replace(/['’]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
const money = n => "$"+Number(n).toLocaleString("en-US");
const pct = f => f.goal ? Math.min(100,Math.round(f.raised/f.goal*100)) : 0;
const asset = p => /^https?:|^\/\/|^blob:|^data:/.test(p) ? p : (HASH_MODE ? p.replace(/^\//,"") : BASE + p);
const fmtDate = ms => ms ? new Date(ms).toLocaleString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}) : "";
function media(src, label, extra=""){
  return `<div class="media ${extra}">${src?`<img src="${esc(asset(src))}" alt="" loading="lazy" onerror="this.remove()">`:""}<span class="ph-label">${esc(label)}</span></div>`;
}
const store = {
  get(k,d){try{const v=localStorage.getItem("pioneher:"+k);return v?JSON.parse(v):d}catch(e){return d}},
  set(k,v){try{localStorage.setItem("pioneher:"+k,JSON.stringify(v))}catch(e){}}
};
function toast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");clearTimeout(toast._t);toast._t=setTimeout(()=>t.classList.remove("show"),3400)}
function fmtHint(s){
  const out=[]; let list=null;
  const flush=()=>{ if(list){ out.push(`<ul>${list.join("")}</ul>`); list=null } };
  for(const line of s.split("\n")){
    if(line.startsWith("- ")){ (list=list||[]).push(`<li>${esc(line.slice(2))}</li>`); continue }
    flush();
    if(!line.trim()){ out.push('<span class="gap"></span>'); continue }
    const m=line.match(/^\*\*(.+)\*\*$/);
    out.push(m?`<b>${esc(m[1])}</b>`:`<span>${esc(line)}</span>`);
  }
  flush(); return out.join("");
}
const ICON_ARROW = `<svg class="arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6"/></svg>`;
const ICON_FORMS = `<svg width="24" height="32" viewBox="0 0 24 32" aria-hidden="true"><path d="M2 0h14l8 8v22a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" fill="#7248B9"/><path d="M16 0l8 8h-6a2 2 0 0 1-2-2z" fill="#B39DDB"/><g fill="#fff"><circle cx="7" cy="14" r="1.3"/><circle cx="7" cy="19" r="1.3"/><circle cx="7" cy="24" r="1.3"/><rect x="10" y="13" width="8" height="2" rx="1"/><rect x="10" y="18" width="8" height="2" rx="1"/><rect x="10" y="23" width="8" height="2" rx="1"/></g></svg>`;
const ICON_GOOGLE = `<svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/></svg>`;

/* =====================================================================
   FIREBASE — Auth (Google), Firestore, Storage
   Loads only when FIREBASE_CONFIG.apiKey is set. Data model:
     users/{uid}                      profile (name, email, photo, lastLogin)
     users/{uid}/worksheets/{slug}    { session, status: draft|submitted, answers, updatedAt, submittedAt }
     applications · contacts · donations      public form submissions (admin-read only)
     fundraisers/{slug} · materials/{id}      public, created by signed-in users
   Free (Spark) plan only — no Cloud Storage. Worksheet files are shared as links;
   fundraiser photos are resized in the browser and stored inside the Firestore document.
   ===================================================================== */
const FRAMED = (()=>{try{return window.self!==window.top}catch(e){return true}})() || location.protocol==="file:";
const FB_ON = !!FIREBASE_CONFIG.apiKey && !FRAMED;
let fb = null, currentUser = null, progress = {};
const db = () => fb.firestore();
function loadScript(src){return new Promise((res,rej)=>{const s=document.createElement("script");s.src=src;s.onload=res;s.onerror=rej;document.head.appendChild(s)})}
let fbLoading=null;
function initFirebase(){
  if(!FB_ON) return Promise.resolve(null);
  if(fbLoading) return fbLoading;
  fbLoading=(async()=>{
    const root=`https://cdn.jsdelivr.net/npm/firebase@${FIREBASE_VERSION}/`;
    await loadScript(root+"firebase-app-compat.js");
    await Promise.all(["auth","firestore"].map(m=>loadScript(root+`firebase-${m}-compat.js`)));
    firebase.initializeApp(FIREBASE_CONFIG);
    fb=firebase;
    fb.auth().onAuthStateChanged(u=>{
      setUser(u?{uid:u.uid,name:u.displayName||u.email,email:u.email,photo:u.photoURL}:null);
      if(u) db().collection("users").doc(u.uid).set({name:u.displayName||"",email:u.email||"",photo:u.photoURL||"",lastLogin:fb.firestore.FieldValue.serverTimestamp()},{merge:true}).catch(()=>{});
    });
    loadPublicData().catch(()=>{});
    return fb;
  })();
  return fbLoading;
}
async function signInWithGoogle(){
  if(!FB_ON) return {error:"Google sign-in will work once Firebase is connected (add your config at the top of the script)."};
  try{
    await initFirebase();
    const provider=new fb.auth.GoogleAuthProvider();
    try{ await fb.auth().signInWithPopup(provider) }
    catch(e){
      if(e.code==="auth/popup-blocked"||e.code==="auth/operation-not-supported-in-this-environment"){ await fb.auth().signInWithRedirect(provider); return {ok:true} }
      if(e.code==="auth/popup-closed-by-user"||e.code==="auth/cancelled-popup-request") return {cancel:true};
      throw e;
    }
    return {ok:true};
  }catch(e){ return {error:e.message||"Sign-in didn't complete. Try again."} }
}
async function signOut(){ if(fb) await fb.auth().signOut(); else setUser(null) }

// Writes one document. Adds a server timestamp when Firebase is connected; otherwise keeps it in this browser.
async function writeDoc(col,data,id){
  if(!FB_ON){ const all=store.get("rec:"+col,[]); all.push({...data,createdAt:new Date().toISOString()}); store.set("rec:"+col,all); return id||("local-"+Date.now()) }
  await initFirebase();
  const ref=id?db().collection(col).doc(id):db().collection(col).doc();
  await ref.set({...data,createdAt:fb.firestore.FieldValue.serverTimestamp()});
  return ref.id;
}
const saveRecord=(col,data)=>writeDoc(col,{...data,uid:currentUser?.uid||null});

// Shrinks a photo to a JPEG data URL small enough to live inside a Firestore document (< ~700 KB).
function compressImage(file,maxW=1200){
  return new Promise((res,rej)=>{
    const img=new Image(), url=URL.createObjectURL(file);
    img.onload=()=>{
      URL.revokeObjectURL(url);
      let w=Math.min(maxW,img.naturalWidth), h=Math.round(img.naturalHeight*w/img.naturalWidth);
      const c=document.createElement("canvas"), ctx=c.getContext("2d");
      for(let q=.82;;q-=.12){
        c.width=w;c.height=h;ctx.drawImage(img,0,0,w,h);
        const d=c.toDataURL("image/jpeg",q);
        if(d.length<700000) return res(d);
        if(q<.4){ w=Math.round(w*.75); h=Math.round(h*.75); q=.94 }
      }
    };
    img.onerror=()=>{URL.revokeObjectURL(url);rej(new Error("That file isn't an image."))};
    img.src=url;
  });
}

// Emails a form submission through FormSubmit's AJAX endpoint.
async function sendEmail(subject,fields,replyTo){
  if(FRAMED) return "preview";                       // previews can't reach formsubmit.co
  const r=await fetch("https://formsubmit.co/ajax/"+FORMSUBMIT_ID,{
    method:"POST",
    headers:{"Content-Type":"application/json","Accept":"application/json"},
    body:JSON.stringify({...fields,_subject:subject,_replyto:replyTo,_template:"table",_captcha:"false"})
  });
  const j=await r.json().catch(()=>({}));
  if(!r.ok || String(j.success)!=="true") throw new Error(j.message||"Couldn't send the email.");
  return "sent";
}

/* ---------- Admin approval ----------
   New fundraisers and materials start with approved:false. The public only sees approved items;
   the creator and the admin also see pending ones. The admin is recognised by a SHA-256 fingerprint
   of their Google email, so the address itself never appears in the site's code. */
const ADMIN_EMAIL_SHA256 = "0a51c5a22e90170a498db3eb0432cfe08728c0a6ad59b1bf98e02b13736ae7d0";
let isAdmin = false;
async function checkAdmin(u){
  if(!u) return false;
  if(!FB_ON) return !!u.demoAdmin;
  try{
    const buf=await crypto.subtle.digest("SHA-256",new TextEncoder().encode((u.email||"").trim().toLowerCase()));
    return [...new Uint8Array(buf)].map(b=>b.toString(16).padStart(2,"0")).join("")===ADMIN_EMAIL_SHA256;
  }catch(e){ return false }
}
const ownsItem = x => !!currentUser && x.ownerUid===currentUser.uid;
const canSee = x => x.approved!==false || ownsItem(x) || isAdmin;
const pendingBadge = x => x.approved===false ? `<span class="status draft">Pending review</span>` : "";
function upsert(list,key,item){ const i=list.findIndex(x=>x[key]===item[key]); if(i>=0) list[i]={...list[i],...item}; else list.push(item) }

async function loadPublicData(){
  const d=db(), uid=currentUser?.uid;
  const fetchCol=col=>{ const c=d.collection(col);
    if(isAdmin) return Promise.all([c.get()]);                         // admin: everything
    const q=[c.where("approved","==",true).get()];                      // public: approved only
    if(uid) q.push(c.where("ownerUid","==",uid).get());                 // plus your own pending items
    return Promise.all(q);
  };
  const [fs,ms]=await Promise.all([fetchCol("fundraisers"),fetchCol("materials")]);
  fs.forEach(s=>s.forEach(doc=>{ const v=doc.data(); if(!v.image) delete v.image; upsert(FUNDRAISERS,"slug",{...v,slug:doc.id,inFirestore:true}) }));
  ms.forEach(s=>s.forEach(doc=>upsert(MATERIALS,"id",{...doc.data(),id:doc.id})));
  if(/^\/(curriculum|crowdfunding|profile)$|^\/crowdfunding\//.test(currentPath())) render(false);
}
// Records a donation and raises the fundraiser's total by the same amount, in one step.
async function recordDonation(d){
  const data={...d,uid:currentUser?.uid||null};
  const f=FUNDRAISERS.find(x=>x.slug===d.fundraiser);
  const bump=()=>{ if(!f) return; f.raised=Math.round(((+f.raised||0)+d.amount)*100)/100; if(f.raised>=f.goal) f.status="completed" };
  if(!FB_ON){ await writeDoc("donations",data); bump(); return }
  await initFirebase();
  const FV=fb.firestore.FieldValue, dref=db().collection("donations").doc();
  const commit=async withStatus=>{
    const batch=db().batch();
    batch.set(dref,{...data,createdAt:FV.serverTimestamp()});
    if(f&&f.inFirestore){
      const upd={raised:FV.increment(d.amount),lastDonation:dref.id};
      if(withStatus) upd.status="completed";
      batch.update(db().collection("fundraisers").doc(f.slug),upd);
    }
    await batch.commit();
  };
  const reachesGoal = f && f.status!=="completed" && (+f.raised||0)+d.amount>=f.goal;
  try{ await commit(reachesGoal) }
  catch(e){ if(!reachesGoal) throw e; await commit(false) }   // total may have changed; retry without status
  if(f&&f.inFirestore) bump();
}
async function reviewItem(kind,key,approve){
  const list=kind==="fundraisers"?FUNDRAISERS:MATERIALS, idKey=kind==="fundraisers"?"slug":"id";
  const i=list.findIndex(x=>x[idKey]===key); if(i<0) return;
  if(FB_ON){
    await initFirebase();
    const ref=db().collection(kind).doc(key);
    if(approve) await ref.update({approved:true}); else await ref.delete();
  }
  if(approve) list[i].approved=true; else list.splice(i,1);
}

/* ---------- Worksheet progress ---------- */
/* ---------- My donations ---------- */
let myDonations=[];
async function loadDonations(){
  myDonations=[];
  if(!currentUser) return;
  if(FB_ON){
    const snap=await db().collection("donations").where("uid","==",currentUser.uid).get();
    snap.forEach(d=>{ const v=d.data(); myDonations.push({...v,id:d.id,at:v.createdAt?.toMillis?.()||Date.now()}) });
  } else myDonations=store.get("rec:donations",[]).filter(d=>d.uid===currentUser.uid).map(d=>({...d,at:Date.parse(d.createdAt)||Date.now()}));
  myDonations.sort((a,b)=>b.at-a.at);
}
async function loadProgress(){
  progress={};
  if(!currentUser) return;
  if(FB_ON){
    const snap=await db().collection("users").doc(currentUser.uid).collection("worksheets").get();
    snap.forEach(d=>{ const v=d.data(); progress[d.id]={...v,updatedAt:v.updatedAt?.toMillis?.()||Date.now(),submittedAt:v.submittedAt?.toMillis?.()||null} });
  } else progress=store.get("progress:"+currentUser.uid,{});
}
async function saveProgress(slug,answers,submit){
  const prev=progress[slug]||{}, now=Date.now();
  const status=(submit||prev.status==="submitted")?"submitted":"draft";
  progress[slug]={session:slug,status,answers,updatedAt:now,submittedAt:submit?now:(prev.submittedAt||null)};
  if(FB_ON){
    const FV=fb.firestore.FieldValue, doc={session:slug,status,answers,updatedAt:FV.serverTimestamp()};
    if(submit) doc.submittedAt=FV.serverTimestamp();
    await db().collection("users").doc(currentUser.uid).collection("worksheets").doc(slug).set(doc,{merge:true});
  } else store.set("progress:"+currentUser.uid,progress);
}
const statusOf = slug => progress[slug]?.status || "none";
const STATUS_LABEL = {submitted:"Submitted",draft:"In progress",none:"Not started"};
const statusChip = slug => `<span class="status ${statusOf(slug)}">${STATUS_LABEL[statusOf(slug)]}</span>`;
function statusLine(p){ if(!p) return ""; return p.status==="submitted" ? `Submitted ${fmtDate(p.submittedAt||p.updatedAt)}` : `Draft saved ${fmtDate(p.updatedAt)}` }

function setUser(u){
  currentUser=u; isAdmin=false;
  if(!FB_ON) store.set("demoUser",u);
  progress={}; renderChrome(); render(false);
  loadProgress().then(()=>render(false)).catch(()=>{});
  myDonations=[]; loadDonations().then(()=>{ if(currentPath()==="/profile") render(false) }).catch(()=>{});
  checkAdmin(u).then(a=>{ isAdmin=a; if(FB_ON) loadPublicData().catch(()=>{}); render(false) });
}

/* =====================================================================
   ROUTER — clean URLs on a real host (/about), #about inside previews
   ===================================================================== */
const HASH_MODE = FRAMED;
const allPaths = () => ["/","/profile","/privacy","/terms", ...NAV.map(n=>n[0]), ...SESSIONS.map(s=>"/curriculum/"+s.slug), ...FUNDRAISERS.map(f=>"/crowdfunding/"+f.slug)];
const pathToHash = p => p==="/" ? "" : p.slice(1).replace(/\//g,"-");
function hashToPath(h){ h=h.replace(/^#/,""); if(!h) return "/"; return allPaths().find(p=>pathToHash(p)===h) || "/"+h }
function href(path){ return HASH_MODE ? "#"+pathToHash(path) : BASE+path }
function currentPath(){
  if(HASH_MODE) return hashToPath(location.hash);
  let p=location.pathname; if(BASE && p.startsWith(BASE)) p=p.slice(BASE.length);
  p=p.replace(/\/index\.html$/,"/").replace(/\/+$/,""); return p||"/";
}
function navigate(path){
  closeMenu(); closeModal();
  if(HASH_MODE){ const h=pathToHash(path); if(location.hash.replace(/^#/,"")===h) render(); else { location.hash=h; if(!h) render() } }
  else { history.pushState({},"",BASE+path); render() }
}
document.addEventListener("click",e=>{
  const a=e.target.closest("a[data-link]"); if(!a) return;
  if(e.metaKey||e.ctrlKey||e.shiftKey||e.button!==0) return;
  e.preventDefault(); navigate(a.dataset.path||a.getAttribute("href"));
});
window.addEventListener(HASH_MODE?"hashchange":"popstate",()=>render());
function link(path,inner,cls=""){ return `<a href="${href(path)}" data-link data-path="${path}" class="${cls}">${inner}</a>` }

/* =====================================================================
   CHROME (header / drawer)
   ===================================================================== */
const firstName = u => (u.name||u.email||"Me").split(/[\s@]/)[0];
function avatarHTML(u){ return `<span class="avatar">${u.photo?`<img src="${esc(u.photo)}" alt="" referrerpolicy="no-referrer">`:`<svg viewBox="0 0 100 100" aria-hidden="true"><text x="50" y="50" dy=".33em" text-anchor="middle">${esc((u.name||u.email||"?").trim()[0].toUpperCase())}</text></svg>`}</span>` }
function renderChrome(){
  const path=currentPath(), section="/"+(path.split("/")[1]||"");
  const cur = p => p===section ? ' aria-current="page"' : "";
  $("#navLinks").innerHTML = NAV.map(([p,l])=>`<li><a href="${href(p)}" data-link data-path="${p}"${cur(p)}>${l}</a></li>`).join("");
  $("#drawerNav").innerHTML = NAV.map(([p,l])=>`<a href="${href(p)}" data-link data-path="${p}"${cur(p)}>${l}</a>`).join("")
;
  $("#navActions").innerHTML = currentUser
    ? `<a href="${href("/profile")}" data-link data-path="/profile" class="profile-pill"${cur("/profile")} title="My profile">${avatarHTML(currentUser)}<span class="pp-name">${esc(firstName(currentUser))}</span><svg class="pp-chev" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg></a>`
    : `<button class="btn btn-blue" data-action="login">Login</button><button class="btn btn-yellow" data-action="signup">Sign Up</button>`;
  $("#drawerActions").innerHTML = currentUser
    ? `<a href="${href("/profile")}" data-link data-path="/profile" class="drawer-profile">${avatarHTML(currentUser)}<span><b>${esc(currentUser.name)}</b><small>View my profile</small></span></a>`
    : `<button class="btn btn-blue btn-block" data-action="login">Login</button><button class="btn btn-yellow btn-block" data-action="signup">Sign Up</button>`;
  $("#footerLinks").innerHTML = link("/privacy","Privacy Policy")+link("/terms","Terms of Service")+link("/contact","Contact");
  $$(".logo").forEach(a=>{a.setAttribute("href",href("/"));a.dataset.path="/"});
}
function openMenu(){document.body.classList.add("menu-open");$("#hamburger").setAttribute("aria-expanded","true");$("#drawer").setAttribute("aria-hidden","false");setTimeout(()=>$("#drawerClose").focus(),50)}
function closeMenu(){if(!document.body.classList.contains("menu-open"))return;document.body.classList.remove("menu-open");$("#hamburger").setAttribute("aria-expanded","false");$("#drawer").setAttribute("aria-hidden","true")}
$("#hamburger").onclick=()=>document.body.classList.contains("menu-open")?closeMenu():openMenu();
$("#drawerClose").onclick=closeMenu; $("#drawerScrim").onclick=closeMenu;
window.addEventListener("resize",()=>{if(innerWidth>1100)closeMenu()});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeMenu();closeModal()}});
window.addEventListener("scroll",()=>$("#siteHeader").classList.toggle("scrolled",scrollY>4),{passive:true});
document.addEventListener("click",e=>{
  const b=e.target.closest("[data-action]"); if(!b) return;
  const a=b.dataset.action;
  if(a==="login"||a==="signup"){closeMenu();openAuth(a)}
  if(a==="logout"){closeMenu();signOut();toast("You're logged out.");if(currentPath()==="/profile")navigate("/")}
});

/* =====================================================================
   MODALS
   ===================================================================== */
function openModal(html,onMount){
  $("#modalRoot").innerHTML=`<div class="modal-scrim" id="modalScrim"><div class="modal" role="dialog" aria-modal="true"><button class="modal-x" aria-label="Close" id="modalX"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button>${html}</div></div>`;
  $("#modalScrim").addEventListener("click",e=>{if(e.target.id==="modalScrim")closeModal()});
  $("#modalX").onclick=closeModal; document.body.style.overflow="hidden";
  onMount&&onMount($("#modalRoot .modal"));
}
function closeModal(){ if(!$("#modalRoot").innerHTML) return; $("#modalRoot").innerHTML=""; document.body.style.overflow="" }
function openAuth(mode){
  const isUp=mode==="signup";
  openModal(`
    <h2>${isUp?"Create your account":"Welcome back"}</h2>
    <p class="sub">${isUp?"Join Pioneher to save your worksheets and track your progress.":"Log in to save your worksheets and see your progress."}</p>
    <button class="google-btn" id="googleBtn">${ICON_GOOGLE}<span>Continue with Google</span></button>
    <div id="authMsg"></div>
    <p class="switch">${isUp?"Already have an account?":"New to Pioneher?"} <button id="authSwitch">${isUp?"Log in":"Sign up"}</button></p>
    <p class="legal-fine">By continuing, you agree to our ${link("/terms","Terms of Service")} and ${link("/privacy","Privacy Policy")}.</p>
    ${FB_ON?"":`<button class="demo-link" id="demoLogin">Preview the logged-in view</button><button class="demo-link" id="demoAdmin">Preview the admin view</button>`}
  `, m=>{
    $("#authSwitch",m).onclick=()=>openAuth(isUp?"login":"signup");
    $("#googleBtn",m).onclick=async()=>{
      const r=await signInWithGoogle();
      if(r.ok){closeModal();toast("You're signed in.")}
      else if(r.error) $("#authMsg",m).innerHTML=`<p class="form-note warn">${esc(r.error)}</p>`;
    };
    const d=$("#demoLogin",m); if(d) d.onclick=()=>{closeModal();setUser({uid:"demo",name:"Elly Kim",email:"demo@pioneher.org"});toast("Preview: signed in as a sample user.")};
    const da=$("#demoAdmin",m); if(da) da.onclick=()=>{closeModal();setUser({uid:"demo-admin",name:"Pioneher Admin",email:"admin@preview",demoAdmin:true});toast("Preview: signed in as the admin.")};
  });
}
function requireLogin(){ if(currentUser) return true; openAuth("login"); return false }

/* =====================================================================
   VIEWS
   ===================================================================== */
const banner=(t,s,extra="")=>`<section class="banner"><div class="wrap"><h1>${t}</h1>${s?`<p>${s}</p>`:""}${extra}</div></section>`;
const ISSUE = `
<section class="wrap issue">
  <div class="issue-visual">
    ${media(IMAGES.issue,"Issue image")}
    <div class="potential"><span class="bulb"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F2B21F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1V17h6v-.2c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2z"/></svg></span><div><b>Unlocking Potential</b><span>Investing in women changes the world</span></div></div>
  </div>
  <div>
    <div class="eyebrow">The Issue</div>
    <h2>Inequality Stifles <em>Innovation</em></h2>
    <p>Gender inequality in business, driven by unjust societal norms, limits opportunities for female entrepreneurs and prevents society from accessing their transformative ideas and innovations.</p>
    <ul><li>Systemic barriers to talent</li><li>Limited access to venture capital</li><li>Stifled global innovation</li></ul>
  </div>
</section>`;
const MISSION = `
<section class="band mission"><div class="wrap">
  <h2>Our Mission</h2>
  <div class="mission-card"><p>Provide mentoring, funding, networking, and resources to support young female entrepreneurs.</p><hr></div>
</div></section>`;

// [id, label, kind, required, name]
function fieldsHTML(defs){
  return defs.map(([id,label,kind,req,name])=>{
    const r=req?" required":"", cls=req?' class="req"':"", nm=name||id;
    const ctrl = kind==="textarea" ? `<textarea id="${id}" name="${nm}"${r}></textarea>`
      : `<input id="${id}" name="${nm}" type="${kind==="input"?"text":kind}"${kind==="number"?' min="1" step="1" inputmode="numeric"':""}${r}>`;
    return `<div class="field"><label for="${id}"${cls}>${label}</label>${ctrl}</div>`;
  }).join("");
}
function bar(x){const p=pct(x);return `<div class="progress" role="progressbar" aria-valuenow="${p}" aria-valuemin="0" aria-valuemax="100"><i style="width:${p}%"></i><b>${p}%</b></div>`}

const VIEWS = {
  "/privacy": ()=>privacyHTML(),
  "/terms": ()=>termsHTML(),
  "/": ()=>`
    <section class="hero">
      ${media(IMAGES.hero,"Hero image")}
      <div class="wrap">
        <h1>Mentoring and Funding<br><span class="y">Youth Female</span> Entrepreneurs</h1>
        <p>We bridge the gap for young women in business by providing the capital, mentorship, and global network needed to succeed.</p>
        <div class="ctas">${link("/apply","Come Work With Us","btn btn-yellow")}${link("/about","Learn More","btn btn-blue")}</div>
      </div>
    </section>
    ${ISSUE}${MISSION}
    <section class="wrap done">
      <h2>What We've Done So Far</h2>
      <p class="lead">We take a holistic approach to empowerment, ensuring every entrepreneur has the tools to thrive.</p>
      <div class="grid-3">
        ${[["mentorship","Mentorship","Guiding founders through critical business decisions with tailored advice from experienced executives."],
           ["funding","Funding","Bridging the gender investment gap by putting your business in front of active venture capitalists and angel investors."],
           ["networking","Networking","Connecting aspiring entrepreneurs with seasoned industry leaders."]]
          .map(([k,t,d])=>`<article class="card pillar">${media(IMAGES[k],t+" image")}<div class="txt"><h3>${t}</h3><p>${d}</p></div></article>`).join("")}
      </div>
    </section>`,

  "/about": ()=>`
    ${ISSUE}${MISSION}
    <section class="team"><div class="wrap">
      <h2>Our Team</h2>
      <div class="team-card">
        <div class="person">${media(IMAGES.founder,"Photo")}<h3>Elly Kim</h3><div class="role">Founder &amp; CEO</div></div>
        <p class="quote">I chose to do this project because I wanted to highlight female entrepreneurs whose stories are often overlooked. I noticed that many successful women in business don’t get enough visibility, and I wanted to create a platform that shares their journeys in a creative and meaningful way. Through this project, I want to inspire other female entrepreneurs and provide them with resources and support to pursue their own ideas with confidence.</p>
      </div>
    </div></section>`,

  "/curriculum": ()=>{
    const cat=state.category, list=MATERIALS.filter(m=>canSee(m)&&(!cat||m.category===cat));
    return `${banner("Curriculum","Empower your business with specialized curriculums built to drive innovation and strategic growth.")}
    <section class="band"><div class="wrap">
      <h2 class="section-title">Videos</h2>
      <div class="grid-4">${SESSIONS.map(s=>link("/curriculum/"+s.slug,`
        <div class="slide">${esc(s.card)}${s.sub?`<small>${esc(s.sub)}</small>`:""}</div>
        <div class="txt"><h3>${esc(s.title)}</h3><p>${esc(s.desc)}</p>${currentUser?statusChip(s.slug):""}</div>`,"card session-card")).join("")}</div>
      <div class="materials-head"><h2 class="section-title">Educational Materials</h2><button class="btn btn-blue" id="addMaterial">+ Add</button></div>
      <div class="chips" role="group" aria-label="Filter by category"><span class="lbl">Category:</span>${CATEGORIES.map(c=>`<button class="chip" data-cat="${esc(c)}" aria-pressed="${cat===c}">${c}</button>`).join("")}</div>
      <div class="grid-2">${list.length?list.map(m=>`<a class="card material" ${m.url?`href="${esc(m.url)}" target="_blank" rel="noopener"`:`href="#" data-nolink`}><div><span class="tag">${esc(m.category)}</span>${pendingBadge(m)?" "+pendingBadge(m):""}<h4>${esc(m.title)}</h4></div>${ICON_ARROW}</a>`).join(""):`<p class="empty">No ${esc(cat)} materials yet.</p>`}</div>
    </div></section>`;
  },

  "/resources": ()=>`
    ${banner("Resources","Get started and create your own startup")}
    <section class="band page-min"><div class="wrap narrow">
      <div class="tabs" role="tablist">
        <button role="tab" class="btn ${state.resTab==="website"?"btn-blue":"btn-outline"}" aria-selected="${state.resTab==="website"}" data-tab="website">Website</button>
        <button role="tab" class="btn ${state.resTab==="survey"?"btn-blue":"btn-outline"}" aria-selected="${state.resTab==="survey"}" data-tab="survey">Survey</button>
      </div>
      ${state.resTab==="website" ? `
      <form class="form-card" id="websiteForm">
        <div class="card-head"><h2>Create your website</h2><span class="powered">Powered by Lovable <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><defs><linearGradient id="lv" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FF6B2C"/><stop offset=".5" stop-color="#FF3D8B"/><stop offset="1" stop-color="#7B5CFF"/></linearGradient></defs><path fill="url(#lv)" d="M7 2a5 5 0 0 1 5 5v1h3a7 7 0 0 1 0 14H4a2 2 0 0 1-2-2V7a5 5 0 0 1 5-5z"/></svg></span></div>
        ${fieldsHTML([["w-name","Name","input",1],["w-problem","Problem","textarea",1],["w-solution","Solution","textarea",1],["w-features","Key features","textarea",1],["w-audience","Target audience","input",1],["w-uvp","Unique value proposition","input",1],["w-revenue","Revenue streams","input",1],["w-team","Introduction to the team","textarea",1],["w-survey","Survey link","url",0]])}
        <button class="btn btn-blue btn-block" type="submit">Create your website</button>
      </form>` : `
      <div class="form-card">
        <div class="card-head"><h2>Create your survey</h2><span class="powered">Powered by Google Forms <svg width="12" height="16" viewBox="0 0 24 32" aria-hidden="true">${ICON_FORMS.replace(/^<svg[^>]*>|<\/svg>$/g,"")}</svg></span></div>
        <a class="link-row" href="https://docs.google.com/forms/create" target="_blank" rel="noopener">${ICON_FORMS}<span>Create survey in Google Forms</span>${ICON_ARROW}</a>
      </div>`}
    </div></section>`,

  "/stories": ()=>`
    ${banner("Stories","Learn more about Pioneher through our stories")}
    <section class="band"><div class="wrap">
      <h2 class="section-title">Videos</h2>
      <div class="grid-3">${VIDEOS.map(id=>`
        <a class="video-card" href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener" data-yt="${id}" aria-label="Play video on YouTube">
          ${media(`https://img.youtube.com/vi/${id}/hqdefault.jpg`,"")}
          <span class="yt"><svg width="22" height="22" viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg></span>
          <span class="watch">Watch on YouTube</span>
        </a>`).join("")}</div>
      <div class="articles">
        <h2 class="section-title">Articles</h2>
        <div class="grid-3">${ARTICLES.filter(a=>a.type!=="pdf").map(a=>storyCard(a,true)).join("")}</div>
      </div>
      <div class="articles">
        <h2 class="section-title">PDF</h2>
        <div class="grid-3">${ARTICLES.filter(a=>a.type==="pdf").map(a=>storyCard(a,false)).join("")}</div>
      </div>
    </div></section>`,

  "/crowdfunding": ()=>{
    const f=state.fundFilter, list=FUNDRAISERS.filter(x=>canSee(x)&&(f==="all"||x.status===f));
    return `${banner("Fundraisers","Join people around the world raising funds to support women and the businesses they are passionate about.",`<button class="btn btn-white" id="startFund">Start your own fundraiser</button>`)}
    <section class="band page-min"><div class="wrap">
      <div class="filters" role="group" aria-label="Filter fundraisers">${[["all","All"],["in-progress","In progress"],["completed","Completed"]].map(([k,l])=>`<button class="btn ${f===k?"btn-blue":"btn-outline"}" data-fund="${k}" aria-pressed="${f===k}">${l}</button>`).join("")}</div>
      <div class="grid-3">${list.length?list.map(x=>link("/crowdfunding/"+x.slug,`
        ${media(x.image,"Fundraiser photo")}
        <div class="txt">${pendingBadge(x)?`<div class="card-badge">${pendingBadge(x)}</div>`:""}<h3>${esc(x.title)}</h3><p class="raised">${money(x.raised)} of ${money(x.goal)} raised</p>${bar(x)}</div>`,"card fund-card")).join(""):`<p class="empty">No fundraisers here yet. Be the first: press <b>Start your own fundraiser</b> above.</p>`}</div>
    </div></section>`;
  },

  "/apply": ()=>`
    ${banner("Application Form","Apply to join our program")}
    <section class="band page-min"><div class="wrap narrow">
      <form class="form-card" id="applyForm" data-collection="applications">
        <h2>Fill out the form below</h2>
        <input type="text" name="_honey" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true">
        ${fieldsHTML([["a-name","Name","input",1,"name"],["a-email","Email","email",1,"email"]])}
        <div class="field-row">${fieldsHTML([["a-address","Address","input",0,"address"],["a-phone","Phone","tel",0,"phone"]])}</div>
        ${fieldsHTML([["a-business","Business Name","input",1,"businessName"],["a-idea","Business idea","textarea",1,"businessIdea"]])}
        <button class="btn btn-blue btn-block" type="submit">Submit</button>
      </form>
    </div></section>`,

  "/contact": ()=>`
    ${banner("Contact Us","Contact us for any inquiries")}
    <section class="band page-min"><div class="wrap narrow">
      <form class="form-card" id="contactForm" data-collection="contacts">
        <h2>Tell us what you need</h2>
        <input type="text" name="_honey" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true">
        ${fieldsHTML([["c-name","Name","input",1,"name"],["c-email","Email","email",1,"email"],["c-phone","Phone","tel",0,"phone"],["c-message","Message","textarea",1,"message"]])}
        <button class="btn btn-blue btn-block" type="submit">Submit</button>
      </form>
    </div></section>`,

  "/profile": ()=>{
    if(!currentUser) return `${banner("My Profile","Log in to see your curriculum progress and fundraisers.",`<button class="btn btn-white" data-action="login">Login</button>`)}`;
    const done=SESSIONS.filter(s=>statusOf(s.slug)==="submitted").length;
    const next=SESSIONS.find(s=>statusOf(s.slug)!=="submitted");
    const mine=FUNDRAISERS.filter(f=>f.ownerUid && f.ownerUid===currentUser.uid);
    return `${banner("My Profile","Track your curriculum progress and fundraisers.")}
    <section class="band page-min"><div class="wrap profile">
      <aside class="profile-card">
        ${avatarHTML(currentUser)}
        <h2>${esc(currentUser.name)}</h2>
        <p>${esc(currentUser.email||"")}</p>
        ${next?link("/curriculum/"+next.slug,statusOf(next.slug)==="draft"?"Continue "+esc(next.title.split(":")[0]):"Start "+esc(next.title.split(":")[0]),"btn btn-blue btn-block"):`<p class="all-done">All sessions submitted 🎉</p>`}
        <button class="logout-link" data-action="logout">Log out</button>
      </aside>
      <div class="profile-main">
        ${isAdmin?reviewQueueHTML():""}
        <div class="form-card">
          <div class="prog-head"><h2>Curriculum progress</h2><b>${done} of ${SESSIONS.length} submitted</b></div>
          ${bar({raised:done,goal:SESSIONS.length})}
          <ul class="session-list">${SESSIONS.map(s=>{
            const p=progress[s.slug], st=statusOf(s.slug);
            return `<li><div><b>${esc(s.title)}</b><span class="when">${p?esc(statusLine(p)):"Not started yet"}</span></div>${statusChip(s.slug)}${link("/curriculum/"+s.slug,st==="submitted"?"Review":st==="draft"?"Continue":"Start","btn "+(st==="none"?"btn-blue":"btn-outline"))}</li>`}).join("")}</ul>
        </div>
        <div class="form-card">
          <div class="prog-head"><h2>My fundraisers</h2>${link("/crowdfunding","Browse fundraisers","text-link")}</div>
          ${mine.length?mine.map(f=>link("/crowdfunding/"+f.slug,`${media(f.image,"")}<div class="info"><b>${esc(f.title)}</b> ${pendingBadge(f)}<span class="when">${money(f.raised)} of ${money(f.goal)} raised · ${pct(f)}%</span></div>${ICON_ARROW}`,"mini-fund")).join("")
            :`<p class="empty">You haven't started a fundraiser yet. Start one from the Crowdfunding page.</p>`}
        </div>
        ${donationsCardHTML()}
        <div class="form-card danger-card">
          <h2>Delete account</h2>
          <p>Permanently delete your Pioneher account, worksheet answers, progress, and any fundraisers or materials you created. This can't be undone.</p>
          <button class="btn btn-danger-outline" id="deleteAccount">Delete my account</button>
        </div>
      </div>
    </div></section>`;
  }
};

function storyCard(a,showSource){
  let host=""; try{host=new URL(a.link).hostname.replace(/^www\./,"")}catch(e){}
  return `<a class="card article" href="${esc(a.link)}" target="_blank" rel="noopener" aria-label="${esc(a.title)}${a.type==="pdf"?" (PDF, opens in a new tab)":""}">
    ${media(a.image,a.type==="pdf"?"PDF":host)}
    <div class="txt">${showSource?`<span class="src">${esc(host)}</span>`:""}<h3>${esc(a.title)}</h3><p>${esc(a.desc)}</p></div>
  </a>`;
}
/* =====================================================================
   LEGAL PAGES — /privacy and /terms (used for Google OAuth branding)
   ===================================================================== */
const LEGAL_UPDATED = "November 4, 2026";
function legalPage(title, intro, body){
  return `${banner(title,`Last updated ${LEGAL_UPDATED}`)}
  <section class="band"><div class="wrap narrow">
    <article class="legal">
      <p class="legal-intro">${intro}</p>
      ${body}
    </article>
  </div></section>`;
}
const contactLink = () => link("/contact","Contact page");

function privacyHTML(){
  return legalPage("Privacy Policy",
  `This policy explains what information Pioneher collects when you use this website, how we use it, and the choices you have. Pioneher provides mentoring, funding, networking and resources to young female entrepreneurs.`,
  `
  <h2>1. Information we collect</h2>
  <h3>When you sign in with Google</h3>
  <p>We receive your name, email address, profile photo and a unique account ID from Google. We only request basic profile access. We never see or store your Google password.</p>
  <h3>When you use the curriculum</h3>
  <p>We store your worksheet answers, the links you share (for example a Canva or Google Drive link to your lean canvas or pitch deck), and whether each session is in progress or submitted, with the date.</p>
  <h3>When you fill in a form</h3>
  <ul>
    <li><b>Application:</b> name, email, address, phone, business name and business idea.</li>
    <li><b>Contact:</b> name, email, phone and your message.</li>
    <li><b>Donation pledge:</b> name, email and pledge amount.</li>
  </ul>
  <h3>When you publish something</h3>
  <p>Fundraisers (business name, goal, description and photo) and educational materials you add are shown publicly on the site.</p>
  <h3>On your device</h3>
  <p>Your browser saves unsent worksheet drafts and your sign-in session so the site works smoothly. We do not use advertising or tracking cookies.</p>

  <h2>2. How we use your information</h2>
  <ul>
    <li>To sign you in and show your profile and curriculum progress.</li>
    <li>To review program applications and reply to messages.</li>
    <li>To display fundraisers and materials you choose to publish.</li>
    <li>To keep the site secure and prevent spam and abuse.</li>
  </ul>
  <p>We do not sell your personal information, and we do not use it for advertising.</p>

  <h2>3. Google user data</h2>
  <p>Pioneher's use of information received from Google APIs follows the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener">Google API Services User Data Policy</a>, including the Limited Use requirements. We use your Google name, email and photo only to create and show your Pioneher account. We do not transfer this data to others except as needed to run the site, to comply with the law, or with your consent, and we never use it for ads.</p>

  <h2>4. Services we use</h2>
  <p>We rely on trusted providers to run the site. They process data only to provide their service:</p>
  <ul>
    <li><b>Google Firebase</b> for sign-in and secure data storage.</li>
    <li><b>FormSubmit</b> to deliver application and contact form submissions to our team by email.</li>
    <li><b>YouTube and Google Drive</b> to play videos when you press play.</li>
    <li><b>Google Fonts and jsDelivr</b> to load fonts and site code.</li>
    <li><b>Lovable</b>, only when you press “Create your website”: the details you typed are sent to Lovable to start building your site. Lovable's own privacy policy applies there.</li>
  </ul>
  <p>Links to Canva, Google Docs, Google Forms and news articles take you to other websites, which have their own policies.</p>

  <h2>5. How long we keep information</h2>
  <p>Account data, worksheet answers and progress are kept until you delete your account. Applications, messages and donation pledges are kept for as long as we need them to run the program, then deleted.</p>

  <h2>6. Your choices</h2>
  <ul>
    <li><b>View and edit</b> your worksheet answers at any time from your profile.</li>
    <li><b>Delete your account</b> from your profile page. This permanently removes your profile, worksheet answers, progress, and any fundraisers or materials you created.</li>
    <li><b>Ask us</b> to access, correct or delete anything else, such as an application or message, through our ${contactLink()}.</li>
    <li><b>Remove Pioneher's access</b> to your Google account anytime at <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener">myaccount.google.com/permissions</a>.</li>
  </ul>

  <h2>7. Young people</h2>
  <p>Pioneher is built for young entrepreneurs. If you are under 14, or under the age of digital consent where you live, please ask a parent or guardian for permission before creating an account or sending us a form. Parents and guardians can contact us to review or delete their child's information. If we learn that we collected information from a child without the required permission, we will delete it.</p>

  <h2>8. Security</h2>
  <p>Data is sent over encrypted connections, and our database rules let each person read only their own worksheets. No system is perfectly secure, so please don't put passwords or other sensitive information in worksheets or messages.</p>

  <h2>9. International users</h2>
  <p>Our service providers may store and process information in countries other than yours, including the United States. They protect it according to this policy and applicable law.</p>

  <h2>10. Changes to this policy</h2>
  <p>If we make important changes, we will update the date at the top of this page and, where appropriate, let you know on the site.</p>

  <h2>11. Contact us</h2>
  <p>Questions about privacy? Reach us through our ${contactLink()}.</p>
  `);
}

function termsHTML(){
  return legalPage("Terms of Service",
  `These terms are the rules for using the Pioneher website. By creating an account or using the site, you agree to them. If you don't agree, please don't use the site.`,
  `
  <h2>1. Who can use Pioneher</h2>
  <p>Pioneher is for young people learning about entrepreneurship and the people who support them. If you are under 14, or under the age of digital consent where you live, you need a parent's or guardian's permission to create an account or submit forms.</p>

  <h2>2. Your account</h2>
  <p>You sign in with your Google account. Keep it secure and let us know if you think someone else is using it. You can delete your Pioneher account anytime from your profile page.</p>

  <h2>3. Your content</h2>
  <p>You own the work you create here, including worksheet answers, links, fundraisers and materials. You give Pioneher permission to store and display that content only as needed to run the site, for example showing your published fundraiser to visitors. Only post content you have the right to share, and don't post other people's personal information.</p>

  <h2>4. Acceptable use</h2>
  <p>Please don't:</p>
  <ul>
    <li>Break the law or help anyone else do so.</li>
    <li>Harass, bully or impersonate anyone.</li>
    <li>Post false, misleading, hateful or explicit content.</li>
    <li>Send spam, upload harmful code, or try to access accounts or data that aren't yours.</li>
    <li>Interfere with the site or collect data from it automatically.</li>
  </ul>
  <p>We may remove content or suspend accounts that break these rules.</p>

  <h2>5. Fundraisers and donations</h2>
  <p>The site does not process payments. A “Donate” pledge records your intention to give; the fundraiser organizer or Pioneher will follow up about how to pay. Fundraiser descriptions and goals are written by their creators, and Pioneher does not guarantee how funds will be used. Please give only what you are comfortable giving. We may edit or remove any fundraiser.</p>

  <h2>6. Applications</h2>
  <p>Submitting an application does not guarantee a place in the program. We review applications and will contact you by email.</p>

  <h2>7. Educational content</h2>
  <p>The curriculum, materials and stories are for learning. They are not professional legal, financial or investment advice. Talk to a qualified professional before making important decisions.</p>

  <h2>8. Other websites and tools</h2>
  <p>The site links to and works with services we don't control, such as Lovable, Canva, Google Forms, YouTube and news websites. Their own terms and policies apply when you use them.</p>

  <h2>9. Ending your use</h2>
  <p>You can stop using Pioneher and delete your account anytime. We may suspend or close accounts that break these terms or put others at risk.</p>

  <h2>10. Disclaimers</h2>
  <p>We work hard to keep Pioneher useful and available, but the site is provided “as is”, without warranties of any kind, to the extent the law allows.</p>

  <h2>11. Limitation of liability</h2>
  <p>To the extent the law allows, Pioneher and its team are not responsible for indirect or unexpected losses arising from your use of the site, the content on it, or any fundraiser or donation.</p>

  <h2>12. Changes to these terms</h2>
  <p>We may update these terms. If we make important changes, we will update the date at the top of this page. Continuing to use the site means you accept the updated terms.</p>

  <h2>13. Contact us</h2>
  <p>Questions about these terms? Reach us through our ${contactLink()}. Our ${link("/privacy","Privacy Policy")} explains how we handle your information.</p>
  `);
}

/* =====================================================================
   DELETE ACCOUNT
   ===================================================================== */
async function deleteAccount(){
  const uid=currentUser.uid;
  if(FB_ON){
    await initFirebase();
    const user=fb.auth().currentUser;
    // Google requires a fresh sign-in before an account can be deleted.
    await user.reauthenticateWithPopup(new fb.auth.GoogleAuthProvider());
    const d=db(), batch=d.batch();
    const [ws,fr,mt]=await Promise.all([
      d.collection("users").doc(uid).collection("worksheets").get(),
      d.collection("fundraisers").where("ownerUid","==",uid).get(),
      d.collection("materials").where("ownerUid","==",uid).get()
    ]);
    [ws,fr,mt].forEach(snap=>snap.forEach(doc=>batch.delete(doc.ref)));
    batch.delete(d.collection("users").doc(uid));
    await batch.commit();
    await user.delete();
  }
  // Clear anything kept in this browser.
  try{ Object.keys(localStorage).filter(k=>k.startsWith("pioneher:ws:")||k==="pioneher:progress:"+uid||k==="pioneher:demoUser").forEach(k=>localStorage.removeItem(k)) }catch(e){}
  for(const list of [FUNDRAISERS,MATERIALS]) for(let i=list.length-1;i>=0;i--) if(list[i].ownerUid===uid) list.splice(i,1);
  progress={};
  if(!FB_ON) setUser(null); else { currentUser=null; renderChrome() }
}
function openDeleteAccount(){
  openModal(`
    <h2>Delete your account?</h2>
    <p class="sub">This permanently deletes your profile, worksheet answers and progress, and any fundraisers or materials you created. You can't undo this.</p>
    <div class="field"><label for="del-confirm">Type <b>DELETE</b> to confirm</label><input id="del-confirm" type="text" autocomplete="off" autocapitalize="characters" spellcheck="false"></div>
    ${FB_ON?`<p class="del-note">Google will ask you to sign in once more to confirm it's you.</p>`:""}
    <div id="delMsg"></div>
    <button class="btn btn-danger btn-block" id="delGo" disabled>Delete my account</button>
    <button class="btn btn-outline btn-block" id="delCancel" style="margin-top:10px">Keep my account</button>
  `, m=>{
    const inp=$("#del-confirm",m), go=$("#delGo",m);
    inp.addEventListener("input",()=>{ go.disabled = inp.value.trim().toUpperCase()!=="DELETE" });
    $("#delCancel",m).onclick=closeModal;
    go.onclick=async()=>{
      go.disabled=true; go.textContent="Deleting…";
      try{ await deleteAccount(); closeModal(); navigate("/"); toast("Your account has been deleted.") }
      catch(e){
        go.disabled=false; go.textContent="Delete my account";
        const msg = e.code==="auth/popup-closed-by-user"||e.code==="auth/cancelled-popup-request" ? "Sign-in was cancelled, so nothing was deleted."
                  : e.code==="auth/user-mismatch" ? "Please sign in with the same Google account you use for Pioneher."
                  : "Couldn't delete your account. Check your connection and try again.";
        $("#delMsg",m).innerHTML=`<p class="form-note warn">${msg}</p>`;
      }
    };
    setTimeout(()=>inp.focus(),50);
  });
}

function donationsCardHTML(){
  const total=myDonations.reduce((t,d)=>t+(Number(d.amount)||0),0);
  const fundTitle=slug=>FUNDRAISERS.find(f=>f.slug===slug)?.title || slug.replace(/-/g," ");
  return `<div class="form-card">
    <div class="prog-head"><h2>My donations</h2>${myDonations.length?`<b>${money(total)} given</b>`:""}</div>
    ${myDonations.length?`<ul class="don-list">${myDonations.map(d=>{
      const f=FUNDRAISERS.find(x=>x.slug===d.fundraiser&&canSee(x));
      const name=esc(fundTitle(d.fundraiser));
      return `<li><div class="dl-main">${f?link("/crowdfunding/"+f.slug,name,"dl-title"):`<span class="dl-title">${name}</span>`}<span class="when">${fmtDate(d.at)}</span></div><b class="dl-amt">${money(d.amount)}</b></li>`}).join("")}</ul>`
      :`<p class="empty">You haven't donated yet. ${link("/crowdfunding","Browse fundraisers","text-link")}</p>`}
  </div>`;
}
function reviewQueueHTML(){
  const items=[...FUNDRAISERS.filter(f=>f.approved===false).map(f=>({kind:"fundraisers",key:f.slug,type:"Fundraiser",title:f.title,by:f.ownerName,detail:`Goal ${money(f.goal)}`,view:link("/crowdfunding/"+f.slug,"View","text-link")})),
               ...MATERIALS.filter(m=>m.approved===false).map(m=>({kind:"materials",key:m.id,type:"Material · "+m.category,title:m.title,by:m.ownerName,detail:"",view:`<a class="text-link" href="${esc(m.url)}" target="_blank" rel="noopener">Open link</a>`}))];
  return `<div class="form-card review-card">
    <div class="prog-head"><h2>Review queue</h2><span class="status ${items.length?"draft":"submitted"}">${items.length?items.length+" waiting":"All clear"}</span></div>
    <p class="review-sub">New fundraisers and materials stay hidden until you approve them. Rejecting deletes the item.</p>
    ${items.length?`<ul class="review-list">${items.map(it=>`<li>
      <div class="ri-main"><span class="tag">${esc(it.type)}</span><b>${esc(it.title)}</b><span class="when">${it.by?"From "+esc(it.by):""}${it.by&&it.detail?" · ":""}${esc(it.detail)}</span></div>
      <div class="ri-actions">${it.view}<button class="btn btn-blue" data-review="${it.kind}|${esc(it.key)}|1">Approve</button><button class="btn btn-danger-outline" data-review="${it.kind}|${esc(it.key)}|0">Reject</button></div>
    </li>`).join("")}</ul>`:`<p class="empty">Nothing is waiting for review.</p>`}
  </div>`;
}
function worksheetHTML(s){
  const fields=WORKSHEETS[s.slug]; if(!fields) return "";
  const p=progress[s.slug], saved=(p&&p.answers)||store.get("ws:"+s.slug,{});
  const body=fields.map(f=>{
    if(f.type==="h") return `<h3 class="ws-h">${esc(f.text)}</h3>`;
    if(f.type==="link"){ const u=f.url(); return `<a class="center-link" ${u?`href="${esc(u)}" target="_blank" rel="noopener"`:`href="#" data-nolink`}>${esc(f.text)}</a>` }
    const id="ws-"+f.key;
    const label=f.label?`<label for="${id}" class="req">${esc(f.label)}</label>`:"";
    const hint=f.hint?`<div class="hint" id="${id}-hint">${fmtHint(f.hint)}</div>`:"";
    const desc=f.hint?` aria-describedby="${id}-hint"`:"";
    let ctrl;
    if(f.type==="url"){
      const v=typeof saved[f.key]==="string"?saved[f.key]:"";
      ctrl=`<input type="url" id="${id}" name="${f.key}" required${desc} placeholder="https://www.canva.com/design/…" value="${esc(v)}">${v?`<a class="file-meta" href="${esc(v)}" target="_blank" rel="noopener">Open my link</a>`:""}`;
    } else if(f.type==="line"){
      ctrl=`<input type="text" id="${id}" name="${f.key}" required${desc} value="${esc(saved[f.key]||"")}">`;
    } else {
      ctrl=`<textarea id="${id}" name="${f.key}" required${desc}${f.tall?' class="tall"':""}>${esc(saved[f.key]||"")}</textarea>`;
    }
    return `<div class="field">${label}${hint}${ctrl}</div>`;
  }).join("");
  const submitted=p&&p.status==="submitted";
  return `<form class="form-card ws" id="worksheet" data-slug="${s.slug}" novalidate>
    <div class="card-head"><h2>${esc(s.title.split(":")[0])} Worksheet</h2>${currentUser?statusChip(s.slug):""}</div>
    <div class="field"><label for="ws-name" class="req">Name</label><input id="ws-name" name="name" type="text" required value="${esc(saved.name||currentUser?.name||"")}"></div>
    ${body}
    ${currentUser?`<button class="btn btn-blue btn-block" type="submit">${submitted?"Update submission":"Submit"}</button>`
      :`<button class="btn btn-muted btn-block" type="button" data-action="login">Please login to save your answers</button>`}
    <p class="save-state" id="saveState" aria-live="polite">${currentUser?esc(statusLine(p)):""}</p>
  </form>`;
}

function sessionView(s){
  const drive=`https://drive.google.com/file/d/${s.fileID}`;
  const i=SESSIONS.indexOf(s), prev=SESSIONS[i-1], next=SESSIONS[i+1];
  const L=`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg>`;
  const R=`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>`;
  const pager=`<nav class="pager" aria-label="Sessions">
      ${prev?link("/curriculum/"+prev.slug,`<span class="pg-dir">${L}Previous</span><span class="pg-title">${esc(prev.title)}</span>`,"pg prev"):`<span class="pg-spacer"></span>`}
      ${next?link("/curriculum/"+next.slug,`<span class="pg-dir">Next${R}</span><span class="pg-title">${esc(next.title)}</span>`,"pg next")
            :link("/curriculum",`<span class="pg-dir">Finish${R}</span><span class="pg-title">Back to all sessions</span>`,"pg next")}
    </nav>`;
  return `<section class="band"><div class="wrap">
    ${link("/curriculum",`${L}<span>Back to Curriculum</span>`,"back-link")}
    <div class="detail-video" id="detailVideo">
      <div class="slide">${esc(s.card)}${s.sub?`<small>${esc(s.sub)}</small>`:""}</div>
      <button class="play" id="playSession" aria-label="Play session video"><svg width="22" height="22" viewBox="0 0 24 24" fill="#fff"><path d="M8 5v14l11-7z"/></svg></button>
      <a class="open-ext" href="${drive}/view" target="_blank" rel="noopener" aria-label="Open video in Google Drive"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg></a>
    </div>
    <div class="stack">
      <div class="title-card"><h1>${esc(s.title)}</h1><p>${esc(s.desc)}</p></div>
      ${worksheetHTML(s)}
    </div>
    ${pager}
  </div></section>`;
}
function fundView(x){
  return `<section class="band"><div class="wrap fund-detail">
    <div>
      ${x.approved===false?`<div class="pending-banner"><div><b>Pending review.</b> ${isAdmin?"Only you (admin) and the creator can see this fundraiser.":"Only you and the admin can see this until it's approved."}</div>${isAdmin?`<div class="pb-actions"><button class="btn btn-blue" data-review="fundraisers|${esc(x.slug)}|1">Approve</button><button class="btn btn-danger-outline" data-review="fundraisers|${esc(x.slug)}|0">Reject</button></div>`:""}</div>`:""}
      ${media(x.image,"Fundraiser photo")}
      <div class="fund-info">
        <h1>${esc(x.title)}</h1>
        <div class="row"><span>${money(x.raised)} of ${money(x.goal)} raised</span><b>${pct(x)}%</b></div>
        ${bar(x)}
        <h2>Description</h2>
        <p>${esc(x.desc)}</p>
      </div>
    </div>
    <form class="form-card donate-card" id="donateForm" data-slug="${x.slug}">
      <h2>Donate</h2>
      ${fieldsHTML([["d-name","Name","input",1,"name"],["d-email","Email","email",1,"email"],["d-amount","Amount ($ dollars)","number",1,"amount"]])}
      <button class="btn btn-blue btn-block" type="submit">Donate Now</button>
      ${currentUser?`<p class="don-hint">Your donation will appear on ${link("/profile","your profile","text-link")}.</p>`:`<p class="don-hint"><button type="button" class="link-btn" data-action="login">Log in</button> to keep track of your donations on your profile.</p>`}
    </form>
  </div></section>`;
}
function notFound(){return `${banner("Page not found","That page doesn't exist. Head back to the homepage.",link("/","Go home","btn btn-white"))}`}

const state={category:null,resTab:"website",fundFilter:"all"};
// Page titles and descriptions (also used to build each page's <head> for launch).
const PAGE_META = {
  "/":            {"title":"Pioneher | Mentoring and Funding Youth Female Entrepreneurs","desc":"Pioneher mentors and funds young female entrepreneurs with a free startup curriculum, founder stories, resources and crowdfunding."},
  "/about":       {"title":"About | Pioneher","desc":"Why Pioneher exists: gender inequality limits women founders. Meet our mission and the team supporting young female entrepreneurs."},
  "/curriculum":  {"title":"Curriculum | Pioneher","desc":"Five free video sessions with worksheets on idea development, the lean canvas, business strategy, pitch decks and building an MVP."},
  "/resources":   {"title":"Resources | Pioneher","desc":"Free tools to launch your startup: turn your business idea into a website and create customer surveys in minutes."},
  "/stories":     {"title":"Stories | Pioneher","desc":"Videos, articles and reports about successful female founders to inspire the next generation of women entrepreneurs."},
  "/crowdfunding":{"title":"Crowdfunding | Pioneher","desc":"Support young women and the businesses they are passionate about, or start your own fundraiser on Pioneher."},
  "/apply":       {"title":"Join / Apply | Pioneher","desc":"Apply to join Pioneher's mentoring program for young female entrepreneurs."},
  "/contact":     {"title":"Contact | Pioneher","desc":"Get in touch with the Pioneher team with any questions."},
  "/profile":     {"title":"My Profile | Pioneher","desc":"Your Pioneher profile: curriculum progress, donations and fundraisers."},
  "/privacy":     {"title":"Privacy Policy | Pioneher","desc":"How Pioneher collects, uses and protects your information."},
  "/terms":       {"title":"Terms of Service | Pioneher","desc":"The rules for using the Pioneher website."}
};
function setMeta(title,desc){
  document.title=title;
  const m=document.querySelector('meta[name="description"]'); if(m&&desc) m.setAttribute("content",desc);
}
const TITLES={"/":"Pioneher","/about":"About","/curriculum":"Curriculum","/resources":"Resources","/stories":"Stories","/crowdfunding":"Crowdfunding","/apply":"Join / Apply","/contact":"Contact","/profile":"My Profile","/privacy":"Privacy Policy","/terms":"Terms of Service"};

function render(scrollTop=true){
  const path=currentPath(); let html, title;
  // Don't wipe a worksheet the person is typing in when background data arrives.
  if(!scrollTop && document.activeElement && document.activeElement.closest && document.activeElement.closest("#worksheet")) { renderChrome(); return }
  if(VIEWS[path]){ html=VIEWS[path](); title=TITLES[path] }
  else if(path.startsWith("/curriculum/")){ const s=SESSIONS.find(x=>x.slug===path.split("/")[2]); html=s?sessionView(s):notFound(); title=s?.title }
  else if(path.startsWith("/crowdfunding/")){ const f=FUNDRAISERS.find(x=>x.slug===path.split("/")[2]&&canSee(x)); html=f?fundView(f):notFound(); title=f?.title }
  else { html=notFound(); title="Not found" }
  $("#app").innerHTML=html;
  const pm=PAGE_META[path];
  if(pm) setMeta(pm.title,pm.desc);
  else if(path.startsWith("/curriculum/")){ const s=SESSIONS.find(x=>x.slug===path.split("/")[2]); setMeta(s?`${s.title} | Pioneher`:"Page not found | Pioneher", s?.desc) }
  else if(path.startsWith("/crowdfunding/")){ const f=FUNDRAISERS.find(x=>x.slug===path.split("/")[2]); setMeta(f?`${f.title} | Fundraiser | Pioneher`:"Page not found | Pioneher", f?.desc) }
  else setMeta("Page not found | Pioneher");
  renderChrome(); bindView();
  if(scrollTop) window.scrollTo(0,0);
}

/* =====================================================================
   VIEW BEHAVIOUR
   ===================================================================== */
function bindView(){
  const app=$("#app");
  app.querySelectorAll("[data-cat]").forEach(b=>b.onclick=()=>{state.category=state.category===b.dataset.cat?null:b.dataset.cat;render(false)});
  app.querySelectorAll("[data-tab]").forEach(b=>b.onclick=()=>{state.resTab=b.dataset.tab;render(false)});
  app.querySelectorAll("[data-fund]").forEach(b=>b.onclick=()=>{state.fundFilter=b.dataset.fund;render(false)});
  app.querySelectorAll("[data-nolink]").forEach(a=>a.onclick=e=>{e.preventDefault();toast("This link is coming soon.")});

  // Videos embed inline on your live site; previews open YouTube in a new tab.
  if(!FRAMED) app.querySelectorAll("[data-yt]").forEach(a=>a.onclick=e=>{
    e.preventDefault(); a.innerHTML=`<iframe src="https://www.youtube-nocookie.com/embed/${a.dataset.yt}?autoplay=1" title="YouTube video" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
  });
  const play=$("#playSession");
  if(play) play.onclick=()=>{
    const s=SESSIONS.find(x=>x.slug===currentPath().split("/")[2]);
    if(FRAMED){ window.open(`https://drive.google.com/file/d/${s.fileID}/view`,"_blank","noopener"); return }
    $("#detailVideo").innerHTML=`<iframe src="https://drive.google.com/file/d/${s.fileID}/preview" allow="autoplay" allowfullscreen title="${esc(s.title)}"></iframe>`;
  };

  bindWorksheet();
  app.querySelectorAll("[data-review]").forEach(b=>b.onclick=async()=>{
    const [kind,key,ok]=b.dataset.review.split("|"); const approve=ok==="1";
    b.disabled=true;
    try{ await reviewItem(kind,key,approve); toast(approve?"Approved. It's now live on the site.":"Rejected and removed.");
      if(!approve && currentPath().startsWith("/crowdfunding/")) navigate("/profile"); else render(false) }
    catch(e){ b.disabled=false; toast("Couldn't update. Check your connection and try again.") }
  });
  const del=$("#deleteAccount"); if(del) del.onclick=openDeleteAccount;

  ["#applyForm","#contactForm"].forEach(sel=>{const f=$(sel); if(!f)return;
    const isApply=sel==="#applyForm";
    f.onsubmit=async e=>{e.preventDefault();
      const btn=f.querySelector("[type=submit]"), label=btn.textContent;
      f.querySelector(".form-note")?.remove();
      const all=Object.fromEntries(new FormData(f));
      const done=msg=>{ f.reset(); btn.insertAdjacentHTML("afterend",`<p class="form-note">${msg}</p>`) };
      const okMsg=isApply?"Thanks for applying. We'll review your application and email you.":"Thanks for reaching out. We'll get back to you soon.";
      if(all._honey){ done(okMsg); return }               // spam bot filled the hidden field
      const data={}; Object.keys(all).forEach(k=>{ if(!k.startsWith("_")) data[k]=all[k].trim() });
      btn.disabled=true; btn.textContent="Sending…";
      const email = isApply
        ? {"Name":data.name,"Email":data.email,"Address":data.address||"—","Phone":data.phone||"—","Business name":data.businessName,"Business idea":data.businessIdea}
        : {"Name":data.name,"Email":data.email,"Phone":data.phone||"—","Message":data.message};
      const subject = isApply ? `New Pioneher application: ${data.businessName} (${data.name})` : `New Pioneher message from ${data.name}`;
      const [sent,saved]=await Promise.allSettled([sendEmail(subject,email,data.email), FB_ON?saveRecord(f.dataset.collection,data):Promise.reject()]);
      btn.disabled=false; btn.textContent=label;
      if(sent.status==="fulfilled"||saved.status==="fulfilled") done(sent.value==="preview"?okMsg+" (Preview only: on your live site this is emailed to you.)":okMsg);
      else btn.insertAdjacentHTML("afterend",`<p class="form-note warn">Couldn't send right now. Check your connection and try again.</p>`);
    }});
  const don=$("#donateForm");
  if(don){
    if(currentUser){ don.elements.name.value=currentUser.name||""; don.elements.email.value=currentUser.email||"" }
    don.onsubmit=async e=>{e.preventDefault();
      const d=Object.fromEntries(new FormData(don));
      d.name=d.name.trim(); d.email=d.email.trim(); d.amount=Math.round(Number(d.amount)*100)/100; d.fundraiser=don.dataset.slug;
      don.querySelector(".form-note")?.remove();
      if(!(d.amount>0)){ don.insertAdjacentHTML("beforeend",`<p class="form-note warn">Enter an amount of at least $1.</p>`); return }
      const btn=don.querySelector("[type=submit]"); btn.disabled=true; btn.textContent="Sending…";
      try{
        await recordDonation(d);
        if(currentUser) myDonations.unshift({...d,uid:currentUser.uid,at:Date.now()});
        const title=FUNDRAISERS.find(f=>f.slug===d.fundraiser)?.title||"this fundraiser";
        render(false);                                   // show the new total
        const don2=$("#donateForm"); if(!don2) return;
        don2.outerHTML=`<div class="form-card donate-card thanks-card" role="status">
          <div class="thanks-icon" aria-hidden="true"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></div>
          <h2>Thank you for your donation!</h2>
          <p>${esc(d.name)}, your ${money(d.amount)} donation to <b>${esc(title)}</b> means a lot.</p>
          ${currentUser?link("/profile","View my donations","btn btn-blue btn-block"):""}
          <button class="btn btn-outline btn-block" id="donateAgain">Make another donation</button>
        </div>`;
        $("#donateAgain")?.addEventListener("click",()=>render(false));
      }catch(err){ btn.disabled=false; btn.textContent="Donate Now"; don.insertAdjacentHTML("beforeend",`<p class="form-note warn">Couldn't send your donation. Check your connection and try again.</p>`) }
    };
  }
  const wf=$("#websiteForm");
  if(wf) wf.onsubmit=e=>{e.preventDefault();
    const v=id=>wf.querySelector("#"+id).value.trim();
    const prompt=`Build a modern, responsive landing page for my startup "${v("w-name")}".\n\nProblem: ${v("w-problem")}\nSolution: ${v("w-solution")}\nKey features: ${v("w-features")}\nTarget audience: ${v("w-audience")}\nUnique value proposition: ${v("w-uvp")}\nRevenue streams: ${v("w-revenue")}\nTeam: ${v("w-team")}${v("w-survey")?`\nInclude a button linking to our survey: ${v("w-survey")}`:""}`;
    const url="https://lovable.dev/?autosubmit=true#prompt="+encodeURIComponent(prompt);
    wf.querySelector(".form-note")?.remove();
    // Open Lovable straight away with the prompt filled in (same as the Bubble link).
    const w=window.open(url,"_blank");
    if(w){ try{w.opener=null}catch(e){} return }
    // Popup blocked (or inside a preview): show the link instead.
    wf.insertAdjacentHTML("beforeend",`<p class="form-note">Your website prompt is ready. <a href="${url}" target="_blank" rel="noopener" style="color:var(--blue);font-weight:600;text-decoration:underline">Open it in Lovable</a></p>`);
  };
  const add=$("#addMaterial");
  if(add) add.onclick=()=>{ if(!requireLogin())return;
    openModal(`<h2>Add material</h2><p class="sub">Share a template or guide with other founders.</p>
      <form id="matForm"><div class="field"><label for="m-cat" class="req">Category</label><select id="m-cat" required>${CATEGORIES.map(c=>`<option>${c}</option>`).join("")}</select></div>
      ${fieldsHTML([["m-title","Title","input",1],["m-url","Link","url",1]])}<p class="del-note">${isAdmin?"As the admin, this appears right away.":"The Pioneher team reviews materials before they appear on the site."}</p><button class="btn btn-blue btn-block" type="submit">${isAdmin?"Add material":"Submit for review"}</button></form>`,
      m=>$("#matForm",m).onsubmit=async e=>{e.preventDefault();
        const rec={category:$("#m-cat",m).value,title:$("#m-title",m).value.trim(),url:$("#m-url",m).value.trim(),ownerUid:currentUser.uid,ownerName:currentUser.name||"",approved:isAdmin};
        try{ const id=await writeDoc("materials",rec); MATERIALS.push({...rec,id}); closeModal(); render(false); toast(isAdmin?"Material added.":"Sent for review. It will appear once the admin approves it.") }
        catch(err){ toast("Couldn't add the material. Try again.") }});
  };
  const sf=$("#startFund");
  if(sf) sf.onclick=()=>{ if(!requireLogin())return;
    openModal(`<h2>Start a fundraiser</h2><p class="sub">Tell supporters about your business and your goal.</p>
      <form id="fundForm">${fieldsHTML([["f-title","Business name","input",1],["f-goal","Goal ($ dollars)","number",1],["f-desc","Description","textarea",1]])}
      <div class="field"><label for="f-photo">Photo</label><div class="upload" data-photo><input type="file" id="f-photo" accept="image/*"><span class="upload-text">Click to upload a photo</span></div></div>
      <p class="del-note">${isAdmin?"As the admin, your fundraiser goes live right away.":"The Pioneher team reviews every fundraiser before it appears on the site."}</p><button class="btn btn-blue btn-block" type="submit">${isAdmin?"Publish fundraiser":"Submit for review"}</button></form>`,
      m=>{
        const ph=$("#f-photo",m); ph.onchange=()=>{ if(ph.files[0]){ m.querySelector("[data-photo]").classList.add("has-file"); m.querySelector("[data-photo] .upload-text").textContent="✓ "+ph.files[0].name } };
        $("#fundForm",m).onsubmit=async e=>{e.preventDefault();
          const btn=e.target.querySelector("[type=submit]"); btn.disabled=true; btn.textContent="Publishing…";
          const title=$("#f-title",m).value.trim(); let slug=slugify(title)||"fundraiser"; while(FUNDRAISERS.some(f=>f.slug===slug)) slug+="-2";
          try{
            let image="";
            const file=ph.files[0];
            if(file) image=await compressImage(file);
            const rec={title,goal:+$("#f-goal",m).value,raised:0,desc:$("#f-desc",m).value.trim(),image,status:"in-progress",ownerUid:currentUser.uid,ownerName:currentUser.name||"",approved:isAdmin};
            await writeDoc("fundraisers",rec,slug);
            FUNDRAISERS.push({...rec,slug}); closeModal(); navigate("/crowdfunding/"+slug); toast(isAdmin?"Fundraiser published.":"Sent for review. It will go live once the admin approves it.");
          }catch(err){ btn.disabled=false; btn.textContent="Publish fundraiser"; toast("Couldn't publish. Try again.") }
        };
      });
  };
}

function bindWorksheet(){
  const ws=$("#worksheet"); if(!ws) return;
  const slug=ws.dataset.slug, fields=WORKSHEETS[slug], stateEl=$("#saveState");
  const collect=()=>{
    const a={name:ws.elements.name.value};
    fields.forEach(f=>{ if(!f.key) return; a[f.key]=(ws.elements[f.key]?.value||"").trim() });
    return a;
  };
  let timer;
  const draft=()=>{
    store.set("ws:"+slug,collect());
    if(!currentUser) return;
    clearTimeout(timer); stateEl.textContent="Saving…";
    timer=setTimeout(async()=>{
      try{ await saveProgress(slug,collect(),false); stateEl.textContent=statusLine(progress[slug]); const chip=ws.querySelector(".card-head .status"); if(chip) chip.outerHTML=statusChip(slug) }
      catch(e){ stateEl.textContent="Couldn't save. Check your connection." }
    },900);
  };
  ws.addEventListener("input",draft);
  ws.onsubmit=async e=>{
    e.preventDefault(); if(!requireLogin()) return;
    const empty=[...ws.querySelectorAll("[required]")].find(el=>!el.value.trim());
    if(empty){ empty.focus(); empty.scrollIntoView({block:"center"}); toast("Fill in every required answer before submitting."); return }
    const badLink=[...ws.querySelectorAll('input[type="url"]')].find(el=>!/^https:\/\/\S+\.\S+/.test(el.value.trim()));
    if(badLink){ badLink.focus(); badLink.scrollIntoView({block:"center"}); toast("Paste a full link that starts with https://"); return }
    const btn=ws.querySelector("[type=submit]"); btn.disabled=true;
    try{
      clearTimeout(timer);
      await saveProgress(slug,collect(),true);
      stateEl.textContent=statusLine(progress[slug]); btn.textContent="Update submission";
      const chip=ws.querySelector(".card-head .status"); if(chip) chip.outerHTML=statusChip(slug);
      toast("Worksheet submitted. Your progress is on your profile.");
    }catch(err){ toast("Couldn't submit. Check your connection and try again.") }
    btn.disabled=false;
  };
}

/* =====================================================================
   BOOT
   ===================================================================== */
// GitHub Pages deep-link support: 404.html redirects here with ?p=/path
(function(){ if(HASH_MODE) return; const q=new URLSearchParams(location.search).get("p"); if(q) history.replaceState({},"",BASE+q) })();
if(FB_ON){ render(); initFirebase().catch(()=>{}) }
else { const u=store.get("demoUser",null); if(u){ currentUser=u; progress=store.get("progress:"+u.uid,{}) } render(); checkAdmin(u).then(a=>{ if(a){ isAdmin=true; render(false) } }); loadDonations().then(()=>{ if(currentPath()==="/profile") render(false) }) }
