import React, { useState } from "react";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
//import blogImg from "/blogs/blogs.webp";
import FloatUpText from "../components/floatUpText";
import AnimatedHeading from "../components/animatedHeading";

/* ---------------- BLOG DATA ---------------- */
const blogData = [
  {
  id: 1,
  image: "/blogs/homesearching.webp",
  date: "March 05, 2026",
  title: "What to Look for During a Home Inspection: A Complete Checklist",
  desc: "Buying a home is an exciting milestone, but before you sign on the dotted line, it’s essential to ensure that...",
  tag: "Property",
 content: (
  <div className="space-y-6">
    <p>
      Buying a home is an exciting milestone, but before you sign on the dotted line, it’s essential to ensure that the property is in good condition. A home inspection is your opportunity to assess the overall state of the home, identify potential issues, and avoid unexpected repair costs after moving in. While a professional home inspector will evaluate the property in detail, knowing what to look for during the inspection can help you ask the right questions and make an informed decision.
    </p>

    <p>
      Here’s a <strong>comprehensive checklist</strong> of the most critical areas to examine during a home inspection.
    </p>

    <h3 className="font-semibold text-lg">1. Structural Integrity: Foundation and Framing</h3>
    <p>
      The foundation and structural components are the backbone of any home. Issues with the foundation can lead to costly repairs, making it essential to inspect for:
    </p>
    <strong>What to Check:</strong>
    <ul className="list-disc ml-6">
      <li>Cracks in the foundation, walls, and ceilings</li>
      <li>Uneven or sloping floors</li>
      <li>Doors and windows that don’t close properly</li>
      <li>Signs of water intrusion in the basement or crawl space</li>
    </ul>
    <p>
      Structural problems may not be immediately visible, so pay close attention to any signs of settling or shifting.
    </p>

    <h3 className="font-semibold text-lg">2. Roof and Gutters: Protecting Your Investment</h3>
    <p>
      A damaged roof can lead to water leaks, mold growth, and costly repairs. Since roof replacements are expensive, it’s crucial to assess its condition.
    </p>
    <strong>What to Check:</strong>
    <ul className="list-disc ml-6">
      <li>Missing, cracked, or curling shingles</li>
      <li>Signs of water damage or leaks in the attic</li>
      <li>Adequate drainage and properly functioning gutters</li>
      <li>Chimney condition and flashing</li>
    </ul>
    <p>
      If the roof is nearing the end of its lifespan, negotiate repairs or replacement with the seller.
    </p>

    <h3 className="font-semibold text-lg">3. Plumbing System: Water Flow and Drainage</h3>
    <p>
      A faulty plumbing system can lead to leaks, water damage, and high utility bills. During the inspection, assess the condition of the pipes and fixtures.
    </p>
    <strong>What to Check:</strong>
    <ul className="list-disc ml-6">
      <li>Water pressure and drainage in sinks, showers, and tubs</li>
      <li>Visible leaks under sinks and around toilets</li>
      <li>Condition of the water heater and its age</li>
      <li>Signs of corrosion or rust in pipes</li>
    </ul>
    <p>
      Older homes may have outdated plumbing that could need replacement, so be vigilant.
    </p>

    <h3 className="font-semibold text-lg">4. Electrical System: Safety and Efficiency</h3>
    <p>
      An outdated or improperly wired electrical system can be a safety hazard and may not meet modern codes.
    </p>
    <strong>What to Check:</strong>
    <ul className="list-disc ml-6">
      <li>Proper grounding and wiring</li>
      <li>Functioning outlets, switches, and light fixtures</li>
      <li>Breaker panel condition and capacity</li>
      <li>Presence of GFCI outlets in kitchens and bathrooms</li>
    </ul>
    <p>
      Ask the inspector if the system can handle modern appliances and devices, especially in older homes.
    </p>

    <h3 className="font-semibold text-lg">5. HVAC System: Heating, Ventilation, and Air Conditioning</h3>
    <p>
      The HVAC system is essential for maintaining comfort and air quality in your home. Repairing or replacing HVAC systems can be expensive, so it’s important to assess their condition.
    </p>
    <strong>What to Check:</strong>
    <ul className="list-disc ml-6">
      <li>Age and condition of the furnace and air conditioning units</li>
      <li>Proper functioning of the thermostat</li>
      <li>Cleanliness of air filters and ducts</li>
      <li>Any unusual noises or odors when the system runs</li>
    </ul>
    <p>
      An inefficient HVAC system can lead to high utility bills, so make sure it’s working properly.
    </p>

    <h3 className="font-semibold text-lg">6. Walls, Ceilings, and Floors: Signs of Damage</h3>
    <p>
      Cosmetic issues are usually easy to fix, but cracks, stains, and uneven surfaces can indicate deeper structural or moisture problems.
    </p>
    <strong>What to Check:</strong>
    <ul className="list-disc ml-6">
      <li>Cracks or discoloration in walls and ceilings</li>
      <li>Uneven or sagging floors</li>
      <li>Signs of mold, mildew, or water damage</li>
      <li>Gaps or warping in flooring materials</li>
    </ul>
    <p>
      Mold or water damage may require extensive remediation, so look closely for any warning signs.
    </p>

    <h3 className="font-semibold text-lg">7. Windows and Doors: Security and Energy Efficiency</h3>
    <strong>What to Check:</strong>
    <ul className="list-disc ml-6">
      <li>Proper sealing and insulation to prevent drafts</li>
      <li>Lock functionality for security</li>
      <li>Signs of rot or deterioration in wooden frames</li>
      <li>Double-paned windows for energy efficiency</li>
    </ul>
    <p>
      Poorly sealed windows and doors can lead to higher heating and cooling costs.
    </p>

    <h3 className="font-semibold text-lg">8. Exterior and Drainage: Keeping the Home Safe</h3>
    <strong>What to Check:</strong>
    <ul className="list-disc ml-6">
      <li>Cracks or damage to siding, stucco, or brickwork</li>
      <li>Proper grading to direct water away from the foundation</li>
      <li>Condition of decks, porches, and patios</li>
      <li>Stability of retaining walls</li>
    </ul>
    <p>
      Poor drainage can cause serious foundation issues, so ensure that water is being directed away from the home.
    </p>

    <h3 className="font-semibold text-lg">9. Basement and Attic: Hidden Problems</h3>
    <strong>What to Check:</strong>
    <ul className="list-disc ml-6">
      <li>Signs of moisture, mold, or mildew</li>
      <li>Adequate insulation and ventilation</li>
      <li>Pests or rodent activity</li>
      <li>Condition of beams and support structures</li>
    </ul>
    <p>
      These areas provide clues to the overall condition of the home, so don’t overlook them.
    </p>

    <h3 className="font-semibold text-lg">Final Thoughts</h3>
    <p>
      A thorough home inspection is an essential step in the home-buying process, helping you avoid costly surprises and giving you peace of mind. While a qualified home inspector will evaluate the home’s condition, understanding what to look for allows you to make a more informed decision.
    </p>
    <p>
      Ready to move forward with confidence? Use this checklist during your home inspection to ensure your dream home is as good as it looks!
    </p>
  </div>
),

},

  {
    id: 2,
    image: "/blogs/creditscore.webp",
    date: "March 05, 2026",
    title: "How to Improve Your Credit Score Before Buying a House",
    desc: "If you’re planning to buy a house, your credit score plays a critical role in determining whether you’ll get approved...",
    tag: "Real estate",
    content: (
  <div className="space-y-6">
    <p>
      If you’re planning to buy a house, your credit score plays a critical role in determining whether you’ll get approved for a mortgage and what interest rate you’ll qualify for. A higher credit score can lead to lower interest rates and better loan terms, saving you thousands over the life of your mortgage. However, if your credit score isn’t where you’d like it to be, don’t worry — there are several steps you can take to improve it before applying for a home loan.
    </p>

    <p>
      Here’s a <strong>step-by-step guide</strong> on how to boost your credit score and get one step closer to owning your dream home.
    </p>

    <h3 className="font-semibold text-lg">1. Check Your Credit Report for Errors</h3>
    <p>
      Errors in your credit report can drag down your score without you even knowing. Inaccurate information, such as missed payments that were actually made or accounts that don’t belong to you, can negatively impact your credit.
    </p>
    <strong>How to Fix It:</strong>
    <ul className="list-disc ml-6">
      <li>Request a free credit report from all three major credit bureaus — Equifax, Experian, and TransUnion — at AnnualCreditReport.com.</li>
      <li>Review the report for inaccuracies and dispute any errors immediately.</li>
      <li>Correcting errors can result in a quick boost to your credit score.</li>
    </ul>

    <h3 className="font-semibold text-lg">2. Pay Down Outstanding Debt</h3>
    <p>
      Your credit utilization ratio — the amount of available credit you’re using — accounts for about 30% of your credit score. A high utilization ratio can lower your score, even if you make payments on time.
    </p>
    <strong>How to Fix It:</strong>
    <ul className="list-disc ml-6">
      <li>Aim to keep your credit utilization below 30% of your total credit limit.</li>
      <li>Pay down balances on high-interest credit cards first.</li>
      <li>Consider making extra payments throughout the month to reduce your balance faster.</li>
    </ul>

    <h3 className="font-semibold text-lg">3. Make All Payments on Time</h3>
    <p>
      Your payment history makes up 35% of your credit score, making it the most important factor. Even a single missed or late payment can significantly impact your score.
    </p>
    <strong>How to Fix It:</strong>
    <ul className="list-disc ml-6">
      <li>Set up automatic payments or reminders to ensure bills are paid on time.</li>
      <li>If you’ve missed a payment, try to bring the account current as soon as possible.</li>
      <li>Consistently making on-time payments over several months can significantly boost your score.</li>
    </ul>

    <h3 className="font-semibold text-lg">4. Avoid Opening New Credit Accounts Too Close to Buying</h3>
    <p>
      Every time you apply for new credit, a hard inquiry is made, which can lower your credit score by a few points. Opening several new accounts in a short period can also make lenders view you as a higher risk.
    </p>
    <strong>How to Fix It:</strong>
    <ul className="list-disc ml-6">
      <li>Avoid applying for new credit cards or loans 6–12 months before applying for a mortgage.</li>
      <li>Focus on managing your existing credit accounts responsibly.</li>
    </ul>

    <h3 className="font-semibold text-lg">5. Increase Your Credit Limits</h3>
    <p>
      If you have a good payment history, you may be able to increase your credit limits, which can help lower your credit utilization ratio.
    </p>
    <strong>How to Fix It:</strong>
    <ul className="list-disc ml-6">
      <li>Contact your credit card issuer and request a credit limit increase.</li>
      <li>Make sure not to increase your spending after your limit is raised.</li>
    </ul>

    <h3 className="font-semibold text-lg">6. Become an Authorized User on a Trusted Account</h3>
    <p>
      If you have a family member or trusted friend with a strong credit history, becoming an authorized user on their account can give your credit score a boost. You’ll benefit from their positive payment history, which gets reflected on your credit report.
    </p>
    <strong>How to Fix It:</strong>
    <ul className="list-disc ml-6">
      <li>Ask someone with a solid credit record to add you as an authorized user.</li>
      <li>Ensure that the account has a low balance and a history of on-time payments.</li>
    </ul>

    <h3 className="font-semibold text-lg">7. Consider a Credit-Builder Loan or Secured Credit Card</h3>
    <p>
      If you’re struggling to build credit, a credit-builder loan or secured credit card can help establish a positive payment history and improve your score over time.
    </p>
    <strong>How to Fix It:</strong>
    <ul className="list-disc ml-6">
      <li>Make regular, on-time payments to demonstrate financial responsibility.</li>
      <li>Keep balances low to maintain a positive credit utilization ratio.</li>
    </ul>

    <h3 className="font-semibold text-lg">Final Thoughts</h3>
    <p>
      Improving your credit score before buying a house takes time and discipline, but the benefits are well worth the effort. A higher score can help you secure a better mortgage rate, save you money, and give you more options during the home-buying process.
    </p>
    <p>
      Ready to take the next step toward homeownership? Start improving your credit score today and make your dream home a reality!
    </p>
  </div>
),

  },
  {
    id: 3,
    image: "/blogs/legalmistakes.webp",
    date: "March 05, 2026",
    title: "Common Legal Mistakes Homebuyers Make",
    desc: "Buying a home is an exciting milestone, but it’s also one of the biggest financial commitments most people will ever...",
    tag: "Investment",
    content: (
  <div className="space-y-6">
    <p>
      Buying a home is an exciting milestone, but it’s also one of the biggest financial commitments most people will ever make. Unfortunately, many homebuyers get caught up in the excitement and overlook critical legal aspects of the process. A single oversight can lead to costly consequences down the road. To ensure a smooth and successful transaction, here’s a list of common legal mistakes homebuyers make — and how you can avoid them.
    </p>

    <h3 className="font-semibold text-lg">1. Skipping a Title Search or Title Insurance</h3>
    <p>
      Many buyers assume that once they sign the papers, the property is legally theirs. However, without a title search, you could be inheriting legal troubles, such as unpaid property taxes, liens, or disputes over property boundaries.
    </p>
    <strong>How to Avoid:</strong>
    <p>
      Always conduct a thorough title search before closing. Also, purchase title insurance to protect yourself from any unforeseen claims against the property.
    </p>

    <h3 className="font-semibold text-lg">2. Failing to Review the Purchase Agreement Thoroughly</h3>
    <p>
      The purchase agreement is a legally binding document, and once signed, you’re obligated to its terms. Buyers often skim through this document without fully understanding its implications.
    </p>
    <strong>How to Avoid:</strong>
    <p>
      Take the time to read the contract carefully or hire a real estate attorney to review it. Pay close attention to contingencies, timelines, and clauses that could affect your rights.
    </p>

    <h3 className="font-semibold text-lg">3. Overlooking Property Boundaries and Easements</h3>
    <p>
      Boundary disputes and easements can create major headaches for new homeowners. If neighboring properties have access to your land or if boundary lines are unclear, it can lead to disputes.
    </p>
    <strong>How to Avoid:</strong>
    <p>
      Request a survey of the property before closing. This ensures you know exactly where the boundaries lie and if there are any existing easements or encroachments.
    </p>

    <h3 className="font-semibold text-lg">4. Ignoring HOA Rules and Regulations</h3>
    <p>
      If the property is part of a Homeowners’ Association (HOA), you’ll need to comply with their rules. Some buyers discover restrictive guidelines or unexpected fees only after moving in.
    </p>
    <strong>How to Avoid:</strong>
    <p>
      Ask for a copy of the HOA’s bylaws and financial statements before closing. Understand the association’s rules, maintenance responsibilities, and any potential special assessments.
    </p>

    <h3 className="font-semibold text-lg">5. Not Understanding Mortgage Terms and Penalties</h3>
    <p>
      Many buyers focus only on the interest rate and monthly payments but fail to review important mortgage terms, such as prepayment penalties, adjustable rate clauses, or balloon payments.
    </p>
    <strong>How to Avoid:</strong>
    <p>
      Discuss all loan terms with your lender and consider hiring a mortgage professional to explain any complex clauses. Ensure you fully understand how changes in interest rates could impact your payments.
    </p>

    <h3 className="font-semibold text-lg">6. Neglecting to Include Inspection and Financing Contingencies</h3>
    <p>
      Some buyers, eager to close quickly, waive inspection and financing contingencies. This is a risky move that can leave you with unexpected repair costs or without financing approval.
    </p>
    <strong>How to Avoid:</strong>
    <p>
      Always include an inspection contingency to uncover potential issues and a financing contingency to protect yourself if your loan falls through.
    </p>

    <h3 className="font-semibold text-lg">7. Assuming Verbal Agreements Are Legally Binding</h3>
    <p>
      Real estate transactions require all agreements to be in writing. Verbal promises made by the seller, agent, or anyone involved in the deal carry no legal weight.
    </p>
    <strong>How to Avoid:</strong>
    <p>
      Ensure that all agreements, repairs, and modifications are documented and included in the contract.
    </p>

    <h3 className="font-semibold text-lg">8. Not Considering Property Disclosures</h3>
    <p>
      Sellers are legally required to disclose any known defects or issues with the property. However, some buyers skip reviewing these documents or fail to ask questions about them.
    </p>
    <strong>How to Avoid:</strong>
    <p>
      Carefully review the seller’s disclosure statement and ask your inspector to investigate any potential concerns.
    </p>

    <h3 className="font-semibold text-lg">Final Thoughts</h3>
    <p>
      A little due diligence goes a long way when buying a home. By understanding and avoiding these common legal mistakes, you can protect your investment and avoid unnecessary stress. Consider working with a real estate attorney or trusted agent to guide you through the process and ensure your home purchase is as smooth and secure as possible.
    </p>
    <p>
      Ready to buy your dream home? Make sure you’re legally protected every step of the way!
    </p>
  </div>
),

  },
  {
    id: 4,
    image: "/blogs/renthome.webp",
    date: "March 05, 2026",
    title: "Pros and Cons of Buying or Renting a Home",
    desc: "Pros of Buying a Home 1. Long-Term Investment and Equity Building When you buy a home, you're not just securing...",
    tag: "Lifestyle",
    content: (
  <div className="space-y-6">
    <h3 className="font-semibold text-lg">Pros of Buying a Home</h3>

    <h4 className="font-semibold">1. Long-Term Investment and Equity Building</h4>
    <p>
      When you buy a home, you’re not just securing a place to live — you’re building equity over time. As property values increase, your investment grows, offering potential financial gains in the future.
    </p>

    <h4 className="font-semibold">2. Stable Monthly Payments</h4>
    <p>
      With a fixed-rate mortgage, your monthly payments remain predictable over the years, protecting you from rising rent prices. This stability allows for better long-term financial planning.
    </p>

    <h4 className="font-semibold">3. Sense of Ownership and Stability</h4>
    <p>
      Owning a home gives you control over your living space. You can customize and renovate as you please, creating a space that truly feels like yours.
    </p>

    <h4 className="font-semibold">4. Tax Benefits and Deductions</h4>
    <p>
      Homeownership comes with financial perks such as tax deductions on mortgage interest and property taxes, which can significantly reduce your overall tax burden.
    </p>

    <h3 className="font-semibold text-lg">Cons of Buying a Home</h3>

    <h4 className="font-semibold">1. High Upfront Costs</h4>
    <p>
      Purchasing a home requires a substantial upfront investment, including the down payment (usually 10–20%), closing costs, and other expenses. This can be a significant financial burden for some buyers.
    </p>

    <h4 className="font-semibold">2. Maintenance and Repairs</h4>
    <p>
      As a homeowner, you’re responsible for maintenance and repairs, which can be costly and time-consuming. Unexpected expenses can impact your budget if you’re not prepared.
    </p>

    <h4 className="font-semibold">3. Less Flexibility to Relocate</h4>
    <p>
      If you anticipate changing jobs, moving cities, or exploring different living arrangements in the near future, buying a home may limit your flexibility compared to renting.
    </p>

    <h3 className="font-semibold text-lg">Pros of Renting a Home</h3>

    <h4 className="font-semibold">1. Flexibility and Mobility</h4>
    <p>
      Renting offers the freedom to move easily without the hassle of selling a property. This is ideal for those with unpredictable careers or lifestyles that may require relocation.
    </p>

    <h4 className="font-semibold">2. Lower Upfront Costs</h4>
    <p>
      Unlike buying, renting requires only a security deposit and first month’s rent, making it a more accessible option for those who aren’t ready to commit to homeownership.
    </p>

    <h4 className="font-semibold">3. Minimal Responsibility for Maintenance</h4>
    <p>
      Tenants aren’t responsible for major repairs or maintenance. Any issues with plumbing, electrical systems, or structural concerns are typically handled by the landlord.
    </p>

    <h4 className="font-semibold">4. Potential to Invest Elsewhere</h4>
    <p>
      Since renting often requires lower monthly payments compared to owning, it allows you to invest your money in other high-return opportunities, such as stocks or business ventures.
    </p>

    <h3 className="font-semibold text-lg">Cons of Renting a Home</h3>

    <h4 className="font-semibold">1. Rising Rent Costs</h4>
    <p>
      Rent prices tend to increase over time, often outpacing income growth. This can make long-term renting more expensive than owning a home in the same location.
    </p>

    <h4 className="font-semibold">2. No Equity or Ownership</h4>
    <p>
      When you rent, your monthly payments go toward the landlord’s income, and you don’t build any equity. Over the years, this can feel like money spent without long-term financial benefits.
    </p>

    <h4 className="font-semibold">3. Limited Control Over Living Space</h4>
    <p>
      As a tenant, you may have restrictions on making modifications or personalizing your living space. You’re also at the mercy of your landlord’s decisions, such as lease renewals or policy changes.
    </p>

    <h3 className="font-semibold text-lg">Key Considerations: Rent or Buy?</h3>

    <h4 className="font-semibold">1. Financial Readiness</h4>
    <p>
      Do you have enough savings for a down payment and emergency expenses? If not, renting might be a safer option until you’re financially prepared.
    </p>

    <h4 className="font-semibold">2. Duration of Stay</h4>
    <p>
      If you plan to stay in one place for at least 5–7 years, buying can be a better financial decision. However, if you’re unsure about your long-term plans, renting provides the flexibility you need.
    </p>

    <h4 className="font-semibold">3. Market Conditions</h4>
    <p>
      Consider the current real estate market in your desired location. Are home prices rising or stabilizing? Understanding market trends can help you decide whether it’s the right time to buy or continue renting.
    </p>

    <h4 className="font-semibold">4. Lifestyle and Career Flexibility</h4>
    <p>
      If your career involves frequent relocations or if you prefer a low-maintenance lifestyle, renting offers more freedom and fewer responsibilities.
    </p>

    <h3 className="font-semibold text-lg">Final Verdict: What’s Right for You?</h3>
    <p>
      There’s no one-size-fits-all answer when it comes to deciding whether to rent or buy. It ultimately depends on your financial situation, future plans, and lifestyle preferences. Buying offers long-term financial benefits and stability, while renting provides flexibility and lower immediate costs.
    </p>

    <p className="font-semibold">
      ✅ Pro Tip: Analyze your current financial standing and consider your long-term goals before making this significant decision. If you’re unsure, consulting with a real estate expert can provide valuable insights tailored to your unique situation.
    </p>
  </div>
),

  },
  {
    id: 5,
    image: "/blogs/interiordesignideas.webp",
    date: "March 05, 2026",
    title: "Transform Your Space: Top House Interior Ideas for 2025",
    desc: "A well-designed home interior is more than just aesthetics — it’s about creating a space that reflects your personality while...",
    tag: "Housing loan",
    content: (
  <div className="space-y-6">
    <p>
      A well-designed home interior is more than just aesthetics — it’s about creating a space that reflects your personality while ensuring functionality and comfort. Whether you’re revamping your living space or planning a complete makeover, staying updated with the latest trends can help elevate your home’s vibe. Here’s a curated list of top interior ideas for 2025 to inspire your next project!
    </p>

    <h3 className="font-semibold text-lg">1. Embrace Earthy and Neutral Tones</h3>
    <p>
      Neutral shades like beige, taupe, warm grays, and soft whites continue to dominate modern interiors. These hues create a sense of calm and openness, making spaces feel larger and more inviting. In 2025, earthy tones inspired by nature — think terracotta, olive green, and sandy browns — are also making a comeback. These colors blend beautifully with natural materials, offering a cozy and serene ambiance.
    </p>
    <p className="font-semibold">
      Pro Tip: Pair neutral walls with vibrant accent pieces like cushions, rugs, or artwork to add a pop of color without overwhelming the space.
    </p>

    <h3 className="font-semibold text-lg">2. Bring Nature Indoors with Biophilic Design</h3>
    <p>
      Biophilic design, which incorporates natural elements into living spaces, is more than just a passing trend. It promotes well-being and enhances mood by integrating plants, natural light, and organic textures. Consider adding large indoor plants, vertical gardens, or even a small herb garden in your kitchen.
    </p>
    <strong>Ideas to Try:</strong>
    <ul className="list-disc ml-6">
      <li>Use wooden or bamboo furniture to complement the natural aesthetic.</li>
      <li>Opt for sustainable materials like cork, jute, and recycled fabrics.</li>
      <li>Maximize natural light with large windows and sheer curtains.</li>
    </ul>

    <h3 className="font-semibold text-lg">3. Minimalism with a Cozy Twist</h3>
    <p>
      Minimalism is evolving into a more “warm minimalism” approach that focuses on creating clutter-free yet inviting spaces. Instead of stark and cold aesthetics, 2025 is about layering textures, adding soft textiles, and maintaining clean lines with a cozy touch.
    </p>
    <strong>How to Achieve It:</strong>
    <ul className="list-disc ml-6">
      <li>Use a neutral color palette with warm undertones.</li>
      <li>Incorporate plush throws, textured cushions, and soft area rugs.</li>
      <li>Opt for multifunctional furniture that maintains a sleek look while offering practicality.</li>
    </ul>

    <h3 className="font-semibold text-lg">4. Statement Lighting as a Focal Point</h3>
    <p>
      Lighting plays a key role in transforming interiors, and in 2025, bold and artistic light fixtures will take center stage. Oversized pendant lights, sculptural chandeliers, and sleek LED strips can serve as both functional and decorative elements.
    </p>
    <strong>Trending Ideas:</strong>
    <ul className="list-disc ml-6">
      <li>Use statement chandeliers in dining areas or living rooms.</li>
      <li>Incorporate LED strip lights under cabinets or along staircases for a modern touch.</li>
      <li>Experiment with floor and table lamps that have bold, geometric designs.</li>
    </ul>

    <h3 className="font-semibold text-lg">5. Personalized Wall Décor and Gallery Walls</h3>
    <p>
      Your walls can speak volumes about your personality. Personalized art, family photos, and custom gallery walls are gaining popularity as they add a personal touch to interiors. Consider mixing framed photos with canvas art, metal accents, and floating shelves for a curated look.
    </p>
    <p className="font-semibold">
      Quick Tip: Opt for frames in different sizes and shapes to create an eclectic yet balanced gallery wall. Incorporate mirrors to add depth and light to the space.
    </p>

    <h3 className="font-semibold text-lg">6. Multi-Functional Spaces for Modern Living</h3>
    <p>
      With the rise of remote work and flexible lifestyles, creating multi-functional spaces is essential. Think home offices that double as guest rooms or living rooms with hidden storage to optimize space.
    </p>
    <strong>Ideas to Try:</strong>
    <ul className="list-disc ml-6">
      <li>Install foldable desks or wall-mounted workstations.</li>
      <li>Use modular furniture that can be rearranged easily.</li>
      <li>Design cozy reading nooks or meditation corners in underutilized areas.</li>
    </ul>

    <h3 className="font-semibold text-lg">7. Play with Textures and Layers</h3>
    <p>
      Mixing and layering different textures adds depth and visual interest to a space. Velvet cushions, knitted throws, linen curtains, and ceramic decor pieces can create a well-balanced and inviting ambiance.
    </p>
    <p className="font-semibold">
      Pro Tip: Combine smooth surfaces with rough, matte textures for a dynamic contrast that adds richness to your space.
    </p>

    <h3 className="font-semibold text-lg">Final Thoughts: Elevate Your Home with Intention</h3>
    <p>
      When it comes to designing your home’s interiors, the key is to balance functionality with personal style. Whether you prefer a modern, minimalist look or a cozy, rustic vibe, these 2025 trends offer plenty of inspiration to transform your space. Remember, a well-designed home not only looks good but also enhances your daily living experience.
    </p>
    <p>
      Ready to give your home a fresh new look? Get started today and create a space that truly feels like you!
    </p>
  </div>
),

  },
  {
    id: 6,
    image: "/blogs/commercialland.webp",
    date: "March 05, 2026",
    title: "Modern Living: Pros and Cons of Investing in Commercial Real Estate",
    desc: "Commercial real estate (CRE) is an attractive investment avenue for many, offering the potential for high returns and long-term stability....",
    tag: "Lifestyle",
    content: (
  <div className="space-y-6">
    <p>
      Commercial real estate (CRE) is an attractive investment avenue for many, offering the potential for high returns and long-term stability. However, like any investment, it comes with its own set of advantages and challenges. If you’re considering adding commercial properties to your portfolio, here’s a deep dive into the pros and cons to help you make an informed decision.
    </p>

    <h3 className="font-semibold text-lg">✅ Pros of Investing in Commercial Real Estate</h3>

    <h4 className="font-semibold">1. Higher Income Potential</h4>
    <p>
      Commercial properties often yield higher returns compared to residential properties. Depending on the type of property (retail, office space, industrial, etc.), investors can expect an annual return of 6% to 12%, significantly outperforming residential real estate.
    </p>

    <h4 className="font-semibold">2. Long-Term Leases Provide Stability</h4>
    <p>
      Commercial tenants typically sign long-term leases, often ranging from 3 to 10 years or more. These extended lease terms create a steady and predictable income stream, reducing vacancy risks and ensuring consistent cash flow.
    </p>

    <h4 className="font-semibold">3. Diversification of Investment Portfolio</h4>
    <p>
      Adding commercial properties to your investment portfolio can reduce overall risk. The performance of CRE tends to be less correlated with residential real estate or stocks, making it a solid diversification strategy.
    </p>

    <h4 className="font-semibold">4. Appreciation and Value Growth</h4>
    <p>
      Well-maintained commercial properties in prime locations appreciate over time, boosting the overall value of your investment. Additionally, the ability to increase rents or improve property amenities can further enhance property value.
    </p>

    <h4 className="font-semibold">5. Triple Net Leases Reduce Owner Responsibility</h4>
    <p>
      In many cases, commercial leases are structured as triple net leases (NNN), where the tenant is responsible for property taxes, insurance, and maintenance. This minimizes the property owner’s involvement and reduces operational burdens.
    </p>

    <h3 className="font-semibold text-lg">❗ Cons of Investing in Commercial Real Estate</h3>

    <h4 className="font-semibold">1. Higher Initial Capital Requirement</h4>
    <p>
      Investing in commercial real estate requires a substantial initial investment compared to residential properties. Down payments typically range from 20% to 40%, and the cost of property management, maintenance, and improvements can be high.
    </p>

    <h4 className="font-semibold">2. Longer Vacancy Periods</h4>
    <p>
      When a commercial space becomes vacant, finding a new tenant can take months or even years, leading to prolonged income gaps. High turnover and long vacancy periods can impact the overall return on investment.
    </p>

    <h4 className="font-semibold">3. Complex Property Management</h4>
    <p>
      Managing a commercial property is more complex than handling residential units. Landlords often deal with multiple tenants, maintenance issues, zoning laws, and safety regulations. Many investors hire professional property managers, adding to operating costs.
    </p>

    <h4 className="font-semibold">4. Market Sensitivity and Economic Downturns</h4>
    <p>
      Commercial real estate is sensitive to economic cycles. During recessions, businesses may downsize or close, leading to increased vacancies and declining property values. Retail and office spaces, in particular, are vulnerable to market fluctuations.
    </p>

    <h4 className="font-semibold">5. Legal and Regulatory Challenges</h4>
    <p>
      Commercial properties are subject to stricter zoning laws, building codes, and environmental regulations. Non-compliance can lead to fines, delays, or legal challenges, making it essential for investors to stay informed about local requirements.
    </p>
  </div>
),

  },
  {
    id: 7,
    image: "/blogs/plotinvestment.webp",
    date: "March 10, 2026",
    title: "The Benefits of Investing in Plotted Developments",
    desc: "Investing in plotted developments has gained significant traction among real estate investors in recent years. Plotted developments, also known as...",
    tag: "Property",
    content: (
  <div className="space-y-6">
    <p>
      Investing in plotted developments has gained significant traction among real estate investors in recent years. Plotted developments, also known as land investments, involve purchasing a parcel of land within a gated or organized community with the intention of developing it or selling it at a later stage. Unlike investing in built properties, plotted developments offer distinct advantages that can result in higher returns and greater flexibility. Here’s a detailed look at the benefits of investing in plotted developments.
    </p>

    <h3 className="font-semibold text-lg">1. High Appreciation Potential</h3>
    <p>
      Land is a finite resource, and its value tends to appreciate over time, especially in high-demand areas. As cities expand and urbanization continues, plotted developments in emerging locations often witness significant price appreciation. Investing in well-located plots can generate substantial returns over the long term.
    </p>

    <h3 className="font-semibold text-lg">2. Lower Initial Investment and Maintenance Costs</h3>
    <p>
      Compared to residential or commercial properties, plots require a relatively lower initial investment. Additionally, there are minimal maintenance costs involved since plots do not incur expenses related to repairs, utilities, or tenant management. This makes plotted developments a cost-effective investment option.
    </p>

    <h3 className="font-semibold text-lg">3. Flexibility in Development</h3>
    <p>
      Investors in plotted developments enjoy greater flexibility when it comes to future development. Depending on the market conditions and personal goals, they can choose to develop residential or commercial structures on the plot or sell the land once its value has appreciated. This flexibility allows investors to adapt their strategy based on market trends.
    </p>

    <h3 className="font-semibold text-lg">4. Higher Liquidity and Easy Resale</h3>
    <p>
      Plotted developments often enjoy higher liquidity compared to built-up properties. Due to lower price points and rising demand for land in growing urban areas, plots are easier to sell, providing quicker returns on investment. Moreover, they are a preferred choice for buyers who want to build customized homes or commercial establishments.
    </p>

    <h3 className="font-semibold text-lg">5. Diversification of Investment Portfolio</h3>
    <p>
      Including plotted developments in a real estate portfolio can diversify an investor’s assets and reduce overall risk. Land investments offer a hedge against inflation and economic fluctuations, making them a safe and stable addition to any investment strategy.
    </p>

    <h3 className="font-semibold text-lg">6. Minimal Depreciation Risk</h3>
    <p>
      Unlike constructed properties, which may experience wear and tear over time, land does not depreciate. This makes plotted developments a secure long-term investment option that retains its value and continues to appreciate with the passage of time.
    </p>

    <h3 className="font-semibold text-lg">7. Advantage of Infrastructure Development</h3>
    <p>
      Plots located in rapidly developing areas stand to benefit from upcoming infrastructure projects such as roads, public transport, and civic amenities. As these developments enhance the locality’s overall connectivity and livability, the value of the plotted development increases substantially.
    </p>

    <h3 className="font-semibold text-lg">8. Legal Clarity and Security</h3>
    <p>
      Plotted developments often come with clear titles and fewer legal complications compared to built properties. Investors can ensure a smooth transaction process by verifying land records and ensuring the property is RERA-registered, reducing the chances of legal disputes.
    </p>

    <h3 className="font-semibold text-lg">9. Potential for Passive Income</h3>
    <p>
      In addition to capital appreciation, plotted developments offer the potential to generate passive income. Investors can lease the land to agricultural or commercial entities, providing an additional revenue stream while waiting for the right time to sell.
    </p>

    <h3 className="font-semibold text-lg">10. Long-Term Security and Wealth Creation</h3>
    <p>
      Investing in plotted developments not only safeguards wealth but also contributes to long-term financial security. As the land appreciates and infrastructure develops, investors can enjoy exponential growth in their asset value.
    </p>

    <h3 className="font-semibold text-lg">Conclusion</h3>
    <p>
      Plotted developments present an attractive investment opportunity for both seasoned and first-time investors. With high appreciation potential, lower maintenance costs, and flexible development options, plots offer a safe and profitable avenue for wealth creation. By conducting thorough research and selecting well-located plots, investors can capitalize on the numerous benefits that plotted developments have to offer.
    </p>
  </div>
),

  },
  {
    id: 8,
    image: "/blogs/material.webp",
    date: "March 12, 2026",
    title: "Sustainable Building Materials for Modern Homes: Eco-Friendly Choices That Matter",
    desc: "As the world moves toward a more eco-conscious future,homebuyers and builders alike are prioritising sustainable building materials that reduce environmental...",
    tag: "Investment",
    content: (
  <div className="space-y-6">
    <p>
      As the world moves toward a more eco-conscious future, homebuyers and builders alike are prioritising sustainable building materials that reduce environmental impact and promote healthier living spaces. Whether you’re constructing a new home or renovating an existing one, choosing sustainable materials can help lower energy consumption, minimize waste, and create a more durable and efficient home. Here’s a look at some of the top eco-friendly building materials transforming modern homes.
    </p>

    <h3 className="font-semibold text-lg">1. Bamboo: The Fast-Growing Wonder</h3>
    <p>
      Bamboo is one of the most sustainable building materials available. It grows incredibly fast — some species can grow up to 3 feet in just 24 hours! Unlike traditional hardwoods, bamboo can be harvested without causing deforestation, making it an excellent renewable resource.
    </p>
    <strong>Why It’s Great:</strong>
    <ul className="list-disc ml-6">
      <li>Highly durable and stronger than many traditional woods</li>
      <li>Naturally resistant to pests and moisture</li>
      <li>Versatile for flooring, cabinetry, and even structural applications</li>
    </ul>

    <h3 className="font-semibold text-lg">2. Recycled Steel: Strength with Sustainability</h3>
    <p>
      Using recycled steel reduces the need for raw materials and lowers carbon emissions associated with steel production. It’s a durable, high-strength material often used for framing and structural components.
    </p>
    <strong>Why It’s Great:</strong>
    <ul className="list-disc ml-6">
      <li>Significantly reduces landfill waste and energy use</li>
      <li>Can withstand harsh weather conditions</li>
      <li>100% recyclable without losing its strength</li>
    </ul>

    <h3 className="font-semibold text-lg">3. Insulated Concrete Forms (ICFs): Energy Efficiency at Its Best</h3>
    <p>
      ICFs are forms made of expanded polystyrene (EPS) that are stacked to create walls, which are then filled with concrete. These forms provide superior insulation, reducing the need for heating and cooling.
    </p>
    <strong>Why It’s Great:</strong>
    <ul className="list-disc ml-6">
      <li>High thermal resistance, reducing energy consumption</li>
      <li>Extremely durable and disaster-resistant</li>
      <li>Lowers long-term maintenance costs</li>
    </ul>

    <h3 className="font-semibold text-lg">4. Reclaimed Wood: Beauty with a Story</h3>
    <p>
      Reclaimed wood is salvaged from old buildings, barns, and factories, giving it a second life in modern homes. It adds a unique, rustic charm while reducing the demand for freshly harvested timber.
    </p>
    <strong>Why It’s Great:</strong>
    <ul className="list-disc ml-6">
      <li>Reduces deforestation and waste</li>
      <li>Adds character and warmth to interiors</li>
      <li>Often stronger and more durable due to its age</li>
    </ul>

    <h3 className="font-semibold text-lg">5. Rammed Earth: A Timeless Natural Option</h3>
    <p>
      Rammed earth is a technique where natural materials such as soil, clay, and sand are compacted to create strong, durable walls. It’s an ancient method that has gained renewed popularity for its eco-friendliness.
    </p>
    <strong>Why It’s Great:</strong>
    <ul className="list-disc ml-6">
      <li>Excellent thermal mass, keeping homes cool in summer and warm in winter</li>
      <li>Minimal processing required, reducing carbon footprint</li>
      <li>Highly durable and long-lasting</li>
    </ul>

    <h3 className="font-semibold text-lg">6. Hempcrete: Lightweight and Breathable</h3>
    <p>
      Hempcrete is a bio-composite material made from hemp fibers, water, and lime. It’s lightweight, breathable, and offers excellent insulation properties.
    </p>
    <strong>Why It’s Great:</strong>
    <ul className="list-disc ml-6">
      <li>Carbon-negative material that absorbs CO₂ during its life cycle</li>
      <li>Naturally resistant to mold, pests, and fire</li>
      <li>Provides natural insulation and improves indoor air quality</li>
    </ul>

    <h3 className="font-semibold text-lg">7. Recycled Glass: Giving Waste a New Purpose</h3>
    <p>
      Recycled glass can be transformed into stunning countertops, tiles, and decorative features. By repurposing glass waste, it reduces landfill waste and energy consumption.
    </p>
    <strong>Why It’s Great:</strong>
    <ul className="list-disc ml-6">
      <li>Durable, non-porous, and easy to maintain</li>
      <li>Available in various colors and textures</li>
      <li>Great for kitchens, bathrooms, and flooring</li>
    </ul>

    <h3 className="font-semibold text-lg">Final Thoughts</h3>
    <p>
      Sustainable building materials not only help reduce environmental impact but also contribute to healthier, more energy-efficient homes. By incorporating these materials into your modern home design, you’re investing in the future while creating a space that reflects your commitment to sustainability.
    </p>
    <p>
      Ready to build a greener, smarter home? Explore these innovative materials and take a step toward a more eco-friendly lifestyle!
    </p>
  </div>
),

  },
  {
    id: 9,
    image: "/blogs/investmentrealeste.webp",
    date: "March 14, 2026",
    title: "A Beginner’s Guide to Investing in Real Estate Successfully",
    desc: "Investing in real estate is one of the most reliable ways to build wealth and achieve financial security. For beginners,...",
    tag: "Lifestyle",
    content: (
  <div className="space-y-6">
    <p>
      Investing in real estate is one of the most reliable ways to build wealth and achieve financial security. For beginners, navigating the world of real estate may seem daunting, but with the right knowledge and strategy, it can become a highly rewarding venture. This guide breaks down the essential steps to help first-time investors succeed in the real estate market.
    </p>

    <h3 className="font-semibold text-lg">1. Define Your Investment Goals</h3>
    <p>
      Before diving into real estate, it’s crucial to identify your investment objectives. Are you looking for passive income through rentals, long-term capital appreciation, or a combination of both? Understanding your goals will guide your decisions on property type, location, and financing options.
    </p>

    <h3 className="font-semibold text-lg">2. Explore Different Types of Real Estate Investments</h3>
    <p>
      Real estate offers various investment avenues, each with its own potential and risks. Some of the most common types include:
    </p>
    <ul className="list-disc ml-6">
      <li><strong>Residential Properties:</strong> Suitable for rental income and resale, making them a popular choice for beginners.</li>
      <li><strong>Commercial Properties:</strong> High returns but require higher initial investment and market knowledge.</li>
      <li><strong>Plotted Developments:</strong> Ideal for long-term appreciation as land values increase over time.</li>
      <li><strong>Real Estate Investment Trusts (REITs):</strong> A hassle-free investment option that allows individuals to invest in real estate without direct ownership.</li>
    </ul>

    <h3 className="font-semibold text-lg">3. Conduct Market Research and Analysis</h3>
    <p>
      Thorough market research is essential to making informed investment decisions. Analyze factors like location, infrastructure development, future growth potential, and market demand. Look for areas with a high appreciation rate and rental demand. Additionally, study the track record of developers and ensure compliance with RERA (Real Estate Regulatory Authority) guidelines.
    </p>

    <h3 className="font-semibold text-lg">4. Set a Realistic Budget and Explore Financing Options</h3>
    <p>
      Define a budget that aligns with your financial capacity. Explore financing options such as home loans, which typically cover up to 80% of the property value. Be prepared for additional costs like registration fees, maintenance charges, and property taxes. A well-planned budget will prevent unexpected financial stress.
    </p>

    <h3 className="font-semibold text-lg">5. Choose the Right Property</h3>
    <p>
      Selecting the right property is key to successful real estate investing. Opt for a property that matches your investment goals, whether it’s residential, commercial, or land. Verify the developer’s reputation, project approvals, and legal clearances before proceeding with the purchase.
    </p>

    <h3 className="font-semibold text-lg">6. Understand Legal Aspects and Documentation</h3>
    <p>
      Legal due diligence is crucial to avoiding disputes. Ensure that the property’s ownership title, approved plans, and encumbrance certificates are in order. Seek legal assistance to review all documentation and confirm compliance with local regulations.
    </p>

    <h3 className="font-semibold text-lg">7. Evaluate Rental Income Potential</h3>
    <p>
      If your goal is to generate passive income through rentals, assess the potential rental yield of the property. Analyze the demand in the area and identify factors that may attract long-term tenants, such as proximity to business hubs, schools, and transport facilities.
    </p>

    <h3 className="font-semibold text-lg">8. Diversify Your Real Estate Portfolio</h3>
    <p>
      To minimize risk, consider diversifying your investments across different types of properties and locations. This approach spreads the risk and ensures that your returns are not solely dependent on one asset.
    </p>

    <h3 className="font-semibold text-lg">9. Plan for Property Management</h3>
    <p>
      Managing a property can be time-consuming, especially for beginners. Consider hiring a professional property management company to handle tasks like tenant management, maintenance, and rent collection. This ensures smooth operations and enhances the property’s long-term value.
    </p>

    <h3 className="font-semibold text-lg">10. Monitor Market Trends and Adapt Your Strategy</h3>
    <p>
      Real estate markets fluctuate over time, and it’s essential to stay updated on market trends and government policies. Regularly assess your investment’s performance and adapt your strategy to maximize returns and minimize risks.
    </p>

    <h3 className="font-semibold text-lg">Conclusion</h3>
    <p>
      Investing in real estate successfully requires patience, research, and a clear strategy. By defining your goals, conducting thorough market research, and staying informed about legal and financial aspects, beginners can build a profitable real estate portfolio. With the right approach, real estate can become a cornerstone of your financial success.
    </p>
  </div>
),

  },
  {
    id: 10,
    image:"/blogs/rera.webp",
    date: "March 16, 2026",
    title: "Understanding RERA: What Every Homebuyer Should Know",
    desc: "The Real Estate (Regulation and Development) Act, 2016 (RERA) was introduced by the Government of India to regulate the real...",
    tag: "Real estate",
    content: (
  <div className="space-y-6">
    <p>
      The Real Estate (Regulation and Development) Act, 2016 (RERA) was introduced by the Government of India to regulate the real estate sector, enhance transparency, and protect the interests of homebuyers. RERA aims to establish a fair and accountable system that ensures timely delivery of projects and minimizes fraudulent practices in the real estate industry.
    </p>

    <h3 className="font-semibold text-lg">1. What is RERA?</h3>
    <p>
      RERA is a regulatory framework that mandates developers and real estate agents to register their projects with the respective state authorities. It establishes guidelines for project completion, delivery timelines, and the quality of construction, ensuring that homebuyers receive what is promised.
    </p>

    <h3 className="font-semibold text-lg">2. Key Benefits of RERA for Homebuyers</h3>
    <ul className="list-disc ml-6">
      <li>
        <strong>Transparency and Accountability:</strong> Developers are required to disclose project details, including layout plans, approvals, and timelines, ensuring complete transparency.
      </li>
      <li>
        <strong>Protection from Delays:</strong> RERA mandates that developers adhere to the promised timeline, and failure to do so can result in penalties and compensation to the buyer.
      </li>
      <li>
        <strong>Assurance of Quality:</strong> The act ensures that the property is delivered as per the approved specifications and layout.
      </li>
      <li>
        <strong>Escrow Account for Funds:</strong> Developers must deposit 70% of the project funds in a designated escrow account, ensuring that the money is utilized solely for the project.
      </li>
    </ul>

    <h3 className="font-semibold text-lg">3. Key Provisions of RERA</h3>
    <ul className="list-disc ml-6">
      <li>
        <strong>Mandatory Registration:</strong> All residential and commercial projects exceeding 500 sq. meters or involving 8 units or more must be registered under RERA.
      </li>
      <li>
        <strong>Penalty for Non-Compliance:</strong> Developers failing to comply with RERA guidelines may face fines and penalties.
      </li>
      <li>
        <strong>Grievance Redressal:</strong> Homebuyers can file complaints with RERA authorities for any discrepancies or delays.
      </li>
    </ul>

    <h3 className="font-semibold text-lg">4. Why RERA Matters to Homebuyers</h3>
    <p>
      RERA empowers homebuyers by providing a structured grievance redressal mechanism, ensuring they get what they pay for. It has instilled confidence in the real estate market by promoting ethical practices and reducing risks associated with property purchases.
    </p>

    <h3 className="font-semibold text-lg">Conclusion</h3>
    <p>
      Understanding RERA is essential for every homebuyer to safeguard their investment and ensure a smooth and secure property buying experience. By choosing RERA-registered projects, buyers can make informed decisions and protect their interests effectively.
    </p>
  </div>
),

  },
  {
    id: 11,
    image: "/blogs/happycouple.webp",
    date: "March 18, 2026",
    title: "The Ultimate Guide to Buying Your First Home",
    desc: "Buying your first home is an exciting milestone, but it requires careful planning and informed decision-making. From budgeting to closing....",
    tag: "Investment",
    content: (
  <div className="space-y-6">
    <p>
      Buying your first home is an exciting milestone, but it requires careful planning and informed decision-making. From budgeting to closing the deal, here’s a step-by-step guide to help you navigate the home-buying process with confidence.
    </p>

    <h3 className="font-semibold text-lg">1. Assess Your Financial Readiness</h3>
    <p>
      Before you start house hunting, evaluate your financial situation. Consider your savings, credit score, and monthly income to determine how much you can afford. Most banks offer home loans covering up to 80% of the property value, so ensure you have enough funds for the down payment, registration fees, and other associated costs.
    </p>

    <h3 className="font-semibold text-lg">2. Set a Realistic Budget</h3>
    <p>
      Define a budget based on your financial capability and future expenses. Factor in loan EMIs, maintenance costs, property taxes, and insurance. Use a home loan calculator to estimate your monthly payments and choose a property within your affordability range.
    </p>

    <h3 className="font-semibold text-lg">3. Choose the Right Location</h3>
    <p>
      Location plays a crucial role in property selection. Look for areas with good infrastructure, connectivity, and potential for appreciation. Consider factors such as proximity to workplaces, schools, hospitals, and public transport. Research upcoming developments to make an informed investment decision.
    </p>

    <h3 className="font-semibold text-lg">4. Select a Reputable Developer</h3>
    <p>
      Choosing a reliable real estate developer ensures transparency, quality construction, and timely delivery. Verify the developer’s credentials, past projects, and customer reviews. Check if the project is legally approved and RERA-registered to avoid complications.
    </p>

    <h3 className="font-semibold text-lg">5. Understand Loan Options & Tax Benefits</h3>
    <p>
      Compare home loan options from different banks and financial institutions. Understand the interest rates, repayment tenure, and eligibility criteria. Additionally, homebuyers can avail tax benefits on both principal repayment and interest under Section 80C and Section 24(b) of the Income Tax Act.
    </p>

    <h3 className="font-semibold text-lg">6. Conduct Legal and Property Verification</h3>
    <p>
      Ensure the property has clear titles and is free from any legal disputes. Verify documents such as the sale deed, encumbrance certificate, approved building plan, and NOC from authorities. Consulting a legal expert can help you confirm the authenticity of the property.
    </p>

    <h3 className="font-semibold text-lg">7. Make an Informed Purchase</h3>
    <p>
      Once you finalize a property, negotiate the best deal with the builder or seller. Review the agreement carefully, understand the payment terms, and get everything documented. Be mindful of hidden charges and ensure transparency in transactions.
    </p>

    <h3 className="font-semibold text-lg">8. Plan for Possession and Move-In</h3>
    <p>
      After completing the formalities, prepare for possession by checking the property condition and amenities promised in the agreement. Ensure a smooth transition by arranging utilities, setting up interiors, and planning the move-in process.
    </p>

    <h3 className="font-semibold text-lg">Conclusion</h3>
    <p>
      Buying your first home is a significant financial and emotional investment. By carefully assessing your finances, choosing the right property, and understanding legal aspects, you can make a smart and secure purchase. Take your time, do your research, and step into homeownership with confidence.
    </p>
  </div>
),

  },
  {
    id: 12,
    image: "/blogs/banglore.webp",
    date: "March 20, 2026",
    title: "Why Bangalore?",
    desc: "Life is all about decisions. Yes almost. And yet it is not so always. The career we chose might be...",
    tag: "Housing loan",
    content: (
  <div className="space-y-6">
    <p>
      Life is all about decisions. Yes almost. And yet it is not so always. The career we chose might be our decision but the city we settled in might not be. More often than not, it’s make-do. The worst is, some live in an illusion of misery being unaware that they are better off in comparison to the rest reigned to their fate since they had no other way but to face it. Sometimes the decisions we take under constraints turn out to be blessings in disguise in future.
    </p>

    <p>
      We often hear some professionals, young entrepreneurs, start-ups, and IT pros deploring for having chosen Bangalore as the city to dwell in. Monsoon mayhem is enough for them to flood their social media with posts berating the city of their choice. They proclaim Bangalore is the worst city on the planet and choosing Bangalore was the most stupid decision they took in their life. The irony is they hardly ever think of leaving the city and that’s another matter.
    </p>

    <p>
      In reality, these Bangalore baiters are blind to the havoc climate change has wrought in the world over. In recent times, rain fury has not spared even the developed nations such as the US, Japan and China, leave alone the third world. Every nation is realizing that the infrastructure it built ages ago, can hardly meet the challenges climate change poses today. Bangalore is no exception. Yet, Bangalore remains the punching bag. That way, Mumbai still surpasses Bangalore in the record of deaths flooding claimed in a single day! What’s more, Bangalore is not under the threat of an alarming rise in the sea level that is looming large over Mumbai, our Commercial Capital.
    </p>

    <p>
      Coming to pollution, Bangalore hardly makes headlines for the fall, if any, of its Air Quality Index unlike New Delhi which does so every year invariably. Being weighed down by the rise in population, migration, population of vehicles and unbridled construction works with a crumbling infrastructure in tandem; Bangalore might have ceased to be the legacy its founder Nadaprabhu Kempe Gowda envisioned centuries ago. Still, the city is one of the best places in terms of greenery, clean air, facilities, connectivity and infrastructure. Take Malleswaram, Basavanagudi etc. These are some pockets in Bangalore still brimming and beaming with old-worldly charm.
    </p>

    <h3 className="font-semibold text-lg">What Makes Bangalore Stand Out?</h3>
    <ul className="list-decimal ml-6">
      <li>
        The only Indian city to rank among the 25 global cities of the future 2021/22 report by fDi Intelligence, a UK-based provider of industry insight and cross-border expansion. (Earlier ranked 3rd among top 10 aerospace cities globally) – The Economic Times, Feb 12, 2021
      </li>
      <li>Home to 400 Fortune 500 companies</li>
      <li>Home to 40 unicorns out of 104 in India and more than 3,777 startups</li>
      <li>Houses 30% of India’s IT professionals</li>
      <li>Contributes 38% to India’s IT exports</li>
      <li>Ranks among the top five technology clusters in the world</li>
    </ul>

    <p>
      Following the signing of MOUs worth Rs 5.20 lakh crore during the Global Investors Meet 2022, most industries will be based in Bangalore, positioning the city for a massive industrial and economic leap. With Rs 45,000 crore allocated for Brand Bangalore development in the State Budget 2023–24, the city is poised to emerge as a leading global metropolis.
    </p>

    <p>
      The expansion of Namma Metro and the upcoming Bangalore Suburban Rail Project will significantly enhance connectivity, decongest traffic, and distribute population density across the outskirts, making commuting smoother and urban living more organized.
    </p>

    <h3 className="font-semibold text-lg">Conclusion</h3>
    <p>
      To sum up, Bangalore is a city where heritage meets modernity, and hi-tech lives in harmony with nature. It continues to be one of the finest cities for professional growth, family life, and long-term prosperity. Bangalore, forever, remains one of the best choices for a fulfilling and balanced life — an eye-opener for those who see it only through the lens of momentary inconvenience.
    </p>
  </div>
),

  },
];



