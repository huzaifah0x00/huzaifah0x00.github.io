export const animateToAboutSection = () => {
  const aboutSection = document.getElementById("about-section");
  aboutSection!.scrollIntoView({ behavior: "smooth" });
};

export const animateToPortfolioSection = () => {
  const portfolioSection = document.getElementById("portfolio-section");
  portfolioSection!.scrollIntoView({ behavior: "smooth" });
};

export const animateToContactSection = () => {
  const contactSection = document.getElementById("contact-section");
  contactSection!.scrollIntoView({ behavior: "smooth" });
};
