import portfolioData from './portfolio.json';

export const personalInfo = portfolioData.personal_info;
export const contact = portfolioData.contact;
export const professionalSummary = portfolioData.professional_summary;
export const skills = portfolioData.skills;
export const experiences = portfolioData.experience;
export const projects = portfolioData.projects;
export const education = portfolioData.education;
export const achievements = portfolioData.certifications_and_achievements;
export const metrics = portfolioData.metrics;
export const config = portfolioData.portfolio_config;

export const featuredProjects = projects.filter(p => p.featured);
export const otherProjects = projects.filter(p => !p.featured);
