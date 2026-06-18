bash

cat > /mnt/user-data/outputs/style-final.css << 'EOF'
:root {
  --navy: #0A1428;
  --electric-blue: #0D7FFF;
  --violet: #7C3AED;
  --cyan: #06B6D4;
  --slate: #5A6B7D;
  --white: #FFFFFF;
  --off-white: #F9F7F4;
  --light-gray: #EDE9E1;
  --border: #E0DCD6;
  --radius: 8px;
  --shadow: 0 2px 12px rgba(10, 20, 40, 0.08);
  --shadow-md: 0 4px 20px rgba(10, 20, 40, 0.12);
  --shadow-lg: 0 12px 40px rgba(13, 127, 255, 0.15);
  --transition: 0.3s ease;
}

*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: var(--white);
  color: var(--navy);
  line-height: 1.65;
  font-size: 16px;
}

h1, h2, h3, h4 {
  line-height: 1.25;
}

h2 {
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 2rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--navy) 0%, var(--electric-blue) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

a {
  text-decoration: none;
  color: inherit;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
}

.container-sm {
  max-width: 700px;
}

/* NAVBAR */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(10, 20, 40, 0.1);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: box-shadow var(--transition);
}

.navbar.scrolled {
  box-shadow: var(--shadow);
}

.logo {
  font-weight: 700;
  background: linear-gradient(135deg, var(--navy), var(--electric-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-links a {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--slate);
  transition: color var(--transition);
}

.nav-links a:hover {
  color: var(--navy);
}

.burger {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--navy);
}

.nav-mobile {
  display: none;
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  background: var(--white);
  flex-direction: column;
  padding: 1rem 2rem;
  border-bottom: 1px solid var(--border);
  z-index: 999;
}

.nav-mobile.open {
  display: flex;
}

/* HERO */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 0 4rem;
  margin-top: 64px;
  background: linear-gradient(135deg, rgba(13, 127, 255, 0.05) 0%, rgba(124, 58, 237, 0.03) 100%);
}

.hero-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 3.5rem);
  color: var(--navy);
  margin-bottom: 1.5rem;
  line-height: 1.1;
  font-weight: 800;
}

.hero-subtitle {
  font-size: 1.1rem;
  color: var(--slate);
  margin-bottom: 2.5rem;
  line-height: 1.8;
}

.hero-meta {
  display: flex;
  gap: 2rem;
  margin: 2.5rem 0;
}

.meta-item {
  display: flex;
  gap: 0.8rem;
}

.meta-icon {
  font-size: 1.8rem;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.75rem;
  border-radius: var(--radius);
  font-weight: 600;
  font-size: 0.9rem;
  border: none;
  cursor: pointer;
  transition: all var(--transition);
}

.btn-primary {
  background: linear-gradient(135deg, var(--electric-blue), var(--violet));
  color: var(--white);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-secondary {
  background: transparent;
  color: var(--navy);
  border: 1.5px solid var(--electric-blue);
}

.btn-secondary:hover {
  background: rgba(13, 127, 255, 0.08);
}

/* HERO PROFILE */
.hero-profile-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  aspect-ratio: 1;
  max-width: 400px;
}

.hero-profile-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(-45deg, var(--violet), #8B5CF6, #A78BFA, var(--violet));
  background-size: 400% 400%;
  border-radius: 20px;
  opacity: 0.15;
  animation: gradientShift 8s ease infinite;
  filter: blur(60px);
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.profile-glow {
  position: absolute;
  inset: -20px;
  background: radial-gradient(circle, rgba(124, 58, 237, 0.2) 0%, transparent 70%);
  border-radius: 50%;
  animation: glowPulse 4s ease-in-out infinite;
}

@keyframes glowPulse {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.1); }
}

.hero-profile {
  position: relative;
  z-index: 2;
}

.profile-image {
  position: relative;
  width: 280px;
  height: 280px;
}

.profile-image img {
  width: 100%;
  height: 100%;
  border-radius: 16px;
  object-fit: cover;
  border: 3px solid var(--white);
  box-shadow: 0 20px 50px rgba(124, 58, 237, 0.25);
  transition: all var(--transition);
}

.profile-image:hover img {
  transform: scale(1.05) translateY(-5px);
}

.profile-badge {
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: linear-gradient(135deg, var(--electric-blue), var(--violet));
  color: var(--white);
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 700;
  z-index: 4;
}

/* SECTIONS */
.section {
  padding: 6rem 0;
}

.section-light {
  background: var(--off-white);
}

.section-intro {
  font-size: 1rem;
  color: var(--slate);
  max-width: 600px;
  margin-bottom: 3rem;
}

/* ABOUT */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 2.5rem;
}

.about-card {
  background: var(--white);
  padding: 2rem;
  border-radius: var(--radius);
  border: 1px solid var(--border);
}

.about-card h3 {
  margin-bottom: 1.2rem;
  color: var(--electric-blue);
}

.about-card ul {
  list-style: none;
}

.about-card li {
  padding: 0.5rem 0;
  color: var(--slate);
  font-size: 0.95rem;
  border-bottom: 1px solid var(--light-gray);
}

/* TIMELINE */
.timeline {
  position: relative;
  padding-left: 3rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--electric-blue), var(--violet), transparent);
}

.timeline-item {
  position: relative;
  margin-bottom: 2.5rem;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -3.5rem;
  top: 0.2rem;
  width: 12px;
  height: 12px;
  background: var(--electric-blue);
  border-radius: 50%;
  border: 3px solid var(--white);
  box-shadow: 0 0 0 3px var(--electric-blue);
  transition: all var(--transition);
}

.timeline-item:hover::before {
  background: var(--violet);
  box-shadow: 0 0 0 3px var(--violet), 0 0 12px var(--violet);
}

