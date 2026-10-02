from PIL import Image, ImageDraw, ImageFont
import os

W, H = 1920, 1080
OUT = os.path.expanduser("~/workspace/krynex-agency/assets/video/cards")
os.makedirs(OUT, exist_ok=True)

def F(sz, bold=False, mono=False):
    fam = "DejaVuSansMono" if mono else "DejaVuSans"
    p = f"/usr/share/fonts/truetype/dejavu/{fam}{'-Bold' if bold else ''}.ttf"
    return ImageFont.truetype(p, sz)

BG = "#0A0A0F"; IND = "#6366F1"; RED = "#EF4444"; AMB = "#F59E0B"
GRN = "#22C55E"; MUT = "#9BA0B4"; WHT = "#FFFFFF"

def base():
    img = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(img)
    for y in range(0, H, 90): d.line([(0,y),(W,y)], fill="#12121c", width=1)
    for x in range(0, W, 90): d.line([(x,0),(x,H)], fill="#12121c", width=1)
    return img, d

def center(d, y, text, font, fill):
    d.text((W//2, y), text, font=font, fill=fill, anchor="mm")

def kicker(d, y, text, color=IND):
    # letterspaced kicker
    spaced = " ".join(list(text.upper()))
    center(d, y, spaced, F(44, True), color)

def save(img, name):
    img.save(f"{OUT}/{name}.png"); print("card", name)

# 1. HOOK
img, d = base()
kicker(d, 300, "krynex audit files", RED)
center(d, 480, "Your website is", F(110, True), WHT)
center(d, 640, "LYING TO YOU.", F(150, True), RED)
center(d, 800, "Here's the proof.", F(54), MUT)
save(img, "c01_hook")

# 2. looks perfect / under surface
img, d = base()
kicker(d, 320, "the illusion", IND)
center(d, 500, "It looks perfect.", F(120, True), WHT)
center(d, 660, "But under the surface?", F(96, True), AMB)
center(d, 810, "broken code · silent killers · lost traffic", F(52), MUT)
save(img, "c02_surface")

# 3. we are krynex
img, d = base()
d.rectangle([0, 0, W, 14], fill=IND)
center(d, 420, "WE ARE", F(72, True), MUT)
center(d, 580, "KRYNEX", F(190, True), IND)
center(d, 740, "a website audit agency", F(64), WHT)
center(d, 850, "we see what you can't", F(52), MUT)
save(img, "c03_who")

# 4. x-ray
img, d = base()
kicker(d, 240, "what we do", IND)
center(d, 400, "We X-RAY websites.", F(130, True), WHT)
for i, (t, c) in enumerate([("TECHNICAL SEO", IND), ("PERFORMANCE", GRN), ("USER EXPERIENCE", AMB)]):
    y = 580 + i*110
    d.rounded_rectangle([W//2-420, y-42, W//2+420, y+42], radius=42, fill="#14141f", outline=c, width=3)
    center(d, y, t, F(52, True), WHT)
save(img, "c04_xray")

# 5. 12 issues 2 critical
img, d = base()
kicker(d, 240, "real audit · real findings", RED)
center(d, 430, "12", F(260, True), WHT)
center(d, 590, "ISSUES FOUND", F(72, True), MUT)
d.rounded_rectangle([W//2-330, 680, W//2+330, 790], radius=24, fill="#1c0f14", outline=RED, width=4)
center(d, 735, "2 CRITICAL", F(64, True), RED)
save(img, "c05_issues")

# 6. localhost code
img, d = base()
kicker(d, 200, "exhibit a", RED)
center(d, 330, "Canonical URLs pointed to…", F(64, True), WHT)
d.rounded_rectangle([260, 420, W-260, 700], radius=20, fill="#101018", outline="#2a2a3a", width=2)
lines = ['<link rel="canonical"', '  href="http://localhost:3100" />']
yy = 500
for ln in lines:
    d.text((W//2, yy), ln, font=F(52, False, True), fill=RED, anchor="mm"); yy += 80
center(d, 800, "the developer's own laptop. In production.", F(54), MUT)
save(img, "c06_localhost")

# 7. triple hit
img, d = base()
kicker(d, 220, "exhibit b · c · d", RED)
rows = [("SITEMAP", "BROKEN", RED), ("DIRECTORY", "EMPTY", AMB), ("ANALYTICS", "ZERO", RED)]
yy = 400
for label, val, c in rows:
    d.text((W//2-460, yy), label, font=F(56, True), fill=MUT, anchor="lm")
    d.text((W//2+460, yy), val, font=F(72, True), fill=c, anchor="rm")
    yy += 130
center(d, 860, "They were flying blind — and had no idea.", F(52), WHT)
save(img, "c07_triple")

# 8. bar chart
img, d = base()
kicker(d, 130, "the full picture", IND)
center(d, 230, "CATEGORY HEALTH", F(60, True), WHT)
bars = [("Technical SEO", 42, RED), ("Performance", 92, GRN), ("Accessibility", 85, "#38BDF8"),
        ("Security", 95, IND), ("Content & UX", 55, AMB)]
yy = 330
for label, v, c in bars:
    d.text((180, yy), label, font=F(48, True), fill=WHT, anchor="lm")
    d.text((W-180, yy), f"{v}/100", font=F(48, True), fill=c, anchor="rm")
    yy += 62
    bw = int((W-360) * v/100)
    d.rounded_rectangle([180, yy, W-180, yy+34], radius=17, fill="#1a1a26")
    d.rounded_rectangle([180, yy, 180+bw, yy+34], radius=17, fill=c)
    yy += 78
save(img, "c08_bars")

# 9. steps 1-2
img, d = base()
kicker(d, 220, "how we help", GRN)
for i, (n, t, sub) in enumerate([("01", "SCAN", "hundreds of checks in minutes"),
                                 ("02", "EXPOSE", "plain-English report, zero jargon")]):
    y = 420 + i*220
    d.rounded_rectangle([W//2-560, y-90, W//2+560, y+90], radius=28, fill="#12141d", outline=GRN, width=3)
    d.text((W//2-500, y), n, font=F(64, True), fill=GRN, anchor="lm")
    d.text((W//2-360, y-28), t, font=F(72, True), fill=WHT, anchor="lm")
    d.text((W//2-360, y+42), sub, font=F(48), fill=MUT, anchor="lm")
save(img, "c09_steps12")

# 10. steps 3-4
img, d = base()
kicker(d, 220, "how we help", GRN)
for i, (n, t, sub) in enumerate([("03", "FIX ROADMAP", "ranked by impact, fix what matters first"),
                                 ("04", "VERIFY", "re-tested after fixes — truly solved")]):
    y = 420 + i*220
    d.rounded_rectangle([W//2-560, y-90, W//2+560, y+90], radius=28, fill="#12141d", outline=GRN, width=3)
    d.text((W//2-500, y), n, font=F(64, True), fill=GRN, anchor="lm")
    d.text((W//2-360, y-28), t, font=F(72, True), fill=WHT, anchor="lm")
    d.text((W//2-360, y+42), sub, font=F(48), fill=MUT, anchor="lm")
save(img, "c10_steps34")

# 11. motto
img, d = base()
kicker(d, 300, "our motto", IND)
center(d, 470, "We find what your", F(100, True), WHT)
center(d, 620, "website is HIDING.", F(110, True), IND)
save(img, "c11_motto")

# 12. stop guessing
img, d = base()
center(d, 420, "Stop guessing.", F(120, True), WHT)
center(d, 580, "Stop losing customers", F(96, True), RED)
center(d, 700, "to invisible errors.", F(96, True), RED)
save(img, "c12_stop")

# 13. CTA
img, d = base()
d.rectangle([0, 0, W, 14], fill=GRN); d.rectangle([0, H-14, W, H], fill=GRN)
kicker(d, 280, "limited offer", GRN)
center(d, 450, "Get your FREE", F(120, True), WHT)
center(d, 590, "audit teaser", F(120, True), GRN)
center(d, 740, "Chat with us today.", F(64), WHT)
d.rounded_rectangle([W//2-330, 820, W//2+330, 920], radius=50, fill=GRN)
center(d, 870, "Start the conversation →", F(52, True), "#0A0A0F")
save(img, "c13_cta")

# 14. end card
img, d = base()
center(d, 440, "KRYNEX", F(200, True), IND)
center(d, 600, "We find what your website is hiding.", F(56), WHT)
center(d, 760, "hello@krynex.in", F(60, True), MUT)
save(img, "c14_end")
print("ALL CARDS DONE")
