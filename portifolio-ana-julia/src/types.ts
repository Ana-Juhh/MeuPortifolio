export interface Translation {
  nav_projects: string;
  nav_skills: string;
  nav_experience: string;
  nav_about: string;
  hire_me: string;
  hero_availability: string;
  hero_desc: string;
  hero_view_work: string;
  hero_download_cv: string;
  hero_exp_label: string;
  hero_exp_value: string;
  stat_graduated: string;
  stat_graduated_sub: string;
  stat_student: string;
  stat_student_sub: string;
  stat_projects_sub: string;
  stat_ai: string;
  stat_ai_sub: string;
  skills_title: string;
  skills_subtitle: string;
  skills_web: string;
  skills_backend: string;
  skills_integrations: string;
  skills_ai: string;
  projects_title: string;
  projects_subtitle: string;
  projects_view_all: string;
  project_relivro_desc: string;
  project_todo_desc: string;
  btn_source: string;
  btn_view: string;
  journey_title: string;
  journey_present: string;
  journey_ongoing: string;
  journey_completed: string;
  exp1_title: string;
  exp1_subtitle: string;
  exp1_desc: string;
  exp2_title: string;
  exp2_subtitle: string;
  exp2_desc: string;
  exp3_title: string;
  exp3_subtitle: string;
  exp3_desc: string;
  cta_title: string;
  cta_desc: string;
  cta_btn: string;
  typewriter_roles: string[];
}

export interface Project {
  id: string;
  title: string;
  descPt: string;
  descEn: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  codeUrl: string;
  techDetails: string[];
}

export interface SkillCategory {
  id: string;
  titleKey: 'skills_web' | 'skills_backend' | 'skills_integrations' | 'skills_ai';
  icon: string;
  colorClass: string;
  badgeBg: string;
  skills: string[];
}

export interface Experience {
  id: string;
  titleKey: 'exp1_title' | 'exp2_title' | 'exp3_title';
  subKey: 'exp1_subtitle' | 'exp2_subtitle' | 'exp3_subtitle';
  descKey: 'exp1_desc' | 'exp2_desc' | 'exp3_desc';
  statusKey: 'journey_present' | 'journey_ongoing' | 'journey_completed';
  statusColor: string;
  dotColor: string;
}