/* ---------------- BLOG LIST PAGE ---------------- */
const BlogList = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Property", "Investment", "Real estate", "Housing loan", "Lifestyle"];

  const filteredBlogs =
    activeCategory === "All"
      ? blogData
      : blogData.filter((blog) => blog.tag === activeCategory);

  return (
    <section className="bg-white pt-5 pb-24 relative overflow-hidden">
     <div className="max-w-[1120px] mx-auto px-6 md:px-0">

        <AnimatedHeading className="text-3xl font-semiboldx text-gray-900">
          Stories That Shape Better Living
        </AnimatedHeading>

      <FloatUpText className="text-lg text-gray-500 mt-2">
          Expert views, trends, and tips for informed buyers
        </FloatUpText>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap gap-6 mt-10 mb-12 text-sm">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`${
                activeCategory === cat
                  ? "font-semiboldx text-black"
                  : "text-gray-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* BLOG CARDS */}
        <div className="grid md:grid-cols-2 gap-10">
          {filteredBlogs.map((blog) => (
            <FloatUpText key={blog.id}>
              <div className="bg-white rounded-lg shadow overflow-hidden">

                {/* Image with black rectangle tag */}
                <div className="relative">
                  <img
                    src={blog.image}
                    className="h-64 w-full object-cover cursor-pointer"
                    onClick={() => navigate(`/blogs/${blog.id}`)}
                  />

                  <div className="absolute bottom-4 right-4 bg-black text-white text-xs px-4 py-2">
                    {blog.tag.toUpperCase()}
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs text-gray-400">{blog.date}</p>

                 <h3 className="text-2xl font-semiboldx mt-3 text-gray-900 line-clamp-2">
  {blog.title}
</h3>

                 <p className="text-base text-gray-500 mt-3 line-clamp-3">
  {blog.desc}
</p>

                  <button
                    onClick={() => navigate(`/blogs/${blog.id}`)}
                    className="mt-5 px-6 py-2 border hover:border-ORANGE hover:text-ORANGE hover:bg-ORANGE2/5 border-gray-300 rounded-full text-xs text-gray-600"
                  >
                    Read More
                  </button>
                </div>

              </div>
            </FloatUpText>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------- BLOG DETAIL PAGE ---------------- */
const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogData.find((b) => b.id === Number(id));

  return (
    <section className="bg-white pt-24 pb-24 relative">
    <div className="max-w-[1120px] mx-auto px-6 md:px-0">

        <AnimatedHeading className="text-3xl font-semiboldx mb-5">
          {blog.title}
        </AnimatedHeading>

        <div className="rounded-2xl overflow-hidden shadow">

          <div className="bg-orange-500 flex items-center justify-between px-5 py-3">
            <button onClick={() => navigate(-1)} className="text-white text-lg">
              ←
            </button>

            <div className="flex items-center gap-3">
              <span className="border border-white text-white text-xs px-4 py-1 rounded-full">
                {blog.tag}
              </span>
              <span className="text-white text-xs">{blog.date}</span>
            </div>
          </div>

          <img
            src={blog.image}
            className="w-full h-[420px] object-cover"
          />

         <div className="p-6 text-base text-gray-700 leading-relaxed space-y-6 whitespace-pre-line rounded-lg">
  {blog.content ? blog.content : "Full article coming soon..."}
</div>

        </div>
      </div>
    </section>
  );
};

/* ---------------- ROUTES ---------------- */
const Blogs = () => {
  return (
    <Routes>
      <Route path="/" element={<BlogList />} />
      <Route path="/:id" element={<BlogDetail />} />
    </Routes>
  );
};

export default Blogs;
