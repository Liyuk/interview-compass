import type { Perspective } from './content-model';

export interface PerspectiveQuestionInput {
  locale: 'zh-CN' | 'en';
  question: string;
  intent: string;
  roles: readonly string[];
  careerTracks: readonly string[];
  scenarios: readonly string[];
  primaryCapability: string;
}

export interface PerspectiveInference {
  perspective: Perspective;
  confidence: 'high' | 'low';
  reasons: string[];
}

const interviewerText = /面试官|设计面试|面试流程|面试评价|面试时你会问候选人|追问候选人|interviewer|as an interviewer|interview design|design(?:ing)? an interview|interview loop|interviewer evidence|hiring calibration|what would you ask (?:a |the )?candidate/i;
const managerText = /团队管理者|作为管理者|管理团队|带团队|下属|员工|团队成员|绩效对话|辅导成员|团队诊断|team manager|people manager|as a manager|manage (?:a|the|your) team|direct reports?|coach(?:ing)? (?:a|your) (?:team member|report)|performance conversation|team diagnosis/i;
const candidateText = /请描述你|请举例|结合你的经历|回顾你|讲一个你|你的经历|你做出的|你负责的|你主导的|describe a time you|tell me about a time|your experience|you made|you led|you owned|what did you do/i;

function recordText(record: PerspectiveQuestionInput) {
  return `${record.question}\n${record.intent}`;
}

export function inferQuestionPerspective(pair: readonly PerspectiveQuestionInput[]): PerspectiveInference {
  const records = [...pair].sort((a, b) => a.locale.localeCompare(b.locale));
  const allText = records.map(recordText).join('\n');
  const interviewerMatches = interviewerText.test(allText);
  const managerMatches = managerText.test(allText);
  const candidateMatches = candidateText.test(allText);
  const reasons: string[] = [];

  if (interviewerMatches && !managerMatches) {
    reasons.push('Explicit interviewer-facing wording identifies the interviewer as the respondent.');
    return { perspective: 'interviewer', confidence: 'high', reasons };
  }
  if (managerMatches && !interviewerMatches) {
    reasons.push('The prompt explicitly asks about leading a team, direct reports, or a management conversation.');
    return { perspective: 'manager', confidence: 'high', reasons };
  }
  if (candidateMatches && !interviewerMatches && !managerMatches) {
    reasons.push('The prompt explicitly asks the respondent to describe their own work or experience.');
    return { perspective: 'candidate', confidence: 'high', reasons };
  }
  if (interviewerMatches && managerMatches) {
    reasons.push('The prompt contains both interviewer and management cues; a human should determine who is expected to answer.');
  } else if (managerMatches && candidateMatches) {
    reasons.push('The prompt combines personal-experience and management cues; the role of the expected respondent is ambiguous.');
  } else {
    reasons.push('No explicit respondent perspective is evident; candidate is a provisional default for general interview prompts.');
  }
  return { perspective: 'candidate', confidence: 'low', reasons };
}