.timeline-year {
  font-size: 0.75rem;
  font-weight: 700;
  background: linear-gradient(90deg, var(--electric-blue), var(--violet));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.timeline-org {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--electric-blue);
  margin-bottom: 0.6rem;
}

/* CAROUSEL */
.carousel-container {
  position: relative;
  width: 100%;
  height: 250px;
  border-radius: var(--radius);
  overflow: hidden;
  background: var(--light-gray);
  margin-bottom: 1.5rem;
}

.carousel-slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity var(--transition);
}

.carousel-slide.active {
  opacity: 1;
}

.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(10, 20, 40, 0.7);
  color: var(--white);
  border: none;
  padding: 0.75rem 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 10;
}

.carousel-btn.prev {
  left: 1rem;
}

.carousel-btn.next {
  right: 1rem;
}

.carousel-indicators {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 10;
}

.indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all var(--transition);
}

.indicator.active {
  background: var(--white);
  width: 24px;
  border-radius: 4px;
}

/* PROJECTS */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
}

.project-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 0;
  overflow: hidden;
  transition: all var(--transition);
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem 2rem 0;
}

.project-badge {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0.25rem 0.7rem;
  background: rgba(13, 127, 255, 0.1);
  color: var(--electric-blue);
  border-radius: 50px;
  white-space: nowrap;
}

.project-card > p {
  padding: 0 2rem;
  font-size: 0.95rem;
  line-height: 1.7;
  flex: 1;
  color: var(--slate);
}

.project-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  padding: 0 2rem 1.5rem;
}

.project-skills span {
  font-size: 0.78rem;
  padding: 0.25rem 0.7rem;
  background: var(--light-gray);
  border-radius: 50px;
  color: var(--navy);
}

/* CONSTELLATION */
.constellation-wrapper {
  position: relative;
  width: 100%;
  height: 700px;
  background: linear-gradient(135deg, rgba(13, 127, 255, 0.08), rgba(124, 58, 237, 0.06));
  border-radius: var(--radius);
  margin: 2rem 0;
  border: 1px solid var(--border);
  overflow: hidden;
}

.constellation-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.constellation-node {
  position: absolute;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 600;
  font-size: 0.8rem;
  line-height: 1.3;
  cursor: pointer;
  border: 3px solid var(--white);
  transition: all var(--transition);
  color: var(--white);
  user-select: none;
}

.constellation-node:hover,
.constellation-node.active {
  transform: scale(1.25);
  filter: brightness(1.3);
  z-index: 10;
}

.constellation-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.connection {
  stroke-width: 2;
  stroke-opacity: 0.3;
  transition: all var(--transition);
}

.connection.active {
  stroke-width: 3;
  stroke-opacity: 1;
  filter: drop-shadow(0 0 8px currentColor);
}

/* SKILLS TOOLTIP */
.skills-tooltip {
  position: fixed;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 2rem;
  box-shadow: var(--shadow-lg);
  max-width: 400px;
  z-index: 1001;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: slideIn 0.3s ease;
}

.skills-tooltip.hidden {
  display: none;
}

@keyframes slideIn {
  from { opacity: 0; transform: translate(-50%, -55%); }
  to { opacity: 1; transform: translate(-50%, -50%); }
}

.tooltip-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--slate);
}

.tooltip-section {
  margin-top: 1.5rem;
}

.tooltip-section ul {
  list-style: none;
  margin-top: 0.5rem;
}

.tooltip-section li {
  padding: 0.3rem 0;
  color: var(--slate);
  font-size: 0.9rem;
}

/* SKILLS GRID */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.skill-category h3 {
  margin-bottom: 1rem;
  color: var(--electric-blue);
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tags span {
  font-size: 0.8rem;
  padding: 0.4rem 0.8rem;
  background: var(--light-gray);
  border-radius: 50px;
  color: var(--navy);
  transition: all var(--transition);
}

.skill-tags span:hover {
  background: rgba(13, 127, 255, 0.15);
  color: var(--electric-blue);
}

/* RESEARCH */
.research-featured {
  background: linear-gradient(135deg, var(--navy), var(--electric-blue));
  color: var(--white);
  padding: 2.5rem;
  border-radius: var(--radius);
  margin-bottom: 2rem;
  text-align: center;
  box-shadow: var(--shadow-lg);
}

.research-featured h3 {
  color: var(--white);
}

.research-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.5rem;
}

.research-item {
  background: var(--white);
  border: 1px solid var(--border);
  padding: 1.5rem;
  border-radius: var(--radius);
  transition: all var(--transition);
}

.research-item:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

/* CONTACT */
.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.contact-card {
  background: var(--off-white);
  border: 1px solid var(--border);
  padding: 2rem 1.5rem;
  border-radius: var(--radius);
  text-align: center;
  transition: all var(--transition);
}

.contact-card:hover {
  background: rgba(13, 127, 255, 0.08);
  border-color: var(--electric-blue);
  transform: translateY(-3px);
  box-shadow: var(--shadow-lg);
}

.contact-emoji {
  font-size: 2rem;
  display: block;
  margin-bottom: 0.5rem;
}

/* FOOTER */
.footer {
  padding: 3rem 0;
  background: var(--off-white);
  border-top: 1px solid var(--border);
  text-align: center;
}

/* REVEAL */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .hero-container {
    grid-template-columns: 1fr;
  }
  .about-grid {
    grid-template-columns: 1fr;
  }
  .constellation-wrapper {
    height: 600px;
  }
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  .burger {
    display: block;
  }
  .projects-grid {
    grid-template-columns: 1fr;
  }
  .contact-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }
  .hero-title {
    font-size: 2rem;
  }
  .constellation-wrapper {
    height: 400px;
  }
}
EOF
echo "done"
Sortie
